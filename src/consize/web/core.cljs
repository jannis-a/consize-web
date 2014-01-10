(ns consize.web.core
	(:use-macros [dommy.macros :only [by-id, node]])
	(:use [clojure.string :only [split]]
				[consize.web.helpers :only [log]])
	(:require-macros [cljs.core.async.macros :refer [go]])
	(:require [cljs.core.async :refer [put! chan <! >! timeout]]
						[consize.web.filesystem :as fs]; :refer [slurp spit]]
						[consize.web.repl :as repl]; :refer [flush read-line]]
						[consize.web.vm :refer [VM]]
						[dommy.core :as dommy]))

(let [ch (chan)]
	(go (while true
				(let [v (<! ch)]
					(log (str "Read: " v)))))
	(go (>! ch "hi")
			(<! (timeout 5000))
			(>! ch "there")))

(set! (.-onload js/window)
			(fn []
				"Initiliaze filesystem and repl on page load."
				;; Javascript console "shortcut".
				(aset js/window "_consize" consize.web.core/init)
				;; Initialize.
				(fs/init)
				(repl/init "#repl")))

(defn ^:export init [args]
	(println "Consize returns"
		(first ((VM "apply") (first ((VM "func") VM
						(first (apply (VM "tokenize") ((VM "uncomment")
						(reduce str (interpose " " (split args #"\s+")))))))) () ))))
