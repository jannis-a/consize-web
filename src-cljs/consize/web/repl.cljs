(ns consize.web.repl)

(def *out*)
(def *in*)

(defn log-js [args]
	(.log js/console args))

(defn flush []
	(log-js "FLUSH")
	(set! *in* ""))

(defn read-line []
	(log-js "READ-LINE")
	(.SetPromptLabel *out* (str "\n" "> "))
	(.Prompt *out* "true"
					 (fn [input]
						 (set! *in* input)))
	*in*)

(defn init []
	(set! *out* (.jqconsole (js/$ "#repl")))
	(set! *print-fn* #(.Write *out* %1))
	(.SetIndentWidth *out* 1))
