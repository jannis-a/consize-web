(ns consize.web.core
	(:use-macros [dommy.macros :only [by-id]])
	(:use [clojure.string :only [lower-case split trim]]
				[dommy.core :only [set-text! text]]
				[consize.web.filesystem :only [slurp spit]])
	(:require-macros [cljs.core.async.macros :refer [go]])
	(:require [cljs.reader :as reader]
						[cljs.core.async :refer [<! chan loop timeout]]))

;; Prevent warning on compile.
(def VM)
;; Replace Java Error and Exception with JavaScript Error.
(def Error js/Error)
(def Exception Error)
;; Consize stacks, used for fast continuation instead of using Consize words.
(def *cs*)
(def *ds*)
(def *dict*)
;; Current repl, needed for calling read-line without parameters.
(def *repl*)

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

(defn toggle-state []
	"Toggles text on a dom element showing the current state."
	(let [dom (by-id "#state")]
		(set-text! dom (if (= (text dom) "Idle") "Working" "Idle"))))

(defn- start [args]
	"Transform arguments to initially run consize"
	(first (apply (VM "tokenize") ((VM "uncomment")
	(reduce str (interpose " " args))))))

(defn- continue [args]
	"Join callstack with 'printer' and 'repl', then concat with arguments."
	(concat args (conj *cs* "repl" "printer")))

