!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire7bc7;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequire7bc7=o);var r=o("h6c0i"),a={form:document.querySelector("form"),delay:document.querySelector("[data-delay]"),step:document.querySelector("[data-step]"),amount:document.querySelector("[data-amount]")};function u(e,t){var n=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){n?o("✅ Fulfilled promise ".concat(e," in ").concat(t,"ms")):r("❌ Rejected promise ".concat(e," in ").concat(t,"ms"))}),t)}))}a.form.addEventListener("submit",(function(e){e.preventDefault(),delay=parseInt(a.delay.value),step=parseInt(a.step.value),amount=parseInt(a.amount.value);for(var t=1;t<=amount;t+=1)u(t,delay+step*(t-1)).then((function(e){r.Notify.success(e)})).catch((function(e){r.Notify.failure(e)}));e.target.reset()}))}();
//# sourceMappingURL=03-promises.f7bb997a.js.map