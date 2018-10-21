// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('asgnx.lambda');
goog.require('cljs.core');
goog.require('asgnx.core');
goog.require('asgnx.aws.s3');
goog.require('asgnx.aws.ssm');
goog.require('asgnx.kvstore');
goog.require('asgnx.twilio.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs_lambda.context');
goog.require('cljs_lambda.macros');
cljs.core.enable_console_print_BANG_.call(null);
asgnx.lambda.url_encoded_params = (function asgnx$lambda$url_encoded_params(qstr){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__17466_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,p1__17466_SHARP_),(2));
}),cljs.core.map.call(null,(function (p){
return clojure.string.split.call(null,p,/=/);
}),clojure.string.split.call(null,qstr,/&/))));
});
asgnx.lambda.params = (function asgnx$lambda$params(event){
if(cljs.core.truth_(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(event))){
return new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(event);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(event))){
return asgnx.lambda.url_encoded_params.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(event));
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
});
asgnx.lambda.decode = (function asgnx$lambda$decode(s){
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});
asgnx.lambda.decode_with_spaces = (function asgnx$lambda$decode_with_spaces(s){
if(cljs.core.truth_(s)){
return asgnx.lambda.decode.call(null,clojure.string.replace.call(null,s,"+"," "));
} else {
return null;
}
});
/**
 * This method parses Lambda events from API Gateway and sends the
 * processed messages on to core/handle-message.
 * 
 * This function creates an AWS Lambda-compatible version of the
 * system configuration that saves state to S3 and sends text messages
 * via Twilio. The system configuration also provides access to secret
 * credentials stored in the SSM parameter store.
 */
