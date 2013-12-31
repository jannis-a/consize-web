(ns consize.repl
	(:require [cljs.repl :as repl]
						[clojure.browser.dom :as dom]))

(defn- print-eval [buffer eval type]
	(doseq [line (.split (str eval) #"\n")]
		(if (= type "error")
			(dom/log line)
			(dom/append buffer (dom/element [:li {:class (when type (str type))} line]))))
	(set! (.-scrollTop buffer) (.-scrollHeight buffer)))

(defn- print-expr [buffer expr]
	(dom/append buffer
							(dom/element :li
													 [:span {:class "ns"}
														(repl/prompt)]
													 (.replace expr #"\n$" ""))))

(defn post-expr [buffer expr]
	(print-expr buffer expr)
	(repl/eval-print expr))

(defn init [id]
	(repl/init)

	(let [o (fn [e] (dom/get-element (str id e)))]
		(let [buffer (o "-buffer")
					input (o "-input")
					;ns (o "-ns")
					]
			(set! *out* #(print-eval buffer % nil))
			(set! *rtn* #(print-eval buffer % "return"))
			(set! *err* #(print-eval buffer % "error"))
			(set! *print-fn* #(*out* %1))

			(set! (.-onkeypress input)
						(fn [ev]
							(when (== (.-keyCode (or ev event)) 13)
								(let [expr (dom/get-value input)]
									(if (repl/complete-form? expr)
										(do
											(post-expr buffer expr)
											;(dom/set-text ns (repl/prompt))
											(js/setTimeout #(set! (.-value input) "") 0)))))))

			(.focus input))))
