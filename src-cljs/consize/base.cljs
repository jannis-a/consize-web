(ns consize.base)

(defn str-contains? [s x]
	(not= (.indexOf s x) -1))

(defn mac? []
	(str-contains? (str (.-platform js/navigator)) "Mac"))

(def command-prefix (if (mac?) "Cmd" "Ctrl"))

(defn dom-by-id [element]
	(.getElementById js/document element))

(def dom-append)

(defn dom [o]
	(if (coll? o)
		(let [[tag attrs & body] o]
			(if (keyword? tag)
				(let [elem (.createElement js/document (name tag))]
					(when (map? attrs)
						(doseq [[k v] attrs]
							(when v (.setAttribute elem (name k) v))))
					[(dom-append elem (if (map? attrs) body (cons attrs body)))])
				(mapcat dom o)))
		(when o
			[(.createTextNode js/document (str o))])))

(defn dom-append [parent v]
	(doseq [i (dom v)]
		(.appendChild parent i))
	parent)

(defn- map->js [m]
	(let [out (js-obj)]
		(doseq [[k v] m]
			(aset out (name k) v))
		out))
