(ns consize.repl
	(:require [cljs.repl :as repl])
	(:use [consize.base :only (getElementById, command-prefix, dom-append)]))

(defn repl-print [log text cls]
	(doseq [line (.split (str text) #"\n")]
		(dom-append log
								[:div {:class (str "cg "
				(when cls
					(str " " cls)))}
								 line]))
	(set! (.-scrollTop log) (.-scrollHeight log)))

(defn postexpr [console expr]
	(dom-append console
							[:table
							 [:tbody
								[:tr
								 [:td {:class "cg"} (repl/prompt)]
								 [:td (.replace expr #"\n$" "")]]]]))


(defn- map->js [m]
	(let [out (js-obj)]
		(doseq [[k v] m]
			(aset out (name k) v))
		out))

(defn register-shortcuts [editor key-map]
	(let [js-key-map
				(->> (for [[k callback] key-map]
						 		[(str command-prefix "-" k) callback])
						 (into {})
						 map->js)]
		(.addEventListener js/document editor js-key-map)))

(defn pep [console expr]
	(postexpr console expr)
	(repl/eval-print expr))

(defn init
	[console-selector prompt-selector]
	(repl/init)

	(let [console (getElementById console-selector)
				prompt (getElementById prompt-selector)]

		(set! *out* #(repl-print console % nil))
		(set! *rtn* #(repl-print console % "return"))
		(set! *err* #(repl-print console % "error"))
		(set! *print-fn* #(*out* %1))

		(println ";; Consize Web REPL")

		(set! (.-onkeypress prompt)
			(fn [ev]
				(when (== (.-keyCode (or ev event)) 13)
					(let [line (.-value prompt)]
						(if (repl/complete-form? line)
							(do
								(pep console line)
								(js/setTimeout #(set! (.-value prompt) "") 0)
								;(set! (.-innerText (getElementById  "ns")) (repl/prompt))
								))))))

		(.focus prompt)))
