(ns consize.web.repl)

(defn init [dom]
	"Initialize repl on a dom and set print-fn."
	(let [repl (.jqconsole (js/jQuery dom))]
		; Set print function.
		(set! *print-fn* #(.Write repl % nil false))
		; Register workaround shortcut for backslashes on windows with chrome.
		(.RegisterShortcut
			repl "55" (fn []
									(.SetPromptText repl (str (.GetPromptText repl) "\\"))))))
