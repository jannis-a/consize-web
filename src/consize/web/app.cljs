(ns consize.web.app
	(:require [cljs.core.async :refer [<! >! chan close! put! take! timeout]]
						[servant.core :as servant]
						[servant.worker :as worker]
						[consize.web.filesystem :as fs]
						[consize.web.repl :as repl]
						[consize.web.core :as core])
	(:require-macros [cljs.core.async.macros :refer [go]]
									 [servant.macros :refer [defservantfn]]))

(def consize core/init)
(def worker-count 2)
(def worker-script "/Consize/public/js/consize.js")

(defservantfn init [args]
							consize)

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

(if (servant/webworker?)
	(worker/bootstrap) ;; Setup worker.
	(.ready (js/jQuery js/document)
		(fn []
			;; Initiliaze filesystem and repl.
			(fs/init)
			(repl/init "#repl")
			;; Javascript console "shortcuts".
			(doto js/window
				(aset "_consize" consize)
				(aset "_bootimage" bootimage)
				(aset "_prelude" prelude)
				(aset "_sayhi" say-hi)
				(aset "_test" test)))))


