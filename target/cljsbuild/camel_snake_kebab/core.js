// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('camel_snake_kebab.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('camel_snake_kebab.internals.misc');
goog.require('camel_snake_kebab.internals.alter_name');
/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24177 = arguments.length;
var i__4532__auto___24178 = (0);
while(true){
if((i__4532__auto___24178 < len__4531__auto___24177)){
args__4534__auto__.push((arguments[i__4532__auto___24178]));

var G__24179 = (i__4532__auto___24178 + (1));
i__4532__auto___24178 = G__24179;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((4) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4535__auto__);
});

camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,rest);
});

camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq24172){
var G__24173 = cljs.core.first.call(null,seq24172);
var seq24172__$1 = cljs.core.next.call(null,seq24172);
var G__24174 = cljs.core.first.call(null,seq24172__$1);
var seq24172__$2 = cljs.core.next.call(null,seq24172__$1);
var G__24175 = cljs.core.first.call(null,seq24172__$2);
var seq24172__$3 = cljs.core.next.call(null,seq24172__$2);
var G__24176 = cljs.core.first.call(null,seq24172__$3);
var seq24172__$4 = cljs.core.next.call(null,seq24172__$3);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24173,G__24174,G__24175,G__24176,seq24172__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24188 = arguments.length;
var i__4532__auto___24189 = (0);
while(true){
if((i__4532__auto___24189 < len__4531__auto___24188)){
args__4534__auto__.push((arguments[i__4532__auto___24189]));

var G__24190 = (i__4532__auto___24189 + (1));
i__4532__auto___24189 = G__24190;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__24135__auto__,rest__24136__auto__){
var convert_case__24137__auto__ = (function (p1__24134__24138__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__24134__24138__auto__,rest__24136__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__24135__auto__,convert_case__24137__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq24180){
var G__24181 = cljs.core.first.call(null,seq24180);
var seq24180__$1 = cljs.core.next.call(null,seq24180);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24181,seq24180__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24191 = arguments.length;
var i__4532__auto___24192 = (0);
while(true){
if((i__4532__auto___24192 < len__4531__auto___24191)){
args__4534__auto__.push((arguments[i__4532__auto___24192]));

var G__24193 = (i__4532__auto___24192 + (1));
i__4532__auto___24192 = G__24193;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__24140__auto__,rest__24141__auto__){
if(!((s__24140__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24140__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__24140__auto__),rest__24141__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq24182){
var G__24183 = cljs.core.first.call(null,seq24182);
var seq24182__$1 = cljs.core.next.call(null,seq24182);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24183,seq24182__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24194 = arguments.length;
var i__4532__auto___24195 = (0);
while(true){
if((i__4532__auto___24195 < len__4531__auto___24194)){
args__4534__auto__.push((arguments[i__4532__auto___24195]));

var G__24196 = (i__4532__auto___24195 + (1));
i__4532__auto___24195 = G__24196;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24140__auto__,rest__24141__auto__){
if(!((s__24140__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24140__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__24140__auto__),rest__24141__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq24184){
var G__24185 = cljs.core.first.call(null,seq24184);
var seq24184__$1 = cljs.core.next.call(null,seq24184);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24185,seq24184__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24197 = arguments.length;
var i__4532__auto___24198 = (0);
while(true){
if((i__4532__auto___24198 < len__4531__auto___24197)){
args__4534__auto__.push((arguments[i__4532__auto___24198]));

var G__24199 = (i__4532__auto___24198 + (1));
i__4532__auto___24198 = G__24199;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24140__auto__,rest__24141__auto__){
if(!((s__24140__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24140__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__24140__auto__),rest__24141__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq24186){
var G__24187 = cljs.core.first.call(null,seq24186);
var seq24186__$1 = cljs.core.next.call(null,seq24186);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24187,seq24186__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24208 = arguments.length;
var i__4532__auto___24209 = (0);
while(true){
if((i__4532__auto___24209 < len__4531__auto___24208)){
args__4534__auto__.push((arguments[i__4532__auto___24209]));

var G__24210 = (i__4532__auto___24209 + (1));
i__4532__auto___24209 = G__24210;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24135__auto__,rest__24136__auto__){
var convert_case__24137__auto__ = (function (p1__24134__24138__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__24134__24138__auto__,rest__24136__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__24135__auto__,convert_case__24137__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq24200){
var G__24201 = cljs.core.first.call(null,seq24200);
var seq24200__$1 = cljs.core.next.call(null,seq24200);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24201,seq24200__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24211 = arguments.length;
var i__4532__auto___24212 = (0);
while(true){
if((i__4532__auto___24212 < len__4531__auto___24211)){
args__4534__auto__.push((arguments[i__4532__auto___24212]));

var G__24213 = (i__4532__auto___24212 + (1));
i__4532__auto___24212 = G__24213;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__24140__auto__,rest__24141__auto__){
if(!((s__24140__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24140__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__24140__auto__),rest__24141__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq24202){
var G__24203 = cljs.core.first.call(null,seq24202);
var seq24202__$1 = cljs.core.next.call(null,seq24202);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24203,seq24202__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24214 = arguments.length;
var i__4532__auto___24215 = (0);
while(true){
if((i__4532__auto___24215 < len__4531__auto___24214)){
args__4534__auto__.push((arguments[i__4532__auto___24215]));

var G__24216 = (i__4532__auto___24215 + (1));
i__4532__auto___24215 = G__24216;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24140__auto__,rest__24141__auto__){
if(!((s__24140__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24140__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__24140__auto__),rest__24141__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq24204){
var G__24205 = cljs.core.first.call(null,seq24204);
var seq24204__$1 = cljs.core.next.call(null,seq24204);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24205,seq24204__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24217 = arguments.length;
var i__4532__auto___24218 = (0);
while(true){
if((i__4532__auto___24218 < len__4531__auto___24217)){
args__4534__auto__.push((arguments[i__4532__auto___24218]));

var G__24219 = (i__4532__auto___24218 + (1));
i__4532__auto___24218 = G__24219;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24140__auto__,rest__24141__auto__){
if(!((s__24140__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24140__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__24140__auto__),rest__24141__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq24206){
var G__24207 = cljs.core.first.call(null,seq24206);
var seq24206__$1 = cljs.core.next.call(null,seq24206);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24207,seq24206__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24228 = arguments.length;
var i__4532__auto___24229 = (0);
while(true){
if((i__4532__auto___24229 < len__4531__auto___24228)){
args__4534__auto__.push((arguments[i__4532__auto___24229]));

var G__24230 = (i__4532__auto___24229 + (1));
i__4532__auto___24229 = G__24230;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__24135__auto__,rest__24136__auto__){
var convert_case__24137__auto__ = (function (p1__24134__24138__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__24134__24138__auto__,rest__24136__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__24135__auto__,convert_case__24137__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq24220){
var G__24221 = cljs.core.first.call(null,seq24220);
var seq24220__$1 = cljs.core.next.call(null,seq24220);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24221,seq24220__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24231 = arguments.length;
var i__4532__auto___24232 = (0);
while(true){
if((i__4532__auto___24232 < len__4531__auto___24231)){
args__4534__auto__.push((arguments[i__4532__auto___24232]));

var G__24233 = (i__4532__auto___24232 + (1));
i__4532__auto___24232 = G__24233;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__24140__auto__,rest__24141__auto__){
if(!((s__24140__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24140__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__24140__auto__),rest__24141__auto__));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq24222){
var G__24223 = cljs.core.first.call(null,seq24222);
var seq24222__$1 = cljs.core.next.call(null,seq24222);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24223,seq24222__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24234 = arguments.length;
var i__4532__auto___24235 = (0);
while(true){
if((i__4532__auto___24235 < len__4531__auto___24234)){
args__4534__auto__.push((arguments[i__4532__auto___24235]));

var G__24236 = (i__4532__auto___24235 + (1));
i__4532__auto___24235 = G__24236;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24140__auto__,rest__24141__auto__){
if(!((s__24140__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24140__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__24140__auto__),rest__24141__auto__));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq24224){
var G__24225 = cljs.core.first.call(null,seq24224);
var seq24224__$1 = cljs.core.next.call(null,seq24224);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24225,seq24224__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24237 = arguments.length;
var i__4532__auto___24238 = (0);
while(true){
if((i__4532__auto___24238 < len__4531__auto___24237)){
args__4534__auto__.push((arguments[i__4532__auto___24238]));

var G__24239 = (i__4532__auto___24238 + (1));
i__4532__auto___24238 = G__24239;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24140__auto__,rest__24141__auto__){
if(!((s__24140__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24140__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__24140__auto__),rest__24141__auto__));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq24226){
var G__24227 = cljs.core.first.call(null,seq24226);
var seq24226__$1 = cljs.core.next.call(null,seq24226);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24227,seq24226__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24248 = arguments.length;
var i__4532__auto___24249 = (0);
while(true){
if((i__4532__auto___24249 < len__4531__auto___24248)){
args__4534__auto__.push((arguments[i__4532__auto___24249]));

var G__24250 = (i__4532__auto___24249 + (1));
i__4532__auto___24249 = G__24250;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__24135__auto__,rest__24136__auto__){
var convert_case__24137__auto__ = (function (p1__24134__24138__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__24134__24138__auto__,rest__24136__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__24135__auto__,convert_case__24137__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq24240){
var G__24241 = cljs.core.first.call(null,seq24240);
var seq24240__$1 = cljs.core.next.call(null,seq24240);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24241,seq24240__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24251 = arguments.length;
var i__4532__auto___24252 = (0);
while(true){
if((i__4532__auto___24252 < len__4531__auto___24251)){
args__4534__auto__.push((arguments[i__4532__auto___24252]));

var G__24253 = (i__4532__auto___24252 + (1));
i__4532__auto___24252 = G__24253;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__24140__auto__,rest__24141__auto__){
if(!((s__24140__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24140__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__24140__auto__),rest__24141__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq24242){
var G__24243 = cljs.core.first.call(null,seq24242);
var seq24242__$1 = cljs.core.next.call(null,seq24242);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24243,seq24242__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24254 = arguments.length;
var i__4532__auto___24255 = (0);
while(true){
if((i__4532__auto___24255 < len__4531__auto___24254)){
args__4534__auto__.push((arguments[i__4532__auto___24255]));

var G__24256 = (i__4532__auto___24255 + (1));
i__4532__auto___24255 = G__24256;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__24140__auto__,rest__24141__auto__){
if(!((s__24140__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24140__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__24140__auto__),rest__24141__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq24244){
var G__24245 = cljs.core.first.call(null,seq24244);
var seq24244__$1 = cljs.core.next.call(null,seq24244);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24245,seq24244__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24257 = arguments.length;
var i__4532__auto___24258 = (0);
while(true){
if((i__4532__auto___24258 < len__4531__auto___24257)){
args__4534__auto__.push((arguments[i__4532__auto___24258]));

var G__24259 = (i__4532__auto___24258 + (1));
i__4532__auto___24258 = G__24259;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__24140__auto__,rest__24141__auto__){
if(!((s__24140__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24140__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__24140__auto__),rest__24141__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq24246){
var G__24247 = cljs.core.first.call(null,seq24246);
var seq24246__$1 = cljs.core.next.call(null,seq24246);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24247,seq24246__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24268 = arguments.length;
var i__4532__auto___24269 = (0);
while(true){
if((i__4532__auto___24269 < len__4531__auto___24268)){
args__4534__auto__.push((arguments[i__4532__auto___24269]));

var G__24270 = (i__4532__auto___24269 + (1));
i__4532__auto___24269 = G__24270;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24135__auto__,rest__24136__auto__){
var convert_case__24137__auto__ = (function (p1__24134__24138__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__24134__24138__auto__,rest__24136__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__24135__auto__,convert_case__24137__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq24260){
var G__24261 = cljs.core.first.call(null,seq24260);
var seq24260__$1 = cljs.core.next.call(null,seq24260);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24261,seq24260__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24271 = arguments.length;
var i__4532__auto___24272 = (0);
while(true){
if((i__4532__auto___24272 < len__4531__auto___24271)){
args__4534__auto__.push((arguments[i__4532__auto___24272]));

var G__24273 = (i__4532__auto___24272 + (1));
i__4532__auto___24272 = G__24273;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__24140__auto__,rest__24141__auto__){
if(!((s__24140__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24140__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__24140__auto__),rest__24141__auto__));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq24262){
var G__24263 = cljs.core.first.call(null,seq24262);
var seq24262__$1 = cljs.core.next.call(null,seq24262);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24263,seq24262__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24274 = arguments.length;
var i__4532__auto___24275 = (0);
while(true){
if((i__4532__auto___24275 < len__4531__auto___24274)){
args__4534__auto__.push((arguments[i__4532__auto___24275]));

var G__24276 = (i__4532__auto___24275 + (1));
i__4532__auto___24275 = G__24276;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24140__auto__,rest__24141__auto__){
if(!((s__24140__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24140__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__24140__auto__),rest__24141__auto__));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq24264){
var G__24265 = cljs.core.first.call(null,seq24264);
var seq24264__$1 = cljs.core.next.call(null,seq24264);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24265,seq24264__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24277 = arguments.length;
var i__4532__auto___24278 = (0);
while(true){
if((i__4532__auto___24278 < len__4531__auto___24277)){
args__4534__auto__.push((arguments[i__4532__auto___24278]));

var G__24279 = (i__4532__auto___24278 + (1));
i__4532__auto___24278 = G__24279;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24140__auto__,rest__24141__auto__){
if(!((s__24140__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24140__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__24140__auto__),rest__24141__auto__));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq24266){
var G__24267 = cljs.core.first.call(null,seq24266);
var seq24266__$1 = cljs.core.next.call(null,seq24266);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24267,seq24266__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24288 = arguments.length;
var i__4532__auto___24289 = (0);
while(true){
if((i__4532__auto___24289 < len__4531__auto___24288)){
args__4534__auto__.push((arguments[i__4532__auto___24289]));

var G__24290 = (i__4532__auto___24289 + (1));
i__4532__auto___24289 = G__24290;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24135__auto__,rest__24136__auto__){
var convert_case__24137__auto__ = (function (p1__24134__24138__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__24134__24138__auto__,rest__24136__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__24135__auto__,convert_case__24137__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq24280){
var G__24281 = cljs.core.first.call(null,seq24280);
var seq24280__$1 = cljs.core.next.call(null,seq24280);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24281,seq24280__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24291 = arguments.length;
var i__4532__auto___24292 = (0);
while(true){
if((i__4532__auto___24292 < len__4531__auto___24291)){
args__4534__auto__.push((arguments[i__4532__auto___24292]));

var G__24293 = (i__4532__auto___24292 + (1));
i__4532__auto___24292 = G__24293;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__24140__auto__,rest__24141__auto__){
if(!((s__24140__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24140__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__24140__auto__),rest__24141__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq24282){
var G__24283 = cljs.core.first.call(null,seq24282);
var seq24282__$1 = cljs.core.next.call(null,seq24282);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24283,seq24282__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24294 = arguments.length;
var i__4532__auto___24295 = (0);
while(true){
if((i__4532__auto___24295 < len__4531__auto___24294)){
args__4534__auto__.push((arguments[i__4532__auto___24295]));

var G__24296 = (i__4532__auto___24295 + (1));
i__4532__auto___24295 = G__24296;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24140__auto__,rest__24141__auto__){
if(!((s__24140__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24140__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__24140__auto__),rest__24141__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq24284){
var G__24285 = cljs.core.first.call(null,seq24284);
var seq24284__$1 = cljs.core.next.call(null,seq24284);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24285,seq24284__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24297 = arguments.length;
var i__4532__auto___24298 = (0);
while(true){
if((i__4532__auto___24298 < len__4531__auto___24297)){
args__4534__auto__.push((arguments[i__4532__auto___24298]));

var G__24299 = (i__4532__auto___24298 + (1));
i__4532__auto___24298 = G__24299;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24140__auto__,rest__24141__auto__){
if(!((s__24140__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24140__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__24140__auto__),rest__24141__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq24286){
var G__24287 = cljs.core.first.call(null,seq24286);
var seq24286__$1 = cljs.core.next.call(null,seq24286);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24287,seq24286__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24308 = arguments.length;
var i__4532__auto___24309 = (0);
while(true){
if((i__4532__auto___24309 < len__4531__auto___24308)){
args__4534__auto__.push((arguments[i__4532__auto___24309]));

var G__24310 = (i__4532__auto___24309 + (1));
i__4532__auto___24309 = G__24310;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24135__auto__,rest__24136__auto__){
var convert_case__24137__auto__ = (function (p1__24134__24138__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__24134__24138__auto__,rest__24136__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__24135__auto__,convert_case__24137__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq24300){
var G__24301 = cljs.core.first.call(null,seq24300);
var seq24300__$1 = cljs.core.next.call(null,seq24300);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24301,seq24300__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24311 = arguments.length;
var i__4532__auto___24312 = (0);
while(true){
if((i__4532__auto___24312 < len__4531__auto___24311)){
args__4534__auto__.push((arguments[i__4532__auto___24312]));

var G__24313 = (i__4532__auto___24312 + (1));
i__4532__auto___24312 = G__24313;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__24140__auto__,rest__24141__auto__){
if(!((s__24140__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24140__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__24140__auto__),rest__24141__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq24302){
var G__24303 = cljs.core.first.call(null,seq24302);
var seq24302__$1 = cljs.core.next.call(null,seq24302);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24303,seq24302__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24314 = arguments.length;
var i__4532__auto___24315 = (0);
while(true){
if((i__4532__auto___24315 < len__4531__auto___24314)){
args__4534__auto__.push((arguments[i__4532__auto___24315]));

var G__24316 = (i__4532__auto___24315 + (1));
i__4532__auto___24315 = G__24316;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24140__auto__,rest__24141__auto__){
if(!((s__24140__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24140__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__24140__auto__),rest__24141__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq24304){
var G__24305 = cljs.core.first.call(null,seq24304);
var seq24304__$1 = cljs.core.next.call(null,seq24304);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24305,seq24304__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24317 = arguments.length;
var i__4532__auto___24318 = (0);
while(true){
if((i__4532__auto___24318 < len__4531__auto___24317)){
args__4534__auto__.push((arguments[i__4532__auto___24318]));

var G__24319 = (i__4532__auto___24318 + (1));
i__4532__auto___24318 = G__24319;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24140__auto__,rest__24141__auto__){
if(!((s__24140__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24140__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__24140__auto__),rest__24141__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq24306){
var G__24307 = cljs.core.first.call(null,seq24306);
var seq24306__$1 = cljs.core.next.call(null,seq24306);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24307,seq24306__$1);
});


//# sourceMappingURL=core.js.map
