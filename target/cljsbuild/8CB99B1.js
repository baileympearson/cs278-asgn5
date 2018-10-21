goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__25599__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25599 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25600__i = 0, G__25600__a = new Array(arguments.length -  0);
while (G__25600__i < G__25600__a.length) {G__25600__a[G__25600__i] = arguments[G__25600__i + 0]; ++G__25600__i;}
  args = new cljs.core.IndexedSeq(G__25600__a,0,null);
} 
return G__25599__delegate.call(this,args);};
G__25599.cljs$lang$maxFixedArity = 0;
G__25599.cljs$lang$applyTo = (function (arglist__25601){
var args = cljs.core.seq(arglist__25601);
return G__25599__delegate(args);
});
G__25599.cljs$core$IFn$_invoke$arity$variadic = G__25599__delegate;
return G__25599;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__25602__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25602 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25603__i = 0, G__25603__a = new Array(arguments.length -  0);
while (G__25603__i < G__25603__a.length) {G__25603__a[G__25603__i] = arguments[G__25603__i + 0]; ++G__25603__i;}
  args = new cljs.core.IndexedSeq(G__25603__a,0,null);
} 
return G__25602__delegate.call(this,args);};
G__25602.cljs$lang$maxFixedArity = 0;
G__25602.cljs$lang$applyTo = (function (arglist__25604){
var args = cljs.core.seq(arglist__25604);
return G__25602__delegate(args);
});
G__25602.cljs$core$IFn$_invoke$arity$variadic = G__25602__delegate;
return G__25602;
})()
);

return null;
});
