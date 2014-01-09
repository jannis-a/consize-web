(defproject consize "0.1.0-SNAPSHOT"
	:description "A project containing Consize as CLI and Web App"
	:author ["Consize: Dominikus Herzberg, Heilbronn University"
					 "Web App: Jannis Assenheimer, Heilbronn University"
					 "Web App: Christian Coward, Heilbronn University"]
	:license {:name         "New BSD Licence"
						:url          "http://opensource.org/licenses/BSD-3-Clause"
						:distribution :manual}
	:dependencies [[org.clojure/clojure "1.5.1"]
								 [org.clojure/clojurescript "0.0-2138"]
								 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
								 [prismatic/dommy "0.1.1"]]
	:plugins [[lein-cljsbuild "1.0.0-alpha2"]]
	:cljsbuild {
		:builds {
			:dev {
				:source-paths ["src"]
				:compiler {
					:optimizations :none
					:output-to		 "resources/public/js/out/consize.js"
					:output-dir    "resources/public/js/out"}}
			:deploy {
				:source-paths ["src"]
				:compiler {
					:pretty-print  false
					:optimizations :advanced
					:externs       ["externs.js"]
					:output-to     "resources/public/js/consize.js"}}}}
	:main consize.cli
	:min-lein-version "2.0.0")
