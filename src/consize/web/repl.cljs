(ns consize.web.repl)

(defn start-prompt [repl]
	(.Prompt repl "true"
					 (fn [ds]
						 (println ds)
						 (start-prompt repl))
					 (fn [ds]
						 (or (nil? ds) " ")))
	(.Focus repl))

(defn init [dom]
	"Initialize the repl and set print-fn."
	(let [repl (.jqconsole (js/$ dom))]
		(set-print-fn! #(.Write repl %1 nil false))

		(.RegisterShortcut
			repl "55"
			(fn [] (.SetPromptText repl (str (.GetPromptText repl) "\\"))))

		(start-prompt repl)))
