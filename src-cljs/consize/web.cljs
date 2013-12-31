(ns consize.web
	(:require [clojure.browser.dom :as dom]
						[consize.core :as core]
						[consize.repl :as repl]
						[consize.filesystem :as fs]))

(set! *command-line-args* "\\ bootimage.txt run")
(def slurp fs/file-load)
(def spit fs/file-save)
(def VM core/VM)

(defn evaluate-file
	[editor console]
	(let [text (.getValue editor)]
		(repl/pep console text)
		(fs/file-save "consize.cljs" text)))

(set! (.-onload js/window) (fn[]
	(fs/init "files")

	(let [console (repl/init "console"); "prompt")
				editor (fs/editor "editor")]
		(repl/register-shortcuts console
			{"E" #(this-as this-console
				(evaluate-file editor this-console))})
		(fs/register-shortcuts editor
			{"E" #(evaluate-file % console)}))))
