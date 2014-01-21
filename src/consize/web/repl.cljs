(ns consize.web.repl
	(:use-macros [dommy.macros :only [by-id]])
	(:require-macros [cljs.core.async.macros :refer [go]])
	(:require [cljs.core.async :refer [<! timeout]]
						[dommy.core :refer [set-text! show! text]]
						[consize.web.core :as core :refer [*resume*]]))

;; REPL defaults.
(def greeting "Welcome to Consize Web! Please enter your start command:\n")
(def default-cmd "\\ prelude-dump.txt run say-hi")

(defn toggle-state []
	"Toggles text on a dom element showing the current state."
	(let [dom (by-id "#state")]
		(set-text! dom (if (= (text dom) "Idle") "Working" "Idle"))))

(defn start-prompt
	"Start a new prompt with optional default string"
	([repl default]
	 (when-not *resume* (println))
	 (doto repl
		 (.SetPromptLabel (if *resume* "" "# "))
		 (.Prompt "true"
			(fn [args] (go (toggle-state)
										 (<! (timeout 15)) ;; Without delay toggle not visible.
										 (core/init args)
										 (toggle-state)
										 (start-prompt repl))))
		 (.Focus))
	 (when default (.SetPromptText repl default)))
	([repl] (start-prompt repl nil)))

(defn init []
	"Initialize repl on a dom and set print-fn."
	(let [repl (.jqconsole (js/jQuery "#repl") greeting)]
		(set-print-fn! #(.Write repl %))
		;; Workaround shortcuts for windows + chrome
		(when (and (= (.-vendor js/navigator) "Google Inc.")
							 (= (core/operating-system) "Windows"))
			(show! (by-id "#shortcuts"))
			(doseq [[code, char] {"54" "\\", "55" "{", "56" "[", "57" "]", "48" "}"}]
				(.RegisterShortcut repl code (fn []
					(.SetPromptText repl (str (.GetPromptText repl) char))))))
		;; Start new prompt.
		(start-prompt repl default-cmd)))
