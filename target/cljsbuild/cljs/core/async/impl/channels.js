// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.channels !== 'undefined') && (typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels20130 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels20130 = (function (val,meta20131){
this.val = val;
this.meta20131 = meta20131;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels20130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20132,meta20131__$1){
var self__ = this;
var _20132__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels20130(self__.val,meta20131__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels20130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20132){
var self__ = this;
var _20132__$1 = this;
return self__.meta20131;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels20130.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels20130.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta20131","meta20131",-1598034190,null)], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels20130.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels20130.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels20130";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels20130.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels20130");
});

/**
 * Positional factory function for cljs.core.async.impl.channels/t_cljs$core$async$impl$channels20130.
 */
cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels20130 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels20130(val__$1,meta20131){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels20130(val__$1,meta20131));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels20130(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async.impl.channels/PutBox");
});

/**
 * Positional factory function for cljs.core.async.impl.channels/PutBox.
 */
cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if(((!((this$ == null))) && (!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null))))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_20144 = self__.puts.pop();
if((putter_20144 == null)){
} else {
var put_handler_20145 = putter_20144.handler;
var val_20146 = putter_20144.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_20145)){
var put_cb_20147 = cljs.core.async.impl.protocols.commit.call(null,put_handler_20145);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_20147,put_handler_20145,val_20146,putter_20144,this$__$1){
return (function (){
return put_cb_20147.call(null,true);
});})(put_cb_20147,put_handler_20145,val_20146,putter_20144,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error(["Assert failed: ","Can't put nil on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if(((closed__$1) || (!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler))))){
return cljs.core.async.impl.channels.box.call(null,!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__3938__auto__ = self__.buf;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__3938__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if((((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0))))){
var taker = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)){
var ret = cljs.core.async.impl.protocols.commit.call(null,taker);
var val__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var G__20148 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return ret.call(null,val__$1);
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__20148;
continue;
} else {
var G__20149 = takers;
takers = G__20149;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

if(cljs.core.seq.call(null,take_cbs)){
var seq__20133_20150 = cljs.core.seq.call(null,take_cbs);
var chunk__20134_20151 = null;
var count__20135_20152 = (0);
var i__20136_20153 = (0);
while(true){
if((i__20136_20153 < count__20135_20152)){
var f_20154 = cljs.core._nth.call(null,chunk__20134_20151,i__20136_20153);
cljs.core.async.impl.dispatch.run.call(null,f_20154);


var G__20155 = seq__20133_20150;
var G__20156 = chunk__20134_20151;
var G__20157 = count__20135_20152;
var G__20158 = (i__20136_20153 + (1));
seq__20133_20150 = G__20155;
chunk__20134_20151 = G__20156;
count__20135_20152 = G__20157;
i__20136_20153 = G__20158;
continue;
} else {
var temp__5457__auto___20159 = cljs.core.seq.call(null,seq__20133_20150);
if(temp__5457__auto___20159){
var seq__20133_20160__$1 = temp__5457__auto___20159;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20133_20160__$1)){
var c__4351__auto___20161 = cljs.core.chunk_first.call(null,seq__20133_20160__$1);
var G__20162 = cljs.core.chunk_rest.call(null,seq__20133_20160__$1);
var G__20163 = c__4351__auto___20161;
var G__20164 = cljs.core.count.call(null,c__4351__auto___20161);
var G__20165 = (0);
seq__20133_20150 = G__20162;
chunk__20134_20151 = G__20163;
count__20135_20152 = G__20164;
i__20136_20153 = G__20165;
continue;
} else {
var f_20166 = cljs.core.first.call(null,seq__20133_20160__$1);
cljs.core.async.impl.dispatch.run.call(null,f_20166);


var G__20167 = cljs.core.next.call(null,seq__20133_20160__$1);
var G__20168 = null;
var G__20169 = (0);
var G__20170 = (0);
seq__20133_20150 = G__20167;
chunk__20134_20151 = G__20168;
count__20135_20152 = G__20169;
i__20136_20153 = G__20170;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return take_cb.call(null,val);
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > (64))){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join('')),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler))){
return null;
} else {
if(((!((self__.buf == null))) && ((cljs.core.count.call(null,self__.buf) > (0))))){
var temp__5455__auto__ = cljs.core.async.impl.protocols.commit.call(null,handler);
if(cljs.core.truth_(temp__5455__auto__)){
var take_cb = temp__5455__auto__;
var val = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var vec__20137 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler);
if(and__3938__auto__){
return cljs.core.async.impl.protocols.commit.call(null,put_handler);
} else {
return and__3938__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.call(null,cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val__$1)):null);
if(((cljs.core.not.call(null,done_QMARK_)) && (cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0))))){
var G__20171 = cbs__$1;
cbs = G__20171;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.call(null,vec__20137,(0),null);
var cbs = cljs.core.nth.call(null,vec__20137,(1),null);
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

var seq__20140_20172 = cljs.core.seq.call(null,cbs);
var chunk__20141_20173 = null;
var count__20142_20174 = (0);
var i__20143_20175 = (0);
while(true){
if((i__20143_20175 < count__20142_20174)){
var cb_20176 = cljs.core._nth.call(null,chunk__20141_20173,i__20143_20175);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__20140_20172,chunk__20141_20173,count__20142_20174,i__20143_20175,cb_20176,val,vec__20137,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1){
return (function (){
return cb_20176.call(null,true);
});})(seq__20140_20172,chunk__20141_20173,count__20142_20174,i__20143_20175,cb_20176,val,vec__20137,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1))
);


