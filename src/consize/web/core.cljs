(ns consize.web.core
	(:require [consize.web.filesystem :as fs]
						[consize.web.repl :as repl]))

(defn ^:export bootimage [args]
	(repl/start (str "\\ bootimage.txt run " args)))

(defn ^:export prelude [args]
	(repl/start (str "\\ prelude.txt run " args)))

(defn ^:export say-hi []
	(prelude "say-hi"))

(defn ^:export test []
	(prelude "test-prelude"))

(let [w js/window]
	;; Initiliaze filesystem and repl on page load.
	(set! (.-onload w)
				(fn []
					(fs/init)
					(repl/init)))
	;; Javascript console "shortcuts".
	(aset w "_bootimage" consize.web.core/bootimage)
	(aset w "_prelude" consize.web.core/prelude)
	(aset w "_sayhi" consize.web.core/say-hi)
	(aset w "_test" consize.web.core/test)
	(aset w "_run" consize.web.repl/start))
