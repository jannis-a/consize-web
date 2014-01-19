(ns consize.web.app
	(:require	[consize.web.bootstrap :as bootstrap]
						[consize.web.filesystem :as fs]
						[consize.web.repl :as repl]
						[consize.web.core :as core]))

(def consize core/run)

(defn ^:export bootimage [args]
	"Run bootimage with arguments."
	(consize (str "\\ bootimage.txt run " args)))

(defn ^:export prelude [args]
	"Run prelude with arguments."
	(consize (str "\\ prelude.txt run " args)))

(defn ^:export say-hi []
	"Run prelude and start repl."
	(prelude "say-hi"))

(defn ^:export test []
	"Run prelude tests."
	(prelude "test-prelude"))

(defn init []
	;; Bootstrap needed files
	(bootstrap/init)
	;; Javascript console "shortcuts".
	(doto js/window
		(aset "_consize" consize)
		(aset "_bootimage" bootimage)
		(aset "_prelude" prelude)
		;(aset "_sayhi" say-hi)
		(aset "_test" test))
	;; Initiliaze filesystem and repl.
	(fs/init)
	(core/init))

(.ready (js/jQuery js/document) init)


