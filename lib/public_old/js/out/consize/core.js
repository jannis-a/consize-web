goog.provide('consize.core');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('clojure.string');
consize.core.wordstack_QMARK_ = (function wordstack_QMARK_(s){
var and__3941__auto__ = !(cljs.core.empty_QMARK_.call(null,s));
if(and__3941__auto__)
{var and__3941__auto____$1 = cljs.core.seq_QMARK_.call(null,s);
if(and__3941__auto____$1)
{return cljs.core.every_QMARK_.call(null,(function (p1__5051_SHARP_){
return cljs.core.string_QMARK_.call(null,p1__5051_SHARP_);
}),s);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
});
consize.core.binary = (function binary(op){
return (function() { 
var G__5052__delegate = function (y,x,r){
if(cljs.core.integer_QMARK_.call(null,cljs.reader.read_string.call(null,x)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"integer?")),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"read-string")),(new cljs.core.Symbol(null,"x"))),cljs.core.hash_map("\uFDD0'line",15,"\uFDD0'column",34))),cljs.core.hash_map("\uFDD0'line",15,"\uFDD0'column",24))))].join('')));
}
if(cljs.core.integer_QMARK_.call(null,cljs.reader.read_string.call(null,y)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"integer?")),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"read-string")),(new cljs.core.Symbol(null,"y"))),cljs.core.hash_map("\uFDD0'line",15,"\uFDD0'column",61))),cljs.core.hash_map("\uFDD0'line",15,"\uFDD0'column",51))))].join('')));
}
return cljs.core.conj.call(null,r,[cljs.core.str(op.call(null,cljs.reader.read_string.call(null,x),cljs.reader.read_string.call(null,y)))].join(''));
};
var G__5052 = function (y,x,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5052__delegate.call(this, y, x, r);
};
G__5052.cljs$lang$maxFixedArity = 2;
G__5052.cljs$lang$applyTo = (function (arglist__5053){
var y = cljs.core.first(arglist__5053);
var x = cljs.core.first(cljs.core.next(arglist__5053));
var r = cljs.core.rest(cljs.core.next(arglist__5053));
return G__5052__delegate(y, x, r);
});
G__5052.cljs$lang$arity$variadic = G__5052__delegate;
return G__5052;
})()
;
});
consize.core.pred = (function pred(op){
return (function() { 
var G__5054__delegate = function (y,x,r){
if(cljs.core.integer_QMARK_.call(null,cljs.reader.read_string.call(null,x)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"integer?")),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"read-string")),(new cljs.core.Symbol(null,"x"))),cljs.core.hash_map("\uFDD0'line",19,"\uFDD0'column",33))),cljs.core.hash_map("\uFDD0'line",19,"\uFDD0'column",23))))].join('')));
}
if(cljs.core.integer_QMARK_.call(null,cljs.reader.read_string.call(null,y)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"integer?")),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"read-string")),(new cljs.core.Symbol(null,"y"))),cljs.core.hash_map("\uFDD0'line",19,"\uFDD0'column",60))),cljs.core.hash_map("\uFDD0'line",19,"\uFDD0'column",50))))].join('')));
}
return cljs.core.conj.call(null,r,(cljs.core.truth_(op.call(null,cljs.reader.read_string.call(null,x),cljs.reader.read_string.call(null,y)))?"t":"f"));
};
var G__5054 = function (y,x,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5054__delegate.call(this, y, x, r);
};
G__5054.cljs$lang$maxFixedArity = 2;
G__5054.cljs$lang$applyTo = (function (arglist__5055){
var y = cljs.core.first(arglist__5055);
var x = cljs.core.first(cljs.core.next(arglist__5055));
var r = cljs.core.rest(cljs.core.next(arglist__5055));
return G__5054__delegate(y, x, r);
});
G__5054.cljs$lang$arity$variadic = G__5054__delegate;
return G__5054;
})()
;
});
consize.core.VM = cljs.core.PersistentHashMap.fromArrays(["==","set-dict","integer?","<=","reverse","mod","unmap","unword","spit-on","func","flush","load","uncomment","continue","spit","*","identical?","word","+","read-line","run","equal?","stepcc","-","print","get-dict","mapping","apply","drop","div","call/cc","pop","compose","current-time-millis","swap","keys","undocument","concat","assoc","top","get","char","rot","merge","dissoc","slurp","push","type","operating-system","tokenize","emptystack","<","\\",">","call","dup",">="],[consize.core.pred.call(null,cljs.core._EQ__EQ_),cljs.core.list.call(null,(function() { 
var G__5060__delegate = function (cs,ds,dict,r){
return cljs.core.conj.call(null,r,cljs.core.first.call(null,ds),cljs.core.rest.call(null,ds),cs);
};
var G__5060 = function (cs,ds,dict,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5060__delegate.call(this, cs, ds, dict, r);
};
G__5060.cljs$lang$maxFixedArity = 3;
G__5060.cljs$lang$applyTo = (function (arglist__5061){
var cs = cljs.core.first(arglist__5061);
var ds = cljs.core.first(cljs.core.next(arglist__5061));
var dict = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5061)));
var r = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5061)));
return G__5060__delegate(cs, ds, dict, r);
});
G__5060.cljs$lang$arity$variadic = G__5060__delegate;
return G__5060;
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
VM.cljs$lang$applyTo = (function (arglist__5062){
var w = cljs.core.first(arglist__5062);
var r = cljs.core.rest(arglist__5062);
return VM__delegate(w, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,consize.core.pred.call(null,cljs.core._LT__EQ_),(function() { 
var VM__delegate = function (s,r){
if(cljs.core.seq_QMARK_.call(null,s))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"seq?")),(new cljs.core.Symbol(null,"s"))),cljs.core.hash_map("\uFDD0'line",47,"\uFDD0'column",30))))].join('')));
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
VM.cljs$lang$applyTo = (function (arglist__5063){
var s = cljs.core.first(arglist__5063);
var r = cljs.core.rest(arglist__5063);
return VM__delegate(s, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,consize.core.binary.call(null,cljs.core.mod),(function() { 
var VM__delegate = function (m,r){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"map?")),(new cljs.core.Symbol(null,"m"))),cljs.core.hash_map("\uFDD0'line",51,"\uFDD0'column",28))))].join('')));
}
return cljs.core.conj.call(null,r,consize.core.sequence.call(null,cljs.core.reduce.call(null,cljs.core.concat,cljs.core.seq.call(null,m))));
};
var VM = function (m,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return VM__delegate.call(this, m, r);
};
VM.cljs$lang$maxFixedArity = 1;
VM.cljs$lang$applyTo = (function (arglist__5064){
var m = cljs.core.first(arglist__5064);
var r = cljs.core.rest(arglist__5064);
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"string?")),(new cljs.core.Symbol(null,"w"))),cljs.core.hash_map("\uFDD0'line",61,"\uFDD0'column",31))))].join('')));
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
VM.cljs$lang$applyTo = (function (arglist__5065){
var w = cljs.core.first(arglist__5065);
var r = cljs.core.rest(arglist__5065);
return VM__delegate(w, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (file,data,r){
if(cljs.core.string_QMARK_.call(null,file))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"string?")),(new cljs.core.Symbol(null,"file"))),cljs.core.hash_map("\uFDD0'line",75,"\uFDD0'column",38))))].join('')));
}
if(cljs.core.string_QMARK_.call(null,data))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"string?")),(new cljs.core.Symbol(null,"data"))),cljs.core.hash_map("\uFDD0'line",75,"\uFDD0'column",53))))].join('')));
}
consize.core.spit.call(null,file,data,"\uFDD0'append",true);
return consize.core.sequence.call(null,r);
};
var VM = function (file,data,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return VM__delegate.call(this, file, data, r);
};
VM.cljs$lang$maxFixedArity = 2;
VM.cljs$lang$applyTo = (function (arglist__5066){
var file = cljs.core.first(arglist__5066);
var data = cljs.core.first(cljs.core.next(arglist__5066));
var r = cljs.core.rest(cljs.core.next(arglist__5066));
return VM__delegate(file, data, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (dict,qt,r){
if(cljs.core.map_QMARK_.call(null,dict))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"map?")),(new cljs.core.Symbol(null,"dict"))),cljs.core.hash_map("\uFDD0'line",120,"\uFDD0'column",33))))].join('')));
}
if(cljs.core.seq_QMARK_.call(null,qt))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"seq?")),(new cljs.core.Symbol(null,"qt"))),cljs.core.hash_map("\uFDD0'line",120,"\uFDD0'column",45))))].join('')));
}
return cljs.core.conj.call(null,r,(function (){var runcc = (function (cs,ds,dict__$1){
while(true){
if(cljs.core.empty_QMARK_.call(null,cs))
{return ds;
} else
{var vec__5058 = (function (){try{return consize.core.VM.call(null,"stepcc").call(null,cs,ds,dict__$1);
}catch (e5059){if(cljs.core.instance_QMARK_.call(null,consize.core.Error,e5059))
{var e = e5059;
return cljs.core.list.call(null,cljs.core.conj.call(null,cs,"error"),ds,dict__$1);
} else
{if(cljs.core.instance_QMARK_.call(null,consize.core.Exception,e5059))
{var e = e5059;
return cljs.core.list.call(null,cljs.core.conj.call(null,cs,"error"),ds,dict__$1);
} else
{if("\uFDD0'else")
{throw e5059;
} else
{return null;
}
}
}
}})();
var cs_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__5058,0,null);
var ds_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__5058,1,null);
var dict_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__5058,2,null);
{
var G__5067 = cs_SINGLEQUOTE_;
var G__5068 = ds_SINGLEQUOTE_;
var G__5069 = dict_SINGLEQUOTE_;
cs = G__5067;
ds = G__5068;
dict__$1 = G__5069;
continue;
}
}
break;
}
});
return (function() { 
var G__5070__delegate = function (ds){
return runcc.call(null,qt,consize.core.sequence.call(null,ds),dict);
};
var G__5070 = function (var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5070__delegate.call(this, ds);
};
G__5070.cljs$lang$maxFixedArity = 0;
G__5070.cljs$lang$applyTo = (function (arglist__5071){
var ds = cljs.core.seq(arglist__5071);;
return G__5070__delegate(ds);
});
G__5070.cljs$lang$arity$variadic = G__5070__delegate;
return G__5070;
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
VM.cljs$lang$applyTo = (function (arglist__5072){
var dict = cljs.core.first(arglist__5072);
var qt = cljs.core.first(cljs.core.next(arglist__5072));
var r = cljs.core.rest(cljs.core.next(arglist__5072));
return VM__delegate(dict, qt, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (r){
cljs.core.flush.call(null);
return consize.core.sequence.call(null,r);
};
var VM = function (var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return VM__delegate.call(this, r);
};
VM.cljs$lang$maxFixedArity = 0;
VM.cljs$lang$applyTo = (function (arglist__5073){
var r = cljs.core.seq(arglist__5073);;
return VM__delegate(r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,cljs.core.with_meta(cljs.core.list("slurp","uncomment","tokenize"),cljs.core.hash_map("\uFDD0'line",148,"\uFDD0'column",9)),(function() { 
var VM__delegate = function (w,r){
if(cljs.core.string_QMARK_.call(null,w))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"string?")),(new cljs.core.Symbol(null,"w"))),cljs.core.hash_map("\uFDD0'line",79,"\uFDD0'column",32))))].join('')));
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
VM.cljs$lang$applyTo = (function (arglist__5074){
var w = cljs.core.first(arglist__5074);
var r = cljs.core.rest(arglist__5074);
return VM__delegate(w, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,cljs.core.list.call(null,(function() { 
var G__5075__delegate = function (cs,ds,r){
return cljs.core.conj.call(null,r,cljs.core.second.call(null,ds),cljs.core.first.call(null,ds));
};
var G__5075 = function (cs,ds,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5075__delegate.call(this, cs, ds, r);
};
G__5075.cljs$lang$maxFixedArity = 2;
G__5075.cljs$lang$applyTo = (function (arglist__5076){
var cs = cljs.core.first(arglist__5076);
var ds = cljs.core.first(cljs.core.next(arglist__5076));
var r = cljs.core.rest(cljs.core.next(arglist__5076));
return G__5075__delegate(cs, ds, r);
});
G__5075.cljs$lang$arity$variadic = G__5075__delegate;
return G__5075;
})()
),(function() { 
var VM__delegate = function (file,data,r){
if(cljs.core.string_QMARK_.call(null,file))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"string?")),(new cljs.core.Symbol(null,"file"))),cljs.core.hash_map("\uFDD0'line",73,"\uFDD0'column",35))))].join('')));
}
if(cljs.core.string_QMARK_.call(null,data))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"string?")),(new cljs.core.Symbol(null,"data"))),cljs.core.hash_map("\uFDD0'line",73,"\uFDD0'column",50))))].join('')));
}
consize.core.spit.call(null,file,data);
return consize.core.sequence.call(null,r);
};
var VM = function (file,data,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return VM__delegate.call(this, file, data, r);
};
VM.cljs$lang$maxFixedArity = 2;
VM.cljs$lang$applyTo = (function (arglist__5077){
var file = cljs.core.first(arglist__5077);
var data = cljs.core.first(cljs.core.next(arglist__5077));
var r = cljs.core.rest(cljs.core.next(arglist__5077));
return VM__delegate(file, data, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,consize.core.binary.call(null,cljs.core._STAR_),(function() { 
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
VM.cljs$lang$applyTo = (function (arglist__5078){
var x = cljs.core.first(arglist__5078);
var y = cljs.core.first(cljs.core.next(arglist__5078));
var r = cljs.core.rest(cljs.core.next(arglist__5078));
return VM__delegate(x, y, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (s,r){
if(cljs.core.truth_(consize.core.wordstack_QMARK_.call(null,s)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"wordstack?")),(new cljs.core.Symbol(null,"s"))),cljs.core.hash_map("\uFDD0'line",60,"\uFDD0'column",27))))].join('')));
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
VM.cljs$lang$applyTo = (function (arglist__5079){
var s = cljs.core.first(arglist__5079);
var r = cljs.core.rest(arglist__5079);
return VM__delegate(s, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,consize.core.binary.call(null,cljs.core._PLUS_),(function() { 
var VM__delegate = function (r){
return cljs.core.conj.call(null,r,consize.core.read_line.call(null));
};
var VM = function (var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return VM__delegate.call(this, r);
};
VM.cljs$lang$maxFixedArity = 0;
VM.cljs$lang$applyTo = (function (arglist__5080){
var r = cljs.core.seq(arglist__5080);;
return VM__delegate(r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,cljs.core.with_meta(cljs.core.list("load","call"),cljs.core.hash_map("\uFDD0'line",150,"\uFDD0'column",9)),(function() { 
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
VM.cljs$lang$applyTo = (function (arglist__5081){
var x = cljs.core.first(arglist__5081);
var y = cljs.core.first(cljs.core.next(arglist__5081));
var r = cljs.core.rest(cljs.core.next(arglist__5081));
return VM__delegate(x, y, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (cs,ds,dict,r){
if(cljs.core.seq.call(null,cs))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"seq")),(new cljs.core.Symbol(null,"cs"))),cljs.core.hash_map("\uFDD0'line",100,"\uFDD0'column",9))))].join('')));
}
if(cljs.core.seq_QMARK_.call(null,ds))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"seq?")),(new cljs.core.Symbol(null,"ds"))),cljs.core.hash_map("\uFDD0'line",100,"\uFDD0'column",18))))].join('')));
}
if(cljs.core.map_QMARK_.call(null,dict))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"map?")),(new cljs.core.Symbol(null,"dict"))),cljs.core.hash_map("\uFDD0'line",100,"\uFDD0'column",28))))].join('')));
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
VM.cljs$lang$applyTo = (function (arglist__5082){
var cs = cljs.core.first(arglist__5082);
var ds = cljs.core.first(cljs.core.next(arglist__5082));
var dict = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5082)));
var r = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5082)));
return VM__delegate(cs, ds, dict, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,consize.core.binary.call(null,cljs.core._),(function() { 
var VM__delegate = function (w,r){
if(cljs.core.string_QMARK_.call(null,w))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"string?")),(new cljs.core.Symbol(null,"w"))),cljs.core.hash_map("\uFDD0'line",67,"\uFDD0'column",28))))].join('')));
}
cljs.core.print.call(null,w);
return consize.core.sequence.call(null,r);
};
var VM = function (w,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return VM__delegate.call(this, w, r);
};
VM.cljs$lang$maxFixedArity = 1;
VM.cljs$lang$applyTo = (function (arglist__5083){
var w = cljs.core.first(arglist__5083);
var r = cljs.core.rest(arglist__5083);
return VM__delegate(w, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,cljs.core.list.call(null,(function() { 
var G__5084__delegate = function (cs,ds,dict,r){
return cljs.core.conj.call(null,r,dict,cljs.core.conj.call(null,ds,dict),cs);
};
var G__5084 = function (cs,ds,dict,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5084__delegate.call(this, cs, ds, dict, r);
};
G__5084.cljs$lang$maxFixedArity = 3;
G__5084.cljs$lang$applyTo = (function (arglist__5085){
var cs = cljs.core.first(arglist__5085);
var ds = cljs.core.first(cljs.core.next(arglist__5085));
var dict = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5085)));
var r = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5085)));
return G__5084__delegate(cs, ds, dict, r);
});
G__5084.cljs$lang$arity$variadic = G__5084__delegate;
return G__5084;
})()
),(function() { 
var VM__delegate = function (s,r){
if(cljs.core.seq_QMARK_.call(null,s))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"seq?")),(new cljs.core.Symbol(null,"s"))),cljs.core.hash_map("\uFDD0'line",50,"\uFDD0'column",30))))].join('')));
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
VM.cljs$lang$applyTo = (function (arglist__5086){
var s = cljs.core.first(arglist__5086);
var r = cljs.core.rest(arglist__5086);
return VM__delegate(s, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (f,s,r){
if(cljs.core.fn_QMARK_.call(null,f))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"fn?")),(new cljs.core.Symbol(null,"f"))),cljs.core.hash_map("\uFDD0'line",115,"\uFDD0'column",30))))].join('')));
}
if(cljs.core.seq_QMARK_.call(null,s))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"seq?")),(new cljs.core.Symbol(null,"s"))),cljs.core.hash_map("\uFDD0'line",115,"\uFDD0'column",38))))].join('')));
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
VM.cljs$lang$applyTo = (function (arglist__5087){
var f = cljs.core.first(arglist__5087);
var s = cljs.core.first(cljs.core.next(arglist__5087));
var r = cljs.core.rest(cljs.core.next(arglist__5087));
return VM__delegate(f, s, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (x,r){
return consize.core.sequence.call(null,r);
};
var VM = function (x,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return VM__delegate.call(this, x, r);
};
VM.cljs$lang$maxFixedArity = 1;
VM.cljs$lang$applyTo = (function (arglist__5088){
var x = cljs.core.first(arglist__5088);
var r = cljs.core.rest(arglist__5088);
return VM__delegate(x, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,consize.core.binary.call(null,cljs.core.quot),cljs.core.list.call(null,(function() { 
var G__5089__delegate = function (cs,ds,r){
return cljs.core.conj.call(null,r,cljs.core.conj.call(null,cljs.core.List.EMPTY,cljs.core.rest.call(null,ds),cs),cljs.core.first.call(null,ds));
};
var G__5089 = function (cs,ds,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5089__delegate.call(this, cs, ds, r);
};
G__5089.cljs$lang$maxFixedArity = 2;
G__5089.cljs$lang$applyTo = (function (arglist__5090){
var cs = cljs.core.first(arglist__5090);
var ds = cljs.core.first(cljs.core.next(arglist__5090));
var r = cljs.core.rest(cljs.core.next(arglist__5090));
return G__5089__delegate(cs, ds, r);
});
G__5089.cljs$lang$arity$variadic = G__5089__delegate;
return G__5089;
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"or")),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"seq?")),(new cljs.core.Symbol(null,"s"))),cljs.core.hash_map("\uFDD0'line",45,"\uFDD0'column",31)),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"nil?")),(new cljs.core.Symbol(null,"s"))),cljs.core.hash_map("\uFDD0'line",45,"\uFDD0'column",40))),cljs.core.hash_map("\uFDD0'line",45,"\uFDD0'column",27))))].join('')));
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
VM.cljs$lang$applyTo = (function (arglist__5091){
var s = cljs.core.first(arglist__5091);
var r = cljs.core.rest(arglist__5091);
return VM__delegate(s, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (f2,f1,r){
if(cljs.core.fn_QMARK_.call(null,f1))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"fn?")),(new cljs.core.Symbol(null,"f1"))),cljs.core.hash_map("\uFDD0'line",118,"\uFDD0'column",34))))].join('')));
}
if(cljs.core.fn_QMARK_.call(null,f2))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"fn?")),(new cljs.core.Symbol(null,"f2"))),cljs.core.hash_map("\uFDD0'line",118,"\uFDD0'column",43))))].join('')));
}
return cljs.core.conj.call(null,r,(function() { 
var G__5092__delegate = function (ds){
return cljs.core.apply.call(null,f2,cljs.core.apply.call(null,f1,ds));
};
var G__5092 = function (var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5092__delegate.call(this, ds);
};
G__5092.cljs$lang$maxFixedArity = 0;
G__5092.cljs$lang$applyTo = (function (arglist__5093){
var ds = cljs.core.seq(arglist__5093);;
return G__5092__delegate(ds);
});
G__5092.cljs$lang$arity$variadic = G__5092__delegate;
return G__5092;
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
VM.cljs$lang$applyTo = (function (arglist__5094){
var f2 = cljs.core.first(arglist__5094);
var f1 = cljs.core.first(cljs.core.next(arglist__5094));
var r = cljs.core.rest(cljs.core.next(arglist__5094));
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
VM.cljs$lang$applyTo = (function (arglist__5095){
var r = cljs.core.seq(arglist__5095);;
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
VM.cljs$lang$applyTo = (function (arglist__5096){
var y = cljs.core.first(arglist__5096);
var x = cljs.core.first(cljs.core.next(arglist__5096));
var r = cljs.core.rest(cljs.core.next(arglist__5096));
return VM__delegate(y, x, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (m,r){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"map?")),(new cljs.core.Symbol(null,"m"))),cljs.core.hash_map("\uFDD0'line",53,"\uFDD0'column",27))))].join('')));
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
VM.cljs$lang$applyTo = (function (arglist__5097){
var m = cljs.core.first(arglist__5097);
var r = cljs.core.rest(arglist__5097);
return VM__delegate(m, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (w,r){
if(cljs.core.string_QMARK_.call(null,w))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"string?")),(new cljs.core.Symbol(null,"w"))),cljs.core.hash_map("\uFDD0'line",83,"\uFDD0'column",33))))].join('')));
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
VM.cljs$lang$applyTo = (function (arglist__5098){
var w = cljs.core.first(arglist__5098);
var r = cljs.core.rest(arglist__5098);
return VM__delegate(w, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (s2,s1,r){
if(cljs.core.seq_QMARK_.call(null,s1))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"seq?")),(new cljs.core.Symbol(null,"s1"))),cljs.core.hash_map("\uFDD0'line",46,"\uFDD0'column",33))))].join('')));
}
if(cljs.core.seq_QMARK_.call(null,s2))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"seq?")),(new cljs.core.Symbol(null,"s2"))),cljs.core.hash_map("\uFDD0'line",46,"\uFDD0'column",43))))].join('')));
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
VM.cljs$lang$applyTo = (function (arglist__5099){
var s2 = cljs.core.first(arglist__5099);
var s1 = cljs.core.first(cljs.core.next(arglist__5099));
var r = cljs.core.rest(cljs.core.next(arglist__5099));
return VM__delegate(s2, s1, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (m,k,v,r){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"map?")),(new cljs.core.Symbol(null,"m"))),cljs.core.hash_map("\uFDD0'line",54,"\uFDD0'column",32))))].join('')));
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
VM.cljs$lang$applyTo = (function (arglist__5100){
var m = cljs.core.first(arglist__5100);
var k = cljs.core.first(cljs.core.next(arglist__5100));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5100)));
var r = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5100)));
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"or")),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"seq?")),(new cljs.core.Symbol(null,"s"))),cljs.core.hash_map("\uFDD0'line",44,"\uFDD0'column",31)),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"nil?")),(new cljs.core.Symbol(null,"s"))),cljs.core.hash_map("\uFDD0'line",44,"\uFDD0'column",40))),cljs.core.hash_map("\uFDD0'line",44,"\uFDD0'column",27))))].join('')));
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
VM.cljs$lang$applyTo = (function (arglist__5101){
var s = cljs.core.first(arglist__5101);
var r = cljs.core.rest(arglist__5101);
return VM__delegate(s, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (d,m,k,r){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"map?")),(new cljs.core.Symbol(null,"m"))),cljs.core.hash_map("\uFDD0'line",56,"\uFDD0'column",30))))].join('')));
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
VM.cljs$lang$applyTo = (function (arglist__5102){
var d = cljs.core.first(arglist__5102);
var m = cljs.core.first(cljs.core.next(arglist__5102));
var k = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5102)));
var r = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5102)));
return VM__delegate(d, m, k, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (w,r){
if(cljs.core.string_QMARK_.call(null,w))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"string?")),(new cljs.core.Symbol(null,"w"))),cljs.core.hash_map("\uFDD0'line",62,"\uFDD0'column",27))))].join('')));
}
if(cljs.core.truth_(consize.core.char_QMARK_.call(null,cljs.reader.read_string.call(null,w))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"char?")),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"read-string")),(new cljs.core.Symbol(null,"w"))),cljs.core.hash_map("\uFDD0'line",62,"\uFDD0'column",46))),cljs.core.hash_map("\uFDD0'line",62,"\uFDD0'column",39))))].join('')));
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
VM.cljs$lang$applyTo = (function (arglist__5103){
var w = cljs.core.first(arglist__5103);
var r = cljs.core.rest(arglist__5103);
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
VM.cljs$lang$applyTo = (function (arglist__5104){
var z = cljs.core.first(arglist__5104);
var y = cljs.core.first(cljs.core.next(arglist__5104));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5104)));
var r = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5104)));
return VM__delegate(z, y, x, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (m1,m2,r){
if(cljs.core.map_QMARK_.call(null,m1))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"map?")),(new cljs.core.Symbol(null,"m1"))),cljs.core.hash_map("\uFDD0'line",57,"\uFDD0'column",32))))].join('')));
}
if(cljs.core.map_QMARK_.call(null,m2))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"map?")),(new cljs.core.Symbol(null,"m2"))),cljs.core.hash_map("\uFDD0'line",57,"\uFDD0'column",42))))].join('')));
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
VM.cljs$lang$applyTo = (function (arglist__5105){
var m1 = cljs.core.first(arglist__5105);
var m2 = cljs.core.first(cljs.core.next(arglist__5105));
var r = cljs.core.rest(cljs.core.next(arglist__5105));
return VM__delegate(m1, m2, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (m,k,r){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"map?")),(new cljs.core.Symbol(null,"m"))),cljs.core.hash_map("\uFDD0'line",55,"\uFDD0'column",31))))].join('')));
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
VM.cljs$lang$applyTo = (function (arglist__5106){
var m = cljs.core.first(arglist__5106);
var k = cljs.core.first(cljs.core.next(arglist__5106));
var r = cljs.core.rest(cljs.core.next(arglist__5106));
return VM__delegate(m, k, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (w,r){
if(cljs.core.string_QMARK_.call(null,w))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"string?")),(new cljs.core.Symbol(null,"w"))),cljs.core.hash_map("\uFDD0'line",72,"\uFDD0'column",28))))].join('')));
}
return cljs.core.conj.call(null,r,consize.core.slurp.call(null,w));
};
var VM = function (w,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return VM__delegate.call(this, w, r);
};
VM.cljs$lang$maxFixedArity = 1;
VM.cljs$lang$applyTo = (function (arglist__5107){
var w = cljs.core.first(arglist__5107);
var r = cljs.core.rest(arglist__5107);
return VM__delegate(w, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (x,s,r){
if(cljs.core.seq_QMARK_.call(null,s))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"seq?")),(new cljs.core.Symbol(null,"s"))),cljs.core.hash_map("\uFDD0'line",43,"\uFDD0'column",29))))].join('')));
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
VM.cljs$lang$applyTo = (function (arglist__5108){
var x = cljs.core.first(arglist__5108);
var s = cljs.core.first(cljs.core.next(arglist__5108));
var r = cljs.core.rest(cljs.core.next(arglist__5108));
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
VM.cljs$lang$applyTo = (function (arglist__5109){
var itm = cljs.core.first(arglist__5109);
var r = cljs.core.rest(arglist__5109);
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
VM.cljs$lang$applyTo = (function (arglist__5110){
var r = cljs.core.seq(arglist__5110);;
return VM__delegate(r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,(function() { 
var VM__delegate = function (w,r){
if(cljs.core.string_QMARK_.call(null,w))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"string?")),(new cljs.core.Symbol(null,"w"))),cljs.core.hash_map("\uFDD0'line",81,"\uFDD0'column",31))))].join('')));
}
var s = cljs.core.seq.call(null,clojure.string.split.call(null,clojure.string.trim.call(null,w),/\s+/));
return cljs.core.conj.call(null,r,((cljs.core._EQ_.call(null,s,cljs.core.with_meta(cljs.core.list(""),cljs.core.hash_map("\uFDD0'line",82,"\uFDD0'column",59))))?cljs.core.List.EMPTY:s));
};
var VM = function (w,var_args){
var r = null;
if (goog.isDef(var_args)) {
  r = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return VM__delegate.call(this, w, r);
};
VM.cljs$lang$maxFixedArity = 1;
VM.cljs$lang$applyTo = (function (arglist__5111){
var w = cljs.core.first(arglist__5111);
var r = cljs.core.rest(arglist__5111);
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
VM.cljs$lang$applyTo = (function (arglist__5112){
var r = cljs.core.seq(arglist__5112);;
return VM__delegate(r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,consize.core.pred.call(null,cljs.core._LT_),cljs.core.with_meta(cljs.core.list(cljs.core.with_meta(cljs.core.list("dup","top","rot","swap","push","swap","pop","continue"),cljs.core.hash_map("\uFDD0'line",147,"\uFDD0'column",10)),"call/cc"),cljs.core.hash_map("\uFDD0'line",147,"\uFDD0'column",9)),consize.core.pred.call(null,cljs.core._GT_),cljs.core.with_meta(cljs.core.list(cljs.core.with_meta(cljs.core.list("swap","dup","pop","swap","top","rot","concat","continue"),cljs.core.hash_map("\uFDD0'line",149,"\uFDD0'column",10)),"call/cc"),cljs.core.hash_map("\uFDD0'line",149,"\uFDD0'column",9)),(function() { 
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
VM.cljs$lang$applyTo = (function (arglist__5113){
var x = cljs.core.first(arglist__5113);
var r = cljs.core.rest(arglist__5113);
return VM__delegate(x, r);
});
VM.cljs$lang$arity$variadic = VM__delegate;
return VM;
})()
,consize.core.pred.call(null,cljs.core._GT__EQ_)]);

// Analyzer namespace snapshot:
cljs.core.swap_BANG_.call(null,cljs.core.namespaces,cljs.core.update_in,cljs.core.PersistentVector.fromArray([(new cljs.core.Symbol(null,"consize.core"))], true),(function (old){
return cljs.core.deep_merge_with.call(null,(function() { 
var G__5114__delegate = function (m){
return cljs.core.first.call(null,m);
};
var G__5114 = function (var_args){
var m = null;
if (goog.isDef(var_args)) {
  m = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5114__delegate.call(this, m);
};
G__5114.cljs$lang$maxFixedArity = 0;
G__5114.cljs$lang$applyTo = (function (arglist__5115){
var m = cljs.core.seq(arglist__5115);;
return G__5114__delegate(m);
});
G__5114.cljs$lang$arity$variadic = G__5114__delegate;
return G__5114;
})()
,cljs.core.hash_map("\uFDD0'defs",cljs.core.hash_map((new cljs.core.Symbol(null,"/")),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"cljs.core//"))),(new cljs.core.Symbol(null,"VM")),cljs.core.hash_map("\uFDD0'line",22,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/core.cljs","\uFDD0'name",(new cljs.core.Symbol(null,"consize.core/VM"))),(new cljs.core.Symbol(null,"pred")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"op"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"op")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"consize.core/pred")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",18,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/core.cljs"),(new cljs.core.Symbol(null,"binary")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"op"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"op")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"consize.core/binary")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",14,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/core.cljs"),(new cljs.core.Symbol(null,"wordstack?")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"s"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"s")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"consize.core/wordstack?")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'private",true,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",12,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/core.cljs")),"\uFDD0'imports",null,"\uFDD0'uses-macros",null,"\uFDD0'requires",cljs.core.hash_map((new cljs.core.Symbol(null,"cljs.reader")),(new cljs.core.Symbol(null,"cljs.reader")),(new cljs.core.Symbol(null,"clojure.string")),(new cljs.core.Symbol(null,"clojure.string"))),"\uFDD0'uses",cljs.core.hash_map((new cljs.core.Symbol(null,"trim")),(new cljs.core.Symbol(null,"clojure.string")),(new cljs.core.Symbol(null,"lower-case")),(new cljs.core.Symbol(null,"clojure.string")),(new cljs.core.Symbol(null,"split")),(new cljs.core.Symbol(null,"clojure.string")),(new cljs.core.Symbol(null,"read-string")),(new cljs.core.Symbol(null,"cljs.reader"))),"\uFDD0'excludes",cljs.core.set([]),"\uFDD0'doc",null,"\uFDD0'name",(new cljs.core.Symbol(null,"consize.core"))),old);
}));
