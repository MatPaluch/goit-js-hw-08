function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return a[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var l=o("kEUo3");const n=document.querySelector(".feedback-form"),s=document.querySelector("[name=email]"),i=document.querySelector("[name=message]"),d={},u=JSON.parse(localStorage.getItem("feedback-form-state"));u&&(s.value=u.email,d.email=u.email,i.value=u.message,d.message=u.message),n.addEventListener("input",e(l).throttle((e=>{"email"===e.target.name&&(d.email=e.target.value),"message"===e.target.name&&(d.message=e.target.value),localStorage.setItem("feedback-form-state",JSON.stringify(d))}),500)),n.addEventListener("submit",(e=>{n.reset(),localStorage.clear(),console.log(d)}));
//# sourceMappingURL=03-feedback.636bffb6.js.map
