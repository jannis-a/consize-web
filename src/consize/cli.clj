(ns consize.cli
	(:require [consize.core :as consize]))

(defn -main [& args]
	"Bind platform specific functions and run Consize."
	;; OS (http://docs.oracle.com/javase/1.4.2/docs/api/java/lang/System.html)
	(binding [consize/current-time-millis (System/currentTimeMillis)
						consize/operating-system (System/getProperty "os.name")]
		(consize/pr-init args)))
