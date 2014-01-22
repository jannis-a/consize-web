(ns consize.web.core
	(:use [clojure.string :only [split]])
	(:require [cljs.reader :as reader]
						[consize.core :as consize]
						[consize.web.filesystem :refer [slurp spit]]))

;; Consize stacks, used for fast continuation instead of using Consize words.
(def *cs*)
(def *ds*)
(def *dict*)
;; If true, write current stacks to above vars.
(def *resume*)

(def escape-chars
	^{:doc     "Escape characters for read-string."
		:private true} {
	"\\backspace" "\b",
	"\\formfeed"  "\f"
	"\\newline"   "\n"
	"\\return"    "\r",
	"\\tab"       "\t",
	"\\space"     " ",
})

(defn current-time-millis []
	"Get the current system time in milliseconds."
	(.now js/Date))

(defn operating-system []
	"Get the operating system."
	(let [os? (fn [s] (not= (.indexOf (.-appVersion js/navigator) s) -1))]
		(cond (os? "Win") "Windows"
					(os? "Mac") "Mac OS X"
					(os? "X11") "UNIX"
					(os? "Linux") "Linux")))

(defn char? [s]
	"Check if string is a single character or escape character."
	(let [len (.-length s)]
		(or (= len 1)
				(and (= len 2)
						 (= (subs s 0 1) "\\")))))

(defn unicode? [s]
	"Check if string is a unicode character. Returns nil, 8 (oct) or 16 (hex)"
	(let [c (subs s 0 2)]
		(cond (= c "\\o") 8
					(= c "\\u") 16)))

(defn convert-unicode [s]
	"Converts a octal or hexadecimal unicode character to it's symbol."
	(.fromCharCode js/String (js/parseInt (subs s 2) (unicode? s))))

(defn read-string [s]
	"Workaround for broken read-string from ClojureScript."
	(let [e (escape-chars s)]
		(cond (not-empty e) e
					(unicode? s) (convert-unicode s)
					:else (reader/read-string s))))

(defn read-line []
	"Exit Consize so the UI gets responsive again."
	(set! *resume* true)
	"exit")

(defn reset-stacks []
	"Reset all saved Consize stacks."
	(set! *cs* nil)
	(set! *ds* nil)
	(set! *dict* nil))

(defn init [args]
	"Run Consize. If stacks are not set, do initially run else do continuation."
	(set! *resume* false)
	;; Bind functions in consize.core namespace to the new ones.
	(binding [consize/char? char?
						consize/read-string read-string
						consize/read-line read-line
						consize/slurp slurp
						consize/spit spit
						consize/Error :default
						consize/Exception :default
						consize/current-time-millis current-time-millis
						consize/operating-system operating-system]
		(let [args (split args #"\s+")
					*cs* (concat args (conj *cs* "repl" "printer"))
					out (apply consize/init (if *dict* [*cs* *ds* *dict*] [args]))]
			;; Print and reset stacks on exit.
			(when-not *resume*
				(consize/printer out)
				(reset-stacks)))))
