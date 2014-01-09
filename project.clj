(defproject consize "0.1.0-SNAPSHOT"
	:description "A project containing Consize as CLI and Web App"
	:author ["Consize: Dominikus Herzberg, Heilbronn University"
					 "Web App: Jannis Assenheimer, Heilbronn University"
					 "Web App: Christian Coward, Heilbronn University"]
	:license {:name "New BSD Licence"
						:url "http://opensource.org/licenses/BSD-3-Clause"
						:distribution :manual}
	:dependencies [[org.clojure/clojure "1.5.1"]
								 [org.clojure/clojurescript "0.0-2138"]
								 [prismatic/dommy "0.1.1"]]
	:plugins [[lein-cljsbuild "1.0.0-alpha2"]]
	:cljsbuild {
		:builds {
			:deploy {
				:source-paths ["src"]
				:compiler {
					:output-to "resources/public/js/consize.min.js"
					:optimizations :advanced
					:externs ["externs.js"]
					:pretty-print false}}
			:dev {
				:source-paths ["src"]
				:compiler {
					:output-to "resources/public/js/consize.js"
					:optimizations :whitespace}}}}
	:main consize.cli
	:min-lein-version "2.0.0")
