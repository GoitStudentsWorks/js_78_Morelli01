function n(n,t,e,i){Object.defineProperty(n,t,{get:e,set:i,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;t.register("eWcFN",(function(n,e){var i=t("3QJKV"),o=t("e1IEg");new(0,i.default)(".splide",{type:"slide",rewind:!0,height:"350px",width:"900px",keyboard:"global",arrows:!0,grid:{dimensions:[[1,4]],gap:{row:"5px",col:"5px"}},breakpoints:{767:{direction:"ttb",perPage:2,perMove:1,height:"650px",grid:!1,pagination:!1},1280:{height:"300px",width:"700px"}}}).mount({Grid:o.Grid});const r=document.querySelector(".team-modal-link"),u=document.querySelector(".data-modal-team"),c=document.querySelector(".modal-team-close-btn");function s(n){"Escape"===n.code&&(a(),document.removeEventListener("keydown",s))}function a(){u.classList.toggle("open"),document.body.classList.toggle("body--modal-open")}r.addEventListener("click",(function(n){n.preventDefault(),u.classList.toggle("open"),document.addEventListener("keydown",s)})),c.addEventListener("click",a),u.addEventListener("click",(function(n){n.target.classList.contains("popup")&&a()}))})),t.register("3QJKV",(function(t,e){function i(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}n(t.exports,"default",(function(){return Qt}));
/*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
var o="(prefers-reduced-motion: reduce)",r={CREATED:1,MOUNTED:2,IDLE:3,MOVING:4,SCROLLING:5,DRAGGING:6,DESTROYED:7};function u(n){n.length=0}function c(n,t,e){return Array.prototype.slice.call(n,t,e)}function s(n){return n.bind.apply(n,[null].concat(c(arguments,1)))}var a=setTimeout,l=function(){};function f(n){return requestAnimationFrame(n)}function d(n,t){return typeof t===n}function p(n){return!y(n)&&d("object",n)}var v=Array.isArray,g=s(d,"function"),h=s(d,"string"),m=s(d,"undefined");function y(n){return null===n}function b(n){try{return n instanceof(n.ownerDocument.defaultView||window).HTMLElement}catch(n){return!1}}function w(n){return v(n)?n:[n]}function E(n,t){w(n).forEach(t)}function _(n,t){return n.indexOf(t)>-1}function x(n,t){return n.push.apply(n,w(t)),n}function S(n,t,e){n&&E(t,(function(t){t&&n.classList[e?"add":"remove"](t)}))}function k(n,t){S(n,h(t)?t.split(" "):t,!0)}function C(n,t){E(t,n.appendChild.bind(n))}function L(n,t){E(n,(function(n){var e=(t||n).parentNode;e&&e.insertBefore(n,t)}))}function P(n,t){return b(n)&&(n.msMatchesSelector||n.matches).call(n,t)}function A(n,t){var e=n?c(n.children):[];return t?e.filter((function(n){return P(n,t)})):e}function M(n,t){return t?A(n,t)[0]:n.firstElementChild}var D=Object.keys;function z(n,t,e){return n&&(e?D(n).reverse():D(n)).forEach((function(e){"__proto__"!==e&&t(n[e],e)})),n}function N(n){return c(arguments,1).forEach((function(t){z(t,(function(e,i){n[i]=t[i]}))})),n}function O(n){return c(arguments,1).forEach((function(t){z(t,(function(t,e){v(t)?n[e]=t.slice():p(t)?n[e]=O({},p(n[e])?n[e]:{},t):n[e]=t}))})),n}function I(n,t){E(t||D(n),(function(t){delete n[t]}))}function T(n,t){E(n,(function(n){E(t,(function(t){n&&n.removeAttribute(t)}))}))}function j(n,t,e){p(t)?z(t,(function(t,e){j(n,e,t)})):E(n,(function(n){y(e)||""===e?T(n,t):n.setAttribute(t,String(e))}))}function F(n,t,e){var i=document.createElement(n);return t&&(h(t)?k(i,t):j(i,t)),e&&C(e,i),i}function $(n,t,e){if(m(e))return getComputedStyle(n)[t];y(e)||(n.style[t]=""+e)}function R(n,t){$(n,"display",t)}function G(n){n.setActive&&n.setActive()||n.focus({preventScroll:!0})}function W(n,t){return n.getAttribute(t)}function X(n,t){return n&&n.classList.contains(t)}function q(n){return n.getBoundingClientRect()}function B(n){E(n,(function(n){n&&n.parentNode&&n.parentNode.removeChild(n)}))}function H(n){return M((new DOMParser).parseFromString(n,"text/html").body)}function K(n,t){n.preventDefault(),t&&(n.stopPropagation(),n.stopImmediatePropagation())}function Y(n,t){return n&&n.querySelector(t)}function J(n,t){return t?c(n.querySelectorAll(t)):[]}function U(n,t){S(n,t,!1)}function V(n){return n.timeStamp}function Q(n){return h(n)?n:n?n+"px":""}var Z="splide",nn="data-splide";function tn(n,t){if(!n)throw new Error("[splide] "+(t||""))}var en=Math.min,on=Math.max,rn=Math.floor,un=Math.ceil,cn=Math.abs;function sn(n,t,e){return cn(n-t)<e}function an(n,t,e,i){var o=en(t,e),r=on(t,e);return i?o<n&&n<r:o<=n&&n<=r}function ln(n,t,e){var i=en(t,e),o=on(t,e);return en(on(i,n),o)}function fn(n){return+(n>0)-+(n<0)}function dn(n,t){return E(t,(function(t){n=n.replace("%s",""+t)})),n}function pn(n){return n<10?"0"+n:""+n}var vn={};function gn(n){return""+n+pn(vn[n]=(vn[n]||0)+1)}function hn(){var n=[];function t(n,t,e){E(n,(function(n){n&&E(t,(function(t){t.split(" ").forEach((function(t){var i=t.split(".");e(n,i[0],i[1])}))}))}))}return{bind:function(e,i,o,r){t(e,i,(function(t,e,i){var u="addEventListener"in t,c=u?t.removeEventListener.bind(t,e,o,r):t.removeListener.bind(t,o);u?t.addEventListener(e,o,r):t.addListener(o),n.push([t,e,i,o,c])}))},unbind:function(e,i,o){t(e,i,(function(t,e,i){n=n.filter((function(n){return!!(n[0]!==t||n[1]!==e||n[2]!==i||o&&n[3]!==o)||(n[4](),!1)}))}))},dispatch:function(n,t,e){var i;return"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:true,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,true,!1,e),n.dispatchEvent(i),i},destroy:function(){n.forEach((function(n){n[4]()})),u(n)}}}var mn="mounted",yn="ready",bn="move",wn="moved",En="click",_n="active",xn="inactive",Sn="visible",kn="hidden",Cn="refresh",Ln="updated",Pn="resize",An="resized",Mn="scroll",Dn="scrolled",zn="destroy",Nn="arrows:mounted",On="navigation:mounted",In="autoplay:play",Tn="autoplay:pause",jn="lazyload:loaded",Fn="sk",$n="sh",Rn="ei";function Gn(n){var t=n?n.event.bus:document.createDocumentFragment(),e=hn();return n&&n.event.on(zn,e.destroy),N(e,{bus:t,on:function(n,i){e.bind(t,w(n).join(" "),(function(n){i.apply(i,v(n.detail)?n.detail:[])}))},off:s(e.unbind,t),emit:function(n){e.dispatch(t,n,c(arguments,1))}})}function Wn(n,t,e,i){var o,r,u=Date.now,c=0,s=!0,a=0;function l(){if(!s){if(c=n?en((u()-o)/n,1):1,e&&e(c),c>=1&&(t(),o=u(),i&&++a>=i))return d();r=f(l)}}function d(){s=!0}function p(){r&&cancelAnimationFrame(r),c=0,r=0,s=!0}return{start:function(t){t||p(),o=u()-(t?c*n:0),s=!1,r=f(l)},rewind:function(){o=u(),c=0,e&&e(c)},pause:d,cancel:p,set:function(t){n=t},isPaused:function(){return s}}}var Xn="ArrowLeft",qn="ArrowRight",Bn="ArrowUp",Hn="ArrowDown",Kn="ttb",Yn={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[Bn,qn],ArrowRight:[Hn,Xn]};function Jn(n,t,e){return{resolve:function(n,t,i){var o="rtl"!==(i=i||e.direction)||t?i===Kn?0:-1:1;return Yn[n]&&Yn[n][o]||n.replace(/width|left|right/i,(function(n,t){var e=Yn[n.toLowerCase()][o]||n;return t>0?e.charAt(0).toUpperCase()+e.slice(1):e}))},orient:function(n){return n*("rtl"===e.direction?1:-1)}}}var Un="role",Vn="tabindex",Qn="aria-controls",Zn="aria-current",nt="aria-selected",tt="aria-label",et="aria-labelledby",it="aria-hidden",ot="aria-orientation",rt="aria-roledescription",ut="aria-live",ct="aria-busy",st="aria-atomic",at=[Un,Vn,"disabled",Qn,Zn,tt,et,it,ot,rt],lt=Z,ft="splide__track",dt="splide__slide",pt="splide__slide--clone",vt="splide__arrows",gt="splide__arrow",ht="splide__arrow--prev",mt="splide__arrow--next",yt="splide__pagination",bt="splide__pagination__page",wt="splide__progress__bar",Et="splide__toggle",_t="is-active",xt="is-prev",St="is-next",kt="is-visible",Ct="is-loading",Lt="is-focus-in",Pt="is-overflow",At=[_t,kt,xt,St,Ct,Lt,Pt],Mt={slide:dt,clone:pt,arrows:vt,arrow:gt,prev:ht,next:mt,pagination:yt,page:bt,spinner:"splide__spinner"};var Dt="touchstart mousedown",zt="touchmove mousemove",Nt="touchend touchcancel mouseup click";var Ot="slide",It="loop",Tt="fade";function jt(n,t,e,i){var o,r=Gn(n),u=r.on,c=r.emit,a=r.bind,l=n.Components,f=n.root,d=n.options,p=d.isNavigation,v=d.updateOnMove,g=d.i18n,h=d.pagination,m=d.slideFocus,y=l.Direction.resolve,b=W(i,"style"),w=W(i,tt),E=e>-1,_=M(i,".splide__slide__container");function x(){var o=n.splides.map((function(n){var e=n.splide.Components.Slides.getAt(t);return e?e.slide.id:""})).join(" ");j(i,tt,dn(g.slideX,(E?e:t)+1)),j(i,Qn,o),j(i,Un,m?"button":""),m&&T(i,rt)}function k(){o||C()}function C(){if(!o){var e=n.index;(r=L())!==X(i,_t)&&(S(i,_t,r),j(i,Zn,p&&r||""),c(r?_n:xn,P)),function(){var t=function(){if(n.is(Tt))return L();var t=q(l.Elements.track),e=q(i),o=y("left",!0),r=y("right",!0);return rn(t[o])<=un(e[o])&&rn(e[r])<=un(t[r])}(),e=!t&&(!L()||E);n.state.is([4,5])||j(i,it,e||"");j(J(i,d.focusableNodes||""),Vn,e?-1:""),m&&j(i,Vn,e?-1:0);t!==X(i,kt)&&(S(i,kt,t),c(t?Sn:kn,P));if(!t&&document.activeElement===i){var o=l.Slides.getAt(n.index);o&&G(o.slide)}}(),S(i,xt,t===e-1),S(i,St,t===e+1)}var r}function L(){var i=n.index;return i===t||d.cloneStatus&&i===e}var P={index:t,slideIndex:e,slide:i,container:_,isClone:E,mount:function(){E||(i.id=f.id+"-slide"+pn(t+1),j(i,Un,h?"tabpanel":"group"),j(i,rt,g.slide),j(i,tt,w||dn(g.slideLabel,[t+1,n.length]))),a(i,"click",s(c,En,P)),a(i,"keydown",s(c,Fn,P)),u([wn,$n,Dn],C),u(On,x),v&&u(bn,k)},destroy:function(){o=!0,r.destroy(),U(i,At),T(i,at),j(i,"style",b),j(i,tt,w||"")},update:C,style:function(n,t,e){$(e&&_||i,n,t)},isWithin:function(e,i){var o=cn(e-t);return E||!d.rewind&&!n.is(It)||(o=en(o,n.length-o)),o<=i}};return P}var Ft="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";var $t={passive:!1,capture:!0};var Rt={Spacebar:" ",Right:qn,Left:Xn,Up:Bn,Down:Hn};function Gt(n){return n=h(n)?n:n.key,Rt[n]||n}var Wt="keydown";var Xt="data-splide-lazy",qt="data-splide-lazy-srcset",Bt="[data-splide-lazy], [data-splide-lazy-srcset]";var Ht=[" ","Enter"];var Kt=Object.freeze({__proto__:null,Media:function(n,t,e){var i=n.state,r=e.breakpoints||{},u=e.reducedMotion||{},c=hn(),s=[];function a(n){n&&c.destroy()}function l(n,t){var e=matchMedia(t);c.bind(e,"change",f),s.push([n,e])}function f(){var t=i.is(7),o=e.direction,r=s.reduce((function(n,t){return O(n,t[1].matches?t[0]:{})}),{});I(e),d(r),e.destroy?n.destroy("completely"===e.destroy):t?(a(!0),n.mount()):o!==e.direction&&n.refresh()}function d(t,o,r){O(e,t),o&&O(Object.getPrototypeOf(e),t),!r&&i.is(1)||n.emit(Ln,e)}return{setup:function(){var n="min"===e.mediaQuery;D(r).sort((function(t,e){return n?+t-+e:+e-+t})).forEach((function(t){l(r[t],"("+(n?"min":"max")+"-width:"+t+"px)")})),l(u,o),f()},destroy:a,reduce:function(n){matchMedia(o).matches&&(n?O(e,u):I(e,D(u)))},set:d}},Direction:Jn,Elements:function(n,t,e){var i,o,r,c=Gn(n),s=c.on,a=c.bind,l=n.root,f=e.i18n,d={},p=[],v=[],h=[];function m(){i=w(".splide__track"),o=M(i,".splide__list"),tn(i&&o,"A track/list element is missing."),x(p,A(o,".splide__slide:not(.splide__slide--clone)")),z({arrows:vt,pagination:yt,prev:ht,next:mt,bar:wt,toggle:Et},(function(n,t){d[t]=w("."+n)})),N(d,{root:l,track:i,list:o,slides:p}),function(){var n=l.id||gn(Z),t=e.role;l.id=n,i.id=i.id||n+"-track",o.id=o.id||n+"-list",!W(l,Un)&&"SECTION"!==l.tagName&&t&&j(l,Un,t);j(l,rt,f.carousel),j(o,Un,"presentation")}(),b()}function y(n){var t=at.concat("style");u(p),U(l,v),U(i,h),T([i,o],t),T(l,n?t:["style",rt])}function b(){U(l,v),U(i,h),v=E(lt),h=E(ft),k(l,v),k(i,h),j(l,tt,e.label),j(l,et,e.labelledby)}function w(n){var t=Y(l,n);return t&&function(n,t){if(g(n.closest))return n.closest(t);for(var e=n;e&&1===e.nodeType&&!P(e,t);)e=e.parentElement;return e}(t,"."+lt)===l?t:void 0}function E(n){return[n+"--"+e.type,n+"--"+e.direction,e.drag&&n+"--draggable",e.isNavigation&&n+"--nav",n===lt&&_t]}return N(d,{setup:m,mount:function(){s(Cn,y),s(Cn,m),s(Ln,b),a(document,"touchstart mousedown keydown",(function(n){r="keydown"===n.type}),{capture:!0}),a(l,"focusin",(function(){S(l,Lt,!!r)}))},destroy:y})},Slides:function(n,t,e){var i=Gn(n),o=i.on,r=i.emit,c=i.bind,a=t.Elements,l=a.slides,f=a.list,d=[];function p(){l.forEach((function(n,t){m(n,t,-1)}))}function v(){x((function(n){n.destroy()})),u(d)}function m(t,e,i){var o=jt(n,e,i,t);o.mount(),d.push(o),d.sort((function(n,t){return n.index-t.index}))}function y(n){return n?S((function(n){return!n.isClone})):d}function x(n,t){y(t).forEach(n)}function S(n){return d.filter(g(n)?n:function(t){return h(n)?P(t.slide,n):_(w(n),t.index)})}return{mount:function(){p(),o(Cn,v),o(Cn,p)},destroy:v,update:function(){x((function(n){n.update()}))},register:m,get:y,getIn:function(n){var i=t.Controller,o=i.toIndex(n),r=i.hasFocus()?1:e.perPage;return S((function(n){return an(n.index,o,o+r-1)}))},getAt:function(n){return S(n)[0]},add:function(n,t){E(n,(function(n){if(h(n)&&(n=H(n)),b(n)){var i=l[t];i?L(n,i):C(f,n),k(n,e.classes.slide),o=n,u=s(r,Pn),a=J(o,"img"),(d=a.length)?a.forEach((function(n){c(n,"load error",(function(){--d||u()}))})):u()}var o,u,a,d})),r(Cn)},remove:function(n){B(S(n).map((function(n){return n.slide}))),r(Cn)},forEach:x,filter:S,style:function(n,t,e){x((function(i){i.style(n,t,e)}))},getLength:function(n){return n?l.length:d.length},isEnough:function(){return d.length>e.perPage}}},Layout:function(n,t,e){var i,o,r,u=Gn(n),c=u.on,a=u.bind,l=u.emit,f=t.Slides,d=t.Direction.resolve,v=t.Elements,g=v.root,h=v.track,m=v.list,y=f.getAt,b=f.style;function w(){i=e.direction===Kn,$(g,"maxWidth",Q(e.width)),$(h,d("paddingLeft"),_(!1)),$(h,d("paddingRight"),_(!0)),E(!0)}function E(n){var t=q(g);(n||o.width!==t.width||o.height!==t.height)&&($(h,"height",function(){var n="";i&&(tn(n=x(),"height or heightRatio is missing."),n="calc("+n+" - "+_(!1)+" - "+_(!0)+")");return n}()),b(d("marginRight"),Q(e.gap)),b("width",e.autoWidth?null:Q(e.fixedWidth)||(i?"":k())),b("height",Q(e.fixedHeight)||(i?e.autoHeight?null:k():x()),!0),o=t,l(An),r!==(r=D())&&(S(g,Pt,r),l("overflow",r)))}function _(n){var t=e.padding,i=d(n?"right":"left");return t&&Q(t[i]||(p(t)?0:t))||"0px"}function x(){return Q(e.height||q(m).width*e.heightRatio)}function k(){var n=Q(e.gap);return"calc((100%"+(n&&" + "+n)+")/"+(e.perPage||1)+(n&&" - "+n)+")"}function C(){return q(m)[d("width")]}function L(n,t){var e=y(n||0);return e?q(e.slide)[d("width")]+(t?0:M()):0}function P(n,t){var e=y(n);if(e){var i=q(e.slide)[d("right")],o=q(m)[d("left")];return cn(i-o)+(t?0:M())}return 0}function A(t){return P(n.length-1)-P(0)+L(0,t)}function M(){var n=y(0);return n&&parseFloat($(n.slide,d("marginRight")))||0}function D(){return n.is(Tt)||A(!0)>C()}return{mount:function(){var n,t,e;w(),a(window,"resize load",(n=s(l,Pn),e=Wn(t||0,n,null,1),function(){e.isPaused()&&e.start()})),c([Ln,Cn],w),c(Pn,E)},resize:E,listSize:C,slideSize:L,sliderSize:A,totalSize:P,getPadding:function(n){return parseFloat($(h,d("padding"+(n?"Right":"Left"))))||0},isOverflow:D}},Clones:function(n,t,e){var i,o=Gn(n),r=o.on,c=t.Elements,s=t.Slides,a=t.Direction.resolve,l=[];function f(){r(Cn,d),r([Ln,Pn],v),(i=g())&&(!function(t){var i=s.get().slice(),o=i.length;if(o){for(;i.length<t;)x(i,i);x(i.slice(-t),i.slice(0,t)).forEach((function(r,u){var a=u<t,f=function(t,i){var o=t.cloneNode(!0);return k(o,e.classes.clone),o.id=n.root.id+"-clone"+pn(i+1),o}(r.slide,u);a?L(f,i[0].slide):C(c.list,f),x(l,f),s.register(f,u-t+(a?0:o),r.index)}))}}(i),t.Layout.resize(!0))}function d(){p(),f()}function p(){B(l),u(l),o.destroy()}function v(){var n=g();i!==n&&(i<n||!n)&&o.emit(Cn)}function g(){var i=e.clones;if(n.is(It)){if(m(i)){var o=e[a("fixedWidth")]&&t.Layout.slideSize(0);i=o&&un(q(c.track)[a("width")]/o)||e[a("autoWidth")]&&n.length||2*e.perPage}}else i=0;return i}return{mount:f,destroy:p}},Move:function(n,t,e){var i,o=Gn(n),r=o.on,u=o.emit,c=n.state.set,s=t.Layout,a=s.slideSize,l=s.getPadding,f=s.totalSize,d=s.listSize,p=s.sliderSize,v=t.Direction,g=v.resolve,h=v.orient,y=t.Elements,b=y.list,w=y.track;function E(){t.Controller.isBusy()||(t.Scroll.cancel(),_(n.index),t.Slides.update())}function _(n){x(L(n,!0))}function x(e,i){if(!n.is(Tt)){var o=i?e:function(e){if(n.is(It)){var i=C(e),o=i>t.Controller.getEnd();(i<0||o)&&(e=S(e,o))}return e}(e);$(b,"transform","translate"+g("X")+"("+o+"px)"),e!==o&&u($n)}}function S(n,t){var e=n-A(t),i=p();return n-=h(i*(un(cn(e)/i)||1))*(t?1:-1)}function k(){x(P(),!0),i.cancel()}function C(n){for(var e=t.Slides.get(),i=0,o=1/0,r=0;r<e.length;r++){var u=e[r].index,c=cn(L(u,!0)-n);if(!(c<=o))break;o=c,i=u}return i}function L(t,i){var o=h(f(t-1)-function(n){var t=e.focus;return"center"===t?(d()-a(n,!0))/2:+t*a(n)||0}(t));return i?function(t){e.trimSpace&&n.is(Ot)&&(t=ln(t,0,h(p(!0)-d())));return t}(o):o}function P(){var n=g("left");return q(b)[n]-q(w)[n]+h(l(!1))}function A(n){return L(n?t.Controller.getEnd():0,!!e.trimSpace)}return{mount:function(){i=t.Transition,r([mn,An,Ln,Cn],E)},move:function(n,t,e,o){var r,s;n!==t&&(r=n>e,s=h(S(P(),r)),r?s>=0:s<=b[g("scrollWidth")]-q(w)[g("width")])&&(k(),x(S(P(),n>e),!0)),c(4),u(bn,t,e,n),i.start(t,(function(){c(3),u(wn,t,e,n),o&&o()}))},jump:_,translate:x,shift:S,cancel:k,toIndex:C,toPosition:L,getPosition:P,getLimit:A,exceededLimit:function(n,t){t=m(t)?P():t;var e=!0!==n&&h(t)<h(A(!1)),i=!1!==n&&h(t)>h(A(!0));return e||i},reposition:E}},Controller:function(n,t,e){var i,o,r,u,c=Gn(n),a=c.on,l=c.emit,f=t.Move,d=f.getPosition,p=f.getLimit,v=f.toPosition,g=t.Slides,y=g.isEnough,b=g.getLength,w=e.omitEnd,E=n.is(It),_=n.is(Ot),x=s(A,!1),S=s(A,!0),k=e.start||0,C=k;function L(){o=b(!0),r=e.perMove,u=e.perPage,i=z();var n=ln(k,0,w?i:o-1);n!==k&&(k=n,f.reposition())}function P(){i!==z()&&l(Rn)}function A(n,t){var e=r||(T()?1:u),o=M(k+e*(n?-1:1),k,!(r||T()));return-1===o&&_&&!sn(d(),p(!n),1)?n?0:i:t?o:D(o)}function M(t,c,s){if(y()||T()){var a=function(t){if(_&&"move"===e.trimSpace&&t!==k)for(var i=d();i===v(t,!0)&&an(t,0,n.length-1,!e.rewind);)t<k?--t:++t;return t}(t);a!==t&&(c=t,t=a,s=!1),t<0||t>i?t=r||!an(0,t,c,!0)&&!an(i,c,t,!0)?E?s?t<0?-(o%u||u):o:t:e.rewind?t<0?i:0:-1:N(O(t)):s&&t!==c&&(t=N(O(c)+(t<c?-1:1)))}else t=-1;return t}function D(n){return E?(n+o)%o||0:n}function z(){for(var n=o-(T()||E&&r?1:u);w&&n-- >0;)if(v(o-1,!0)!==v(n,!0)){n++;break}return ln(n,0,o-1)}function N(n){return ln(T()?n:u*n,0,i)}function O(n){return T()?en(n,i):rn((n>=i?o-1:n)/u)}function I(n){n!==k&&(C=k,k=n)}function T(){return!m(e.focus)||e.isNavigation}function j(){return n.state.is([4,5])&&!!e.waitForTransition}return{mount:function(){L(),a([Ln,Cn,Rn],L),a(An,P)},go:function(n,t,e){if(!j()){var o=function(n){var t=k;if(h(n)){var e=n.match(/([+\-<>])(\d+)?/)||[],o=e[1],r=e[2];"+"===o||"-"===o?t=M(k+ +(""+o+(+r||1)),k):">"===o?t=r?N(+r):x(!0):"<"===o&&(t=S(!0))}else t=E?n:ln(n,0,i);return t}(n),r=D(o);r>-1&&(t||r!==k)&&(I(r),f.move(o,r,C,e))}},scroll:function(n,e,o,r){t.Scroll.scroll(n,e,o,(function(){var n=D(f.toIndex(d()));I(w?en(n,i):n),r&&r()}))},getNext:x,getPrev:S,getAdjacent:A,getEnd:z,setIndex:I,getIndex:function(n){return n?C:k},toIndex:N,toPage:O,toDest:function(n){var t=f.toIndex(n);return _?ln(t,0,i):t},hasFocus:T,isBusy:j}},Arrows:function(n,t,e){var i,o,r=Gn(n),u=r.on,c=r.bind,a=r.emit,l=e.classes,f=e.i18n,d=t.Elements,p=t.Controller,v=d.arrows,g=d.track,h=v,m=d.prev,y=d.next,b={};function w(){!function(){var n=e.arrows;!n||m&&y||(h=v||F("div",l.arrows),m=S(!0),y=S(!1),i=!0,C(h,[m,y]),!v&&L(h,g));m&&y&&(N(b,{prev:m,next:y}),R(h,n?"":"none"),k(h,o="splide__arrows--"+e.direction),n&&(u([mn,wn,Cn,Dn,Rn],P),c(y,"click",s(x,">")),c(m,"click",s(x,"<")),P(),j([m,y],Qn,g.id),a(Nn,m,y)))}(),u(Ln,E)}function E(){_(),w()}function _(){r.destroy(),U(h,o),i?(B(v?[m,y]:h),m=y=null):T([m,y],at)}function x(n){p.go(n,!0)}function S(n){return H('<button class="'+l.arrow+" "+(n?l.prev:l.next)+'" type="button"><svg xmlns="'+'http://www.w3.org/2000/svg" viewBox="0 0 '+"40 "+'40" width="'+'40" height="'+'40" focusable="false"><path d="'+(e.arrowPath||Ft)+'" />')}function P(){if(m&&y){var t=n.index,e=p.getPrev(),i=p.getNext(),o=e>-1&&t<e?f.last:f.prev,r=i>-1&&t>i?f.first:f.next;m.disabled=e<0,y.disabled=i<0,j(m,tt,o),j(y,tt,r),a("arrows:updated",m,y,e,i)}}return{arrows:b,mount:w,destroy:_,update:P}},Autoplay:function(n,t,e){var i,o,r=Gn(n),u=r.on,c=r.bind,s=r.emit,a=Wn(e.interval,n.go.bind(n,">"),(function(n){var t=f.bar;t&&$(t,"width",100*n+"%"),s("autoplay:playing",n)})),l=a.isPaused,f=t.Elements,d=t.Elements,p=d.root,v=d.toggle,g=e.autoplay,h="pause"===g;function m(){l()&&t.Slides.isEnough()&&(a.start(!e.resetProgress),o=i=h=!1,w(),s(In))}function y(n){void 0===n&&(n=!0),h=!!n,w(),l()||(a.pause(),s(Tn))}function b(){h||(i||o?y(!1):m())}function w(){v&&(S(v,_t,!h),j(v,tt,e.i18n[h?"play":"pause"]))}function E(n){var i=t.Slides.getAt(n);a.set(i&&+W(i.slide,"data-splide-interval")||e.interval)}return{mount:function(){g&&(!function(){e.pauseOnHover&&c(p,"mouseenter mouseleave",(function(n){i="mouseenter"===n.type,b()}));e.pauseOnFocus&&c(p,"focusin focusout",(function(n){o="focusin"===n.type,b()}));v&&c(v,"click",(function(){h?m():y(!0)}));u([bn,Mn,Cn],a.rewind),u(bn,E)}(),v&&j(v,Qn,f.track.id),h||m(),w())},destroy:a.cancel,play:m,pause:y,isPaused:l}},Cover:function(n,t,e){var i=Gn(n).on;function o(n){t.Slides.forEach((function(t){var e=M(t.container||t.slide,"img");e&&e.src&&r(n,e,t)}))}function r(n,t,e){e.style("background",n?'center/cover no-repeat url("'+t.src+'")':"",!0),R(t,n?"none":"")}return{mount:function(){e.cover&&(i(jn,s(r,!0)),i([mn,Ln,Cn],s(o,!0)))},destroy:s(o,!1)}},Scroll:function(n,t,e){var i,o,r=Gn(n),u=r.on,c=r.emit,a=n.state.set,l=t.Move,f=l.getPosition,d=l.getLimit,p=l.exceededLimit,v=l.translate,g=n.is(Ot),h=1;function m(n,e,r,u,d){var v=f();if(w(),r&&(!g||!p())){var m=t.Layout.sliderSize(),E=fn(n)*m*rn(cn(n)/m)||0;n=l.toPosition(t.Controller.toDest(n%m))+E}var _=sn(v,n,1);h=1,e=_?0:e||on(cn(n-v)/1.5,800),o=u,i=Wn(e,y,s(b,v,n,d),1),a(5),c(Mn),i.start()}function y(){a(3),o&&o(),c(Dn)}function b(n,t,i,r){var u,c,s=f(),a=(n+(t-n)*(u=r,(c=e.easingFunc)?c(u):1-Math.pow(1-u,4))-s)*h;v(s+a),g&&!i&&p()&&(h*=.6,cn(a)<10&&m(d(p(!0)),600,!1,o,!0))}function w(){i&&i.cancel()}function E(){i&&!i.isPaused()&&(w(),y())}return{mount:function(){u(bn,w),u([Ln,Cn],E)},destroy:w,scroll:m,cancel:E}},Drag:function(n,t,e){var i,o,r,u,c,s,a,f,d=Gn(n),v=d.on,g=d.emit,h=d.bind,m=d.unbind,y=n.state,b=t.Move,w=t.Scroll,E=t.Controller,_=t.Elements.track,x=t.Media.reduce,S=t.Direction,k=S.resolve,C=S.orient,L=b.getPosition,A=b.exceededLimit,M=!1;function D(){var n=e.drag;W(!n),u="free"===n}function z(n){if(s=!1,!a){var t=G(n);i=n.target,o=e.noDrag,P(i,".splide__pagination__page, .splide__arrow")||o&&P(i,o)||!t&&n.button||(E.isBusy()?K(n,!0):(f=t?_:window,c=y.is([4,5]),r=null,h(f,zt,N,$t),h(f,Nt,O,$t),b.cancel(),w.cancel(),T(n)))}var i,o}function N(t){if(y.is(6)||(y.set(6),g("drag")),t.cancelable)if(c){b.translate(i+j(t)/(M&&n.is(Ot)?5:1));var o=F(t)>200,r=M!==(M=A());(o||r)&&T(t),s=!0,g("dragging"),K(t)}else(function(n){return cn(j(n))>cn(j(n,!0))})(t)&&(c=function(n){var t=e.dragMinThreshold,i=p(t),o=i&&t.mouse||0,r=(i?t.touch:+t)||10;return cn(j(n))>(G(n)?r:o)}(t),K(t))}function O(i){y.is(6)&&(y.set(3),g("dragged")),c&&(!function(i){var o=function(t){if(n.is(It)||!M){var e=F(t);if(e&&e<200)return j(t)/e}return 0}(i),r=function(n){return L()+fn(n)*en(cn(n)*(e.flickPower||600),u?1/0:t.Layout.listSize()*(e.flickMaxPages||1))}(o),c=e.rewind&&e.rewindByDrag;x(!1),u?E.scroll(r,0,e.snap):n.is(Tt)?E.go(C(fn(o))<0?c?"<":"-":c?">":"+"):n.is(Ot)&&M&&c?E.go(A(!0)?">":"<"):E.go(E.toDest(r),!0);x(!0)}(i),K(i)),m(f,zt,N),m(f,Nt,O),c=!1}function I(n){!a&&s&&K(n,!0)}function T(n){r=o,o=n,i=L()}function j(n,t){return R(n,t)-R($(n),t)}function F(n){return V(n)-V($(n))}function $(n){return o===n&&r||o}function R(n,t){return(G(n)?n.changedTouches[0]:n)["page"+k(t?"Y":"X")]}function G(n){return"undefined"!=typeof TouchEvent&&n instanceof TouchEvent}function W(n){a=n}return{mount:function(){h(_,zt,l,$t),h(_,Nt,l,$t),h(_,Dt,z,$t),h(_,"click",I,{capture:!0}),h(_,"dragstart",K),v([mn,Ln],D)},disable:W,isDragging:function(){return c}}},Keyboard:function(n,t,e){var i,o,r=Gn(n),u=r.on,c=r.bind,s=r.unbind,l=n.root,f=t.Direction.resolve;function d(){var n=e.keyboard;n&&(i="global"===n?window:l,c(i,Wt,g))}function p(){s(i,Wt)}function v(){var n=o;o=!0,a((function(){o=n}))}function g(t){if(!o){var e=Gt(t);e===f(Xn)?n.go("<"):e===f(qn)&&n.go(">")}}return{mount:function(){d(),u(Ln,p),u(Ln,d),u(bn,v)},destroy:p,disable:function(n){o=n}}},LazyLoad:function(n,t,e){var i=Gn(n),o=i.on,r=i.off,c=i.bind,a=i.emit,l="sequential"===e.lazyLoad,f=[wn,Dn],d=[];function p(){u(d),t.Slides.forEach((function(n){J(n.slide,Bt).forEach((function(t){var i=W(t,Xt),o=W(t,qt);if(i!==t.src||o!==t.srcset){var r=e.classes.spinner,u=t.parentElement,c=M(u,"."+r)||F("span",r,u);d.push([t,n,c]),t.src||R(t,"none")}}))})),l?m():(r(f),o(f,v),v())}function v(){(d=d.filter((function(t){var i=e.perPage*((e.preloadPages||1)+1)-1;return!t[1].isWithin(n.index,i)||g(t)}))).length||r(f)}function g(n){var t=n[0];k(n[1].slide,Ct),c(t,"load error",s(h,n)),j(t,"src",W(t,Xt)),j(t,"srcset",W(t,qt)),T(t,Xt),T(t,qt)}function h(n,t){var e=n[0],i=n[1];U(i.slide,Ct),"error"!==t.type&&(B(n[2]),R(e,""),a(jn,e,i),a(Pn)),l&&m()}function m(){d.length&&g(d.shift())}return{mount:function(){e.lazyLoad&&(p(),o(Cn,p))},destroy:s(u,d),check:v}},Pagination:function(n,t,e){var i,o,r=Gn(n),a=r.on,l=r.emit,f=r.bind,d=t.Slides,p=t.Elements,v=t.Controller,g=v.hasFocus,h=v.getIndex,m=v.go,y=t.Direction.resolve,b=p.pagination,w=[];function E(){i&&(B(b?c(i.children):i),U(i,o),u(w),i=null),r.destroy()}function _(n){m(">"+n,!0)}function x(n,t){var e=w.length,i=Gt(t),o=S(),r=-1;i===y(qn,!1,o)?r=++n%e:i===y(Xn,!1,o)?r=(--n+e)%e:"Home"===i?r=0:"End"===i&&(r=e-1);var u=w[r];u&&(G(u.button),m(">"+r),K(t,!0))}function S(){return e.paginationDirection||e.direction}function C(n){return w[v.toPage(n)]}function L(){var n=C(h(!0)),t=C(h());if(n){var e=n.button;U(e,_t),T(e,nt),j(e,Vn,-1)}if(t){var o=t.button;k(o,_t),j(o,nt,!0),j(o,Vn,"")}l("pagination:updated",{list:i,items:w},n,t)}return{items:w,mount:function t(){E(),a([Ln,Cn,Rn],t);var r=e.pagination;b&&R(b,r?"":"none"),r&&(a([bn,Mn,Dn],L),function(){var t=n.length,r=e.classes,u=e.i18n,c=e.perPage,a=g()?v.getEnd()+1:un(t/c);k(i=b||F("ul",r.pagination,p.track.parentElement),o="splide__pagination--"+S()),j(i,Un,"tablist"),j(i,tt,u.select),j(i,ot,S()===Kn?"vertical":"");for(var l=0;l<a;l++){var h=F("li",null,i),m=F("button",{class:r.page,type:"button"},h),y=d.getIn(l).map((function(n){return n.slide.id})),E=!g()&&c>1?u.pageX:u.slideX;f(m,"click",s(_,l)),e.paginationKeyboard&&f(m,"keydown",s(x,l)),j(h,Un,"presentation"),j(m,Un,"tab"),j(m,Qn,y.join(" ")),j(m,tt,dn(E,l+1)),j(m,Vn,-1),w.push({li:h,button:m,page:l})}}(),L(),l("pagination:mounted",{list:i,items:w},C(n.index)))},destroy:E,getAt:C,update:L}},Sync:function(n,t,e){var i=e.isNavigation,o=e.slideFocus,r=[];function c(){var t,e;n.splides.forEach((function(t){t.isParent||(l(n,t.splide),l(t.splide,n))})),i&&(t=Gn(n),(e=t.on)(En,d),e(Fn,p),e([mn,Ln],f),r.push(t),t.emit(On,n.splides))}function a(){r.forEach((function(n){n.destroy()})),u(r)}function l(n,t){var e=Gn(n);e.on(bn,(function(n,e,i){t.go(t.is(It)?i:n)})),r.push(e)}function f(){j(t.Elements.list,ot,e.direction===Kn?"vertical":"")}function d(t){n.go(t.index)}function p(n,t){_(Ht,Gt(t))&&(d(n),K(t))}return{setup:s(t.Media.set,{slideFocus:m(o)?i:o},!0),mount:c,destroy:a,remount:function(){a(),c()}}},Wheel:function(n,t,e){var i=Gn(n).bind,o=0;function r(i){if(i.cancelable){var r=i.deltaY,u=r<0,c=V(i),s=e.wheelMinThreshold||0,a=e.wheelSleep||0;cn(r)>s&&c-o>a&&(n.go(u?"<":">"),o=c),function(i){return!e.releaseWheel||n.state.is(4)||-1!==t.Controller.getAdjacent(i)}(u)&&K(i)}}return{mount:function(){e.wheel&&i(t.Elements.track,"wheel",r,$t)}}},Live:function(n,t,e){var i=Gn(n).on,o=t.Elements.track,r=e.live&&!e.isNavigation,u=F("span","splide__sr"),c=Wn(90,s(a,!1));function a(n){j(o,ct,n),n?(C(o,u),c.start()):(B(u),c.cancel())}function l(n){r&&j(o,ut,n?"off":"polite")}return{mount:function(){r&&(l(!t.Autoplay.isPaused()),j(o,st,!0),u.textContent="…",i(In,s(l,!0)),i(Tn,s(l,!1)),i([wn,Dn],s(a,!0)))},disable:l,destroy:function(){T(o,[ut,st,ct]),B(u)}}}}),Yt={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:Mt,i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function Jt(n,t,e){var i=t.Slides;function o(){i.forEach((function(n){n.style("transform","translateX(-"+100*n.index+"%)")}))}return{mount:function(){Gn(n).on([mn,Cn],o)},start:function(n,t){i.style("transition","opacity "+e.speed+"ms "+e.easing),a(t)},cancel:l}}function Ut(n,t,e){var i,o=t.Move,r=t.Controller,u=t.Scroll,c=t.Elements.list,a=s($,c,"transition");function l(){a(""),u.cancel()}return{mount:function(){Gn(n).bind(c,"transitionend",(function(n){n.target===c&&i&&(l(),i())}))},start:function(t,c){var s=o.toPosition(t,!0),l=o.getPosition(),f=function(t){var i=e.rewindSpeed;if(n.is(Ot)&&i){var o=r.getIndex(!0),u=r.getEnd();if(0===o&&t>=u||o>=u&&0===t)return i}return e.speed}(t);cn(s-l)>=1&&f>=1?e.useScroll?u.scroll(s,f,!1,c):(a("transform "+f+"ms "+e.easing),o.translate(s,!0),i=c):(o.jump(t),c())},cancel:l}}var Vt=function(){function n(t,e){var i;this.event=Gn(),this.Components={},this.state=(i=1,{set:function(n){i=n},is:function(n){return _(w(n),i)}}),this.splides=[],this._o={},this._E={};var o=h(t)?Y(document,t):t;tn(o,o+" is invalid."),this.root=o,e=O({label:W(o,tt)||"",labelledby:W(o,et)||""},Yt,n.defaults,e||{});try{O(e,JSON.parse(W(o,nn)))}catch(n){tn(!1,"Invalid JSON")}this._o=Object.create(O({},e))}var t,e,o,r=n.prototype;return r.mount=function(n,t){var e=this,i=this.state,o=this.Components;return tn(i.is([1,7]),"Already mounted!"),i.set(1),this._C=o,this._T=t||this._T||(this.is(Tt)?Jt:Ut),this._E=n||this._E,z(N({},Kt,this._E,{Transition:this._T}),(function(n,t){var i=n(e,o,e._o);o[t]=i,i.setup&&i.setup()})),z(o,(function(n){n.mount&&n.mount()})),this.emit(mn),k(this.root,"is-initialized"),i.set(3),this.emit(yn),this},r.sync=function(n){return this.splides.push({splide:n}),n.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this._C.Sync.remount(),n.Components.Sync.remount()),this},r.go=function(n){return this._C.Controller.go(n),this},r.on=function(n,t){return this.event.on(n,t),this},r.off=function(n){return this.event.off(n),this},r.emit=function(n){var t;return(t=this.event).emit.apply(t,[n].concat(c(arguments,1))),this},r.add=function(n,t){return this._C.Slides.add(n,t),this},r.remove=function(n){return this._C.Slides.remove(n),this},r.is=function(n){return this._o.type===n},r.refresh=function(){return this.emit(Cn),this},r.destroy=function(n){void 0===n&&(n=!0);var t=this.event,e=this.state;return e.is(1)?Gn(this).on(yn,this.destroy.bind(this,n)):(z(this._C,(function(t){t.destroy&&t.destroy(n)}),!0),t.emit(zn),t.destroy(),n&&u(this.splides),e.set(7)),this},t=n,(e=[{key:"options",get:function(){return this._o},set:function(n){this._C.Media.set(n,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}])&&i(t.prototype,e),o&&i(t,o),Object.defineProperty(t,"prototype",{writable:!1}),n}(),Qt=Vt;Qt.defaults={},Qt.STATES=r})),t.register("e1IEg",(function(t,e){function i(n,t,e){return Array.prototype.slice.call(n,t,e)}function o(n){return n.bind.apply(n,[null].concat(i(arguments,1)))}function r(n,t){return typeof t===n}n(t.exports,"Grid",(function(){return J}));var u=Array.isArray;function c(n){return u(n)?n:[n]}function s(n,t){c(n).forEach(t)}o(r,"function"),o(r,"string"),o(r,"undefined");var a=Object.keys;function l(n,t,e){if(n){var i=a(n);i=e?i.reverse():i;for(var o=0;o<i.length;o++){var r=i[o];if("__proto__"!==r&&!1===t(n[r],r))break}}return n}var f="refresh";function d(n){var t=n?n.event.bus:document.createDocumentFragment(),e=function(){var n=[];function t(n,t,e){s(n,(function(n){n&&s(t,(function(t){t.split(" ").forEach((function(t){var i=t.split(".");e(n,i[0],i[1])}))}))}))}return{bind:function(e,i,o,r){t(e,i,(function(t,e,i){var u="addEventListener"in t,c=u?t.removeEventListener.bind(t,e,o,r):t.removeListener.bind(t,o);u?t.addEventListener(e,o,r):t.addListener(o),n.push([t,e,i,o,c])}))},unbind:function(e,i,o){t(e,i,(function(t,e,i){n=n.filter((function(n){return!!(n[0]!==t||n[1]!==e||n[2]!==i||o&&n[3]!==o)||(n[4](),!1)}))}))},dispatch:function(n,t,e){var i;return"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:!0,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!1,e),n.dispatchEvent(i),i},destroy:function(){n.forEach((function(n){n[4]()})),n.length=0}}}();return n&&n.event.on("destroy",e.destroy),function(n){return i(arguments,1).forEach((function(t){l(t,(function(e,i){n[i]=t[i]}))})),n}(e,{bus:t,on:function(n,i){e.bind(t,c(n).join(" "),(function(n){i.apply(i,u(n.detail)?n.detail:[])}))},off:o(e.unbind,t),emit:function(n){e.dispatch(t,n,i(arguments,1))}})}var p="splide__slide";function v(n){n.length=0}function g(n,t,e){return Array.prototype.slice.call(n,t,e)}function h(n){return n.bind(null,...g(arguments,1))}function m(n,t){return typeof t===n}const y=Array.isArray;h(m,"function");const b=h(m,"string"),w=h(m,"undefined");function E(n){return null===n}function _(n){return y(n)?n:[n]}function x(n,t){_(n).forEach(t)}function S(n,t){return n.push(..._(t)),n}function k(n,t,e){n&&x(t,(t=>{t&&n.classList[e?"add":"remove"](t)}))}function C(n,t){k(n,b(t)?t.split(" "):t,!0)}function L(n,t){x(t,n.appendChild.bind(n))}function P(n,t){return n instanceof HTMLElement&&(n.msMatchesSelector||n.matches).call(n,t)}function A(n,t){return t?function(n,t){const e=n?g(n.children):[];return t?e.filter((n=>P(n,t))):e}(n,t)[0]:n.firstElementChild}const M=Object.keys;function D(n,t,e){if(n){let i=M(n);i=e?i.reverse():i;for(let e=0;e<i.length;e++){const o=i[e];if("__proto__"!==o&&!1===t(n[o],o))break}}return n}function z(n,t){x(n,(n=>{x(t,(t=>{n&&n.removeAttribute(t)}))}))}function N(n,t,e){var i;!E(i=t)&&m("object",i)?D(t,((t,e)=>{N(n,e,t)})):x(n,(n=>{E(e)||""===e?z(n,t):n.setAttribute(t,String(e))}))}function O(n,t,e){const i=document.createElement(n);return t&&(b(t)?C(i,t):N(i,t)),e&&L(e,i),i}function I(n,t,e){if(w(e))return getComputedStyle(n)[t];E(e)||(n.style[t]=`${e}`)}function T(n,t){return t?g(n.querySelectorAll(t)):[]}function j(n,t){k(n,t,!1)}function F(n){return b(n)?n:n?`${n}px`:""}const{min:$,max:R,floor:G,ceil:W,abs:X}=Math;const q="splide__slide__row",B="splide__slide--col",H={rows:1,cols:1,dimensions:[],gap:{}};function K(n){function t(){const{rows:t,cols:e,dimensions:i}=n;return y(i)&&i.length?i:[[t,e]]}return{get:function(n){const e=t();return e[$(n,e.length-1)]},getAt:function(n){const e=t();let i,o,r=0;for(let t=0;t<e.length;t++){const u=e[t];if(i=u[0]||1,o=u[1]||1,r+=i*o,n<r)break}return function(n,t){if(!n)throw new Error(`[splide] ${t||""}`)}(i&&o,"Invalid dimension"),[i,o]}}}function Y(n,t,e){const{on:i,destroy:o}=d(n),{Components:r,options:u}=n,{resolve:c}=r.Direction,{forEach:s}=r.Slides;function a(n,t){const e=A(n,".splide__slide__container"),i=A(e||n,"img");i&&i.src&&(I(e||n,"background",t?"":`center/cover no-repeat url("${i.src}")`),I(i,"display",t?"":"none"))}function l(n){return T(n,".splide__slide__row")}function f(n){return T(n,".splide__slide--col")}function p(n,t){f(n).forEach((n=>{N(n,"tabindex",t?0:null)}))}function v(n){p(n.slide,!0)}function g(n){p(n.slide,!1)}return{mount:function(){s((i=>{const{slide:o}=i,[r,u]=e.get(i.isClone?i.slideIndex:i.index);!function(n,e){const{row:i}=t.gap,o=`calc(${100/n}%${i?` - ${F(i)} * ${(n-1)/n}`:""})`;l(e).forEach(((n,t,e)=>{I(n,"height",o),I(n,"display","flex"),I(n,"margin",`0 0 ${F(i)} 0`),I(n,"padding",0),t===e.length-1&&I(n,"marginBottom",0)}))}(r,o),function(n,e){const{col:i}=t.gap,o=`calc(${100/n}%${i?` - ${F(i)} * ${(n-1)/n}`:""})`;f(e).forEach(((n,t,e)=>{I(n,"width",o),t!==e.length-1&&I(n,c("marginRight"),F(i))}))}(u,o),f(i.slide).forEach(((t,e)=>{var o;t.id=`${i.slide.id}-col${o=e+1,o<10?`0${o}`:`${o}`}`,n.options.cover&&a(t)}))})),u.slideFocus&&(i("visible",v),i("hidden",g))},destroy:function(){s((n=>{const{slide:t}=n;p(t,!1),l(t).forEach((n=>{z(n,"style")})),f(t).forEach((n=>{a(n,!0),z(n,"style")}))})),o()}}}function J(n,t,e){const{on:i,off:o}=d(n),{Elements:r}=t,u={},c=K(u),s=Y(n,u,c),a="splide--grid",l=[];function h(){var t,s;t=u,_(s||M(t)).forEach((n=>{delete t[n]})),function(n){g(arguments,1).forEach((t=>{D(t,((e,i)=>{n[i]=t[i]}))}))}(u,H,e.grid||{}),!function(){if(e.grid){const{rows:n,cols:t,dimensions:e}=u;return n>1||t>1||y(e)&&e.length>0}return!1}()?E()&&(m(),b()):(m(),S(l,r.slides),C(n.root,a),L(r.list,function(){const n=[];let t,e,i=0,o=0;return l.forEach(((r,u)=>{const[s,a]=c.getAt(u);o||(i||(t=O(r.tagName,p),n.push(t)),e=function(n,t,e){return O("li"===t.tagName.toLowerCase()?"ul":"div",q,e)}(0,r,t)),function(n,t,e){C(t,B),L(e,t)}(0,r,e),++o>=a&&(o=0,i=++i>=s?0:i)})),n}()),o(f),i(f,w),b())}function m(){if(E()){const{slides:t}=r;s.destroy(),l.forEach((n=>{j(n,B),L(r.list,n)})),x(t,(n=>{n&&n.parentNode&&n.parentNode.removeChild(n)})),j(n.root,a),v(t),S(t,l),v(l),o(f)}}function b(){n.refresh()}function w(){E()&&s.mount()}function E(){return t=n.root,e=a,t&&t.classList.contains(e);var t,e}return{mount:function(){h(),i("updated",h)},destroy:m}}}));
//# sourceMappingURL=footer.8276ff1d.js.map