asgnx.lambda.handle_message = (function asgnx$lambda$handle_message(event,ctx){
var c__15840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15840__auto__){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (c__15840__auto__){
return (function (state_17490){
var state_val_17491 = (state_17490[(1)]);
if((state_val_17491 === (1))){
var inst_17467 = asgnx.lambda.params.call(null,event);
var inst_17468 = cljs.core.get.call(null,inst_17467,"From");
var inst_17469 = asgnx.lambda.decode.call(null,inst_17468);
var inst_17470 = cljs.core.get.call(null,inst_17467,"To");
var inst_17471 = asgnx.lambda.decode.call(null,inst_17470);
var inst_17472 = cljs.core.get.call(null,inst_17467,"Body");
var inst_17473 = asgnx.lambda.decode_with_spaces.call(null,inst_17472);
var inst_17474 = [new cljs.core.Keyword(null,"system-phone-number","system-phone-number",-1620464289),new cljs.core.Keyword(null,"credentials-mgr","credentials-mgr",-1986375939),new cljs.core.Keyword(null,"effect-handlers","effect-handlers",1338585436),new cljs.core.Keyword(null,"state-mgr","state-mgr",-1839931632)];
var inst_17475 = cljs.core.merge.call(null,asgnx.kvstore.action_handlers,asgnx.twilio.core.action_handlers);
var inst_17476 = asgnx.aws.s3.s3_keystore.call(null,"cs4278-asgnx-state-pearson");
var inst_17477 = [inst_17471,asgnx.aws.ssm.get_secrets_BANG_,inst_17475,inst_17476];
var inst_17478 = cljs.core.PersistentHashMap.fromArrays(inst_17474,inst_17477);
var inst_17479 = asgnx.core.handle_message.call(null,inst_17478,inst_17469,inst_17473);
var state_17490__$1 = state_17490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17490__$1,(2),inst_17479);
} else {
if((state_val_17491 === (2))){
var inst_17481 = (state_17490[(2)]);
var inst_17482 = cljs.core.println.call(null,"Response: ",inst_17481);
var inst_17483 = [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_17484 = [new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_17485 = ["text/plain"];
var inst_17486 = cljs.core.PersistentHashMap.fromArrays(inst_17484,inst_17485);
var inst_17487 = [(200),inst_17486,inst_17481];
var inst_17488 = cljs.core.PersistentHashMap.fromArrays(inst_17483,inst_17487);
var state_17490__$1 = (function (){var statearr_17492 = state_17490;
(statearr_17492[(7)] = inst_17482);

return statearr_17492;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17490__$1,inst_17488);
} else {
return null;
}
}
});})(c__15840__auto__))
;
return ((function (switch__15817__auto__,c__15840__auto__){
return (function() {
var asgnx$lambda$handle_message_$_state_machine__15818__auto__ = null;
var asgnx$lambda$handle_message_$_state_machine__15818__auto____0 = (function (){
var statearr_17493 = [null,null,null,null,null,null,null,null];
(statearr_17493[(0)] = asgnx$lambda$handle_message_$_state_machine__15818__auto__);

(statearr_17493[(1)] = (1));

return statearr_17493;
});
var asgnx$lambda$handle_message_$_state_machine__15818__auto____1 = (function (state_17490){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_17490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e17494){if((e17494 instanceof Object)){
var ex__15821__auto__ = e17494;
var statearr_17495_17497 = state_17490;
(statearr_17495_17497[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17498 = state_17490;
state_17490 = G__17498;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$lambda$handle_message_$_state_machine__15818__auto__ = function(state_17490){
switch(arguments.length){
case 0:
return asgnx$lambda$handle_message_$_state_machine__15818__auto____0.call(this);
case 1:
return asgnx$lambda$handle_message_$_state_machine__15818__auto____1.call(this,state_17490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$lambda$handle_message_$_state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$lambda$handle_message_$_state_machine__15818__auto____0;
asgnx$lambda$handle_message_$_state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$lambda$handle_message_$_state_machine__15818__auto____1;
return asgnx$lambda$handle_message_$_state_machine__15818__auto__;
})()
;})(switch__15817__auto__,c__15840__auto__))
})();
var state__15842__auto__ = (function (){var statearr_17496 = f__15841__auto__.call(null);
(statearr_17496[(6)] = c__15840__auto__);

return statearr_17496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});})(c__15840__auto__))
);

return c__15840__auto__;
});
asgnx.lambda.receive_message = cljs_lambda.util.async_lambda_fn.call(null,(function() { 
var G__17499__delegate = function (event__17450__auto__,args__17451__auto__){
var event__17450__auto____$1 = cljs_lambda.aws.event.from_aws.call(null,cljs.core.assoc.call(null,event__17450__auto__,new cljs.core.Keyword("aws.event","type","aws.event/type",-724969211),new cljs.core.Keyword(null,"api-gateway","api-gateway",-1619869738)));
return promesa.core.then.call(null,cljs.core.apply.call(null,cljs_lambda.util.invoke_async,((function (event__17450__auto____$1){
return (function (event,ctx){
return asgnx.lambda.handle_message.call(null,event,ctx);
});})(event__17450__auto____$1))
,cljs.core.conj.call(null,args__17451__auto__,event__17450__auto____$1)),cljs.core.comp.call(null,cljs_lambda.aws.event.to_aws,((function (event__17450__auto____$1){
return (function (p1__17449__17452__auto__){
return cljs.core.assoc.call(null,p1__17449__17452__auto__,new cljs.core.Keyword("aws.event","type","aws.event/type",-724969211),new cljs.core.Keyword(null,"api-gateway","api-gateway",-1619869738));
});})(event__17450__auto____$1))
));
};
var G__17499 = function (event__17450__auto__,var_args){
var args__17451__auto__ = null;
if (arguments.length > 1) {
var G__17500__i = 0, G__17500__a = new Array(arguments.length -  1);
while (G__17500__i < G__17500__a.length) {G__17500__a[G__17500__i] = arguments[G__17500__i + 1]; ++G__17500__i;}
  args__17451__auto__ = new cljs.core.IndexedSeq(G__17500__a,0,null);
} 
return G__17499__delegate.call(this,event__17450__auto__,args__17451__auto__);};
G__17499.cljs$lang$maxFixedArity = 1;
G__17499.cljs$lang$applyTo = (function (arglist__17501){
var event__17450__auto__ = cljs.core.first(arglist__17501);
var args__17451__auto__ = cljs.core.rest(arglist__17501);
return G__17499__delegate(event__17450__auto__,args__17451__auto__);
});
G__17499.cljs$core$IFn$_invoke$arity$variadic = G__17499__delegate;
return G__17499;
})()
);
goog.exportSymbol('asgnx.lambda.receive_message', asgnx.lambda.receive_message);
asgnx.lambda.node_repl = (function asgnx$lambda$node_repl(){
return cljs.core.println.call(null,"Node repl up!");
});

//# sourceMappingURL=lambda.js.map
