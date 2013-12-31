(defproject consize "0.1.0-SNAPSHOT"
  :description "Consize"
  :dependencies [[org.clojure/clojure "1.5.1"]
								 ;[org.clojure/clojurescript "0.0-2127"]
								 ;[com.google.javascript/closure-compiler "r1918"]
								 ;[org.clojure/google-closure-library "0.0-1376-2"]
								 ;[org.mozilla/rhino "1.7R3"]
								 ]
	;:plugins [[lein-cljsbuild "1.0.0-alpha2"]]
  ;:cljsbuild {
  ;  :crossovers [consize]
  ;  :builds [{
  ;		:source-paths ["src-cljs"
	;									 "lib/clojurescript/src/clj"
	;									 "lib/clojurescript/src/cljs"]
	;		 :compiler {
	;			:output-dir "resources/public/js"
  ;      :output-to "resources/public/js/consize.js"
  ;      ;:optimizations :advanced
  ;      :pretty-print true}}]}
  ;:hooks [leiningen.cljsbuild]
	:source-paths ["src-clj"]
	:min-lein-version "2.0.0")
