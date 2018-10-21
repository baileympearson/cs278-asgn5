// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('asgnx.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('asgnx.kvstore');
asgnx.core.cs4278_brightspace = "https://brightspace.vanderbilt.edu/d2l/home/85892";
asgnx.core.instructor_hours = new cljs.core.PersistentArrayMap(null, 2, ["tuesday",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),(8),new cljs.core.Keyword(null,"end","end",-268185958),(10),new cljs.core.Keyword(null,"location","location",1815599388),"the chairs outside of the Wondry"], null),"thursday",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),(8),new cljs.core.Keyword(null,"end","end",-268185958),(10),new cljs.core.Keyword(null,"location","location",1815599388),"the chairs outside of the Wondry"], null)], null);
asgnx.core.words = (function asgnx$core$words(msg){
if(cljs.core.truth_(msg)){
return clojure.string.split.call(null,msg,/ /);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
asgnx.core.cmd = (function asgnx$core$cmd(msg){
return cljs.core.get.call(null,asgnx.core.words.call(null,msg),(0));
});
asgnx.core.args = (function asgnx$core$args(msg){
return cljs.core.vec.call(null,cljs.core.rest.call(null,asgnx.core.words.call(null,msg)));
});
asgnx.core.parsed_msg = (function asgnx$core$parsed_msg(msg){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cmd","cmd",-302931143),asgnx.core.cmd.call(null,msg),new cljs.core.Keyword(null,"args","args",1315556576),asgnx.core.args.call(null,msg)], null);
});
asgnx.core.welcome = (function asgnx$core$welcome(pmsg){
var name = cljs.core.get.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(pmsg),(0));
return ["Welcome ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
});
asgnx.core.homepage = (function asgnx$core$homepage(_){
return asgnx.core.cs4278_brightspace;
});
asgnx.core.format_hour_1 = (function asgnx$core$format_hour_1(h){
if(((cljs.core._EQ_.call(null,h,(0))) || (cljs.core._EQ_.call(null,h,(12))))){
return (12);
} else {
return cljs.core.mod.call(null,h,(12));
}
});
asgnx.core.format_hour = (function asgnx$core$format_hour(h){
var time = asgnx.core.format_hour_1.call(null,h);
if((h < (12))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(time),"am"].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(time),"pm"].join('');
}
});
asgnx.core.formatted_hours = (function asgnx$core$formatted_hours(hours){
return ["from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(asgnx.core.format_hour.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(hours)))," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(asgnx.core.format_hour.call(null,new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(hours)))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(hours))].join('');
});
asgnx.core.office_hours = (function asgnx$core$office_hours(p__16177){
var map__16178 = p__16177;
var map__16178__$1 = ((((!((map__16178 == null)))?(((((map__16178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16178):map__16178);
var args = cljs.core.get.call(null,map__16178__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var cmd = cljs.core.get.call(null,map__16178__$1,new cljs.core.Keyword(null,"cmd","cmd",-302931143));
var hours = cljs.core.get.call(null,asgnx.core.instructor_hours,cljs.core.first.call(null,args));
if((hours == null)){
return "there are no office hours on that day";
} else {
return asgnx.core.formatted_hours.call(null,hours);
}
});
asgnx.core.action_send_msg = (function asgnx$core$action_send_msg(to,msg){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"msg","msg",-1386103444),new cljs.core.Keyword(null,"action","action",-811238024)],[to,msg,new cljs.core.Keyword(null,"send","send",-652151114)]);
});
asgnx.core.action_send_msgs = (function asgnx$core$action_send_msgs(people,msg){
return cljs.core.map.call(null,(function (p1__16180_SHARP_){
return asgnx.core.action_send_msg.call(null,p1__16180_SHARP_,msg);
}),people);
});
asgnx.core.action_insert = (function asgnx$core$action_insert(ks,v){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"v","v",21465059),v], null);
});
asgnx.core.action_inserts = (function asgnx$core$action_inserts(prefix,ks,v){
return cljs.core.map.call(null,(function (p1__16181_SHARP_){
return asgnx.core.action_insert.call(null,cljs.core.conj.call(null,prefix,p1__16181_SHARP_),v);
}),ks);
});
asgnx.core.action_remove = (function asgnx$core$action_remove(ks){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.Keyword(null,"ks","ks",1900203942),ks], null);
});
asgnx.core.experts_register = (function asgnx$core$experts_register(experts,topic,id,info){
return asgnx.core.action_insert.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expert","expert",-816403615),topic,id], null),info);
});
asgnx.core.experts_unregister = (function asgnx$core$experts_unregister(experts,topic,id){
return asgnx.core.action_remove.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expert","expert",-816403615),topic,id], null));
});
asgnx.core.experts_question_msg = (function asgnx$core$experts_question_msg(experts,question_words){
if(cljs.core.empty_QMARK_.call(null,experts)){
return "There are no experts on that topic.";
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,question_words),(1))){
return "You must ask a valid question.";
} else {
return ["Asking ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,experts))," expert(s) for an answer to: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," ",cljs.core.rest.call(null,question_words))),"\""].join('');

}
}
});
asgnx.core.valid_msg = (function asgnx$core$valid_msg(msg){
if(cljs.core._EQ_.call(null,msg,"There are no experts on that topic.")){
return false;
} else {
if(cljs.core._EQ_.call(null,msg,"You must ask a valid question.")){
return false;
} else {
return true;

}
}
});
asgnx.core.ask_experts_helper = (function asgnx$core$ask_experts_helper(experts,msg,user_id){
var send_msgs = asgnx.core.action_send_msgs.call(null,experts,msg);
var send_plus_log = cljs.core.into.call(null,send_msgs,asgnx.core.action_inserts.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msgs","msgs",-1176489773)], null),experts,msg));
var ret = cljs.core.into.call(null,send_plus_log,asgnx.core.action_inserts.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conversations","conversations",-184582239)], null),experts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user","user",1532431356),user_id,new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null)));
return cljs.core.vec.call(null,ret);
});
asgnx.core.ask_experts = (function asgnx$core$ask_experts(experts,p__16182){
var map__16183 = p__16182;
var map__16183__$1 = ((((!((map__16183 == null)))?(((((map__16183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16183):map__16183);
var args = cljs.core.get.call(null,map__16183__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var user_id = cljs.core.get.call(null,map__16183__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
cljs.core.println.call(null,"&&&&&&&&&&&&&&&&&&&&&",experts);

var ret_msg = asgnx.core.experts_question_msg.call(null,experts,args);
var msg = clojure.string.join.call(null," ",cljs.core.rest.call(null,args));
if(cljs.core.not.call(null,asgnx.core.valid_msg.call(null,ret_msg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,ret_msg], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [asgnx.core.ask_experts_helper.call(null,experts,msg,user_id),ret_msg], null);
}
});
asgnx.core.action_inserts.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conversations","conversations",-184582239)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bailey","keaton"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user","user",1532431356),"5037087892",new cljs.core.Keyword(null,"msg","msg",-1386103444),"hello world"], null));
asgnx.core.answer_question = (function asgnx$core$answer_question(conversation,p__16185){
var map__16186 = p__16185;
var map__16186__$1 = ((((!((map__16186 == null)))?(((((map__16186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16186):map__16186);
var args = cljs.core.get.call(null,map__16186__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.empty_QMARK_.call(null,args)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,"You did not provide an answer."], null);
} else {
if(cljs.core.empty_QMARK_.call(null,conversation)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,"You haven't been asked a question."], null);
} else {
var msg = clojure.string.join.call(null," ",args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [asgnx.core.action_send_msg.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(conversation),msg)], null),"Your answer was sent."], null);

}
}
});
asgnx.core.add_expert = (function asgnx$core$add_expert(experts,p__16188){
var map__16189 = p__16188;
var map__16189__$1 = ((((!((map__16189 == null)))?(((((map__16189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16189):map__16189);
var args = cljs.core.get.call(null,map__16189__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var user_id = cljs.core.get.call(null,map__16189__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var topic = cljs.core.get.call(null,args,(0));
var response = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_id)," is now an expert on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(topic),"."].join('');
var actions = asgnx.core.experts_register.call(null,experts,topic,user_id,user_id);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [actions], null),response], null);
});
asgnx.core.stateless = (function asgnx$core$stateless(f){
return (function() { 
var G__16191__delegate = function (_,args){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,f,args)], null);
};
var G__16191 = function (_,var_args){
var args = null;
if (arguments.length > 1) {
var G__16192__i = 0, G__16192__a = new Array(arguments.length -  1);
while (G__16192__i < G__16192__a.length) {G__16192__a[G__16192__i] = arguments[G__16192__i + 1]; ++G__16192__i;}
  args = new cljs.core.IndexedSeq(G__16192__a,0,null);
} 
return G__16191__delegate.call(this,_,args);};
G__16191.cljs$lang$maxFixedArity = 1;
G__16191.cljs$lang$applyTo = (function (arglist__16193){
var _ = cljs.core.first(arglist__16193);
var args = cljs.core.rest(arglist__16193);
return G__16191__delegate(_,args);
});
G__16191.cljs$core$IFn$_invoke$arity$variadic = G__16191__delegate;
return G__16191;
})()
;
});
asgnx.core.routes = new cljs.core.PersistentArrayMap(null, 7, ["default",asgnx.core.stateless.call(null,(function() { 
var G__16194__delegate = function (args){
return "Unknown command.";
};
var G__16194 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16195__i = 0, G__16195__a = new Array(arguments.length -  0);
while (G__16195__i < G__16195__a.length) {G__16195__a[G__16195__i] = arguments[G__16195__i + 0]; ++G__16195__i;}
  args = new cljs.core.IndexedSeq(G__16195__a,0,null);
} 
return G__16194__delegate.call(this,args);};
G__16194.cljs$lang$maxFixedArity = 0;
G__16194.cljs$lang$applyTo = (function (arglist__16196){
var args = cljs.core.seq(arglist__16196);
return G__16194__delegate(args);
});
G__16194.cljs$core$IFn$_invoke$arity$variadic = G__16194__delegate;
return G__16194;
})()
),"welcome",asgnx.core.stateless.call(null,asgnx.core.welcome),"homepage",asgnx.core.stateless.call(null,asgnx.core.homepage),"office",asgnx.core.stateless.call(null,asgnx.core.office_hours),"expert",asgnx.core.add_expert,"ask",asgnx.core.ask_experts,"answer",asgnx.core.answer_question], null);
asgnx.core.experts_on_topic_query = (function asgnx$core$experts_on_topic_query(state_mgr,pmsg){
var vec__16197 = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(pmsg);
var topic = cljs.core.nth.call(null,vec__16197,(0),null);
return asgnx.kvstore.list_BANG_.call(null,state_mgr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expert","expert",-816403615),topic], null));
});
asgnx.core.conversations_for_user_query = (function asgnx$core$conversations_for_user_query(state_mgr,pmsg){
var user_id = new cljs.core.Keyword(null,"user-id","user-id",-206822291).cljs$core$IFn$_invoke$arity$1(pmsg);
return asgnx.kvstore.get_BANG_.call(null,state_mgr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conversations","conversations",-184582239),user_id], null));
});
asgnx.core.queries = new cljs.core.PersistentArrayMap(null, 3, ["expert",asgnx.core.experts_on_topic_query,"ask",asgnx.core.experts_on_topic_query,"answer",asgnx.core.conversations_for_user_query], null);
asgnx.core.read_state = (function asgnx$core$read_state(state_mgr,pmsg){
var c__15840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15840__auto__){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (c__15840__auto__){
return (function (state_16211){
var state_val_16212 = (state_16211[(1)]);
if((state_val_16212 === (1))){
var inst_16201 = (state_16211[(7)]);
var inst_16200 = new cljs.core.Keyword(null,"cmd","cmd",-302931143).cljs$core$IFn$_invoke$arity$1(pmsg);
var inst_16201__$1 = cljs.core.get.call(null,asgnx.core.queries,inst_16200);
var state_16211__$1 = (function (){var statearr_16213 = state_16211;
(statearr_16213[(7)] = inst_16201__$1);

return statearr_16213;
})();
if(cljs.core.truth_(inst_16201__$1)){
var statearr_16214_16222 = state_16211__$1;
(statearr_16214_16222[(1)] = (2));

} else {
var statearr_16215_16223 = state_16211__$1;
(statearr_16215_16223[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16212 === (2))){
var inst_16201 = (state_16211[(7)]);
var inst_16203 = inst_16201.call(null,state_mgr,pmsg);
var state_16211__$1 = state_16211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16211__$1,(5),inst_16203);
} else {
if((state_val_16212 === (3))){
var inst_16207 = cljs.core.PersistentHashMap.EMPTY;
var state_16211__$1 = state_16211;
var statearr_16216_16224 = state_16211__$1;
(statearr_16216_16224[(2)] = inst_16207);

(statearr_16216_16224[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16212 === (4))){
var inst_16209 = (state_16211[(2)]);
var state_16211__$1 = state_16211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16211__$1,inst_16209);
} else {
if((state_val_16212 === (5))){
var inst_16205 = (state_16211[(2)]);
var state_16211__$1 = state_16211;
var statearr_16217_16225 = state_16211__$1;
(statearr_16217_16225[(2)] = inst_16205);

(statearr_16217_16225[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__15840__auto__))
;
return ((function (switch__15817__auto__,c__15840__auto__){
return (function() {
var asgnx$core$read_state_$_state_machine__15818__auto__ = null;
var asgnx$core$read_state_$_state_machine__15818__auto____0 = (function (){
var statearr_16218 = [null,null,null,null,null,null,null,null];
(statearr_16218[(0)] = asgnx$core$read_state_$_state_machine__15818__auto__);

(statearr_16218[(1)] = (1));

return statearr_16218;
});
var asgnx$core$read_state_$_state_machine__15818__auto____1 = (function (state_16211){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_16211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e16219){if((e16219 instanceof Object)){
var ex__15821__auto__ = e16219;
var statearr_16220_16226 = state_16211;
(statearr_16220_16226[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16227 = state_16211;
state_16211 = G__16227;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$core$read_state_$_state_machine__15818__auto__ = function(state_16211){
switch(arguments.length){
case 0:
return asgnx$core$read_state_$_state_machine__15818__auto____0.call(this);
case 1:
return asgnx$core$read_state_$_state_machine__15818__auto____1.call(this,state_16211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$core$read_state_$_state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$core$read_state_$_state_machine__15818__auto____0;
asgnx$core$read_state_$_state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$core$read_state_$_state_machine__15818__auto____1;
return asgnx$core$read_state_$_state_machine__15818__auto__;
})()
;})(switch__15817__auto__,c__15840__auto__))
})();
var state__15842__auto__ = (function (){var statearr_16221 = f__15841__auto__.call(null);
(statearr_16221[(6)] = c__15840__auto__);

return statearr_16221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});})(c__15840__auto__))
);

return c__15840__auto__;
});
asgnx.core.create_router = (function asgnx$core$create_router(routes){
return (function (p__16228){
var map__16229 = p__16228;
var map__16229__$1 = ((((!((map__16229 == null)))?(((((map__16229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16229):map__16229);
var cmd = cljs.core.get.call(null,map__16229__$1,new cljs.core.Keyword(null,"cmd","cmd",-302931143));
var args = cljs.core.get.call(null,map__16229__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var route = cljs.core.get.call(null,routes,cmd);
if((route == null)){
return cljs.core.get.call(null,routes,"default");
} else {
return route;
}
});
});
asgnx.core.output = (function asgnx$core$output(o){
return cljs.core.second.call(null,o);
});
asgnx.core.actions = (function asgnx$core$actions(o){
return cljs.core.first.call(null,o);
});
asgnx.core.invoke = (function asgnx$core$invoke(p__16231,e){
var map__16232 = p__16231;
var map__16232__$1 = ((((!((map__16232 == null)))?(((((map__16232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16232):map__16232);
var system = map__16232__$1;
var effect_handlers = cljs.core.get.call(null,map__16232__$1,new cljs.core.Keyword(null,"effect-handlers","effect-handlers",1338585436));
var c__15840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15840__auto__,map__16232,map__16232__$1,system,effect_handlers){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (c__15840__auto__,map__16232,map__16232__$1,system,effect_handlers){
return (function (state_16246){
var state_val_16247 = (state_16246[(1)]);
if((state_val_16247 === (1))){
var inst_16236 = (state_16246[(7)]);
var inst_16234 = cljs.core.println.call(null,"    Invoke:",e);
var inst_16235 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(e);
var inst_16236__$1 = cljs.core.get.call(null,effect_handlers,inst_16235);
var state_16246__$1 = (function (){var statearr_16248 = state_16246;
(statearr_16248[(8)] = inst_16234);

(statearr_16248[(7)] = inst_16236__$1);

return statearr_16248;
})();
if(cljs.core.truth_(inst_16236__$1)){
var statearr_16249_16258 = state_16246__$1;
(statearr_16249_16258[(1)] = (2));

} else {
var statearr_16250_16259 = state_16246__$1;
(statearr_16250_16259[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (2))){
var inst_16236 = (state_16246[(7)]);
var inst_16238 = cljs.core.println.call(null,"    Invoking:",inst_16236,"with",e);
var inst_16239 = inst_16236.call(null,system,e);
var state_16246__$1 = (function (){var statearr_16251 = state_16246;
(statearr_16251[(9)] = inst_16238);

return statearr_16251;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16246__$1,(5),inst_16239);
} else {
if((state_val_16247 === (3))){
var state_16246__$1 = state_16246;
var statearr_16252_16260 = state_16246__$1;
(statearr_16252_16260[(2)] = null);

(statearr_16252_16260[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (4))){
var inst_16244 = (state_16246[(2)]);
var state_16246__$1 = state_16246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16246__$1,inst_16244);
} else {
if((state_val_16247 === (5))){
var inst_16241 = (state_16246[(2)]);
var state_16246__$1 = state_16246;
var statearr_16253_16261 = state_16246__$1;
(statearr_16253_16261[(2)] = inst_16241);

(statearr_16253_16261[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__15840__auto__,map__16232,map__16232__$1,system,effect_handlers))
;
return ((function (switch__15817__auto__,c__15840__auto__,map__16232,map__16232__$1,system,effect_handlers){
return (function() {
var asgnx$core$invoke_$_state_machine__15818__auto__ = null;
var asgnx$core$invoke_$_state_machine__15818__auto____0 = (function (){
var statearr_16254 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16254[(0)] = asgnx$core$invoke_$_state_machine__15818__auto__);

(statearr_16254[(1)] = (1));

return statearr_16254;
});
var asgnx$core$invoke_$_state_machine__15818__auto____1 = (function (state_16246){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_16246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e16255){if((e16255 instanceof Object)){
var ex__15821__auto__ = e16255;
var statearr_16256_16262 = state_16246;
(statearr_16256_16262[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16263 = state_16246;
state_16246 = G__16263;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$core$invoke_$_state_machine__15818__auto__ = function(state_16246){
switch(arguments.length){
case 0:
return asgnx$core$invoke_$_state_machine__15818__auto____0.call(this);
case 1:
return asgnx$core$invoke_$_state_machine__15818__auto____1.call(this,state_16246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$core$invoke_$_state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$core$invoke_$_state_machine__15818__auto____0;
asgnx$core$invoke_$_state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$core$invoke_$_state_machine__15818__auto____1;
return asgnx$core$invoke_$_state_machine__15818__auto__;
})()
;})(switch__15817__auto__,c__15840__auto__,map__16232,map__16232__$1,system,effect_handlers))
})();
var state__15842__auto__ = (function (){var statearr_16257 = f__15841__auto__.call(null);
(statearr_16257[(6)] = c__15840__auto__);

return statearr_16257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});})(c__15840__auto__,map__16232,map__16232__$1,system,effect_handlers))
);

return c__15840__auto__;
});
asgnx.core.process_actions = (function asgnx$core$process_actions(system,actions){
var c__15840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15840__auto__){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (c__15840__auto__){
return (function (state_16315){
var state_val_16316 = (state_16315[(1)]);
if((state_val_16316 === (7))){
var inst_16272 = (state_16315[(7)]);
var inst_16273 = (state_16315[(8)]);
var inst_16274 = (state_16315[(9)]);
var inst_16266 = (state_16315[(10)]);
var inst_16275 = (state_16315[(11)]);
var inst_16283 = (state_16315[(2)]);
var inst_16284 = cljs.core.swap_BANG_.call(null,inst_16266,cljs.core.conj,inst_16283);
var inst_16285 = (inst_16275 + (1));
var tmp16317 = inst_16272;
var tmp16318 = inst_16273;
var tmp16319 = inst_16274;
var inst_16272__$1 = tmp16317;
var inst_16273__$1 = tmp16318;
var inst_16274__$1 = tmp16319;
var inst_16275__$1 = inst_16285;
var state_16315__$1 = (function (){var statearr_16320 = state_16315;
(statearr_16320[(7)] = inst_16272__$1);

(statearr_16320[(12)] = inst_16284);

(statearr_16320[(8)] = inst_16273__$1);

(statearr_16320[(9)] = inst_16274__$1);

(statearr_16320[(11)] = inst_16275__$1);

return statearr_16320;
})();
var statearr_16321_16344 = state_16315__$1;
(statearr_16321_16344[(2)] = null);

(statearr_16321_16344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (1))){
var inst_16264 = cljs.core.println.call(null,"  Processing actions:",actions);
var inst_16265 = cljs.core.PersistentVector.EMPTY;
var inst_16266 = cljs.core.atom.call(null,inst_16265);
var inst_16271 = cljs.core.seq.call(null,actions);
var inst_16272 = inst_16271;
var inst_16273 = null;
var inst_16274 = (0);
var inst_16275 = (0);
var state_16315__$1 = (function (){var statearr_16322 = state_16315;
(statearr_16322[(7)] = inst_16272);

(statearr_16322[(8)] = inst_16273);

(statearr_16322[(9)] = inst_16274);

(statearr_16322[(13)] = inst_16264);

(statearr_16322[(10)] = inst_16266);

(statearr_16322[(11)] = inst_16275);

return statearr_16322;
})();
var statearr_16323_16345 = state_16315__$1;
(statearr_16323_16345[(2)] = null);

(statearr_16323_16345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (4))){
var inst_16273 = (state_16315[(8)]);
var inst_16275 = (state_16315[(11)]);
var inst_16280 = cljs.core._nth.call(null,inst_16273,inst_16275);
var inst_16281 = asgnx.core.invoke.call(null,system,inst_16280);
var state_16315__$1 = state_16315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16315__$1,(7),inst_16281);
} else {
if((state_val_16316 === (13))){
var inst_16305 = (state_16315[(2)]);
var state_16315__$1 = state_16315;
var statearr_16324_16346 = state_16315__$1;
(statearr_16324_16346[(2)] = inst_16305);

(statearr_16324_16346[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (6))){
var inst_16310 = (state_16315[(2)]);
var state_16315__$1 = state_16315;
var statearr_16325_16347 = state_16315__$1;
(statearr_16325_16347[(2)] = inst_16310);

(statearr_16325_16347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (3))){
var inst_16266 = (state_16315[(10)]);
var inst_16312 = (state_16315[(2)]);
var inst_16313 = cljs.core.deref.call(null,inst_16266);
var state_16315__$1 = (function (){var statearr_16326 = state_16315;
(statearr_16326[(14)] = inst_16312);

return statearr_16326;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16315__$1,inst_16313);
} else {
if((state_val_16316 === (12))){
var inst_16288 = (state_16315[(15)]);
var inst_16297 = cljs.core.first.call(null,inst_16288);
var inst_16298 = asgnx.core.invoke.call(null,system,inst_16297);
var state_16315__$1 = state_16315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16315__$1,(14),inst_16298);
} else {
if((state_val_16316 === (2))){
var inst_16274 = (state_16315[(9)]);
var inst_16275 = (state_16315[(11)]);
var inst_16277 = (inst_16275 < inst_16274);
var inst_16278 = inst_16277;
var state_16315__$1 = state_16315;
if(cljs.core.truth_(inst_16278)){
var statearr_16327_16348 = state_16315__$1;
(statearr_16327_16348[(1)] = (4));

} else {
var statearr_16328_16349 = state_16315__$1;
(statearr_16328_16349[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (11))){
var inst_16288 = (state_16315[(15)]);
var inst_16292 = cljs.core.chunk_first.call(null,inst_16288);
var inst_16293 = cljs.core.chunk_rest.call(null,inst_16288);
var inst_16294 = cljs.core.count.call(null,inst_16292);
var inst_16272 = inst_16293;
var inst_16273 = inst_16292;
var inst_16274 = inst_16294;
var inst_16275 = (0);
var state_16315__$1 = (function (){var statearr_16329 = state_16315;
(statearr_16329[(7)] = inst_16272);

(statearr_16329[(8)] = inst_16273);

(statearr_16329[(9)] = inst_16274);

(statearr_16329[(11)] = inst_16275);

return statearr_16329;
})();
var statearr_16330_16350 = state_16315__$1;
(statearr_16330_16350[(2)] = null);

(statearr_16330_16350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (9))){
var state_16315__$1 = state_16315;
var statearr_16331_16351 = state_16315__$1;
(statearr_16331_16351[(2)] = null);

(statearr_16331_16351[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (5))){
var inst_16288 = (state_16315[(15)]);
var inst_16272 = (state_16315[(7)]);
var inst_16288__$1 = cljs.core.seq.call(null,inst_16272);
var state_16315__$1 = (function (){var statearr_16332 = state_16315;
(statearr_16332[(15)] = inst_16288__$1);

return statearr_16332;
})();
if(inst_16288__$1){
var statearr_16333_16352 = state_16315__$1;
(statearr_16333_16352[(1)] = (8));

} else {
var statearr_16334_16353 = state_16315__$1;
(statearr_16334_16353[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (14))){
var inst_16288 = (state_16315[(15)]);
var inst_16266 = (state_16315[(10)]);
var inst_16300 = (state_16315[(2)]);
var inst_16301 = cljs.core.swap_BANG_.call(null,inst_16266,cljs.core.conj,inst_16300);
var inst_16302 = cljs.core.next.call(null,inst_16288);
var inst_16272 = inst_16302;
var inst_16273 = null;
var inst_16274 = (0);
var inst_16275 = (0);
var state_16315__$1 = (function (){var statearr_16335 = state_16315;
(statearr_16335[(7)] = inst_16272);

(statearr_16335[(16)] = inst_16301);

(statearr_16335[(8)] = inst_16273);

(statearr_16335[(9)] = inst_16274);

(statearr_16335[(11)] = inst_16275);

return statearr_16335;
})();
var statearr_16336_16354 = state_16315__$1;
(statearr_16336_16354[(2)] = null);

(statearr_16336_16354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (10))){
var inst_16308 = (state_16315[(2)]);
var state_16315__$1 = state_16315;
var statearr_16337_16355 = state_16315__$1;
(statearr_16337_16355[(2)] = inst_16308);

(statearr_16337_16355[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (8))){
var inst_16288 = (state_16315[(15)]);
var inst_16290 = cljs.core.chunked_seq_QMARK_.call(null,inst_16288);
var state_16315__$1 = state_16315;
if(inst_16290){
var statearr_16338_16356 = state_16315__$1;
(statearr_16338_16356[(1)] = (11));

} else {
var statearr_16339_16357 = state_16315__$1;
(statearr_16339_16357[(1)] = (12));

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
});})(c__15840__auto__))
;
return ((function (switch__15817__auto__,c__15840__auto__){
return (function() {
var asgnx$core$process_actions_$_state_machine__15818__auto__ = null;
var asgnx$core$process_actions_$_state_machine__15818__auto____0 = (function (){
var statearr_16340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16340[(0)] = asgnx$core$process_actions_$_state_machine__15818__auto__);

(statearr_16340[(1)] = (1));

return statearr_16340;
});
var asgnx$core$process_actions_$_state_machine__15818__auto____1 = (function (state_16315){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_16315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e16341){if((e16341 instanceof Object)){
var ex__15821__auto__ = e16341;
var statearr_16342_16358 = state_16315;
(statearr_16342_16358[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16359 = state_16315;
state_16315 = G__16359;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$core$process_actions_$_state_machine__15818__auto__ = function(state_16315){
switch(arguments.length){
case 0:
return asgnx$core$process_actions_$_state_machine__15818__auto____0.call(this);
case 1:
return asgnx$core$process_actions_$_state_machine__15818__auto____1.call(this,state_16315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$core$process_actions_$_state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$core$process_actions_$_state_machine__15818__auto____0;
asgnx$core$process_actions_$_state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$core$process_actions_$_state_machine__15818__auto____1;
return asgnx$core$process_actions_$_state_machine__15818__auto__;
})()
;})(switch__15817__auto__,c__15840__auto__))
})();
var state__15842__auto__ = (function (){var statearr_16343 = f__15841__auto__.call(null);
(statearr_16343[(6)] = c__15840__auto__);

return statearr_16343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});})(c__15840__auto__))
);

return c__15840__auto__;
});
/**
 * 
 *  This function orchestrates the processing of incoming messages
 *  and glues all of the pieces of the processing pipeline together.
 * 
 *  The basic flow to handle a message is as follows:
 * 
 *  1. Create the router that will be used later to find the
 *     function to handle the message
 *  2. Parse the message
 *  3. Load any saved state that is going to be needed to process
 *     the message (e.g., querying the list of experts, etc.)
 *  4. Find the function that can handle the message
 *  5. Call the handler function with the state from #3 and
 *     the message
 *  6. Run the different actions that the handler returned...these actions
 *     will be bound to different implementations depending on the environemnt
 *     (e.g., in test, the actions aren't going to send real text messages)
 *  7. Return the string response to the message
 * 
 *   
 */
asgnx.core.handle_message = (function asgnx$core$handle_message(p__16360,src,msg){
var map__16361 = p__16360;
var map__16361__$1 = ((((!((map__16361 == null)))?(((((map__16361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16361):map__16361);
var system = map__16361__$1;
var state_mgr = cljs.core.get.call(null,map__16361__$1,new cljs.core.Keyword(null,"state-mgr","state-mgr",-1839931632));
var c__15840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15840__auto__,map__16361,map__16361__$1,system,state_mgr){
return (function (){
var f__15841__auto__ = (function (){var switch__15817__auto__ = ((function (c__15840__auto__,map__16361,map__16361__$1,system,state_mgr){
return (function (state_16392){
var state_val_16393 = (state_16392[(1)]);
if((state_val_16393 === (1))){
var inst_16368 = (state_16392[(7)]);
var inst_16371 = (state_16392[(8)]);
var inst_16363 = cljs.core.println.call(null,"=========================================");
var inst_16364 = cljs.core.println.call(null,"  Processing:\"",msg,"\" from",src);
var inst_16368__$1 = asgnx.core.create_router.call(null,asgnx.core.routes);
var inst_16369 = cljs.core.println.call(null,"  Router:",inst_16368__$1);
var inst_16370 = asgnx.core.parsed_msg.call(null,msg);
var inst_16371__$1 = cljs.core.assoc.call(null,inst_16370,new cljs.core.Keyword(null,"user-id","user-id",-206822291),src);
var inst_16372 = cljs.core.println.call(null,"  Parsed msg:",inst_16371__$1);
var inst_16373 = asgnx.core.read_state.call(null,state_mgr,inst_16371__$1);
var state_16392__$1 = (function (){var statearr_16394 = state_16392;
(statearr_16394[(9)] = inst_16369);

(statearr_16394[(7)] = inst_16368__$1);

(statearr_16394[(10)] = inst_16372);

(statearr_16394[(11)] = inst_16364);

(statearr_16394[(12)] = inst_16363);

(statearr_16394[(8)] = inst_16371__$1);

return statearr_16394;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16392__$1,(2),inst_16373);
} else {
if((state_val_16393 === (2))){
var inst_16368 = (state_16392[(7)]);
var inst_16381 = (state_16392[(13)]);
var inst_16371 = (state_16392[(8)]);
var inst_16375 = (state_16392[(2)]);
var inst_16376 = cljs.core.println.call(null,"  Read state:",inst_16375);
var inst_16377 = inst_16368.call(null,inst_16371);
var inst_16378 = cljs.core.println.call(null,"  Hdlr:",inst_16377);
var inst_16379 = inst_16377.call(null,inst_16375,inst_16371);
var inst_16380 = cljs.core.nth.call(null,inst_16379,(0),null);
var inst_16381__$1 = cljs.core.nth.call(null,inst_16379,(1),null);
var inst_16382 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16383 = [inst_16380,inst_16381__$1];
var inst_16384 = (new cljs.core.PersistentVector(null,2,(5),inst_16382,inst_16383,null));
var inst_16385 = cljs.core.println.call(null,"  Hdlr result:",inst_16384);
var inst_16386 = asgnx.core.process_actions.call(null,system,inst_16380);
var state_16392__$1 = (function (){var statearr_16395 = state_16392;
(statearr_16395[(14)] = inst_16376);

(statearr_16395[(13)] = inst_16381__$1);

(statearr_16395[(15)] = inst_16378);

(statearr_16395[(16)] = inst_16385);

return statearr_16395;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16392__$1,(3),inst_16386);
} else {
if((state_val_16393 === (3))){
var inst_16381 = (state_16392[(13)]);
var inst_16388 = (state_16392[(2)]);
var inst_16389 = cljs.core.println.call(null,"  Action results:",inst_16388);
var inst_16390 = cljs.core.println.call(null,"=========================================");
var state_16392__$1 = (function (){var statearr_16396 = state_16392;
(statearr_16396[(17)] = inst_16389);

(statearr_16396[(18)] = inst_16390);

return statearr_16396;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16392__$1,inst_16381);
} else {
return null;
}
}
}
});})(c__15840__auto__,map__16361,map__16361__$1,system,state_mgr))
;
return ((function (switch__15817__auto__,c__15840__auto__,map__16361,map__16361__$1,system,state_mgr){
return (function() {
var asgnx$core$handle_message_$_state_machine__15818__auto__ = null;
var asgnx$core$handle_message_$_state_machine__15818__auto____0 = (function (){
var statearr_16397 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16397[(0)] = asgnx$core$handle_message_$_state_machine__15818__auto__);

(statearr_16397[(1)] = (1));

return statearr_16397;
});
var asgnx$core$handle_message_$_state_machine__15818__auto____1 = (function (state_16392){
while(true){
var ret_value__15819__auto__ = (function (){try{while(true){
var result__15820__auto__ = switch__15817__auto__.call(null,state_16392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15820__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15820__auto__;
}
break;
}
}catch (e16398){if((e16398 instanceof Object)){
var ex__15821__auto__ = e16398;
var statearr_16399_16401 = state_16392;
(statearr_16399_16401[(5)] = ex__15821__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15819__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16402 = state_16392;
state_16392 = G__16402;
continue;
} else {
return ret_value__15819__auto__;
}
break;
}
});
asgnx$core$handle_message_$_state_machine__15818__auto__ = function(state_16392){
switch(arguments.length){
case 0:
return asgnx$core$handle_message_$_state_machine__15818__auto____0.call(this);
case 1:
return asgnx$core$handle_message_$_state_machine__15818__auto____1.call(this,state_16392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
asgnx$core$handle_message_$_state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$0 = asgnx$core$handle_message_$_state_machine__15818__auto____0;
asgnx$core$handle_message_$_state_machine__15818__auto__.cljs$core$IFn$_invoke$arity$1 = asgnx$core$handle_message_$_state_machine__15818__auto____1;
return asgnx$core$handle_message_$_state_machine__15818__auto__;
})()
;})(switch__15817__auto__,c__15840__auto__,map__16361,map__16361__$1,system,state_mgr))
})();
var state__15842__auto__ = (function (){var statearr_16400 = f__15841__auto__.call(null);
(statearr_16400[(6)] = c__15840__auto__);

return statearr_16400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15842__auto__);
});})(c__15840__auto__,map__16361,map__16361__$1,system,state_mgr))
);

return c__15840__auto__;
});

//# sourceMappingURL=core.js.map
