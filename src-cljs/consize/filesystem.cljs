(ns consize.filesystem
	(:require [dommy.core :as dommy])
	(:use-macros [dommy.macros :only [by-id, node]]))

(def storage
	"JS localStorage."
	(.-localStorage js/window))

(def objects
	"List with all JS localStorage objects."
	(for [file (range 0 (.-length storage))]
		(.key storage file)))

(defn slurp [file]
	"Read from JS localStorage."
	(.getItem storage file))

(defn spit [file content]
	"Save to JS localStorage."
	(.setItem storage file content))

(defn- map->js [m]
	"Make functional map JS compatible."
	(let [out (js-obj)]
		(doseq [[k v] m]
			(aset out (name k) v))
		out))

(defn- open-file [file editor]
	"Open file in editor."
	(.setValue editor (slurp file)))

(defn- add-file [file editor]
	"Append all JS localStorage objects to list."
	(let [item (node [:li file])]
		(dommy/append! (by-id "files") item)
		(dommy/listen!
			item :click
			(fn [ev] (open-file file editor)))))

(defn- editor []
	"Create a CodeMirror editor from textarea."
	(doto
			(.fromTextArea js/CodeMirror
										 (by-id "editor-content")
										 (map->js {:mode          "clojure"
															 :lineNumbers   true
															 :matchBrackets true}))
		(.setValue ";; Develop here...")))

(defn init []
	"Initialize the filesystem."
	(let [editor (editor)]
		(doseq [file objects]
			(add-file file editor))))
