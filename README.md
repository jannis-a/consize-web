# Consize as CLI and web app
## A conconcatenative programming language
This package contains the original, slightly modified version of Consize to be
compatible with leiningen and a ClojureScript port which runs completely on
JavaScript - which is faster than the original version by the way. :)  

At this time the web app only runs the prelude, changes are required to be able 
to run the bootimage with a custom command for example. But due the lack of time
 this is not included.
 
There are also some todos. To make the workaround of exiting Consize on each 
**read-line** obsolete, core.async should be implemented. Maybe the 
ClojureScript **servant** library should be implemented which gives us real 
threads. This project should use ClojureScript crossovers in future. This would 
reduce the lines of code heavily and makes maintaining easier as only one file
has to be updated if there are changes in the Consize Clojure file.

## How to compile and use
To compile this project leiningen is required.

### Run Consize in the terminal
`cd resources/consize`  
`lein run \\ prelude.txt run say-hi` (double backslash required with leiningen!)

### Compile the ClojureScript port
This project contains two compile profiles for the ClojureScript port. Both
profiles compile to a single file which contains all code needed for run
(except jq-console, CodeMirror and jQuery). It is possible to compile both
profiles at the same time.  
`lein cljsbuild <once/auto>` (compile once or automatically on file change)

#### Deploy
This profile compiles to a munged (shortened variable and function names)
and minified JavaScript file (~200kb). If you want a really fast web app, use 
this profile and edit the **resources/public/index.html** to use 
**consize.min.js** instead of **consize.js**.  
`lein cljsbuild deploy <once/auto>`

#### Dev
This profile compiles to huge, readable JavaScript file (~1,5mb). It will also
generate a sourcemap file - this enables to see the ClojurScript code instead of
 JavaScript code in the browser developer tools which makes debugging very easy.
This requires to store all ClojureScript **and** JavaScript files in seperate
directory which makes the output really huge.  
`lein cljsbuild dev <once/auto>`

### Update bootstrapping
If one of the .txt files in **resources/consize** gets updated, execute the 
following command **before** compiling ClojureScript (needs only one execution 
if files in **resources/consize** are updated):  
`lein bootstrapper`

### Using the web app
After compiling the files, just open the **resources/public/index.html** in your
 prefered browser. We recommend Chrome - it's 4x faster than Firefox. Chrome on 
Windows has a bug with jq-console, writing **\\**, **{**, **}**, **[**, **]** is 
not possible. To solve this problem we implemented shortcuts, they're displayed 
on the page.    

If you load the page the script will save **bootimage.txt**, **prelude.txt**, 
**prelude-dump.txt** and **prelude-test.txt** automatically in JavaScript 
localStorage. Editing these files is not recommended.
  
JavaScript has one problem - it's only singlethreaded. The loop Consize starts 
will hang the tab, so making inputs while running the Consize REPL is not 
possible. We solved this by exiting Consize every time **read-line** is 
executed. The stacks will get saved to variables which we can easily read on 
resuming Consize. This approach has one advantage over using Consize words to
save the current state - it's really fast. Using Consize words would slow down 
the whole thing heavily (5-10seks between each input).  

The web app uses **prelude-dump.txt** to run Consize to improve start time.

## Used software

### Clojure(Script)
* [leiningen](https://github.com/technomancy/leiningen)
* [lein-cljsbuild](https://github.com/emezeske/lein-cljsbuild)
* [org.clojure/clojure](https://github.com/clojure/clojure)
* [org.clojure/clojurescript](https://github.com/clojure/clojurescript)
* [org.clojure/core.async](https://github.com/clojure/core.async)
* [prismatic/dommy](https://github.com/Prismatic/dommy)

### JavaScript
* [jQuery](https://github.com/jquery/jquery)
* [jq-console](https://github.com/replit/jq-console)
* [CodeMirror](https://github.com/marijnh/codemirror)  

jq-console and CodeMirror are added as submodules to this repo, but the needed 
files were copied to the **resources/public/js** directory. jQuery, with 
migrate plugin (needed to be compatible with jq-console) and the sourcemap are
also included as copy.

### Other
* [Compass](https://github.com/chriseppstein/compass) (CSS compiler)

## Copyright
* Consize: Dominikus Herzberg (2012, Heilbronn University)
* Web App (2014, Heilbronn University):
    * Jannis Assenheimer
    * Jan Güth
    * Christian Coward
* Distributed under the [New BSD Licence](http://opensource.org/licenses/BSD-3-Clause), the same as Consize.
