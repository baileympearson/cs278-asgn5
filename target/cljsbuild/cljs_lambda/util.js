// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('cljs_lambda.util');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs_lambda.context');
goog.require('promesa.core');
cljs.nodejs.enable_util_print_BANG_.call(null);
cljs.core._STAR_main_cli_fn_STAR_ = cljs.core.identity;
/**
 * Prepare a two-arg (event, context) function for exposure as a Lambda handler.
 *   The returned function will convert the event (Javascript Object) into a
 *   Clojurescript map with keyword keys, and turn the context into a record having
 *   keys `:aws-request-id`, `:client-context`, `:log-group-name`,
 *   `:log-stream-name` & `:function-name` - suitable for manipulation
 *   by [[context/done!]]  etc.
 */
cljs_lambda.util.wrap_lambda_fn = (function cljs_lambda$util$wrap_lambda_fn(f){
return (function() { 
var G__24518__delegate = function (event,ctx,p__24508){
var vec__24509 = p__24508;
var cb = cljs.core.nth.call(null,vec__24509,(0),null);
if(cljs.core.fn_QMARK_.call(null,cb)){
ctx.handler_callback = ((function (vec__24509,cb){
return (function() { 
var G__24519__delegate = function (err,p__24512){
var vec__24513 = p__24512;
var value = cljs.core.nth.call(null,vec__24513,(0),null);
return cb.call(null,cljs.core.clj__GT_js.call(null,err),cljs.core.clj__GT_js.call(null,value));
};
var G__24519 = function (err,var_args){
var p__24512 = null;
if (arguments.length > 1) {
var G__24520__i = 0, G__24520__a = new Array(arguments.length -  1);
while (G__24520__i < G__24520__a.length) {G__24520__a[G__24520__i] = arguments[G__24520__i + 1]; ++G__24520__i;}
  p__24512 = new cljs.core.IndexedSeq(G__24520__a,0,null);
} 
return G__24519__delegate.call(this,err,p__24512);};
G__24519.cljs$lang$maxFixedArity = 1;
G__24519.cljs$lang$applyTo = (function (arglist__24521){
var err = cljs.core.first(arglist__24521);
var p__24512 = cljs.core.rest(arglist__24521);
return G__24519__delegate(err,p__24512);
});
G__24519.cljs$core$IFn$_invoke$arity$variadic = G__24519__delegate;
return G__24519;
})()
;})(vec__24509,cb))
;
} else {
}

return f.call(null,cljs.core.js__GT_clj.call(null,event,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),(function (){var G__24516 = ctx;
if(!(((!((ctx == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === ctx.cljs_lambda$context$ContextHandle$))))?true:(((!ctx.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,cljs_lambda.context.ContextHandle,ctx):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs_lambda.context.ContextHandle,ctx)))){
return cljs_lambda.context.__GT_context.call(null,G__24516);
} else {
return G__24516;
}
})());
};
var G__24518 = function (event,ctx,var_args){
var p__24508 = null;
if (arguments.length > 2) {
var G__24522__i = 0, G__24522__a = new Array(arguments.length -  2);
while (G__24522__i < G__24522__a.length) {G__24522__a[G__24522__i] = arguments[G__24522__i + 2]; ++G__24522__i;}
  p__24508 = new cljs.core.IndexedSeq(G__24522__a,0,null);
} 
return G__24518__delegate.call(this,event,ctx,p__24508);};
G__24518.cljs$lang$maxFixedArity = 2;
G__24518.cljs$lang$applyTo = (function (arglist__24523){
var event = cljs.core.first(arglist__24523);
arglist__24523 = cljs.core.next(arglist__24523);
var ctx = cljs.core.first(arglist__24523);
var p__24508 = cljs.core.rest(arglist__24523);
return G__24518__delegate(event,ctx,p__24508);
});
G__24518.cljs$core$IFn$_invoke$arity$variadic = G__24518__delegate;
return G__24518;
})()
;
});
cljs_lambda.util.chan_QMARK_ = (function cljs_lambda$util$chan_QMARK_(x){
if(!((x == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$async$impl$protocols$ReadPort$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,x);
}
});
cljs_lambda.util.error_QMARK_ = (function cljs_lambda$util$error_QMARK_(x){
return (x instanceof Error);
});
cljs_lambda.util.invoke_async = (function cljs_lambda$util$invoke_async(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24539 = arguments.length;
var i__4532__auto___24540 = (0);
while(true){
if((i__4532__auto___24540 < len__4531__auto___24539)){
args__4534__auto__.push((arguments[i__4532__auto___24540]));

var G__24541 = (i__4532__auto___24540 + (1));
i__4532__auto___24540 = G__24541;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs_lambda.util.invoke_async.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs_lambda.util.invoke_async.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return promesa.core.promise.call(null,(function (resolve,reject){
var handle = (function (p1__24525_SHARP_){
if(cljs.core.truth_(cljs_lambda.util.error_QMARK_.call(null,p1__24525_SHARP_))){
return reject.call(null,p1__24525_SHARP_);
} else {
return resolve.call(null,p1__24525_SHARP_);
}
});
try{var result = cljs.core.apply.call(null,f,args);
if(cljs.core.truth_(promesa.core.promise_QMARK_.call(null,result))){
return promesa.core.branch.call(null,result,resolve,reject);
} else {
if(cljs.core.truth_(cljs_lambda.util.chan_QMARK_.call(null,result))){
var c__21535__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto__,result,handle){
return (function (){
var f__21536__auto__ = (function (){var switch__21444__auto__ = ((function (c__21535__auto__,result,handle){
return (function (state_24533){
var state_val_24534 = (state_24533[(1)]);
if((state_val_24534 === (1))){
var state_24533__$1 = state_24533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24533__$1,(2),result);
} else {
if((state_val_24534 === (2))){
var inst_24530 = (state_24533[(2)]);
var inst_24531 = handle.call(null,inst_24530);
var state_24533__$1 = state_24533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24533__$1,inst_24531);
} else {
return null;
}
}
});})(c__21535__auto__,result,handle))
;
return ((function (switch__21444__auto__,c__21535__auto__,result,handle){
return (function() {
var cljs_lambda$util$state_machine__21445__auto__ = null;
var cljs_lambda$util$state_machine__21445__auto____0 = (function (){
var statearr_24535 = [null,null,null,null,null,null,null];
(statearr_24535[(0)] = cljs_lambda$util$state_machine__21445__auto__);

(statearr_24535[(1)] = (1));

return statearr_24535;
});
var cljs_lambda$util$state_machine__21445__auto____1 = (function (state_24533){
while(true){
var ret_value__21446__auto__ = (function (){try{while(true){
var result__21447__auto__ = switch__21444__auto__.call(null,state_24533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21447__auto__;
}
break;
}
}catch (e24536){if((e24536 instanceof Object)){
var ex__21448__auto__ = e24536;
var statearr_24537_24542 = state_24533;
(statearr_24537_24542[(5)] = ex__21448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24543 = state_24533;
state_24533 = G__24543;
continue;
} else {
return ret_value__21446__auto__;
}
break;
}
});
cljs_lambda$util$state_machine__21445__auto__ = function(state_24533){
switch(arguments.length){
case 0:
return cljs_lambda$util$state_machine__21445__auto____0.call(this);
case 1:
return cljs_lambda$util$state_machine__21445__auto____1.call(this,state_24533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_lambda$util$state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_lambda$util$state_machine__21445__auto____0;
cljs_lambda$util$state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_lambda$util$state_machine__21445__auto____1;
return cljs_lambda$util$state_machine__21445__auto__;
})()
;})(switch__21444__auto__,c__21535__auto__,result,handle))
})();
var state__21537__auto__ = (function (){var statearr_24538 = f__21536__auto__.call(null);
(statearr_24538[(6)] = c__21535__auto__);

return statearr_24538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto__,result,handle))
);

return c__21535__auto__;
} else {
return handle.call(null,result);

}
}
}catch (e24528){if((e24528 instanceof Error)){
var e = e24528;
return reject.call(null,e);
} else {
throw e24528;

}
}}));
});

cljs_lambda.util.invoke_async.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_lambda.util.invoke_async.cljs$lang$applyTo = (function (seq24526){
var G__24527 = cljs.core.first.call(null,seq24526);
var seq24526__$1 = cljs.core.next.call(null,seq24526);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24527,seq24526__$1);
});

/**
 * Returns a Lambda handler delegating to the input handler `f`, conveying any
 *   errors to `error-handler`, a function of `[error event ctx]`, which has the
 *   opportunity to modify the eventual handler response (rethrow, return
 *   promise/channel, etc.)
 * 
 * ```clojure
 * (def ^:export successful-fn
 *   (-> (fn [event ctx] (p/rejected (js/Error.)))
 *    (handle-errors (fn [e event ctx] "Success"))
 *    async-lambda-fn))
 * ```
 */
cljs_lambda.util.handle_errors = (function cljs_lambda$util$handle_errors(f,error_handler){
return (function (event,context){
return promesa.core.catch$.call(null,cljs_lambda.util.invoke_async.call(null,f,event,context),(function (p1__24544_SHARP_){
return cljs_lambda.util.invoke_async.call(null,error_handler,p1__24544_SHARP_,event,context);
}));
});
});
/**
 * Repurpose the two-arg (event, context) asynchronous function `f` as a Lambda
 *   handler.  The function's result determines the invocation's success at the
 *   Lambda level, without the requirement of using
 *   Lambda-specific ([[context/fail!]], etc.) functionality within the body.
 *   Optional error handler behaves as [[handle-errors]].
 * 
 *   If the handler was passed a callback by the Lambda harness, that function will
 *   be used to signal completion, over the the context methods.
 * 
 * Success:
 * 
 * * Returns successful Promesa/Bluebird promise
 * * Returns `core.async` channel containing non-`js/Error`
 * * Synchronously returns arbitrary object
 * 
 * ```clojure
 * (def ^:export wait
 *   (async-lambda-fn
 * (fn [{n :msecs} ctx]
 *   (promesa/delay n :waited))))
 * ```
 * 
 * Failure:
 * 
 * * Returns rejected Promesa/Bluebird promise
 * * Returns `core.async` channel containing `js/Error`
 * * Synchronously throws `js/Error`
 * 
 * ```clojure
 * (def ^:export blow-up
 *   (async-lambda-fn
 * (fn [_ ctx]
 *   (go
 *     (<! (async/timeout 10))
 *     (js/Error. "I blew up")))))
 * ```
 * 
 *   See [[macros/deflambda]] for an alternative approach to defining/export
 *   handler vars.
 */
cljs_lambda.util.async_lambda_fn = (function cljs_lambda$util$async_lambda_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24554 = arguments.length;
var i__4532__auto___24555 = (0);
while(true){
if((i__4532__auto___24555 < len__4531__auto___24554)){
args__4534__auto__.push((arguments[i__4532__auto___24555]));

var G__24556 = (i__4532__auto___24555 + (1));
i__4532__auto___24555 = G__24556;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs_lambda.util.async_lambda_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs_lambda.util.async_lambda_fn.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__24547){
var vec__24548 = p__24547;
var map__24551 = cljs.core.nth.call(null,vec__24548,(0),null);
var map__24551__$1 = ((((!((map__24551 == null)))?(((((map__24551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24551):map__24551);
var error_handler = cljs.core.get.call(null,map__24551__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var f__$1 = (function (){var G__24553 = f;
if(cljs.core.truth_(error_handler)){
return cljs_lambda.util.handle_errors.call(null,G__24553,error_handler);
} else {
return G__24553;
}
})();
return cljs_lambda.util.wrap_lambda_fn.call(null,((function (f__$1,vec__24548,map__24551,map__24551__$1,error_handler){
return (function (event,ctx){
var cb = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"handler-callback","handler-callback",190882873).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.partial.call(null,cljs_lambda.context.done_BANG_,ctx);
}
})();
return promesa.core.branch.call(null,cljs_lambda.util.invoke_async.call(null,f__$1,event,ctx),cljs.core.partial.call(null,cb,null),cb);
});})(f__$1,vec__24548,map__24551,map__24551__$1,error_handler))
);
});

cljs_lambda.util.async_lambda_fn.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_lambda.util.async_lambda_fn.cljs$lang$applyTo = (function (seq24545){
var G__24546 = cljs.core.first.call(null,seq24545);
var seq24545__$1 = cljs.core.next.call(null,seq24545);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24546,seq24545__$1);
});


//# sourceMappingURL=util.js.map
