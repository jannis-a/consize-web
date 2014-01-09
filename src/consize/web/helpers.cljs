(ns consize.web.helpers
	(:require [cljs.reader :as reader]))

(def ^:private char-list
	"Escape characters for read-string."
	{"\\backspace" "\b",
	 "\\formfeed"  "\f",
	 "\\newline"   "\n",
	 "\\return"    "\r",
	 "\\tab"       "\t",
	 "\\space"     " ",
	 ;; unsupported
	 "\\c"         "c",})

(defn char? [s]
	"Tests if string is in char list."
	(not (nil? (char-list s))))

(defn log [s]
	"A simple js console logger."
	(.log js/console s))

(defn map->js [m]
	"Transform functional map to JS map."
	(let [out (js-obj)]
		(doseq [[k v] m]
			(aset out (name k) v))
		out))

(defn operating-system []
	"Return a simple os string."
	(.-platform js/navigator))

(defn read-string [s]
	"Work-around for broken read-string from cljs."
	; TODO unicode chars
	(if (char? s)
		(char-list s)
		(reader/read-string s)))

(defn time-millis []
	"Get the current time in milliseconds."
	(.getUTCMilliseconds js/Date))
