goog.provide('consize.filesystem');
goog.require('cljs.core');
goog.require('consize.base');
goog.require('consize.base');
goog.require('consize.repl');
consize.filesystem.editor_file = "consize.cljs";
consize.filesystem.storage = window.localStorage;
consize.filesystem.file_load = (function file_load(file){
return consize.filesystem.storage.getItem(file);
});
consize.filesystem.file_save = (function file_save(file,content){
return consize.filesystem.storage.setItem(file,content);
});
consize.filesystem.file_list = (function file_list(){
var iter__2161__auto__ = (function iter__4334(s__4335){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4335__$1 = s__4335;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__4335__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var file = cljs.core.first.call(null,xs__4579__auto__);
return cljs.core.cons.call(null,consize.filesystem.storage.key(file),iter__4334.call(null,cljs.core.rest.call(null,s__4335__$1)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2161__auto__.call(null,cljs.core.range.call(null,0,consize.filesystem.storage.length));
});
consize.filesystem.map__GT_js = (function map__GT_js(m){
var out = {};
var G__4338_4340 = cljs.core.seq.call(null,m);
while(true){
if(G__4338_4340)
{var vec__4339_4341 = cljs.core.first.call(null,G__4338_4340);
var k_4342 = cljs.core.nth.call(null,vec__4339_4341,0,null);
var v_4343 = cljs.core.nth.call(null,vec__4339_4341,1,null);
(out[cljs.core.name.call(null,k_4342)] = v_4343);
{
var G__4344 = cljs.core.next.call(null,G__4338_4340);
G__4338_4340 = G__4344;
continue;
}
} else
{}
break;
}
return out;
});
consize.filesystem.register_shortcuts = (function register_shortcuts(editor,key_map){
var js_key_map = consize.filesystem.map__GT_js.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2161__auto__ = (function iter__4349(s__4350){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4350__$1 = s__4350;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__4350__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var vec__4352 = cljs.core.first.call(null,xs__4579__auto__);
var k = cljs.core.nth.call(null,vec__4352,0,null);
var callback = cljs.core.nth.call(null,vec__4352,1,null);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([[cljs.core.str(consize.base.command_prefix),cljs.core.str("-"),cljs.core.str(k)].join(''),callback], true),iter__4349.call(null,cljs.core.rest.call(null,s__4350__$1)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2161__auto__.call(null,key_map);
})()));
return editor.addKeyMap(js_key_map);
});
consize.filesystem.editor = (function editor(editor_selector){
var G__4354 = CodeMirror.fromTextArea(consize.base.getElementById.call(null,editor_selector),consize.filesystem.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'mode","\uFDD0'lineNumbers","\uFDD0'matchBrackets"],{"\uFDD0'mode":"clojure","\uFDD0'lineNumbers":true,"\uFDD0'matchBrackets":true})));
G__4354.setValue(consize.filesystem.file_load.call(null,"consize.cljs"));
return G__4354;
});
consize.filesystem.init = (function init(list_selector){
console.log("> ",list_selector);
var files = consize.base.getElementById.call(null,list_selector);
var iter__2161__auto__ = (function iter__4357(s__4358){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4358__$1 = s__4358;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__4358__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var file = cljs.core.first.call(null,xs__4579__auto__);
return cljs.core.cons.call(null,(function (){var li = document.createElement("li");
li.innerHTML = file;
return files.appendChild(li);
})(),iter__4357.call(null,cljs.core.rest.call(null,s__4358__$1)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2161__auto__.call(null,consize.filesystem.file_list.call(null));
});

// Analyzer namespace snapshot:
cljs.core.swap_BANG_.call(null,cljs.core.namespaces,cljs.core.update_in,cljs.core.PersistentVector.fromArray([(new cljs.core.Symbol(null,"consize.filesystem"))], true),(function (old){
return cljs.core.deep_merge_with.call(null,(function() { 
var G__4359__delegate = function (m){
return cljs.core.first.call(null,m);
};
var G__4359 = function (var_args){
var m = null;
if (goog.isDef(var_args)) {
  m = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4359__delegate.call(this, m);
};
G__4359.cljs$lang$maxFixedArity = 0;
G__4359.cljs$lang$applyTo = (function (arglist__4360){
var m = cljs.core.seq(arglist__4360);;
return G__4359__delegate(m);
});
G__4359.cljs$lang$arity$variadic = G__4359__delegate;
return G__4359;
})()
,cljs.core.hash_map("\uFDD0'defs",cljs.core.hash_map((new cljs.core.Symbol(null,"file-list")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([])),"\uFDD0'name",(new cljs.core.Symbol(null,"consize.filesystem/file-list")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",0,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",16,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/filesystem.cljs"),(new cljs.core.Symbol(null,"map->js")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"m"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"m")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"consize.filesystem/map->js")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",20,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/filesystem.cljs"),(new cljs.core.Symbol(null,"file-load")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"file"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"file")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"consize.filesystem/file-load")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",10,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/filesystem.cljs"),(new cljs.core.Symbol(null,"register-shortcuts")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"editor")),(new cljs.core.Symbol(null,"key-map"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"editor")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"key-map")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"consize.filesystem/register-shortcuts")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",26,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/filesystem.cljs"),(new cljs.core.Symbol(null,"file-save")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"file")),(new cljs.core.Symbol(null,"content"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"file")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"content")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"consize.filesystem/file-save")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",13,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/filesystem.cljs"),(new cljs.core.Symbol(null,"/")),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"cljs.core//"))),(new cljs.core.Symbol(null,"editor-file")),cljs.core.hash_map("\uFDD0'line",5,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/filesystem.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"consize.filesystem/editor-file"))),(new cljs.core.Symbol(null,"storage")),cljs.core.hash_map("\uFDD0'line",7,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/filesystem.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"consize.filesystem/storage"))),(new cljs.core.Symbol(null,"init")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"list-selector"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"list-selector")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"consize.filesystem/init")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",44,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/filesystem.cljs"),(new cljs.core.Symbol(null,"editor")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"editor-selector"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"editor-selector")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"consize.filesystem/editor")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",34,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/filesystem.cljs")),"\uFDD0'imports",null,"\uFDD0'uses-macros",null,"\uFDD0'requires",cljs.core.hash_map((new cljs.core.Symbol(null,"consize.base")),(new cljs.core.Symbol(null,"consize.base")),(new cljs.core.Symbol(null,"repl")),(new cljs.core.Symbol(null,"consize.repl"))),"\uFDD0'uses",cljs.core.hash_map((new cljs.core.Symbol(null,"command-prefix")),(new cljs.core.Symbol(null,"consize.base")),(new cljs.core.Symbol(null,"getElementById")),(new cljs.core.Symbol(null,"consize.base"))),"\uFDD0'excludes",cljs.core.set([]),"\uFDD0'doc",null,"\uFDD0'name",(new cljs.core.Symbol(null,"consize.filesystem"))),old);
}));
