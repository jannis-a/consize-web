(ns consize.web.helpers
	(:require [cljs.reader :as reader]))

(defn log [s]
	"Simple javascript console logger."
	(.log js/console s))

(defn map->js [m]
	"Transform functional map to javascript map."
	(let [out (js-obj)]
		(doseq [[k v] m]
			(aset out (name k) v))
		out))

(defn operating-system []
	"Get the operating system as string."
	;; TODO more details?
	(.-platform js/navigator))

(defn time-millis []
	"Get the current system time in milli seconds."
	(.now js/Date))

(def ^:private escape-chars
	"Escape characters for read-string." {
	"\\backspace" "\b",
	"\\formfeed"	"\f"
	"\\newline"		"\n"
	"\\return"		"\r",
	"\\tab"				"\t",
	"\\space"			" ",
})

(defn char? [s]
	"Check if string is in escape characters map."
	(not (nil? (escape-chars s))))

(defn read-string [s]
	"Workaround for broken read-string from clojurescript."
	;; TODO handle unicode characters
	(if (char? s)
		;; Return value from escape chars map.
		(escape-chars s)
		;; Call clojurescript read-string.
		(reader/read-string s)))
