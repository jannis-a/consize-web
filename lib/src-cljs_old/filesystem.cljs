(ns filesystem.filesystem)

(def success-callback)

(def error-callback)

(defn request-file-system [type size]
	(.webkitRequestFileSystem js/window
														(aget js/window (name type))
														size
														success-callback
														error-callback))

(defn request-quota [type size]
	(if-let [storage (.-webkitPersistentStorage js/navigator)]
		; Chrome 27 and up
		(.requestQuota storage size success-callback error-callback)
		; Chrome 26
		(.requestQuota (.-webkitStorageInfo js/window)
									 (aget js/window (name type))
									 size
									 success-callback
									 error-callback)))

(defn request-quota-then-filesystem [type size]
	(let [granted-bytes (request-quota type size)]
		(request-file-system type granted-bytes)))

(defn filereader [obj]
	(let [reader (js/FileReader.)
				; onloadend actually triggers a progress event
				; we want the actual file contents
				success-callback #(success-callback (-> % .-currentTarget .-result))]
		(set! (.-onerror reader) error-callback)
		(set! (.-onloadend reader) success-callback)
		(.readAsArrayBuffer reader obj)))

(defn file? [obj] (instance? js/File obj))

(defn slice [file offset length]
	{:pre [(file? file)]}
	(.slice file offset (+ offset length)))
