(ns consize.web.filesystem
	(:use [dommy.core :only [append! listen! replace! set-value! value]])
	(:use-macros [dommy.macros :only [by-id node]]))

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

(defn spit [file content & options]
	"Save to localStorage."
	(.setItem storage file content))

(defn load-file [file editor]
	"Open file in editor, sets filename"
	;; Set value of file input field.
	(set-value! (by-id "#file-name") file)
	;; Set editor to file content.
	(.setValue editor (slurp file)))

(defn add-file [file editor]
	" Append all JS localStorage objects to list. "
	(let [item (node [:li file])]
		;; Add object to list.
		(append! (by-id "#files") item)
		;; Add click-listener to object.
		(listen! item :click
									 (fn [ev] (load-file file editor)))))

(defn editor []
	" Create CodeMirror and replace dom with editor.
	Sets default editor options and value. "
	(doto
			(js/CodeMirror.
				;; Replace dom with editor.
				(fn [dom] (replace! (by-id "#editor") dom))
				;; Default editor options.
				(clj->js {:lineNumbers      true
									:matchBrackets    true
									:lineWrapping:    true
									:styleActiveLine: true}))
		;; Default editor text.
		(.setValue " ;; Develop here...")))

(defn init []
	"Initialize the filesystem with editor."
	(let [editor (editor)]
		;; Add all localStorage objects to list.
		(doseq [file objects]
			(add-file file editor))
		;; Set click-listener for save-button.
		(listen! (by-id "#file-save") :click
									 ;; Get name and content from editor and call spit.
									 (fn [ev] (spit (value (by-id "#file-name"))
																	(.getValue editor))))))
