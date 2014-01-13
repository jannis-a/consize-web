(ns consize.web.core
	(:use-macros [dommy.macros :only [by-id, node]])
	(:use [consize.web.helpers :only [log]])
	(:require-macros [cljs.core.async.macros :refer [go]]
									 [servant.macros :refer [defservantfn]])
	(:require [cljs.core.async :refer [close! alts! put! take! chan <! >! timeout]]
						[consize.web.filesystem :as fs]
						[consize.web.repl :as repl]
						[dommy.core :as dommy]
						[servant.core :as servant]
						[servant.worker :as worker]))

(defn ^:export bootimage [args]
	(repl/serv-start (str "\\ bootimage.txt run " args)))

(defn ^:export prelude [args]
	(repl/serv-start (str "\\ prelude.txt run " args)))

(defn ^:export say-hi []
	(prelude "say-hi"))

(defn ^:export test []
	(prelude "test-prelude"))

(defn run-timer [seconds]
	(let [state (fn [v] (dommy/set-html! (by-id "timer") v))]
		(go (loop [step (timeout 1000)
							 time 0]
					(state time)
					(<! step)
					(if (= seconds time)
						(state "gave up!")
						(recur
							(timeout 1000)
							(inc time)))))))

(let [w js/window]
	;; Initiliaze filesystem and repl on page load.
	;(set! (.-onload w)
	;			(fn []
	;				(fs/init)
	;				(repl/init)))
	;; Javascript console "shortcuts".
	(aset w "_bootimage" consize.web.core/bootimage)
	(aset w "_prelude" consize.web.core/prelude)
	(aset w "_sayhi" consize.web.core/say-hi)
	(aset w "_test" consize.web.core/test)
	(aset w "_run" consize.web.repl/serv-start))

(defn window-load []
	(run-timer 20)
	(fs/init)
	(repl/init))

(if (servant/webworker?)
	(worker/bootstrap) ;;Sets the worker up to receive messages
	(set! (.-onload js/window) window-load))
