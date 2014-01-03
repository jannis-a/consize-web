goog.provide('consize.web.filesystem');
goog.require('cljs.core');
goog.require('consize.web.repl');
goog.require('clojure.browser.event');
goog.require('clojure.browser.dom');
goog.require('cljs.repl');
goog.require('cljs.io');
consize.web.filesystem.contrib = cljs.core.PersistentVector.fromArray(["consize.clj","bootimage.txt","prelude.txt"], true);
consize.web.filesystem.storage = window.localStorage;
consize.web.filesystem.lazy_contains_QMARK_ = (function lazy_contains_QMARK_(col,key){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([key]),col);
});
consize.web.filesystem.files = (function (){var iter__2144__auto__ = (function iter__3334(s__3335){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3335__$1 = s__3335;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__3335__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var item = cljs.core.first.call(null,xs__4579__auto__);
return cljs.core.cons.call(null,consize.web.filesystem.storage.key(item),iter__3334.call(null,cljs.core.rest.call(null,s__3335__$1)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2144__auto__.call(null,cljs.core.range.call(null,0,consize.web.filesystem.storage.length));
})();
consize.web.filesystem.slurp = (function slurp(item){
return consize.web.filesystem.storage.getItem(item);
});
consize.web.filesystem.spit = (function spit(item,content){
return consize.web.filesystem.storage.setItem(item,content);
});
consize.web.filesystem.map__GT_js = (function map__GT_js(m){
var out = {};
var G__3338_3340 = cljs.core.seq.call(null,m);
while(true){
if(G__3338_3340)
{var vec__3339_3341 = cljs.core.first.call(null,G__3338_3340);
var k_3342 = cljs.core.nth.call(null,vec__3339_3341,0,null);
var v_3343 = cljs.core.nth.call(null,vec__3339_3341,1,null);
(out[cljs.core.name.call(null,k_3342)] = v_3343);
{
var G__3344 = cljs.core.next.call(null,G__3338_3340);
G__3338_3340 = G__3344;
continue;
}
} else
{}
break;
}
return out;
});
consize.web.filesystem.open_file = (function open_file(file,editor,editor_id){
var ro = consize.web.filesystem.lazy_contains_QMARK_.call(null,consize.web.filesystem.contrib,file);
clojure.browser.dom.set_value.call(null,clojure.browser.dom.get_element.call(null,[cljs.core.str(editor_id),cljs.core.str("-name")].join('')),file);
return editor.setValue((cljs.core.truth_(ro)?cljs.io.file_read.call(null,[cljs.core.str("consize/"),cljs.core.str(file)].join('')):consize.web.filesystem.slurp.call(null,file)));
});
consize.web.filesystem.list_add = (function list_add(file,list_id,editor,editor_id){
var item = clojure.browser.dom.element.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'li",file], true));
clojure.browser.dom.append.call(null,clojure.browser.dom.get_element.call(null,[cljs.core.str(list_id),cljs.core.str("-consize")].join('')),item);
return clojure.browser.event.listen.call(null,item,"\uFDD0'click",(function (ev){
return consize.web.filesystem.open_file.call(null,file,editor,editor_id);
}));
});
consize.web.filesystem.editor = (function editor(editor_id){
var G__3346 = CodeMirror.fromTextArea(clojure.browser.dom.get_element.call(null,[cljs.core.str(editor_id),cljs.core.str("-input")].join('')),consize.web.filesystem.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'mode","\uFDD0'lineNumbers","\uFDD0'matchBrackets"],{"\uFDD0'mode":"clojure","\uFDD0'lineNumbers":true,"\uFDD0'matchBrackets":true})));
G__3346.setValue(";; Develop here...");
return G__3346;
});
consize.web.filesystem.init = (function init(list_id,editor_id){
var editor = consize.web.filesystem.editor.call(null,editor_id);
clojure.browser.event.listen.call(null,clojure.browser.dom.get_element.call(null,[cljs.core.str("new-file")].join('')),"\uFDD0'click",(function (ev){
clojure.browser.dom.set_value.call(null,clojure.browser.dom.get_element.call(null,[cljs.core.str(editor_id),cljs.core.str("-name")].join('')),"");
return editor.setValue("");
}));
clojure.browser.event.listen.call(null,clojure.browser.dom.get_element.call(null,[cljs.core.str(editor_id),cljs.core.str("-eval")].join('')),"\uFDD0'click",(function (ev){
var content = editor.getValue();
if(cljs.core.empty_QMARK_.call(null,content))
{return null;
} else
{return cljs.repl.eval_print.call(null,content);
}
}));
clojure.browser.event.listen.call(null,clojure.browser.dom.get_element.call(null,[cljs.core.str(editor_id),cljs.core.str("-save")].join('')),"\uFDD0'click",(function (ev){
var name = clojure.browser.dom.get_value.call(null,clojure.browser.dom.get_element.call(null,[cljs.core.str(editor_id),cljs.core.str("-name")].join('')));
var content = editor.getValue();
if(cljs.core.empty_QMARK_.call(null,(function (){var and__3941__auto__ = name;
if(cljs.core.truth_(and__3941__auto__))
{return content;
} else
{return and__3941__auto__;
}
})()))
{return null;
} else
{consize.web.filesystem.spit.call(null,name,content);
if(cljs.core.truth_(consize.web.filesystem.lazy_contains_QMARK_.call(null,consize.web.filesystem.files,name)))
{return null;
} else
{return consize.web.filesystem.list_add.call(null,name,list_id,editor,editor_id);
}
}
}));
cljs.core.doall.call(null,(function (){var iter__2144__auto__ = (function iter__3350(s__3351){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3351__$1 = s__3351;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__3351__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var file = cljs.core.first.call(null,xs__4579__auto__);
return cljs.core.cons.call(null,consize.web.filesystem.spit.call(null,file,cljs.io.file_read.call(null,[cljs.core.str("consize/"),cljs.core.str(file)].join(''))),iter__3350.call(null,cljs.core.rest.call(null,s__3351__$1)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2144__auto__.call(null,consize.web.filesystem.contrib);
})());
var G__3352 = cljs.core.seq.call(null,consize.web.filesystem.files);
while(true){
if(G__3352)
{var file = cljs.core.first.call(null,G__3352);
consize.web.filesystem.list_add.call(null,file,list_id,editor,editor_id);
{
var G__3353 = cljs.core.next.call(null,G__3352);
G__3352 = G__3353;
continue;
}
} else
{return null;
}
break;
}
});

// Analyzer namespace snapshot:
cljs.core.swap_BANG_.call(null,cljs.core.namespaces,cljs.core.update_in,cljs.core.PersistentVector.fromArray([(new cljs.core.Symbol(null,"consize.web.filesystem"))], true),(function (old){
return cljs.core.deep_merge_with.call(null,(function() { 
var G__3354__delegate = function (m){
return cljs.core.first.call(null,m);
};
var G__3354 = function (var_args){
var m = null;
if (goog.isDef(var_args)) {
  m = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3354__delegate.call(this, m);
};
G__3354.cljs$lang$maxFixedArity = 0;
G__3354.cljs$lang$applyTo = (function (arglist__3355){
var m = cljs.core.seq(arglist__3355);;
return G__3354__delegate(m);
});
G__3354.cljs$lang$arity$variadic = G__3354__delegate;
return G__3354;
})()
,cljs.core.hash_map("\uFDD0'defs",cljs.core.hash_map((new cljs.core.Symbol(null,"files")),cljs.core.hash_map("\uFDD0'line",17,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/web/filesystem.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"consize.web.filesystem/files"))),(new cljs.core.Symbol(null,"spit")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"item")),(new cljs.core.Symbol(null,"content"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"item")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"content")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"consize.web.filesystem/spit")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",24,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/web/filesystem.cljs"),(new cljs.core.Symbol(null,"contrib")),cljs.core.hash_map("\uFDD0'line",8,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/web/filesystem.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"consize.web.filesystem/contrib"))),(new cljs.core.Symbol(null,"list-add")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"file")),(new cljs.core.Symbol(null,"list-id")),(new cljs.core.Symbol(null,"editor")),(new cljs.core.Symbol(null,"editor-id"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"file")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"list-id")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"editor")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"editor-id")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"consize.web.filesystem/list-add")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",4,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",44,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/web/filesystem.cljs"),(new cljs.core.Symbol(null,"map->js")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"m"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"m")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"consize.web.filesystem/map->js")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",27,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/web/filesystem.cljs"),(new cljs.core.Symbol(null,"/")),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"cljs.core//"))),(new cljs.core.Symbol(null,"storage")),cljs.core.hash_map("\uFDD0'line",11,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/web/filesystem.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"consize.web.filesystem/storage"))),(new cljs.core.Symbol(null,"slurp")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"item"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"item")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"consize.web.filesystem/slurp")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",21,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/web/filesystem.cljs"),(new cljs.core.Symbol(null,"init")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"list-id")),(new cljs.core.Symbol(null,"editor-id"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"list-id")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"editor-id")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"consize.web.filesystem/init")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",61,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/web/filesystem.cljs"),(new cljs.core.Symbol(null,"lazy-contains?")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"col")),(new cljs.core.Symbol(null,"key"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"col")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"key")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"consize.web.filesystem/lazy-contains?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",14,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/web/filesystem.cljs"),(new cljs.core.Symbol(null,"editor")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"editor-id"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"editor-id")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"consize.web.filesystem/editor")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",52,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/web/filesystem.cljs"),(new cljs.core.Symbol(null,"open-file")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"file")),(new cljs.core.Symbol(null,"editor")),(new cljs.core.Symbol(null,"editor-id"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"file")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"editor")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"editor-id")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"consize.web.filesystem/open-file")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",33,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/web/filesystem.cljs")),"\uFDD0'imports",null,"\uFDD0'uses-macros",null,"\uFDD0'requires",cljs.core.hash_map((new cljs.core.Symbol(null,"repl")),(new cljs.core.Symbol(null,"consize.web.repl")),(new cljs.core.Symbol(null,"event")),(new cljs.core.Symbol(null,"clojure.browser.event")),(new cljs.core.Symbol(null,"dom")),(new cljs.core.Symbol(null,"clojure.browser.dom")),(new cljs.core.Symbol(null,"cljs.repl")),(new cljs.core.Symbol(null,"cljs.repl")),(new cljs.core.Symbol(null,"io")),(new cljs.core.Symbol(null,"cljs.io"))),"\uFDD0'uses",null,"\uFDD0'excludes",cljs.core.set([]),"\uFDD0'doc",null,"\uFDD0'name",(new cljs.core.Symbol(null,"consize.web.filesystem"))),old);
}));
