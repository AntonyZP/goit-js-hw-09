!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("iU1Pc"),u=document.querySelector(".form"),l=document.querySelector('[name="delay"]'),a=document.querySelector('[name="step"]'),c=document.querySelector('[name="amount"]');u.addEventListener("submit",(function(e){e.preventDefault();for(var n=1;n<=s;n+=1)p(n,d),d+=f})),l.addEventListener("input",(function(e){d=Number(e.target.value),console.log(d)})),a.addEventListener("input",(function(e){f=Number(e.target.value),console.log(f)})),c.addEventListener("input",(function(e){s=Number(e.target.value),console.log(s)}));var d=null,f=null,s=null;function p(n,t){var o=Math.random()>.3;new Promise((function(e,i){setTimeout((function(){o?e({position:n,delay:t}):i({position:n,delay:t})}),t)})).then((function(n){var t=n.position,o=n.delay;e(r).Notify.success("Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(r).Notify.failure("Rejected promise ".concat(t," in ").concat(o,"ms"))}))}}();
//# sourceMappingURL=03-promises.419bd6c9.js.map