(ns consize.repl
	(:require [dommy.core :as dommy])
	(:use [cljs.reader :only [read-string]])
	(:use-macros [dommy.macros :only [by-id]]))

(defn log [args]
	"Log to JS console."
	(.log js/console args))

(defn- repl-print [buffer expr]
	"Print evaluated"
	(doseq [line (.split (str expr) #"\n")]
		(dommy/append! buffer [:li expr])))

(defn post-expr [buffer expr]
	"Post expression."
	(dommy/append! buffer [:li {:class "ns"} expr])
	(repl-print buffer expr))

(defn init []
	"Initialize a web repl."
	(let [buffer (by-id "repl-buffer")
				prompt (by-id "repl-prompt")]
		;; Set the print function.
		(set! *print-fn* #(repl-print buffer %))

		;; Set on-enter function.
		(dommy/listen!
			prompt :keyup
			(fn [ev]
				(when (= 13 (.-keyCode ev))
					(do
						(post-expr buffer (dommy/value prompt))
						(dommy/set-value! prompt "")))))

		;; Print test.
		(print "Consize Web Repl")
		(print (* 5 5))

		;; Start Consize.
		;(println "Consize returns"
		;	(first ((VM "apply") (first ((VM "func") VM
		;					(first (apply (VM "tokenize") ((VM "uncomment")
		;					(reduce str (interpose " " "\\ prelude.txt run say-hi"))))))) () ))))

		;; Set focus to prompt.
		(.focus prompt)))
