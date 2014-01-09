(ns consize.web.repl
	(:use [clojure.string :only [split]]
				[consize.web.helpers :only [log]]
				[consize.web.vm :only [VM]]))

(def wub)

(defn read-line []
	(log "> read-line")
	(.Prompt wub "true"
					 (fn [ds] ds)
					 (fn [ds] (nil? ds)))
	(.Focus wub))

(defn flush []
	(log "> flush"))

(defn start-prompt [repl]
	"Start a new prompt, print input and start again (temporary function).")

(defn init [dom]
	"Initialize repl on a dom and set print-fn."
	(let [repl (.jqconsole (js/jQuery dom))]
		(set! wub repl)
		;; Set print function.
		(set! *print-fn* #(.Write repl % nil false))

		;; Register workaround shortcut for backslashes on windows with chrome.
		(.RegisterShortcut
			repl "55"
			(fn []
				(.SetPromptText repl "\\")))

		;(start-prompt repl)

		(.Prompt repl "true"
						 (fn [ds]
							 (println "Consize returns"
							 	(first ((VM "apply") (first ((VM "func") VM
							 					(first (apply (VM "tokenize") ((VM "uncomment")
							 					(reduce str (interpose " " (split ds #"\s+")))))))) () ))))
						 (fn [ds] (nil? ds)))
		(.Focus repl)))
