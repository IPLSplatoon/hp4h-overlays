import{D as A,h as L,j as x,d as C,k as S,B as E,_ as g,x as u,o as d,e as b,q as n,c as p,b as i,m as r,t as v,s as h,y as q,T as R,r as T,F as N,A as V,g as F,i as O,v as G}from"./installCommonHelpers-978315d6.js";import{O as H,F as D,g as s}from"./FittedContent-54e37ee3.js";import{u as j,i as z}from"./activeRoundStore-29c594a9.js";import{d as I}from"./index-aec42e4f.js";import{S as M}from"./ScoreDisplay-26d88731.js";import{_ as P}from"./iconic-mark-d1a3d70a.js";import{B as U}from"./Badge-cdb52396.js";import{u as W,i as J}from"./casterStore-9842a80e.js";const K=nodecg.Replicant("scoreboardData",A),k=L("scoreboard",{state:()=>({scoreboardData:null})}),Q=x([K],k),X=C({name:"Scoreboard",components:{ScoreDisplay:M,OpacitySwapTransition:H,FittedContent:D},setup(){const e=j(),c=S(()=>e.activeRound.teamA),o=S(()=>e.activeRound.teamB),l=k();return{teamA:c,teamB:o,teamAName:S(()=>E(c.value.name)),teamBName:S(()=>E(o.value.name)),scoreboardStore:l,activeRoundStore:e,scoreboardEnter:(t,_)=>{const a=s.timeline({onComplete:_});a.to(t.querySelectorAll(".scoreboard-teams"),{y:0,duration:.5,rotate:0,ease:"power3.out"}),a.to(t.querySelector(".scoreboard-extra"),{opacity:1,duration:.35})},beforeScoreboardEnter:t=>{s.set(t.querySelectorAll(".scoreboard-teams"),{y:-180,x:0,rotate:s.utils.random(-5,5)}),s.set(t.querySelector(".scoreboard-extra"),{opacity:0})},scoreboardLeave:(t,_)=>{const a=s.timeline({onComplete:_});a.to(t.querySelector(".scoreboard-extra"),{opacity:0,duration:.35}),a.to(t.querySelectorAll(".scoreboard-teams"),{x:-400,duration:.5,rotate:s.utils.random(-5,5),ease:"power3.in"})},getContrastingTextColor:I.getContrastingTextColor}}});const Y={key:0,class:"scoreboard-wrapper"},Z={class:"scoreboard-teams"},ee={class:"scoreboard-team-layout"},te={class:"team-display team-alpha"},oe={class:"team-display team-bravo"},ae={class:"scoreboard-extra"},re=i("img",{class:"tournament-logo",src:P},null,-1),se={class:"flavor-text-wrapper"};function ne(e,c,o,l,t,_){const a=u("opacity-swap-transition"),m=u("fitted-content"),f=u("score-display");return d(),b(R,{onEnter:e.scoreboardEnter,onLeave:e.scoreboardLeave,onBeforeEnter:e.beforeScoreboardEnter},{default:n(()=>{var y,w,$,B;return[e.scoreboardStore.scoreboardData.isVisible?(d(),p("div",Y,[i("div",Z,[i("div",ee,[i("div",te,[r(m,{"max-width":300,class:"team-name",align:"right"},{default:n(()=>[r(a,null,{default:n(()=>[(d(),p("div",{key:e.teamAName,class:"team-name-text"},v(e.teamAName),1))]),_:1})]),_:1}),r(f,{color:(y=e.teamA)==null?void 0:y.color,value:(w=e.teamA)==null?void 0:w.score},null,8,["color","value"])]),i("div",oe,[r(m,{"max-width":300,class:"team-name",align:"right"},{default:n(()=>[r(a,null,{default:n(()=>[(d(),p("div",{key:e.teamBName,class:"team-name-text"},v(e.teamBName),1))]),_:1})]),_:1}),r(f,{color:($=e.teamB)==null?void 0:$.color,value:(B=e.teamB)==null?void 0:B.score},null,8,["color","value"])])])]),i("div",ae,[re,i("div",se,[r(a,null,{default:n(()=>[(d(),b(m,{key:e.activeRoundStore.activeRound.match.name,"max-width":290,class:"flavor-text",align:"center"},{default:n(()=>[h(v(e.activeRoundStore.activeRound.match.name),1)]),_:1}))]),_:1})])])])):q("",!0)]}),_:1},8,["onEnter","onLeave","onBeforeEnter"])}const ce=g(X,[["render",ne]]),ie=C({name:"Casters",components:{FittedContent:D,Badge:U},setup(){const e=W(),c=T(!1);return nodecg.listenFor("mainShowCasters",A,()=>{c.value||(c.value=!0,setTimeout(()=>{c.value=!1},15*1e3))}),{casterStore:e,castersVisible:c,castersEnter:(o,l)=>{const t=s.timeline({onComplete:l});t.to(o.querySelector(".casters-content"),{y:"0%",rotate:0,ease:"power3.out",duration:.5}),t.to(o.querySelector(".casters-header"),{opacity:1,duration:.35},"-=0.2")},beforeCastersEnter:o=>{s.set(o.querySelector(".casters-content"),{y:"133%",x:"0%",rotate:s.utils.random(-5,5)}),s.set(o.querySelector(".casters-header"),{opacity:0})},castersLeave:(o,l)=>{const t=s.timeline({onComplete:l});t.to(o.querySelector(".casters-content"),{rotate:s.utils.random(-5,5),x:"125%",ease:"power3.in",duration:.5}),t.to(o.querySelector(".casters-header"),{opacity:0,duration:.35})}}}});const de={key:0,class:"casters-wrapper"},le=i("div",{class:"casters-header"}," Commentators ",-1),me={class:"casters-content"},ue={class:"caster-name"};function pe(e,c,o,l,t,_){const a=u("badge"),m=u("fitted-content");return d(),b(R,{onEnter:e.castersEnter,onLeave:e.castersLeave,onBeforeEnter:e.beforeCastersEnter},{default:n(()=>[e.castersVisible?(d(),p("div",de,[le,i("div",me,[(d(!0),p(N,null,V(e.casterStore.casters,(f,y)=>(d(),p("div",{key:y,class:"caster-item"},[r(m,{"max-width":300},{default:n(()=>[i("span",ue,v(f.name),1),r(a,{class:"caster-pronouns",color:e.$helpers.colors.accentRed},{default:n(()=>[h(v(f.pronouns),1)]),_:2},1032,["color"])]),_:2},1024),r(m,{"max-width":300,class:"caster-twitter"},{default:n(()=>[h(v(f.twitter),1)]),_:2},1024)]))),128))])])):q("",!0)]),_:1},8,["onEnter","onLeave","onBeforeEnter"])}const _e=g(ie,[["render",pe]]),fe=C({name:"Gameplay",components:{Casters:_e,Scoreboard:ce}});function ve(e,c,o,l,t,_){const a=u("scoreboard"),m=u("casters");return d(),p(N,null,[r(a),r(m)],64)}const ye=g(fe,[["render",ve]]);(async()=>{const e=F(ye);O(e),e.use(G()),await J(),await z(),await Q(),e.mount("#app")})();