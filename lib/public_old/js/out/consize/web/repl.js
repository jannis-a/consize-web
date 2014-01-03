goog.provide('consize.web.repl');
goog.require('cljs.core');
goog.require('cljs.repl');
/**
* Starts a new REPL prompt and optionally pre-populates user input field
* with initial-text.
*/
consize.web.repl.start_prompt = (function() {
var start_prompt = null;
var start_prompt__1 = (function (jqconsole){
return start_prompt.call(null,jqconsole,null);
});
var start_prompt__2 = (function (jqconsole,initial_text){
var prompt_label_3357 = [cljs.core.str("\n"),cljs.core.str(cljs.repl.prompt.call(null))].join('');
var continue_label_3358 = [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(cljs.core.count.call(null,prompt_label_3357) - 4)," "))),cljs.core.str("...")].join('');
jqconsole.SetPromptLabel(prompt_label_3357,continue_label_3358);
jqconsole.Prompt("true",(function (input){
cljs.repl.eval_print.call(null,input);
return start_prompt.call(null,jqconsole);
}),(function (p1__3356_SHARP_){
if(cljs.core.truth_(cljs.repl.complete_form_QMARK_.call(null,p1__3356_SHARP_)))
{return false;
} else
{return 0;
}
}));
if(cljs.core.empty_QMARK_.call(null,initial_text))
{} else
{jqconsole.SetPromptText(initial_text);
}
return jqconsole;
});
start_prompt = function(jqconsole,initial_text){
switch(arguments.length){
case 1:
return start_prompt__1.call(this,jqconsole);
case 2:
return start_prompt__2.call(this,jqconsole,initial_text);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start_prompt.cljs$lang$arity$1 = start_prompt__1;
start_prompt.cljs$lang$arity$2 = start_prompt__2;
return start_prompt;
})()
;
/**
* Cancel the REPL prompt and write a message to output.
*/
consize.web.repl.cancel_input = (function cancel_input(jqconsole,message){
var prompt_text = jqconsole.GetPromptText(false);
var G__3360_3361 = jqconsole;
G__3360_3361.ClearPromptText();
G__3360_3361.AbortPrompt();
G__3360_3361.Write(message,"jqconsole-output");
return prompt_text;
});
consize.web.repl.register_shortcuts = (function register_shortcuts(jqconsole,shortcut_map){
var G__3368 = cljs.core.seq.call(null,shortcut_map);
while(true){
if(G__3368)
{var vec__3369 = cljs.core.first.call(null,G__3368);
var key = cljs.core.nth.call(null,vec__3369,0,null);
var callback = cljs.core.nth.call(null,vec__3369,1,null);
jqconsole.RegisterShortcut(key,callback);
{
var G__3370 = cljs.core.next.call(null,G__3368);
G__3368 = G__3370;
continue;
}
} else
{return null;
}
break;
}
});
/**
* Create and initialize the REPL console, with a shortcut-map that
* maps keys to callback functions.
*/
consize.web.repl.console = (function console(console_selector){
cljs.repl.init.call(null);
var jqconsole = $(console_selector).jqconsole("ClojureScript-in-ClojureScript Web REPL","\n>>> ","");
jqconsole.SetIndentWidth(1);
cljs.core._STAR_out_STAR_ = (function (p1__3362_SHARP_){
return jqconsole.Write(p1__3362_SHARP_);
});
cljs.core._STAR_rtn_STAR_ = (function (p1__3363_SHARP_){
return jqconsole.Write(p1__3363_SHARP_,"jqconsole-output");
});
cljs.core._STAR_err_STAR_ = (function (p1__3364_SHARP_){
return jqconsole.Write(p1__3364_SHARP_,"jqconsole-message-error");
});
cljs.core._STAR_print_fn_STAR_ = (function (p1__3365_SHARP_){
return cljs.core._STAR_out_STAR_.call(null,p1__3365_SHARP_);
});
return consize.web.repl.start_prompt.call(null,jqconsole);
});

// Analyzer namespace snapshot:
cljs.core.swap_BANG_.call(null,cljs.core.namespaces,cljs.core.update_in,cljs.core.PersistentVector.fromArray([(new cljs.core.Symbol(null,"consize.web.repl"))], true),(function (old){
return cljs.core.deep_merge_with.call(null,(function() { 
var G__3371__delegate = function (m){
return cljs.core.first.call(null,m);
};
var G__3371 = function (var_args){
var m = null;
if (goog.isDef(var_args)) {
  m = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3371__delegate.call(this, m);
};
G__3371.cljs$lang$maxFixedArity = 0;
G__3371.cljs$lang$applyTo = (function (arglist__3372){
var m = cljs.core.seq(arglist__3372);;
return G__3371__delegate(m);
});
G__3371.cljs$lang$arity$variadic = G__3371__delegate;
return G__3371;
})()
,cljs.core.hash_map("\uFDD0'defs",cljs.core.hash_map((new cljs.core.Symbol(null,"/")),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"cljs.core//"))),(new cljs.core.Symbol(null,"console")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"console-selector"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"console-selector")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"consize.web.repl/console")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",1,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Create and initialize the REPL console, with a shortcut-map that\n\t maps keys to callback functions.","\uFDD0'line",40,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/web/repl.cljs"),(new cljs.core.Symbol(null,"register-shortcuts")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"jqconsole")),(new cljs.core.Symbol(null,"shortcut-map"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"jqconsole")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"shortcut-map")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"consize.web.repl/register-shortcuts")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'line",36,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/web/repl.cljs"),(new cljs.core.Symbol(null,"cancel-input")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"jqconsole")),(new cljs.core.Symbol(null,"message"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"jqconsole")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"message")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"consize.web.repl/cancel-input")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Cancel the REPL prompt and write a message to output.","\uFDD0'line",26,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/web/repl.cljs"),(new cljs.core.Symbol(null,"start-prompt")),cljs.core.hash_map("\uFDD0'arglists",cljs.core.list((new cljs.core.Symbol(null,"quote")),cljs.core.list(cljs.core.vec([(new cljs.core.Symbol(null,"jqconsole")),(new cljs.core.Symbol(null,"initial-text"))]),cljs.core.vec([(new cljs.core.Symbol(null,"jqconsole"))]))),"\uFDD0'method-params",cljs.core.list(cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"jqconsole")),"\uFDD0'tag",null,"\uFDD0'shadow",null),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"initial-text")),"\uFDD0'tag",null,"\uFDD0'shadow",null)]),cljs.core.vec([cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"jqconsole")),"\uFDD0'tag",null,"\uFDD0'shadow",null)])),"\uFDD0'name",(new cljs.core.Symbol(null,"consize.web.repl/start-prompt")),"\uFDD0'protocol-impl",null,"\uFDD0'max-fixed-arity",2,"\uFDD0'protocol-inline",null,"\uFDD0'variadic",false,"\uFDD0'doc","Starts a new REPL prompt and optionally pre-populates user input field\n\t with initial-text.","\uFDD0'line",6,"\uFDD0'fn-var",true,"\uFDD0'file","/Users/jannis/SEB/SEKS/Consize/src-cljs/consize/web/repl.cljs")),"\uFDD0'imports",null,"\uFDD0'uses-macros",null,"\uFDD0'requires",cljs.core.hash_map((new cljs.core.Symbol(null,"repl")),(new cljs.core.Symbol(null,"cljs.repl"))),"\uFDD0'uses",null,"\uFDD0'excludes",cljs.core.set([]),"\uFDD0'doc",null,"\uFDD0'name",(new cljs.core.Symbol(null,"consize.web.repl"))),old);
}));
