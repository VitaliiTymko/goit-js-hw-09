!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("iU1Pc"),u={form:document.querySelector("form"),delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]'),btnSrartPromise:document.querySelector("button")};function a(e,n){return new Promise((function(t,o){var r=Math.random()>.3;setTimeout((function(){r&&t({position:e,delay:n}),o({position:e,delay:n})}),n)}))}u.btnSrartPromise.addEventListener("click",(function(n){n.preventDefault();for(var t=parseInt(Number(u.delay.value)),o=parseInt(Number(u.step.value)),r=parseInt(Number(u.amount.value)),c=1;c<=r;c+=1)console.log(t,o,r),a(c,t).then((function(n){var t=n.position,o=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})),t+=o}))}();
//# sourceMappingURL=03-promises.483ff1fb.js.map
