"use strict";var v=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var f=v(function(T,s){
var x=require('@stdlib/assert-is-plain-object/dist'),y=require('@stdlib/assert-has-own-property/dist'),O=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,o=require('@stdlib/error-tools-fmtprodmsg/dist');function h(t,r){return x(r)?y(r,"iter")&&(t.iter=r.iter,!O(r.iter))?new TypeError(o('0an2t',"iter",r.iter)):null:new TypeError(o('0an2V',r));}s.exports=h
});var g=v(function(j,d){
var u=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=require('@stdlib/symbol-iterator/dist'),w=f(),E=94906265;function c(t){var r,e,a,n,i;if(r={iter:E},arguments.length&&(n=w(r,t),n))throw n;return i=-1,e={},u(e,"next",m),u(e,"return",q),l&&u(e,l,p),e;function m(){return i+=1,a||i>=r.iter?{done:!0}:{value:i*i,done:!1}}function q(b){return a=!0,arguments.length?{value:b,done:!0}:{done:!0}}function p(){return c(r)}}d.exports=c
});var P=g();module.exports=P;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
