(ns consize.web.filesystem
	(:use-macros [dommy.macros :only [by-id node]])
	(:use [dommy.core :only [append! descendant? listen! replace! set-value! value]]))

;; Set the current editor.
(def *editor*)

(def storage
	"Javascript localStorage."
	(.-localStorage js/window))

(def objects
	"List with all localStorage keys.
	 Needs looping over all indexes of localStorage."
	(for [i (range 0 (.-length storage))]
		(.key storage i)))

(defn slurp [file]
	"Read from localStorage."
	(.getItem storage file))

(defn load-file [file]
	"Open file in editor, sets filename"
	;; Set value of filename input field.
	(set-value! (by-id "#file-name") file)
	;; Set editor to file content.
	(.setValue *editor* (slurp file)))

(defn add-file [file]
	"Append all JS localStorage objects to list."
	(let [item (node [:li file])]
		;; Add object to list.
		(append! (by-id "#files") item)
		;; Add click-listener to object.
		(listen! item :click (fn [ev] (load-file file)))))

(defn spit [file content & options]
	"Save to localStorage, when options set append to file (better handling?)."
	(let [content (if options (str (slurp file) content) content)]
		(.setItem storage file content))
	(add-file file))

(defn editor []
	"Create CodeMirror and replace dom with editor.
	 Sets default editor options and value."
	(doto
			(js/CodeMirror.
				;; Replace dom with editor.
				(fn [dom] (replace! (by-id "#editor") dom))
				;; Default editor options.
				(clj->js {:lineNumbers true
									:lineWrapping true
									:matchBrackets true
									:styleActiveLine true}))
		;; Default editor text.
		(.setValue "Start typing or open a file from the left side!")))

(defn init []
	"Initialize the filesystem with editor."
	(set! *editor* (editor))
	;; Add all localStorage objects to list.
	(doseq [file objects]
		(add-file file))
	;; Set click-listener for save-button.
	(listen! (by-id "#file-save") :click
		(fn [ev] (spit (value (by-id "#file-name"))
									 (.getValue *editor*)))))
