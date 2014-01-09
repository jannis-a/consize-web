(ns consize.web.filesystem
	(:require [dommy.core :as dommy])
	(:use-macros [dommy.macros :only [by-id, node]])
	(:use [consize.web.helpers :only [log map->js]]))

(def storage
	"JS localStorage."
	(.-localStorage js/window))

(def objects
	"List with all localStorage objects."
	(for [file (range 0 (.-length storage))]
		(.key storage file)))

(defn slurp [file]
	"Read from localStorage."
	(.getItem storage file))

(defn spit [file content & options]
	"Save to localStorage."
	(.setItem storage file content))

(defn open-file [file editor]
	"Open file in editor."
	(dommy/set-value! (by-id "editor-name") file)
	(.setValue editor (slurp file)))

(defn add-file [file editor]
	"Append all JS localStorage objects to list."
	(let [item (node [:li file])]
		;; Add object to list.
		(dommy/append! (by-id "files") item)
		;; Add click-listener to object.
		(dommy/listen! item :click
									 (fn [ev] (open-file file editor)))))

(defn editor []
	"Create a CodeMirror editor from dom."
	(doto
			(js/CodeMirror.
				;; Replace DOM with editor.
				(fn [dom] (dommy/replace! (by-id "editor") dom))
				;; Default editor options.
				(map->js {:lineNumbers      true
									:matchBrackets    true
									:lineWrapping:    true
									:styleActiveLine: true}))
		;; Set default editor text.
		(.setValue ";; Develop here...")))

(defn init []
	"Initialize the filesystem with editor."
	(let [editor (editor)]
		;; Add all localStorage objects to list.
		(doseq [file objects]
			(add-file file editor))
		;; Save button.
		(dommy/listen!
			(by-id "editor-save") :click
			(fn [ev]
				(spit
					(dommy/value (by-id "editor-name"))
					(.getValue editor))))))
