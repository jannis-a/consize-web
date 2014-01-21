;*CLJSBUILD-MACRO-FILE*;
(ns consize.web.macros)

(defmacro save-stacks []
	"This macro does the stack saving in runcc (word: func)."
	`~'(when consize.web.core/*resume*
			 (set! consize.web.core/*cs* cs')
			 (set! consize.web.core/*ds* ds')
			 (set! consize.web.core/*dict* dict')))

;(defmacro platform-bind [bindings & body]
;	`(binding [(for [bind bindings]
;		~'consize/bind bind)])
;	~@body)
