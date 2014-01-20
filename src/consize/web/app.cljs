(ns consize.web.app
	(:require [consize.web.bootstrap :as bootstrap]
						[consize.web.filesystem :as fs]
						[consize.web.repl :as repl]))

(defn init []
	"Initialize the web app with all its components."
	(bootstrap/init)
	(fs/init)
	(repl/init))

(.ready (js/jQuery js/document) init)
