(ns consize.cli
	(:require [consize.core :as consize]))

;; OS (http://docs.oracle.com/javase/1.4.2/docs/api/java/lang/System.html)
(def current-time-millis (System/currentTimeMillis))
(def operating-system (System/getProperty "os.name"))

(defn -main [& args]
	"Bind platform specific functions and run Consize."
	(binding [consize/current-time-millis current-time-millis
						consize/operating-system operating-system]
		(consize/returns args)))
