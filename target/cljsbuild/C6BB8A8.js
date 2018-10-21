goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__17519__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17519 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17520__i = 0, G__17520__a = new Array(arguments.length -  0);
while (G__17520__i < G__17520__a.length) {G__17520__a[G__17520__i] = arguments[G__17520__i + 0]; ++G__17520__i;}
  args = new cljs.core.IndexedSeq(G__17520__a,0,null);
} 
return G__17519__delegate.call(this,args);};
G__17519.cljs$lang$maxFixedArity = 0;
G__17519.cljs$lang$applyTo = (function (arglist__17521){
var args = cljs.core.seq(arglist__17521);
return G__17519__delegate(args);
});
G__17519.cljs$core$IFn$_invoke$arity$variadic = G__17519__delegate;
return G__17519;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__17522__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17522 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17523__i = 0, G__17523__a = new Array(arguments.length -  0);
while (G__17523__i < G__17523__a.length) {G__17523__a[G__17523__i] = arguments[G__17523__i + 0]; ++G__17523__i;}
  args = new cljs.core.IndexedSeq(G__17523__a,0,null);
} 
return G__17522__delegate.call(this,args);};
G__17522.cljs$lang$maxFixedArity = 0;
G__17522.cljs$lang$applyTo = (function (arglist__17524){
var args = cljs.core.seq(arglist__17524);
return G__17522__delegate(args);
});
G__17522.cljs$core$IFn$_invoke$arity$variadic = G__17522__delegate;
return G__17522;
})()
);

return null;
});
