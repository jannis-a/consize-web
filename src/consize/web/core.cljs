(ns consize.web.core
	(:require-macros [cljs.core.async.macros :refer [go]])
	(:require [cljs.core.async :refer [put! chan <!]]
						[consize.web.filesystem :as fs]
						[consize.web.repl :as repl]))

(set! (.-onload js/window)
			(fn []
				"Initiliaze filesystem and repl on page load."
				(fs/init)
				(repl/init "#repl")))
