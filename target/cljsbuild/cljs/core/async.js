// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__21595 = arguments.length;
switch (G__21595) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21596 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21596 = (function (f,blockable,meta21597){
this.f = f;
this.blockable = blockable;
this.meta21597 = meta21597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21598,meta21597__$1){
var self__ = this;
var _21598__$1 = this;
return (new cljs.core.async.t_cljs$core$async21596(self__.f,self__.blockable,meta21597__$1));
});

cljs.core.async.t_cljs$core$async21596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21598){
var self__ = this;
var _21598__$1 = this;
return self__.meta21597;
});

cljs.core.async.t_cljs$core$async21596.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21596.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21596.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21596.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21596.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21597","meta21597",493548510,null)], null);
});

cljs.core.async.t_cljs$core$async21596.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21596.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21596";

cljs.core.async.t_cljs$core$async21596.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async21596");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21596.
 */
cljs.core.async.__GT_t_cljs$core$async21596 = (function cljs$core$async$__GT_t_cljs$core$async21596(f__$1,blockable__$1,meta21597){
return (new cljs.core.async.t_cljs$core$async21596(f__$1,blockable__$1,meta21597));
});

}

return (new cljs.core.async.t_cljs$core$async21596(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__21602 = arguments.length;
switch (G__21602) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__21605 = arguments.length;
switch (G__21605) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__21608 = arguments.length;
switch (G__21608) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21610 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21610);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21610,ret){
return (function (){
return fn1.call(null,val_21610);
});})(val_21610,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__21612 = arguments.length;
switch (G__21612) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___21614 = n;
var x_21615 = (0);
while(true){
if((x_21615 < n__4408__auto___21614)){
(a[x_21615] = (0));

var G__21616 = (x_21615 + (1));
x_21615 = G__21616;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__21617 = (i + (1));
i = G__21617;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21618 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21618 = (function (flag,meta21619){
this.flag = flag;
this.meta21619 = meta21619;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21620,meta21619__$1){
var self__ = this;
var _21620__$1 = this;
return (new cljs.core.async.t_cljs$core$async21618(self__.flag,meta21619__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21618.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21620){
var self__ = this;
var _21620__$1 = this;
return self__.meta21619;
});})(flag))
;

cljs.core.async.t_cljs$core$async21618.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21618.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21618.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21618.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21618.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21619","meta21619",641895424,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21618.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21618.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21618";

cljs.core.async.t_cljs$core$async21618.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async21618");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21618.
 */
cljs.core.async.__GT_t_cljs$core$async21618 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21618(flag__$1,meta21619){
return (new cljs.core.async.t_cljs$core$async21618(flag__$1,meta21619));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21618(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21621 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21621 = (function (flag,cb,meta21622){
this.flag = flag;
this.cb = cb;
this.meta21622 = meta21622;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21623,meta21622__$1){
var self__ = this;
var _21623__$1 = this;
return (new cljs.core.async.t_cljs$core$async21621(self__.flag,self__.cb,meta21622__$1));
});

cljs.core.async.t_cljs$core$async21621.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21623){
var self__ = this;
var _21623__$1 = this;
return self__.meta21622;
});

cljs.core.async.t_cljs$core$async21621.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21621.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21621.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21621.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21621.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21622","meta21622",1674191334,null)], null);
});

cljs.core.async.t_cljs$core$async21621.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21621.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21621";

cljs.core.async.t_cljs$core$async21621.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async21621");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21621.
 */
cljs.core.async.__GT_t_cljs$core$async21621 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21621(flag__$1,cb__$1,meta21622){
return (new cljs.core.async.t_cljs$core$async21621(flag__$1,cb__$1,meta21622));
});

}

