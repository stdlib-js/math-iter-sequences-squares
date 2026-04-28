"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=v(function(T,s){
var x=require('@stdlib/assert-is-plain-object/dist'),y=require('@stdlib/assert-has-own-property/dist'),O=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,o=require('@stdlib/error-tools-fmtprodmsg/dist');function h(e,r){return x(r)?y(r,"iter")&&(e.iter=r.iter,!O(r.iter))?new TypeError(o('0an2t',"iter",r.iter)):null:new TypeError(o('0an2V',r));}s.exports=h
});var g=v(function(j,d){
var u=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=require('@stdlib/symbol-iterator/dist'),w=f(),E=94906265;function c(e){var r,t,a,n,i;if(r={iter:E},arguments.length&&(n=w(r,e),n))throw n;return i=-1,t={},u(t,"next",m),u(t,"return",q),l&&u(t,l,p),t;function m(){return i+=1,a||i>=r.iter?{done:!0}:{value:i*i,done:!1}}function q(b){return a=!0,arguments.length?{value:b,done:!0}:{done:!0}}function p(){return c(r)}}d.exports=c
});var P=g();module.exports=P;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
