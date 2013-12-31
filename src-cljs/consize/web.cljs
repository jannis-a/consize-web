(ns consize.web
	(:require [cljs.io :as io]
						[clojure.browser.dom :as dom]
						[consize.core :as core]
						[consize.repl :as repl]
						[consize.filesystem :as fs]))

;(set! *command-line-args* "\\ bootimage.txt run")
;(def slurp fs/slurp)
;(def spit fs/spit)
;(def VM core/VM)



(set! (.-onload js/window)
			(fn []
				(repl/init "console")

				(fs/init "filesystem")))


