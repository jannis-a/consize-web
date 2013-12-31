goog.provide('consize.repl');
goog.require('cljs.core');
goog.require('consize.base');
goog.require('consize.base');
goog.require('cljs.repl');
consize.repl.repl_print = (function repl_print(log,text,cls){
var G__4389_4390 = cljs.core.seq.call(null,[cljs.core.str(text)].join('').split(/\n/));
while(true){
if(G__4389_4390)
{var line_4391 = cljs.core.first.call(null,G__4389_4390);
consize.base.dom_append.call(null,log,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":[cljs.core.str("cg "),cljs.core.str((cljs.core.truth_(cls)?[cljs.core.str(" "),cljs.core.str(cls)].join(''):null))].join('')}),line_4391], true));
{
var G__4392 = cljs.core.next.call(null,G__4389_4390);
G__4389_4390 = G__4392;
continue;
}
} else
{}
break;
}
return log.scrollTop = log.scrollHeight;
});
consize.repl.postexpr = (function postexpr(console,expr){
return consize.base.dom_append.call(null,console,cljs.core.PersistentVector.fromArray(["\uFDD0'table",cljs.core.PersistentVector.fromArray(["\uFDD0'tbody",cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":"cg"}),cljs.repl.prompt.call(null)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'td",expr.replace(/\n$/,"")], true)], true)], true)], true));
});
consize.repl.map__GT_js = (function map__GT_js(m){
var out = {};
var G__4395_4397 = cljs.core.seq.call(null,m);
while(true){
if(G__4395_4397)
{var vec__4396_4398 = cljs.core.first.call(null,G__4395_4397);
var k_4399 = cljs.core.nth.call(null,vec__4396_4398,0,null);
var v_4400 = cljs.core.nth.call(null,vec__4396_4398,1,null);
(out[cljs.core.name.call(null,k_4399)] = v_4400);
{
var G__4401 = cljs.core.next.call(null,G__4395_4397);
G__4395_4397 = G__4401;
continue;
}
} else
{}
break;
}
return out;
});
consize.repl.register_shortcuts = (function register_shortcuts(editor,key_map){
var js_key_map = consize.repl.map__GT_js.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2161__auto__ = (function iter__4406(s__4407){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4407__$1 = s__4407;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__4407__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var vec__4409 = cljs.core.first.call(null,xs__4579__auto__);
var k = cljs.core.nth.call(null,vec__4409,0,null);
var callback = cljs.core.nth.call(null,vec__4409,1,null);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([[cljs.core.str(consize.base.command_prefix),cljs.core.str("-"),cljs.core.str(k)].join(''),callback], true),iter__4406.call(null,cljs.core.rest.call(null,s__4407__$1)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2161__auto__.call(null,key_map);
})()));
return document.addEventListener(editor,js_key_map);
});
consize.repl.pep = (function pep(console,expr){
consize.repl.postexpr.call(null,console,expr);
return cljs.repl.eval_print.call(null,expr);
});
/**
* @param {...*} var_args
*/
consize.repl.init = (function() { 
var init__delegate = function (console_selector,prompt_selector){
cljs.repl.init.call(null);
var console = consize.base.getElementById.call(null,console_selector);
var prompt = consize.base.getElementById.call(null,"prompt");
cljs.core._STAR_out_STAR_ = (function (p1__4410_SHARP_){
return consize.repl.repl_print.call(null,console,p1__4410_SHARP_,null);
});
cljs.core._STAR_rtn_STAR_ = (function (p1__4411_SHARP_){
return consize.repl.repl_print.call(null,console,p1__4411_SHARP_,"return");
});
cljs.core._STAR_err_STAR_ = (function (p1__4412_SHARP_){
return consize.repl.repl_print.call(null,console,p1__4412_SHARP_,"error");
});
cljs.core._STAR_print_fn_STAR_ = (function (p1__4413_SHARP_){
return cljs.core._STAR_out_STAR_.call(null,p1__4413_SHARP_);
});
cljs.core.println.call(null,";; Consize Web REPL");
prompt.onkeypress = (function (ev){
if(((function (){var or__3943__auto__ = ev;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return consize.repl.event;
}
})().keyCode === 13))
{var line = prompt.value;
if(cljs.core.truth_(cljs.repl.complete_form_QMARK_.call(null,line)))
{consize.repl.pep.call(null,console,line);
return setTimeout((function (){
return prompt.value = "";
}),0);
} else
{return null;
}
} else
{return null;
}
});
return prompt.focus();
};
var init = function (console_selector,var_args){
var prompt_selector = null;
if (goog.isDef(var_args)) {
  prompt_selector = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return init__delegate.call(this, console_selector, prompt_selector);
};
init.cljs$lang$maxFixedArity = 1;
init.cljs$lang$applyTo = (function (arglist__4414){
var console_selector = cljs.core.first(arglist__4414);
var prompt_selector = cljs.core.rest(arglist__4414);
return init__delegate(console_selector, prompt_selector);
});
init.cljs$lang$arity$variadic = init__delegate;
return init;
})()
;

