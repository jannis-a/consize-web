(ns consize.web
	(:use [clojure.string :only [split]])
	(:require [consize.core :as core]
						[consize.filesystem :as fs]
						[consize.repl :as repl]))

(def VM core/VM)

(defn ^:export init [args]
	"Initiliaze filesystem and repl."
	(set! *command-line-args* (split args #"\s+"))

	(fs/init)
	(repl/init)

	(println "Consize returns"
		(first ((VM "apply") (first ((VM "func") VM
						(first (apply (VM "tokenize") ((VM "uncomment")
						(reduce str (interpose " " *command-line-args*))))))) ()))))
