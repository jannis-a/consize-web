(ns consize.web
	(:require [consize.core :as core]
						[consize.filesystem :as fs]
						[consize.repl :as repl]))

(def VM core/VM)

(defn ^:export init []
	"Initiliaze filesystem and repl."
	(fs/init)
	(repl/init))

(defn ^:export start []
	(println "Consize returns"
		(first ((VM "apply") (first ((VM "func") VM
						(first (apply (VM "tokenize") ((VM "uncomment")
						(reduce str (interpose " " ["\\" "prelude.txt" "run" "say-hi"]))))))) ()))))
