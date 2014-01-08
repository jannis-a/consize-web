(ns consize.cli
	(:require [consize.core :as consize]))

(defn -main [& args]
	(consize/init))