(defn run [args]
	"Run Consize. If stacks are not set, do initially run else do continuation."
	(let [args (split args #"\s+")
				dict (if *dict* *dict* VM)
				cs (if *cs* (continue args) (start args))
				ds (if *ds* *ds* ())]
		(first ((VM "apply") (first ((VM "func") dict cs)) ds))))

(defn init []
	"Initialize repl on a dom and set print-fn."
	(set! *repl* (.jqconsole (js/jQuery "#repl")))
	(set-print-fn! #(.Write *repl* % nil false))
	;; Configure repl.
	(.SetPromptLabel *repl* "")
	(.RegisterShortcut *repl* "55" (fn []
		(.SetPromptText *repl* (str (.GetPromptText *repl*) "\\"))))
	;; Start Consize.
	(run "\\ prelude-dump.txt run say-hi"))

(defn read-line []
	"Start new jqconsole prompt. Exits Consize so the UI gets responsive again."
	(.Prompt *repl* "true" (fn [args]
		;; Without delay (timeout) toggle not visible, need go-block for this.
		(go (toggle-state)
				(<! (timeout 10))
				(run args)
				(toggle-state))))
	(.Focus *repl*)
	"exit")

(defn unicode? [s]
	"Check if string is a unicode character. Returns nil, 8 (oct) or 16 (hex)"
	(let [c (subs s 0 2)]
		(cond (= c "\\o") 8
					(= c "\\u") 16)))

(defn char? [s]
	"Check if string is a single character or escape character."
	(let [len (.-length s)]
		(or (= len 1)
				(and (= len 2)
						 (= (subs s 0 1) "\\")))))

(defn convert-unicode [s]
	"Converts a octal or hexadecimal character to it's symbol."
	(.fromCharCode js/String (js/parseInt (subs s 2) (unicode? s))))

(defn read-string [s]
	"Workaround for broken read-string from clojurescript."
	(let [escape (escape-chars s)]
		(cond (not-empty escape) escape
					(unicode? s) (convert-unicode s)
					:else (reader/read-string s))))

(defn operating-system []
	"Get the operating system."
	(let [os? (fn [s] (not= (.indexOf (.-appVersion js/navigator) s) -1))]
		(cond (os? "Win") "Windows"
					(os? "Mac") "Mac OS X"
					(os? "X11") "UNIX"
					(os? "Linux") "Linux")))

(defn current-time-millis []
	"Get the current system time in milliseconds."
	(.now js/Date))

(defn- wordstack? [s] (and (not (empty? s)) (seq? s) (every? #(string? %) s)))

(defn- binary [op]
	(fn [y x & r] {:pre [(integer? (read-string x)) (integer? (read-string y))]}
		(conj r (str (op (read-string x) (read-string y))))))
(defn- pred [op]
	(fn [y x & r] {:pre [(integer? (read-string x)) (integer? (read-string y))]}
		(conj r (if (op (read-string x) (read-string y)) "t" "f"))))

(def VM {
;; Words for stack shuffling
"swap" (fn [y x & r] (conj r y x)),
"dup"  (fn [x & r] (conj r x x)),
"drop" (fn [x & r] (sequence r)),
"rot"  (fn [z y x & r] (conj r y z x)),

;; Words for type and equality
"type" (fn [itm & r]
	(cond (string? itm) (conj r "wrd")
				(seq?    itm) (conj r "stk")
				(map?    itm) (conj r "map")
				(fn?     itm) (conj r "fct")
				(nil?    itm) (conj r "nil") ; experimental
				:else         (conj r "_|_"))), ; Exit because of internal error

"equal?" (fn [x y & r] (conj r (if (= x y) "t" "f"))),
"identical?" (fn [x y & r] (conj r (if (identical? x y) "t" "f"))), ; optional

;; Words for stacks
"emptystack" (fn [& r] (conj r ())),
"push" (fn [x s & r] {:pre [(seq? s)]} (conj r (conj s x))),
"top"  (fn [s & r] {:pre [(or (seq? s) (nil? s))]} (conj r (first s))),
"pop"  (fn [s & r] {:pre [(or (seq? s) (nil? s))]} (conj r (rest s))),
"concat" (fn [s2 s1 & r] {:pre [(seq? s1) (seq? s2)]} (conj r (concat s1 s2))),
"reverse" (fn [s & r] {:pre [(seq? s)]} (conj r (reverse s))),

;; Words for maps; highly redundant for performance reasons
"mapping" (fn [s & r] {:pre [(seq? s)]} (conj r (apply hash-map s))),
"unmap" (fn [m & r] {:pre [(map? m)]}
	(conj r (sequence (reduce concat (seq m)))))
"keys" (fn [m & r] {:pre [(map? m)]} (conj r (map identity (keys m)))),
"assoc" (fn [m k v & r] {:pre [(map? m)]} (conj r (assoc m k v))),
"dissoc" (fn [m k & r] {:pre [(map? m)]} (conj r (dissoc m k))),
"get" (fn [d m k & r] {:pre [(map? m)]} (conj r (get m k d))),
"merge" (fn [m1 m2 & r] {:pre [(map? m1) (map? m2)]} (conj r (merge m2 m1))),

;; Words for Words
"word" (fn [s & r] {:pre [(wordstack? s)]} (conj r (reduce str s))),
"unword" (fn [w & r] {:pre [w (string? w)]} (conj r (map str (seq w)))),
"char" (fn [w & r] {:pre [(string? w) (char? (read-string w))]}
	(conj r (str (read-string w)))),
; "repr-word" (fn [w & r] {:pre [w (string? w)]} (conj r w)),

;; Words for I/O (console i.e. stdin/stdout)
"print" (fn [w & r] {:pre [(string? w)]} (do (print w) (sequence r))),
"flush" (fn [& r] (do (flush) (sequence r))),
"read-line" (fn [& r] (conj r (read-line))), ; what about exceptions?

;; Words for I/O (files etc.)
"slurp" (fn [w & r] {:pre [(string? w)]} (conj r (slurp w))),
"spit" (fn [file data & r] {:pre [(string? file) (string? data)]}
	(do (spit file data) (sequence r))),
"spit-on" (fn [file data & r] {:pre [(string? file) (string? data)]}
	(do (spit file data :append true) (sequence r))),

;; Words supporting parsing
"uncomment" (fn [w & r] {:pre [(string? w)]}
	(conj r (reduce str (interpose "\r\n" (split w #"\s*%.*[(\r\n)\r\n]"))))),
"tokenize" (fn [w & r] {:pre [(string? w)]}
	(let [s (seq (split (trim w) #"\s+"))] (conj r (if (= s '("")) () s)))),
"undocument" (fn [w & r] {:pre [(string? w)]}
	(conj r (reduce str (interpose "\r\n"
		(map second (re-seq #"[(\r\n)\r\n]%?>> (.*)[(\r\n)\r\n]" w)))))),

;; OS (http://docs.oracle.com/javase/1.4.2/docs/api/java/lang/System.html)
;> Replace words depending on the virtual machine implementations.
;"current-time-millis" (fn [& r] (conj r (str (System/currentTimeMillis)))),
;"operating-system" (fn [& r] (conj r (str (System/getProperty "os.name")))),
"current-time-millis" (fn [& r] (conj r (str (current-time-millis)))),
"operating-system" (fn [& r] (conj r (str (operating-system)))),
;>

;; Propper stack effects are secured by 'stepcc' before and after 'callcc' etc.
;; If used as functions the user is responsible to obey stack effects
"call/cc"  (list (fn [cs ds & r] (conj r (conj () (rest ds) cs) (first ds)))),
"continue" (list (fn [cs ds & r] (conj r (second ds) (first ds)))),
"get-dict" (list (fn [cs ds dict & r] (conj r dict (conj ds dict) cs))),
"set-dict" (list (fn [cs ds dict & r] (conj r (first ds) (rest ds) cs))),

;; The Interpreter being the Virtual Machine (VM)
"stepcc" (fn [cs ds dict & r]
	{:pre [(seq cs) (seq? ds) (map? dict)]} ; (seq cs) tests if cs is not empty
	(let [itm (first cs) rcs (rest cs)]
		(cond
			(string? itm)
				(let [res (dict itm nil)]
					(cond (seq? res) (conj r dict ds (concat res rcs)) ; concatenation
								(fn?  res) (conj r dict (apply res ds) rcs)  ; apply fn on ds
								:else (conj r dict (conj ds itm) (conj rcs "read-word"))))
			(fn? itm) (apply itm rcs ds dict r) ; apply fn on continuation
			(map? itm) (conj r dict (conj ds itm) (conj rcs "read-mapping"))
			:else (conj r dict (conj ds itm) rcs)))),

;; Words for Functions
"apply" (fn [f s & r] {:pre [(fn? f) (seq? s)]} (conj r (apply f s))),
"compose" (fn [f2 f1 & r] {:pre [(fn? f1) (fn? f2)]}
	(conj r (fn [& ds] (apply f2 (apply f1 ds))))),
"func" (fn [dict qt & r] {:pre [(map? dict) (seq? qt)]} ; function constructor
	(conj r
		(let [runcc
			(fn [cs ds dict]
				(if (empty? cs)
					ds
					(let [[cs' ds' dict']
						(try
							((VM "stepcc") cs ds dict)
							(catch Error     e (list (conj cs "error") ds dict))
							(catch Exception e (list (conj cs "error") ds dict)))]
						;> Set the current stacks to vars to easily continue execution.
						(set! *cs* cs')
						(set! *ds* ds')
						(set! *dict* dict')
						;>
						(recur cs' ds' dict'))))]
			(fn [& ds] (runcc qt (sequence ds) dict))))),

;; Arithmetics
"integer?" (fn [w & r]
	(conj r (if (string? w) (if (integer? (read-string w)) "t" "f") "f"))),
"+" (binary +), "-" (binary -), "*" (binary *),
"div" (binary quot), "mod" (binary mod),
	"<" (pred <), ">" (pred >), "==" (pred ==), "<=" (pred <=), ">=" (pred >=),

;; Escaping words with '\'
"\\"   '(("dup" "top" "rot" "swap" "push" "swap" "pop" "continue") "call/cc"),
"load" '("slurp" "uncomment" "tokenize"),
"call" '(("swap" "dup" "pop" "swap" "top" "rot" "concat" "continue") "call/cc"),
"run"  '("load" "call"),
})
