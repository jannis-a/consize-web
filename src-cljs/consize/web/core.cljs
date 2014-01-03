(ns consize.web.core
	(:require [clojure.browser.dom :as dom]
						[consize.web.filesystem :as fs]))

(defn lazy-contains? [col key]
	(some #{key} col))

(defn js-log
	"Simple method for logging to js console"
	[args]
	(.log js/console args)
	(webe))

;; Set the print function
(set! *print-fn* #(dom/append
									 (dom/get-element "test")
									 (dom/element %)))

;; Set on page load function
(set! (.-onload js/window)
			(fn []
				(js-log "benis")))