var G__20177 = seq__20140_20172;
var G__20178 = chunk__20141_20173;
var G__20179 = count__20142_20174;
var G__20180 = (i__20143_20175 + (1));
seq__20140_20172 = G__20177;
chunk__20141_20173 = G__20178;
count__20142_20174 = G__20179;
i__20143_20175 = G__20180;
continue;
} else {
var temp__5457__auto___20181 = cljs.core.seq.call(null,seq__20140_20172);
if(temp__5457__auto___20181){
var seq__20140_20182__$1 = temp__5457__auto___20181;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20140_20182__$1)){
var c__4351__auto___20183 = cljs.core.chunk_first.call(null,seq__20140_20182__$1);
var G__20184 = cljs.core.chunk_rest.call(null,seq__20140_20182__$1);
var G__20185 = c__4351__auto___20183;
var G__20186 = cljs.core.count.call(null,c__4351__auto___20183);
var G__20187 = (0);
seq__20140_20172 = G__20184;
chunk__20141_20173 = G__20185;
count__20142_20174 = G__20186;
i__20143_20175 = G__20187;
continue;
} else {
var cb_20188 = cljs.core.first.call(null,seq__20140_20182__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__20140_20172,chunk__20141_20173,count__20142_20174,i__20143_20175,cb_20188,seq__20140_20182__$1,temp__5457__auto___20181,val,vec__20137,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1){
return (function (){
return cb_20188.call(null,true);
});})(seq__20140_20172,chunk__20141_20173,count__20142_20174,i__20143_20175,cb_20188,seq__20140_20182__$1,temp__5457__auto___20181,val,vec__20137,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1))
);


var G__20189 = cljs.core.next.call(null,seq__20140_20182__$1);
var G__20190 = null;
var G__20191 = (0);
var G__20192 = (0);
seq__20140_20172 = G__20189;
chunk__20141_20173 = G__20190;
count__20142_20174 = G__20191;
i__20143_20175 = G__20192;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (put_cb,putter,this$__$1){
return (function (){
return put_cb.call(null,true);
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__3938__auto__;
}
})())){
var has_val = (function (){var and__3938__auto__ = self__.buf;
if(cljs.core.truth_(and__3938__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__3938__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join('')),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__3938__auto__ = self__.buf;
if(cljs.core.truth_(and__3938__auto__)){
return (self__.puts.length === (0));
} else {
return and__3938__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
var taker_20193 = self__.takes.pop();
if((taker_20193 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_20193)){
var take_cb_20194 = cljs.core.async.impl.protocols.commit.call(null,taker_20193);
var val_20195 = (cljs.core.truth_((function (){var and__3938__auto__ = self__.buf;
if(cljs.core.truth_(and__3938__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__3938__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_20194,val_20195,taker_20193,this$__$1){
return (function (){
return take_cb_20194.call(null,val_20195);
});})(take_cb_20194,val_20195,taker_20193,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_.call(null,self__.buf);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

/**
 * Positional factory function for cljs.core.async.impl.channels/ManyToManyChannel.
 */
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__3949__auto__ = exh;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__20197 = arguments.length;
switch (G__20197) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__20201 = null;
var G__20201__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e20198){var t = e20198;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__20201__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e20199){var t = e20199;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__20201 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__20201__1.call(this,buf__$1);
case 2:
return G__20201__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20201.cljs$core$IFn$_invoke$arity$1 = G__20201__1;
G__20201.cljs$core$IFn$_invoke$arity$2 = G__20201__2;
return G__20201;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=channels.js.map
