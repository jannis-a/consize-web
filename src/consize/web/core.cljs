(ns consize.web.core
	(:require [consize.web.repl :as repl]
						[consize.web.filesystem :as fs]))

(set! (.-onload js/window)
			(fn []
				"Initiliaze filesystem and repl on page load."
				(fs/init)
				(repl/init "#repl")))
