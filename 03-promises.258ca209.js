!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o);var i=o("6JpON"),u=document.querySelector(".form");function a(e,n){return new Promise((function(t,r){setTimeout((function(){Math.random()>.3?t("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):r("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}u.addEventListener("submit",(function(n){n.preventDefault();var t={};if(new FormData(n.currentTarget).forEach((function(e,n){t[n]=Number(e.trim())})),t.amount<=0||t.delay<0||t.step<0)return void e(i).Notify.warning("Wrong value(s) in field(s). Please fill form correctly");u.reset();for(var r=0;r<t.amount;r+=1){var o=t.delay+r*t.step;a(r,o).then((function(n){e(i).Notify.success(n)})).catch((function(n){e(i).Notify.failure(n)}))}}))}();
//# sourceMappingURL=03-promises.258ca209.js.map