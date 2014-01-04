(ns consize.web
	(:require [consize.filesystem :as fs]
						[consize.repl :as repl]))

;; Set on page load function.
(set! (.-onload js/window)
			(fn []
				(fs/init)
				(repl/init)))
