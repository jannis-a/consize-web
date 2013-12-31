goog.provide('consize.base');
goog.require('cljs.core');
consize.base.str_contains_QMARK_ = (function str_contains_QMARK_(s,x){
return cljs.core.not_EQ_.call(null,s.indexOf(x),-1);
});
consize.base.mac_QMARK_ = (function mac_QMARK_(){
return consize.base.str_contains_QMARK_.call(null,[cljs.core.str(navigator.platform)].join(''),"Mac");
});
consize.base.command_prefix = (cljs.core.truth_(consize.base.mac_QMARK_.call(null))?"Cmd":"Ctrl");
consize.base.getElementById = (function getElementById(element){
return document.getElementById(element);
});
consize.base.dom = (function dom(o){
if(cljs.core.coll_QMARK_.call(null,o))
{var vec__4364 = o;
var tag = cljs.core.nth.call(null,vec__4364,0,null);
var attrs = cljs.core.nth.call(null,vec__4364,1,null);
var body = cljs.core.nthnext.call(null,vec__4364,2);
if(cljs.core.keyword_QMARK_.call(null,tag))
{var elem = document.createElement(cljs.core.name.call(null,tag));
if(cljs.core.map_QMARK_.call(null,attrs))
{var G__4365_4367 = cljs.core.seq.call(null,attrs);
while(true){
if(G__4365_4367)
{var vec__4366_4368 = cljs.core.first.call(null,G__4365_4367);
var k_4369 = cljs.core.nth.call(null,vec__4366_4368,0,null);
var v_4370 = cljs.core.nth.call(null,vec__4366_4368,1,null);
if(cljs.core.truth_(v_4370))
{elem.setAttribute(cljs.core.name.call(null,k_4369),v_4370);
} else
{}
{
var G__4371 = cljs.core.next.call(null,G__4365_4367);
G__4365_4367 = G__4371;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.PersistentVector.fromArray([consize.base.dom_append.call(null,elem,((cljs.core.map_QMARK_.call(null,attrs))?body:cljs.core.cons.call(null,attrs,body)))], true);
} else
{return cljs.core.mapcat.call(null,dom,o);
}
} else
{if(cljs.core.truth_(o))
{return cljs.core.PersistentVector.fromArray([document.createTextNode([cljs.core.str(o)].join(''))], true);
} else
{return null;
}
}
});
consize.base.dom_append = (function dom_append(parent,v){
var G__4373_4374 = cljs.core.seq.call(null,consize.base.dom.call(null,v));
while(true){
if(G__4373_4374)
{var i_4375 = cljs.core.first.call(null,G__4373_4374);
parent.appendChild(i_4375);
{
var G__4376 = cljs.core.next.call(null,G__4373_4374);
G__4373_4374 = G__4376;
continue;
}
} else
{}
break;
}
return parent;
});
consize.base.map__GT_js = (function map__GT_js(m){
var out = {};
var G__4379_4381 = cljs.core.seq.call(null,m);
while(true){
if(G__4379_4381)
{var vec__4380_4382 = cljs.core.first.call(null,G__4379_4381);
var k_4383 = cljs.core.nth.call(null,vec__4380_4382,0,null);
var v_4384 = cljs.core.nth.call(null,vec__4380_4382,1,null);
(out[cljs.core.name.call(null,k_4383)] = v_4384);
{
var G__4385 = cljs.core.next.call(null,G__4379_4381);
G__4379_4381 = G__4385;
continue;
}
} else
{}
break;
}
return out;
});

// Analyzer namespace snapshot:
cljs.core.swap_BANG_.call(null,cljs.core.namespaces,cljs.core.update_in,cljs.core.PersistentVector.fromArray([(new cljs.core.Symbol(null,"consize.base"))], true),(function (old){
return cljs.core.deep_merge_with.call(null,(function() { 
var G__4386__delegate = function (m){
return cljs.core.first.call(null,m);
};
var G__4386 = function (var_args){
var m = null;
if (goog.isDef(var_args)) {
  m = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4386__delegate.call(this, m);
};
G__4386.cljs$lang$maxFixedArity = 0;
G__4386.cljs$lang$applyTo = (function (arglist__4387){
var m = cljs.core.seq(arglist__4387);;
return G__4386__delegate(m);
});
G__4386.cljs$lang$arity$variadic = G__4386__delegate;
return G__4386;
})()
,cljs.core.hash_map("\uFDD0'defs",cljs.core.hash_map((new cljs.core.Symbol(null,"/")),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"cljs.core//"))),(new cljs.core.Symbol(null,"map->js")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"m"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"m")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"consize.base/map->js")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",34,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/base.cljs"),(new cljs.core.Symbol(null,"dom")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"o"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"o")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"consize.base/dom")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",16,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/base.cljs"),(new cljs.core.Symbol(null,"dom-append")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"parent")),(new cljs.core.Symbol(null,"v"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"parent")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"v")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"consize.base/dom-append")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",29,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/base.cljs"),(new cljs.core.Symbol(null,"getElementById")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"element"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"element")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"consize.base/getElementById")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",11,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/base.cljs"),(new cljs.core.Symbol(null,"command-prefix")),cljs.core.hash_map("\uFDD0'line",9,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/base.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"consize.base/command-prefix"))),(new cljs.core.Symbol(null,"mac?")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([])),"\uFDD0'name",(new cljs.core.Symbol(null,"consize.base/mac?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",0,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",6,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/base.cljs"),(new cljs.core.Symbol(null,"str-contains?")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"s")),(new cljs.core.Symbol(null,"x"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"x")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"consize.base/str-contains?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",3,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/base.cljs")),"\uFDD0'imports",null,"\uFDD0'uses-macros",null,"\uFDD0'requires",null,"\uFDD0'uses",null,"\uFDD0'excludes",cljs.core.set([]),"\uFDD0'doc",null,"\uFDD0'name",(new cljs.core.Symbol(null,"consize.base"))),old);
}));
