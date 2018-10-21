// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('camel_snake_kebab.internals.string_separator');
goog.require('cljs.core');

/**
 * @interface
 */
camel_snake_kebab.internals.string_separator.StringSeparator = function(){};

/**
 * : StringSeparator -> String -> NonEmptySeq[String]
 */
camel_snake_kebab.internals.string_separator.split = (function camel_snake_kebab$internals$string_separator$split(this$,s){
if(((!((this$ == null))) && (!((this$.camel_snake_kebab$internals$string_separator$StringSeparator$split$arity$2 == null))))){
return this$.camel_snake_kebab$internals$string_separator$StringSeparator$split$arity$2(this$,s);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (camel_snake_kebab.internals.string_separator.split[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,s);
} else {
var m__4244__auto____$1 = (camel_snake_kebab.internals.string_separator.split["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,s);
} else {
throw cljs.core.missing_protocol.call(null,"StringSeparator.split",this$);
}
}
}
});

RegExp.prototype.camel_snake_kebab$internals$string_separator$StringSeparator$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.camel_snake_kebab$internals$string_separator$StringSeparator$split$arity$2 = (function (this$,s){
var this$__$1 = this;
return cljs.core.seq.call(null,s.split(this$__$1));
});

goog.object.set(camel_snake_kebab.internals.string_separator.StringSeparator,"string",true);

goog.object.set(camel_snake_kebab.internals.string_separator.split,"string",(function (this$,s){
return cljs.core.seq.call(null,s.split(this$));
}));
camel_snake_kebab.internals.string_separator.classify_char = (function camel_snake_kebab$internals$string_separator$classify_char(c){
var G__23748 = c;
switch (G__23748) {
case "0":
case "1":
case "2":
case "3":
case "4":
case "5":
case "6":
case "7":
case "8":
case "9":
return new cljs.core.Keyword(null,"number","number",1570378438);

break;
case "-":
case "_":
case " ":
case "\t":
case "\n":
case "\u000B":
case "\f":
case "\r":
return new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483);

break;
case "a":
case "b":
case "c":
case "d":
case "e":
case "f":
case "g":
case "h":
case "i":
case "j":
case "k":
case "l":
case "m":
case "n":
case "o":
case "p":
case "q":
case "r":
case "s":
case "t":
case "u":
case "v":
case "w":
case "x":
case "y":
case "z":
return new cljs.core.Keyword(null,"lower","lower",1120320821);

break;
case "A":
case "B":
case "C":
case "D":
case "E":
case "F":
case "G":
case "H":
case "I":
case "J":
case "K":
case "L":
case "M":
case "N":
case "O":
case "P":
case "Q":
case "R":
case "S":
case "T":
case "U":
case "V":
case "W":
case "X":
case "Y":
case "Z":
return new cljs.core.Keyword(null,"upper","upper",246243906);

break;
default:
return new cljs.core.Keyword(null,"other","other",995793544);

}
});
camel_snake_kebab.internals.string_separator.generic_split = (function camel_snake_kebab$internals$string_separator$generic_split(ss){
var cs = cljs.core.mapv.call(null,camel_snake_kebab.internals.string_separator.classify_char,ss);
var result = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var start = (0);
var current = (0);
while(true){
var next = (current + (1));
var result_PLUS_new = ((function (result,start,current,next,cs){
return (function (end){
if((end > start)){
return cljs.core.conj_BANG_.call(null,result,ss.substring(start,end));
} else {
return result;
}
});})(result,start,current,next,cs))
;
if((current >= cljs.core.count.call(null,ss))){
var or__3949__auto__ = cljs.core.seq.call(null,cljs.core.persistent_BANG_.call(null,result_PLUS_new.call(null,current)));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.nth.call(null,cs,current),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))){
var G__23753 = result_PLUS_new.call(null,current);
var G__23754 = next;
var G__23755 = next;
result = G__23753;
start = G__23754;
current = G__23755;
continue;
} else {
if((function (){var vec__23750 = cljs.core.subvec.call(null,cs,current);
var a = cljs.core.nth.call(null,vec__23750,(0),null);
var b = cljs.core.nth.call(null,vec__23750,(1),null);
var c = cljs.core.nth.call(null,vec__23750,(2),null);
return ((((cljs.core.not_EQ_.call(null,a,new cljs.core.Keyword(null,"upper","upper",246243906))) && (cljs.core._EQ_.call(null,b,new cljs.core.Keyword(null,"upper","upper",246243906))))) || (((cljs.core.not_EQ_.call(null,a,new cljs.core.Keyword(null,"number","number",1570378438))) && (cljs.core._EQ_.call(null,b,new cljs.core.Keyword(null,"number","number",1570378438))))) || (((cljs.core._EQ_.call(null,a,new cljs.core.Keyword(null,"upper","upper",246243906))) && (cljs.core._EQ_.call(null,b,new cljs.core.Keyword(null,"upper","upper",246243906))) && (cljs.core._EQ_.call(null,c,new cljs.core.Keyword(null,"lower","lower",1120320821))))));
})()){
var G__23756 = result_PLUS_new.call(null,next);
var G__23757 = next;
var G__23758 = next;
result = G__23756;
start = G__23757;
current = G__23758;
continue;
} else {
var G__23759 = result;
var G__23760 = start;
var G__23761 = next;
result = G__23759;
start = G__23760;
current = G__23761;
continue;

}
}
}
break;
}
});
camel_snake_kebab.internals.string_separator.generic_separator = (function (){
if((typeof camel_snake_kebab !== 'undefined') && (typeof camel_snake_kebab.internals !== 'undefined') && (typeof camel_snake_kebab.internals.string_separator !== 'undefined') && (typeof camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator23762 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {camel_snake_kebab.internals.string_separator.StringSeparator}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator23762 = (function (meta23763){
this.meta23763 = meta23763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator23762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23764,meta23763__$1){
var self__ = this;
var _23764__$1 = this;
return (new camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator23762(meta23763__$1));
});

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator23762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23764){
var self__ = this;
var _23764__$1 = this;
return self__.meta23763;
});

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator23762.prototype.camel_snake_kebab$internals$string_separator$StringSeparator$ = cljs.core.PROTOCOL_SENTINEL;

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator23762.prototype.camel_snake_kebab$internals$string_separator$StringSeparator$split$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return camel_snake_kebab.internals.string_separator.generic_split.call(null,s);
});

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator23762.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23763","meta23763",-933530078,null)], null);
});

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator23762.cljs$lang$type = true;

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator23762.cljs$lang$ctorStr = "camel-snake-kebab.internals.string-separator/t_camel_snake_kebab$internals$string_separator23762";

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator23762.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"camel-snake-kebab.internals.string-separator/t_camel_snake_kebab$internals$string_separator23762");
});

/**
 * Positional factory function for camel-snake-kebab.internals.string-separator/t_camel_snake_kebab$internals$string_separator23762.
 */
camel_snake_kebab.internals.string_separator.__GT_t_camel_snake_kebab$internals$string_separator23762 = (function camel_snake_kebab$internals$string_separator$__GT_t_camel_snake_kebab$internals$string_separator23762(meta23763){
return (new camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator23762(meta23763));
});

}

return (new camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator23762(cljs.core.PersistentArrayMap.EMPTY));
})()
;

//# sourceMappingURL=string_separator.js.map
