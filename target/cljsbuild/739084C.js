goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__17516__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17516 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17517__i = 0, G__17517__a = new Array(arguments.length -  0);
while (G__17517__i < G__17517__a.length) {G__17517__a[G__17517__i] = arguments[G__17517__i + 0]; ++G__17517__i;}
  args = new cljs.core.IndexedSeq(G__17517__a,0,null);
} 
return G__17516__delegate.call(this,args);};
G__17516.cljs$lang$maxFixedArity = 0;
G__17516.cljs$lang$applyTo = (function (arglist__17518){
var args = cljs.core.seq(arglist__17518);
return G__17516__delegate(args);
});
G__17516.cljs$core$IFn$_invoke$arity$variadic = G__17516__delegate;
return G__17516;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__17519__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
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

return null;
});
