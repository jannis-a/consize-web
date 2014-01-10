(ns consize.web.core
	(:use-macros [dommy.macros :only [by-id, node]])
	(:use [clojure.string :only [split]]
				[consize.web.helpers :only [log]])
	(:require-macros [cljs.core.async.macros :refer [go]])
	(:require [cljs.core.async :refer [put! chan <! >! timeout]]
						[consize.web.filesystem :as fs]
						[consize.web.repl :as repl]
						[consize.web.vm :as consize]
						[dommy.core :as dommy]))

(set! (.-onload js/window)
			(fn []
				;; Javascript console "shortcut".
				(aset js/window "_consize" consize.web.core/init)
				;; Initiliaze filesystem and repl on page load.
				(fs/init)
				(repl/init "#repl")))

(defn ^:export init [args]
	"Split passed arguments by whitespace and start consize."
	(consize/start (split args #"\s+")))

; Test for clojure async lib.
(let [ch (chan)]
	(go (while true
				(let [v (<! ch)]
					(log (str "Read: " v)))))
	(go (>! ch "hi")
			(<! (timeout 5000))
			(>! ch "there")))
