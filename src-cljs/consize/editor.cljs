(ns consize.filesystem
	(:require [cljs.io :as io]
						[clojure.browser.dom :as dom]
						[clojure.browser.event :as event]
						[consize.repl :as repl]))

(def storage
	(.-localStorage js/window))

(defn slurp [name]
	(.getItem storage name))

(defn spit [name content]
	(.setItem storage name content))

(def files
	(for [item (range 0 (.-length storage))]
		(.key storage item)))

(defn- map->js [m]
	(let [out (js-obj)]
		(doseq [[k v] m]
			(aset out (name k) v))
		out))

(defn editor [editor-selector]
	(doto
			(.fromTextArea js/CodeMirror
										 (dom/get-element editor-selector)
										 (map->js {:mode          "clojure"
															 :lineNumbers   true
															 :matchBrackets true}))
		(.setValue ";; Dev here")))


(defn wub [list prefix editor]
	(doseq [item files]
		(dom/append list
								(dom/element
									[:li {:id (str prefix "-" item)} item]))
		(let [bla (dom/get-element (str prefix "-" item))]
			(event/listen bla :click
										(fn [e]
											(dom/set-value name item)
											(.setValue editor (slurp item)))))))

(defn open-file [file editor]
	(.setValue editor (io/file-read (str "consize/" res))))

(defn init [container console]

	(let [o (fn [e] (dom/get-element (str container e)))]
		(let [editor (editor (str container "-editor"))
					consize (o "-consize")
					files2 (o "-list")
					name (o "-name")
					new (o "-new")]


			;(fs/spit res (io/file-read (str "consize/" res)))
			(doall
				(for [file ["consize.clj", "bootimage.txt", "prelude.txt"]]
					(let [item (dom/element [:li file])]
						(dom/append consize item)
						(event/listen item :click
													(fn [e]
														(dom/set-value name file)
														(.setValue editor (io/file-read (str "consize/" file))))))))
			;(wub files2 container editor)
			;(doseq [item files]
			;	(dom/append files
			;							(dom/element
			;								[:li {:id (str container "-" item)} item]))
			;	(let [bla (dom/get-element (str container "-" item))]
			;		(event/listen bla :click
			;									(fn [e]
			;											(dom/set-value name item)
			;											(.setValue editor (slurp item))))))


			;(event/listen new :click
			;							(fn [e]
			;								(dom/set-value name "filename.ext")
			;								(.clear editor)))
			;
			;(let [content (.getValue editor)
			;			name (dom/get-value name)
			;			save (o "-save")
			;			eval (o "-eval")]
			;	(event/listen save :click (fn [e]
			;															(wub files2 container editor)
			;															(spit name content)))
			;	(event/listen eval :click (fn [e]
			;															(wub files2 container editor)
			;															(spit name content)
			;															(repl/post-expr console content))))

			)))
