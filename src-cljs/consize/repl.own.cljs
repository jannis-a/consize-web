(ns consize.repl.own
	(:require [dommy.core :as dommy]
						[consize.filesystem :as fs]
						[cljs.reader :as reader])
	(:use-macros [dommy.macros :only [by-id, node]]))

(def *in* "")

(defn log [args]
	"Log to JS console."
	(.log js/console args))

;(defn read-line []
;	(when-not (empty? *in*)
;		*in*)
;	;(reader/push-back-reader *in*)
;	)
;
;(defn flush []
;	(set! *in* ""))

;(defn- repl-print [buffer expr]
;	"Print evaluated"
;	;(doseq [line (.split (str expr) #"\n")]
;	(dommy/append! buffer [:li *in*]))
;;)

;(defn post-expr [buffer expr]
;	"Post expression."
;	(dommy/append! buffer [:li {:class "ns"} *in*])
;	(repl-print buffer *in*))

(defn init []
	"Initialize a web repl."
	(let [buffer (by-id "repl-buffer")
				prompt (by-id "repl-prompt")]
		;; Set the print function.
		;(set! *print-fn* #(repl-print buffer %))
		(set! *print-fn* #(dommy/append! buffer [:li %]))

		;; Print test.
		(print "Consize Web Repl")
		(print "5 * 5 = " (* 5 5))

		;; Set on-enter function.
		(dommy/listen!
			prompt :keyup
			(fn [ev]
				(when (= 13 (.-keyCode ev))
					(do
						;(post-expr buffer (dommy/value prompt))
						(set! *in* (dommy/value prompt))
						(dommy/set-value! prompt "")))))

		;; Set focus to prompt.
		(.focus prompt)))
