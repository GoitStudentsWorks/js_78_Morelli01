function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;n.register("1rwdc",(function(t,o){var r=n("eiwGX"),i=n("3oNyz");const l=document.getElementById("toggle-theme-btn"),c=document.getElementById("toggle-theme-image");l.addEventListener("click",(()=>{document.body.classList.contains("light")?(document.body.classList.remove("light"),c.src=e(r),localStorage.theme="dark"):(document.body.classList.add("light"),c.src=e(i),localStorage.theme="light")})),"light"===localStorage.theme&&(document.body.classList.add("light"),c.src=e(i))})),n.register("eiwGX",(function(e,t){e.exports=new URL(n("kyEFX").resolve("fNDDT"),import.meta.url).toString()})),n.register("kyEFX",(function(e,n){var o,r;t(e.exports,"register",(function(){return o}),(function(e){return o=e})),t(e.exports,"resolve",(function(){return r}),(function(e){return r=e}));var i={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},r=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),n.register("3oNyz",(function(e,t){e.exports=new URL(n("kyEFX").resolve("bF2y1"),import.meta.url).toString()}));
//# sourceMappingURL=dark-light.94a96c56.js.map