// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).iterSquaresSeq=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,c=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var l,a,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(c.call(t,r)||f.call(t,r)?(l=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=l):t[r]=e.value),y="get"in e,p="set"in e,a&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,r,e.get),p&&i&&i.call(t,r,e.set),t};var l=r;function a(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var y=Object.prototype.hasOwnProperty;function p(t,r){return null!=t&&y.call(t,r)}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&p(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return s&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var m="function"==typeof Symbol?Symbol.toStringTag:"";var j=v()?function(t){var r,e,n;if(null==t)return d.call(t);e=t[m],r=p(t,m);try{t[m]=void 0}catch(r){return d.call(t)}return n=d.call(t),r?t[m]=e:delete t[m],n}:function(t){return d.call(t)};var _=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};var g=/./;function h(t){return"boolean"==typeof t}var O=Boolean.prototype.toString;var w=v();function S(t){return"object"==typeof t&&(t instanceof Boolean||(w?function(t){try{return O.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function P(t){return h(t)||S(t)}function E(){return new Function("return this;")()}a(P,"isPrimitive",h),a(P,"isObject",S);var T="object"==typeof self?self:null,I="object"==typeof window?window:null,A="object"==typeof global?global:null;var N=function(t){if(arguments.length){if(!h(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(T)return T;if(I)return I;if(A)return A;throw new Error("unexpected error. Unable to resolve global object.")}(),B=N.document&&N.document.childNodes,x=Int8Array;function F(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;function C(t){return null!==t&&"object"==typeof t}function G(t){var r,e,n,o;if(("Object"===(e=j(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=V.exec(n.toString()))return r[1]}return C(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(F,"REGEXP",V),a(C,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!_(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(C));var k="function"==typeof g||"object"==typeof x||"function"==typeof B?function(t){return G(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?G(t).toLowerCase():r};function L(t){return"function"===k(t)}var M,q=Object.getPrototypeOf;M=L(Object.getPrototypeOf)?q:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var J=M;var R=Object.prototype;function U(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!_(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),J(t))}(t),!r||!p(t,"constructor")&&p(r,"constructor")&&L(r.constructor)&&"[object Function]"===j(r.constructor)&&p(r,"isPrototypeOf")&&L(r.isPrototypeOf)&&(r===R||function(t){var r;for(r in t)if(!p(t,r))return!1;return!0}(t)))}function Y(t){return"number"==typeof t}var X=Number,z=X.prototype.toString;var D=v();function H(t){return"object"==typeof t&&(t instanceof X||(D?function(t){try{return z.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function K(t){return Y(t)||H(t)}a(K,"isPrimitive",Y),a(K,"isObject",H);var Q=Number.POSITIVE_INFINITY,W=X.NEGATIVE_INFINITY,Z=Math.floor;function $(t){return t<Q&&t>W&&Z(r=t)===r;var r}function tt(t){return Y(t)&&$(t)}function rt(t){return H(t)&&$(t.valueOf())}function et(t){return tt(t)||rt(t)}function nt(t){return tt(t)&&t>=0}function ot(t){return rt(t)&&t.valueOf()>=0}function ut(t){return nt(t)||ot(t)}function it(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}function ct(t,r){return U(r)?p(r,"iter")&&(t.iter=r.iter,!nt(r.iter))?new TypeError(it("0IJ35","iter",r.iter)):null:new TypeError(it("0IJ2h",r))}a(et,"isPrimitive",tt),a(et,"isObject",rt),a(ut,"isPrimitive",nt),a(ut,"isObject",ot);var ft=94906265;return function t(r){var e,n,o,u,i;if(e={iter:ft},arguments.length&&(u=ct(e,r)))throw u;return i=-1,a(n={},"next",c),a(n,"return",f),b&&a(n,b,l),n;function c(){return i+=1,o||i>=e.iter?{done:!0}:{value:i*i,done:!1}}function f(t){return o=!0,arguments.length?{value:t,done:!0}:{done:!0}}function l(){return t(e)}}}));
//# sourceMappingURL=index.js.map
