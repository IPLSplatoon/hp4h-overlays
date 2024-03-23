import{D as R,a as j,u as z,i as K,c as Y}from"./installCommonHelpers-6574289e.js";import{r as A,y as G,w as J,h as N,i as B,d as O,j as u,_ as g,v as w,o as _,c as $,l as S,m as f,e as y,q as b,t as p,b as c,f as U,k as Q,p as X,a as Z,x as ee,T as q,A as te,g as ne,s as oe}from"./storeHelper-4fec82dd.js";import{F as C,O as E,g as v}from"./FittedContent-d9f9a985.js";import{d as V}from"./index-d100c31e.js";import{u as H,i as se}from"./activeRoundStore-09c7395a.js";import{u as D,D as ae,_ as ie}from"./iconic-mark-1d1b5404.js";import{i as ce}from"./casterStore-e2757834.js";import{i as re}from"./donationDataStore-552da11c.js";function L(e,n){return n+1===e.length?0:n+1}function F(e){return e.enabled==null||e.enabled.value}function de(e){const n=A(null),a=A(null),l=()=>{if(e.every(t=>!F(t)))n.value=0,a.value=e[n.value].component;else{n.value=n.value==null?0:L(e,n.value);let t=e[n.value];for(;!F(t);)n.value=L(e,n.value),t=e[n.value];a.value=t.component}};let r;const m=()=>{if(n.value!=null){const t=e[n.value];r=window.setTimeout(()=>{l(),m()},(t.duration??30)*1e3)}};let o=!1;const i=t=>{const d=e.findIndex(s=>s.component===t);if(d===-1){console.warn(`Could not find slide ${t}`);return}const h=e[d];clearTimeout(r),o=!0,n.value=d,a.value=h.component,m()};return l(),m(),G(()=>{clearTimeout(r)}),J(()=>{var t;return n.value==null?!0:(t=e[n.value].enabled)==null?void 0:t.value},t=>{t===!1&&!o?(clearTimeout(r),l(),m()):o=!1}),{activeComponent:a,forceSetSlide:i}}function ue(e){return[e==null?void 0:e.artist,e==null?void 0:e.song].filter(n=>!V.isBlank(n)).join(" - ")}const le=nodecg.Replicant("nowPlaying",R),me=nodecg.Replicant("musicShown",R),T=N("music",{state:()=>({nowPlaying:{},musicShown:null})}),pe=B([le,me],T),_e=O({name:"OmnibarMusic",components:{FittedContent:C,OpacitySwapTransition:E},setup(){const e=T();return{nowPlaying:u(()=>ue(e.nowPlaying))}}});const ve={class:"lower-third-music"};function fe(e,n,a,l,r,m){const o=w("fitted-content"),i=w("opacity-swap-transition");return _(),$("div",ve,[S(i,null,{default:f(()=>[(_(),y(o,{key:e.nowPlaying,"max-width":1200,align:"center"},{default:f(()=>[b(p(e.nowPlaying),1)]),_:1}))]),_:1})])}const he=g(_e,[["render",fe]]),Se=nodecg.Replicant("nextRound",R),k=N("nextRound",{state:()=>({nextRound:null})}),we=B([Se],k),be=O({name:"OmnibarNextRound",components:{FittedContent:C,OpacitySwapTransition:E},setup(){const e=k();return{teamA:u(()=>e.nextRound.teamA),teamB:u(()=>e.nextRound.teamB)}}});const $e={class:"next-round-content-wrapper"},Oe={class:"team-name"},ge=c("span",{class:"versus"},"vs",-1),ye={class:"team-name"};function xe(e,n,a,l,r,m){const o=w("fitted-content"),i=w("opacity-swap-transition");return _(),y(i,null,{default:f(()=>{var t,d;return[(_(),y(o,{key:`${(t=e.teamA)==null?void 0:t.name}_${(d=e.teamB)==null?void 0:d.name}`,"max-width":1200,align:"center"},{default:f(()=>{var h,s;return[c("div",$e,[c("span",Oe,p(e.$helpers.addDots((h=e.teamA)==null?void 0:h.name)),1),ge,c("span",ye,p(e.$helpers.addDots((s=e.teamB)==null?void 0:s.name)),1)])]}),_:1}))]}),_:1})}const Re=g(be,[["render",xe]]),Ce=O({name:"OmnibarActiveRound",components:{FittedContent:C,OpacitySwapTransition:E},setup(){const e=H(),n=u(()=>e.activeRound.teamA),a=u(()=>e.activeRound.teamB);return{teamA:n,teamB:a}}});const De={class:"lower-third-active-round"},Ee={class:"team-name"},Pe={class:"scores"},Ae={class:"team-name"};function Ne(e,n,a,l,r,m){const o=w("fitted-content"),i=w("opacity-swap-transition");return _(),$("div",De,[S(i,null,{default:f(()=>{var t,d;return[(_(),y(o,{key:`${(t=e.teamA)==null?void 0:t.name}_${(d=e.teamB)==null?void 0:d.name}`,"max-width":1200,align:"center"},{default:f(()=>{var h,s,x,M;return[c("span",Ee,p(e.$helpers.addDots((h=e.teamA)==null?void 0:h.name)),1),c("span",Pe,p((s=e.teamA)==null?void 0:s.score)+" - "+p((x=e.teamB)==null?void 0:x.score),1),c("span",Ae,p(e.$helpers.addDots((M=e.teamB)==null?void 0:M.name)),1)]}),_:1}))]}),_:1})])}const Be=g(Ce,[["render",Ne]]),Te=nodecg.Replicant("predictionStore",R),I=N("prediction",{state:()=>({predictionStore:null})}),ke=B([Te],I),Ie=O({name:"OmnibarPredictions",components:{FittedContent:C},setup(){const e=I(),n=u(()=>{var s;return(s=e.predictionStore.currentPrediction)==null?void 0:s.outcomes[0]}),a=u(()=>{var s;return(s=e.predictionStore.currentPrediction)==null?void 0:s.outcomes[1]}),l=u(()=>{var s,x;return(((s=n.value)==null?void 0:s.pointsUsed)??0)+(((x=a.value)==null?void 0:x.pointsUsed)??0)});function r(s){return s===0||!s?0:Math.round(s/l.value*100)}const m=u(()=>{var s;return r((s=n.value)==null?void 0:s.pointsUsed)}),o=u(()=>{var s;return r((s=a.value)==null?void 0:s.pointsUsed)}),i=D(m),t=D(o),d=D(u(()=>{var s;return((s=n.value)==null?void 0:s.pointsUsed)??0})),h=D(u(()=>{var s;return((s=a.value)==null?void 0:s.pointsUsed)??0}));return{addDots:j,firstOutcome:n,secondOutcome:a,firstOutcomePercentage:m,secondOutcomePercentage:o,tweenedFirstOutcomePercentage:i,tweenedSecondOutcomePercentage:t,tweenedFirstOutcomePointsUsed:d,tweenedSecondOutcomePointsUsed:h,padNumber:V.padNumber}}});const Me={class:"lower-third-predictions"},Ue={class:"first-outcome"},Le={class:"subtext"},Fe={class:"total-points"},qe={class:"percentage-text"},Ve={class:"second-outcome"},He={class:"subtext"},We={class:"percentage-text"},je={class:"total-points"};function ze(e,n,a,l,r,m){const o=w("fitted-content");return _(),$("div",Me,[c("div",Ue,[S(o,{"max-width":550,class:"team-name",align:"right"},{default:f(()=>{var i;return[b(p(e.addDots((i=e.firstOutcome)==null?void 0:i.title)),1)]}),_:1}),c("div",Le,[c("span",Fe,p(e.tweenedFirstOutcomePointsUsed)+"p",1),b(" / "),c("span",qe,p(e.padNumber(e.tweenedFirstOutcomePercentage,2))+"%",1)]),c("div",{class:"percentage-bar",style:U({width:`${e.firstOutcomePercentage}%`})},null,4)]),c("div",Ve,[S(o,{"max-width":550,class:"team-name"},{default:f(()=>{var i;return[b(p(e.addDots((i=e.secondOutcome)==null?void 0:i.title)),1)]}),_:1}),c("div",He,[c("span",We,p(e.padNumber(e.tweenedSecondOutcomePercentage,2))+"%",1),b(" / "),c("span",je,p(e.tweenedSecondOutcomePointsUsed)+"p",1)]),c("div",{class:"percentage-bar",style:U({width:`${e.secondOutcomePercentage}%`})},null,4)])])}const Ke=g(Ie,[["render",ze]]),W=e=>(X("data-v-d94f37cc"),e=e(),Z(),e),Ye={class:"event-info"},Ge={key:0},Je=W(()=>c("span",{class:"highlight"},"HP for Heroes",-1)),Qe={key:1,class:"location"},Xe=W(()=>c("span",{class:"highlight"},"!donate",-1)),Ze=O({__name:"OmnibarEventIntro",setup(e){const n=A(!1);return Q(()=>{setTimeout(()=>{n.value=!0},7500)}),(a,l)=>(_(),$("div",Ye,[S(E,{mode:"default"},{default:f(()=>[n.value?(_(),$("span",Qe,[b(" Support the cause - "),Xe])):(_(),$("span",Ge,[b("You are watching "),Je]))]),_:1})]))}});const et=g(Ze,[["__scopeId","data-v-d94f37cc"]]),P=400,tt=O({__name:"OmnibarSlideTitle",props:{text:{}},setup(e){const n=e;let a=0;function l(o,i){if(n.text==null)a=0,v.to(o,{opacity:0,duration:.35,onComplete:i});else{const t=o.querySelector(".text-content");a=Math.min(t.querySelector("div").getBoundingClientRect().width,P),v.to(t,{opacity:0,duration:.35,onComplete:i})}}function r(o){a===0?v.set(o,{opacity:0}):(v.set(o,{width:a}),v.set(o.querySelector(".text-content"),{opacity:0}))}function m(o,i){const t=Math.min(o.querySelector(".text-content > div").getBoundingClientRect().width,P);a===0?(v.set(o,{width:t}),v.to(o,{opacity:1,duration:.35,onComplete:i})):(v.to(o,{duration:.5,ease:"power2.inOut",width:t}),v.to(o.querySelector(".text-content"),{opacity:1,duration:.35,delay:.35,onComplete:i}))}return(o,i)=>(_(),y(q,{css:!1,mode:"out-in",onLeave:l,onEnter:m,onBeforeEnter:r},{default:f(()=>[n.text!=null?(_(),$("div",{key:n.text,class:"omnibar-slide-title"},[S(C,{class:"text-content","max-width":P},{default:f(()=>[b(p(n.text),1)]),_:1})])):ee("",!0)]),_:1}))}});const nt=g(tt,[["__scopeId","data-v-31d5ce8a"]]),ot=O({name:"Omnibar",components:{DonationTotal:ae,OmnibarMusic:he,OmnibarNextRound:Re,OmnibarActiveRound:Be,OmnibarPredictions:Ke,OmnibarEventIntro:et,OmnibarSlideTitle:nt},setup(){const e=H(),n=k(),a=T(),l=I(),r=z(),m=u(()=>{var d;const t=l.predictionStore.currentPrediction;return((d=l.predictionStore.status)==null?void 0:d.predictionsEnabled)&&((t==null?void 0:t.status)==="ACTIVE"||(t==null?void 0:t.status)==="LOCKED")}),o=de([{component:"OmnibarEventIntro",duration:15},{component:"OmnibarMusic",enabled:u(()=>a.musicShown),duration:15},{component:"OmnibarNextRound",enabled:u(()=>n.nextRound.showOnStream)},{component:"OmnibarActiveRound",enabled:u(()=>{var t;return!n.nextRound.showOnStream&&(r.obsData.status!=="CONNECTED"||r.activeBreakScene!=="stages"||!(((t=r.obsData.currentScene)==null?void 0:t.toLowerCase().includes("roster"))??!1))})},{component:"OmnibarPredictions",enabled:m}]);return nodecg.listenFor("showPredictionData",R,()=>{o.forceSetSlide("OmnibarPredictions")}),{slideTitle:u(()=>{switch(o.activeComponent.value){case"OmnibarMusic":return"Music";case"OmnibarNextRound":return`Next: ${n.nextRound.name}`;case"OmnibarActiveRound":return`Now: ${e.activeRound.match.name}`;case"OmnibarPredictions":return"Predictions";default:return null}}),activeSlide:o.activeComponent,slideLeave(t,d){v.to(t,{y:15,opacity:0,ease:"power2.in",duration:.5,onComplete:d})},beforeSlideEnter(t){v.set(t,{y:-15,opacity:0})},slideEnter(t,d){v.to(t,{y:0,opacity:1,ease:"power2.out",duration:.5,onComplete:d})}}}});const st={class:"omnibar-wrapper"},at={class:"omnibar-content"},it={class:"omnibar-logo-wrapper"},ct=c("img",{class:"tournament-logo",src:ie},null,-1),rt={class:"omnibar-slides"},dt={class:"slide-content"};function ut(e,n,a,l,r,m){const o=w("donation-total"),i=w("omnibar-slide-title");return _(),$("div",st,[c("div",at,[c("div",it,[ct,S(o,{"max-width":135})]),c("div",rt,[S(i,{class:"slide-title",text:e.slideTitle},null,8,["text"]),c("div",dt,[S(q,{mode:"out-in",onLeave:e.slideLeave,onEnter:e.slideEnter,onBeforeEnter:e.beforeSlideEnter},{default:f(()=>[(_(),y(te(e.activeSlide)))]),_:1},8,["onLeave","onEnter","onBeforeEnter"])])])])])}const lt=g(ot,[["render",ut]]);(async()=>{const e=ne(lt);K(e),e.use(oe()),await se(),await ce(),await pe(),await ke(),await we(),await Y(),await re(),e.mount("#app")})();
