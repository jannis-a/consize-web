(ns consize.web.vm
	;(:use-macros [dommy.macros :only [by-id, node]])
	;(:use [clojure.string :only [lower-case split trim]]
	;			[consize.web.helpers :only [log operating-system time-millis]])
	;(:require-macros [cljs.core.async.macros :refer [go]])
	;(:require [cljs.core.async :refer [close! alts! put! take! chan <! >! timeout]]
	;					[cljs.reader :as reader]
	;					[consize.web.filesystem :refer [slurp spit]]
	;					[dommy.core :as dommy])
	)
;
;(def *out*)
;(def *ch*)
;
;(def ^:private escape-chars
;	"Escape characters for read-string." {
;	"\\backspace" "\b",
;	"\\formfeed"  "\f"
;	"\\newline"   "\n"
;	"\\return"    "\r",
;	"\\tab"       "\t",
;	"\\space"     " ",
;})
;
;(defn- char? [s]
;	"Check if string is in escape characters map."
;	(not (nil? (escape-chars s))))
;
;(defn- flush []
;	"Override empty flush method from clojurescrip. Not sure if needed."
;	(log "> flush"))
;
;(def *in*)
;
;(defn- read-line []
;	"Start new jq-console prompt, must be modified to block consize."
;	(log "> read-line")
;	;	(.Prompt *out* "true"
;	;					 (fn [in] (>! *ch* "emptystack")))
;	(go
;		(<! (timeout 5000))))
;
;(defn- read-string [s]
;	"Workaround for broken read-string from clojurescript."
;	;; TODO handle unicode characters
;	(if (char? s)
;		;; Return value from escape chars map.
;		(escape-chars s)
;		;; Call clojurescript read-string.
;		(reader/read-string s)))
;
;(defn- wordstack? [s] (and (not (empty? s)) (seq? s) (every? #(string? %) s)))
;
;(defn- binary [op]
;  (fn [y x & r] {:pre [(integer? (read-string x)) (integer? (read-string y))]}
;  	(conj r (str (op (read-string x) (read-string y))))))
;(defn- pred [op]
;	(fn [y x & r] {:pre [(integer? (read-string x)) (integer? (read-string y))]}
;		(conj r (if (op (read-string x) (read-string y)) "t" "f"))))
;
;(def VM {
;;; Words for stack shuffling
;"swap" (fn [y x & r] (conj r y x)),
;"dup"  (fn [x & r] (conj r x x)),
;"drop" (fn [x & r] (sequence r)),
;"rot"  (fn [z y x & r] (conj r y z x)),
;
;;; Words for type and equality
;"type" (fn [itm & r]
;	(cond (string? itm) (conj r "wrd")
;		    (seq?    itm) (conj r "stk")
;		    (map?    itm) (conj r "map")
;		    (fn?     itm) (conj r "fct")
;		    (nil?    itm) (conj r "nil") ; experimental
;				:else         (conj r "_|_"))), ; Exit because of internal error
;
;"equal?" (fn [x y & r] (conj r (if (= x y) "t" "f"))),
;"identical?" (fn [x y & r] (conj r (if (identical? x y) "t" "f"))), ; optional
;
;;; Words for stacks
;"emptystack" (fn [& r] (conj r ())),
;"push" (fn [x s & r] {:pre [(seq? s)]} (conj r (conj s x))),
;"top"  (fn [s & r] {:pre [(or (seq? s) (nil? s))]} (conj r (first s))),
;"pop"  (fn [s & r] {:pre [(or (seq? s) (nil? s))]} (conj r (rest s))),
;"concat" (fn [s2 s1 & r] {:pre [(seq? s1) (seq? s2)]} (conj r (concat s1 s2))),
;"reverse" (fn [s & r] {:pre [(seq? s)]} (conj r (reverse s))),
;
;;; Words for maps; highly redundant for performance reasons
;"mapping" (fn [s & r] {:pre [(seq? s)]} (conj r (apply hash-map s))),
;"unmap" (fn [m & r] {:pre [(map? m)]}
;	(conj r (sequence (reduce concat (seq m)))))
;"keys" (fn [m & r] {:pre [(map? m)]} (conj r (map identity (keys m)))),
;"assoc" (fn [m k v & r] {:pre [(map? m)]} (conj r (assoc m k v))),
;"dissoc" (fn [m k & r] {:pre [(map? m)]} (conj r (dissoc m k))),
;"get" (fn [d m k & r] {:pre [(map? m)]} (conj r (get m k d))),
;"merge" (fn [m1 m2 & r] {:pre [(map? m1) (map? m2)]} (conj r (merge m2 m1))),
;
;;; Words for Words
;"word" (fn [s & r] {:pre [(wordstack? s)]} (conj r (reduce str s))),
;"unword" (fn [w & r] {:pre [w (string? w)]} (conj r (map str (seq w)))),
;;> Replace char word to be compatible with the read-string workaround.
;;"char" (fn [w & r] {:pre [(string? w) (char? (read-string w))]}
;;	(conj r (str (read-string w)))),
;"char" (fn [w & r] {:pre [(string? w) (char? w)]}
;	(conj r (read-string w))),
;;>
;; "repr-word" (fn [w & r] {:pre [w (string? w)]} (conj r w)),
;
;;; Words for I/O (console i.e. stdin/stdout)
;"print" (fn [w & r] {:pre [(string? w)]} (do (print w) (sequence r))),
;"flush" (fn [& r] (do (flush) (sequence r))),
;"read-line" (fn [& r] (conj r (read-line))), ; what about exceptions?
;
;;; Words for I/O (files etc.)
;"slurp" (fn [w & r] {:pre [(string? w)]} (conj r (slurp w))),
;"spit" (fn [file data & r] {:pre [(string? file) (string? data)]}
;  (do (spit file data) (sequence r))),
;"spit-on" (fn [file data & r] {:pre [(string? file) (string? data)]}
;  (do (spit file data :append true) (sequence r))),
;
;;; Words supporting parsing
;"uncomment" (fn [w & r] {:pre [(string? w)]}
;  (conj r (reduce str (interpose "\r\n" (split w #"\s*%.*[(\r\n)\r\n]"))))),
;"tokenize" (fn [w & r] {:pre [(string? w)]}
;	(let [s (seq (split (trim w) #"\s+"))] (conj r (if (= s '("")) () s)))),
;"undocument" (fn [w & r] {:pre [(string? w)]}
;	(conj r (reduce str (interpose "\r\n"
;    (map second (re-seq #"[(\r\n)\r\n]%?>> (.*)[(\r\n)\r\n]" w)))))),
;
;;; OS (http://docs.oracle.com/javase/1.4.2/docs/api/java/lang/System.html)
;;> Replace words depending on the virtual machine implementations.
;;"current-time-millis" (fn [& r] (conj r (str (System/currentTimeMillis)))),
;;"operating-system" (fn [& r] (conj r (str (System/getProperty "os.name")))),
;"current-time-millis" (fn [& r] (conj r (str (time-millis)))),
;"operating-system"    (fn [& r] (conj r (str (operating-system)))),
;;>
;
;;; Propper stack effects are secured by 'stepcc' before and after 'callcc' etc.
;;; If used as functions the user is responsible to obey stack effects
;"call/cc"  (list (fn [cs ds & r] (conj r (conj () (rest ds) cs) (first ds)))),
;"continue" (list (fn [cs ds & r] (conj r (second ds) (first ds)))),
;"get-dict" (list (fn [cs ds dict & r] (conj r dict (conj ds dict) cs))),
;"set-dict" (list (fn [cs ds dict & r] (conj r (first ds) (rest ds) cs))),
;
;;; The Interpreter being the Virtual Machine (VM)
;"stepcc" (fn [cs ds dict & r]
;	{:pre [(seq cs) (seq? ds) (map? dict)]} ; (seq cs) tests if cs is not empty
;	(let [itm (first cs) rcs (rest cs)]
;		(cond
;			(string? itm)
;				(let [res (dict itm nil)]
;					(cond (seq? res) (conj r dict ds (concat res rcs)) ; concatenation
;						  	(fn?  res) (conj r dict (apply res ds) rcs)  ; apply fn on ds
;						  	:else (conj r dict (conj ds itm) (conj rcs "read-word"))))
;		  (fn? itm) (apply itm rcs ds dict r) ; apply fn on continuation
;			(map? itm) (conj r dict (conj ds itm) (conj rcs "read-mapping"))
;			:else (conj r dict (conj ds itm) rcs)))),
;
;;; Words for Functions
;"apply" (fn [f s & r] {:pre [(fn? f) (seq? s)]} (conj r (apply f s))),
;"compose" (fn [f2 f1 & r] {:pre [(fn? f1) (fn? f2)]}
;	(conj r (fn [& ds] (apply f2 (apply f1 ds))))),
;"func" (fn [dict qt & r] {:pre [(map? dict) (seq? qt)]} ; function constructor
;	(conj r
;		(let [runcc
;			(fn [cs ds dict]
;				(if (empty? cs)
;					ds
;					(let [[cs' ds' dict']
;						(try
;							((VM "stepcc") cs ds dict)
;							;< Replace java Error and Exception with javascript "catch-all".
;							;(catch Error     e (list (conj cs "error") ds dict))
;							;(catch Exception e (list (conj cs "error") ds dict)))]
;							(catch :default e (list (conj cs "error") ds dict)))]
;							;>
;						(recur cs' ds' dict'))))]
;			(fn [& ds] (runcc qt (sequence ds) dict))))),
;
;;; Arithmetics
;"integer?" (fn [w & r]
;	(conj r (if (string? w) (if (integer? (read-string w)) "t" "f") "f"))),
;"+" (binary +), "-" (binary -), "*" (binary *),
;"div" (binary quot), "mod" (binary mod),
;	"<" (pred <), ">" (pred >), "==" (pred ==), "<=" (pred <=), ">=" (pred >=),
;
;;; Escaping words with '\'
;"\\"   '(("dup" "top" "rot" "swap" "push" "swap" "pop" "continue") "call/cc"),
;"load" '("slurp" "uncomment" "tokenize"),
;"call" '(("swap" "dup" "pop" "swap" "top" "rot" "concat" "continue") "call/cc"),
;"run"  '("load" "call"),
;})
;
;(defn run-timer [seconds]
;	(let [state (fn [v] (dommy/set-html! (by-id "timer") v))]
;		(go (loop [step (timeout 1000)
;							 time 0]
;					(state time)
;					(<! step)
;					(if (= seconds time)
;						(state "gave up!")
;						(recur
;							(timeout 1000)
;							(inc time)))))))
;
;(defn ^:export wub [args]
;	(go
;		(>! *ch* args)))
;
;(defn start [args]
;	(let [ch (chan)]
;		(set! *ch* ch)
;		(go
;			(while true
;				(let [x (<! *ch*)]
;					(println "Consize returns"
;							(first ((VM "apply") (first ((VM "func") VM
;											(first (apply (VM "tokenize") ((VM "uncomment")
;											(reduce str (interpose " " (split x #"\s+")))))))) (sequence nil) ))))
;				)
;			)
;		)
;	)
