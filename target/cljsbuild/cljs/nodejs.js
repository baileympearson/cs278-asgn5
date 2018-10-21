// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__23601__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23601 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23602__i = 0, G__23602__a = new Array(arguments.length -  0);
while (G__23602__i < G__23602__a.length) {G__23602__a[G__23602__i] = arguments[G__23602__i + 0]; ++G__23602__i;}
  args = new cljs.core.IndexedSeq(G__23602__a,0,null);
} 
return G__23601__delegate.call(this,args);};
G__23601.cljs$lang$maxFixedArity = 0;
G__23601.cljs$lang$applyTo = (function (arglist__23603){
var args = cljs.core.seq(arglist__23603);
return G__23601__delegate(args);
});
G__23601.cljs$core$IFn$_invoke$arity$variadic = G__23601__delegate;
return G__23601;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__23604__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23604 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23605__i = 0, G__23605__a = new Array(arguments.length -  0);
while (G__23605__i < G__23605__a.length) {G__23605__a[G__23605__i] = arguments[G__23605__i + 0]; ++G__23605__i;}
  args = new cljs.core.IndexedSeq(G__23605__a,0,null);
} 
return G__23604__delegate.call(this,args);};
G__23604.cljs$lang$maxFixedArity = 0;
G__23604.cljs$lang$applyTo = (function (arglist__23606){
var args = cljs.core.seq(arglist__23606);
return G__23604__delegate(args);
});
G__23604.cljs$core$IFn$_invoke$arity$variadic = G__23604__delegate;
return G__23604;
})()
);

return null;
});

//# sourceMappingURL=nodejs.js.map
