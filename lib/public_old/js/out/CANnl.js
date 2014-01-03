goog.provide('consize.web.core');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('consize.web.filesystem');
goog.require('consize.web.repl');
consize.web.core.slurp = consize.web.filesystem.slurp;
consize.web.core.spit = consize.web.filesystem.spit;
consize.web.core._STAR_command_line_args_STAR_ = "\\ prelude.txt run say-hi";
consize.web.core.wordstack_QMARK_ = (function wordstack_QMARK_(s){
var and__3941__auto__ = !(cljs.core.empty_QMARK_.call(null,s));
if(and__3941__auto__)
{var and__3941__auto____$1 = cljs.core.seq_QMARK_.call(null,s);
if(and__3941__auto____$1)
{return cljs.core.every_QMARK_.call(null,(function (p1__3266_SHARP_){
return cljs.core.string_QMARK_.call(null,p1__3266_SHARP_);
}),s);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
});
consize.web.core.binary = (function binary(op){
return (function() { 
var G__3267__delegate = function (y,x,r){
if(cljs.core.integer_QMARK_.call(null,cljs.reader.read_string.call(null,x)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"integer?")),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"read-string")),(new cljs.core.Symbol(null,"x"))),cljs.core.hash_map("\uFDD0'line",20,"\uFDD0'column",34))),cljs.core.hash_map("\uFDD0'line",20,"\uFDD0'column",24))))].join('')));
}
if(cljs.core.integer_QMARK_.call(null,cljs.reader.read_string.call(null,y)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"integer?")),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"read-string")),(new cljs.core.Symbol(null,"y"))),cljs.core.hash_map("\uFDD0'line",20,"\uFDD0'column",61))),cljs.core.hash_map("\uFDD0'line",20,"\uFDD0'column",51))))].join('')));
}
return cljs.core.conj.call(null,r,[cljs.core.str(op.call(null,cljs.reader.read_string.call(null,x),cljs.reader.read_string.call(null,y)))].join(''));
};
var G__3267 = function (y,x,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3267__delegate.call(this, y, x, r);
};
G__3267.cljs$lang$maxFixedArity = 2;
G__3267.cljs$lang$applyTo = (function (arglist__3268){
var y = cljs.core.first(arglist__3268);
var x = cljs.core.first(cljs.core.next(arglist__3268));
var r = cljs.core.rest(cljs.core.next(arglist__3268));
return G__3267__delegate(y, x, r);
});
G__3267.cljs$lang$arity$variadic = G__3267__delegate;
return G__3267;
})()
;
});
consize.web.core.pred = (function pred(op){
return (function() { 
var G__3269__delegate = function (y,x,r){
if(cljs.core.integer_QMARK_.call(null,cljs.reader.read_string.call(null,x)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"integer?")),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"read-string")),(new cljs.core.Symbol(null,"x"))),cljs.core.hash_map("\uFDD0'line",24,"\uFDD0'column",33))),cljs.core.hash_map("\uFDD0'line",24,"\uFDD0'column",23))))].join('')));
}
if(cljs.core.integer_QMARK_.call(null,cljs.reader.read_string.call(null,y)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"integer?")),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"read-string")),(new cljs.core.Symbol(null,"y"))),cljs.core.hash_map("\uFDD0'line",24,"\uFDD0'column",60))),cljs.core.hash_map("\uFDD0'line",24,"\uFDD0'column",50))))].join('')));
}
return cljs.core.conj.call(null,r,(cljs.core.truth_(op.call(null,cljs.reader.read_string.call(null,x),cljs.reader.read_string.call(null,y)))?"t":"f"));
};
var G__3269 = function (y,x,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3269__delegate.call(this, y, x, r);
};
G__3269.cljs$lang$maxFixedArity = 2;
G__3269.cljs$lang$applyTo = (function (arglist__3270){
var y = cljs.core.first(arglist__3270);
var x = cljs.core.first(cljs.core.next(arglist__3270));
var r = cljs.core.rest(cljs.core.next(arglist__3270));
return G__3269__delegate(y, x, r);
});
G__3269.cljs$lang$arity$variadic = G__3269__delegate;
return G__3269;
})()
;
});
consize.web.core.VM = cljs.core.PersistentHashMap.fromArrays(["==","set-dict","integer?","<=","reverse","mod","unmap","unword","spit-on","func","flush","load","uncomment","continue","spit","*","identical?","word","+","read-line","run","equal?","stepcc","-","print","get-dict","mapping","apply","drop","div","call/cc","pop","compose","current-time-millis","swap","keys","undocument","concat","assoc","top","get","char","rot","merge","dissoc","slurp","push","type","operating-system","tokenize","emptystack","<","\\",">","call","dup",">="],[consize.web.core.pred.call(null,cljs.core._EQ__EQ_),cljs.core.list.call(null,(function() { 
var G__3275__delegate = function (cs,ds,dict,r){
return cljs.core.conj.call(null,r,cljs.core.first.call(null,ds),cljs.core.rest.call(null,ds),cs);
};
var G__3275 = function (cs,ds,dict,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3275__delegate.call(this, cs, ds, dict, r);
};
G__3275.cljs$lang$maxFixedArity = 3;
G__3275.cljs$lang$applyTo = (function (arglist__3276){
var cs = cljs.core.first(arglist__3276);
var ds = cljs.core.first(cljs.core.next(arglist__3276));
var dict = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3276)));
var r = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3276)));
return G__3275__delegate(cs, ds, dict, r);
});
G__3275.cljs$lang$arity$variadic = G__3275__delegate;
return G__3275;
})()
),(function() { 
var VM__delegate = function (w,r){
return cljs.core.conj.call(null,r,((cljs.core.string_QMARK_.call(null,w))?((cljs.core.integer_QMARK_.call(null,cljs.reader.read_string.call(null,w)))?"t":"f"):"f"));
};
var VM = function (w,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return VM__delegate.call(this, w, r);
};
VM.cljs$lang$maxFixedArity = 1;
VM.cljs$lang$applyTo = (function (arglist__3277){
var w = cljs.core.first(arglist__3277);
var r = cljs.core.rest(arglist__3277);
return VM__delegate(w, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,consize.web.core.pred.call(null,cljs.core._LT__EQ_),(function() { 
var VM__delegate = function (s,r){
if(cljs.core.seq_QMARK_.call(null,s))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"seq?")),(new cljs.core.Symbol(null,"s"))),cljs.core.hash_map("\uFDD0'line",52,"\uFDD0'column",30))))].join('')));
}
return cljs.core.conj.call(null,r,cljs.core.reverse.call(null,s));
};
var VM = function (s,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return VM__delegate.call(this, s, r);
};
VM.cljs$lang$maxFixedArity = 1;
VM.cljs$lang$applyTo = (function (arglist__3278){
var s = cljs.core.first(arglist__3278);
var r = cljs.core.rest(arglist__3278);
return VM__delegate(s, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,consize.web.core.binary.call(null,cljs.core.mod),(function() { 
var VM__delegate = function (m,r){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"map?")),(new cljs.core.Symbol(null,"m"))),cljs.core.hash_map("\uFDD0'line",56,"\uFDD0'column",28))))].join('')));
}
return cljs.core.conj.call(null,r,consize.web.core.sequence.call(null,cljs.core.reduce.call(null,cljs.core.concat,cljs.core.seq.call(null,m))));
};
var VM = function (m,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return VM__delegate.call(this, m, r);
};
VM.cljs$lang$maxFixedArity = 1;
VM.cljs$lang$applyTo = (function (arglist__3279){
var m = cljs.core.first(arglist__3279);
var r = cljs.core.rest(arglist__3279);
return VM__delegate(m, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (w,r){
if(cljs.core.truth_(w))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,(new cljs.core.Symbol(null,"w"))))].join('')));
}
if(cljs.core.string_QMARK_.call(null,w))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"string?")),(new cljs.core.Symbol(null,"w"))),cljs.core.hash_map("\uFDD0'line",66,"\uFDD0'column",31))))].join('')));
}
return cljs.core.conj.call(null,r,cljs.core.map.call(null,cljs.core.str,cljs.core.seq.call(null,w)));
};
var VM = function (w,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return VM__delegate.call(this, w, r);
};
VM.cljs$lang$maxFixedArity = 1;
VM.cljs$lang$applyTo = (function (arglist__3280){
var w = cljs.core.first(arglist__3280);
var r = cljs.core.rest(arglist__3280);
return VM__delegate(w, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (file,data,r){
if(cljs.core.string_QMARK_.call(null,file))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"string?")),(new cljs.core.Symbol(null,"file"))),cljs.core.hash_map("\uFDD0'line",80,"\uFDD0'column",38))))].join('')));
}
if(cljs.core.string_QMARK_.call(null,data))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"string?")),(new cljs.core.Symbol(null,"data"))),cljs.core.hash_map("\uFDD0'line",80,"\uFDD0'column",53))))].join('')));
}
consize.web.core.spit.call(null,file,data,"\uFDD0'append",true);
return consize.web.core.sequence.call(null,r);
};
var VM = function (file,data,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return VM__delegate.call(this, file, data, r);
};
VM.cljs$lang$maxFixedArity = 2;
VM.cljs$lang$applyTo = (function (arglist__3281){
var file = cljs.core.first(arglist__3281);
var data = cljs.core.first(cljs.core.next(arglist__3281));
var r = cljs.core.rest(cljs.core.next(arglist__3281));
return VM__delegate(file, data, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (dict,qt,r){
if(cljs.core.map_QMARK_.call(null,dict))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"map?")),(new cljs.core.Symbol(null,"dict"))),cljs.core.hash_map("\uFDD0'line",125,"\uFDD0'column",33))))].join('')));
}
if(cljs.core.seq_QMARK_.call(null,qt))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"seq?")),(new cljs.core.Symbol(null,"qt"))),cljs.core.hash_map("\uFDD0'line",125,"\uFDD0'column",45))))].join('')));
}
return cljs.core.conj.call(null,r,(function (){var runcc = (function (cs,ds,dict__$1){
while(true){
if(cljs.core.empty_QMARK_.call(null,cs))
{return ds;
} else
{var vec__3273 = (function (){try{return consize.web.core.VM.call(null,"stepcc").call(null,cs,ds,dict__$1);
}catch (e3274){if(cljs.core.instance_QMARK_.call(null,consize.web.core.Error,e3274))
{var e = e3274;
return cljs.core.list.call(null,cljs.core.conj.call(null,cs,"error"),ds,dict__$1);
} else
{if(cljs.core.instance_QMARK_.call(null,consize.web.core.Exception,e3274))
{var e = e3274;
return cljs.core.list.call(null,cljs.core.conj.call(null,cs,"error"),ds,dict__$1);
} else
{if("\uFDD0'else")
{throw e3274;
} else
{return null;
}
}
}
}})();
var cs_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__3273,0,null);
var ds_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__3273,1,null);
var dict_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__3273,2,null);
{
var G__3282 = cs_SINGLEQUOTE_;
var G__3283 = ds_SINGLEQUOTE_;
var G__3284 = dict_SINGLEQUOTE_;
cs = G__3282;
ds = G__3283;
dict__$1 = G__3284;
continue;
}
}
break;
}
});
return (function() { 
var G__3285__delegate = function (ds){
return runcc.call(null,qt,(((ds == null))?cljs.core.List.EMPTY:cljs.core.seq.call(null,ds)),dict);
};
var G__3285 = function (var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3285__delegate.call(this, ds);
};
G__3285.cljs$lang$maxFixedArity = 0;
G__3285.cljs$lang$applyTo = (function (arglist__3286){
var ds = cljs.core.seq(arglist__3286);;
return G__3285__delegate(ds);
});
G__3285.cljs$lang$arity$variadic = G__3285__delegate;
return G__3285;
})()
;
})());
};
var VM = function (dict,qt,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return VM__delegate.call(this, dict, qt, r);
};
VM.cljs$lang$maxFixedArity = 2;
VM.cljs$lang$applyTo = (function (arglist__3287){
var dict = cljs.core.first(arglist__3287);
var qt = cljs.core.first(cljs.core.next(arglist__3287));
var r = cljs.core.rest(cljs.core.next(arglist__3287));
return VM__delegate(dict, qt, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (r){
cljs.core.flush.call(null);
return consize.web.core.sequence.call(null,r);
};
var VM = function (var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return VM__delegate.call(this, r);
};
VM.cljs$lang$maxFixedArity = 0;
VM.cljs$lang$applyTo = (function (arglist__3288){
var r = cljs.core.seq(arglist__3288);;
return VM__delegate(r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,cljs.core.with_meta(cljs.core.list("slurp","uncomment","tokenize"),cljs.core.hash_map("\uFDD0'line",153,"\uFDD0'column",9)),(function() { 
var VM__delegate = function (w,r){
if(cljs.core.string_QMARK_.call(null,w))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"string?")),(new cljs.core.Symbol(null,"w"))),cljs.core.hash_map("\uFDD0'line",84,"\uFDD0'column",32))))].join('')));
}
return cljs.core.conj.call(null,r,cljs.core.reduce.call(null,cljs.core.str,cljs.core.interpose.call(null,"\r\n",clojure.string.split.call(null,w,/\s*%.*[(\r\n)\r\n]/))));
};
var VM = function (w,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return VM__delegate.call(this, w, r);
};
VM.cljs$lang$maxFixedArity = 1;
VM.cljs$lang$applyTo = (function (arglist__3289){
var w = cljs.core.first(arglist__3289);
var r = cljs.core.rest(arglist__3289);
return VM__delegate(w, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,cljs.core.list.call(null,(function() { 
var G__3290__delegate = function (cs,ds,r){
return cljs.core.conj.call(null,r,cljs.core.second.call(null,ds),cljs.core.first.call(null,ds));
};
var G__3290 = function (cs,ds,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3290__delegate.call(this, cs, ds, r);
};
G__3290.cljs$lang$maxFixedArity = 2;
G__3290.cljs$lang$applyTo = (function (arglist__3291){
var cs = cljs.core.first(arglist__3291);
var ds = cljs.core.first(cljs.core.next(arglist__3291));
var r = cljs.core.rest(cljs.core.next(arglist__3291));
return G__3290__delegate(cs, ds, r);
});
G__3290.cljs$lang$arity$variadic = G__3290__delegate;
return G__3290;
})()
),(function() { 
var VM__delegate = function (file,data,r){
if(cljs.core.string_QMARK_.call(null,file))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"string?")),(new cljs.core.Symbol(null,"file"))),cljs.core.hash_map("\uFDD0'line",78,"\uFDD0'column",35))))].join('')));
}
if(cljs.core.string_QMARK_.call(null,data))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"string?")),(new cljs.core.Symbol(null,"data"))),cljs.core.hash_map("\uFDD0'line",78,"\uFDD0'column",50))))].join('')));
}
consize.web.core.spit.call(null,file,data);
return consize.web.core.sequence.call(null,r);
};
var VM = function (file,data,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return VM__delegate.call(this, file, data, r);
};
VM.cljs$lang$maxFixedArity = 2;
VM.cljs$lang$applyTo = (function (arglist__3292){
var file = cljs.core.first(arglist__3292);
var data = cljs.core.first(cljs.core.next(arglist__3292));
var r = cljs.core.rest(cljs.core.next(arglist__3292));
return VM__delegate(file, data, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,consize.web.core.binary.call(null,cljs.core._STAR_),(function() { 
var VM__delegate = function (x,y,r){
return cljs.core.conj.call(null,r,(((x === y))?"t":"f"));
};
var VM = function (x,y,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return VM__delegate.call(this, x, y, r);
};
VM.cljs$lang$maxFixedArity = 2;
VM.cljs$lang$applyTo = (function (arglist__3293){
var x = cljs.core.first(arglist__3293);
var y = cljs.core.first(cljs.core.next(arglist__3293));
var r = cljs.core.rest(cljs.core.next(arglist__3293));
return VM__delegate(x, y, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (s,r){
if(cljs.core.truth_(consize.web.core.wordstack_QMARK_.call(null,s)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"wordstack?")),(new cljs.core.Symbol(null,"s"))),cljs.core.hash_map("\uFDD0'line",65,"\uFDD0'column",27))))].join('')));
}
return cljs.core.conj.call(null,r,cljs.core.reduce.call(null,cljs.core.str,s));
};
var VM = function (s,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return VM__delegate.call(this, s, r);
};
VM.cljs$lang$maxFixedArity = 1;
VM.cljs$lang$applyTo = (function (arglist__3294){
var s = cljs.core.first(arglist__3294);
var r = cljs.core.rest(arglist__3294);
return VM__delegate(s, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,consize.web.core.binary.call(null,cljs.core._PLUS_),(function() { 
var VM__delegate = function (r){
return cljs.core.conj.call(null,r,consize.web.core.read_line.call(null));
};
var VM = function (var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return VM__delegate.call(this, r);
};
VM.cljs$lang$maxFixedArity = 0;
VM.cljs$lang$applyTo = (function (arglist__3295){
var r = cljs.core.seq(arglist__3295);;
return VM__delegate(r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,cljs.core.with_meta(cljs.core.list("load","call"),cljs.core.hash_map("\uFDD0'line",155,"\uFDD0'column",9)),(function() { 
var VM__delegate = function (x,y,r){
return cljs.core.conj.call(null,r,((cljs.core._EQ_.call(null,x,y))?"t":"f"));
};
var VM = function (x,y,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return VM__delegate.call(this, x, y, r);
};
VM.cljs$lang$maxFixedArity = 2;
VM.cljs$lang$applyTo = (function (arglist__3296){
var x = cljs.core.first(arglist__3296);
var y = cljs.core.first(cljs.core.next(arglist__3296));
var r = cljs.core.rest(cljs.core.next(arglist__3296));
return VM__delegate(x, y, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (cs,ds,dict,r){
if(cljs.core.seq.call(null,cs))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"seq")),(new cljs.core.Symbol(null,"cs"))),cljs.core.hash_map("\uFDD0'line",105,"\uFDD0'column",9))))].join('')));
}
if(cljs.core.seq_QMARK_.call(null,ds))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"seq?")),(new cljs.core.Symbol(null,"ds"))),cljs.core.hash_map("\uFDD0'line",105,"\uFDD0'column",18))))].join('')));
}
if(cljs.core.map_QMARK_.call(null,dict))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"map?")),(new cljs.core.Symbol(null,"dict"))),cljs.core.hash_map("\uFDD0'line",105,"\uFDD0'column",28))))].join('')));
}
var itm = cljs.core.first.call(null,cs);
var rcs = cljs.core.rest.call(null,cs);
if(cljs.core.string_QMARK_.call(null,itm))
{var res = dict.call(null,itm,null);
if(cljs.core.seq_QMARK_.call(null,res))
{return cljs.core.conj.call(null,r,dict,ds,cljs.core.concat.call(null,res,rcs));
} else
{if(cljs.core.fn_QMARK_.call(null,res))
{return cljs.core.conj.call(null,r,dict,cljs.core.apply.call(null,res,ds),rcs);
} else
{if("\uFDD0'else")
{return cljs.core.conj.call(null,r,dict,cljs.core.conj.call(null,ds,itm),cljs.core.conj.call(null,rcs,"read-word"));
} else
{return null;
}
}
}
} else
{if(cljs.core.fn_QMARK_.call(null,itm))
{return cljs.core.apply.call(null,itm,rcs,ds,dict,r);
} else
{if(cljs.core.map_QMARK_.call(null,itm))
{return cljs.core.conj.call(null,r,dict,cljs.core.conj.call(null,ds,itm),cljs.core.conj.call(null,rcs,"read-mapping"));
} else
{if("\uFDD0'else")
{return cljs.core.conj.call(null,r,dict,cljs.core.conj.call(null,ds,itm),rcs);
} else
{return null;
}
}
}
}
};
var VM = function (cs,ds,dict,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return VM__delegate.call(this, cs, ds, dict, r);
};
VM.cljs$lang$maxFixedArity = 3;
VM.cljs$lang$applyTo = (function (arglist__3297){
var cs = cljs.core.first(arglist__3297);
var ds = cljs.core.first(cljs.core.next(arglist__3297));
var dict = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3297)));
var r = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3297)));
return VM__delegate(cs, ds, dict, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,consize.web.core.binary.call(null,cljs.core._),(function() { 
var VM__delegate = function (w,r){
if(cljs.core.string_QMARK_.call(null,w))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"string?")),(new cljs.core.Symbol(null,"w"))),cljs.core.hash_map("\uFDD0'line",72,"\uFDD0'column",28))))].join('')));
}
cljs.core.print.call(null,w);
return consize.web.core.sequence.call(null,r);
};
var VM = function (w,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return VM__delegate.call(this, w, r);
};
VM.cljs$lang$maxFixedArity = 1;
VM.cljs$lang$applyTo = (function (arglist__3298){
var w = cljs.core.first(arglist__3298);
var r = cljs.core.rest(arglist__3298);
return VM__delegate(w, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,cljs.core.list.call(null,(function() { 
var G__3299__delegate = function (cs,ds,dict,r){
return cljs.core.conj.call(null,r,dict,cljs.core.conj.call(null,ds,dict),cs);
};
var G__3299 = function (cs,ds,dict,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3299__delegate.call(this, cs, ds, dict, r);
};
G__3299.cljs$lang$maxFixedArity = 3;
G__3299.cljs$lang$applyTo = (function (arglist__3300){
var cs = cljs.core.first(arglist__3300);
var ds = cljs.core.first(cljs.core.next(arglist__3300));
var dict = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3300)));
var r = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3300)));
return G__3299__delegate(cs, ds, dict, r);
});
G__3299.cljs$lang$arity$variadic = G__3299__delegate;
return G__3299;
})()
),(function() { 
var VM__delegate = function (s,r){
if(cljs.core.seq_QMARK_.call(null,s))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"seq?")),(new cljs.core.Symbol(null,"s"))),cljs.core.hash_map("\uFDD0'line",55,"\uFDD0'column",30))))].join('')));
}
return cljs.core.conj.call(null,r,cljs.core.apply.call(null,cljs.core.hash_map,s));
};
var VM = function (s,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return VM__delegate.call(this, s, r);
};
VM.cljs$lang$maxFixedArity = 1;
VM.cljs$lang$applyTo = (function (arglist__3301){
var s = cljs.core.first(arglist__3301);
var r = cljs.core.rest(arglist__3301);
return VM__delegate(s, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (f,s,r){
if(cljs.core.fn_QMARK_.call(null,f))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"fn?")),(new cljs.core.Symbol(null,"f"))),cljs.core.hash_map("\uFDD0'line",120,"\uFDD0'column",30))))].join('')));
}
if(cljs.core.seq_QMARK_.call(null,s))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"seq?")),(new cljs.core.Symbol(null,"s"))),cljs.core.hash_map("\uFDD0'line",120,"\uFDD0'column",38))))].join('')));
}
return cljs.core.conj.call(null,r,cljs.core.apply.call(null,f,s));
};
var VM = function (f,s,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return VM__delegate.call(this, f, s, r);
};
VM.cljs$lang$maxFixedArity = 2;
VM.cljs$lang$applyTo = (function (arglist__3302){
var f = cljs.core.first(arglist__3302);
var s = cljs.core.first(cljs.core.next(arglist__3302));
var r = cljs.core.rest(cljs.core.next(arglist__3302));
return VM__delegate(f, s, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (x,r){
return consize.web.core.sequence.call(null,r);
};
var VM = function (x,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return VM__delegate.call(this, x, r);
};
VM.cljs$lang$maxFixedArity = 1;
VM.cljs$lang$applyTo = (function (arglist__3303){
var x = cljs.core.first(arglist__3303);
var r = cljs.core.rest(arglist__3303);
return VM__delegate(x, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,consize.web.core.binary.call(null,cljs.core.quot),cljs.core.list.call(null,(function() { 
var G__3304__delegate = function (cs,ds,r){
return cljs.core.conj.call(null,r,cljs.core.conj.call(null,cljs.core.List.EMPTY,cljs.core.rest.call(null,ds),cs),cljs.core.first.call(null,ds));
};
var G__3304 = function (cs,ds,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3304__delegate.call(this, cs, ds, r);
};
G__3304.cljs$lang$maxFixedArity = 2;
G__3304.cljs$lang$applyTo = (function (arglist__3305){
var cs = cljs.core.first(arglist__3305);
var ds = cljs.core.first(cljs.core.next(arglist__3305));
var r = cljs.core.rest(cljs.core.next(arglist__3305));
return G__3304__delegate(cs, ds, r);
});
G__3304.cljs$lang$arity$variadic = G__3304__delegate;
return G__3304;
})()
),(function() { 
var VM__delegate = function (s,r){
if((function (){var or__3943__auto__ = cljs.core.seq_QMARK_.call(null,s);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (s == null);
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"or")),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"seq?")),(new cljs.core.Symbol(null,"s"))),cljs.core.hash_map("\uFDD0'line",50,"\uFDD0'column",31)),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"nil?")),(new cljs.core.Symbol(null,"s"))),cljs.core.hash_map("\uFDD0'line",50,"\uFDD0'column",40))),cljs.core.hash_map("\uFDD0'line",50,"\uFDD0'column",27))))].join('')));
}
return cljs.core.conj.call(null,r,cljs.core.rest.call(null,s));
};
var VM = function (s,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return VM__delegate.call(this, s, r);
};
VM.cljs$lang$maxFixedArity = 1;
VM.cljs$lang$applyTo = (function (arglist__3306){
var s = cljs.core.first(arglist__3306);
var r = cljs.core.rest(arglist__3306);
return VM__delegate(s, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (f2,f1,r){
if(cljs.core.fn_QMARK_.call(null,f1))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"fn?")),(new cljs.core.Symbol(null,"f1"))),cljs.core.hash_map("\uFDD0'line",123,"\uFDD0'column",34))))].join('')));
}
if(cljs.core.fn_QMARK_.call(null,f2))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"fn?")),(new cljs.core.Symbol(null,"f2"))),cljs.core.hash_map("\uFDD0'line",123,"\uFDD0'column",43))))].join('')));
}
return cljs.core.conj.call(null,r,(function() { 
var G__3307__delegate = function (ds){
return cljs.core.apply.call(null,f2,cljs.core.apply.call(null,f1,ds));
};
var G__3307 = function (var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3307__delegate.call(this, ds);
};
G__3307.cljs$lang$maxFixedArity = 0;
G__3307.cljs$lang$applyTo = (function (arglist__3308){
var ds = cljs.core.seq(arglist__3308);;
return G__3307__delegate(ds);
});
G__3307.cljs$lang$arity$variadic = G__3307__delegate;
return G__3307;
})()
);
};
var VM = function (f2,f1,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return VM__delegate.call(this, f2, f1, r);
};
VM.cljs$lang$maxFixedArity = 2;
VM.cljs$lang$applyTo = (function (arglist__3309){
var f2 = cljs.core.first(arglist__3309);
var f1 = cljs.core.first(cljs.core.next(arglist__3309));
var r = cljs.core.rest(cljs.core.next(arglist__3309));
return VM__delegate(f2, f1, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (r){
return cljs.core.conj.call(null,r,[cljs.core.str(System.currentTimeMillis.call(null))].join(''));
};
var VM = function (var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return VM__delegate.call(this, r);
};
VM.cljs$lang$maxFixedArity = 0;
VM.cljs$lang$applyTo = (function (arglist__3310){
var r = cljs.core.seq(arglist__3310);;
return VM__delegate(r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (y,x,r){
return cljs.core.conj.call(null,r,y,x);
};
var VM = function (y,x,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return VM__delegate.call(this, y, x, r);
};
VM.cljs$lang$maxFixedArity = 2;
VM.cljs$lang$applyTo = (function (arglist__3311){
var y = cljs.core.first(arglist__3311);
var x = cljs.core.first(cljs.core.next(arglist__3311));
var r = cljs.core.rest(cljs.core.next(arglist__3311));
return VM__delegate(y, x, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (m,r){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"map?")),(new cljs.core.Symbol(null,"m"))),cljs.core.hash_map("\uFDD0'line",58,"\uFDD0'column",27))))].join('')));
}
return cljs.core.conj.call(null,r,cljs.core.map.call(null,cljs.core.identity,cljs.core.keys.call(null,m)));
};
var VM = function (m,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return VM__delegate.call(this, m, r);
};
VM.cljs$lang$maxFixedArity = 1;
VM.cljs$lang$applyTo = (function (arglist__3312){
var m = cljs.core.first(arglist__3312);
var r = cljs.core.rest(arglist__3312);
return VM__delegate(m, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (w,r){
if(cljs.core.string_QMARK_.call(null,w))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"string?")),(new cljs.core.Symbol(null,"w"))),cljs.core.hash_map("\uFDD0'line",88,"\uFDD0'column",33))))].join('')));
}
return cljs.core.conj.call(null,r,cljs.core.reduce.call(null,cljs.core.str,cljs.core.interpose.call(null,"\r\n",cljs.core.map.call(null,cljs.core.second,cljs.core.re_seq.call(null,/[(\r\n)\r\n]%?>> (.*)[(\r\n)\r\n]/,w)))));
};
var VM = function (w,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return VM__delegate.call(this, w, r);
};
VM.cljs$lang$maxFixedArity = 1;
VM.cljs$lang$applyTo = (function (arglist__3313){
var w = cljs.core.first(arglist__3313);
var r = cljs.core.rest(arglist__3313);
return VM__delegate(w, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (s2,s1,r){
if(cljs.core.seq_QMARK_.call(null,s1))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"seq?")),(new cljs.core.Symbol(null,"s1"))),cljs.core.hash_map("\uFDD0'line",51,"\uFDD0'column",33))))].join('')));
}
if(cljs.core.seq_QMARK_.call(null,s2))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"seq?")),(new cljs.core.Symbol(null,"s2"))),cljs.core.hash_map("\uFDD0'line",51,"\uFDD0'column",43))))].join('')));
}
return cljs.core.conj.call(null,r,cljs.core.concat.call(null,s1,s2));
};
var VM = function (s2,s1,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return VM__delegate.call(this, s2, s1, r);
};
VM.cljs$lang$maxFixedArity = 2;
VM.cljs$lang$applyTo = (function (arglist__3314){
var s2 = cljs.core.first(arglist__3314);
var s1 = cljs.core.first(cljs.core.next(arglist__3314));
var r = cljs.core.rest(cljs.core.next(arglist__3314));
return VM__delegate(s2, s1, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (m,k,v,r){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"map?")),(new cljs.core.Symbol(null,"m"))),cljs.core.hash_map("\uFDD0'line",59,"\uFDD0'column",32))))].join('')));
}
return cljs.core.conj.call(null,r,cljs.core.assoc.call(null,m,k,v));
};
var VM = function (m,k,v,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return VM__delegate.call(this, m, k, v, r);
};
VM.cljs$lang$maxFixedArity = 3;
VM.cljs$lang$applyTo = (function (arglist__3315){
var m = cljs.core.first(arglist__3315);
var k = cljs.core.first(cljs.core.next(arglist__3315));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3315)));
var r = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3315)));
return VM__delegate(m, k, v, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (s,r){
if((function (){var or__3943__auto__ = cljs.core.seq_QMARK_.call(null,s);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (s == null);
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"or")),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"seq?")),(new cljs.core.Symbol(null,"s"))),cljs.core.hash_map("\uFDD0'line",49,"\uFDD0'column",31)),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"nil?")),(new cljs.core.Symbol(null,"s"))),cljs.core.hash_map("\uFDD0'line",49,"\uFDD0'column",40))),cljs.core.hash_map("\uFDD0'line",49,"\uFDD0'column",27))))].join('')));
}
return cljs.core.conj.call(null,r,cljs.core.first.call(null,s));
};
var VM = function (s,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return VM__delegate.call(this, s, r);
};
VM.cljs$lang$maxFixedArity = 1;
VM.cljs$lang$applyTo = (function (arglist__3316){
var s = cljs.core.first(arglist__3316);
var r = cljs.core.rest(arglist__3316);
return VM__delegate(s, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (d,m,k,r){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"map?")),(new cljs.core.Symbol(null,"m"))),cljs.core.hash_map("\uFDD0'line",61,"\uFDD0'column",30))))].join('')));
}
return cljs.core.conj.call(null,r,cljs.core._lookup.call(null,m,k,d));
};
var VM = function (d,m,k,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return VM__delegate.call(this, d, m, k, r);
};
VM.cljs$lang$maxFixedArity = 3;
VM.cljs$lang$applyTo = (function (arglist__3317){
var d = cljs.core.first(arglist__3317);
var m = cljs.core.first(cljs.core.next(arglist__3317));
var k = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3317)));
var r = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3317)));
return VM__delegate(d, m, k, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (w,r){
if(cljs.core.string_QMARK_.call(null,w))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"string?")),(new cljs.core.Symbol(null,"w"))),cljs.core.hash_map("\uFDD0'line",67,"\uFDD0'column",27))))].join('')));
}
if(cljs.core.truth_(consize.web.core.char_QMARK_.call(null,cljs.reader.read_string.call(null,w))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"char?")),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"read-string")),(new cljs.core.Symbol(null,"w"))),cljs.core.hash_map("\uFDD0'line",67,"\uFDD0'column",46))),cljs.core.hash_map("\uFDD0'line",67,"\uFDD0'column",39))))].join('')));
}
return cljs.core.conj.call(null,r,[cljs.core.str(cljs.reader.read_string.call(null,w))].join(''));
};
var VM = function (w,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return VM__delegate.call(this, w, r);
};
VM.cljs$lang$maxFixedArity = 1;
VM.cljs$lang$applyTo = (function (arglist__3318){
var w = cljs.core.first(arglist__3318);
var r = cljs.core.rest(arglist__3318);
return VM__delegate(w, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (z,y,x,r){
return cljs.core.conj.call(null,r,y,z,x);
};
var VM = function (z,y,x,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return VM__delegate.call(this, z, y, x, r);
};
VM.cljs$lang$maxFixedArity = 3;
VM.cljs$lang$applyTo = (function (arglist__3319){
var z = cljs.core.first(arglist__3319);
var y = cljs.core.first(cljs.core.next(arglist__3319));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3319)));
var r = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3319)));
return VM__delegate(z, y, x, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (m1,m2,r){
if(cljs.core.map_QMARK_.call(null,m1))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"map?")),(new cljs.core.Symbol(null,"m1"))),cljs.core.hash_map("\uFDD0'line",62,"\uFDD0'column",32))))].join('')));
}
if(cljs.core.map_QMARK_.call(null,m2))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"map?")),(new cljs.core.Symbol(null,"m2"))),cljs.core.hash_map("\uFDD0'line",62,"\uFDD0'column",42))))].join('')));
}
return cljs.core.conj.call(null,r,cljs.core.merge.call(null,m2,m1));
};
var VM = function (m1,m2,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return VM__delegate.call(this, m1, m2, r);
};
VM.cljs$lang$maxFixedArity = 2;
VM.cljs$lang$applyTo = (function (arglist__3320){
var m1 = cljs.core.first(arglist__3320);
var m2 = cljs.core.first(cljs.core.next(arglist__3320));
var r = cljs.core.rest(cljs.core.next(arglist__3320));
return VM__delegate(m1, m2, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (m,k,r){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"map?")),(new cljs.core.Symbol(null,"m"))),cljs.core.hash_map("\uFDD0'line",60,"\uFDD0'column",31))))].join('')));
}
return cljs.core.conj.call(null,r,cljs.core.dissoc.call(null,m,k));
};
var VM = function (m,k,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return VM__delegate.call(this, m, k, r);
};
VM.cljs$lang$maxFixedArity = 2;
VM.cljs$lang$applyTo = (function (arglist__3321){
var m = cljs.core.first(arglist__3321);
var k = cljs.core.first(cljs.core.next(arglist__3321));
var r = cljs.core.rest(cljs.core.next(arglist__3321));
return VM__delegate(m, k, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (w,r){
if(cljs.core.string_QMARK_.call(null,w))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"string?")),(new cljs.core.Symbol(null,"w"))),cljs.core.hash_map("\uFDD0'line",77,"\uFDD0'column",28))))].join('')));
}
return cljs.core.conj.call(null,r,consize.web.core.slurp.call(null,w));
};
var VM = function (w,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return VM__delegate.call(this, w, r);
};
VM.cljs$lang$maxFixedArity = 1;
VM.cljs$lang$applyTo = (function (arglist__3322){
var w = cljs.core.first(arglist__3322);
var r = cljs.core.rest(arglist__3322);
return VM__delegate(w, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (x,s,r){
if(cljs.core.seq_QMARK_.call(null,s))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"seq?")),(new cljs.core.Symbol(null,"s"))),cljs.core.hash_map("\uFDD0'line",48,"\uFDD0'column",29))))].join('')));
}
return cljs.core.conj.call(null,r,cljs.core.conj.call(null,s,x));
};
var VM = function (x,s,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return VM__delegate.call(this, x, s, r);
};
VM.cljs$lang$maxFixedArity = 2;
VM.cljs$lang$applyTo = (function (arglist__3323){
var x = cljs.core.first(arglist__3323);
var s = cljs.core.first(cljs.core.next(arglist__3323));
var r = cljs.core.rest(cljs.core.next(arglist__3323));
return VM__delegate(x, s, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (itm,r){
if(cljs.core.string_QMARK_.call(null,itm))
{return cljs.core.conj.call(null,r,"wrd");
} else
{if(cljs.core.seq_QMARK_.call(null,itm))
{return cljs.core.conj.call(null,r,"stk");
} else
{if(cljs.core.map_QMARK_.call(null,itm))
{return cljs.core.conj.call(null,r,"map");
} else
{if(cljs.core.fn_QMARK_.call(null,itm))
{return cljs.core.conj.call(null,r,"fct");
} else
{if((itm == null))
{return cljs.core.conj.call(null,r,"nil");
} else
{if("\uFDD0'else")
{return cljs.core.conj.call(null,r,"_|_");
} else
{return null;
}
}
}
}
}
}
};
var VM = function (itm,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return VM__delegate.call(this, itm, r);
};
VM.cljs$lang$maxFixedArity = 1;
VM.cljs$lang$applyTo = (function (arglist__3324){
var itm = cljs.core.first(arglist__3324);
var r = cljs.core.rest(arglist__3324);
return VM__delegate(itm, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (r){
return cljs.core.conj.call(null,r,[cljs.core.str(System.getProperty.call(null,"os.name"))].join(''));
};
var VM = function (var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return VM__delegate.call(this, r);
};
VM.cljs$lang$maxFixedArity = 0;
VM.cljs$lang$applyTo = (function (arglist__3325){
var r = cljs.core.seq(arglist__3325);;
return VM__delegate(r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (w,r){
if(cljs.core.string_QMARK_.call(null,w))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"string?")),(new cljs.core.Symbol(null,"w"))),cljs.core.hash_map("\uFDD0'line",86,"\uFDD0'column",31))))].join('')));
}
var s = cljs.core.seq.call(null,clojure.string.split.call(null,clojure.string.trim.call(null,w),/\s+/));
return cljs.core.conj.call(null,r,((cljs.core._EQ_.call(null,s,cljs.core.with_meta(cljs.core.list(""),cljs.core.hash_map("\uFDD0'line",87,"\uFDD0'column",59))))?cljs.core.List.EMPTY:s));
};
var VM = function (w,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return VM__delegate.call(this, w, r);
};
VM.cljs$lang$maxFixedArity = 1;
VM.cljs$lang$applyTo = (function (arglist__3326){
var w = cljs.core.first(arglist__3326);
var r = cljs.core.rest(arglist__3326);
return VM__delegate(w, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (r){
return cljs.core.conj.call(null,r,cljs.core.List.EMPTY);
};
var VM = function (var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return VM__delegate.call(this, r);
};
VM.cljs$lang$maxFixedArity = 0;
VM.cljs$lang$applyTo = (function (arglist__3327){
var r = cljs.core.seq(arglist__3327);;
return VM__delegate(r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,consize.web.core.pred.call(null,cljs.core._LT_),cljs.core.with_meta(cljs.core.list(cljs.core.with_meta(cljs.core.list("dup","top","rot","swap","push","swap","pop","continue"),cljs.core.hash_map("\uFDD0'line",152,"\uFDD0'column",10)),"call/cc"),cljs.core.hash_map("\uFDD0'line",152,"\uFDD0'column",9)),consize.web.core.pred.call(null,cljs.core._GT_),cljs.core.with_meta(cljs.core.list(cljs.core.with_meta(cljs.core.list("swap","dup","pop","swap","top","rot","concat","continue"),cljs.core.hash_map("\uFDD0'line",154,"\uFDD0'column",10)),"call/cc"),cljs.core.hash_map("\uFDD0'line",154,"\uFDD0'column",9)),(function() { 
var VM__delegate = function (x,r){
return cljs.core.conj.call(null,r,x,x);
};
var VM = function (x,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return VM__delegate.call(this, x, r);
};
VM.cljs$lang$maxFixedArity = 1;
VM.cljs$lang$applyTo = (function (arglist__3328){
var x = cljs.core.first(arglist__3328);
var r = cljs.core.rest(arglist__3328);
return VM__delegate(x, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,consize.web.core.pred.call(null,cljs.core._GT__EQ_)]);
consize.web.core.consize = (function consize(){
return cljs.core.println.call(null,"Consize returns",cljs.core.first.call(null,consize.web.core.VM.call(null,"apply").call(null,cljs.core.first.call(null,consize.web.core.VM.call(null,"func").call(null,consize.web.core.VM,cljs.core.first.call(null,cljs.core.apply.call(null,consize.web.core.VM.call(null,"tokenize"),consize.web.core.VM.call(null,"uncomment").call(null,cljs.core.reduce.call(null,cljs.core.str,cljs.core.interpose.call(null," ",consize.web.core._STAR_command_line_args_STAR_))))))),cljs.core.List.EMPTY)));
});
consize.web.core.start_app = (function start_app(){
consize.web.repl.console.call(null,"#console");
return consize.web.filesystem.init.call(null,"files","editor");
});
jQuery(document).ready(consize.web.core.start_app);