return (new cljs.core.async.t_cljs$core$async21621(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21624_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21624_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21625_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21625_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21626 = (i + (1));
i = G__21626;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___21632 = arguments.length;
var i__4532__auto___21633 = (0);
while(true){
if((i__4532__auto___21633 < len__4531__auto___21632)){
args__4534__auto__.push((arguments[i__4532__auto___21633]));

var G__21634 = (i__4532__auto___21633 + (1));
i__4532__auto___21633 = G__21634;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21629){
var map__21630 = p__21629;
var map__21630__$1 = ((((!((map__21630 == null)))?(((((map__21630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21630):map__21630);
var opts = map__21630__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21627){
var G__21628 = cljs.core.first.call(null,seq21627);
var seq21627__$1 = cljs.core.next.call(null,seq21627);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21628,seq21627__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__21636 = arguments.length;
switch (G__21636) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21535__auto___21682 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto___21682){
return (function (){
var f__21536__auto__ = (function (){var switch__21444__auto__ = ((function (c__21535__auto___21682){
return (function (state_21660){
var state_val_21661 = (state_21660[(1)]);
if((state_val_21661 === (7))){
var inst_21656 = (state_21660[(2)]);
var state_21660__$1 = state_21660;
var statearr_21662_21683 = state_21660__$1;
(statearr_21662_21683[(2)] = inst_21656);

(statearr_21662_21683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21661 === (1))){
var state_21660__$1 = state_21660;
var statearr_21663_21684 = state_21660__$1;
(statearr_21663_21684[(2)] = null);

(statearr_21663_21684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21661 === (4))){
var inst_21639 = (state_21660[(7)]);
var inst_21639__$1 = (state_21660[(2)]);
var inst_21640 = (inst_21639__$1 == null);
var state_21660__$1 = (function (){var statearr_21664 = state_21660;
(statearr_21664[(7)] = inst_21639__$1);

return statearr_21664;
})();
if(cljs.core.truth_(inst_21640)){
var statearr_21665_21685 = state_21660__$1;
(statearr_21665_21685[(1)] = (5));

} else {
var statearr_21666_21686 = state_21660__$1;
(statearr_21666_21686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21661 === (13))){
var state_21660__$1 = state_21660;
var statearr_21667_21687 = state_21660__$1;
(statearr_21667_21687[(2)] = null);

(statearr_21667_21687[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21661 === (6))){
var inst_21639 = (state_21660[(7)]);
var state_21660__$1 = state_21660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21660__$1,(11),to,inst_21639);
} else {
if((state_val_21661 === (3))){
var inst_21658 = (state_21660[(2)]);
var state_21660__$1 = state_21660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21660__$1,inst_21658);
} else {
if((state_val_21661 === (12))){
var state_21660__$1 = state_21660;
var statearr_21668_21688 = state_21660__$1;
(statearr_21668_21688[(2)] = null);

(statearr_21668_21688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21661 === (2))){
var state_21660__$1 = state_21660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21660__$1,(4),from);
} else {
if((state_val_21661 === (11))){
var inst_21649 = (state_21660[(2)]);
var state_21660__$1 = state_21660;
if(cljs.core.truth_(inst_21649)){
var statearr_21669_21689 = state_21660__$1;
(statearr_21669_21689[(1)] = (12));

} else {
var statearr_21670_21690 = state_21660__$1;
(statearr_21670_21690[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21661 === (9))){
var state_21660__$1 = state_21660;
var statearr_21671_21691 = state_21660__$1;
(statearr_21671_21691[(2)] = null);

(statearr_21671_21691[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21661 === (5))){
var state_21660__$1 = state_21660;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21672_21692 = state_21660__$1;
(statearr_21672_21692[(1)] = (8));

} else {
var statearr_21673_21693 = state_21660__$1;
(statearr_21673_21693[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21661 === (14))){
var inst_21654 = (state_21660[(2)]);
var state_21660__$1 = state_21660;
var statearr_21674_21694 = state_21660__$1;
(statearr_21674_21694[(2)] = inst_21654);

(statearr_21674_21694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21661 === (10))){
var inst_21646 = (state_21660[(2)]);
var state_21660__$1 = state_21660;
var statearr_21675_21695 = state_21660__$1;
(statearr_21675_21695[(2)] = inst_21646);

(statearr_21675_21695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21661 === (8))){
var inst_21643 = cljs.core.async.close_BANG_.call(null,to);
var state_21660__$1 = state_21660;
var statearr_21676_21696 = state_21660__$1;
(statearr_21676_21696[(2)] = inst_21643);

(statearr_21676_21696[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});})(c__21535__auto___21682))
;
return ((function (switch__21444__auto__,c__21535__auto___21682){
return (function() {
var cljs$core$async$state_machine__21445__auto__ = null;
var cljs$core$async$state_machine__21445__auto____0 = (function (){
var statearr_21677 = [null,null,null,null,null,null,null,null];
(statearr_21677[(0)] = cljs$core$async$state_machine__21445__auto__);

(statearr_21677[(1)] = (1));

return statearr_21677;
});
var cljs$core$async$state_machine__21445__auto____1 = (function (state_21660){
while(true){
var ret_value__21446__auto__ = (function (){try{while(true){
var result__21447__auto__ = switch__21444__auto__.call(null,state_21660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21447__auto__;
}
break;
}
}catch (e21678){if((e21678 instanceof Object)){
var ex__21448__auto__ = e21678;
var statearr_21679_21697 = state_21660;
(statearr_21679_21697[(5)] = ex__21448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21698 = state_21660;
state_21660 = G__21698;
continue;
} else {
return ret_value__21446__auto__;
}
break;
}
});
cljs$core$async$state_machine__21445__auto__ = function(state_21660){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21445__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21445__auto____1.call(this,state_21660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21445__auto____0;
cljs$core$async$state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21445__auto____1;
return cljs$core$async$state_machine__21445__auto__;
})()
;})(switch__21444__auto__,c__21535__auto___21682))
})();
var state__21537__auto__ = (function (){var statearr_21680 = f__21536__auto__.call(null);
(statearr_21680[(6)] = c__21535__auto___21682);

return statearr_21680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto___21682))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__21699){
var vec__21700 = p__21699;
var v = cljs.core.nth.call(null,vec__21700,(0),null);
var p = cljs.core.nth.call(null,vec__21700,(1),null);
var job = vec__21700;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21535__auto___21871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto___21871,res,vec__21700,v,p,job,jobs,results){
return (function (){
var f__21536__auto__ = (function (){var switch__21444__auto__ = ((function (c__21535__auto___21871,res,vec__21700,v,p,job,jobs,results){
return (function (state_21707){
var state_val_21708 = (state_21707[(1)]);
if((state_val_21708 === (1))){
var state_21707__$1 = state_21707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21707__$1,(2),res,v);
} else {
if((state_val_21708 === (2))){
var inst_21704 = (state_21707[(2)]);
var inst_21705 = cljs.core.async.close_BANG_.call(null,res);
var state_21707__$1 = (function (){var statearr_21709 = state_21707;
(statearr_21709[(7)] = inst_21704);

return statearr_21709;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21707__$1,inst_21705);
} else {
return null;
}
}
});})(c__21535__auto___21871,res,vec__21700,v,p,job,jobs,results))
;
return ((function (switch__21444__auto__,c__21535__auto___21871,res,vec__21700,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21445__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21445__auto____0 = (function (){
var statearr_21710 = [null,null,null,null,null,null,null,null];
(statearr_21710[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21445__auto__);

(statearr_21710[(1)] = (1));

return statearr_21710;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21445__auto____1 = (function (state_21707){
while(true){
var ret_value__21446__auto__ = (function (){try{while(true){
var result__21447__auto__ = switch__21444__auto__.call(null,state_21707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21447__auto__;
}
break;
}
}catch (e21711){if((e21711 instanceof Object)){
var ex__21448__auto__ = e21711;
var statearr_21712_21872 = state_21707;
(statearr_21712_21872[(5)] = ex__21448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21873 = state_21707;
state_21707 = G__21873;
continue;
} else {
return ret_value__21446__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21445__auto__ = function(state_21707){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21445__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21445__auto____1.call(this,state_21707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21445__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21445__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21445__auto__;
})()
;})(switch__21444__auto__,c__21535__auto___21871,res,vec__21700,v,p,job,jobs,results))
})();
var state__21537__auto__ = (function (){var statearr_21713 = f__21536__auto__.call(null);
(statearr_21713[(6)] = c__21535__auto___21871);

return statearr_21713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto___21871,res,vec__21700,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21714){
var vec__21715 = p__21714;
var v = cljs.core.nth.call(null,vec__21715,(0),null);
var p = cljs.core.nth.call(null,vec__21715,(1),null);
var job = vec__21715;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___21874 = n;
var __21875 = (0);
while(true){
if((__21875 < n__4408__auto___21874)){
var G__21718_21876 = type;
var G__21718_21877__$1 = (((G__21718_21876 instanceof cljs.core.Keyword))?G__21718_21876.fqn:null);
switch (G__21718_21877__$1) {
case "compute":
var c__21535__auto___21879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21875,c__21535__auto___21879,G__21718_21876,G__21718_21877__$1,n__4408__auto___21874,jobs,results,process,async){
return (function (){
var f__21536__auto__ = (function (){var switch__21444__auto__ = ((function (__21875,c__21535__auto___21879,G__21718_21876,G__21718_21877__$1,n__4408__auto___21874,jobs,results,process,async){
return (function (state_21731){
var state_val_21732 = (state_21731[(1)]);
if((state_val_21732 === (1))){
var state_21731__$1 = state_21731;
var statearr_21733_21880 = state_21731__$1;
(statearr_21733_21880[(2)] = null);

(statearr_21733_21880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21732 === (2))){
var state_21731__$1 = state_21731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21731__$1,(4),jobs);
} else {
if((state_val_21732 === (3))){
var inst_21729 = (state_21731[(2)]);
var state_21731__$1 = state_21731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21731__$1,inst_21729);
} else {
if((state_val_21732 === (4))){
var inst_21721 = (state_21731[(2)]);
var inst_21722 = process.call(null,inst_21721);
var state_21731__$1 = state_21731;
if(cljs.core.truth_(inst_21722)){
var statearr_21734_21881 = state_21731__$1;
(statearr_21734_21881[(1)] = (5));

} else {
var statearr_21735_21882 = state_21731__$1;
(statearr_21735_21882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21732 === (5))){
var state_21731__$1 = state_21731;
var statearr_21736_21883 = state_21731__$1;
(statearr_21736_21883[(2)] = null);

(statearr_21736_21883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21732 === (6))){
var state_21731__$1 = state_21731;
var statearr_21737_21884 = state_21731__$1;
(statearr_21737_21884[(2)] = null);

(statearr_21737_21884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21732 === (7))){
var inst_21727 = (state_21731[(2)]);
var state_21731__$1 = state_21731;
var statearr_21738_21885 = state_21731__$1;
(statearr_21738_21885[(2)] = inst_21727);

(statearr_21738_21885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__21875,c__21535__auto___21879,G__21718_21876,G__21718_21877__$1,n__4408__auto___21874,jobs,results,process,async))
;
return ((function (__21875,switch__21444__auto__,c__21535__auto___21879,G__21718_21876,G__21718_21877__$1,n__4408__auto___21874,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21445__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21445__auto____0 = (function (){
var statearr_21739 = [null,null,null,null,null,null,null];
(statearr_21739[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21445__auto__);

(statearr_21739[(1)] = (1));

return statearr_21739;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21445__auto____1 = (function (state_21731){
while(true){
var ret_value__21446__auto__ = (function (){try{while(true){
var result__21447__auto__ = switch__21444__auto__.call(null,state_21731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21447__auto__;
}
break;
}
}catch (e21740){if((e21740 instanceof Object)){
var ex__21448__auto__ = e21740;
var statearr_21741_21886 = state_21731;
(statearr_21741_21886[(5)] = ex__21448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21887 = state_21731;
state_21731 = G__21887;
continue;
} else {
return ret_value__21446__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21445__auto__ = function(state_21731){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21445__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21445__auto____1.call(this,state_21731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21445__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21445__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21445__auto__;
})()
;})(__21875,switch__21444__auto__,c__21535__auto___21879,G__21718_21876,G__21718_21877__$1,n__4408__auto___21874,jobs,results,process,async))
})();
var state__21537__auto__ = (function (){var statearr_21742 = f__21536__auto__.call(null);
(statearr_21742[(6)] = c__21535__auto___21879);

return statearr_21742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(__21875,c__21535__auto___21879,G__21718_21876,G__21718_21877__$1,n__4408__auto___21874,jobs,results,process,async))
);


break;
case "async":
var c__21535__auto___21888 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21875,c__21535__auto___21888,G__21718_21876,G__21718_21877__$1,n__4408__auto___21874,jobs,results,process,async){
return (function (){
var f__21536__auto__ = (function (){var switch__21444__auto__ = ((function (__21875,c__21535__auto___21888,G__21718_21876,G__21718_21877__$1,n__4408__auto___21874,jobs,results,process,async){
return (function (state_21755){
var state_val_21756 = (state_21755[(1)]);
if((state_val_21756 === (1))){
var state_21755__$1 = state_21755;
var statearr_21757_21889 = state_21755__$1;
(statearr_21757_21889[(2)] = null);

(statearr_21757_21889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21756 === (2))){
var state_21755__$1 = state_21755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21755__$1,(4),jobs);
} else {
if((state_val_21756 === (3))){
var inst_21753 = (state_21755[(2)]);
var state_21755__$1 = state_21755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21755__$1,inst_21753);
} else {
if((state_val_21756 === (4))){
var inst_21745 = (state_21755[(2)]);
var inst_21746 = async.call(null,inst_21745);
var state_21755__$1 = state_21755;
if(cljs.core.truth_(inst_21746)){
var statearr_21758_21890 = state_21755__$1;
(statearr_21758_21890[(1)] = (5));

} else {
var statearr_21759_21891 = state_21755__$1;
(statearr_21759_21891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21756 === (5))){
var state_21755__$1 = state_21755;
var statearr_21760_21892 = state_21755__$1;
(statearr_21760_21892[(2)] = null);

(statearr_21760_21892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21756 === (6))){
var state_21755__$1 = state_21755;
var statearr_21761_21893 = state_21755__$1;
(statearr_21761_21893[(2)] = null);

(statearr_21761_21893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21756 === (7))){
var inst_21751 = (state_21755[(2)]);
var state_21755__$1 = state_21755;
var statearr_21762_21894 = state_21755__$1;
(statearr_21762_21894[(2)] = inst_21751);

(statearr_21762_21894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__21875,c__21535__auto___21888,G__21718_21876,G__21718_21877__$1,n__4408__auto___21874,jobs,results,process,async))
;
return ((function (__21875,switch__21444__auto__,c__21535__auto___21888,G__21718_21876,G__21718_21877__$1,n__4408__auto___21874,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21445__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21445__auto____0 = (function (){
var statearr_21763 = [null,null,null,null,null,null,null];
(statearr_21763[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21445__auto__);

(statearr_21763[(1)] = (1));

return statearr_21763;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21445__auto____1 = (function (state_21755){
while(true){
var ret_value__21446__auto__ = (function (){try{while(true){
var result__21447__auto__ = switch__21444__auto__.call(null,state_21755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21447__auto__;
}
break;
}
}catch (e21764){if((e21764 instanceof Object)){
var ex__21448__auto__ = e21764;
var statearr_21765_21895 = state_21755;
(statearr_21765_21895[(5)] = ex__21448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21896 = state_21755;
state_21755 = G__21896;
continue;
} else {
return ret_value__21446__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21445__auto__ = function(state_21755){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21445__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21445__auto____1.call(this,state_21755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21445__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21445__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21445__auto__;
})()
;})(__21875,switch__21444__auto__,c__21535__auto___21888,G__21718_21876,G__21718_21877__$1,n__4408__auto___21874,jobs,results,process,async))
})();
var state__21537__auto__ = (function (){var statearr_21766 = f__21536__auto__.call(null);
(statearr_21766[(6)] = c__21535__auto___21888);

return statearr_21766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(__21875,c__21535__auto___21888,G__21718_21876,G__21718_21877__$1,n__4408__auto___21874,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21718_21877__$1)].join('')));

}

var G__21897 = (__21875 + (1));
__21875 = G__21897;
continue;
} else {
}
break;
}

var c__21535__auto___21898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto___21898,jobs,results,process,async){
return (function (){
var f__21536__auto__ = (function (){var switch__21444__auto__ = ((function (c__21535__auto___21898,jobs,results,process,async){
return (function (state_21788){
var state_val_21789 = (state_21788[(1)]);
if((state_val_21789 === (1))){
var state_21788__$1 = state_21788;
var statearr_21790_21899 = state_21788__$1;
(statearr_21790_21899[(2)] = null);

(statearr_21790_21899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21789 === (2))){
var state_21788__$1 = state_21788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21788__$1,(4),from);
} else {
if((state_val_21789 === (3))){
var inst_21786 = (state_21788[(2)]);
var state_21788__$1 = state_21788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21788__$1,inst_21786);
} else {
if((state_val_21789 === (4))){
var inst_21769 = (state_21788[(7)]);
var inst_21769__$1 = (state_21788[(2)]);
var inst_21770 = (inst_21769__$1 == null);
var state_21788__$1 = (function (){var statearr_21791 = state_21788;
(statearr_21791[(7)] = inst_21769__$1);

return statearr_21791;
})();
if(cljs.core.truth_(inst_21770)){
var statearr_21792_21900 = state_21788__$1;
(statearr_21792_21900[(1)] = (5));

} else {
var statearr_21793_21901 = state_21788__$1;
(statearr_21793_21901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21789 === (5))){
var inst_21772 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21788__$1 = state_21788;
var statearr_21794_21902 = state_21788__$1;
(statearr_21794_21902[(2)] = inst_21772);

(statearr_21794_21902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21789 === (6))){
var inst_21769 = (state_21788[(7)]);
var inst_21774 = (state_21788[(8)]);
var inst_21774__$1 = cljs.core.async.chan.call(null,(1));
var inst_21775 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21776 = [inst_21769,inst_21774__$1];
var inst_21777 = (new cljs.core.PersistentVector(null,2,(5),inst_21775,inst_21776,null));
var state_21788__$1 = (function (){var statearr_21795 = state_21788;
(statearr_21795[(8)] = inst_21774__$1);

return statearr_21795;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21788__$1,(8),jobs,inst_21777);
} else {
if((state_val_21789 === (7))){
var inst_21784 = (state_21788[(2)]);
var state_21788__$1 = state_21788;
var statearr_21796_21903 = state_21788__$1;
(statearr_21796_21903[(2)] = inst_21784);

(statearr_21796_21903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21789 === (8))){
var inst_21774 = (state_21788[(8)]);
var inst_21779 = (state_21788[(2)]);
var state_21788__$1 = (function (){var statearr_21797 = state_21788;
(statearr_21797[(9)] = inst_21779);

return statearr_21797;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21788__$1,(9),results,inst_21774);
} else {
if((state_val_21789 === (9))){
var inst_21781 = (state_21788[(2)]);
var state_21788__$1 = (function (){var statearr_21798 = state_21788;
(statearr_21798[(10)] = inst_21781);

return statearr_21798;
})();
var statearr_21799_21904 = state_21788__$1;
(statearr_21799_21904[(2)] = null);

(statearr_21799_21904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
});})(c__21535__auto___21898,jobs,results,process,async))
;
return ((function (switch__21444__auto__,c__21535__auto___21898,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21445__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21445__auto____0 = (function (){
var statearr_21800 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21800[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21445__auto__);

(statearr_21800[(1)] = (1));

return statearr_21800;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21445__auto____1 = (function (state_21788){
while(true){
var ret_value__21446__auto__ = (function (){try{while(true){
var result__21447__auto__ = switch__21444__auto__.call(null,state_21788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21447__auto__;
}
break;
}
}catch (e21801){if((e21801 instanceof Object)){
var ex__21448__auto__ = e21801;
var statearr_21802_21905 = state_21788;
(statearr_21802_21905[(5)] = ex__21448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21906 = state_21788;
state_21788 = G__21906;
continue;
} else {
return ret_value__21446__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21445__auto__ = function(state_21788){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21445__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21445__auto____1.call(this,state_21788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21445__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21445__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21445__auto__;
})()
;})(switch__21444__auto__,c__21535__auto___21898,jobs,results,process,async))
})();
var state__21537__auto__ = (function (){var statearr_21803 = f__21536__auto__.call(null);
(statearr_21803[(6)] = c__21535__auto___21898);

return statearr_21803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto___21898,jobs,results,process,async))
);


var c__21535__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto__,jobs,results,process,async){
return (function (){
var f__21536__auto__ = (function (){var switch__21444__auto__ = ((function (c__21535__auto__,jobs,results,process,async){
return (function (state_21841){
var state_val_21842 = (state_21841[(1)]);
if((state_val_21842 === (7))){
var inst_21837 = (state_21841[(2)]);
var state_21841__$1 = state_21841;
var statearr_21843_21907 = state_21841__$1;
(statearr_21843_21907[(2)] = inst_21837);

(statearr_21843_21907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21842 === (20))){
var state_21841__$1 = state_21841;
var statearr_21844_21908 = state_21841__$1;
(statearr_21844_21908[(2)] = null);

(statearr_21844_21908[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21842 === (1))){
var state_21841__$1 = state_21841;
var statearr_21845_21909 = state_21841__$1;
(statearr_21845_21909[(2)] = null);

(statearr_21845_21909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21842 === (4))){
var inst_21806 = (state_21841[(7)]);
var inst_21806__$1 = (state_21841[(2)]);
var inst_21807 = (inst_21806__$1 == null);
var state_21841__$1 = (function (){var statearr_21846 = state_21841;
(statearr_21846[(7)] = inst_21806__$1);

return statearr_21846;
})();
if(cljs.core.truth_(inst_21807)){
var statearr_21847_21910 = state_21841__$1;
(statearr_21847_21910[(1)] = (5));

} else {
var statearr_21848_21911 = state_21841__$1;
(statearr_21848_21911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21842 === (15))){
var inst_21819 = (state_21841[(8)]);
var state_21841__$1 = state_21841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21841__$1,(18),to,inst_21819);
} else {
if((state_val_21842 === (21))){
var inst_21832 = (state_21841[(2)]);
var state_21841__$1 = state_21841;
var statearr_21849_21912 = state_21841__$1;
(statearr_21849_21912[(2)] = inst_21832);

(statearr_21849_21912[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21842 === (13))){
var inst_21834 = (state_21841[(2)]);
var state_21841__$1 = (function (){var statearr_21850 = state_21841;
(statearr_21850[(9)] = inst_21834);

return statearr_21850;
})();
var statearr_21851_21913 = state_21841__$1;
(statearr_21851_21913[(2)] = null);

(statearr_21851_21913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21842 === (6))){
var inst_21806 = (state_21841[(7)]);
var state_21841__$1 = state_21841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21841__$1,(11),inst_21806);
} else {
if((state_val_21842 === (17))){
var inst_21827 = (state_21841[(2)]);
var state_21841__$1 = state_21841;
if(cljs.core.truth_(inst_21827)){
var statearr_21852_21914 = state_21841__$1;
(statearr_21852_21914[(1)] = (19));

} else {
var statearr_21853_21915 = state_21841__$1;
(statearr_21853_21915[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21842 === (3))){
var inst_21839 = (state_21841[(2)]);
var state_21841__$1 = state_21841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21841__$1,inst_21839);
} else {
if((state_val_21842 === (12))){
var inst_21816 = (state_21841[(10)]);
var state_21841__$1 = state_21841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21841__$1,(14),inst_21816);
} else {
if((state_val_21842 === (2))){
var state_21841__$1 = state_21841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21841__$1,(4),results);
} else {
if((state_val_21842 === (19))){
var state_21841__$1 = state_21841;
var statearr_21854_21916 = state_21841__$1;
(statearr_21854_21916[(2)] = null);

(statearr_21854_21916[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21842 === (11))){
var inst_21816 = (state_21841[(2)]);
var state_21841__$1 = (function (){var statearr_21855 = state_21841;
(statearr_21855[(10)] = inst_21816);

return statearr_21855;
})();
var statearr_21856_21917 = state_21841__$1;
(statearr_21856_21917[(2)] = null);

(statearr_21856_21917[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21842 === (9))){
var state_21841__$1 = state_21841;
var statearr_21857_21918 = state_21841__$1;
(statearr_21857_21918[(2)] = null);

(statearr_21857_21918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21842 === (5))){
var state_21841__$1 = state_21841;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21858_21919 = state_21841__$1;
(statearr_21858_21919[(1)] = (8));

} else {
var statearr_21859_21920 = state_21841__$1;
(statearr_21859_21920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21842 === (14))){
var inst_21819 = (state_21841[(8)]);
var inst_21821 = (state_21841[(11)]);
var inst_21819__$1 = (state_21841[(2)]);
var inst_21820 = (inst_21819__$1 == null);
var inst_21821__$1 = cljs.core.not.call(null,inst_21820);
var state_21841__$1 = (function (){var statearr_21860 = state_21841;
(statearr_21860[(8)] = inst_21819__$1);

(statearr_21860[(11)] = inst_21821__$1);

return statearr_21860;
})();
if(inst_21821__$1){
var statearr_21861_21921 = state_21841__$1;
(statearr_21861_21921[(1)] = (15));

} else {
var statearr_21862_21922 = state_21841__$1;
(statearr_21862_21922[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21842 === (16))){
var inst_21821 = (state_21841[(11)]);
var state_21841__$1 = state_21841;
var statearr_21863_21923 = state_21841__$1;
(statearr_21863_21923[(2)] = inst_21821);

(statearr_21863_21923[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21842 === (10))){
var inst_21813 = (state_21841[(2)]);
var state_21841__$1 = state_21841;
var statearr_21864_21924 = state_21841__$1;
(statearr_21864_21924[(2)] = inst_21813);

(statearr_21864_21924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21842 === (18))){
var inst_21824 = (state_21841[(2)]);
var state_21841__$1 = state_21841;
var statearr_21865_21925 = state_21841__$1;
(statearr_21865_21925[(2)] = inst_21824);

(statearr_21865_21925[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21842 === (8))){
var inst_21810 = cljs.core.async.close_BANG_.call(null,to);
var state_21841__$1 = state_21841;
var statearr_21866_21926 = state_21841__$1;
(statearr_21866_21926[(2)] = inst_21810);

(statearr_21866_21926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21535__auto__,jobs,results,process,async))
;
return ((function (switch__21444__auto__,c__21535__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21445__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21445__auto____0 = (function (){
var statearr_21867 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21867[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21445__auto__);

(statearr_21867[(1)] = (1));

return statearr_21867;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21445__auto____1 = (function (state_21841){
while(true){
var ret_value__21446__auto__ = (function (){try{while(true){
var result__21447__auto__ = switch__21444__auto__.call(null,state_21841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21447__auto__;
}
break;
}
}catch (e21868){if((e21868 instanceof Object)){
var ex__21448__auto__ = e21868;
var statearr_21869_21927 = state_21841;
(statearr_21869_21927[(5)] = ex__21448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21928 = state_21841;
state_21841 = G__21928;
continue;
} else {
return ret_value__21446__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21445__auto__ = function(state_21841){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21445__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21445__auto____1.call(this,state_21841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21445__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21445__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21445__auto__;
})()
;})(switch__21444__auto__,c__21535__auto__,jobs,results,process,async))
})();
var state__21537__auto__ = (function (){var statearr_21870 = f__21536__auto__.call(null);
(statearr_21870[(6)] = c__21535__auto__);

return statearr_21870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto__,jobs,results,process,async))
);

return c__21535__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__21930 = arguments.length;
switch (G__21930) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__21933 = arguments.length;
switch (G__21933) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__21936 = arguments.length;
switch (G__21936) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21535__auto___21985 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto___21985,tc,fc){
return (function (){
var f__21536__auto__ = (function (){var switch__21444__auto__ = ((function (c__21535__auto___21985,tc,fc){
return (function (state_21962){
var state_val_21963 = (state_21962[(1)]);
if((state_val_21963 === (7))){
var inst_21958 = (state_21962[(2)]);
var state_21962__$1 = state_21962;
var statearr_21964_21986 = state_21962__$1;
(statearr_21964_21986[(2)] = inst_21958);

(statearr_21964_21986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21963 === (1))){
var state_21962__$1 = state_21962;
var statearr_21965_21987 = state_21962__$1;
(statearr_21965_21987[(2)] = null);

(statearr_21965_21987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21963 === (4))){
var inst_21939 = (state_21962[(7)]);
var inst_21939__$1 = (state_21962[(2)]);
var inst_21940 = (inst_21939__$1 == null);
var state_21962__$1 = (function (){var statearr_21966 = state_21962;
(statearr_21966[(7)] = inst_21939__$1);

return statearr_21966;
})();
if(cljs.core.truth_(inst_21940)){
var statearr_21967_21988 = state_21962__$1;
(statearr_21967_21988[(1)] = (5));

} else {
var statearr_21968_21989 = state_21962__$1;
(statearr_21968_21989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21963 === (13))){
var state_21962__$1 = state_21962;
var statearr_21969_21990 = state_21962__$1;
(statearr_21969_21990[(2)] = null);

(statearr_21969_21990[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21963 === (6))){
var inst_21939 = (state_21962[(7)]);
var inst_21945 = p.call(null,inst_21939);
var state_21962__$1 = state_21962;
if(cljs.core.truth_(inst_21945)){
var statearr_21970_21991 = state_21962__$1;
(statearr_21970_21991[(1)] = (9));

} else {
var statearr_21971_21992 = state_21962__$1;
(statearr_21971_21992[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21963 === (3))){
var inst_21960 = (state_21962[(2)]);
var state_21962__$1 = state_21962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21962__$1,inst_21960);
} else {
if((state_val_21963 === (12))){
var state_21962__$1 = state_21962;
var statearr_21972_21993 = state_21962__$1;
(statearr_21972_21993[(2)] = null);

(statearr_21972_21993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21963 === (2))){
var state_21962__$1 = state_21962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21962__$1,(4),ch);
} else {
if((state_val_21963 === (11))){
var inst_21939 = (state_21962[(7)]);
var inst_21949 = (state_21962[(2)]);
var state_21962__$1 = state_21962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21962__$1,(8),inst_21949,inst_21939);
} else {
if((state_val_21963 === (9))){
var state_21962__$1 = state_21962;
var statearr_21973_21994 = state_21962__$1;
(statearr_21973_21994[(2)] = tc);

(statearr_21973_21994[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21963 === (5))){
var inst_21942 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21943 = cljs.core.async.close_BANG_.call(null,fc);
var state_21962__$1 = (function (){var statearr_21974 = state_21962;
(statearr_21974[(8)] = inst_21942);

return statearr_21974;
})();
var statearr_21975_21995 = state_21962__$1;
(statearr_21975_21995[(2)] = inst_21943);

(statearr_21975_21995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21963 === (14))){
var inst_21956 = (state_21962[(2)]);
var state_21962__$1 = state_21962;
var statearr_21976_21996 = state_21962__$1;
(statearr_21976_21996[(2)] = inst_21956);

(statearr_21976_21996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21963 === (10))){
var state_21962__$1 = state_21962;
var statearr_21977_21997 = state_21962__$1;
(statearr_21977_21997[(2)] = fc);

(statearr_21977_21997[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21963 === (8))){
var inst_21951 = (state_21962[(2)]);
var state_21962__$1 = state_21962;
if(cljs.core.truth_(inst_21951)){
var statearr_21978_21998 = state_21962__$1;
(statearr_21978_21998[(1)] = (12));

} else {
var statearr_21979_21999 = state_21962__$1;
(statearr_21979_21999[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});})(c__21535__auto___21985,tc,fc))
;
return ((function (switch__21444__auto__,c__21535__auto___21985,tc,fc){
return (function() {
var cljs$core$async$state_machine__21445__auto__ = null;
var cljs$core$async$state_machine__21445__auto____0 = (function (){
var statearr_21980 = [null,null,null,null,null,null,null,null,null];
(statearr_21980[(0)] = cljs$core$async$state_machine__21445__auto__);

(statearr_21980[(1)] = (1));

return statearr_21980;
});
var cljs$core$async$state_machine__21445__auto____1 = (function (state_21962){
while(true){
var ret_value__21446__auto__ = (function (){try{while(true){
var result__21447__auto__ = switch__21444__auto__.call(null,state_21962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21447__auto__;
}
break;
}
}catch (e21981){if((e21981 instanceof Object)){
var ex__21448__auto__ = e21981;
var statearr_21982_22000 = state_21962;
(statearr_21982_22000[(5)] = ex__21448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22001 = state_21962;
state_21962 = G__22001;
continue;
} else {
return ret_value__21446__auto__;
}
break;
}
});
cljs$core$async$state_machine__21445__auto__ = function(state_21962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21445__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21445__auto____1.call(this,state_21962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21445__auto____0;
cljs$core$async$state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21445__auto____1;
return cljs$core$async$state_machine__21445__auto__;
})()
;})(switch__21444__auto__,c__21535__auto___21985,tc,fc))
})();
var state__21537__auto__ = (function (){var statearr_21983 = f__21536__auto__.call(null);
(statearr_21983[(6)] = c__21535__auto___21985);

return statearr_21983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto___21985,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21535__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto__){
return (function (){
var f__21536__auto__ = (function (){var switch__21444__auto__ = ((function (c__21535__auto__){
return (function (state_22022){
var state_val_22023 = (state_22022[(1)]);
if((state_val_22023 === (7))){
var inst_22018 = (state_22022[(2)]);
var state_22022__$1 = state_22022;
var statearr_22024_22042 = state_22022__$1;
(statearr_22024_22042[(2)] = inst_22018);

(statearr_22024_22042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (1))){
var inst_22002 = init;
var state_22022__$1 = (function (){var statearr_22025 = state_22022;
(statearr_22025[(7)] = inst_22002);

return statearr_22025;
})();
var statearr_22026_22043 = state_22022__$1;
(statearr_22026_22043[(2)] = null);

(statearr_22026_22043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (4))){
var inst_22005 = (state_22022[(8)]);
var inst_22005__$1 = (state_22022[(2)]);
var inst_22006 = (inst_22005__$1 == null);
var state_22022__$1 = (function (){var statearr_22027 = state_22022;
(statearr_22027[(8)] = inst_22005__$1);

return statearr_22027;
})();
if(cljs.core.truth_(inst_22006)){
var statearr_22028_22044 = state_22022__$1;
(statearr_22028_22044[(1)] = (5));

} else {
var statearr_22029_22045 = state_22022__$1;
(statearr_22029_22045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (6))){
var inst_22009 = (state_22022[(9)]);
var inst_22002 = (state_22022[(7)]);
var inst_22005 = (state_22022[(8)]);
var inst_22009__$1 = f.call(null,inst_22002,inst_22005);
var inst_22010 = cljs.core.reduced_QMARK_.call(null,inst_22009__$1);
var state_22022__$1 = (function (){var statearr_22030 = state_22022;
(statearr_22030[(9)] = inst_22009__$1);

return statearr_22030;
})();
if(inst_22010){
var statearr_22031_22046 = state_22022__$1;
(statearr_22031_22046[(1)] = (8));

} else {
var statearr_22032_22047 = state_22022__$1;
(statearr_22032_22047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (3))){
var inst_22020 = (state_22022[(2)]);
var state_22022__$1 = state_22022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22022__$1,inst_22020);
} else {
if((state_val_22023 === (2))){
var state_22022__$1 = state_22022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22022__$1,(4),ch);
} else {
if((state_val_22023 === (9))){
var inst_22009 = (state_22022[(9)]);
var inst_22002 = inst_22009;
var state_22022__$1 = (function (){var statearr_22033 = state_22022;
(statearr_22033[(7)] = inst_22002);

return statearr_22033;
})();
var statearr_22034_22048 = state_22022__$1;
(statearr_22034_22048[(2)] = null);

(statearr_22034_22048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (5))){
var inst_22002 = (state_22022[(7)]);
var state_22022__$1 = state_22022;
var statearr_22035_22049 = state_22022__$1;
(statearr_22035_22049[(2)] = inst_22002);

(statearr_22035_22049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (10))){
var inst_22016 = (state_22022[(2)]);
var state_22022__$1 = state_22022;
var statearr_22036_22050 = state_22022__$1;
(statearr_22036_22050[(2)] = inst_22016);

(statearr_22036_22050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (8))){
var inst_22009 = (state_22022[(9)]);
var inst_22012 = cljs.core.deref.call(null,inst_22009);
var state_22022__$1 = state_22022;
var statearr_22037_22051 = state_22022__$1;
(statearr_22037_22051[(2)] = inst_22012);

(statearr_22037_22051[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});})(c__21535__auto__))
;
return ((function (switch__21444__auto__,c__21535__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21445__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21445__auto____0 = (function (){
var statearr_22038 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22038[(0)] = cljs$core$async$reduce_$_state_machine__21445__auto__);

(statearr_22038[(1)] = (1));

return statearr_22038;
});
var cljs$core$async$reduce_$_state_machine__21445__auto____1 = (function (state_22022){
while(true){
var ret_value__21446__auto__ = (function (){try{while(true){
var result__21447__auto__ = switch__21444__auto__.call(null,state_22022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21447__auto__;
}
break;
}
}catch (e22039){if((e22039 instanceof Object)){
var ex__21448__auto__ = e22039;
var statearr_22040_22052 = state_22022;
(statearr_22040_22052[(5)] = ex__21448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22053 = state_22022;
state_22022 = G__22053;
continue;
} else {
return ret_value__21446__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21445__auto__ = function(state_22022){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21445__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21445__auto____1.call(this,state_22022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21445__auto____0;
cljs$core$async$reduce_$_state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21445__auto____1;
return cljs$core$async$reduce_$_state_machine__21445__auto__;
})()
;})(switch__21444__auto__,c__21535__auto__))
})();
var state__21537__auto__ = (function (){var statearr_22041 = f__21536__auto__.call(null);
(statearr_22041[(6)] = c__21535__auto__);

return statearr_22041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto__))
);

return c__21535__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__21535__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto__,f__$1){
return (function (){
var f__21536__auto__ = (function (){var switch__21444__auto__ = ((function (c__21535__auto__,f__$1){
return (function (state_22059){
var state_val_22060 = (state_22059[(1)]);
if((state_val_22060 === (1))){
var inst_22054 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_22059__$1 = state_22059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22059__$1,(2),inst_22054);
} else {
if((state_val_22060 === (2))){
var inst_22056 = (state_22059[(2)]);
var inst_22057 = f__$1.call(null,inst_22056);
var state_22059__$1 = state_22059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22059__$1,inst_22057);
} else {
return null;
}
}
});})(c__21535__auto__,f__$1))
;
return ((function (switch__21444__auto__,c__21535__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__21445__auto__ = null;
var cljs$core$async$transduce_$_state_machine__21445__auto____0 = (function (){
var statearr_22061 = [null,null,null,null,null,null,null];
(statearr_22061[(0)] = cljs$core$async$transduce_$_state_machine__21445__auto__);

(statearr_22061[(1)] = (1));

return statearr_22061;
});
var cljs$core$async$transduce_$_state_machine__21445__auto____1 = (function (state_22059){
while(true){
var ret_value__21446__auto__ = (function (){try{while(true){
var result__21447__auto__ = switch__21444__auto__.call(null,state_22059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21447__auto__;
}
break;
}
}catch (e22062){if((e22062 instanceof Object)){
var ex__21448__auto__ = e22062;
var statearr_22063_22065 = state_22059;
(statearr_22063_22065[(5)] = ex__21448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22066 = state_22059;
state_22059 = G__22066;
continue;
} else {
return ret_value__21446__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__21445__auto__ = function(state_22059){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__21445__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__21445__auto____1.call(this,state_22059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__21445__auto____0;
cljs$core$async$transduce_$_state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__21445__auto____1;
return cljs$core$async$transduce_$_state_machine__21445__auto__;
})()
;})(switch__21444__auto__,c__21535__auto__,f__$1))
})();
var state__21537__auto__ = (function (){var statearr_22064 = f__21536__auto__.call(null);
(statearr_22064[(6)] = c__21535__auto__);

return statearr_22064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto__,f__$1))
);

return c__21535__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__22068 = arguments.length;
switch (G__22068) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21535__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto__){
return (function (){
var f__21536__auto__ = (function (){var switch__21444__auto__ = ((function (c__21535__auto__){
return (function (state_22093){
var state_val_22094 = (state_22093[(1)]);
if((state_val_22094 === (7))){
var inst_22075 = (state_22093[(2)]);
var state_22093__$1 = state_22093;
var statearr_22095_22116 = state_22093__$1;
(statearr_22095_22116[(2)] = inst_22075);

(statearr_22095_22116[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22094 === (1))){
var inst_22069 = cljs.core.seq.call(null,coll);
var inst_22070 = inst_22069;
var state_22093__$1 = (function (){var statearr_22096 = state_22093;
(statearr_22096[(7)] = inst_22070);

return statearr_22096;
})();
var statearr_22097_22117 = state_22093__$1;
(statearr_22097_22117[(2)] = null);

(statearr_22097_22117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22094 === (4))){
var inst_22070 = (state_22093[(7)]);
var inst_22073 = cljs.core.first.call(null,inst_22070);
var state_22093__$1 = state_22093;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22093__$1,(7),ch,inst_22073);
} else {
if((state_val_22094 === (13))){
var inst_22087 = (state_22093[(2)]);
var state_22093__$1 = state_22093;
var statearr_22098_22118 = state_22093__$1;
(statearr_22098_22118[(2)] = inst_22087);

(statearr_22098_22118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22094 === (6))){
var inst_22078 = (state_22093[(2)]);
var state_22093__$1 = state_22093;
if(cljs.core.truth_(inst_22078)){
var statearr_22099_22119 = state_22093__$1;
(statearr_22099_22119[(1)] = (8));

} else {
var statearr_22100_22120 = state_22093__$1;
(statearr_22100_22120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22094 === (3))){
var inst_22091 = (state_22093[(2)]);
var state_22093__$1 = state_22093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22093__$1,inst_22091);
} else {
if((state_val_22094 === (12))){
var state_22093__$1 = state_22093;
var statearr_22101_22121 = state_22093__$1;
(statearr_22101_22121[(2)] = null);

(statearr_22101_22121[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22094 === (2))){
var inst_22070 = (state_22093[(7)]);
var state_22093__$1 = state_22093;
if(cljs.core.truth_(inst_22070)){
var statearr_22102_22122 = state_22093__$1;
(statearr_22102_22122[(1)] = (4));

} else {
var statearr_22103_22123 = state_22093__$1;
(statearr_22103_22123[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22094 === (11))){
var inst_22084 = cljs.core.async.close_BANG_.call(null,ch);
var state_22093__$1 = state_22093;
var statearr_22104_22124 = state_22093__$1;
(statearr_22104_22124[(2)] = inst_22084);

(statearr_22104_22124[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22094 === (9))){
var state_22093__$1 = state_22093;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22105_22125 = state_22093__$1;
(statearr_22105_22125[(1)] = (11));

} else {
var statearr_22106_22126 = state_22093__$1;
(statearr_22106_22126[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22094 === (5))){
var inst_22070 = (state_22093[(7)]);
var state_22093__$1 = state_22093;
var statearr_22107_22127 = state_22093__$1;
(statearr_22107_22127[(2)] = inst_22070);

(statearr_22107_22127[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22094 === (10))){
var inst_22089 = (state_22093[(2)]);
var state_22093__$1 = state_22093;
var statearr_22108_22128 = state_22093__$1;
(statearr_22108_22128[(2)] = inst_22089);

(statearr_22108_22128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22094 === (8))){
var inst_22070 = (state_22093[(7)]);
var inst_22080 = cljs.core.next.call(null,inst_22070);
var inst_22070__$1 = inst_22080;
var state_22093__$1 = (function (){var statearr_22109 = state_22093;
(statearr_22109[(7)] = inst_22070__$1);

return statearr_22109;
})();
var statearr_22110_22129 = state_22093__$1;
(statearr_22110_22129[(2)] = null);

(statearr_22110_22129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
});})(c__21535__auto__))
;
return ((function (switch__21444__auto__,c__21535__auto__){
return (function() {
var cljs$core$async$state_machine__21445__auto__ = null;
var cljs$core$async$state_machine__21445__auto____0 = (function (){
var statearr_22111 = [null,null,null,null,null,null,null,null];
(statearr_22111[(0)] = cljs$core$async$state_machine__21445__auto__);

(statearr_22111[(1)] = (1));

return statearr_22111;
});
var cljs$core$async$state_machine__21445__auto____1 = (function (state_22093){
while(true){
var ret_value__21446__auto__ = (function (){try{while(true){
var result__21447__auto__ = switch__21444__auto__.call(null,state_22093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21447__auto__;
}
break;
}
}catch (e22112){if((e22112 instanceof Object)){
var ex__21448__auto__ = e22112;
var statearr_22113_22130 = state_22093;
(statearr_22113_22130[(5)] = ex__21448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22131 = state_22093;
state_22093 = G__22131;
continue;
} else {
return ret_value__21446__auto__;
}
break;
}
});
cljs$core$async$state_machine__21445__auto__ = function(state_22093){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21445__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21445__auto____1.call(this,state_22093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21445__auto____0;
cljs$core$async$state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21445__auto____1;
return cljs$core$async$state_machine__21445__auto__;
})()
;})(switch__21444__auto__,c__21535__auto__))
})();
var state__21537__auto__ = (function (){var statearr_22114 = f__21536__auto__.call(null);
(statearr_22114[(6)] = c__21535__auto__);

return statearr_22114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto__))
);

return c__21535__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22132 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22132 = (function (ch,cs,meta22133){
this.ch = ch;
this.cs = cs;
this.meta22133 = meta22133;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22134,meta22133__$1){
var self__ = this;
var _22134__$1 = this;
return (new cljs.core.async.t_cljs$core$async22132(self__.ch,self__.cs,meta22133__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22132.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22134){
var self__ = this;
var _22134__$1 = this;
return self__.meta22133;
});})(cs))
;

cljs.core.async.t_cljs$core$async22132.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22132.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22132.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22132.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22132.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22132.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22132.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22133","meta22133",-2115324076,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22132.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22132.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22132";

cljs.core.async.t_cljs$core$async22132.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async22132");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22132.
 */
cljs.core.async.__GT_t_cljs$core$async22132 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22132(ch__$1,cs__$1,meta22133){
return (new cljs.core.async.t_cljs$core$async22132(ch__$1,cs__$1,meta22133));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22132(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21535__auto___22354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto___22354,cs,m,dchan,dctr,done){
return (function (){
var f__21536__auto__ = (function (){var switch__21444__auto__ = ((function (c__21535__auto___22354,cs,m,dchan,dctr,done){
return (function (state_22269){
var state_val_22270 = (state_22269[(1)]);
if((state_val_22270 === (7))){
var inst_22265 = (state_22269[(2)]);
var state_22269__$1 = state_22269;
var statearr_22271_22355 = state_22269__$1;
(statearr_22271_22355[(2)] = inst_22265);

(statearr_22271_22355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (20))){
var inst_22168 = (state_22269[(7)]);
var inst_22180 = cljs.core.first.call(null,inst_22168);
var inst_22181 = cljs.core.nth.call(null,inst_22180,(0),null);
var inst_22182 = cljs.core.nth.call(null,inst_22180,(1),null);
var state_22269__$1 = (function (){var statearr_22272 = state_22269;
(statearr_22272[(8)] = inst_22181);

return statearr_22272;
})();
if(cljs.core.truth_(inst_22182)){
var statearr_22273_22356 = state_22269__$1;
(statearr_22273_22356[(1)] = (22));

} else {
var statearr_22274_22357 = state_22269__$1;
(statearr_22274_22357[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (27))){
var inst_22137 = (state_22269[(9)]);
var inst_22212 = (state_22269[(10)]);
var inst_22210 = (state_22269[(11)]);
var inst_22217 = (state_22269[(12)]);
var inst_22217__$1 = cljs.core._nth.call(null,inst_22210,inst_22212);
var inst_22218 = cljs.core.async.put_BANG_.call(null,inst_22217__$1,inst_22137,done);
var state_22269__$1 = (function (){var statearr_22275 = state_22269;
(statearr_22275[(12)] = inst_22217__$1);

return statearr_22275;
})();
if(cljs.core.truth_(inst_22218)){
var statearr_22276_22358 = state_22269__$1;
(statearr_22276_22358[(1)] = (30));

} else {
var statearr_22277_22359 = state_22269__$1;
(statearr_22277_22359[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (1))){
var state_22269__$1 = state_22269;
var statearr_22278_22360 = state_22269__$1;
(statearr_22278_22360[(2)] = null);

(statearr_22278_22360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (24))){
var inst_22168 = (state_22269[(7)]);
var inst_22187 = (state_22269[(2)]);
var inst_22188 = cljs.core.next.call(null,inst_22168);
var inst_22146 = inst_22188;
var inst_22147 = null;
var inst_22148 = (0);
var inst_22149 = (0);
var state_22269__$1 = (function (){var statearr_22279 = state_22269;
(statearr_22279[(13)] = inst_22147);

(statearr_22279[(14)] = inst_22148);

(statearr_22279[(15)] = inst_22146);

(statearr_22279[(16)] = inst_22187);

(statearr_22279[(17)] = inst_22149);

return statearr_22279;
})();
var statearr_22280_22361 = state_22269__$1;
(statearr_22280_22361[(2)] = null);

(statearr_22280_22361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (39))){
var state_22269__$1 = state_22269;
var statearr_22284_22362 = state_22269__$1;
(statearr_22284_22362[(2)] = null);

(statearr_22284_22362[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (4))){
var inst_22137 = (state_22269[(9)]);
var inst_22137__$1 = (state_22269[(2)]);
var inst_22138 = (inst_22137__$1 == null);
var state_22269__$1 = (function (){var statearr_22285 = state_22269;
(statearr_22285[(9)] = inst_22137__$1);

return statearr_22285;
})();
if(cljs.core.truth_(inst_22138)){
var statearr_22286_22363 = state_22269__$1;
(statearr_22286_22363[(1)] = (5));

} else {
var statearr_22287_22364 = state_22269__$1;
(statearr_22287_22364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (15))){
var inst_22147 = (state_22269[(13)]);
var inst_22148 = (state_22269[(14)]);
var inst_22146 = (state_22269[(15)]);
var inst_22149 = (state_22269[(17)]);
var inst_22164 = (state_22269[(2)]);
var inst_22165 = (inst_22149 + (1));
var tmp22281 = inst_22147;
var tmp22282 = inst_22148;
var tmp22283 = inst_22146;
var inst_22146__$1 = tmp22283;
var inst_22147__$1 = tmp22281;
var inst_22148__$1 = tmp22282;
var inst_22149__$1 = inst_22165;
var state_22269__$1 = (function (){var statearr_22288 = state_22269;
(statearr_22288[(18)] = inst_22164);

(statearr_22288[(13)] = inst_22147__$1);

(statearr_22288[(14)] = inst_22148__$1);

(statearr_22288[(15)] = inst_22146__$1);

(statearr_22288[(17)] = inst_22149__$1);

return statearr_22288;
})();
var statearr_22289_22365 = state_22269__$1;
(statearr_22289_22365[(2)] = null);

(statearr_22289_22365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (21))){
var inst_22191 = (state_22269[(2)]);
var state_22269__$1 = state_22269;
var statearr_22293_22366 = state_22269__$1;
(statearr_22293_22366[(2)] = inst_22191);

(statearr_22293_22366[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (31))){
var inst_22217 = (state_22269[(12)]);
var inst_22221 = done.call(null,null);
var inst_22222 = cljs.core.async.untap_STAR_.call(null,m,inst_22217);
var state_22269__$1 = (function (){var statearr_22294 = state_22269;
(statearr_22294[(19)] = inst_22221);

return statearr_22294;
})();
var statearr_22295_22367 = state_22269__$1;
(statearr_22295_22367[(2)] = inst_22222);

(statearr_22295_22367[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (32))){
var inst_22209 = (state_22269[(20)]);
var inst_22212 = (state_22269[(10)]);
var inst_22210 = (state_22269[(11)]);
var inst_22211 = (state_22269[(21)]);
var inst_22224 = (state_22269[(2)]);
var inst_22225 = (inst_22212 + (1));
var tmp22290 = inst_22209;
var tmp22291 = inst_22210;
var tmp22292 = inst_22211;
var inst_22209__$1 = tmp22290;
var inst_22210__$1 = tmp22291;
var inst_22211__$1 = tmp22292;
var inst_22212__$1 = inst_22225;
var state_22269__$1 = (function (){var statearr_22296 = state_22269;
(statearr_22296[(20)] = inst_22209__$1);

(statearr_22296[(10)] = inst_22212__$1);

(statearr_22296[(11)] = inst_22210__$1);

(statearr_22296[(22)] = inst_22224);

(statearr_22296[(21)] = inst_22211__$1);

return statearr_22296;
})();
var statearr_22297_22368 = state_22269__$1;
(statearr_22297_22368[(2)] = null);

(statearr_22297_22368[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (40))){
var inst_22237 = (state_22269[(23)]);
var inst_22241 = done.call(null,null);
var inst_22242 = cljs.core.async.untap_STAR_.call(null,m,inst_22237);
var state_22269__$1 = (function (){var statearr_22298 = state_22269;
(statearr_22298[(24)] = inst_22241);

return statearr_22298;
})();
var statearr_22299_22369 = state_22269__$1;
(statearr_22299_22369[(2)] = inst_22242);

(statearr_22299_22369[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (33))){
var inst_22228 = (state_22269[(25)]);
var inst_22230 = cljs.core.chunked_seq_QMARK_.call(null,inst_22228);
var state_22269__$1 = state_22269;
if(inst_22230){
var statearr_22300_22370 = state_22269__$1;
(statearr_22300_22370[(1)] = (36));

} else {
var statearr_22301_22371 = state_22269__$1;
(statearr_22301_22371[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (13))){
var inst_22158 = (state_22269[(26)]);
var inst_22161 = cljs.core.async.close_BANG_.call(null,inst_22158);
var state_22269__$1 = state_22269;
var statearr_22302_22372 = state_22269__$1;
(statearr_22302_22372[(2)] = inst_22161);

(statearr_22302_22372[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (22))){
var inst_22181 = (state_22269[(8)]);
var inst_22184 = cljs.core.async.close_BANG_.call(null,inst_22181);
var state_22269__$1 = state_22269;
var statearr_22303_22373 = state_22269__$1;
(statearr_22303_22373[(2)] = inst_22184);

(statearr_22303_22373[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (36))){
var inst_22228 = (state_22269[(25)]);
var inst_22232 = cljs.core.chunk_first.call(null,inst_22228);
var inst_22233 = cljs.core.chunk_rest.call(null,inst_22228);
var inst_22234 = cljs.core.count.call(null,inst_22232);
var inst_22209 = inst_22233;
var inst_22210 = inst_22232;
var inst_22211 = inst_22234;
var inst_22212 = (0);
var state_22269__$1 = (function (){var statearr_22304 = state_22269;
(statearr_22304[(20)] = inst_22209);

(statearr_22304[(10)] = inst_22212);

(statearr_22304[(11)] = inst_22210);

(statearr_22304[(21)] = inst_22211);

return statearr_22304;
})();
var statearr_22305_22374 = state_22269__$1;
(statearr_22305_22374[(2)] = null);

(statearr_22305_22374[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (41))){
var inst_22228 = (state_22269[(25)]);
var inst_22244 = (state_22269[(2)]);
var inst_22245 = cljs.core.next.call(null,inst_22228);
var inst_22209 = inst_22245;
var inst_22210 = null;
var inst_22211 = (0);
var inst_22212 = (0);
var state_22269__$1 = (function (){var statearr_22306 = state_22269;
(statearr_22306[(20)] = inst_22209);

(statearr_22306[(10)] = inst_22212);

(statearr_22306[(27)] = inst_22244);

(statearr_22306[(11)] = inst_22210);

(statearr_22306[(21)] = inst_22211);

return statearr_22306;
})();
var statearr_22307_22375 = state_22269__$1;
(statearr_22307_22375[(2)] = null);

(statearr_22307_22375[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (43))){
var state_22269__$1 = state_22269;
var statearr_22308_22376 = state_22269__$1;
(statearr_22308_22376[(2)] = null);

(statearr_22308_22376[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (29))){
var inst_22253 = (state_22269[(2)]);
var state_22269__$1 = state_22269;
var statearr_22309_22377 = state_22269__$1;
(statearr_22309_22377[(2)] = inst_22253);

(statearr_22309_22377[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (44))){
var inst_22262 = (state_22269[(2)]);
var state_22269__$1 = (function (){var statearr_22310 = state_22269;
(statearr_22310[(28)] = inst_22262);

return statearr_22310;
})();
var statearr_22311_22378 = state_22269__$1;
(statearr_22311_22378[(2)] = null);

(statearr_22311_22378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (6))){
var inst_22201 = (state_22269[(29)]);
var inst_22200 = cljs.core.deref.call(null,cs);
var inst_22201__$1 = cljs.core.keys.call(null,inst_22200);
var inst_22202 = cljs.core.count.call(null,inst_22201__$1);
var inst_22203 = cljs.core.reset_BANG_.call(null,dctr,inst_22202);
var inst_22208 = cljs.core.seq.call(null,inst_22201__$1);
var inst_22209 = inst_22208;
var inst_22210 = null;
var inst_22211 = (0);
var inst_22212 = (0);
var state_22269__$1 = (function (){var statearr_22312 = state_22269;
(statearr_22312[(20)] = inst_22209);

(statearr_22312[(30)] = inst_22203);

(statearr_22312[(10)] = inst_22212);

(statearr_22312[(29)] = inst_22201__$1);

(statearr_22312[(11)] = inst_22210);

(statearr_22312[(21)] = inst_22211);

return statearr_22312;
})();
var statearr_22313_22379 = state_22269__$1;
(statearr_22313_22379[(2)] = null);

(statearr_22313_22379[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (28))){
var inst_22209 = (state_22269[(20)]);
var inst_22228 = (state_22269[(25)]);
var inst_22228__$1 = cljs.core.seq.call(null,inst_22209);
var state_22269__$1 = (function (){var statearr_22314 = state_22269;
(statearr_22314[(25)] = inst_22228__$1);

return statearr_22314;
})();
if(inst_22228__$1){
var statearr_22315_22380 = state_22269__$1;
(statearr_22315_22380[(1)] = (33));

} else {
var statearr_22316_22381 = state_22269__$1;
(statearr_22316_22381[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (25))){
var inst_22212 = (state_22269[(10)]);
var inst_22211 = (state_22269[(21)]);
var inst_22214 = (inst_22212 < inst_22211);
var inst_22215 = inst_22214;
var state_22269__$1 = state_22269;
if(cljs.core.truth_(inst_22215)){
var statearr_22317_22382 = state_22269__$1;
(statearr_22317_22382[(1)] = (27));

} else {
var statearr_22318_22383 = state_22269__$1;
(statearr_22318_22383[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (34))){
var state_22269__$1 = state_22269;
var statearr_22319_22384 = state_22269__$1;
(statearr_22319_22384[(2)] = null);

(statearr_22319_22384[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (17))){
var state_22269__$1 = state_22269;
var statearr_22320_22385 = state_22269__$1;
(statearr_22320_22385[(2)] = null);

(statearr_22320_22385[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (3))){
var inst_22267 = (state_22269[(2)]);
var state_22269__$1 = state_22269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22269__$1,inst_22267);
} else {
if((state_val_22270 === (12))){
var inst_22196 = (state_22269[(2)]);
var state_22269__$1 = state_22269;
var statearr_22321_22386 = state_22269__$1;
(statearr_22321_22386[(2)] = inst_22196);

(statearr_22321_22386[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (2))){
var state_22269__$1 = state_22269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22269__$1,(4),ch);
} else {
if((state_val_22270 === (23))){
var state_22269__$1 = state_22269;
var statearr_22322_22387 = state_22269__$1;
(statearr_22322_22387[(2)] = null);

(statearr_22322_22387[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (35))){
var inst_22251 = (state_22269[(2)]);
var state_22269__$1 = state_22269;
var statearr_22323_22388 = state_22269__$1;
(statearr_22323_22388[(2)] = inst_22251);

(statearr_22323_22388[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (19))){
var inst_22168 = (state_22269[(7)]);
var inst_22172 = cljs.core.chunk_first.call(null,inst_22168);
var inst_22173 = cljs.core.chunk_rest.call(null,inst_22168);
var inst_22174 = cljs.core.count.call(null,inst_22172);
var inst_22146 = inst_22173;
var inst_22147 = inst_22172;
var inst_22148 = inst_22174;
var inst_22149 = (0);
var state_22269__$1 = (function (){var statearr_22324 = state_22269;
(statearr_22324[(13)] = inst_22147);

(statearr_22324[(14)] = inst_22148);

(statearr_22324[(15)] = inst_22146);

(statearr_22324[(17)] = inst_22149);

return statearr_22324;
})();
var statearr_22325_22389 = state_22269__$1;
(statearr_22325_22389[(2)] = null);

(statearr_22325_22389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (11))){
var inst_22168 = (state_22269[(7)]);
var inst_22146 = (state_22269[(15)]);
var inst_22168__$1 = cljs.core.seq.call(null,inst_22146);
var state_22269__$1 = (function (){var statearr_22326 = state_22269;
(statearr_22326[(7)] = inst_22168__$1);

return statearr_22326;
})();
if(inst_22168__$1){
var statearr_22327_22390 = state_22269__$1;
(statearr_22327_22390[(1)] = (16));

} else {
var statearr_22328_22391 = state_22269__$1;
(statearr_22328_22391[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (9))){
var inst_22198 = (state_22269[(2)]);
var state_22269__$1 = state_22269;
var statearr_22329_22392 = state_22269__$1;
(statearr_22329_22392[(2)] = inst_22198);

(statearr_22329_22392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (5))){
var inst_22144 = cljs.core.deref.call(null,cs);
var inst_22145 = cljs.core.seq.call(null,inst_22144);
var inst_22146 = inst_22145;
var inst_22147 = null;
var inst_22148 = (0);
var inst_22149 = (0);
var state_22269__$1 = (function (){var statearr_22330 = state_22269;
(statearr_22330[(13)] = inst_22147);

(statearr_22330[(14)] = inst_22148);

(statearr_22330[(15)] = inst_22146);

(statearr_22330[(17)] = inst_22149);

return statearr_22330;
})();
var statearr_22331_22393 = state_22269__$1;
(statearr_22331_22393[(2)] = null);

(statearr_22331_22393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (14))){
var state_22269__$1 = state_22269;
var statearr_22332_22394 = state_22269__$1;
(statearr_22332_22394[(2)] = null);

(statearr_22332_22394[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (45))){
var inst_22259 = (state_22269[(2)]);
var state_22269__$1 = state_22269;
var statearr_22333_22395 = state_22269__$1;
(statearr_22333_22395[(2)] = inst_22259);

(statearr_22333_22395[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (26))){
var inst_22201 = (state_22269[(29)]);
var inst_22255 = (state_22269[(2)]);
var inst_22256 = cljs.core.seq.call(null,inst_22201);
var state_22269__$1 = (function (){var statearr_22334 = state_22269;
(statearr_22334[(31)] = inst_22255);

return statearr_22334;
})();
if(inst_22256){
var statearr_22335_22396 = state_22269__$1;
(statearr_22335_22396[(1)] = (42));

} else {
var statearr_22336_22397 = state_22269__$1;
(statearr_22336_22397[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (16))){
var inst_22168 = (state_22269[(7)]);
var inst_22170 = cljs.core.chunked_seq_QMARK_.call(null,inst_22168);
var state_22269__$1 = state_22269;
if(inst_22170){
var statearr_22337_22398 = state_22269__$1;
(statearr_22337_22398[(1)] = (19));

} else {
var statearr_22338_22399 = state_22269__$1;
(statearr_22338_22399[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (38))){
var inst_22248 = (state_22269[(2)]);
var state_22269__$1 = state_22269;
var statearr_22339_22400 = state_22269__$1;
(statearr_22339_22400[(2)] = inst_22248);

(statearr_22339_22400[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (30))){
var state_22269__$1 = state_22269;
var statearr_22340_22401 = state_22269__$1;
(statearr_22340_22401[(2)] = null);

(statearr_22340_22401[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (10))){
var inst_22147 = (state_22269[(13)]);
var inst_22149 = (state_22269[(17)]);
var inst_22157 = cljs.core._nth.call(null,inst_22147,inst_22149);
var inst_22158 = cljs.core.nth.call(null,inst_22157,(0),null);
var inst_22159 = cljs.core.nth.call(null,inst_22157,(1),null);
var state_22269__$1 = (function (){var statearr_22341 = state_22269;
(statearr_22341[(26)] = inst_22158);

return statearr_22341;
})();
if(cljs.core.truth_(inst_22159)){
var statearr_22342_22402 = state_22269__$1;
(statearr_22342_22402[(1)] = (13));

} else {
var statearr_22343_22403 = state_22269__$1;
(statearr_22343_22403[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (18))){
var inst_22194 = (state_22269[(2)]);
var state_22269__$1 = state_22269;
var statearr_22344_22404 = state_22269__$1;
(statearr_22344_22404[(2)] = inst_22194);

(statearr_22344_22404[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (42))){
var state_22269__$1 = state_22269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22269__$1,(45),dchan);
} else {
if((state_val_22270 === (37))){
var inst_22237 = (state_22269[(23)]);
var inst_22228 = (state_22269[(25)]);
var inst_22137 = (state_22269[(9)]);
var inst_22237__$1 = cljs.core.first.call(null,inst_22228);
var inst_22238 = cljs.core.async.put_BANG_.call(null,inst_22237__$1,inst_22137,done);
var state_22269__$1 = (function (){var statearr_22345 = state_22269;
(statearr_22345[(23)] = inst_22237__$1);

return statearr_22345;
})();
if(cljs.core.truth_(inst_22238)){
var statearr_22346_22405 = state_22269__$1;
(statearr_22346_22405[(1)] = (39));

} else {
var statearr_22347_22406 = state_22269__$1;
(statearr_22347_22406[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22270 === (8))){
var inst_22148 = (state_22269[(14)]);
var inst_22149 = (state_22269[(17)]);
var inst_22151 = (inst_22149 < inst_22148);
var inst_22152 = inst_22151;
var state_22269__$1 = state_22269;
if(cljs.core.truth_(inst_22152)){
var statearr_22348_22407 = state_22269__$1;
(statearr_22348_22407[(1)] = (10));

} else {
var statearr_22349_22408 = state_22269__$1;
(statearr_22349_22408[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21535__auto___22354,cs,m,dchan,dctr,done))
;
return ((function (switch__21444__auto__,c__21535__auto___22354,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21445__auto__ = null;
var cljs$core$async$mult_$_state_machine__21445__auto____0 = (function (){
var statearr_22350 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22350[(0)] = cljs$core$async$mult_$_state_machine__21445__auto__);

(statearr_22350[(1)] = (1));

return statearr_22350;
});
var cljs$core$async$mult_$_state_machine__21445__auto____1 = (function (state_22269){
while(true){
var ret_value__21446__auto__ = (function (){try{while(true){
var result__21447__auto__ = switch__21444__auto__.call(null,state_22269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21447__auto__;
}
break;
}
}catch (e22351){if((e22351 instanceof Object)){
var ex__21448__auto__ = e22351;
var statearr_22352_22409 = state_22269;
(statearr_22352_22409[(5)] = ex__21448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22410 = state_22269;
state_22269 = G__22410;
continue;
} else {
return ret_value__21446__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21445__auto__ = function(state_22269){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21445__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21445__auto____1.call(this,state_22269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21445__auto____0;
cljs$core$async$mult_$_state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21445__auto____1;
return cljs$core$async$mult_$_state_machine__21445__auto__;
})()
;})(switch__21444__auto__,c__21535__auto___22354,cs,m,dchan,dctr,done))
})();
var state__21537__auto__ = (function (){var statearr_22353 = f__21536__auto__.call(null);
(statearr_22353[(6)] = c__21535__auto___22354);

return statearr_22353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto___22354,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__22412 = arguments.length;
switch (G__22412) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22424 = arguments.length;
var i__4532__auto___22425 = (0);
while(true){
if((i__4532__auto___22425 < len__4531__auto___22424)){
args__4534__auto__.push((arguments[i__4532__auto___22425]));

var G__22426 = (i__4532__auto___22425 + (1));
i__4532__auto___22425 = G__22426;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22418){
var map__22419 = p__22418;
var map__22419__$1 = ((((!((map__22419 == null)))?(((((map__22419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22419):map__22419);
var opts = map__22419__$1;
var statearr_22421_22427 = state;
(statearr_22421_22427[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__22419,map__22419__$1,opts){
return (function (val){
var statearr_22422_22428 = state;
(statearr_22422_22428[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22419,map__22419__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_22423_22429 = state;
(statearr_22423_22429[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22414){
var G__22415 = cljs.core.first.call(null,seq22414);
var seq22414__$1 = cljs.core.next.call(null,seq22414);
var G__22416 = cljs.core.first.call(null,seq22414__$1);
var seq22414__$2 = cljs.core.next.call(null,seq22414__$1);
var G__22417 = cljs.core.first.call(null,seq22414__$2);
var seq22414__$3 = cljs.core.next.call(null,seq22414__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22415,G__22416,G__22417,seq22414__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22430 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22430 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta22431){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta22431 = meta22431;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22432,meta22431__$1){
var self__ = this;
var _22432__$1 = this;
return (new cljs.core.async.t_cljs$core$async22430(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta22431__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22430.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22432){
var self__ = this;
var _22432__$1 = this;
return self__.meta22431;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22430.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22430.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22430.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22430.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22430.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22430.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22430.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22430.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22430.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta22431","meta22431",1833563350,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22430.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22430.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22430";

cljs.core.async.t_cljs$core$async22430.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async22430");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22430.
 */
cljs.core.async.__GT_t_cljs$core$async22430 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22430(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta22431){
return (new cljs.core.async.t_cljs$core$async22430(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta22431));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22430(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21535__auto___22594 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto___22594,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21536__auto__ = (function (){var switch__21444__auto__ = ((function (c__21535__auto___22594,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22534){
var state_val_22535 = (state_22534[(1)]);
if((state_val_22535 === (7))){
var inst_22449 = (state_22534[(2)]);
var state_22534__$1 = state_22534;
var statearr_22536_22595 = state_22534__$1;
(statearr_22536_22595[(2)] = inst_22449);

(statearr_22536_22595[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (20))){
var inst_22461 = (state_22534[(7)]);
var state_22534__$1 = state_22534;
var statearr_22537_22596 = state_22534__$1;
(statearr_22537_22596[(2)] = inst_22461);

(statearr_22537_22596[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (27))){
var state_22534__$1 = state_22534;
var statearr_22538_22597 = state_22534__$1;
(statearr_22538_22597[(2)] = null);

(statearr_22538_22597[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (1))){
var inst_22436 = (state_22534[(8)]);
var inst_22436__$1 = calc_state.call(null);
var inst_22438 = (inst_22436__$1 == null);
var inst_22439 = cljs.core.not.call(null,inst_22438);
var state_22534__$1 = (function (){var statearr_22539 = state_22534;
(statearr_22539[(8)] = inst_22436__$1);

return statearr_22539;
})();
if(inst_22439){
var statearr_22540_22598 = state_22534__$1;
(statearr_22540_22598[(1)] = (2));

} else {
var statearr_22541_22599 = state_22534__$1;
(statearr_22541_22599[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (24))){
var inst_22485 = (state_22534[(9)]);
var inst_22508 = (state_22534[(10)]);
var inst_22494 = (state_22534[(11)]);
var inst_22508__$1 = inst_22485.call(null,inst_22494);
var state_22534__$1 = (function (){var statearr_22542 = state_22534;
(statearr_22542[(10)] = inst_22508__$1);

return statearr_22542;
})();
if(cljs.core.truth_(inst_22508__$1)){
var statearr_22543_22600 = state_22534__$1;
(statearr_22543_22600[(1)] = (29));

} else {
var statearr_22544_22601 = state_22534__$1;
(statearr_22544_22601[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (4))){
var inst_22452 = (state_22534[(2)]);
var state_22534__$1 = state_22534;
if(cljs.core.truth_(inst_22452)){
var statearr_22545_22602 = state_22534__$1;
(statearr_22545_22602[(1)] = (8));

} else {
var statearr_22546_22603 = state_22534__$1;
(statearr_22546_22603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (15))){
var inst_22479 = (state_22534[(2)]);
var state_22534__$1 = state_22534;
if(cljs.core.truth_(inst_22479)){
var statearr_22547_22604 = state_22534__$1;
(statearr_22547_22604[(1)] = (19));

} else {
var statearr_22548_22605 = state_22534__$1;
(statearr_22548_22605[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (21))){
var inst_22484 = (state_22534[(12)]);
var inst_22484__$1 = (state_22534[(2)]);
var inst_22485 = cljs.core.get.call(null,inst_22484__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22486 = cljs.core.get.call(null,inst_22484__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22487 = cljs.core.get.call(null,inst_22484__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22534__$1 = (function (){var statearr_22549 = state_22534;
(statearr_22549[(9)] = inst_22485);

(statearr_22549[(13)] = inst_22486);

(statearr_22549[(12)] = inst_22484__$1);

return statearr_22549;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22534__$1,(22),inst_22487);
} else {
if((state_val_22535 === (31))){
var inst_22516 = (state_22534[(2)]);
var state_22534__$1 = state_22534;
if(cljs.core.truth_(inst_22516)){
var statearr_22550_22606 = state_22534__$1;
(statearr_22550_22606[(1)] = (32));

} else {
var statearr_22551_22607 = state_22534__$1;
(statearr_22551_22607[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (32))){
var inst_22493 = (state_22534[(14)]);
var state_22534__$1 = state_22534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22534__$1,(35),out,inst_22493);
} else {
if((state_val_22535 === (33))){
var inst_22484 = (state_22534[(12)]);
var inst_22461 = inst_22484;
var state_22534__$1 = (function (){var statearr_22552 = state_22534;
(statearr_22552[(7)] = inst_22461);

return statearr_22552;
})();
var statearr_22553_22608 = state_22534__$1;
(statearr_22553_22608[(2)] = null);

(statearr_22553_22608[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (13))){
var inst_22461 = (state_22534[(7)]);
var inst_22468 = inst_22461.cljs$lang$protocol_mask$partition0$;
var inst_22469 = (inst_22468 & (64));
var inst_22470 = inst_22461.cljs$core$ISeq$;
var inst_22471 = (cljs.core.PROTOCOL_SENTINEL === inst_22470);
var inst_22472 = ((inst_22469) || (inst_22471));
var state_22534__$1 = state_22534;
if(cljs.core.truth_(inst_22472)){
var statearr_22554_22609 = state_22534__$1;
(statearr_22554_22609[(1)] = (16));

} else {
var statearr_22555_22610 = state_22534__$1;
(statearr_22555_22610[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (22))){
var inst_22493 = (state_22534[(14)]);
var inst_22494 = (state_22534[(11)]);
var inst_22492 = (state_22534[(2)]);
var inst_22493__$1 = cljs.core.nth.call(null,inst_22492,(0),null);
var inst_22494__$1 = cljs.core.nth.call(null,inst_22492,(1),null);
var inst_22495 = (inst_22493__$1 == null);
var inst_22496 = cljs.core._EQ_.call(null,inst_22494__$1,change);
var inst_22497 = ((inst_22495) || (inst_22496));
var state_22534__$1 = (function (){var statearr_22556 = state_22534;
(statearr_22556[(14)] = inst_22493__$1);

(statearr_22556[(11)] = inst_22494__$1);

return statearr_22556;
})();
if(cljs.core.truth_(inst_22497)){
var statearr_22557_22611 = state_22534__$1;
(statearr_22557_22611[(1)] = (23));

} else {
var statearr_22558_22612 = state_22534__$1;
(statearr_22558_22612[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (36))){
var inst_22484 = (state_22534[(12)]);
var inst_22461 = inst_22484;
var state_22534__$1 = (function (){var statearr_22559 = state_22534;
(statearr_22559[(7)] = inst_22461);

return statearr_22559;
})();
var statearr_22560_22613 = state_22534__$1;
(statearr_22560_22613[(2)] = null);

(statearr_22560_22613[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (29))){
var inst_22508 = (state_22534[(10)]);
var state_22534__$1 = state_22534;
var statearr_22561_22614 = state_22534__$1;
(statearr_22561_22614[(2)] = inst_22508);

(statearr_22561_22614[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (6))){
var state_22534__$1 = state_22534;
var statearr_22562_22615 = state_22534__$1;
(statearr_22562_22615[(2)] = false);

(statearr_22562_22615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (28))){
var inst_22504 = (state_22534[(2)]);
var inst_22505 = calc_state.call(null);
var inst_22461 = inst_22505;
var state_22534__$1 = (function (){var statearr_22563 = state_22534;
(statearr_22563[(15)] = inst_22504);

(statearr_22563[(7)] = inst_22461);

return statearr_22563;
})();
var statearr_22564_22616 = state_22534__$1;
(statearr_22564_22616[(2)] = null);

(statearr_22564_22616[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (25))){
var inst_22530 = (state_22534[(2)]);
var state_22534__$1 = state_22534;
var statearr_22565_22617 = state_22534__$1;
(statearr_22565_22617[(2)] = inst_22530);

(statearr_22565_22617[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (34))){
var inst_22528 = (state_22534[(2)]);
var state_22534__$1 = state_22534;
var statearr_22566_22618 = state_22534__$1;
(statearr_22566_22618[(2)] = inst_22528);

(statearr_22566_22618[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (17))){
var state_22534__$1 = state_22534;
var statearr_22567_22619 = state_22534__$1;
(statearr_22567_22619[(2)] = false);

(statearr_22567_22619[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (3))){
var state_22534__$1 = state_22534;
var statearr_22568_22620 = state_22534__$1;
(statearr_22568_22620[(2)] = false);

(statearr_22568_22620[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (12))){
var inst_22532 = (state_22534[(2)]);
var state_22534__$1 = state_22534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22534__$1,inst_22532);
} else {
if((state_val_22535 === (2))){
var inst_22436 = (state_22534[(8)]);
var inst_22441 = inst_22436.cljs$lang$protocol_mask$partition0$;
var inst_22442 = (inst_22441 & (64));
var inst_22443 = inst_22436.cljs$core$ISeq$;
var inst_22444 = (cljs.core.PROTOCOL_SENTINEL === inst_22443);
var inst_22445 = ((inst_22442) || (inst_22444));
var state_22534__$1 = state_22534;
if(cljs.core.truth_(inst_22445)){
var statearr_22569_22621 = state_22534__$1;
(statearr_22569_22621[(1)] = (5));

} else {
var statearr_22570_22622 = state_22534__$1;
(statearr_22570_22622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (23))){
var inst_22493 = (state_22534[(14)]);
var inst_22499 = (inst_22493 == null);
var state_22534__$1 = state_22534;
if(cljs.core.truth_(inst_22499)){
var statearr_22571_22623 = state_22534__$1;
(statearr_22571_22623[(1)] = (26));

} else {
var statearr_22572_22624 = state_22534__$1;
(statearr_22572_22624[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (35))){
var inst_22519 = (state_22534[(2)]);
var state_22534__$1 = state_22534;
if(cljs.core.truth_(inst_22519)){
var statearr_22573_22625 = state_22534__$1;
(statearr_22573_22625[(1)] = (36));

} else {
var statearr_22574_22626 = state_22534__$1;
(statearr_22574_22626[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (19))){
var inst_22461 = (state_22534[(7)]);
var inst_22481 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22461);
var state_22534__$1 = state_22534;
var statearr_22575_22627 = state_22534__$1;
(statearr_22575_22627[(2)] = inst_22481);

(statearr_22575_22627[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (11))){
var inst_22461 = (state_22534[(7)]);
var inst_22465 = (inst_22461 == null);
var inst_22466 = cljs.core.not.call(null,inst_22465);
var state_22534__$1 = state_22534;
if(inst_22466){
var statearr_22576_22628 = state_22534__$1;
(statearr_22576_22628[(1)] = (13));

} else {
var statearr_22577_22629 = state_22534__$1;
(statearr_22577_22629[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (9))){
var inst_22436 = (state_22534[(8)]);
var state_22534__$1 = state_22534;
var statearr_22578_22630 = state_22534__$1;
(statearr_22578_22630[(2)] = inst_22436);

(statearr_22578_22630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (5))){
var state_22534__$1 = state_22534;
var statearr_22579_22631 = state_22534__$1;
(statearr_22579_22631[(2)] = true);

(statearr_22579_22631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (14))){
var state_22534__$1 = state_22534;
var statearr_22580_22632 = state_22534__$1;
(statearr_22580_22632[(2)] = false);

(statearr_22580_22632[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (26))){
var inst_22494 = (state_22534[(11)]);
var inst_22501 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22494);
var state_22534__$1 = state_22534;
var statearr_22581_22633 = state_22534__$1;
(statearr_22581_22633[(2)] = inst_22501);

(statearr_22581_22633[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (16))){
var state_22534__$1 = state_22534;
var statearr_22582_22634 = state_22534__$1;
(statearr_22582_22634[(2)] = true);

(statearr_22582_22634[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (38))){
var inst_22524 = (state_22534[(2)]);
var state_22534__$1 = state_22534;
var statearr_22583_22635 = state_22534__$1;
(statearr_22583_22635[(2)] = inst_22524);

(statearr_22583_22635[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (30))){
var inst_22485 = (state_22534[(9)]);
var inst_22486 = (state_22534[(13)]);
var inst_22494 = (state_22534[(11)]);
var inst_22511 = cljs.core.empty_QMARK_.call(null,inst_22485);
var inst_22512 = inst_22486.call(null,inst_22494);
var inst_22513 = cljs.core.not.call(null,inst_22512);
var inst_22514 = ((inst_22511) && (inst_22513));
var state_22534__$1 = state_22534;
var statearr_22584_22636 = state_22534__$1;
(statearr_22584_22636[(2)] = inst_22514);

(statearr_22584_22636[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (10))){
var inst_22436 = (state_22534[(8)]);
var inst_22457 = (state_22534[(2)]);
var inst_22458 = cljs.core.get.call(null,inst_22457,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22459 = cljs.core.get.call(null,inst_22457,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22460 = cljs.core.get.call(null,inst_22457,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22461 = inst_22436;
var state_22534__$1 = (function (){var statearr_22585 = state_22534;
(statearr_22585[(16)] = inst_22459);

(statearr_22585[(17)] = inst_22460);

(statearr_22585[(7)] = inst_22461);

(statearr_22585[(18)] = inst_22458);

return statearr_22585;
})();
var statearr_22586_22637 = state_22534__$1;
(statearr_22586_22637[(2)] = null);

(statearr_22586_22637[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (18))){
var inst_22476 = (state_22534[(2)]);
var state_22534__$1 = state_22534;
var statearr_22587_22638 = state_22534__$1;
(statearr_22587_22638[(2)] = inst_22476);

(statearr_22587_22638[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (37))){
var state_22534__$1 = state_22534;
var statearr_22588_22639 = state_22534__$1;
(statearr_22588_22639[(2)] = null);

(statearr_22588_22639[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22535 === (8))){
var inst_22436 = (state_22534[(8)]);
var inst_22454 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22436);
var state_22534__$1 = state_22534;
var statearr_22589_22640 = state_22534__$1;
(statearr_22589_22640[(2)] = inst_22454);

(statearr_22589_22640[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21535__auto___22594,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21444__auto__,c__21535__auto___22594,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21445__auto__ = null;
var cljs$core$async$mix_$_state_machine__21445__auto____0 = (function (){
var statearr_22590 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22590[(0)] = cljs$core$async$mix_$_state_machine__21445__auto__);

(statearr_22590[(1)] = (1));

return statearr_22590;
});
var cljs$core$async$mix_$_state_machine__21445__auto____1 = (function (state_22534){
while(true){
var ret_value__21446__auto__ = (function (){try{while(true){
var result__21447__auto__ = switch__21444__auto__.call(null,state_22534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21447__auto__;
}
break;
}
}catch (e22591){if((e22591 instanceof Object)){
var ex__21448__auto__ = e22591;
var statearr_22592_22641 = state_22534;
(statearr_22592_22641[(5)] = ex__21448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22642 = state_22534;
state_22534 = G__22642;
continue;
} else {
return ret_value__21446__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21445__auto__ = function(state_22534){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21445__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21445__auto____1.call(this,state_22534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21445__auto____0;
cljs$core$async$mix_$_state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21445__auto____1;
return cljs$core$async$mix_$_state_machine__21445__auto__;
})()
;})(switch__21444__auto__,c__21535__auto___22594,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21537__auto__ = (function (){var statearr_22593 = f__21536__auto__.call(null);
(statearr_22593[(6)] = c__21535__auto___22594);

return statearr_22593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto___22594,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__22644 = arguments.length;
switch (G__22644) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__22648 = arguments.length;
switch (G__22648) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__22646_SHARP_){
if(cljs.core.truth_(p1__22646_SHARP_.call(null,topic))){
return p1__22646_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22646_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22649 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22649 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22650){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22650 = meta22650;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22651,meta22650__$1){
var self__ = this;
var _22651__$1 = this;
return (new cljs.core.async.t_cljs$core$async22649(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22650__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22649.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22651){
var self__ = this;
var _22651__$1 = this;
return self__.meta22650;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22649.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22649.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22649.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22649.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22649.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22649.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22649.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22649.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22650","meta22650",-997283352,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22649.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22649.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22649";

cljs.core.async.t_cljs$core$async22649.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async22649");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22649.
 */
cljs.core.async.__GT_t_cljs$core$async22649 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22649(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22650){
return (new cljs.core.async.t_cljs$core$async22649(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22650));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22649(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21535__auto___22769 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto___22769,mults,ensure_mult,p){
return (function (){
var f__21536__auto__ = (function (){var switch__21444__auto__ = ((function (c__21535__auto___22769,mults,ensure_mult,p){
return (function (state_22723){
var state_val_22724 = (state_22723[(1)]);
if((state_val_22724 === (7))){
var inst_22719 = (state_22723[(2)]);
var state_22723__$1 = state_22723;
var statearr_22725_22770 = state_22723__$1;
(statearr_22725_22770[(2)] = inst_22719);

(statearr_22725_22770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22724 === (20))){
var state_22723__$1 = state_22723;
var statearr_22726_22771 = state_22723__$1;
(statearr_22726_22771[(2)] = null);

(statearr_22726_22771[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22724 === (1))){
var state_22723__$1 = state_22723;
var statearr_22727_22772 = state_22723__$1;
(statearr_22727_22772[(2)] = null);

(statearr_22727_22772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22724 === (24))){
var inst_22702 = (state_22723[(7)]);
var inst_22711 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22702);
var state_22723__$1 = state_22723;
var statearr_22728_22773 = state_22723__$1;
(statearr_22728_22773[(2)] = inst_22711);

(statearr_22728_22773[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22724 === (4))){
var inst_22654 = (state_22723[(8)]);
var inst_22654__$1 = (state_22723[(2)]);
var inst_22655 = (inst_22654__$1 == null);
var state_22723__$1 = (function (){var statearr_22729 = state_22723;
(statearr_22729[(8)] = inst_22654__$1);

return statearr_22729;
})();
if(cljs.core.truth_(inst_22655)){
var statearr_22730_22774 = state_22723__$1;
(statearr_22730_22774[(1)] = (5));

} else {
var statearr_22731_22775 = state_22723__$1;
(statearr_22731_22775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22724 === (15))){
var inst_22696 = (state_22723[(2)]);
var state_22723__$1 = state_22723;
var statearr_22732_22776 = state_22723__$1;
(statearr_22732_22776[(2)] = inst_22696);

(statearr_22732_22776[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22724 === (21))){
var inst_22716 = (state_22723[(2)]);
var state_22723__$1 = (function (){var statearr_22733 = state_22723;
(statearr_22733[(9)] = inst_22716);

return statearr_22733;
})();
var statearr_22734_22777 = state_22723__$1;
(statearr_22734_22777[(2)] = null);

(statearr_22734_22777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22724 === (13))){
var inst_22678 = (state_22723[(10)]);
var inst_22680 = cljs.core.chunked_seq_QMARK_.call(null,inst_22678);
var state_22723__$1 = state_22723;
if(inst_22680){
var statearr_22735_22778 = state_22723__$1;
(statearr_22735_22778[(1)] = (16));

} else {
var statearr_22736_22779 = state_22723__$1;
(statearr_22736_22779[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22724 === (22))){
var inst_22708 = (state_22723[(2)]);
var state_22723__$1 = state_22723;
if(cljs.core.truth_(inst_22708)){
var statearr_22737_22780 = state_22723__$1;
(statearr_22737_22780[(1)] = (23));

} else {
var statearr_22738_22781 = state_22723__$1;
(statearr_22738_22781[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22724 === (6))){
var inst_22702 = (state_22723[(7)]);
var inst_22704 = (state_22723[(11)]);
var inst_22654 = (state_22723[(8)]);
var inst_22702__$1 = topic_fn.call(null,inst_22654);
var inst_22703 = cljs.core.deref.call(null,mults);
var inst_22704__$1 = cljs.core.get.call(null,inst_22703,inst_22702__$1);
var state_22723__$1 = (function (){var statearr_22739 = state_22723;
(statearr_22739[(7)] = inst_22702__$1);

(statearr_22739[(11)] = inst_22704__$1);

return statearr_22739;
})();
if(cljs.core.truth_(inst_22704__$1)){
var statearr_22740_22782 = state_22723__$1;
(statearr_22740_22782[(1)] = (19));

} else {
var statearr_22741_22783 = state_22723__$1;
(statearr_22741_22783[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22724 === (25))){
var inst_22713 = (state_22723[(2)]);
var state_22723__$1 = state_22723;
var statearr_22742_22784 = state_22723__$1;
(statearr_22742_22784[(2)] = inst_22713);

(statearr_22742_22784[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22724 === (17))){
var inst_22678 = (state_22723[(10)]);
var inst_22687 = cljs.core.first.call(null,inst_22678);
var inst_22688 = cljs.core.async.muxch_STAR_.call(null,inst_22687);
var inst_22689 = cljs.core.async.close_BANG_.call(null,inst_22688);
var inst_22690 = cljs.core.next.call(null,inst_22678);
var inst_22664 = inst_22690;
var inst_22665 = null;
var inst_22666 = (0);
var inst_22667 = (0);
var state_22723__$1 = (function (){var statearr_22743 = state_22723;
(statearr_22743[(12)] = inst_22689);

(statearr_22743[(13)] = inst_22667);

(statearr_22743[(14)] = inst_22664);

(statearr_22743[(15)] = inst_22665);

(statearr_22743[(16)] = inst_22666);

return statearr_22743;
})();
var statearr_22744_22785 = state_22723__$1;
(statearr_22744_22785[(2)] = null);

(statearr_22744_22785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22724 === (3))){
var inst_22721 = (state_22723[(2)]);
var state_22723__$1 = state_22723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22723__$1,inst_22721);
} else {
if((state_val_22724 === (12))){
var inst_22698 = (state_22723[(2)]);
var state_22723__$1 = state_22723;
var statearr_22745_22786 = state_22723__$1;
(statearr_22745_22786[(2)] = inst_22698);

(statearr_22745_22786[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22724 === (2))){
var state_22723__$1 = state_22723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22723__$1,(4),ch);
} else {
if((state_val_22724 === (23))){
var state_22723__$1 = state_22723;
var statearr_22746_22787 = state_22723__$1;
(statearr_22746_22787[(2)] = null);

(statearr_22746_22787[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22724 === (19))){
var inst_22704 = (state_22723[(11)]);
var inst_22654 = (state_22723[(8)]);
var inst_22706 = cljs.core.async.muxch_STAR_.call(null,inst_22704);
var state_22723__$1 = state_22723;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22723__$1,(22),inst_22706,inst_22654);
} else {
if((state_val_22724 === (11))){
var inst_22678 = (state_22723[(10)]);
var inst_22664 = (state_22723[(14)]);
var inst_22678__$1 = cljs.core.seq.call(null,inst_22664);
var state_22723__$1 = (function (){var statearr_22747 = state_22723;
(statearr_22747[(10)] = inst_22678__$1);

return statearr_22747;
})();
if(inst_22678__$1){
var statearr_22748_22788 = state_22723__$1;
(statearr_22748_22788[(1)] = (13));

} else {
var statearr_22749_22789 = state_22723__$1;
(statearr_22749_22789[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22724 === (9))){
var inst_22700 = (state_22723[(2)]);
var state_22723__$1 = state_22723;
var statearr_22750_22790 = state_22723__$1;
(statearr_22750_22790[(2)] = inst_22700);

(statearr_22750_22790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22724 === (5))){
var inst_22661 = cljs.core.deref.call(null,mults);
var inst_22662 = cljs.core.vals.call(null,inst_22661);
var inst_22663 = cljs.core.seq.call(null,inst_22662);
var inst_22664 = inst_22663;
var inst_22665 = null;
var inst_22666 = (0);
var inst_22667 = (0);
var state_22723__$1 = (function (){var statearr_22751 = state_22723;
(statearr_22751[(13)] = inst_22667);

(statearr_22751[(14)] = inst_22664);

(statearr_22751[(15)] = inst_22665);

(statearr_22751[(16)] = inst_22666);

return statearr_22751;
})();
var statearr_22752_22791 = state_22723__$1;
(statearr_22752_22791[(2)] = null);

(statearr_22752_22791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22724 === (14))){
var state_22723__$1 = state_22723;
var statearr_22756_22792 = state_22723__$1;
(statearr_22756_22792[(2)] = null);

(statearr_22756_22792[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22724 === (16))){
var inst_22678 = (state_22723[(10)]);
var inst_22682 = cljs.core.chunk_first.call(null,inst_22678);
var inst_22683 = cljs.core.chunk_rest.call(null,inst_22678);
var inst_22684 = cljs.core.count.call(null,inst_22682);
var inst_22664 = inst_22683;
var inst_22665 = inst_22682;
var inst_22666 = inst_22684;
var inst_22667 = (0);
var state_22723__$1 = (function (){var statearr_22757 = state_22723;
(statearr_22757[(13)] = inst_22667);

(statearr_22757[(14)] = inst_22664);

(statearr_22757[(15)] = inst_22665);

(statearr_22757[(16)] = inst_22666);

return statearr_22757;
})();
var statearr_22758_22793 = state_22723__$1;
(statearr_22758_22793[(2)] = null);

(statearr_22758_22793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22724 === (10))){
var inst_22667 = (state_22723[(13)]);
var inst_22664 = (state_22723[(14)]);
var inst_22665 = (state_22723[(15)]);
var inst_22666 = (state_22723[(16)]);
var inst_22672 = cljs.core._nth.call(null,inst_22665,inst_22667);
var inst_22673 = cljs.core.async.muxch_STAR_.call(null,inst_22672);
var inst_22674 = cljs.core.async.close_BANG_.call(null,inst_22673);
var inst_22675 = (inst_22667 + (1));
var tmp22753 = inst_22664;
var tmp22754 = inst_22665;
var tmp22755 = inst_22666;
var inst_22664__$1 = tmp22753;
var inst_22665__$1 = tmp22754;
var inst_22666__$1 = tmp22755;
var inst_22667__$1 = inst_22675;
var state_22723__$1 = (function (){var statearr_22759 = state_22723;
(statearr_22759[(13)] = inst_22667__$1);

(statearr_22759[(17)] = inst_22674);

(statearr_22759[(14)] = inst_22664__$1);

(statearr_22759[(15)] = inst_22665__$1);

(statearr_22759[(16)] = inst_22666__$1);

return statearr_22759;
})();
var statearr_22760_22794 = state_22723__$1;
(statearr_22760_22794[(2)] = null);

(statearr_22760_22794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22724 === (18))){
var inst_22693 = (state_22723[(2)]);
var state_22723__$1 = state_22723;
var statearr_22761_22795 = state_22723__$1;
(statearr_22761_22795[(2)] = inst_22693);

(statearr_22761_22795[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22724 === (8))){
var inst_22667 = (state_22723[(13)]);
var inst_22666 = (state_22723[(16)]);
var inst_22669 = (inst_22667 < inst_22666);
var inst_22670 = inst_22669;
var state_22723__$1 = state_22723;
if(cljs.core.truth_(inst_22670)){
var statearr_22762_22796 = state_22723__$1;
(statearr_22762_22796[(1)] = (10));

} else {
var statearr_22763_22797 = state_22723__$1;
(statearr_22763_22797[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21535__auto___22769,mults,ensure_mult,p))
;
return ((function (switch__21444__auto__,c__21535__auto___22769,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21445__auto__ = null;
var cljs$core$async$state_machine__21445__auto____0 = (function (){
var statearr_22764 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22764[(0)] = cljs$core$async$state_machine__21445__auto__);

(statearr_22764[(1)] = (1));

return statearr_22764;
});
var cljs$core$async$state_machine__21445__auto____1 = (function (state_22723){
while(true){
var ret_value__21446__auto__ = (function (){try{while(true){
var result__21447__auto__ = switch__21444__auto__.call(null,state_22723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21447__auto__;
}
break;
}
}catch (e22765){if((e22765 instanceof Object)){
var ex__21448__auto__ = e22765;
var statearr_22766_22798 = state_22723;
(statearr_22766_22798[(5)] = ex__21448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22799 = state_22723;
state_22723 = G__22799;
continue;
} else {
return ret_value__21446__auto__;
}
break;
}
});
cljs$core$async$state_machine__21445__auto__ = function(state_22723){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21445__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21445__auto____1.call(this,state_22723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21445__auto____0;
cljs$core$async$state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21445__auto____1;
return cljs$core$async$state_machine__21445__auto__;
})()
;})(switch__21444__auto__,c__21535__auto___22769,mults,ensure_mult,p))
})();
var state__21537__auto__ = (function (){var statearr_22767 = f__21536__auto__.call(null);
(statearr_22767[(6)] = c__21535__auto___22769);

return statearr_22767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto___22769,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__22801 = arguments.length;
switch (G__22801) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__22804 = arguments.length;
switch (G__22804) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__22807 = arguments.length;
switch (G__22807) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21535__auto___22874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto___22874,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21536__auto__ = (function (){var switch__21444__auto__ = ((function (c__21535__auto___22874,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22846){
var state_val_22847 = (state_22846[(1)]);
if((state_val_22847 === (7))){
var state_22846__$1 = state_22846;
var statearr_22848_22875 = state_22846__$1;
(statearr_22848_22875[(2)] = null);

(statearr_22848_22875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22847 === (1))){
var state_22846__$1 = state_22846;
var statearr_22849_22876 = state_22846__$1;
(statearr_22849_22876[(2)] = null);

(statearr_22849_22876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22847 === (4))){
var inst_22810 = (state_22846[(7)]);
var inst_22812 = (inst_22810 < cnt);
var state_22846__$1 = state_22846;
if(cljs.core.truth_(inst_22812)){
var statearr_22850_22877 = state_22846__$1;
(statearr_22850_22877[(1)] = (6));

} else {
var statearr_22851_22878 = state_22846__$1;
(statearr_22851_22878[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22847 === (15))){
var inst_22842 = (state_22846[(2)]);
var state_22846__$1 = state_22846;
var statearr_22852_22879 = state_22846__$1;
(statearr_22852_22879[(2)] = inst_22842);

(statearr_22852_22879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22847 === (13))){
var inst_22835 = cljs.core.async.close_BANG_.call(null,out);
var state_22846__$1 = state_22846;
var statearr_22853_22880 = state_22846__$1;
(statearr_22853_22880[(2)] = inst_22835);

(statearr_22853_22880[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22847 === (6))){
var state_22846__$1 = state_22846;
var statearr_22854_22881 = state_22846__$1;
(statearr_22854_22881[(2)] = null);

(statearr_22854_22881[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22847 === (3))){
var inst_22844 = (state_22846[(2)]);
var state_22846__$1 = state_22846;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22846__$1,inst_22844);
} else {
if((state_val_22847 === (12))){
var inst_22832 = (state_22846[(8)]);
var inst_22832__$1 = (state_22846[(2)]);
var inst_22833 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22832__$1);
var state_22846__$1 = (function (){var statearr_22855 = state_22846;
(statearr_22855[(8)] = inst_22832__$1);

return statearr_22855;
})();
if(cljs.core.truth_(inst_22833)){
var statearr_22856_22882 = state_22846__$1;
(statearr_22856_22882[(1)] = (13));

} else {
var statearr_22857_22883 = state_22846__$1;
(statearr_22857_22883[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22847 === (2))){
var inst_22809 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22810 = (0);
var state_22846__$1 = (function (){var statearr_22858 = state_22846;
(statearr_22858[(9)] = inst_22809);

(statearr_22858[(7)] = inst_22810);

return statearr_22858;
})();
var statearr_22859_22884 = state_22846__$1;
(statearr_22859_22884[(2)] = null);

(statearr_22859_22884[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22847 === (11))){
var inst_22810 = (state_22846[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22846,(10),Object,null,(9));
var inst_22819 = chs__$1.call(null,inst_22810);
var inst_22820 = done.call(null,inst_22810);
var inst_22821 = cljs.core.async.take_BANG_.call(null,inst_22819,inst_22820);
var state_22846__$1 = state_22846;
var statearr_22860_22885 = state_22846__$1;
(statearr_22860_22885[(2)] = inst_22821);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22846__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22847 === (9))){
var inst_22810 = (state_22846[(7)]);
var inst_22823 = (state_22846[(2)]);
var inst_22824 = (inst_22810 + (1));
var inst_22810__$1 = inst_22824;
var state_22846__$1 = (function (){var statearr_22861 = state_22846;
(statearr_22861[(10)] = inst_22823);

(statearr_22861[(7)] = inst_22810__$1);

return statearr_22861;
})();
var statearr_22862_22886 = state_22846__$1;
(statearr_22862_22886[(2)] = null);

(statearr_22862_22886[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22847 === (5))){
var inst_22830 = (state_22846[(2)]);
var state_22846__$1 = (function (){var statearr_22863 = state_22846;
(statearr_22863[(11)] = inst_22830);

return statearr_22863;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22846__$1,(12),dchan);
} else {
if((state_val_22847 === (14))){
var inst_22832 = (state_22846[(8)]);
var inst_22837 = cljs.core.apply.call(null,f,inst_22832);
var state_22846__$1 = state_22846;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22846__$1,(16),out,inst_22837);
} else {
if((state_val_22847 === (16))){
var inst_22839 = (state_22846[(2)]);
var state_22846__$1 = (function (){var statearr_22864 = state_22846;
(statearr_22864[(12)] = inst_22839);

return statearr_22864;
})();
var statearr_22865_22887 = state_22846__$1;
(statearr_22865_22887[(2)] = null);

(statearr_22865_22887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22847 === (10))){
var inst_22814 = (state_22846[(2)]);
var inst_22815 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22846__$1 = (function (){var statearr_22866 = state_22846;
(statearr_22866[(13)] = inst_22814);

return statearr_22866;
})();
var statearr_22867_22888 = state_22846__$1;
(statearr_22867_22888[(2)] = inst_22815);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22846__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22847 === (8))){
var inst_22828 = (state_22846[(2)]);
var state_22846__$1 = state_22846;
var statearr_22868_22889 = state_22846__$1;
(statearr_22868_22889[(2)] = inst_22828);

(statearr_22868_22889[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
});})(c__21535__auto___22874,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21444__auto__,c__21535__auto___22874,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21445__auto__ = null;
var cljs$core$async$state_machine__21445__auto____0 = (function (){
var statearr_22869 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22869[(0)] = cljs$core$async$state_machine__21445__auto__);

(statearr_22869[(1)] = (1));

return statearr_22869;
});
var cljs$core$async$state_machine__21445__auto____1 = (function (state_22846){
while(true){
var ret_value__21446__auto__ = (function (){try{while(true){
var result__21447__auto__ = switch__21444__auto__.call(null,state_22846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21447__auto__;
}
break;
}
}catch (e22870){if((e22870 instanceof Object)){
var ex__21448__auto__ = e22870;
var statearr_22871_22890 = state_22846;
(statearr_22871_22890[(5)] = ex__21448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22891 = state_22846;
state_22846 = G__22891;
continue;
} else {
return ret_value__21446__auto__;
}
break;
}
});
cljs$core$async$state_machine__21445__auto__ = function(state_22846){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21445__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21445__auto____1.call(this,state_22846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21445__auto____0;
cljs$core$async$state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21445__auto____1;
return cljs$core$async$state_machine__21445__auto__;
})()
;})(switch__21444__auto__,c__21535__auto___22874,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21537__auto__ = (function (){var statearr_22872 = f__21536__auto__.call(null);
(statearr_22872[(6)] = c__21535__auto___22874);

return statearr_22872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto___22874,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__22894 = arguments.length;
switch (G__22894) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21535__auto___22948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto___22948,out){
return (function (){
var f__21536__auto__ = (function (){var switch__21444__auto__ = ((function (c__21535__auto___22948,out){
return (function (state_22926){
var state_val_22927 = (state_22926[(1)]);
if((state_val_22927 === (7))){
var inst_22905 = (state_22926[(7)]);
var inst_22906 = (state_22926[(8)]);
var inst_22905__$1 = (state_22926[(2)]);
var inst_22906__$1 = cljs.core.nth.call(null,inst_22905__$1,(0),null);
var inst_22907 = cljs.core.nth.call(null,inst_22905__$1,(1),null);
var inst_22908 = (inst_22906__$1 == null);
var state_22926__$1 = (function (){var statearr_22928 = state_22926;
(statearr_22928[(9)] = inst_22907);

(statearr_22928[(7)] = inst_22905__$1);

(statearr_22928[(8)] = inst_22906__$1);

return statearr_22928;
})();
if(cljs.core.truth_(inst_22908)){
var statearr_22929_22949 = state_22926__$1;
(statearr_22929_22949[(1)] = (8));

} else {
var statearr_22930_22950 = state_22926__$1;
(statearr_22930_22950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (1))){
var inst_22895 = cljs.core.vec.call(null,chs);
var inst_22896 = inst_22895;
var state_22926__$1 = (function (){var statearr_22931 = state_22926;
(statearr_22931[(10)] = inst_22896);

return statearr_22931;
})();
var statearr_22932_22951 = state_22926__$1;
(statearr_22932_22951[(2)] = null);

(statearr_22932_22951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (4))){
var inst_22896 = (state_22926[(10)]);
var state_22926__$1 = state_22926;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22926__$1,(7),inst_22896);
} else {
if((state_val_22927 === (6))){
var inst_22922 = (state_22926[(2)]);
var state_22926__$1 = state_22926;
var statearr_22933_22952 = state_22926__$1;
(statearr_22933_22952[(2)] = inst_22922);

(statearr_22933_22952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (3))){
var inst_22924 = (state_22926[(2)]);
var state_22926__$1 = state_22926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22926__$1,inst_22924);
} else {
if((state_val_22927 === (2))){
var inst_22896 = (state_22926[(10)]);
var inst_22898 = cljs.core.count.call(null,inst_22896);
var inst_22899 = (inst_22898 > (0));
var state_22926__$1 = state_22926;
if(cljs.core.truth_(inst_22899)){
var statearr_22935_22953 = state_22926__$1;
(statearr_22935_22953[(1)] = (4));

} else {
var statearr_22936_22954 = state_22926__$1;
(statearr_22936_22954[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (11))){
var inst_22896 = (state_22926[(10)]);
var inst_22915 = (state_22926[(2)]);
var tmp22934 = inst_22896;
var inst_22896__$1 = tmp22934;
var state_22926__$1 = (function (){var statearr_22937 = state_22926;
(statearr_22937[(10)] = inst_22896__$1);

(statearr_22937[(11)] = inst_22915);

return statearr_22937;
})();
var statearr_22938_22955 = state_22926__$1;
(statearr_22938_22955[(2)] = null);

(statearr_22938_22955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (9))){
var inst_22906 = (state_22926[(8)]);
var state_22926__$1 = state_22926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22926__$1,(11),out,inst_22906);
} else {
if((state_val_22927 === (5))){
var inst_22920 = cljs.core.async.close_BANG_.call(null,out);
var state_22926__$1 = state_22926;
var statearr_22939_22956 = state_22926__$1;
(statearr_22939_22956[(2)] = inst_22920);

(statearr_22939_22956[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (10))){
var inst_22918 = (state_22926[(2)]);
var state_22926__$1 = state_22926;
var statearr_22940_22957 = state_22926__$1;
(statearr_22940_22957[(2)] = inst_22918);

(statearr_22940_22957[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (8))){
var inst_22907 = (state_22926[(9)]);
var inst_22896 = (state_22926[(10)]);
var inst_22905 = (state_22926[(7)]);
var inst_22906 = (state_22926[(8)]);
var inst_22910 = (function (){var cs = inst_22896;
var vec__22901 = inst_22905;
var v = inst_22906;
var c = inst_22907;
return ((function (cs,vec__22901,v,c,inst_22907,inst_22896,inst_22905,inst_22906,state_val_22927,c__21535__auto___22948,out){
return (function (p1__22892_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22892_SHARP_);
});
;})(cs,vec__22901,v,c,inst_22907,inst_22896,inst_22905,inst_22906,state_val_22927,c__21535__auto___22948,out))
})();
var inst_22911 = cljs.core.filterv.call(null,inst_22910,inst_22896);
var inst_22896__$1 = inst_22911;
var state_22926__$1 = (function (){var statearr_22941 = state_22926;
(statearr_22941[(10)] = inst_22896__$1);

return statearr_22941;
})();
var statearr_22942_22958 = state_22926__$1;
(statearr_22942_22958[(2)] = null);

(statearr_22942_22958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
});})(c__21535__auto___22948,out))
;
return ((function (switch__21444__auto__,c__21535__auto___22948,out){
return (function() {
var cljs$core$async$state_machine__21445__auto__ = null;
var cljs$core$async$state_machine__21445__auto____0 = (function (){
var statearr_22943 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22943[(0)] = cljs$core$async$state_machine__21445__auto__);

(statearr_22943[(1)] = (1));

return statearr_22943;
});
var cljs$core$async$state_machine__21445__auto____1 = (function (state_22926){
while(true){
var ret_value__21446__auto__ = (function (){try{while(true){
var result__21447__auto__ = switch__21444__auto__.call(null,state_22926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21447__auto__;
}
break;
}
}catch (e22944){if((e22944 instanceof Object)){
var ex__21448__auto__ = e22944;
var statearr_22945_22959 = state_22926;
(statearr_22945_22959[(5)] = ex__21448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22960 = state_22926;
state_22926 = G__22960;
continue;
} else {
return ret_value__21446__auto__;
}
break;
}
});
cljs$core$async$state_machine__21445__auto__ = function(state_22926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21445__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21445__auto____1.call(this,state_22926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21445__auto____0;
cljs$core$async$state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21445__auto____1;
return cljs$core$async$state_machine__21445__auto__;
})()
;})(switch__21444__auto__,c__21535__auto___22948,out))
})();
var state__21537__auto__ = (function (){var statearr_22946 = f__21536__auto__.call(null);
(statearr_22946[(6)] = c__21535__auto___22948);

return statearr_22946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto___22948,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__22962 = arguments.length;
switch (G__22962) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21535__auto___23007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto___23007,out){
return (function (){
var f__21536__auto__ = (function (){var switch__21444__auto__ = ((function (c__21535__auto___23007,out){
return (function (state_22986){
var state_val_22987 = (state_22986[(1)]);
if((state_val_22987 === (7))){
var inst_22968 = (state_22986[(7)]);
var inst_22968__$1 = (state_22986[(2)]);
var inst_22969 = (inst_22968__$1 == null);
var inst_22970 = cljs.core.not.call(null,inst_22969);
var state_22986__$1 = (function (){var statearr_22988 = state_22986;
(statearr_22988[(7)] = inst_22968__$1);

return statearr_22988;
})();
if(inst_22970){
var statearr_22989_23008 = state_22986__$1;
(statearr_22989_23008[(1)] = (8));

} else {
var statearr_22990_23009 = state_22986__$1;
(statearr_22990_23009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22987 === (1))){
var inst_22963 = (0);
var state_22986__$1 = (function (){var statearr_22991 = state_22986;
(statearr_22991[(8)] = inst_22963);

return statearr_22991;
})();
var statearr_22992_23010 = state_22986__$1;
(statearr_22992_23010[(2)] = null);

(statearr_22992_23010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22987 === (4))){
var state_22986__$1 = state_22986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22986__$1,(7),ch);
} else {
if((state_val_22987 === (6))){
var inst_22981 = (state_22986[(2)]);
var state_22986__$1 = state_22986;
var statearr_22993_23011 = state_22986__$1;
(statearr_22993_23011[(2)] = inst_22981);

(statearr_22993_23011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22987 === (3))){
var inst_22983 = (state_22986[(2)]);
var inst_22984 = cljs.core.async.close_BANG_.call(null,out);
var state_22986__$1 = (function (){var statearr_22994 = state_22986;
(statearr_22994[(9)] = inst_22983);

return statearr_22994;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22986__$1,inst_22984);
} else {
if((state_val_22987 === (2))){
var inst_22963 = (state_22986[(8)]);
var inst_22965 = (inst_22963 < n);
var state_22986__$1 = state_22986;
if(cljs.core.truth_(inst_22965)){
var statearr_22995_23012 = state_22986__$1;
(statearr_22995_23012[(1)] = (4));

} else {
var statearr_22996_23013 = state_22986__$1;
(statearr_22996_23013[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22987 === (11))){
var inst_22963 = (state_22986[(8)]);
var inst_22973 = (state_22986[(2)]);
var inst_22974 = (inst_22963 + (1));
var inst_22963__$1 = inst_22974;
var state_22986__$1 = (function (){var statearr_22997 = state_22986;
(statearr_22997[(10)] = inst_22973);

(statearr_22997[(8)] = inst_22963__$1);

return statearr_22997;
})();
var statearr_22998_23014 = state_22986__$1;
(statearr_22998_23014[(2)] = null);

(statearr_22998_23014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22987 === (9))){
var state_22986__$1 = state_22986;
var statearr_22999_23015 = state_22986__$1;
(statearr_22999_23015[(2)] = null);

(statearr_22999_23015[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22987 === (5))){
var state_22986__$1 = state_22986;
var statearr_23000_23016 = state_22986__$1;
(statearr_23000_23016[(2)] = null);

(statearr_23000_23016[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22987 === (10))){
var inst_22978 = (state_22986[(2)]);
var state_22986__$1 = state_22986;
var statearr_23001_23017 = state_22986__$1;
(statearr_23001_23017[(2)] = inst_22978);

(statearr_23001_23017[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22987 === (8))){
var inst_22968 = (state_22986[(7)]);
var state_22986__$1 = state_22986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22986__$1,(11),out,inst_22968);
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
}
}
}
});})(c__21535__auto___23007,out))
;
return ((function (switch__21444__auto__,c__21535__auto___23007,out){
return (function() {
var cljs$core$async$state_machine__21445__auto__ = null;
var cljs$core$async$state_machine__21445__auto____0 = (function (){
var statearr_23002 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23002[(0)] = cljs$core$async$state_machine__21445__auto__);

(statearr_23002[(1)] = (1));

return statearr_23002;
});
var cljs$core$async$state_machine__21445__auto____1 = (function (state_22986){
while(true){
var ret_value__21446__auto__ = (function (){try{while(true){
var result__21447__auto__ = switch__21444__auto__.call(null,state_22986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21447__auto__;
}
break;
}
}catch (e23003){if((e23003 instanceof Object)){
var ex__21448__auto__ = e23003;
var statearr_23004_23018 = state_22986;
(statearr_23004_23018[(5)] = ex__21448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23019 = state_22986;
state_22986 = G__23019;
continue;
} else {
return ret_value__21446__auto__;
}
break;
}
});
cljs$core$async$state_machine__21445__auto__ = function(state_22986){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21445__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21445__auto____1.call(this,state_22986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21445__auto____0;
cljs$core$async$state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21445__auto____1;
return cljs$core$async$state_machine__21445__auto__;
})()
;})(switch__21444__auto__,c__21535__auto___23007,out))
})();
var state__21537__auto__ = (function (){var statearr_23005 = f__21536__auto__.call(null);
(statearr_23005[(6)] = c__21535__auto___23007);

return statearr_23005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto___23007,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23021 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23021 = (function (f,ch,meta23022){
this.f = f;
this.ch = ch;
this.meta23022 = meta23022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23023,meta23022__$1){
var self__ = this;
var _23023__$1 = this;
return (new cljs.core.async.t_cljs$core$async23021(self__.f,self__.ch,meta23022__$1));
});

cljs.core.async.t_cljs$core$async23021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23023){
var self__ = this;
var _23023__$1 = this;
return self__.meta23022;
});

cljs.core.async.t_cljs$core$async23021.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23021.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23021.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23021.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23021.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23024 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23024 = (function (f,ch,meta23022,_,fn1,meta23025){
this.f = f;
this.ch = ch;
this.meta23022 = meta23022;
this._ = _;
this.fn1 = fn1;
this.meta23025 = meta23025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23026,meta23025__$1){
var self__ = this;
var _23026__$1 = this;
return (new cljs.core.async.t_cljs$core$async23024(self__.f,self__.ch,self__.meta23022,self__._,self__.fn1,meta23025__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23024.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23026){
var self__ = this;
var _23026__$1 = this;
return self__.meta23025;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23024.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23024.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23024.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23024.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23020_SHARP_){
return f1.call(null,(((p1__23020_SHARP_ == null))?null:self__.f.call(null,p1__23020_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23024.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23022","meta23022",580499189,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23021","cljs.core.async/t_cljs$core$async23021",1938967453,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23025","meta23025",1638871617,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23024.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23024.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23024";

cljs.core.async.t_cljs$core$async23024.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async23024");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23024.
 */
cljs.core.async.__GT_t_cljs$core$async23024 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23024(f__$1,ch__$1,meta23022__$1,___$2,fn1__$1,meta23025){
return (new cljs.core.async.t_cljs$core$async23024(f__$1,ch__$1,meta23022__$1,___$2,fn1__$1,meta23025));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23024(self__.f,self__.ch,self__.meta23022,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async23021.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23021.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23021.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23022","meta23022",580499189,null)], null);
});

cljs.core.async.t_cljs$core$async23021.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23021.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23021";

cljs.core.async.t_cljs$core$async23021.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async23021");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23021.
 */
cljs.core.async.__GT_t_cljs$core$async23021 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23021(f__$1,ch__$1,meta23022){
return (new cljs.core.async.t_cljs$core$async23021(f__$1,ch__$1,meta23022));
});

}

return (new cljs.core.async.t_cljs$core$async23021(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23027 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23027 = (function (f,ch,meta23028){
this.f = f;
this.ch = ch;
this.meta23028 = meta23028;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23029,meta23028__$1){
var self__ = this;
var _23029__$1 = this;
return (new cljs.core.async.t_cljs$core$async23027(self__.f,self__.ch,meta23028__$1));
});

cljs.core.async.t_cljs$core$async23027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23029){
var self__ = this;
var _23029__$1 = this;
return self__.meta23028;
});

cljs.core.async.t_cljs$core$async23027.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23027.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23027.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23027.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23027.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23027.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23027.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23028","meta23028",1416088200,null)], null);
});

cljs.core.async.t_cljs$core$async23027.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23027.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23027";

cljs.core.async.t_cljs$core$async23027.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async23027");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23027.
 */
cljs.core.async.__GT_t_cljs$core$async23027 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23027(f__$1,ch__$1,meta23028){
return (new cljs.core.async.t_cljs$core$async23027(f__$1,ch__$1,meta23028));
});

}

return (new cljs.core.async.t_cljs$core$async23027(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23030 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23030 = (function (p,ch,meta23031){
this.p = p;
this.ch = ch;
this.meta23031 = meta23031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23032,meta23031__$1){
var self__ = this;
var _23032__$1 = this;
return (new cljs.core.async.t_cljs$core$async23030(self__.p,self__.ch,meta23031__$1));
});

cljs.core.async.t_cljs$core$async23030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23032){
var self__ = this;
var _23032__$1 = this;
return self__.meta23031;
});

cljs.core.async.t_cljs$core$async23030.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23030.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23030.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23030.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23030.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23030.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23030.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23030.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23031","meta23031",122400857,null)], null);
});

cljs.core.async.t_cljs$core$async23030.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23030";

cljs.core.async.t_cljs$core$async23030.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async23030");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23030.
 */
cljs.core.async.__GT_t_cljs$core$async23030 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23030(p__$1,ch__$1,meta23031){
return (new cljs.core.async.t_cljs$core$async23030(p__$1,ch__$1,meta23031));
});

}

return (new cljs.core.async.t_cljs$core$async23030(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__23034 = arguments.length;
switch (G__23034) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21535__auto___23074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto___23074,out){
return (function (){
var f__21536__auto__ = (function (){var switch__21444__auto__ = ((function (c__21535__auto___23074,out){
return (function (state_23055){
var state_val_23056 = (state_23055[(1)]);
if((state_val_23056 === (7))){
var inst_23051 = (state_23055[(2)]);
var state_23055__$1 = state_23055;
var statearr_23057_23075 = state_23055__$1;
(statearr_23057_23075[(2)] = inst_23051);

(statearr_23057_23075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23056 === (1))){
var state_23055__$1 = state_23055;
var statearr_23058_23076 = state_23055__$1;
(statearr_23058_23076[(2)] = null);

(statearr_23058_23076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23056 === (4))){
var inst_23037 = (state_23055[(7)]);
var inst_23037__$1 = (state_23055[(2)]);
var inst_23038 = (inst_23037__$1 == null);
var state_23055__$1 = (function (){var statearr_23059 = state_23055;
(statearr_23059[(7)] = inst_23037__$1);

return statearr_23059;
})();
if(cljs.core.truth_(inst_23038)){
var statearr_23060_23077 = state_23055__$1;
(statearr_23060_23077[(1)] = (5));

} else {
var statearr_23061_23078 = state_23055__$1;
(statearr_23061_23078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23056 === (6))){
var inst_23037 = (state_23055[(7)]);
var inst_23042 = p.call(null,inst_23037);
var state_23055__$1 = state_23055;
if(cljs.core.truth_(inst_23042)){
var statearr_23062_23079 = state_23055__$1;
(statearr_23062_23079[(1)] = (8));

} else {
var statearr_23063_23080 = state_23055__$1;
(statearr_23063_23080[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23056 === (3))){
var inst_23053 = (state_23055[(2)]);
var state_23055__$1 = state_23055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23055__$1,inst_23053);
} else {
if((state_val_23056 === (2))){
var state_23055__$1 = state_23055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23055__$1,(4),ch);
} else {
if((state_val_23056 === (11))){
var inst_23045 = (state_23055[(2)]);
var state_23055__$1 = state_23055;
var statearr_23064_23081 = state_23055__$1;
(statearr_23064_23081[(2)] = inst_23045);

(statearr_23064_23081[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23056 === (9))){
var state_23055__$1 = state_23055;
var statearr_23065_23082 = state_23055__$1;
(statearr_23065_23082[(2)] = null);

(statearr_23065_23082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23056 === (5))){
var inst_23040 = cljs.core.async.close_BANG_.call(null,out);
var state_23055__$1 = state_23055;
var statearr_23066_23083 = state_23055__$1;
(statearr_23066_23083[(2)] = inst_23040);

(statearr_23066_23083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23056 === (10))){
var inst_23048 = (state_23055[(2)]);
var state_23055__$1 = (function (){var statearr_23067 = state_23055;
(statearr_23067[(8)] = inst_23048);

return statearr_23067;
})();
var statearr_23068_23084 = state_23055__$1;
(statearr_23068_23084[(2)] = null);

(statearr_23068_23084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23056 === (8))){
var inst_23037 = (state_23055[(7)]);
var state_23055__$1 = state_23055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23055__$1,(11),out,inst_23037);
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
}
}
}
});})(c__21535__auto___23074,out))
;
return ((function (switch__21444__auto__,c__21535__auto___23074,out){
return (function() {
var cljs$core$async$state_machine__21445__auto__ = null;
var cljs$core$async$state_machine__21445__auto____0 = (function (){
var statearr_23069 = [null,null,null,null,null,null,null,null,null];
(statearr_23069[(0)] = cljs$core$async$state_machine__21445__auto__);

(statearr_23069[(1)] = (1));

return statearr_23069;
});
var cljs$core$async$state_machine__21445__auto____1 = (function (state_23055){
while(true){
var ret_value__21446__auto__ = (function (){try{while(true){
var result__21447__auto__ = switch__21444__auto__.call(null,state_23055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21447__auto__;
}
break;
}
}catch (e23070){if((e23070 instanceof Object)){
var ex__21448__auto__ = e23070;
var statearr_23071_23085 = state_23055;
(statearr_23071_23085[(5)] = ex__21448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23086 = state_23055;
state_23055 = G__23086;
continue;
} else {
return ret_value__21446__auto__;
}
break;
}
});
cljs$core$async$state_machine__21445__auto__ = function(state_23055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21445__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21445__auto____1.call(this,state_23055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21445__auto____0;
cljs$core$async$state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21445__auto____1;
return cljs$core$async$state_machine__21445__auto__;
})()
;})(switch__21444__auto__,c__21535__auto___23074,out))
})();
var state__21537__auto__ = (function (){var statearr_23072 = f__21536__auto__.call(null);
(statearr_23072[(6)] = c__21535__auto___23074);

return statearr_23072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto___23074,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__23088 = arguments.length;
switch (G__23088) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21535__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto__){
return (function (){
var f__21536__auto__ = (function (){var switch__21444__auto__ = ((function (c__21535__auto__){
return (function (state_23151){
var state_val_23152 = (state_23151[(1)]);
if((state_val_23152 === (7))){
var inst_23147 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
var statearr_23153_23191 = state_23151__$1;
(statearr_23153_23191[(2)] = inst_23147);

(statearr_23153_23191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (20))){
var inst_23117 = (state_23151[(7)]);
var inst_23128 = (state_23151[(2)]);
var inst_23129 = cljs.core.next.call(null,inst_23117);
var inst_23103 = inst_23129;
var inst_23104 = null;
var inst_23105 = (0);
var inst_23106 = (0);
var state_23151__$1 = (function (){var statearr_23154 = state_23151;
(statearr_23154[(8)] = inst_23104);

(statearr_23154[(9)] = inst_23128);

(statearr_23154[(10)] = inst_23106);

(statearr_23154[(11)] = inst_23103);

(statearr_23154[(12)] = inst_23105);

return statearr_23154;
})();
var statearr_23155_23192 = state_23151__$1;
(statearr_23155_23192[(2)] = null);

(statearr_23155_23192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (1))){
var state_23151__$1 = state_23151;
var statearr_23156_23193 = state_23151__$1;
(statearr_23156_23193[(2)] = null);

(statearr_23156_23193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (4))){
var inst_23092 = (state_23151[(13)]);
var inst_23092__$1 = (state_23151[(2)]);
var inst_23093 = (inst_23092__$1 == null);
var state_23151__$1 = (function (){var statearr_23157 = state_23151;
(statearr_23157[(13)] = inst_23092__$1);

return statearr_23157;
})();
if(cljs.core.truth_(inst_23093)){
var statearr_23158_23194 = state_23151__$1;
(statearr_23158_23194[(1)] = (5));

} else {
var statearr_23159_23195 = state_23151__$1;
(statearr_23159_23195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (15))){
var state_23151__$1 = state_23151;
var statearr_23163_23196 = state_23151__$1;
(statearr_23163_23196[(2)] = null);

(statearr_23163_23196[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (21))){
var state_23151__$1 = state_23151;
var statearr_23164_23197 = state_23151__$1;
(statearr_23164_23197[(2)] = null);

(statearr_23164_23197[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (13))){
var inst_23104 = (state_23151[(8)]);
var inst_23106 = (state_23151[(10)]);
var inst_23103 = (state_23151[(11)]);
var inst_23105 = (state_23151[(12)]);
var inst_23113 = (state_23151[(2)]);
var inst_23114 = (inst_23106 + (1));
var tmp23160 = inst_23104;
var tmp23161 = inst_23103;
var tmp23162 = inst_23105;
var inst_23103__$1 = tmp23161;
var inst_23104__$1 = tmp23160;
var inst_23105__$1 = tmp23162;
var inst_23106__$1 = inst_23114;
var state_23151__$1 = (function (){var statearr_23165 = state_23151;
(statearr_23165[(8)] = inst_23104__$1);

(statearr_23165[(14)] = inst_23113);

(statearr_23165[(10)] = inst_23106__$1);

(statearr_23165[(11)] = inst_23103__$1);

(statearr_23165[(12)] = inst_23105__$1);

return statearr_23165;
})();
var statearr_23166_23198 = state_23151__$1;
(statearr_23166_23198[(2)] = null);

(statearr_23166_23198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (22))){
var state_23151__$1 = state_23151;
var statearr_23167_23199 = state_23151__$1;
(statearr_23167_23199[(2)] = null);

(statearr_23167_23199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (6))){
var inst_23092 = (state_23151[(13)]);
var inst_23101 = f.call(null,inst_23092);
var inst_23102 = cljs.core.seq.call(null,inst_23101);
var inst_23103 = inst_23102;
var inst_23104 = null;
var inst_23105 = (0);
var inst_23106 = (0);
var state_23151__$1 = (function (){var statearr_23168 = state_23151;
(statearr_23168[(8)] = inst_23104);

(statearr_23168[(10)] = inst_23106);

(statearr_23168[(11)] = inst_23103);

(statearr_23168[(12)] = inst_23105);

return statearr_23168;
})();
var statearr_23169_23200 = state_23151__$1;
(statearr_23169_23200[(2)] = null);

(statearr_23169_23200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (17))){
var inst_23117 = (state_23151[(7)]);
var inst_23121 = cljs.core.chunk_first.call(null,inst_23117);
var inst_23122 = cljs.core.chunk_rest.call(null,inst_23117);
var inst_23123 = cljs.core.count.call(null,inst_23121);
var inst_23103 = inst_23122;
var inst_23104 = inst_23121;
var inst_23105 = inst_23123;
var inst_23106 = (0);
var state_23151__$1 = (function (){var statearr_23170 = state_23151;
(statearr_23170[(8)] = inst_23104);

(statearr_23170[(10)] = inst_23106);

(statearr_23170[(11)] = inst_23103);

(statearr_23170[(12)] = inst_23105);

return statearr_23170;
})();
var statearr_23171_23201 = state_23151__$1;
(statearr_23171_23201[(2)] = null);

(statearr_23171_23201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (3))){
var inst_23149 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23151__$1,inst_23149);
} else {
if((state_val_23152 === (12))){
var inst_23137 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
var statearr_23172_23202 = state_23151__$1;
(statearr_23172_23202[(2)] = inst_23137);

(statearr_23172_23202[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (2))){
var state_23151__$1 = state_23151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23151__$1,(4),in$);
} else {
if((state_val_23152 === (23))){
var inst_23145 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
var statearr_23173_23203 = state_23151__$1;
(statearr_23173_23203[(2)] = inst_23145);

(statearr_23173_23203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (19))){
var inst_23132 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
var statearr_23174_23204 = state_23151__$1;
(statearr_23174_23204[(2)] = inst_23132);

(statearr_23174_23204[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (11))){
var inst_23117 = (state_23151[(7)]);
var inst_23103 = (state_23151[(11)]);
var inst_23117__$1 = cljs.core.seq.call(null,inst_23103);
var state_23151__$1 = (function (){var statearr_23175 = state_23151;
(statearr_23175[(7)] = inst_23117__$1);

return statearr_23175;
})();
if(inst_23117__$1){
var statearr_23176_23205 = state_23151__$1;
(statearr_23176_23205[(1)] = (14));

} else {
var statearr_23177_23206 = state_23151__$1;
(statearr_23177_23206[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (9))){
var inst_23139 = (state_23151[(2)]);
var inst_23140 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23151__$1 = (function (){var statearr_23178 = state_23151;
(statearr_23178[(15)] = inst_23139);

return statearr_23178;
})();
if(cljs.core.truth_(inst_23140)){
var statearr_23179_23207 = state_23151__$1;
(statearr_23179_23207[(1)] = (21));

} else {
var statearr_23180_23208 = state_23151__$1;
(statearr_23180_23208[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (5))){
var inst_23095 = cljs.core.async.close_BANG_.call(null,out);
var state_23151__$1 = state_23151;
var statearr_23181_23209 = state_23151__$1;
(statearr_23181_23209[(2)] = inst_23095);

(statearr_23181_23209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (14))){
var inst_23117 = (state_23151[(7)]);
var inst_23119 = cljs.core.chunked_seq_QMARK_.call(null,inst_23117);
var state_23151__$1 = state_23151;
if(inst_23119){
var statearr_23182_23210 = state_23151__$1;
(statearr_23182_23210[(1)] = (17));

} else {
var statearr_23183_23211 = state_23151__$1;
(statearr_23183_23211[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (16))){
var inst_23135 = (state_23151[(2)]);
var state_23151__$1 = state_23151;
var statearr_23184_23212 = state_23151__$1;
(statearr_23184_23212[(2)] = inst_23135);

(statearr_23184_23212[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23152 === (10))){
var inst_23104 = (state_23151[(8)]);
var inst_23106 = (state_23151[(10)]);
var inst_23111 = cljs.core._nth.call(null,inst_23104,inst_23106);
var state_23151__$1 = state_23151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23151__$1,(13),out,inst_23111);
} else {
if((state_val_23152 === (18))){
var inst_23117 = (state_23151[(7)]);
var inst_23126 = cljs.core.first.call(null,inst_23117);
var state_23151__$1 = state_23151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23151__$1,(20),out,inst_23126);
} else {
if((state_val_23152 === (8))){
var inst_23106 = (state_23151[(10)]);
var inst_23105 = (state_23151[(12)]);
var inst_23108 = (inst_23106 < inst_23105);
var inst_23109 = inst_23108;
var state_23151__$1 = state_23151;
if(cljs.core.truth_(inst_23109)){
var statearr_23185_23213 = state_23151__$1;
(statearr_23185_23213[(1)] = (10));

} else {
var statearr_23186_23214 = state_23151__$1;
(statearr_23186_23214[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21535__auto__))
;
return ((function (switch__21444__auto__,c__21535__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21445__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21445__auto____0 = (function (){
var statearr_23187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23187[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21445__auto__);

(statearr_23187[(1)] = (1));

return statearr_23187;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21445__auto____1 = (function (state_23151){
while(true){
var ret_value__21446__auto__ = (function (){try{while(true){
var result__21447__auto__ = switch__21444__auto__.call(null,state_23151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21447__auto__;
}
break;
}
}catch (e23188){if((e23188 instanceof Object)){
var ex__21448__auto__ = e23188;
var statearr_23189_23215 = state_23151;
(statearr_23189_23215[(5)] = ex__21448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23216 = state_23151;
state_23151 = G__23216;
continue;
} else {
return ret_value__21446__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21445__auto__ = function(state_23151){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21445__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21445__auto____1.call(this,state_23151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21445__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21445__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21445__auto__;
})()
;})(switch__21444__auto__,c__21535__auto__))
})();
var state__21537__auto__ = (function (){var statearr_23190 = f__21536__auto__.call(null);
(statearr_23190[(6)] = c__21535__auto__);

return statearr_23190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto__))
);

return c__21535__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__23218 = arguments.length;
switch (G__23218) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__23221 = arguments.length;
switch (G__23221) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__23224 = arguments.length;
switch (G__23224) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21535__auto___23271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto___23271,out){
return (function (){
var f__21536__auto__ = (function (){var switch__21444__auto__ = ((function (c__21535__auto___23271,out){
return (function (state_23248){
var state_val_23249 = (state_23248[(1)]);
if((state_val_23249 === (7))){
var inst_23243 = (state_23248[(2)]);
var state_23248__$1 = state_23248;
var statearr_23250_23272 = state_23248__$1;
(statearr_23250_23272[(2)] = inst_23243);

(statearr_23250_23272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23249 === (1))){
var inst_23225 = null;
var state_23248__$1 = (function (){var statearr_23251 = state_23248;
(statearr_23251[(7)] = inst_23225);

return statearr_23251;
})();
var statearr_23252_23273 = state_23248__$1;
(statearr_23252_23273[(2)] = null);

(statearr_23252_23273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23249 === (4))){
var inst_23228 = (state_23248[(8)]);
var inst_23228__$1 = (state_23248[(2)]);
var inst_23229 = (inst_23228__$1 == null);
var inst_23230 = cljs.core.not.call(null,inst_23229);
var state_23248__$1 = (function (){var statearr_23253 = state_23248;
(statearr_23253[(8)] = inst_23228__$1);

return statearr_23253;
})();
if(inst_23230){
var statearr_23254_23274 = state_23248__$1;
(statearr_23254_23274[(1)] = (5));

} else {
var statearr_23255_23275 = state_23248__$1;
(statearr_23255_23275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23249 === (6))){
var state_23248__$1 = state_23248;
var statearr_23256_23276 = state_23248__$1;
(statearr_23256_23276[(2)] = null);

(statearr_23256_23276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23249 === (3))){
var inst_23245 = (state_23248[(2)]);
var inst_23246 = cljs.core.async.close_BANG_.call(null,out);
var state_23248__$1 = (function (){var statearr_23257 = state_23248;
(statearr_23257[(9)] = inst_23245);

return statearr_23257;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23248__$1,inst_23246);
} else {
if((state_val_23249 === (2))){
var state_23248__$1 = state_23248;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23248__$1,(4),ch);
} else {
if((state_val_23249 === (11))){
var inst_23228 = (state_23248[(8)]);
var inst_23237 = (state_23248[(2)]);
var inst_23225 = inst_23228;
var state_23248__$1 = (function (){var statearr_23258 = state_23248;
(statearr_23258[(7)] = inst_23225);

(statearr_23258[(10)] = inst_23237);

return statearr_23258;
})();
var statearr_23259_23277 = state_23248__$1;
(statearr_23259_23277[(2)] = null);

(statearr_23259_23277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23249 === (9))){
var inst_23228 = (state_23248[(8)]);
var state_23248__$1 = state_23248;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23248__$1,(11),out,inst_23228);
} else {
if((state_val_23249 === (5))){
var inst_23225 = (state_23248[(7)]);
var inst_23228 = (state_23248[(8)]);
var inst_23232 = cljs.core._EQ_.call(null,inst_23228,inst_23225);
var state_23248__$1 = state_23248;
if(inst_23232){
var statearr_23261_23278 = state_23248__$1;
(statearr_23261_23278[(1)] = (8));

} else {
var statearr_23262_23279 = state_23248__$1;
(statearr_23262_23279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23249 === (10))){
var inst_23240 = (state_23248[(2)]);
var state_23248__$1 = state_23248;
var statearr_23263_23280 = state_23248__$1;
(statearr_23263_23280[(2)] = inst_23240);

(statearr_23263_23280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23249 === (8))){
var inst_23225 = (state_23248[(7)]);
var tmp23260 = inst_23225;
var inst_23225__$1 = tmp23260;
var state_23248__$1 = (function (){var statearr_23264 = state_23248;
(statearr_23264[(7)] = inst_23225__$1);

return statearr_23264;
})();
var statearr_23265_23281 = state_23248__$1;
(statearr_23265_23281[(2)] = null);

(statearr_23265_23281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
});})(c__21535__auto___23271,out))
;
return ((function (switch__21444__auto__,c__21535__auto___23271,out){
return (function() {
var cljs$core$async$state_machine__21445__auto__ = null;
var cljs$core$async$state_machine__21445__auto____0 = (function (){
var statearr_23266 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23266[(0)] = cljs$core$async$state_machine__21445__auto__);

(statearr_23266[(1)] = (1));

return statearr_23266;
});
var cljs$core$async$state_machine__21445__auto____1 = (function (state_23248){
while(true){
var ret_value__21446__auto__ = (function (){try{while(true){
var result__21447__auto__ = switch__21444__auto__.call(null,state_23248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21447__auto__;
}
break;
}
}catch (e23267){if((e23267 instanceof Object)){
var ex__21448__auto__ = e23267;
var statearr_23268_23282 = state_23248;
(statearr_23268_23282[(5)] = ex__21448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23283 = state_23248;
state_23248 = G__23283;
continue;
} else {
return ret_value__21446__auto__;
}
break;
}
});
cljs$core$async$state_machine__21445__auto__ = function(state_23248){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21445__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21445__auto____1.call(this,state_23248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21445__auto____0;
cljs$core$async$state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21445__auto____1;
return cljs$core$async$state_machine__21445__auto__;
})()
;})(switch__21444__auto__,c__21535__auto___23271,out))
})();
var state__21537__auto__ = (function (){var statearr_23269 = f__21536__auto__.call(null);
(statearr_23269[(6)] = c__21535__auto___23271);

return statearr_23269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto___23271,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__23285 = arguments.length;
switch (G__23285) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21535__auto___23351 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto___23351,out){
return (function (){
var f__21536__auto__ = (function (){var switch__21444__auto__ = ((function (c__21535__auto___23351,out){
return (function (state_23323){
var state_val_23324 = (state_23323[(1)]);
if((state_val_23324 === (7))){
var inst_23319 = (state_23323[(2)]);
var state_23323__$1 = state_23323;
var statearr_23325_23352 = state_23323__$1;
(statearr_23325_23352[(2)] = inst_23319);

(statearr_23325_23352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (1))){
var inst_23286 = (new Array(n));
var inst_23287 = inst_23286;
var inst_23288 = (0);
var state_23323__$1 = (function (){var statearr_23326 = state_23323;
(statearr_23326[(7)] = inst_23288);

(statearr_23326[(8)] = inst_23287);

return statearr_23326;
})();
var statearr_23327_23353 = state_23323__$1;
(statearr_23327_23353[(2)] = null);

(statearr_23327_23353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (4))){
var inst_23291 = (state_23323[(9)]);
var inst_23291__$1 = (state_23323[(2)]);
var inst_23292 = (inst_23291__$1 == null);
var inst_23293 = cljs.core.not.call(null,inst_23292);
var state_23323__$1 = (function (){var statearr_23328 = state_23323;
(statearr_23328[(9)] = inst_23291__$1);

return statearr_23328;
})();
if(inst_23293){
var statearr_23329_23354 = state_23323__$1;
(statearr_23329_23354[(1)] = (5));

} else {
var statearr_23330_23355 = state_23323__$1;
(statearr_23330_23355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (15))){
var inst_23313 = (state_23323[(2)]);
var state_23323__$1 = state_23323;
var statearr_23331_23356 = state_23323__$1;
(statearr_23331_23356[(2)] = inst_23313);

(statearr_23331_23356[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (13))){
var state_23323__$1 = state_23323;
var statearr_23332_23357 = state_23323__$1;
(statearr_23332_23357[(2)] = null);

(statearr_23332_23357[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (6))){
var inst_23288 = (state_23323[(7)]);
var inst_23309 = (inst_23288 > (0));
var state_23323__$1 = state_23323;
if(cljs.core.truth_(inst_23309)){
var statearr_23333_23358 = state_23323__$1;
(statearr_23333_23358[(1)] = (12));

} else {
var statearr_23334_23359 = state_23323__$1;
(statearr_23334_23359[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (3))){
var inst_23321 = (state_23323[(2)]);
var state_23323__$1 = state_23323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23323__$1,inst_23321);
} else {
if((state_val_23324 === (12))){
var inst_23287 = (state_23323[(8)]);
var inst_23311 = cljs.core.vec.call(null,inst_23287);
var state_23323__$1 = state_23323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23323__$1,(15),out,inst_23311);
} else {
if((state_val_23324 === (2))){
var state_23323__$1 = state_23323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23323__$1,(4),ch);
} else {
if((state_val_23324 === (11))){
var inst_23303 = (state_23323[(2)]);
var inst_23304 = (new Array(n));
var inst_23287 = inst_23304;
var inst_23288 = (0);
var state_23323__$1 = (function (){var statearr_23335 = state_23323;
(statearr_23335[(7)] = inst_23288);

(statearr_23335[(10)] = inst_23303);

(statearr_23335[(8)] = inst_23287);

return statearr_23335;
})();
var statearr_23336_23360 = state_23323__$1;
(statearr_23336_23360[(2)] = null);

(statearr_23336_23360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (9))){
var inst_23287 = (state_23323[(8)]);
var inst_23301 = cljs.core.vec.call(null,inst_23287);
var state_23323__$1 = state_23323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23323__$1,(11),out,inst_23301);
} else {
if((state_val_23324 === (5))){
var inst_23296 = (state_23323[(11)]);
var inst_23291 = (state_23323[(9)]);
var inst_23288 = (state_23323[(7)]);
var inst_23287 = (state_23323[(8)]);
var inst_23295 = (inst_23287[inst_23288] = inst_23291);
var inst_23296__$1 = (inst_23288 + (1));
var inst_23297 = (inst_23296__$1 < n);
var state_23323__$1 = (function (){var statearr_23337 = state_23323;
(statearr_23337[(11)] = inst_23296__$1);

(statearr_23337[(12)] = inst_23295);

return statearr_23337;
})();
if(cljs.core.truth_(inst_23297)){
var statearr_23338_23361 = state_23323__$1;
(statearr_23338_23361[(1)] = (8));

} else {
var statearr_23339_23362 = state_23323__$1;
(statearr_23339_23362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (14))){
var inst_23316 = (state_23323[(2)]);
var inst_23317 = cljs.core.async.close_BANG_.call(null,out);
var state_23323__$1 = (function (){var statearr_23341 = state_23323;
(statearr_23341[(13)] = inst_23316);

return statearr_23341;
})();
var statearr_23342_23363 = state_23323__$1;
(statearr_23342_23363[(2)] = inst_23317);

(statearr_23342_23363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (10))){
var inst_23307 = (state_23323[(2)]);
var state_23323__$1 = state_23323;
var statearr_23343_23364 = state_23323__$1;
(statearr_23343_23364[(2)] = inst_23307);

(statearr_23343_23364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23324 === (8))){
var inst_23296 = (state_23323[(11)]);
var inst_23287 = (state_23323[(8)]);
var tmp23340 = inst_23287;
var inst_23287__$1 = tmp23340;
var inst_23288 = inst_23296;
var state_23323__$1 = (function (){var statearr_23344 = state_23323;
(statearr_23344[(7)] = inst_23288);

(statearr_23344[(8)] = inst_23287__$1);

return statearr_23344;
})();
var statearr_23345_23365 = state_23323__$1;
(statearr_23345_23365[(2)] = null);

(statearr_23345_23365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
});})(c__21535__auto___23351,out))
;
return ((function (switch__21444__auto__,c__21535__auto___23351,out){
return (function() {
var cljs$core$async$state_machine__21445__auto__ = null;
var cljs$core$async$state_machine__21445__auto____0 = (function (){
var statearr_23346 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23346[(0)] = cljs$core$async$state_machine__21445__auto__);

(statearr_23346[(1)] = (1));

return statearr_23346;
});
var cljs$core$async$state_machine__21445__auto____1 = (function (state_23323){
while(true){
var ret_value__21446__auto__ = (function (){try{while(true){
var result__21447__auto__ = switch__21444__auto__.call(null,state_23323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21447__auto__;
}
break;
}
}catch (e23347){if((e23347 instanceof Object)){
var ex__21448__auto__ = e23347;
var statearr_23348_23366 = state_23323;
(statearr_23348_23366[(5)] = ex__21448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23367 = state_23323;
state_23323 = G__23367;
continue;
} else {
return ret_value__21446__auto__;
}
break;
}
});
cljs$core$async$state_machine__21445__auto__ = function(state_23323){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21445__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21445__auto____1.call(this,state_23323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21445__auto____0;
cljs$core$async$state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21445__auto____1;
return cljs$core$async$state_machine__21445__auto__;
})()
;})(switch__21444__auto__,c__21535__auto___23351,out))
})();
var state__21537__auto__ = (function (){var statearr_23349 = f__21536__auto__.call(null);
(statearr_23349[(6)] = c__21535__auto___23351);

return statearr_23349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto___23351,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__23369 = arguments.length;
switch (G__23369) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21535__auto___23439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto___23439,out){
return (function (){
var f__21536__auto__ = (function (){var switch__21444__auto__ = ((function (c__21535__auto___23439,out){
return (function (state_23411){
var state_val_23412 = (state_23411[(1)]);
if((state_val_23412 === (7))){
var inst_23407 = (state_23411[(2)]);
var state_23411__$1 = state_23411;
var statearr_23413_23440 = state_23411__$1;
(statearr_23413_23440[(2)] = inst_23407);

(statearr_23413_23440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (1))){
var inst_23370 = [];
var inst_23371 = inst_23370;
var inst_23372 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23411__$1 = (function (){var statearr_23414 = state_23411;
(statearr_23414[(7)] = inst_23371);

(statearr_23414[(8)] = inst_23372);

return statearr_23414;
})();
var statearr_23415_23441 = state_23411__$1;
(statearr_23415_23441[(2)] = null);

(statearr_23415_23441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (4))){
var inst_23375 = (state_23411[(9)]);
var inst_23375__$1 = (state_23411[(2)]);
var inst_23376 = (inst_23375__$1 == null);
var inst_23377 = cljs.core.not.call(null,inst_23376);
var state_23411__$1 = (function (){var statearr_23416 = state_23411;
(statearr_23416[(9)] = inst_23375__$1);

return statearr_23416;
})();
if(inst_23377){
var statearr_23417_23442 = state_23411__$1;
(statearr_23417_23442[(1)] = (5));

} else {
var statearr_23418_23443 = state_23411__$1;
(statearr_23418_23443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (15))){
var inst_23401 = (state_23411[(2)]);
var state_23411__$1 = state_23411;
var statearr_23419_23444 = state_23411__$1;
(statearr_23419_23444[(2)] = inst_23401);

(statearr_23419_23444[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (13))){
var state_23411__$1 = state_23411;
var statearr_23420_23445 = state_23411__$1;
(statearr_23420_23445[(2)] = null);

(statearr_23420_23445[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (6))){
var inst_23371 = (state_23411[(7)]);
var inst_23396 = inst_23371.length;
var inst_23397 = (inst_23396 > (0));
var state_23411__$1 = state_23411;
if(cljs.core.truth_(inst_23397)){
var statearr_23421_23446 = state_23411__$1;
(statearr_23421_23446[(1)] = (12));

} else {
var statearr_23422_23447 = state_23411__$1;
(statearr_23422_23447[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (3))){
var inst_23409 = (state_23411[(2)]);
var state_23411__$1 = state_23411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23411__$1,inst_23409);
} else {
if((state_val_23412 === (12))){
var inst_23371 = (state_23411[(7)]);
var inst_23399 = cljs.core.vec.call(null,inst_23371);
var state_23411__$1 = state_23411;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23411__$1,(15),out,inst_23399);
} else {
if((state_val_23412 === (2))){
var state_23411__$1 = state_23411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23411__$1,(4),ch);
} else {
if((state_val_23412 === (11))){
var inst_23379 = (state_23411[(10)]);
var inst_23375 = (state_23411[(9)]);
var inst_23389 = (state_23411[(2)]);
var inst_23390 = [];
var inst_23391 = inst_23390.push(inst_23375);
var inst_23371 = inst_23390;
var inst_23372 = inst_23379;
var state_23411__$1 = (function (){var statearr_23423 = state_23411;
(statearr_23423[(7)] = inst_23371);

(statearr_23423[(11)] = inst_23389);

(statearr_23423[(12)] = inst_23391);

(statearr_23423[(8)] = inst_23372);

return statearr_23423;
})();
var statearr_23424_23448 = state_23411__$1;
(statearr_23424_23448[(2)] = null);

(statearr_23424_23448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (9))){
var inst_23371 = (state_23411[(7)]);
var inst_23387 = cljs.core.vec.call(null,inst_23371);
var state_23411__$1 = state_23411;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23411__$1,(11),out,inst_23387);
} else {
if((state_val_23412 === (5))){
var inst_23379 = (state_23411[(10)]);
var inst_23375 = (state_23411[(9)]);
var inst_23372 = (state_23411[(8)]);
var inst_23379__$1 = f.call(null,inst_23375);
var inst_23380 = cljs.core._EQ_.call(null,inst_23379__$1,inst_23372);
var inst_23381 = cljs.core.keyword_identical_QMARK_.call(null,inst_23372,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23382 = ((inst_23380) || (inst_23381));
var state_23411__$1 = (function (){var statearr_23425 = state_23411;
(statearr_23425[(10)] = inst_23379__$1);

return statearr_23425;
})();
if(cljs.core.truth_(inst_23382)){
var statearr_23426_23449 = state_23411__$1;
(statearr_23426_23449[(1)] = (8));

} else {
var statearr_23427_23450 = state_23411__$1;
(statearr_23427_23450[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (14))){
var inst_23404 = (state_23411[(2)]);
var inst_23405 = cljs.core.async.close_BANG_.call(null,out);
var state_23411__$1 = (function (){var statearr_23429 = state_23411;
(statearr_23429[(13)] = inst_23404);

return statearr_23429;
})();
var statearr_23430_23451 = state_23411__$1;
(statearr_23430_23451[(2)] = inst_23405);

(statearr_23430_23451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (10))){
var inst_23394 = (state_23411[(2)]);
var state_23411__$1 = state_23411;
var statearr_23431_23452 = state_23411__$1;
(statearr_23431_23452[(2)] = inst_23394);

(statearr_23431_23452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (8))){
var inst_23379 = (state_23411[(10)]);
var inst_23375 = (state_23411[(9)]);
var inst_23371 = (state_23411[(7)]);
var inst_23384 = inst_23371.push(inst_23375);
var tmp23428 = inst_23371;
var inst_23371__$1 = tmp23428;
var inst_23372 = inst_23379;
var state_23411__$1 = (function (){var statearr_23432 = state_23411;
(statearr_23432[(7)] = inst_23371__$1);

(statearr_23432[(14)] = inst_23384);

(statearr_23432[(8)] = inst_23372);

return statearr_23432;
})();
var statearr_23433_23453 = state_23411__$1;
(statearr_23433_23453[(2)] = null);

(statearr_23433_23453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
});})(c__21535__auto___23439,out))
;
return ((function (switch__21444__auto__,c__21535__auto___23439,out){
return (function() {
var cljs$core$async$state_machine__21445__auto__ = null;
var cljs$core$async$state_machine__21445__auto____0 = (function (){
var statearr_23434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23434[(0)] = cljs$core$async$state_machine__21445__auto__);

(statearr_23434[(1)] = (1));

return statearr_23434;
});
var cljs$core$async$state_machine__21445__auto____1 = (function (state_23411){
while(true){
var ret_value__21446__auto__ = (function (){try{while(true){
var result__21447__auto__ = switch__21444__auto__.call(null,state_23411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21447__auto__;
}
break;
}
}catch (e23435){if((e23435 instanceof Object)){
var ex__21448__auto__ = e23435;
var statearr_23436_23454 = state_23411;
(statearr_23436_23454[(5)] = ex__21448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23455 = state_23411;
state_23411 = G__23455;
continue;
} else {
return ret_value__21446__auto__;
}
break;
}
});
cljs$core$async$state_machine__21445__auto__ = function(state_23411){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21445__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21445__auto____1.call(this,state_23411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21445__auto____0;
cljs$core$async$state_machine__21445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21445__auto____1;
return cljs$core$async$state_machine__21445__auto__;
})()
;})(switch__21444__auto__,c__21535__auto___23439,out))
})();
var state__21537__auto__ = (function (){var statearr_23437 = f__21536__auto__.call(null);
(statearr_23437[(6)] = c__21535__auto___23439);

return statearr_23437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto___23439,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
