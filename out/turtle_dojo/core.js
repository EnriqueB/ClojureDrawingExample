// Compiled by ClojureScript 1.8.34 {}
goog.provide('turtle_dojo.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
turtle_dojo.core.setup = (function turtle_dojo$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0),new cljs.core.Keyword(null,"posX","posX",-2114806585),(0),new cljs.core.Keyword(null,"posY","posY",1659413403),(0)], null);
});
turtle_dojo.core.update_state = (function turtle_dojo$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255)),new cljs.core.Keyword(null,"angle","angle",1622094254),(new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + 0.1),new cljs.core.Keyword(null,"posX","posX",-2114806585),(new cljs.core.Keyword(null,"posX","posX",-2114806585).cljs$core$IFn$_invoke$arity$1(state) + 0.1),new cljs.core.Keyword(null,"posY","posY",1659413403),(new cljs.core.Keyword(null,"posY","posY",1659413403).cljs$core$IFn$_invoke$arity$1(state) + 0.1)], null);
});
turtle_dojo.core.draw_state = (function turtle_dojo$core$draw_state(state){
quil.core.background.call(null,(240));

quil.core.translate.call(null,(10),(40),(0));

quil.core.rect.call(null,new cljs.core.Keyword(null,"posX","posX",-2114806585).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"posY","posY",1659413403).cljs$core$IFn$_invoke$arity$1(state),(40),(40));

quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(255),(255));

var angle = new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state);
var x = ((150) * quil.core.cos.call(null,angle));
var y = ((150) * quil.core.sin.call(null,angle));
var tr__7743__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__7743__auto__);

return quil.core.ellipse.call(null,x,y,(100),(100));
}finally {quil.core.pop_matrix.call(null);
}});
turtle_dojo.core.translate_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-10)], null)], null);
turtle_dojo.core.turtle_dojo = (function turtle_dojo$core$turtle_dojo(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"turtle-dojo",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,turtle_dojo.core.update_state))?(function() { 
var G__7819__delegate = function (args){
return cljs.core.apply.call(null,turtle_dojo.core.update_state,args);
};
var G__7819 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7820__i = 0, G__7820__a = new Array(arguments.length -  0);
while (G__7820__i < G__7820__a.length) {G__7820__a[G__7820__i] = arguments[G__7820__i + 0]; ++G__7820__i;}
  args = new cljs.core.IndexedSeq(G__7820__a,0);
} 
return G__7819__delegate.call(this,args);};
G__7819.cljs$lang$maxFixedArity = 0;
G__7819.cljs$lang$applyTo = (function (arglist__7821){
var args = cljs.core.seq(arglist__7821);
return G__7819__delegate(args);
});
G__7819.cljs$core$IFn$_invoke$arity$variadic = G__7819__delegate;
return G__7819;
})()
:turtle_dojo.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,turtle_dojo.core.setup))?(function() { 
var G__7822__delegate = function (args){
return cljs.core.apply.call(null,turtle_dojo.core.setup,args);
};
var G__7822 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7823__i = 0, G__7823__a = new Array(arguments.length -  0);
while (G__7823__i < G__7823__a.length) {G__7823__a[G__7823__i] = arguments[G__7823__i + 0]; ++G__7823__i;}
  args = new cljs.core.IndexedSeq(G__7823__a,0);
} 
return G__7822__delegate.call(this,args);};
G__7822.cljs$lang$maxFixedArity = 0;
G__7822.cljs$lang$applyTo = (function (arglist__7824){
var args = cljs.core.seq(arglist__7824);
return G__7822__delegate(args);
});
G__7822.cljs$core$IFn$_invoke$arity$variadic = G__7822__delegate;
return G__7822;
})()
:turtle_dojo.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,turtle_dojo.core.draw_state))?(function() { 
var G__7825__delegate = function (args){
return cljs.core.apply.call(null,turtle_dojo.core.draw_state,args);
};
var G__7825 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7826__i = 0, G__7826__a = new Array(arguments.length -  0);
while (G__7826__i < G__7826__a.length) {G__7826__a[G__7826__i] = arguments[G__7826__i + 0]; ++G__7826__i;}
  args = new cljs.core.IndexedSeq(G__7826__a,0);
} 
return G__7825__delegate.call(this,args);};
G__7825.cljs$lang$maxFixedArity = 0;
G__7825.cljs$lang$applyTo = (function (arglist__7827){
var args = cljs.core.seq(arglist__7827);
return G__7825__delegate(args);
});
G__7825.cljs$core$IFn$_invoke$arity$variadic = G__7825__delegate;
return G__7825;
})()
:turtle_dojo.core.draw_state));
});
goog.exportSymbol('turtle_dojo.core.turtle_dojo', turtle_dojo.core.turtle_dojo);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__7363__7364__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__7363__7364__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),turtle_dojo.core.turtle_dojo,new cljs.core.Keyword(null,"host-id","host-id",742376279),"turtle-dojo"], null));
}

//# sourceMappingURL=core.js.map