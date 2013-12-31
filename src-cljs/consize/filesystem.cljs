(ns consize.filesystem
	(:require [consize.repl :as repl])
	(:use [consize.base :only (getElementById, command-prefix)]))

(def editor-file "consize.cljs")

(def storage
	(.-localStorage js/window))

(defn file-load [file]
	(.getItem storage file))

(defn file-save [file content]
	(.setItem storage file content))

(defn file-list []
	(for [file (range 0 (.-length storage))]
		(.key storage file)))

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
		(.addKeyMap editor js-key-map)))

(defn editor
	[editor-selector]
	(doto
		(.fromTextArea js/CodeMirror
			(getElementById editor-selector)
			(map->js {:mode "clojure"
								:lineNumbers true
								:matchBrackets true}))
		(.setValue (file-load "consize.cljs"))))

(defn init [list-selector]
	(.log js/console "> " list-selector)
	(let [files (getElementById list-selector)]
		(for [file (file-list)]
			(let [li (.createElement js/document "li")]
				(set! (.-innerHTML li) file)
				(.appendChild files li)))))
