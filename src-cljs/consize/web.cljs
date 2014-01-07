(ns consize.web
	(:use [clojure.string :only [split]])
	(:require [consize.core :as core]
						[consize.filesystem :as fs]
						[consize.repl :as repl]))

(def *command-line-args*)
(def VM core/VM)

(set! (.-onload js/window)
			(fn []
				"Initiliaze filesystem and repl."
				(fs/init)
				(repl/init)))

;(defn ^:export init []
;	"Initiliaze filesystem and repl."
;	(fs/init)
;	(repl/init))

(defn ^:export start [args]
	"Initiliaze filesystem and repl."
	(set! *command-line-args* (split args #"\s+"))

	(println "Consize returns"
		(first ((VM "apply") (first ((VM "func") VM
						(first (apply (VM "tokenize") ((VM "uncomment")
						(reduce str (interpose " " *command-line-args*))))))) ())))
	)
