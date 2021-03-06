(defproject consize "0.1.0-SNAPSHOT"
	:description "A project containing Consize as CLI and Web App"
	:author ["Consize: Dominikus Herzberg, Heilbronn University"
					 "Web App: Jannis Assenheimer, Heilbronn University"
					 "Web App: Jan Gueth, Heilbronn University"
					 "Web App: Christian Coward, Heilbronn University"]
	:license {:name "New BSD Licence"
						:url "http://opensource.org/licenses/BSD-3-Clause"
						:distribution :manual}
	:dependencies [[org.clojure/clojure "1.5.1"]
								 [org.clojure/clojurescript "0.0-2138"]
								 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
								 [prismatic/dommy "0.1.2"]]
	:plugins [[lein-cljsbuild "1.0.1"]
						[lein-externs "0.1.3"]]
	:cljsbuild {
		:crossovers [consize.core]
		:builds {
			;; Generates a munged and compressed javascript file.
			:deploy {
				:source-paths ["src"]
				:compiler {
					:output-to "resources/public/js/consize.js"
					:externs ["resources/externs.js"]
					:optimizations :advanced
					:pretty-print false
					:warnings false}}
			;; Generates a huge, readable javascript file including sourcemap.
			:dev {
				:source-paths ["src"]
				:compiler {
					:output-to "resources/consize/out.js"
					:source-map "resources/consize/sources.map"
					:output-dir "resources/consize"
					:optimizations :whitespace}}}}
	:main consize.cli
	:aliases {"bootimage" 	 ["run" "\\ bootimage.txt run "],
						"prelude"   	 ["run"	"\\ prelude.txt run "],
						"prelude-dump" ["run"	"\\ prelude-dump.txt run "],
						"prelude-test" ["run" "\\ prelude-dump.txt run test-prelude "],
						"say-hi"			 ["run" "\\ prelude-dump.txt run say-hi "],
						"bootstrapper" ["run" "-m" "consize.bootstrapper"]}
	:min-lein-version "2.0.0")
