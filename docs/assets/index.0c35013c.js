import{r as c}from"./index.be79fcbf.js";function O(){return O=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},O.apply(this,arguments)}var v;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(v||(v={}));var j=function(t){return t};function A(t){t===void 0&&(t={});var e=t,n=e.initialEntries,a=n===void 0?["/"]:n,r=e.initialIndex,o=a.map(function(l){var u=j(O({pathname:"/",search:"",hash:"",state:null,key:N()},typeof l=="string"?P(l):l));return u}),i=k(r==null?o.length-1:r,0,o.length-1),s=v.Pop,f=o[i],m=H(),x=H();function E(l){return typeof l=="string"?l:B(l)}function y(l,u){return u===void 0&&(u=null),j(O({pathname:f.pathname,search:"",hash:""},typeof l=="string"?P(l):l,{state:u,key:N()}))}function g(l,u,h){return!x.length||(x.call({action:l,location:u,retry:h}),!1)}function d(l,u){s=l,f=u,m.call({action:s,location:f})}function b(l,u){var h=v.Push,p=y(l,u);function C(){b(l,u)}g(h,p,C)&&(i+=1,o.splice(i,o.length,p),d(h,p))}function W(l,u){var h=v.Replace,p=y(l,u);function C(){W(l,u)}g(h,p,C)&&(o[i]=p,d(h,p))}function S(l){var u=k(i+l,0,o.length-1),h=v.Pop,p=o[u];function C(){S(l)}g(h,p,C)&&(i=u,d(h,p))}var z={get index(){return i},get action(){return s},get location(){return f},createHref:E,push:b,replace:W,go:S,back:function(){S(-1)},forward:function(){S(1)},listen:function(u){return m.push(u)},block:function(u){return x.push(u)}};return z}function k(t,e,n){return Math.min(Math.max(t,e),n)}function H(){var t=[];return{get length(){return t.length},push:function(n){return t.push(n),function(){t=t.filter(function(a){return a!==n})}},call:function(n){t.forEach(function(a){return a&&a(n)})}}}function N(){return Math.random().toString(36).substr(2,8)}function B(t){var e=t.pathname,n=e===void 0?"/":e,a=t.search,r=a===void 0?"":a,o=t.hash,i=o===void 0?"":o;return r&&r!=="?"&&(n+=r.charAt(0)==="?"?r:"?"+r),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function P(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var a=t.indexOf("?");a>=0&&(e.search=t.substr(a),t=t.substr(0,a)),t&&(e.pathname=t)}return e}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const w=c.exports.createContext(null),M=c.exports.createContext(null),J=c.exports.createContext({outlet:null,matches:[]});function R(t,e){if(!t)throw new Error(e)}function I(t,e){e===void 0&&(e="/");let{pathname:n,search:a="",hash:r=""}=typeof t=="string"?P(t):t;return{pathname:n?n.startsWith("/")?n:K(n,e):e,search:F(a),hash:G(r)}}function K(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function T(t,e,n){let a=typeof t=="string"?P(t):t,r=t===""||a.pathname===""?"/":a.pathname,o;if(r==null)o=n;else{let s=e.length-1;if(r.startsWith("..")){let f=r.split("/");for(;f[0]==="..";)f.shift(),s-=1;a.pathname=f.join("/")}o=s>=0?e[s]:"/"}let i=I(a,o);return r&&r!=="/"&&r.endsWith("/")&&!i.pathname.endsWith("/")&&(i.pathname+="/"),i}function U(t){return t===""||t.pathname===""?"/":typeof t=="string"?P(t).pathname:t.pathname}function q(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const $=t=>t.join("/").replace(/\/\/+/g,"/"),D=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),F=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,G=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Y(t){L()||R(!1);let{basename:e,navigator:n}=c.exports.useContext(w),{hash:a,pathname:r,search:o}=Q(t),i=r;if(e!=="/"){let s=U(t),f=s!=null&&s.endsWith("/");i=r==="/"?e+(f?"/":""):$([e,r])}return n.createHref({pathname:i,search:o,hash:a})}function L(){return c.exports.useContext(M)!=null}function _(){return L()||R(!1),c.exports.useContext(M).location}function Z(){L()||R(!1);let{basename:t,navigator:e}=c.exports.useContext(w),{matches:n}=c.exports.useContext(J),{pathname:a}=_(),r=JSON.stringify(n.map(s=>s.pathnameBase)),o=c.exports.useRef(!1);return c.exports.useEffect(()=>{o.current=!0}),c.exports.useCallback(function(s,f){if(f===void 0&&(f={}),!o.current)return;if(typeof s=="number"){e.go(s);return}let m=T(s,JSON.parse(r),a);t!=="/"&&(m.pathname=$([t,m.pathname])),(f.replace?e.replace:e.push)(m,f.state)},[t,e,r,a])}function Q(t){let{matches:e}=c.exports.useContext(J),{pathname:n}=_(),a=JSON.stringify(e.map(r=>r.pathnameBase));return c.exports.useMemo(()=>T(t,JSON.parse(a),n),[t,a,n])}function tt(t){let{basename:e,children:n,initialEntries:a,initialIndex:r}=t,o=c.exports.useRef();o.current==null&&(o.current=A({initialEntries:a,initialIndex:r}));let i=o.current,[s,f]=c.exports.useState({action:i.action,location:i.location});return c.exports.useLayoutEffect(()=>i.listen(f),[i]),c.exports.createElement(V,{basename:e,children:n,location:s.location,navigationType:s.action,navigator:i})}function V(t){let{basename:e="/",children:n=null,location:a,navigationType:r=v.Pop,navigator:o,static:i=!1}=t;L()&&R(!1);let s=D(e),f=c.exports.useMemo(()=>({basename:s,navigator:o,static:i}),[s,o,i]);typeof a=="string"&&(a=P(a));let{pathname:m="/",search:x="",hash:E="",state:y=null,key:g="default"}=a,d=c.exports.useMemo(()=>{let b=q(m,s);return b==null?null:{pathname:b,search:x,hash:E,state:y,key:g}},[s,m,x,E,y,g]);return d==null?null:c.exports.createElement(w.Provider,{value:f},c.exports.createElement(M.Provider,{children:n,value:{location:d,navigationType:r}}))}export{tt as M,Z as a,_ as b,B as c,Q as d,Y as u};
//# sourceMappingURL=index.0c35013c.js.map
