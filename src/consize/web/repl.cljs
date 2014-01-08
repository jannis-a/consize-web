(ns consize.web.repl
	(:use [clojure.string :only [split]])
	(:require ;[consize.web.core :as consize])
						[consize.web.vm :as consize])
	)

(def VM consize/VM)
(def *out*)
(def *in*)

(defn log-js [args]
	(.log js/console args))

(defn flush []
	(log-js "FLUSH")
	(set! *in* ""))

(defn read-line []
	(log-js "READ-LINE")
	*in*)

(defn init []
	(set! *out* (.jqconsole (js/$ "#repl")))
	(set! *print-fn* #(.Write *out* %1))

	(.Prompt
		*out* "true"
		(fn [input]
			(set! *in* input)
			;(consize/start input)
			(println "Consize returns"
				(first ((VM "apply") (first ((VM "func") VM
								(first (apply (VM "tokenize") ((VM "uncomment")
								(reduce str (interpose " " (split input #"\s+")))))))) ())))))


	(.Focus *out*))