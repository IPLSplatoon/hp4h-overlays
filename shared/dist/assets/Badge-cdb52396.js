import{d as r}from"./index-aec42e4f.js";import{d as s,k as a,J as e,_ as n,o as l,c,K as p,f as d}from"./installCommonHelpers-978315d6.js";const _=s({name:"Badge",props:{color:{type:String,default:"#FFFFFF"}},setup(o){return{textColor:a(()=>r.getContrastingTextColor(o.color,e.white,e.black))}}});function i(o,t,u,f,m,g){return l(),c("span",{class:"badge",style:d({backgroundColor:o.color,color:o.textColor})},[p(o.$slots,"default")],4)}const B=n(_,[["render",i]]);export{B};
