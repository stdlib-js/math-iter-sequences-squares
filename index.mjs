// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function o(d){var m,l,p,j,u;if(m={iter:94906265},arguments.length&&(j=function(e,t){return r(t)?n(t,"iter")&&(e.iter=t.iter,!s(t.iter))?new TypeError(i("0an2t","iter",t.iter)):null:new TypeError(i("0an2V",t))}(m,d),j))throw j;return u=-1,e(l={},"next",(function(){if(u+=1,p||u>=m.iter)return{done:!0};return{value:u*u,done:!1}})),e(l,"return",(function(e){if(p=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),t&&e(l,t,(function(){return o(m)})),l}export{o as default};
//# sourceMappingURL=index.mjs.map
