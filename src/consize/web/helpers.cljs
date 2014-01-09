(ns consize.web.helpers
	(:require [cljs.reader :as reader]))

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

(defn map->js [m]
	"Transform functional map to javascript map."
	(let [out (js-obj)]
		(doseq [[k v] m]
			(aset out (name k) v))
		out))

(defn log [s]
	"Simple javascript console logger."
	(.log js/console s))

(defn read-string [s]
	"Workaround for broken read-string from clojurescript."
	;; TODO handle unicode characters
	(if (char? s)
		(escape-chars s)
		(reader/read-string s)))
