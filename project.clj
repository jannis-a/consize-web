(defproject consize "0.1.0-SNAPSHOT"
	:description "Consize"
	:dependencies [[org.clojure/clojure "1.5.1"]
								 [org.clojure/clojurescript "0.0-2138"]
								 [prismatic/dommy "0.1.1"]]
	:plugins [[lein-cljsbuild "1.0.0-alpha2"]]
	:source-paths ["src-clj" "src-cljs"]
	:cljsbuild {
		:builds [{
			:compiler {
				:output-to "resources/public/js/consize.js"
				:optimizations :whitespace
				:pretty-print true}}]}
	:hooks [leiningen.cljsbuild]
	:min-lein-version "2.0.0")
