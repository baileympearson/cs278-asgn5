// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('asgnx.aws.s3');
goog.require('cljs.core');
goog.require('asgnx.kvstore');
goog.require('cljs.core.async');
goog.require('clojure.walk');
goog.require('cljs.nodejs');
goog.require('clojure.string');
goog.require('cognitect.transit');
asgnx.aws.s3.S3 = cljs.nodejs.require.call(null,"aws-sdk/clients/s3");
asgnx.aws.s3.s3_client = (new asgnx.aws.s3.S3());
asgnx.aws.s3.path = (function asgnx$aws$s3$path(k){
return clojure.string.join.call(null,"/",cljs.core.map.call(null,cljs.core.name,k));
});
asgnx.aws.s3.key = (function asgnx$aws$s3$key(path){
return cljs.core.keyword.call(null,cljs.core.first.call(null,cljs.core.reverse.call(null,clojure.string.split.call(null,path,/\//))));
});
asgnx.aws.s3.object_keys = (function asgnx$aws$s3$object_keys(ks){
return cljs.core.map.call(null,(function (p1__16405_SHARP_){
return asgnx.aws.s3.key.call(null,new cljs.core.Keyword(null,"Key","Key",1553874408).cljs$core$IFn$_invoke$arity$1(p1__16405_SHARP_));
}),ks);
});
asgnx.aws.s3.marshall = (function asgnx$aws$s3$marshall(v){
var w = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
return cognitect.transit.write.call(null,w,v);
});
asgnx.aws.s3.unmarshall = (function asgnx$aws$s3$unmarshall(v){
var r = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
return cognitect.transit.read.call(null,r,v);
});
asgnx.aws.s3.body = (function asgnx$aws$s3$body(r){
return new cljs.core.Keyword(null,"Body","Body",-216907377).cljs$core$IFn$_invoke$arity$1(r).toString();
});
asgnx.aws.s3.data = (function asgnx$aws$s3$data(r){
return asgnx.aws.s3.unmarshall.call(null,asgnx.aws.s3.body.call(null,r));
});

/**
* @constructor
 * @implements {asgnx.kvstore.KeyStore}
*/
asgnx.aws.s3.S3Store = (function (bucket){
this.bucket = bucket;
});
asgnx.aws.s3.S3Store.prototype.asgnx$kvstore$KeyStore$ = cljs.core.PROTOCOL_SENTINEL;

asgnx.aws.s3.S3Store.prototype.asgnx$kvstore$KeyStore$put_BANG_$arity$3 = (function (_,key,value){
var self__ = this;
var ___$1 = this;
var rchan__15907__auto__ = cljs.core.async.chan.call(null,(1));
var c__15840__auto___16654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15840__auto___16654,rchan__15907__auto__,___$1){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (c__15840__auto___16654,rchan__15907__auto__,___$1){
return (function (state_16426){
var state_val_16427 = (state_16426[(1)]);
if((state_val_16427 === (1))){
var state_16426__$1 = state_16426;
var statearr_16428_16655 = state_16426__$1;
(statearr_16428_16655[(2)] = null);

(statearr_16428_16655[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16427 === (2))){
var inst_16424 = (state_16426[(2)]);
var state_16426__$1 = state_16426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16426__$1,inst_16424);
} else {
if((state_val_16427 === (3))){
var inst_16406 = (state_16426[(2)]);
var inst_16407 = cljs.core.println.call(null,"Error ",inst_16406);
var inst_16408 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16409 = [inst_16406,null];
var inst_16410 = (new cljs.core.PersistentVector(null,2,(5),inst_16408,inst_16409,null));
var inst_16411 = cljs.core.async.put_BANG_.call(null,rchan__15907__auto__,inst_16410);
var state_16426__$1 = (function (){var statearr_16429 = state_16426;
(statearr_16429[(7)] = inst_16407);

return statearr_16429;
})();
var statearr_16430_16656 = state_16426__$1;
(statearr_16430_16656[(2)] = inst_16411);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16426__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16427 === (4))){
var ___$2 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16426,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_16415 = [new cljs.core.Keyword(null,"Bucket","Bucket",754730311),new cljs.core.Keyword(null,"Key","Key",1553874408),new cljs.core.Keyword(null,"Body","Body",-216907377)];
var inst_16416 = asgnx.aws.s3.path.call(null,key);
var inst_16417 = asgnx.aws.s3.marshall.call(null,value);
var inst_16418 = [self__.bucket,inst_16416,inst_16417];
var inst_16419 = cljs.core.PersistentHashMap.fromArrays(inst_16415,inst_16418);
var inst_16420 = cljs.core.clj__GT_js.call(null,inst_16419);
var inst_16421 = (function (){return ((function (___$2,inst_16415,inst_16416,inst_16417,inst_16418,inst_16419,inst_16420,state_val_16427,c__15840__auto___16654,rchan__15907__auto__,___$1){
return (function (err__15908__auto__,d__15909__auto__){
return cljs.core.async.put_BANG_.call(null,rchan__15907__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [err__15908__auto__,clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,d__15909__auto__))], null));
});
;})(___$2,inst_16415,inst_16416,inst_16417,inst_16418,inst_16419,inst_16420,state_val_16427,c__15840__auto___16654,rchan__15907__auto__,___$1))
})();
var inst_16422 = asgnx.aws.s3.s3_client.putObject(inst_16420,inst_16421);
var state_16426__$1 = state_16426;
var statearr_16431_16657 = state_16426__$1;
(statearr_16431_16657[(2)] = inst_16422);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16426__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__15840__auto___16654,rchan__15907__auto__,___$1))
;
return ((function (switch__15817__auto__,c__15840__auto___16654,rchan__15907__auto__,___$1){
return (function() {
var asgnx$aws$s3$state_machine__15818__auto__ = null;
var asgnx$aws$s3$state_machine__15818__auto____0 = (function (){
var statearr_16432 = [null,null,null,null,null,null,null,null];
(statearr_16432[(0)] = asgnx$aws$s3$state_machine__15818__auto__);

(statearr_16432[(1)] = (1));

return statearr_16432;
});
var asgnx$aws$s3$state_machine__15818__auto____1 = (function (state_16426){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_16426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e16433){if((e16433 instanceof Object)){
var ex__15821__auto__ = e16433;
var statearr_16434_16658 = state_16426;
(statearr_16434_16658[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16659 = state_16426;
state_16426 = G__16659;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$aws$s3$state_machine__15818__auto__ = function(state_16426){
switch(arguments.length){
case 0:
return asgnx$aws$s3$state_machine__15818__auto____0.call(this);
case 1:
return asgnx$aws$s3$state_machine__15818__auto____1.call(this,state_16426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$aws$s3$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$aws$s3$state_machine__15818__auto____0;
asgnx$aws$s3$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$aws$s3$state_machine__15818__auto____1;
return asgnx$aws$s3$state_machine__15818__auto__;
})()
;})(switch__15817__auto__,c__15840__auto___16654,rchan__15907__auto__,___$1))
})();
var state__15842__auto__ = (function (){var statearr_16435 = f__15841__auto__.call(null);
(statearr_16435[(6)] = c__15840__auto___16654);

return statearr_16435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});})(c__15840__auto___16654,rchan__15907__auto__,___$1))
);


return rchan__15907__auto__;
});

asgnx.aws.s3.S3Store.prototype.asgnx$kvstore$KeyStore$remove_BANG_$arity$2 = (function (_,key){
var self__ = this;
var ___$1 = this;
var c__15840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15840__auto__,___$1){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (c__15840__auto__,___$1){
return (function (state_16477){
var state_val_16478 = (state_16477[(1)]);
if((state_val_16478 === (1))){
var inst_16437 = cljs.core.async.chan.call(null,(1));
var inst_16459 = cljs.core.async.chan.call(null,(1));
var inst_16460 = (function (){var rchan__15907__auto__ = inst_16437;
var c__15840__auto____$1 = inst_16459;
return ((function (rchan__15907__auto__,c__15840__auto____$1,inst_16437,inst_16459,state_val_16478,c__15840__auto__,___$1){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (rchan__15907__auto__,c__15840__auto____$1,inst_16437,inst_16459,state_val_16478,c__15840__auto__,___$1){
return (function (state_16457){
var state_val_16458 = (state_16457[(1)]);
if((state_val_16458 === (1))){
var state_16457__$1 = state_16457;
var statearr_16479_16660 = state_16457__$1;
(statearr_16479_16660[(2)] = null);

(statearr_16479_16660[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16458 === (2))){
var inst_16455 = (state_16457[(2)]);
var state_16457__$1 = state_16457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16457__$1,inst_16455);
} else {
if((state_val_16458 === (3))){
var inst_16438 = (state_16457[(2)]);
var inst_16439 = cljs.core.println.call(null,"Error ",inst_16438);
var inst_16440 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16441 = [inst_16438,null];
var inst_16442 = (new cljs.core.PersistentVector(null,2,(5),inst_16440,inst_16441,null));
var inst_16443 = cljs.core.async.put_BANG_.call(null,rchan__15907__auto__,inst_16442);
var state_16457__$1 = (function (){var statearr_16480 = state_16457;
(statearr_16480[(7)] = inst_16439);

return statearr_16480;
})();
var statearr_16481_16661 = state_16457__$1;
(statearr_16481_16661[(2)] = inst_16443);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16457__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16458 === (4))){
var ___$2 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16457,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_16447 = [new cljs.core.Keyword(null,"Bucket","Bucket",754730311),new cljs.core.Keyword(null,"Key","Key",1553874408)];
var inst_16448 = asgnx.aws.s3.path.call(null,key);
var inst_16449 = [self__.bucket,inst_16448];
var inst_16450 = cljs.core.PersistentHashMap.fromArrays(inst_16447,inst_16449);
var inst_16451 = cljs.core.clj__GT_js.call(null,inst_16450);
var inst_16452 = (function (){return ((function (___$2,inst_16447,inst_16448,inst_16449,inst_16450,inst_16451,state_val_16458,rchan__15907__auto__,c__15840__auto____$1,inst_16437,inst_16459,state_val_16478,c__15840__auto__,___$1){
return (function (err__15908__auto__,d__15909__auto__){
return cljs.core.async.put_BANG_.call(null,rchan__15907__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [err__15908__auto__,clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,d__15909__auto__))], null));
});
;})(___$2,inst_16447,inst_16448,inst_16449,inst_16450,inst_16451,state_val_16458,rchan__15907__auto__,c__15840__auto____$1,inst_16437,inst_16459,state_val_16478,c__15840__auto__,___$1))
})();
var inst_16453 = asgnx.aws.s3.s3_client.deleteObject(inst_16451,inst_16452);
var state_16457__$1 = state_16457;
var statearr_16482_16662 = state_16457__$1;
(statearr_16482_16662[(2)] = inst_16453);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16457__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(rchan__15907__auto__,c__15840__auto____$1,inst_16437,inst_16459,state_val_16478,c__15840__auto__,___$1))
;
return ((function (switch__15817__auto__,rchan__15907__auto__,c__15840__auto____$1,inst_16437,inst_16459,state_val_16478,c__15840__auto__,___$1){
return (function() {
var asgnx$aws$s3$state_machine__15818__auto__ = null;
var asgnx$aws$s3$state_machine__15818__auto____0 = (function (){
var statearr_16483 = [null,null,null,null,null,null,null,null];
(statearr_16483[(0)] = asgnx$aws$s3$state_machine__15818__auto__);

(statearr_16483[(1)] = (1));

return statearr_16483;
});
var asgnx$aws$s3$state_machine__15818__auto____1 = (function (state_16457){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_16457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e16484){if((e16484 instanceof Object)){
var ex__15821__auto__ = e16484;
var statearr_16485_16663 = state_16457;
(statearr_16485_16663[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16664 = state_16457;
state_16457 = G__16664;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$aws$s3$state_machine__15818__auto__ = function(state_16457){
switch(arguments.length){
case 0:
return asgnx$aws$s3$state_machine__15818__auto____0.call(this);
case 1:
return asgnx$aws$s3$state_machine__15818__auto____1.call(this,state_16457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$aws$s3$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$aws$s3$state_machine__15818__auto____0;
asgnx$aws$s3$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$aws$s3$state_machine__15818__auto____1;
return asgnx$aws$s3$state_machine__15818__auto__;
})()
;})(switch__15817__auto__,rchan__15907__auto__,c__15840__auto____$1,inst_16437,inst_16459,state_val_16478,c__15840__auto__,___$1))
})();
var state__15842__auto__ = (function (){var statearr_16486 = f__15841__auto__.call(null);
(statearr_16486[(6)] = c__15840__auto____$1);

return statearr_16486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});
;})(rchan__15907__auto__,c__15840__auto____$1,inst_16437,inst_16459,state_val_16478,c__15840__auto__,___$1))
})();
var inst_16461 = cljs.core.async.impl.dispatch.run.call(null,inst_16460);
var state_16477__$1 = (function (){var statearr_16487 = state_16477;
(statearr_16487[(7)] = inst_16461);

return statearr_16487;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16477__$1,(2),inst_16437);
} else {
if((state_val_16478 === (2))){
var inst_16463 = (state_16477[(8)]);
var inst_16463__$1 = (state_16477[(2)]);
var inst_16464 = (inst_16463__$1 == null);
var state_16477__$1 = (function (){var statearr_16488 = state_16477;
(statearr_16488[(8)] = inst_16463__$1);

return statearr_16488;
})();
if(cljs.core.truth_(inst_16464)){
var statearr_16489_16665 = state_16477__$1;
(statearr_16489_16665[(1)] = (3));

} else {
var statearr_16490_16666 = state_16477__$1;
(statearr_16490_16666[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16478 === (3))){
var state_16477__$1 = state_16477;
var statearr_16491_16667 = state_16477__$1;
(statearr_16491_16667[(2)] = null);

(statearr_16491_16667[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16478 === (4))){
var inst_16463 = (state_16477[(8)]);
var inst_16467 = cljs.core.second.call(null,inst_16463);
var state_16477__$1 = state_16477;
var statearr_16492_16668 = state_16477__$1;
(statearr_16492_16668[(2)] = inst_16467);

(statearr_16492_16668[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16478 === (5))){
var inst_16469 = (state_16477[(9)]);
var inst_16469__$1 = (state_16477[(2)]);
var inst_16470 = (inst_16469__$1 == null);
var state_16477__$1 = (function (){var statearr_16493 = state_16477;
(statearr_16493[(9)] = inst_16469__$1);

return statearr_16493;
})();
if(cljs.core.truth_(inst_16470)){
var statearr_16494_16669 = state_16477__$1;
(statearr_16494_16669[(1)] = (6));

} else {
var statearr_16495_16670 = state_16477__$1;
(statearr_16495_16670[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16478 === (6))){
var state_16477__$1 = state_16477;
var statearr_16496_16671 = state_16477__$1;
(statearr_16496_16671[(2)] = null);

(statearr_16496_16671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16478 === (7))){
var inst_16469 = (state_16477[(9)]);
var inst_16473 = new cljs.core.Keyword(null,"DeleteMarker","DeleteMarker",700512599).cljs$core$IFn$_invoke$arity$1(inst_16469);
var state_16477__$1 = state_16477;
var statearr_16497_16672 = state_16477__$1;
(statearr_16497_16672[(2)] = inst_16473);

(statearr_16497_16672[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16478 === (8))){
var inst_16475 = (state_16477[(2)]);
var state_16477__$1 = state_16477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16477__$1,inst_16475);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__15840__auto__,___$1))
;
return ((function (switch__15817__auto__,c__15840__auto__,___$1){
return (function() {
var asgnx$aws$s3$state_machine__15818__auto__ = null;
var asgnx$aws$s3$state_machine__15818__auto____0 = (function (){
var statearr_16498 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16498[(0)] = asgnx$aws$s3$state_machine__15818__auto__);

(statearr_16498[(1)] = (1));

return statearr_16498;
});
var asgnx$aws$s3$state_machine__15818__auto____1 = (function (state_16477){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_16477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e16499){if((e16499 instanceof Object)){
var ex__15821__auto__ = e16499;
var statearr_16500_16673 = state_16477;
(statearr_16500_16673[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16674 = state_16477;
state_16477 = G__16674;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$aws$s3$state_machine__15818__auto__ = function(state_16477){
switch(arguments.length){
case 0:
return asgnx$aws$s3$state_machine__15818__auto____0.call(this);
case 1:
return asgnx$aws$s3$state_machine__15818__auto____1.call(this,state_16477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$aws$s3$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$aws$s3$state_machine__15818__auto____0;
asgnx$aws$s3$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$aws$s3$state_machine__15818__auto____1;
return asgnx$aws$s3$state_machine__15818__auto__;
})()
;})(switch__15817__auto__,c__15840__auto__,___$1))
})();
var state__15842__auto__ = (function (){var statearr_16501 = f__15841__auto__.call(null);
(statearr_16501[(6)] = c__15840__auto__);

return statearr_16501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});})(c__15840__auto__,___$1))
);

return c__15840__auto__;
});

asgnx.aws.s3.S3Store.prototype.asgnx$kvstore$KeyStore$get_BANG_$arity$2 = (function (_,key){
var self__ = this;
var ___$1 = this;
var c__15840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15840__auto__,___$1){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (c__15840__auto__,___$1){
return (function (state_16543){
var state_val_16544 = (state_16543[(1)]);
if((state_val_16544 === (1))){
var inst_16503 = cljs.core.async.chan.call(null,(1));
var inst_16525 = cljs.core.async.chan.call(null,(1));
var inst_16526 = (function (){var rchan__15907__auto__ = inst_16503;
var c__15840__auto____$1 = inst_16525;
return ((function (rchan__15907__auto__,c__15840__auto____$1,inst_16503,inst_16525,state_val_16544,c__15840__auto__,___$1){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (rchan__15907__auto__,c__15840__auto____$1,inst_16503,inst_16525,state_val_16544,c__15840__auto__,___$1){
return (function (state_16523){
var state_val_16524 = (state_16523[(1)]);
if((state_val_16524 === (1))){
var state_16523__$1 = state_16523;
var statearr_16545_16675 = state_16523__$1;
(statearr_16545_16675[(2)] = null);

(statearr_16545_16675[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16524 === (2))){
var inst_16521 = (state_16523[(2)]);
var state_16523__$1 = state_16523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16523__$1,inst_16521);
} else {
if((state_val_16524 === (3))){
var inst_16504 = (state_16523[(2)]);
var inst_16505 = cljs.core.println.call(null,"Error ",inst_16504);
var inst_16506 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16507 = [inst_16504,null];
var inst_16508 = (new cljs.core.PersistentVector(null,2,(5),inst_16506,inst_16507,null));
var inst_16509 = cljs.core.async.put_BANG_.call(null,rchan__15907__auto__,inst_16508);
var state_16523__$1 = (function (){var statearr_16546 = state_16523;
(statearr_16546[(7)] = inst_16505);

return statearr_16546;
})();
var statearr_16547_16676 = state_16523__$1;
(statearr_16547_16676[(2)] = inst_16509);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16523__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16524 === (4))){
var ___$2 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16523,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_16513 = [new cljs.core.Keyword(null,"Bucket","Bucket",754730311),new cljs.core.Keyword(null,"Key","Key",1553874408)];
var inst_16514 = asgnx.aws.s3.path.call(null,key);
var inst_16515 = [self__.bucket,inst_16514];
var inst_16516 = cljs.core.PersistentHashMap.fromArrays(inst_16513,inst_16515);
var inst_16517 = cljs.core.clj__GT_js.call(null,inst_16516);
var inst_16518 = (function (){return ((function (___$2,inst_16513,inst_16514,inst_16515,inst_16516,inst_16517,state_val_16524,rchan__15907__auto__,c__15840__auto____$1,inst_16503,inst_16525,state_val_16544,c__15840__auto__,___$1){
return (function (err__15908__auto__,d__15909__auto__){
return cljs.core.async.put_BANG_.call(null,rchan__15907__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [err__15908__auto__,clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,d__15909__auto__))], null));
});
;})(___$2,inst_16513,inst_16514,inst_16515,inst_16516,inst_16517,state_val_16524,rchan__15907__auto__,c__15840__auto____$1,inst_16503,inst_16525,state_val_16544,c__15840__auto__,___$1))
})();
var inst_16519 = asgnx.aws.s3.s3_client.getObject(inst_16517,inst_16518);
var state_16523__$1 = state_16523;
var statearr_16548_16677 = state_16523__$1;
(statearr_16548_16677[(2)] = inst_16519);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16523__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(rchan__15907__auto__,c__15840__auto____$1,inst_16503,inst_16525,state_val_16544,c__15840__auto__,___$1))
;
return ((function (switch__15817__auto__,rchan__15907__auto__,c__15840__auto____$1,inst_16503,inst_16525,state_val_16544,c__15840__auto__,___$1){
return (function() {
var asgnx$aws$s3$state_machine__15818__auto__ = null;
var asgnx$aws$s3$state_machine__15818__auto____0 = (function (){
var statearr_16549 = [null,null,null,null,null,null,null,null];
(statearr_16549[(0)] = asgnx$aws$s3$state_machine__15818__auto__);

(statearr_16549[(1)] = (1));

return statearr_16549;
});
var asgnx$aws$s3$state_machine__15818__auto____1 = (function (state_16523){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_16523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e16550){if((e16550 instanceof Object)){
var ex__15821__auto__ = e16550;
var statearr_16551_16678 = state_16523;
(statearr_16551_16678[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16679 = state_16523;
state_16523 = G__16679;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$aws$s3$state_machine__15818__auto__ = function(state_16523){
switch(arguments.length){
case 0:
return asgnx$aws$s3$state_machine__15818__auto____0.call(this);
case 1:
return asgnx$aws$s3$state_machine__15818__auto____1.call(this,state_16523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$aws$s3$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$aws$s3$state_machine__15818__auto____0;
asgnx$aws$s3$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$aws$s3$state_machine__15818__auto____1;
return asgnx$aws$s3$state_machine__15818__auto__;
})()
;})(switch__15817__auto__,rchan__15907__auto__,c__15840__auto____$1,inst_16503,inst_16525,state_val_16544,c__15840__auto__,___$1))
})();
var state__15842__auto__ = (function (){var statearr_16552 = f__15841__auto__.call(null);
(statearr_16552[(6)] = c__15840__auto____$1);

return statearr_16552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});
;})(rchan__15907__auto__,c__15840__auto____$1,inst_16503,inst_16525,state_val_16544,c__15840__auto__,___$1))
})();
var inst_16527 = cljs.core.async.impl.dispatch.run.call(null,inst_16526);
var state_16543__$1 = (function (){var statearr_16553 = state_16543;
(statearr_16553[(7)] = inst_16527);

return statearr_16553;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16543__$1,(2),inst_16503);
} else {
if((state_val_16544 === (2))){
var inst_16529 = (state_16543[(8)]);
var inst_16529__$1 = (state_16543[(2)]);
var inst_16530 = (inst_16529__$1 == null);
var state_16543__$1 = (function (){var statearr_16554 = state_16543;
(statearr_16554[(8)] = inst_16529__$1);

return statearr_16554;
})();
if(cljs.core.truth_(inst_16530)){
var statearr_16555_16680 = state_16543__$1;
(statearr_16555_16680[(1)] = (3));

} else {
var statearr_16556_16681 = state_16543__$1;
(statearr_16556_16681[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16544 === (3))){
var state_16543__$1 = state_16543;
var statearr_16557_16682 = state_16543__$1;
(statearr_16557_16682[(2)] = null);

(statearr_16557_16682[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16544 === (4))){
var inst_16529 = (state_16543[(8)]);
var inst_16533 = cljs.core.second.call(null,inst_16529);
var state_16543__$1 = state_16543;
var statearr_16558_16683 = state_16543__$1;
(statearr_16558_16683[(2)] = inst_16533);

(statearr_16558_16683[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16544 === (5))){
var inst_16535 = (state_16543[(9)]);
var inst_16535__$1 = (state_16543[(2)]);
var inst_16536 = (inst_16535__$1 == null);
var state_16543__$1 = (function (){var statearr_16559 = state_16543;
(statearr_16559[(9)] = inst_16535__$1);

return statearr_16559;
})();
if(cljs.core.truth_(inst_16536)){
var statearr_16560_16684 = state_16543__$1;
(statearr_16560_16684[(1)] = (6));

} else {
var statearr_16561_16685 = state_16543__$1;
(statearr_16561_16685[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16544 === (6))){
var state_16543__$1 = state_16543;
var statearr_16562_16686 = state_16543__$1;
(statearr_16562_16686[(2)] = null);

(statearr_16562_16686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16544 === (7))){
var inst_16535 = (state_16543[(9)]);
var inst_16539 = asgnx.aws.s3.data.call(null,inst_16535);
var state_16543__$1 = state_16543;
var statearr_16563_16687 = state_16543__$1;
(statearr_16563_16687[(2)] = inst_16539);

(statearr_16563_16687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16544 === (8))){
var inst_16541 = (state_16543[(2)]);
var state_16543__$1 = state_16543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16543__$1,inst_16541);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__15840__auto__,___$1))
;
return ((function (switch__15817__auto__,c__15840__auto__,___$1){
return (function() {
var asgnx$aws$s3$state_machine__15818__auto__ = null;
var asgnx$aws$s3$state_machine__15818__auto____0 = (function (){
var statearr_16564 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16564[(0)] = asgnx$aws$s3$state_machine__15818__auto__);

(statearr_16564[(1)] = (1));

return statearr_16564;
});
var asgnx$aws$s3$state_machine__15818__auto____1 = (function (state_16543){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_16543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e16565){if((e16565 instanceof Object)){
var ex__15821__auto__ = e16565;
var statearr_16566_16688 = state_16543;
(statearr_16566_16688[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16689 = state_16543;
state_16543 = G__16689;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$aws$s3$state_machine__15818__auto__ = function(state_16543){
switch(arguments.length){
case 0:
return asgnx$aws$s3$state_machine__15818__auto____0.call(this);
case 1:
return asgnx$aws$s3$state_machine__15818__auto____1.call(this,state_16543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$aws$s3$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$aws$s3$state_machine__15818__auto____0;
asgnx$aws$s3$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$aws$s3$state_machine__15818__auto____1;
return asgnx$aws$s3$state_machine__15818__auto__;
})()
;})(switch__15817__auto__,c__15840__auto__,___$1))
})();
var state__15842__auto__ = (function (){var statearr_16567 = f__15841__auto__.call(null);
(statearr_16567[(6)] = c__15840__auto__);

return statearr_16567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});})(c__15840__auto__,___$1))
);

return c__15840__auto__;
});

asgnx.aws.s3.S3Store.prototype.asgnx$kvstore$KeyStore$get_BANG_$arity$3 = (function (s,key,not_found){
var self__ = this;
var s__$1 = this;
var c__15840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15840__auto__,s__$1){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (c__15840__auto__,s__$1){
return (function (state_16576){
var state_val_16577 = (state_16576[(1)]);
if((state_val_16577 === (1))){
var inst_16568 = asgnx.kvstore.get_BANG_.call(null,s__$1,key);
var state_16576__$1 = state_16576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16576__$1,(2),inst_16568);
} else {
if((state_val_16577 === (2))){
var inst_16570 = (state_16576[(7)]);
var inst_16570__$1 = (state_16576[(2)]);
var state_16576__$1 = (function (){var statearr_16578 = state_16576;
(statearr_16578[(7)] = inst_16570__$1);

return statearr_16578;
})();
if(cljs.core.truth_(inst_16570__$1)){
var statearr_16579_16690 = state_16576__$1;
(statearr_16579_16690[(1)] = (3));

} else {
var statearr_16580_16691 = state_16576__$1;
(statearr_16580_16691[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16577 === (3))){
var inst_16570 = (state_16576[(7)]);
var state_16576__$1 = state_16576;
var statearr_16581_16692 = state_16576__$1;
(statearr_16581_16692[(2)] = inst_16570);

(statearr_16581_16692[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16577 === (4))){
var state_16576__$1 = state_16576;
var statearr_16582_16693 = state_16576__$1;
(statearr_16582_16693[(2)] = not_found);

(statearr_16582_16693[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16577 === (5))){
var inst_16574 = (state_16576[(2)]);
var state_16576__$1 = state_16576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16576__$1,inst_16574);
} else {
return null;
}
}
}
}
}
});})(c__15840__auto__,s__$1))
;
return ((function (switch__15817__auto__,c__15840__auto__,s__$1){
return (function() {
var asgnx$aws$s3$state_machine__15818__auto__ = null;
var asgnx$aws$s3$state_machine__15818__auto____0 = (function (){
var statearr_16583 = [null,null,null,null,null,null,null,null];
(statearr_16583[(0)] = asgnx$aws$s3$state_machine__15818__auto__);

(statearr_16583[(1)] = (1));

return statearr_16583;
});
var asgnx$aws$s3$state_machine__15818__auto____1 = (function (state_16576){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_16576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e16584){if((e16584 instanceof Object)){
var ex__15821__auto__ = e16584;
var statearr_16585_16694 = state_16576;
(statearr_16585_16694[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16695 = state_16576;
state_16576 = G__16695;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$aws$s3$state_machine__15818__auto__ = function(state_16576){
switch(arguments.length){
case 0:
return asgnx$aws$s3$state_machine__15818__auto____0.call(this);
case 1:
return asgnx$aws$s3$state_machine__15818__auto____1.call(this,state_16576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$aws$s3$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$aws$s3$state_machine__15818__auto____0;
asgnx$aws$s3$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$aws$s3$state_machine__15818__auto____1;
return asgnx$aws$s3$state_machine__15818__auto__;
})()
;})(switch__15817__auto__,c__15840__auto__,s__$1))
})();
var state__15842__auto__ = (function (){var statearr_16586 = f__15841__auto__.call(null);
(statearr_16586[(6)] = c__15840__auto__);

return statearr_16586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});})(c__15840__auto__,s__$1))
);

return c__15840__auto__;
});

asgnx.aws.s3.S3Store.prototype.asgnx$kvstore$KeyStore$list_BANG_$arity$2 = (function (_,key_prefix){
var self__ = this;
var ___$1 = this;
cljs.core.println.call(null,"list!",asgnx.aws.s3.path.call(null,key_prefix));

var c__15840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15840__auto__,___$1){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (c__15840__auto__,___$1){
return (function (state_16629){
var state_val_16630 = (state_16629[(1)]);
if((state_val_16630 === (1))){
var inst_16588 = cljs.core.async.chan.call(null,(1));
var inst_16610 = cljs.core.async.chan.call(null,(1));
var inst_16611 = (function (){var rchan__15907__auto__ = inst_16588;
var c__15840__auto____$1 = inst_16610;
return ((function (rchan__15907__auto__,c__15840__auto____$1,inst_16588,inst_16610,state_val_16630,c__15840__auto__,___$1){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (rchan__15907__auto__,c__15840__auto____$1,inst_16588,inst_16610,state_val_16630,c__15840__auto__,___$1){
return (function (state_16608){
var state_val_16609 = (state_16608[(1)]);
if((state_val_16609 === (1))){
var state_16608__$1 = state_16608;
var statearr_16631_16696 = state_16608__$1;
(statearr_16631_16696[(2)] = null);

(statearr_16631_16696[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16609 === (2))){
var inst_16606 = (state_16608[(2)]);
var state_16608__$1 = state_16608;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16608__$1,inst_16606);
} else {
if((state_val_16609 === (3))){
var inst_16589 = (state_16608[(2)]);
var inst_16590 = cljs.core.println.call(null,"Error ",inst_16589);
var inst_16591 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16592 = [inst_16589,null];
var inst_16593 = (new cljs.core.PersistentVector(null,2,(5),inst_16591,inst_16592,null));
var inst_16594 = cljs.core.async.put_BANG_.call(null,rchan__15907__auto__,inst_16593);
var state_16608__$1 = (function (){var statearr_16632 = state_16608;
(statearr_16632[(7)] = inst_16590);

return statearr_16632;
})();
var statearr_16633_16697 = state_16608__$1;
(statearr_16633_16697[(2)] = inst_16594);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16608__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16609 === (4))){
var ___$2 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16608,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_16598 = [new cljs.core.Keyword(null,"Bucket","Bucket",754730311),new cljs.core.Keyword(null,"Prefix","Prefix",146236931)];
var inst_16599 = asgnx.aws.s3.path.call(null,key_prefix);
var inst_16600 = [self__.bucket,inst_16599];
var inst_16601 = cljs.core.PersistentHashMap.fromArrays(inst_16598,inst_16600);
var inst_16602 = cljs.core.clj__GT_js.call(null,inst_16601);
var inst_16603 = (function (){return ((function (___$2,inst_16598,inst_16599,inst_16600,inst_16601,inst_16602,state_val_16609,rchan__15907__auto__,c__15840__auto____$1,inst_16588,inst_16610,state_val_16630,c__15840__auto__,___$1){
return (function (err__15908__auto__,d__15909__auto__){
return cljs.core.async.put_BANG_.call(null,rchan__15907__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [err__15908__auto__,clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,d__15909__auto__))], null));
});
;})(___$2,inst_16598,inst_16599,inst_16600,inst_16601,inst_16602,state_val_16609,rchan__15907__auto__,c__15840__auto____$1,inst_16588,inst_16610,state_val_16630,c__15840__auto__,___$1))
})();
var inst_16604 = asgnx.aws.s3.s3_client.listObjects(inst_16602,inst_16603);
var state_16608__$1 = state_16608;
var statearr_16634_16698 = state_16608__$1;
(statearr_16634_16698[(2)] = inst_16604);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16608__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(rchan__15907__auto__,c__15840__auto____$1,inst_16588,inst_16610,state_val_16630,c__15840__auto__,___$1))
;
return ((function (switch__15817__auto__,rchan__15907__auto__,c__15840__auto____$1,inst_16588,inst_16610,state_val_16630,c__15840__auto__,___$1){
return (function() {
var asgnx$aws$s3$state_machine__15818__auto__ = null;
var asgnx$aws$s3$state_machine__15818__auto____0 = (function (){
var statearr_16635 = [null,null,null,null,null,null,null,null];
(statearr_16635[(0)] = asgnx$aws$s3$state_machine__15818__auto__);

(statearr_16635[(1)] = (1));

return statearr_16635;
});
var asgnx$aws$s3$state_machine__15818__auto____1 = (function (state_16608){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_16608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e16636){if((e16636 instanceof Object)){
var ex__15821__auto__ = e16636;
var statearr_16637_16699 = state_16608;
(statearr_16637_16699[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16700 = state_16608;
state_16608 = G__16700;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$aws$s3$state_machine__15818__auto__ = function(state_16608){
switch(arguments.length){
case 0:
return asgnx$aws$s3$state_machine__15818__auto____0.call(this);
case 1:
return asgnx$aws$s3$state_machine__15818__auto____1.call(this,state_16608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$aws$s3$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$aws$s3$state_machine__15818__auto____0;
asgnx$aws$s3$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$aws$s3$state_machine__15818__auto____1;
return asgnx$aws$s3$state_machine__15818__auto__;
})()
;})(switch__15817__auto__,rchan__15907__auto__,c__15840__auto____$1,inst_16588,inst_16610,state_val_16630,c__15840__auto__,___$1))
})();
var state__15842__auto__ = (function (){var statearr_16638 = f__15841__auto__.call(null);
(statearr_16638[(6)] = c__15840__auto____$1);

return statearr_16638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});
;})(rchan__15907__auto__,c__15840__auto____$1,inst_16588,inst_16610,state_val_16630,c__15840__auto__,___$1))
})();
var inst_16612 = cljs.core.async.impl.dispatch.run.call(null,inst_16611);
var state_16629__$1 = (function (){var statearr_16639 = state_16629;
(statearr_16639[(7)] = inst_16612);

return statearr_16639;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16629__$1,(2),inst_16588);
} else {
if((state_val_16630 === (2))){
var inst_16614 = (state_16629[(8)]);
var inst_16614__$1 = (state_16629[(2)]);
var inst_16615 = (inst_16614__$1 == null);
var state_16629__$1 = (function (){var statearr_16640 = state_16629;
(statearr_16640[(8)] = inst_16614__$1);

return statearr_16640;
})();
if(cljs.core.truth_(inst_16615)){
var statearr_16641_16701 = state_16629__$1;
(statearr_16641_16701[(1)] = (3));

} else {
var statearr_16642_16702 = state_16629__$1;
(statearr_16642_16702[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16630 === (3))){
var state_16629__$1 = state_16629;
var statearr_16643_16703 = state_16629__$1;
(statearr_16643_16703[(2)] = null);

(statearr_16643_16703[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16630 === (4))){
var inst_16614 = (state_16629[(8)]);
var inst_16618 = cljs.core.second.call(null,inst_16614);
var state_16629__$1 = state_16629;
var statearr_16644_16704 = state_16629__$1;
(statearr_16644_16704[(2)] = inst_16618);

(statearr_16644_16704[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16630 === (5))){
var inst_16620 = (state_16629[(9)]);
var inst_16620__$1 = (state_16629[(2)]);
var inst_16621 = (inst_16620__$1 == null);
var state_16629__$1 = (function (){var statearr_16645 = state_16629;
(statearr_16645[(9)] = inst_16620__$1);

return statearr_16645;
})();
if(cljs.core.truth_(inst_16621)){
var statearr_16646_16705 = state_16629__$1;
(statearr_16646_16705[(1)] = (6));

} else {
var statearr_16647_16706 = state_16629__$1;
(statearr_16647_16706[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16630 === (6))){
var state_16629__$1 = state_16629;
var statearr_16648_16707 = state_16629__$1;
(statearr_16648_16707[(2)] = null);

(statearr_16648_16707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16630 === (7))){
var inst_16620 = (state_16629[(9)]);
var inst_16624 = new cljs.core.Keyword(null,"Contents","Contents",-560485612).cljs$core$IFn$_invoke$arity$1(inst_16620);
var state_16629__$1 = state_16629;
var statearr_16649_16708 = state_16629__$1;
(statearr_16649_16708[(2)] = inst_16624);

(statearr_16649_16708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16630 === (8))){
var inst_16626 = (state_16629[(2)]);
var inst_16627 = asgnx.aws.s3.object_keys.call(null,inst_16626);
var state_16629__$1 = state_16629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16629__$1,inst_16627);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__15840__auto__,___$1))
;
return ((function (switch__15817__auto__,c__15840__auto__,___$1){
return (function() {
var asgnx$aws$s3$state_machine__15818__auto__ = null;
var asgnx$aws$s3$state_machine__15818__auto____0 = (function (){
var statearr_16650 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16650[(0)] = asgnx$aws$s3$state_machine__15818__auto__);

(statearr_16650[(1)] = (1));

return statearr_16650;
});
var asgnx$aws$s3$state_machine__15818__auto____1 = (function (state_16629){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_16629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e16651){if((e16651 instanceof Object)){
var ex__15821__auto__ = e16651;
var statearr_16652_16709 = state_16629;
(statearr_16652_16709[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16710 = state_16629;
state_16629 = G__16710;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$aws$s3$state_machine__15818__auto__ = function(state_16629){
switch(arguments.length){
case 0:
return asgnx$aws$s3$state_machine__15818__auto____0.call(this);
case 1:
return asgnx$aws$s3$state_machine__15818__auto____1.call(this,state_16629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$aws$s3$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$aws$s3$state_machine__15818__auto____0;
asgnx$aws$s3$state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$aws$s3$state_machine__15818__auto____1;
return asgnx$aws$s3$state_machine__15818__auto__;
})()
;})(switch__15817__auto__,c__15840__auto__,___$1))
})();
var state__15842__auto__ = (function (){var statearr_16653 = f__15841__auto__.call(null);
(statearr_16653[(6)] = c__15840__auto__);

return statearr_16653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});})(c__15840__auto__,___$1))
);

return c__15840__auto__;
});

asgnx.aws.s3.S3Store.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bucket","bucket",-1528217403,null)], null);
});

asgnx.aws.s3.S3Store.cljs$lang$type = true;

asgnx.aws.s3.S3Store.cljs$lang$ctorStr = "asgnx.aws.s3/S3Store";

asgnx.aws.s3.S3Store.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"asgnx.aws.s3/S3Store");
});

/**
 * Positional factory function for asgnx.aws.s3/S3Store.
 */
asgnx.aws.s3.__GT_S3Store = (function asgnx$aws$s3$__GT_S3Store(bucket){
return (new asgnx.aws.s3.S3Store(bucket));
});

asgnx.aws.s3.s3_keystore = (function asgnx$aws$s3$s3_keystore(bucket){
return (new asgnx.aws.s3.S3Store(bucket));
});

//# sourceMappingURL=s3.js.map
