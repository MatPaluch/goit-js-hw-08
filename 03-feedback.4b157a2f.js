!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},r={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=n);var o=n("1WSnx"),l=document.querySelector(".feedback-form"),i=document.querySelector("[name=email]"),s=document.querySelector("[name=message]"),u={},d=JSON.parse(localStorage.getItem("feedback-form-state"));d&&(i.value=d.email,u.email=d.email,s.value=d.message,u.message=d.message),l.addEventListener("input",e(o).throttle((function(e){"email"===e.target.name&&(u.email=e.target.value),"message"===e.target.name&&(u.message=e.target.value),localStorage.setItem("feedback-form-state",JSON.stringify(u))}),500)),l.addEventListener("submit",(function(e){e.preventDefault(),console.log(u),l.reset(),localStorage.clear()}))}();
//# sourceMappingURL=03-feedback.4b157a2f.js.map