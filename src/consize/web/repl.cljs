(ns consize.web.repl
	(:use [clojure.string :only [split]]
				[consize.web.helpers :only [log]]))

(def wub)
(def *out*)

(defn read-line []
	(log "> read-line")
	(.Prompt wub "true"
					 (fn [ds]
						 (set! *out* ds)
						 ds)
					 ;(fn [ds]
						; (nil? ds)))
					 )
	(.Focus wub))

(defn flush []
	(log "> flush")
	(set! *out* nil))

(defn init [dom]
	"Initialize repl on a dom and set print-fn."
	(let [repl (.jqconsole (js/jQuery dom))]
		(set! wub repl)
		;; Set print function.
		(set! *print-fn* #(.Write repl % nil false))

		(.RegisterMatching repl "[" "]" "brackets")
		(.RegisterMatching repl "{" "}" "brackets")
		(.RegisterMatching repl "(" ")" "brackets")
		;; Register workaround shortcut for backslashes on windows with chrome.
		(.RegisterShortcut
			repl "55"
			(fn []
				(.SetPromptText repl "\\")))

		;(.Prompt repl "true"
		;				 (fn [ds]
		;					 (println "Consize returns"
		;					 	 (first ((VM "apply") (first ((VM "func") VM
		;										 (first (apply (VM "tokenize") ((VM "uncomment")
		;										 (reduce str (interpose " " (split ds #"\s+")))))))) ()))))
		;					 ;(consize.web.vm/start (split ds #"\s+")))
		;				 (fn [ds] (nil? ds)))
		(.Focus repl)))
