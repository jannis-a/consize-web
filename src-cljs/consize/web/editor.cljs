(ns consize.web.editor
	(:require [clojure.browser.dom :as dom]))

(defn- map->js [m]
	(let [out (js-obj)]
		(doseq [[k v] m]
			(aset out (name k) v))
		out))

(defn init [container]
	(doto
			(.fromTextArea js/CodeMirror
										 (dom/get-element (str container "-input"))
										 (map->js {:mode          "clojure"
															 :lineNumbers   true
															 :matchBrackets true}))
		(.setValue ";; Develop here...")))
