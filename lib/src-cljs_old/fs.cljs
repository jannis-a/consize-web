(set!
	(-> window :requestFileSystem)
	(or
		(-> window :requestFileSystem)
		(-> window :webkitRequestFileSystem)))

(def fs nil)

(defn errorHandler [e]
	(do
		(def msg "")
		(case
				(-> e :code)
			(-> FileError :QUOTA_EXCEEDED_ERR)
			(do (set! msg "QUOTA_EXCEEDED_ERR") break)
			(-> FileError :NOT_FOUND_ERR)
			(do (set! msg "NOT_FOUND_ERR") break)
			(-> FileError :SECURITY_ERR)
			(do (set! msg "SECURITY_ERR") break)
			(-> FileError :INVALID_MODIFICATION_ERR)
			(do (set! msg "INVALID_MODIFICATION_ERR") break)
			(-> FileError :INVALID_STATE_ERR)
			(do (set! msg "INVALID_STATE_ERR") break)
			(do (set! msg "Unknown Error") break))
		nil
		(set!
			(-> (.. document (querySelector "#example-list-fs-ul")) :innerHTML)
			(+ "Error: " msg))
		undefined))

(defn
	initFS
	[]
	(do
		(..
			window
			(requestFileSystem
				(-> window :TEMPORARY)
				(* 1024 1024)
				(fn [filesystem] (do (set! fs filesystem) undefined))
				errorHandler))
		undefined))

(def buttons (.. document (querySelectorAll "#example-list-fs button")))

(def filelist (.. document (querySelector "#example-list-fs-ul")))

(if
		(>= (-> buttons :length) 3)
	(do
		(..
			(get buttons 0)
			(addEventListener
				"click"
				(fn
					[e]
					(do
						(if (not fs) nil)
						(..
							(-> fs :root)
							(getFile "log.txt" {:create true} nil errorHandler))
						(..
							(-> fs :root)
							(getFile "song.mp3" {:create true} nil errorHandler))
						(..
							(-> fs :root)
							(getDirectory "mypictures" {:create true} nil errorHandler))
						(set! (-> filelist :innerHTML) "Files created.")
						undefined))
				false))
		(..
			(get buttons 1)
			(addEventListener
				"click"
				(fn
					[e]
					(do
						(if (not fs) nil)
						(def dirReader (.. (-> fs :root) createReader))
						(..
							dirReader
							(readEntries
								(fn
									[entries]
									(do
										(if
												(not (-> entries :length))
											(set! (-> filelist :innerHTML) "Filesystem is empty.")
											(set! (-> filelist :innerHTML) ""))
										(def fragment (.. document createDocumentFragment))
										(dofor
											[(do (def i 0) (def entry nil))
											 (set! entry (get entries i))
											 (inc! i)]
											(do
												(def
													img
													(if
															(-> entry :isDirectory)
														"<img src=\"http://www.html5rocks.com/static/images/tutorials/icon-folder.gif\">"
														"<img src=\"http://www.html5rocks.com/static/images/tutorials/icon-file.gif\">"))
												(def li (.. document (createElement "li")))
												(set!
													(-> li :innerHTML)
													(.. [img "<span>" (-> entry :name) "</span>"] (join "")))
												(.. fragment (appendChild li))))
										(.. filelist (appendChild fragment))
										undefined))
								errorHandler))
						undefined))
				false))
		(..
			(get buttons 2)
			(addEventListener
				"click"
				(fn
					[e]
					(do
						(if (not fs) nil)
						(def dirReader (.. (-> fs :root) createReader))
						(..
							dirReader
							(readEntries
								(fn
									[entries]
									(do
										(dofor
											[(do (def i 0) (def entry nil))
											 (set! entry (get entries i))
											 (inc! i)]
											(if
													(-> entry :isDirectory)
												(..
													entry
													(removeRecursively (fn [] undefined) errorHandler))
												(.. entry (remove (fn [] undefined) errorHandler))))
										(set! (-> filelist :innerHTML) "Directory emptied.")
										undefined))
								errorHandler))
						undefined))
				false))))

(if (-> window :requestFileSystem) (initFS))

