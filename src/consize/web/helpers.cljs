(ns consize.web.helpers)

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
