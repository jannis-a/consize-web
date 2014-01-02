(ns consize.web.core
	(:require [consize.core :as core]
						[consize.web.repl :as repl]
						[consize.web.filesystem :as fs]))

(set! *command-line-args* "\\ prelude.txt run say-hi")
(def slurp fs/slurp)
(def spit fs/spit)
(def VM core/VM)

(set! (.-onload js/window)
			(fn []
				(repl/init "console")
				(fs/init "files" "editor")))
