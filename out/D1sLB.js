goog.provide('consize.web');
goog.require('cljs.core');
goog.require('consize.filesystem');
goog.require('consize.repl');
goog.require('consize.core');
goog.require('clojure.browser.dom');
consize.web._STAR_command_line_args_STAR_ = "\\ bootimage.txt run";
consize.web.slurp = consize.filesystem.file_load;
consize.web.spit = consize.filesystem.file_save;
consize.web.VM = consize.core.VM;
consize.web.evaluate_file = (function evaluate_file(editor,console){
var text = editor.getValue();
consize.repl.pep.call(null,console,text);
return consize.filesystem.file_save.call(null,"consize.cljs",text);
});
window.onload = (function (){
consize.filesystem.init.call(null,"files");
var console = consize.repl.init.call(null,"console");
var editor = consize.filesystem.editor.call(null,"editor");
consize.repl.register_shortcuts.call(null,console,cljs.core.ObjMap.fromObject(["E"],{"E":(function (){
var this_console = this;
return consize.web.evaluate_file.call(null,editor,this_console);
})}));
return consize.filesystem.register_shortcuts.call(null,editor,cljs.core.ObjMap.fromObject(["E"],{"E":(function (p1__3311_SHARP_){
return consize.web.evaluate_file.call(null,p1__3311_SHARP_,console);
})}));
});
