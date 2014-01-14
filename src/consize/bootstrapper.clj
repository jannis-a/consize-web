(ns consize.bootstrapper)

(def path "resources/consize/")
(def resources ["consize.clj" "bootimage.txt"
								"prelude.txt" "prelude-test.txt"])

(defn -main [& args]
	(println "(ns consize.web.bootstrap")
	(println \tab "(:use [consize.web.filesystem :only [slurp spit]))" \newline)

	(print "(defn init []")
	(doall
		(for [file resources]
			(print \newline \tab (str "(spit " file " \"" (slurp (str path file)) "\")"))))
	(println ")"))
