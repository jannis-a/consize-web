(ns consize.web.repl
	(:require [cljs.repl :as repl]
						;[clojure.browser.dom :as dom]
						))

(defn start-prompt
	"Starts a new REPL prompt and optionally pre-populates user input field
	 with initial-text."
	([jqconsole initial-text]
	 (let [prompt-label (str "\n" (repl/prompt))
				 continue-label (str (apply str (repeat (- (count prompt-label) 4) " "))
														 "...")]
		 (.SetPromptLabel jqconsole prompt-label continue-label)
		 (.Prompt jqconsole "true"
							(fn [input]
								(repl/eval-print input)
								(start-prompt jqconsole))
							#(if (repl/complete-form? %)
								false
								0))
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

(defn console
	"Create and initialize the REPL console, with a shortcut-map that
	 maps keys to callback functions."
	[console-selector]
	(repl/init)
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

;(defn- print-eval [buffer eval type]
;	(doseq [line (.split (str eval) #"\n")]
;		(if (= type "error")
;			(dom/log line)
;			(dom/append buffer
;									(dom/element [:li {:class (when type (str type))} line]))))
;	(set! (.-scrollTop buffer) (.-scrollHeight buffer)))
;
;(defn- print-expr [buffer expr]
;	(dom/append buffer
;							(dom/element :li
;													 [:span {:class "ns"}
;														(repl/prompt)]
;													 (.replace expr #"\n$" ""))))
;
;(defn post-expr [buffer expr]
;	(print-expr buffer expr)
;	(repl/eval-print expr))
;
;(defn init [container]
;	(repl/init)
;	(let [e (fn [id] (dom/get-element (str container "-" id)))
;				buffer (e "buffer")
;				input (e "input")
;				ns (e "ns")]
;		(set! *out* #(print-eval buffer % nil))
;		(set! *rtn* #(print-eval buffer % "return"))
;		(set! *err* #(print-eval buffer % "error"))
;		(set! *print-fn* #(*out* %1))
;
;		(set! (.-onkeypress input)
;					(fn [ev]
;						(when (== (.-keyCode (or ev event)) 13)
;							(let [expr (dom/get-value input)]
;								(if (repl/complete-form? expr)
;									(do
;										(post-expr buffer expr)
;										(dom/set-text ns (repl/prompt))
;										(js/setTimeout #(set! (.-value input) "") 0)))))))
;
;		(.focus input)))