// Analyzer namespace snapshot:
cljs.core.swap_BANG_.call(null,cljs.core.namespaces,cljs.core.update_in,cljs.core.PersistentVector.fromArray([(new cljs.core.Symbol(null,"consize.repl"))], true),(function (old){
return cljs.core.deep_merge_with.call(null,(function() { 
var G__4415__delegate = function (m){
return cljs.core.first.call(null,m);
};
var G__4415 = function (var_args){
var m = null;
if (goog.isDef(var_args)) {
  m = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4415__delegate.call(this, m);
};
G__4415.cljs$lang$maxFixedArity = 0;
G__4415.cljs$lang$applyTo = (function (arglist__4416){
var m = cljs.core.seq(arglist__4416);;
return G__4415__delegate(m);
});
G__4415.cljs$lang$arity$variadic = G__4415__delegate;
return G__4415;
})()
,cljs.core.hash_map("\uFDD0'defs",cljs.core.hash_map((new cljs.core.Symbol(null,"/")),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"cljs.core//"))),(new cljs.core.Symbol(null,"init")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"console-selector")),(new cljs.core.Symbol(null,"&")),(new cljs.core.Symbol(null,"prompt-selector"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"console-selector")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"prompt-selector")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"consize.repl/init")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",true,"\uFDD0'line",41,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/repl.cljs"),(new cljs.core.Symbol(null,"pep")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"console")),(new cljs.core.Symbol(null,"expr"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"console")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"expr")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"consize.repl/pep")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",37,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/repl.cljs"),(new cljs.core.Symbol(null,"register-shortcuts")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"editor")),(new cljs.core.Symbol(null,"key-map"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"editor")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"key-map")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"consize.repl/register-shortcuts")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",29,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/repl.cljs"),(new cljs.core.Symbol(null,"map->js")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"m"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"m")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"consize.repl/map->js")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",23,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/repl.cljs"),(new cljs.core.Symbol(null,"postexpr")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"console")),(new cljs.core.Symbol(null,"expr"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"console")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"expr")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"consize.repl/postexpr")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",14,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/repl.cljs"),(new cljs.core.Symbol(null,"repl-print")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"log")),(new cljs.core.Symbol(null,"text")),(new cljs.core.Symbol(null,"cls"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"log")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"text")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"cls")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"consize.repl/repl-print")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",3,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",5,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/repl.cljs")),"\uFDD0'imports",null,"\uFDD0'uses-macros",null,"\uFDD0'requires",cljs.core.hash_map((new cljs.core.Symbol(null,"consize.base")),(new cljs.core.Symbol(null,"consize.base")),(new cljs.core.Symbol(null,"repl")),(new cljs.core.Symbol(null,"cljs.repl"))),"\uFDD0'uses",cljs.core.hash_map((new cljs.core.Symbol(null,"command-prefix")),(new cljs.core.Symbol(null,"consize.base")),(new cljs.core.Symbol(null,"getElementById")),(new cljs.core.Symbol(null,"consize.base")),(new cljs.core.Symbol(null,"dom-append")),(new cljs.core.Symbol(null,"consize.base"))),"\uFDD0'excludes",cljs.core.set([]),"\uFDD0'doc",null,"\uFDD0'name",(new cljs.core.Symbol(null,"consize.repl"))),old);
}));
