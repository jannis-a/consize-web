(ns consize.repl
	;(:require [cljs.repl :as repl])
	)

(defn start-prompt
	"Starts a new REPL prompt and optionally pre-populates user input field
	 with initial-text."
	([jqconsole initial-text]
	 (let [prompt-label (str "\n" "> ") ;(repl/prompt))
				 continue-label (str (apply str (repeat (- (count prompt-label) 4) " "))
														 "...")]
		 (.SetPromptLabel jqconsole prompt-label continue-label)
		 (.Prompt jqconsole "true"
							(fn [input]
								(print input)
								(start-prompt jqconsole))
							;#(if (repl/complete-form? %)
							;	false
							;	0)
							)
		 (when-not (empty? initial-text)
			 (.SetPromptText jqconsole initial-text)))
	 jqconsole)
	([jqconsole] (start-prompt jqconsole nil)))

(defn cancel-input
	"Cancel the REPL prompt and write a message to output."
	[jqconsole message]
	(let [prompt-text (.GetPromptText jqconsole false)]
		(doto jqconsole
			.ClearPromptText
			.AbortPrompt
			(.Write message "jqconsole-output"))
		prompt-text))

(defn register-shortcuts [jqconsole shortcut-map]
	(doseq [[key callback] shortcut-map]
		(.RegisterShortcut jqconsole key callback)))

(defn init
	"Create and initialize the REPL console, with a shortcut-map that
	 maps keys to callback functions."
	[console-selector]
	;(repl/init)
	(let [jqconsole
				(.jqconsole (js/$ console-selector)
										"ClojureScript-in-ClojureScript Web REPL"
										"\n>>> "
										"")]
		(.SetIndentWidth jqconsole 1)
		;; Setup the print function
		(set! *out* #(.Write jqconsole %))
		(set! *rtn* #(.Write jqconsole % "jqconsole-output"))
		(set! *err* #(.Write jqconsole % "jqconsole-message-error"))
		(set! *print-fn* #(*out* %1))
		(start-prompt jqconsole)))
