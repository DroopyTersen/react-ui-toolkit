import{r as u}from"./index.be79fcbf.js";import{u as m,c as d,a as y,b,d as x}from"./index.0c35013c.js";/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function p(){return p=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},p.apply(this,arguments)}function C(e,a){if(e==null)return{};var t={},r=Object.keys(e),n,l;for(l=0;l<r.length;l++)n=r[l],!(a.indexOf(n)>=0)&&(t[n]=e[n]);return t}const v=["onClick","reloadDocument","replace","state","target","to"];function L(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const j=u.exports.forwardRef(function(a,t){let{onClick:r,reloadDocument:n,replace:l=!1,state:s,target:i,to:o}=a,c=C(a,v),h=m(o),g=O(o,{replace:l,state:s,target:i});function k(f){r&&r(f),!f.defaultPrevented&&!n&&g(f)}return u.exports.createElement("a",p({},c,{href:h,onClick:k,ref:t,target:i}))});function O(e,a){let{target:t,replace:r,state:n}=a===void 0?{}:a,l=y(),s=b(),i=x(e);return u.exports.useCallback(o=>{if(o.button===0&&(!t||t==="_self")&&!L(o)){o.preventDefault();let c=!!r||d(s)===d(i);l(e,{replace:c,state:n})}},[s,l,i,r,n,t,e])}export{j as L};
//# sourceMappingURL=index.a228f116.js.map
