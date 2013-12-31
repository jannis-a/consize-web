(ns consize.filesystem
	(:require [cljs.io :as io]
						[clojure.browser.dom :as dom]
						[clojure.browser.event :as event]
						[consize.repl :as repl]))

(def fs)

(defn error [e]
	(let [fe (FileError)]
		(case (.-code e)
			(.-QUOTA_EXCEEDED_ERR fe) ""
			(.-NOT_FOUND_ERR fe) ""
			(.-SECURITY_ERR fe) ""
			(.-INVALID_MODIFICATION_ERR fe) ""
			(.-INVALID_STATE_ERR fe) ""
			"")))

(defn init []
	(.-requestFileSystem js/window window/PERSISTENT (* 1024 1024)
											 (fn [filesystem] (def features filesystem)), error))

;(def storage
;	(.-localStorage js/window))
;
;(def files
;	(for [item (range 0 (.-length storage))]
;		(.key storage item)))
;
;(defn slurp [item]
;	(.getItem storage item))
;
;(defn spit [item content]
;	(.setItem storage item content))
;
;(defn wub [list prefix editor]
;	(doseq [item files]
;		(dom/append list
;								(dom/element
;									[:li {:id (str prefix "-" item)} item]))
;		(let [bla (dom/get-element (str prefix "-" item))]
;			(event/listen bla :click
;										(fn [e]
;											(dom/set-value name item)
;											(.setValue editor (slurp item)))))))
;
;(defn open-file [file editor]
;	(.setValue editor (io/file-read (str "consize/" res))))
;
;(defn init [container]
;	(let [o (fn [e] (dom/get-element (str container e)))]
;		(let [
;					consize (o "-consize")
;					files2 (o "-list")
;					name (o "-name")
;					new (o "-new")]
;
;
;			;(fs/spit res (io/file-read (str "consize/" res)))
;			;(doall
;			;	(for [file ["consize.clj", "bootimage.txt", "prelude.txt"]]
;			;		(let [item (dom/element [:li file])]
;			;			(dom/append consize item)
;			;			(event/listen item :click
;			;										(fn [e]
;			;											(dom/set-value name file))))))
;			;(wub files2 container editor)
;			;(doseq [item files]
;			;	(dom/append files
;			;							(dom/element
;			;								[:li {:id (str container "-" item)} item]))
;			;	(let [bla (dom/get-element (str container "-" item))]
;			;		(event/listen bla :click
;			;									(fn [e]
;			;											(dom/set-value name item)
;			;											(.setValue editor (slurp item))))))
;
;
;			;(event/listen new :click
;			;							(fn [e]
;			;								(dom/set-value name "filename.ext")
;			;								(.clear editor)))
;			;
;			;(let [content (.getValue editor)
;			;			name (dom/get-value name)
;			;			save (o "-save")
;			;			eval (o "-eval")]
;			;	(event/listen save :click (fn [e]
;			;															(wub files2 container editor)
;			;															(spit name content)))
;			;	(event/listen eval :click (fn [e]
;			;															(wub files2 container editor)
;			;															(spit name content)
;			;															(repl/post-expr console content))))
;
;			)))
