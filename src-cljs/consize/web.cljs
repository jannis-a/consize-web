(ns consize.web
	(:require [consize.core :as core]
						[consize.repl :as repl]
						[consize.filesystem :as fs]))

(set! *command-line-args* "\\ prelude.txt run")

(def slurp fs/load)
(def spit fs/save)

(def VM core/VM)

(defn init []
	(println "Consize returns"
		(first ((VM "apply") (first ((VM "func") VM
			(first (apply (VM "tokenize") ((VM "uncomment")
			(reduce str (interpose " " *command-line-args*))))))) () ))))

(defn evaluate-file
	"Evaluates the editor's file in the REPL console."
	[editor console]
	(let [text (.getValue editor)
				prompt-text (repl/cancel-input console "")]
		(cljs.repl/eval-print text)
		(fs/save "scratch" text)
		(repl/start-prompt console prompt-text)))

(.ready (js/jQuery js/document) (fn[]
	(let [console (repl/init "#console")
				editor (fs/editor "#editor")]
		(repl/eval "(ns consize.web)")
		(repl/register-shortcuts console
			{"E" #(this-as this-console
				(evaluate-file editor this-console))})
		(fs/register-shortcuts editor
			{"E" #(evaluate-file % console)}))))
