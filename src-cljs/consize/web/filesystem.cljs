(ns consize.web.filesystem
	(:require [cljs.io :as io]
						[cljs.repl]
						[clojure.browser.dom :as dom]
						[clojure.browser.event :as event]
						[consize.web.repl :as repl]))

(def contrib
	["consize.clj", "bootimage.txt", "prelude.txt"])

(def storage
	(.-localStorage js/window))

(defn lazy-contains? [col key]
	(some #{key} col))

(def files
	(for [item (range 0 (.-length storage))]
		(.key storage item)))

(defn slurp [item]
	(.getItem storage item))

(defn spit [item content]
	(.setItem storage item content))

(defn- map->js [m]
	(let [out (js-obj)]
		(doseq [[k v] m]
			(aset out (name k) v))
		out))

(defn- open-file [file editor editor-id]
	(let [disabled (lazy-contains? contrib file)]
		;(doall (for [x ["name", "save", "delete", "eval"]]
		;				 (dom/set-properties
		;					 (dom/get-element (str editor-id "-" x))
		;					 {"disabled" disabled})))
		(dom/set-value (dom/get-element (str editor-id "-name")) file)
		(.setValue editor (if disabled
												(io/file-read (str "consize/" file))
												(slurp file)))))

(defn- list-add [file list-id editor editor-id]
	(let [item (dom/element [:li file])]
		(dom/append
			(dom/get-element (str list-id "-consize")) item)
		(event/listen item :click
									(fn [ev]
										(open-file file editor editor-id)))))

(defn- editor [editor-id]
	(doto
			(.fromTextArea js/CodeMirror
										 (dom/get-element (str editor-id "-input"))
										 (map->js {:mode          "clojure"
															 :lineNumbers   true
															 :matchBrackets true}))
		(.setValue ";; Develop here...")))

(defn init [list-id editor-id]
	(let [editor (editor editor-id)]
		;; new file
		(event/listen (dom/get-element (str "new-file")) :click
									(fn [ev]
										;(dom/set-properties
										;	(dom/get-element (str editor-id "-name"))
										;	{"disabled" false
										;	 "value"    ""})
										(dom/set-value (dom/get-element (str editor-id "-name")) "")
										(.setValue editor "")))
		;; eval file
		(event/listen (dom/get-element (str editor-id "-eval")) :click
									(fn [ev]
										(let [content (.getValue editor)]
											(when-not (empty? content)
												(cljs.repl/eval-print content)))))
		;; save file
		(event/listen (dom/get-element (str editor-id "-save")) :click
									(fn [ev]
										(let [name (dom/get-value (dom/get-element (str editor-id "-name")))
													content (.getValue editor)]
											(when-not (empty? (and name content))
												(spit name content)
												(when-not (lazy-contains? files name)
													(list-add name list-id editor editor-id))))))
		;; contrib files
		(doall (for [file contrib]
						 (list-add file list-id editor editor-id)))
		;; localstorage files
		(doseq [file files]
			(list-add file list-id editor editor-id))))
