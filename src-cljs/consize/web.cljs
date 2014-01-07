(ns consize.web
	(:use [clojure.string :only [split]])
	(:require [consize.core :as core]
						[consize.filesystem :as fs]
						[consize.repl :as repl]))

(def *command-line-args*)
(def VM core/VM)



(set! (.-onload js/window)
;(.ready (js/jQuery js/document)
			(fn []
				"Initiliaze filesystem and repl."
				;(.log js/console "\newlineasasddd")
				(fs/init)
				(repl/init "#console")))

(defn ^:export start [args]
	"Start Consize."
	(set! *command-line-args* (split args #"\s+"))

	(println "Consize returns"
		(first ((VM "apply") (first ((VM "func") VM
						(first (apply (VM "tokenize") ((VM "uncomment")
						(reduce str (interpose " " *command-line-args*))))))) ())))
	)
