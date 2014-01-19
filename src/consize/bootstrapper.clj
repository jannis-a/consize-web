(ns consize.bootstrapper
	(:require [clojure.string :as string]
						[clojure.java.io :as io]))

(def path "resources/consize/")
(def resources ["bootimage.txt" "prelude.txt"
								"prelude-dump.txt" "prelude-test.txt"])
(def destination "src/consize/web/bootstrap.cljs")

(defn -main [& args]
	(with-open [out (io/writer destination)]
		(.write out "(ns consize.web.bootstrap\n")
		(.write out "\t(:use [consize.web.filesystem :only [slurp spit]]))\n\n")
		(.write out "(defn ^:export init []\n")
		(doseq [file resources]
			(.write out (str "\t(spit \"" file "\" \""))
			(with-open [rdr (io/reader (str path file))]
				(doseq [line (line-seq rdr)]
					(.write out (str (string/replace (string/replace line #"\"" "'") #"\\"
																		 #(str %1 %1)) "\n"))))
			(.write out "\")\n\n"))
		(.write out ")\n")))
