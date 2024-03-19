import{d as v,r as _,w as L,k as w,_ as h,x as C,o as i,c as l,m as u,q as m,f,y as k,l as E,z as I,b as c,n as b,e as y,t as g,s as $,F as B,A as z,g as R,i as x,v as W}from"./installCommonHelpers-978315d6.js";import{u as T,i as V}from"./casterStore-9842a80e.js";import{O as A,F as S,g as D}from"./FittedContent-54e37ee3.js";import{B as F}from"./Badge-cdb52396.js";import{l as N}from"./imageHelper-2653d14c.js";import{d as O}from"./index-aec42e4f.js";const U=v({name:"ImageLoader",components:{OpacitySwapTransition:A},props:{src:{type:[String,null],default:null},defaultSrc:{type:[String,null],default:null}},setup(e){const a=_(!0),s=_(!1);return L(()=>e.src,async t=>{a.value=!0;try{s.value=await N(t)}catch(o){console.error(o),s.value=!1}finally{a.value=!1}},{immediate:!0}),{doesImageExist:s,imageVisible:w(()=>(s.value||!O.isBlank(e.defaultSrc))&&!a.value)}}});const j={class:"image-loader-wrapper"};function H(e,a,s,t,o,d){const r=C("opacity-swap-transition");return i(),l("div",j,[u(r,null,{default:m(()=>[e.imageVisible?(i(),l("div",{key:0,style:f({backgroundImage:`url('${e.doesImageExist?e.src:e.defaultSrc}')`}),class:"image-loader"},null,4)):k("",!0)]),_:1})])}const q=h(U,[["render",H]]),G={class:"video-loader-wrapper"},M=["src"],P=v({__name:"VideoLoader",props:{src:{}},setup(e){const a=e,s=_(null),t=_(!1),o=r=>{var n;r.source===((n=s.value)==null?void 0:n.contentWindow)&&r.data.action==="new-video-track-added"&&(t.value=!0)},d=()=>t.value=!0;return E(()=>{L(()=>a.src,r=>{var n,p;window.removeEventListener("message",o),(n=s.value)==null||n.removeEventListener("load",d),r!=null&&r.includes("vdo.ninja")?window.addEventListener("message",o):(p=s.value)==null||p.addEventListener("load",d)},{immediate:!0})}),I(()=>{window.removeEventListener("message",o)}),(r,n)=>(i(),l("div",G,[c("iframe",{ref_key:"iframe",ref:s,allow:"autoplay;camera;microphone;fullscreen;picture-in-picture;display-capture;midi;geolocation;",src:r.src,width:"1280",height:"720",class:b({loaded:t.value})},null,10,M)]))}});const J={class:"large-caster-wrapper"},K={class:"details"},Q=v({__name:"LargeCasterDisplay",props:{caster:{},width:{},aspectRatio:{}},setup(e){const a=e,s=w(()=>a.width*a.aspectRatio);return(t,o)=>(i(),l("div",J,[c("div",{class:"large-caster-display",style:f({width:`${a.width}px`})},[c("div",{class:"caster-visual",style:f({height:`${s.value}px`})},[t.$helpers.isBlank(t.caster.videoUrl)?(i(),y(q,{key:0,class:"caster-image",src:t.caster.imageUrl},null,8,["src"])):(i(),y(P,{key:1,src:t.caster.videoUrl,class:"caster-video"},null,8,["src"]))],4),c("div",K,[u(S,{"max-width":365,align:"left",class:"name-wrapper"},{default:m(()=>[c("span",null,g(a.caster.name),1),u(F,{class:"pronouns",color:t.$helpers.colors.accentRed},{default:m(()=>[$(g(a.caster.pronouns),1)]),_:1},8,["color"])]),_:1}),u(S,{"max-width":365,align:"left",class:"twitter-wrapper"},{default:m(()=>[$(g(a.caster.twitter),1)]),_:1})])],4)]))}});const X=h(Q,[["__scopeId","data-v-1c89f1df"]]);function Y(e){window.obsstudio!==void 0?(window.addEventListener("obsSourceActiveChanged",a=>{const s=e();a.detail.active?s.restart(!0):(s.pause(0),s.kill())}),window.addEventListener("obsSourceVisibleChanged",a=>{a.detail.visible&&e().restart(!1)})):(e().delay(1).restart(!0),document.body.ondblclick=()=>{e().delay(1).restart(!0)})}const Z=v({name:"Casters",components:{LargeCasterDisplay:X},setup(){const e=T();return Y(()=>{const a=D.timeline();return a.fromTo(".caster-display",{y:-875},{y:0,stagger:-.25,duration:.75,ease:"power2.out",delay:.5}),a}),{casterStore:e,casterSize:w(()=>{switch(Object.keys(e.casters).length){case 1:return{width:1e3,aspectRatio:9/16,wrapperWidth:1200};case 2:return{width:700,aspectRatio:9/12,wrapperWidth:1500};default:return{width:550,aspectRatio:9/10,wrapperWidth:1800}}})}}});const ee={class:"casters-wrapper"};function ae(e,a,s,t,o,d){const r=C("large-caster-display");return i(),l("div",ee,[c("div",{class:b(["casters-layout",`caster-count_${Object.keys(e.casterStore.casters).length}`]),style:f({width:`${e.casterSize.wrapperWidth}px`})},[(i(!0),l(B,null,z(e.casterStore.casters,(n,p)=>(i(),y(r,{key:`caster_${p}`,caster:n,class:"caster-display",width:e.casterSize.width,"aspect-ratio":e.casterSize.aspectRatio},null,8,["caster","width","aspect-ratio"]))),128))],6)])}const se=h(Z,[["render",ae],["__scopeId","data-v-f6f4b43b"]]);(async()=>{const e=R(se);x(e),e.use(W()),await V(),e.mount("#app")})();