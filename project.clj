(defproject consize "0.1.0-SNAPSHOT"
	:description "A project containing Consize as CLI and Web App"
	:author ["Consize: Dominikus Herzberg, Heilbronn University"
					 "Web App: Jannis Assenheimer, Heilbronn University"]
	:license {:name "New BSD Licence"
						:url "http://opensource.org/licenses/BSD-3-Clause"
						:distribution :manual
						:comments "same as Consize"}
	:dependencies [[org.clojure/clojure "1.5.1"]
								 [org.clojure/clojurescript "0.0-2138"]
								 [prismatic/dommy "0.1.1"]]
	:plugins [[lein-cljsbuild "1.0.0-alpha2"]]
	:source-paths ["src-clj" "src-cljs"]
	:cljsbuild {
		:builds [{
			:compiler {
				:source-paths ["src-cljs"]
				:output-to "resources/public/js/consize.js"
				:optimizations :whitespace
				:pretty-print true}}]}
	;; Hook the cljsbuild task to Leiningen compile task.
	;:hooks [leiningen.cljsbuild]
	:main cli
	:min-lein-version "2.0.0")
