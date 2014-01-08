(ns consize.web.core
	(:use [clojure.string :only [split replace]])
	(:require [consize.web.repl :as repl]
						[consize.web.filesystem :as fs]
						;[consize.web.vm :as consize]
						))

;(def VM consize/VM)

(set! (.-onload js/window)
			(fn []
				"Initiliaze filesystem and repl on page load."
				(fs/init)
				(repl/init)
				(println (str (replace \space #"\" "\\) "asdasd"))))

;(defn ^:export start [args]
;	(consize/start args))

;(defn ^:export start [args]
;	"Start Consize (temporary function)."
;	(println "Consize returns"
;		(first ((VM "apply") (first ((VM "func") VM
;						(first (apply (VM "tokenize") ((VM "uncomment")
;						(reduce str (interpose " " (split args #"\s+")))))))) ()))))
