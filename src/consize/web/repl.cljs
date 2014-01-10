(ns consize.web.repl
	(:use [clojure.string :only [split]]
				[consize.web.helpers :only [log]]))

(def *out*)

(defn flush []
	"Override empty flush method from clojurescrip. Not sure if needed."
	(log "> flush"))

(defn read-line []
	"Start new jq-console prompt, must be modified to block consize."
	(log "> read-line")
	;; Start new jq-console prompt.
	(.Prompt *out* "true"
					 (fn [ds] ds)
					 (fn [ds] (nil? ds))))

(defn init [dom]
	"Initialize repl on a dom and set print-fn."
	(let [repl (.jqconsole (js/jQuery dom))]
		;; Set variable so read-line can be called without parameters.
		(set! *out* repl)
		;; Set print function.
		(set! *print-fn* #(.Write repl % nil false))
		;; Register workaround shortcut for backslashes on windows with chrome.
		(.RegisterShortcut repl "55"
											 (fn []
												 (.SetPromptText repl "\\")))))
