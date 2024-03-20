import{u as yt,b as Zt,i as na,c as ta}from"./installCommonHelpers-49d8da94.js";import{d as Rn,o as L,e as kt,m as xn,u as nn,c as Y,b as B,F as bn,q as an,t as wt,x as aa,T as ea,j as ra,_ as xt,v as en,l as An,g as ia,s as oa}from"./storeHelper-9f994824.js";import{O as sa,F as fa}from"./FittedContent-324eb0dd.js";/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function qn(n,t){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),a.push.apply(a,e)}return a}function l(n){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?qn(Object(a),!0).forEach(function(e){ua(n,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):qn(Object(a)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))})}return n}function fn(n){"@babel/helpers - typeof";return fn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fn(n)}function la(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function Kn(n,t){for(var a=0;a<t.length;a++){var e=t[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function ca(n,t,a){return t&&Kn(n.prototype,t),a&&Kn(n,a),Object.defineProperty(n,"prototype",{writable:!1}),n}function ua(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function Fn(n,t){return da(n)||ga(n,t)||At(n,t)||ba()}function mn(n){return ma(n)||va(n)||At(n)||pa()}function ma(n){if(Array.isArray(n))return _n(n)}function da(n){if(Array.isArray(n))return n}function va(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function ga(n,t){var a=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var e=[],r=!0,o=!1,i,s;try{for(a=a.call(n);!(r=(i=a.next()).done)&&(e.push(i.value),!(t&&e.length===t));r=!0);}catch(f){o=!0,s=f}finally{try{!r&&a.return!=null&&a.return()}finally{if(o)throw s}}return e}}function At(n,t){if(n){if(typeof n=="string")return _n(n,t);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return _n(n,t)}}function _n(n,t){(t==null||t>n.length)&&(t=n.length);for(var a=0,e=new Array(t);a<t;a++)e[a]=n[a];return e}function pa(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ba(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Qn=function(){},zn={},_t={},Ct=null,St={mark:Qn,measure:Qn};try{typeof window<"u"&&(zn=window),typeof document<"u"&&(_t=document),typeof MutationObserver<"u"&&(Ct=MutationObserver),typeof performance<"u"&&(St=performance)}catch{}var ha=zn.navigator||{},Jn=ha.userAgent,Zn=Jn===void 0?"":Jn,R=zn,g=_t,nt=Ct,tn=St;R.document;var I=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",Et=~Zn.indexOf("MSIE")||~Zn.indexOf("Trident/"),E="___FONT_AWESOME___",Cn=16,Ot="fa",Nt="svg-inline--fa",D="data-fa-i2svg",Sn="data-fa-pseudo-element",ya="data-fa-pseudo-element-pending",Dn="data-prefix",$n="data-icon",tt="fontawesome-i2svg",ka="async",wa=["HTML","HEAD","STYLE","SCRIPT"],It=function(){try{return!0}catch{return!1}}(),jn={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},ln={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Pt={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},xa={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Aa=/fa[srltdbk\-\ ]/,Tt="fa-layers-text",_a=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Ca={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},Mt=[1,2,3,4,5,6,7,8,9,10],Sa=Mt.concat([11,12,13,14,15,16,17,18,19,20]),Ea=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],z={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Oa=[].concat(mn(Object.keys(ln)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",z.GROUP,z.SWAP_OPACITY,z.PRIMARY,z.SECONDARY]).concat(Mt.map(function(n){return"".concat(n,"x")})).concat(Sa.map(function(n){return"w-".concat(n)})),Lt=R.FontAwesomeConfig||{};function Na(n){var t=g.querySelector("script["+n+"]");if(t)return t.getAttribute(n)}function Ia(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(g&&typeof g.querySelector=="function"){var Pa=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Pa.forEach(function(n){var t=Fn(n,2),a=t[0],e=t[1],r=Ia(Na(a));r!=null&&(Lt[e]=r)})}var Ta={familyPrefix:Ot,styleDefault:"solid",replacementClass:Nt,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},K=l(l({},Ta),Lt);K.autoReplaceSvg||(K.observeMutations=!1);var m={};Object.keys(K).forEach(function(n){Object.defineProperty(m,n,{enumerable:!0,set:function(a){K[n]=a,rn.forEach(function(e){return e(m)})},get:function(){return K[n]}})});R.FontAwesomeConfig=m;var rn=[];function Ma(n){return rn.push(n),function(){rn.splice(rn.indexOf(n),1)}}var M=Cn,S={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function La(n){if(!(!n||!I)){var t=g.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=n;for(var a=g.head.childNodes,e=null,r=a.length-1;r>-1;r--){var o=a[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(e=o)}return g.head.insertBefore(t,e),n}}var Ra="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function J(){for(var n=12,t="";n-- >0;)t+=Ra[Math.random()*62|0];return t}function G(n){for(var t=[],a=(n||[]).length>>>0;a--;)t[a]=n[a];return t}function Yn(n){return n.classList?G(n.classList):(n.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Rt(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Fa(n){return Object.keys(n||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(Rt(n[a]),'" ')},"").trim()}function dn(n){return Object.keys(n||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(n[a].trim(),";")},"")}function Un(n){return n.size!==S.size||n.x!==S.x||n.y!==S.y||n.rotate!==S.rotate||n.flipX||n.flipY}function za(n){var t=n.transform,a=n.containerWidth,e=n.iconWidth,r={transform:"translate(".concat(a/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),f={transform:"".concat(o," ").concat(i," ").concat(s)},d={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:f,path:d}}function Da(n){var t=n.transform,a=n.width,e=a===void 0?Cn:a,r=n.height,o=r===void 0?Cn:r,i=n.startCentered,s=i===void 0?!1:i,f="";return s&&Et?f+="translate(".concat(t.x/M-e/2,"em, ").concat(t.y/M-o/2,"em) "):s?f+="translate(calc(-50% + ".concat(t.x/M,"em), calc(-50% + ").concat(t.y/M,"em)) "):f+="translate(".concat(t.x/M,"em, ").concat(t.y/M,"em) "),f+="scale(".concat(t.size/M*(t.flipX?-1:1),", ").concat(t.size/M*(t.flipY?-1:1),") "),f+="rotate(".concat(t.rotate,"deg) "),f}var $a=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ft(){var n=Ot,t=Nt,a=m.familyPrefix,e=m.replacementClass,r=$a;if(a!==n||e!==t){var o=new RegExp("\\.".concat(n,"\\-"),"g"),i=new RegExp("\\--".concat(n,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(o,".".concat(a,"-")).replace(i,"--".concat(a,"-")).replace(s,".".concat(e))}return r}var at=!1;function hn(){m.autoAddCss&&!at&&(La(Ft()),at=!0)}var ja={mixout:function(){return{dom:{css:Ft,insertCss:hn}}},hooks:function(){return{beforeDOMElementCreation:function(){hn()},beforeI2svg:function(){hn()}}}},O=R||{};O[E]||(O[E]={});O[E].styles||(O[E].styles={});O[E].hooks||(O[E].hooks={});O[E].shims||(O[E].shims=[]);var C=O[E],zt=[],Ya=function n(){g.removeEventListener("DOMContentLoaded",n),cn=1,zt.map(function(t){return t()})},cn=!1;I&&(cn=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),cn||g.addEventListener("DOMContentLoaded",Ya));function Ua(n){I&&(cn?setTimeout(n,0):zt.push(n))}function Z(n){var t=n.tag,a=n.attributes,e=a===void 0?{}:a,r=n.children,o=r===void 0?[]:r;return typeof n=="string"?Rt(n):"<".concat(t," ").concat(Fa(e),">").concat(o.map(Z).join(""),"</").concat(t,">")}function et(n,t,a){if(n&&n[t]&&n[t][a])return{prefix:t,iconName:a,icon:n[t][a]}}var Wa=function(t,a){return function(e,r,o,i){return t.call(a,e,r,o,i)}},yn=function(t,a,e,r){var o=Object.keys(t),i=o.length,s=r!==void 0?Wa(a,r):a,f,d,c;for(e===void 0?(f=1,c=t[o[0]]):(f=0,c=e);f<i;f++)d=o[f],c=s(c,t[d],d,t);return c};function Ha(n){for(var t=[],a=0,e=n.length;a<e;){var r=n.charCodeAt(a++);if(r>=55296&&r<=56319&&a<e){var o=n.charCodeAt(a++);(o&64512)==56320?t.push(((r&1023)<<10)+(o&1023)+65536):(t.push(r),a--)}else t.push(r)}return t}function En(n){var t=Ha(n);return t.length===1?t[0].toString(16):null}function Ba(n,t){var a=n.length,e=n.charCodeAt(t),r;return e>=55296&&e<=56319&&a>t+1&&(r=n.charCodeAt(t+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function rt(n){return Object.keys(n).reduce(function(t,a){var e=n[a],r=!!e.icon;return r?t[e.iconName]=e.icon:t[a]=e,t},{})}function On(n,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=a.skipHooks,r=e===void 0?!1:e,o=rt(t);typeof C.hooks.addPack=="function"&&!r?C.hooks.addPack(n,rt(t)):C.styles[n]=l(l({},C.styles[n]||{}),o),n==="fas"&&On("fa",t)}var Q=C.styles,Ga=C.shims,Va=Object.values(Pt),Wn=null,Dt={},$t={},jt={},Yt={},Ut={},Xa=Object.keys(jn);function qa(n){return~Oa.indexOf(n)}function Ka(n,t){var a=t.split("-"),e=a[0],r=a.slice(1).join("-");return e===n&&r!==""&&!qa(r)?r:null}var Wt=function(){var t=function(o){return yn(Q,function(i,s,f){return i[f]=yn(s,o,{}),i},{})};Dt=t(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=i})}return r}),$t=t(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=i})}return r}),Ut=t(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(f){r[f]=i}),r});var a="far"in Q||m.autoFetchSvg,e=yn(Ga,function(r,o){var i=o[0],s=o[1],f=o[2];return s==="far"&&!a&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:f}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});jt=e.names,Yt=e.unicodes,Wn=vn(m.styleDefault)};Ma(function(n){Wn=vn(n.styleDefault)});Wt();function Hn(n,t){return(Dt[n]||{})[t]}function Qa(n,t){return($t[n]||{})[t]}function U(n,t){return(Ut[n]||{})[t]}function Ht(n){return jt[n]||{prefix:null,iconName:null}}function Ja(n){var t=Yt[n],a=Hn("fas",n);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function F(){return Wn}var Bn=function(){return{prefix:null,iconName:null,rest:[]}};function vn(n){var t=jn[n],a=ln[n]||ln[t],e=n in C.styles?n:null;return a||e||null}function gn(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,e=a===void 0?!1:a,r=null,o=n.reduce(function(i,s){var f=Ka(m.familyPrefix,s);if(Q[s]?(s=Va.includes(s)?xa[s]:s,r=s,i.prefix=s):Xa.indexOf(s)>-1?(r=s,i.prefix=vn(s)):f?i.iconName=f:s!==m.replacementClass&&i.rest.push(s),!e&&i.prefix&&i.iconName){var d=r==="fa"?Ht(i.iconName):{},c=U(i.prefix,i.iconName);d.prefix&&(r=null),i.iconName=d.iconName||c||i.iconName,i.prefix=d.prefix||i.prefix,i.prefix==="far"&&!Q.far&&Q.fas&&!m.autoFetchSvg&&(i.prefix="fas")}return i},Bn());return(o.prefix==="fa"||r==="fa")&&(o.prefix=F()||"fas"),o}var Za=function(){function n(){la(this,n),this.definitions={}}return ca(n,[{key:"add",value:function(){for(var a=this,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){a.definitions[s]=l(l({},a.definitions[s]||{}),i[s]),On(s,i[s]);var f=Pt[s];f&&On(f,i[s]),Wt()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,f=i.iconName,d=i.icon,c=d[2];a[s]||(a[s]={}),c.length>0&&c.forEach(function(u){typeof u=="string"&&(a[s][u]=d)}),a[s][f]=d}),a}}]),n}(),it=[],W={},H={},ne=Object.keys(H);function te(n,t){var a=t.mixoutsTo;return it=n,W={},Object.keys(H).forEach(function(e){ne.indexOf(e)===-1&&delete H[e]}),it.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(a[i]=r[i]),fn(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){a[i]||(a[i]={}),a[i][s]=r[i][s]})}),e.hooks){var o=e.hooks();Object.keys(o).forEach(function(i){W[i]||(W[i]=[]),W[i].push(o[i])})}e.provides&&e.provides(H)}),a}function Nn(n,t){for(var a=arguments.length,e=new Array(a>2?a-2:0),r=2;r<a;r++)e[r-2]=arguments[r];var o=W[n]||[];return o.forEach(function(i){t=i.apply(null,[t].concat(e))}),t}function $(n){for(var t=arguments.length,a=new Array(t>1?t-1:0),e=1;e<t;e++)a[e-1]=arguments[e];var r=W[n]||[];r.forEach(function(o){o.apply(null,a)})}function N(){var n=arguments[0],t=Array.prototype.slice.call(arguments,1);return H[n]?H[n].apply(null,t):void 0}function In(n){n.prefix==="fa"&&(n.prefix="fas");var t=n.iconName,a=n.prefix||F();if(t)return t=U(a,t)||t,et(Bt.definitions,a,t)||et(C.styles,a,t)}var Bt=new Za,ae=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,$("noAuto")},ee={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return I?($("beforeI2svg",t),N("pseudoElements2svg",t),N("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Ua(function(){ie({autoReplaceSvgRoot:a}),$("watch",t)})}},re={icon:function(t){if(t===null)return null;if(fn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:U(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],e=vn(t[0]);return{prefix:e,iconName:U(e,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(m.familyPrefix,"-"))>-1||t.match(Aa))){var r=gn(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||F(),iconName:U(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var o=F();return{prefix:o,iconName:U(o,t)||t}}}},x={noAuto:ae,config:m,dom:ee,parse:re,library:Bt,findIconDefinition:In,toHtml:Z},ie=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,e=a===void 0?g:a;(Object.keys(C.styles).length>0||m.autoFetchSvg)&&I&&m.autoReplaceSvg&&x.dom.i2svg({node:e})};function pn(n,t){return Object.defineProperty(n,"abstract",{get:t}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(e){return Z(e)})}}),Object.defineProperty(n,"node",{get:function(){if(I){var e=g.createElement("div");return e.innerHTML=n.html,e.children}}}),n}function oe(n){var t=n.children,a=n.main,e=n.mask,r=n.attributes,o=n.styles,i=n.transform;if(Un(i)&&a.found&&!e.found){var s=a.width,f=a.height,d={x:s/f/2,y:.5};r.style=dn(l(l({},o),{},{"transform-origin":"".concat(d.x+i.x/16,"em ").concat(d.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function se(n){var t=n.prefix,a=n.iconName,e=n.children,r=n.attributes,o=n.symbol,i=o===!0?"".concat(t,"-").concat(m.familyPrefix,"-").concat(a):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:i}),children:e}]}]}function Gn(n){var t=n.icons,a=t.main,e=t.mask,r=n.prefix,o=n.iconName,i=n.transform,s=n.symbol,f=n.title,d=n.maskId,c=n.titleId,u=n.extra,v=n.watchable,p=v===void 0?!1:v,h=e.found?e:a,A=h.width,_=h.height,k=r==="fak",y=[m.replacementClass,o?"".concat(m.familyPrefix,"-").concat(o):""].filter(function(j){return u.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(u.classes).join(" "),b={children:[],attributes:l(l({},u.attributes),{},{"data-prefix":r,"data-icon":o,class:y,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(A," ").concat(_)})},P=k&&!~u.classes.indexOf("fa-fw")?{width:"".concat(A/_*16*.0625,"em")}:{};p&&(b.attributes[D]=""),f&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(c||J())},children:[f]}),delete b.attributes.title);var w=l(l({},b),{},{prefix:r,iconName:o,main:a,mask:e,maskId:d,transform:i,symbol:s,styles:l(l({},P),u.styles)}),T=e.found&&a.found?N("generateAbstractMask",w)||{children:[],attributes:{}}:N("generateAbstractIcon",w)||{children:[],attributes:{}},V=T.children,X=T.attributes;return w.children=V,w.attributes=X,s?se(w):oe(w)}function ot(n){var t=n.content,a=n.width,e=n.height,r=n.transform,o=n.title,i=n.extra,s=n.watchable,f=s===void 0?!1:s,d=l(l(l({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});f&&(d[D]="");var c=l({},i.styles);Un(r)&&(c.transform=Da({transform:r,startCentered:!0,width:a,height:e}),c["-webkit-transform"]=c.transform);var u=dn(c);u.length>0&&(d.style=u);var v=[];return v.push({tag:"span",attributes:d,children:[t]}),o&&v.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),v}function fe(n){var t=n.content,a=n.title,e=n.extra,r=l(l(l({},e.attributes),a?{title:a}:{}),{},{class:e.classes.join(" ")}),o=dn(e.styles);o.length>0&&(r.style=o);var i=[];return i.push({tag:"span",attributes:r,children:[t]}),a&&i.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),i}var kn=C.styles;function Pn(n){var t=n[0],a=n[1],e=n.slice(4),r=Fn(e,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(m.familyPrefix,"-").concat(z.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.familyPrefix,"-").concat(z.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(m.familyPrefix,"-").concat(z.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:a,icon:i}}var le={found:!1,width:512,height:512};function ce(n,t){!It&&!m.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(t,'" is missing.'))}function Tn(n,t){var a=t;return t==="fa"&&m.styleDefault!==null&&(t=F()),new Promise(function(e,r){if(N("missingIconAbstract"),a==="fa"){var o=Ht(n)||{};n=o.iconName||n,t=o.prefix||t}if(n&&t&&kn[t]&&kn[t][n]){var i=kn[t][n];return e(Pn(i))}ce(n,t),e(l(l({},le),{},{icon:m.showMissingIcons&&n?N("missingIconAbstract")||{}:{}}))})}var st=function(){},Mn=m.measurePerformance&&tn&&tn.mark&&tn.measure?tn:{mark:st,measure:st},q='FA "6.1.1"',ue=function(t){return Mn.mark("".concat(q," ").concat(t," begins")),function(){return Gt(t)}},Gt=function(t){Mn.mark("".concat(q," ").concat(t," ends")),Mn.measure("".concat(q," ").concat(t),"".concat(q," ").concat(t," begins"),"".concat(q," ").concat(t," ends"))},Vn={begin:ue,end:Gt},on=function(){};function ft(n){var t=n.getAttribute?n.getAttribute(D):null;return typeof t=="string"}function me(n){var t=n.getAttribute?n.getAttribute(Dn):null,a=n.getAttribute?n.getAttribute($n):null;return t&&a}function de(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(m.replacementClass)}function ve(){if(m.autoReplaceSvg===!0)return sn.replace;var n=sn[m.autoReplaceSvg];return n||sn.replace}function ge(n){return g.createElementNS("http://www.w3.org/2000/svg",n)}function pe(n){return g.createElement(n)}function Vt(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,e=a===void 0?n.tag==="svg"?ge:pe:a;if(typeof n=="string")return g.createTextNode(n);var r=e(n.tag);Object.keys(n.attributes||[]).forEach(function(i){r.setAttribute(i,n.attributes[i])});var o=n.children||[];return o.forEach(function(i){r.appendChild(Vt(i,{ceFn:e}))}),r}function be(n){var t=" ".concat(n.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var sn={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(r){a.parentNode.insertBefore(Vt(r),a)}),a.getAttribute(D)===null&&m.keepOriginalSource){var e=g.createComment(be(a));a.parentNode.replaceChild(e,a)}else a.remove()},nest:function(t){var a=t[0],e=t[1];if(~Yn(a).indexOf(m.replacementClass))return sn.replace(t);var r=new RegExp("".concat(m.familyPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var o=e[0].attributes.class.split(" ").reduce(function(s,f){return f===m.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});e[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",o.toNode.join(" "))}var i=e.map(function(s){return Z(s)}).join(`
`);a.setAttribute(D,""),a.innerHTML=i}};function lt(n){n()}function Xt(n,t){var a=typeof t=="function"?t:on;if(n.length===0)a();else{var e=lt;m.mutateApproach===ka&&(e=R.requestAnimationFrame||lt),e(function(){var r=ve(),o=Vn.begin("mutate");n.map(r),o(),a()})}}var Xn=!1;function qt(){Xn=!0}function Ln(){Xn=!1}var un=null;function ct(n){if(nt&&m.observeMutations){var t=n.treeCallback,a=t===void 0?on:t,e=n.nodeCallback,r=e===void 0?on:e,o=n.pseudoElementsCallback,i=o===void 0?on:o,s=n.observeMutationsRoot,f=s===void 0?g:s;un=new nt(function(d){if(!Xn){var c=F();G(d).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!ft(u.addedNodes[0])&&(m.searchPseudoElements&&i(u.target),a(u.target)),u.type==="attributes"&&u.target.parentNode&&m.searchPseudoElements&&i(u.target.parentNode),u.type==="attributes"&&ft(u.target)&&~Ea.indexOf(u.attributeName))if(u.attributeName==="class"&&me(u.target)){var v=gn(Yn(u.target)),p=v.prefix,h=v.iconName;u.target.setAttribute(Dn,p||c),h&&u.target.setAttribute($n,h)}else de(u.target)&&r(u.target)})}}),I&&un.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function he(){un&&un.disconnect()}function ye(n){var t=n.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(e,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(e[i]=s.join(":").trim()),e},{})),a}function ke(n){var t=n.getAttribute("data-prefix"),a=n.getAttribute("data-icon"),e=n.innerText!==void 0?n.innerText.trim():"",r=gn(Yn(n));return r.prefix||(r.prefix=F()),t&&a&&(r.prefix=t,r.iconName=a),r.iconName&&r.prefix||r.prefix&&e.length>0&&(r.iconName=Qa(r.prefix,n.innerText)||Hn(r.prefix,En(n.innerText))),r}function we(n){var t=G(n.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),a=n.getAttribute("title"),e=n.getAttribute("data-fa-title-id");return m.autoA11y&&(a?t["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(e||J()):(t["aria-hidden"]="true",t.focusable="false")),t}function xe(){return{iconName:null,title:null,titleId:null,prefix:null,transform:S,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ut(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=ke(n),e=a.iconName,r=a.prefix,o=a.rest,i=we(n),s=Nn("parseNodeAttributes",{},n),f=t.styleParser?ye(n):[];return l({iconName:e,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:r,transform:S,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:f,attributes:i}},s)}var Ae=C.styles;function Kt(n){var t=m.autoReplaceSvg==="nest"?ut(n,{styleParser:!1}):ut(n);return~t.extra.classes.indexOf(Tt)?N("generateLayersText",n,t):N("generateSvgReplacementMutation",n,t)}function mt(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!I)return Promise.resolve();var a=g.documentElement.classList,e=function(u){return a.add("".concat(tt,"-").concat(u))},r=function(u){return a.remove("".concat(tt,"-").concat(u))},o=m.autoFetchSvg?Object.keys(jn):Object.keys(Ae),i=[".".concat(Tt,":not([").concat(D,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(D,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=G(n.querySelectorAll(i))}catch{}if(s.length>0)e("pending"),r("complete");else return Promise.resolve();var f=Vn.begin("onTree"),d=s.reduce(function(c,u){try{var v=Kt(u);v&&c.push(v)}catch(p){It||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,u){Promise.all(d).then(function(v){Xt(v,function(){e("active"),e("complete"),r("pending"),typeof t=="function"&&t(),f(),c()})}).catch(function(v){f(),u(v)})})}function _e(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Kt(n).then(function(a){a&&Xt([a],t)})}function Ce(n){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(t||{}).icon?t:In(t||{}),r=a.mask;return r&&(r=(r||{}).icon?r:In(r||{})),n(e,l(l({},a),{},{mask:r}))}}var Se=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.transform,r=e===void 0?S:e,o=a.symbol,i=o===void 0?!1:o,s=a.mask,f=s===void 0?null:s,d=a.maskId,c=d===void 0?null:d,u=a.title,v=u===void 0?null:u,p=a.titleId,h=p===void 0?null:p,A=a.classes,_=A===void 0?[]:A,k=a.attributes,y=k===void 0?{}:k,b=a.styles,P=b===void 0?{}:b;if(t){var w=t.prefix,T=t.iconName,V=t.icon;return pn(l({type:"icon"},t),function(){return $("beforeDOMElementCreation",{iconDefinition:t,params:a}),m.autoA11y&&(v?y["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(h||J()):(y["aria-hidden"]="true",y.focusable="false")),Gn({icons:{main:Pn(V),mask:f?Pn(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:w,iconName:T,transform:l(l({},S),r),symbol:i,title:v,maskId:c,titleId:h,extra:{attributes:y,styles:P,classes:_}})})}},Ee={mixout:function(){return{icon:Ce(Se)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=mt,a.nodeCallback=_e,a}}},provides:function(t){t.i2svg=function(a){var e=a.node,r=e===void 0?g:e,o=a.callback,i=o===void 0?function(){}:o;return mt(r,i)},t.generateSvgReplacementMutation=function(a,e){var r=e.iconName,o=e.title,i=e.titleId,s=e.prefix,f=e.transform,d=e.symbol,c=e.mask,u=e.maskId,v=e.extra;return new Promise(function(p,h){Promise.all([Tn(r,s),c.iconName?Tn(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(A){var _=Fn(A,2),k=_[0],y=_[1];p([a,Gn({icons:{main:k,mask:y},prefix:s,iconName:r,transform:f,symbol:d,maskId:u,title:o,titleId:i,extra:v,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(a){var e=a.children,r=a.attributes,o=a.main,i=a.transform,s=a.styles,f=dn(s);f.length>0&&(r.style=f);var d;return Un(i)&&(d=N("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),e.push(d||o.icon),{children:e,attributes:r}}}},Oe={mixout:function(){return{layer:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,o=r===void 0?[]:r;return pn({type:"layer"},function(){$("beforeDOMElementCreation",{assembler:a,params:e});var i=[];return a(function(s){Array.isArray(s)?s.map(function(f){i=i.concat(f.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.familyPrefix,"-layers")].concat(mn(o)).join(" ")},children:i}]})}}}},Ne={mixout:function(){return{counter:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,o=r===void 0?null:r,i=e.classes,s=i===void 0?[]:i,f=e.attributes,d=f===void 0?{}:f,c=e.styles,u=c===void 0?{}:c;return pn({type:"counter",content:a},function(){return $("beforeDOMElementCreation",{content:a,params:e}),fe({content:a.toString(),title:o,extra:{attributes:d,styles:u,classes:["".concat(m.familyPrefix,"-layers-counter")].concat(mn(s))}})})}}}},Ie={mixout:function(){return{text:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,o=r===void 0?S:r,i=e.title,s=i===void 0?null:i,f=e.classes,d=f===void 0?[]:f,c=e.attributes,u=c===void 0?{}:c,v=e.styles,p=v===void 0?{}:v;return pn({type:"text",content:a},function(){return $("beforeDOMElementCreation",{content:a,params:e}),ot({content:a,transform:l(l({},S),o),title:s,extra:{attributes:u,styles:p,classes:["".concat(m.familyPrefix,"-layers-text")].concat(mn(d))}})})}}},provides:function(t){t.generateLayersText=function(a,e){var r=e.title,o=e.transform,i=e.extra,s=null,f=null;if(Et){var d=parseInt(getComputedStyle(a).fontSize,10),c=a.getBoundingClientRect();s=c.width/d,f=c.height/d}return m.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([a,ot({content:a.innerHTML,width:s,height:f,transform:o,title:r,extra:i,watchable:!0})])}}},Pe=new RegExp('"',"ug"),dt=[1105920,1112319];function Te(n){var t=n.replace(Pe,""),a=Ba(t,0),e=a>=dt[0]&&a<=dt[1],r=t.length===2?t[0]===t[1]:!1;return{value:En(r?t[0]:t),isSecondary:e||r}}function vt(n,t){var a="".concat(ya).concat(t.replace(":","-"));return new Promise(function(e,r){if(n.getAttribute(a)!==null)return e();var o=G(n.children),i=o.filter(function(T){return T.getAttribute(Sn)===t})[0],s=R.getComputedStyle(n,t),f=s.getPropertyValue("font-family").match(_a),d=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(i&&!f)return n.removeChild(i),e();if(f&&c!=="none"&&c!==""){var u=s.getPropertyValue("content"),v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?ln[f[2].toLowerCase()]:Ca[d],p=Te(u),h=p.value,A=p.isSecondary,_=f[0].startsWith("FontAwesome"),k=Hn(v,h),y=k;if(_){var b=Ja(h);b.iconName&&b.prefix&&(k=b.iconName,v=b.prefix)}if(k&&!A&&(!i||i.getAttribute(Dn)!==v||i.getAttribute($n)!==y)){n.setAttribute(a,y),i&&n.removeChild(i);var P=xe(),w=P.extra;w.attributes[Sn]=t,Tn(k,v).then(function(T){var V=Gn(l(l({},P),{},{icons:{main:T,mask:Bn()},prefix:v,iconName:y,extra:w,watchable:!0})),X=g.createElement("svg");t==="::before"?n.insertBefore(X,n.firstChild):n.appendChild(X),X.outerHTML=V.map(function(j){return Z(j)}).join(`
`),n.removeAttribute(a),e()}).catch(r)}else e()}else e()})}function Me(n){return Promise.all([vt(n,"::before"),vt(n,"::after")])}function Le(n){return n.parentNode!==document.head&&!~wa.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(Sn)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function gt(n){if(I)return new Promise(function(t,a){var e=G(n.querySelectorAll("*")).filter(Le).map(Me),r=Vn.begin("searchPseudoElements");qt(),Promise.all(e).then(function(){r(),Ln(),t()}).catch(function(){r(),Ln(),a()})})}var Re={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=gt,a}}},provides:function(t){t.pseudoElements2svg=function(a){var e=a.node,r=e===void 0?g:e;m.searchPseudoElements&&gt(r)}}},pt=!1,Fe={mixout:function(){return{dom:{unwatch:function(){qt(),pt=!0}}}},hooks:function(){return{bootstrap:function(){ct(Nn("mutationObserverCallbacks",{}))},noAuto:function(){he()},watch:function(a){var e=a.observeMutationsRoot;pt?Ln():ct(Nn("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},bt=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(e,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return e.flipX=!0,e;if(i&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(i){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},a)},ze={mixout:function(){return{parse:{transform:function(a){return bt(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-transform");return r&&(a.transform=bt(r)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var e=a.main,r=a.transform,o=a.containerWidth,i=a.iconWidth,s={transform:"translate(".concat(o/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),d="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(f," ").concat(d," ").concat(c)},v={transform:"translate(".concat(i/2*-1," -256)")},p={outer:s,inner:u,path:v};return{tag:"g",attributes:l({},p.outer),children:[{tag:"g",attributes:l({},p.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:l(l({},e.icon.attributes),p.path)}]}]}}}},wn={x:0,y:0,width:"100%",height:"100%"};function ht(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||t)&&(n.attributes.fill="black"),n}function De(n){return n.tag==="g"?n.children:[n]}var $e={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-mask"),o=r?gn(r.split(" ").map(function(i){return i.trim()})):Bn();return o.prefix||(o.prefix=F()),a.mask=o,a.maskId=e.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var e=a.children,r=a.attributes,o=a.main,i=a.mask,s=a.maskId,f=a.transform,d=o.width,c=o.icon,u=i.width,v=i.icon,p=za({transform:f,containerWidth:u,iconWidth:d}),h={tag:"rect",attributes:l(l({},wn),{},{fill:"white"})},A=c.children?{children:c.children.map(ht)}:{},_={tag:"g",attributes:l({},p.inner),children:[ht(l({tag:c.tag,attributes:l(l({},c.attributes),p.path)},A))]},k={tag:"g",attributes:l({},p.outer),children:[_]},y="mask-".concat(s||J()),b="clip-".concat(s||J()),P={tag:"mask",attributes:l(l({},wn),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,k]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:De(v)},P]};return e.push(w,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(y,")")},wn)}),{children:e,attributes:r}}}},je={provides:function(t){var a=!1;R.matchMedia&&(a=R.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:l(l({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=l(l({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:l(l({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:l(l({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},i),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:l(l({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:l(l({},i),{},{values:"1;0;0;0;0;1;"})}]}),a||e.push({tag:"path",attributes:l(l({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},Ye={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return a.symbol=o,a}}}},Ue=[ja,Ee,Oe,Ne,Ie,Re,Fe,ze,$e,je,Ye];te(Ue,{mixoutsTo:x});x.noAuto;x.config;var We=x.library;x.dom;x.parse;x.findIconDefinition;x.toHtml;x.icon;x.layer;x.text;x.counter;var Qt={};(function(n){Object.defineProperty(n,"__esModule",{value:!0});var t="fas",a="music",e=512,r=512,o=[127925],i="f001",s="M511.1 367.1c0 44.18-42.98 80-95.1 80s-95.1-35.82-95.1-79.1c0-44.18 42.98-79.1 95.1-79.1c11.28 0 21.95 1.92 32.01 4.898V148.1L192 224l-.0023 208.1C191.1 476.2 149 512 95.1 512S0 476.2 0 432c0-44.18 42.98-79.1 95.1-79.1c11.28 0 21.95 1.92 32 4.898V126.5c0-12.97 10.06-26.63 22.41-30.52l319.1-94.49C472.1 .6615 477.3 0 480 0c17.66 0 31.97 14.34 32 31.99L511.1 367.1z";n.definition={prefix:t,iconName:a,icon:[e,r,o,i,s]},n.faMusic=n.definition,n.prefix=t,n.iconName=a,n.width=e,n.height=r,n.ligatures=o,n.unicode=i,n.svgPathData=s,n.aliases=o})(Qt);const He={key:0,class:"timer"},Be={class:"timer-text"},Ge=B("span",{class:"minutes"},"one minute!",-1),Ve={class:"minutes"},Xe=Rn({__name:"IntermissionMainTimer",setup(n){const t=yt(),a=Zt();return(e,r)=>(L(),kt(ea,{name:"timer"},{default:xn(()=>[nn(t).nextRoundStartTime.isVisible?(L(),Y("div",He,[B("div",Be,[nn(a)<=0?(L(),Y(bn,{key:0},[an(" The next round will start soon! ")],64)):nn(a)===1?(L(),Y(bn,{key:1},[an(" The next round starts in about "),Ge],64)):(L(),Y(bn,{key:2},[an(" The next round starts in about "),B("span",Ve,wt(nn(a))+" minutes...",1)],64))])])):aa("",!0)]),_:1}))}});var Jt={};(function(n){Object.defineProperty(n,"__esModule",{value:!0});var t="fas",a="clock",e=512,r=512,o=[128339,"clock-four"],i="f017",s="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z";n.definition={prefix:t,iconName:a,icon:[e,r,o,i,s]},n.faClock=n.definition,n.prefix=t,n.iconName=a,n.width=e,n.height=r,n.ligatures=o,n.unicode=i,n.svgPathData=s,n.aliases=o})(Jt);We.add(Qt.faMusic,Jt.faClock);const qe=Rn({name:"IntermissionMain",components:{OpacitySwapTransition:sa,IntermissionMainTimer:Xe,FittedContent:fa},setup(){const n=yt();return{mainFlavorText:ra(()=>n.mainFlavorText)}}});const Ke={class:"intermission-main"};function Qe(n,t,a,e,r,o){const i=en("fitted-content"),s=en("opacity-swap-transition"),f=en("intermission-main-timer");return L(),Y("div",Ke,[An(s,null,{default:xn(()=>[(L(),kt(i,{key:n.mainFlavorText,"max-width":1200,class:"flavor-text",align:"center"},{default:xn(()=>[an(wt(n.mainFlavorText),1)]),_:1}))]),_:1}),An(f)])}const Je=xt(qe,[["render",Qe]]),Ze=Rn({name:"Intermission",components:{IntermissionMain:Je}}),nr="/bundles/hp4h-overlays/shared/dist/assets/full-logo-265b599c.png";const tr={class:"intermission-wrapper"},ar={class:"intermission-main-content"},er=B("img",{class:"tournament-logo",src:nr},null,-1),rr={class:"intermission-slides"};function ir(n,t,a,e,r,o){const i=en("intermission-main");return L(),Y("div",tr,[B("div",ar,[er,B("div",rr,[An(i)])])])}const or=xt(Ze,[["render",ir]]);(async()=>{const n=ia(or);na(n),n.use(oa()),await ta(),n.mount("#app")})();
