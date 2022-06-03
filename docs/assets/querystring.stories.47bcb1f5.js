var d=Object.defineProperty,g=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var l=(r,t,a)=>t in r?d(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a,p=(r,t)=>{for(var a in t||(t={}))u.call(t,a)&&l(r,a,t[a]);if(s)for(var a of s(t))m.call(t,a)&&l(r,a,t[a]);return r},i=(r,t)=>g(r,h(t));var c=(r,t)=>{var a={};for(var n in r)u.call(r,n)&&t.indexOf(n)<0&&(a[n]=r[n]);if(r!=null&&s)for(var n of s(r))t.indexOf(n)<0&&m.call(r,n)&&(a[n]=r[n]);return a};import"./index.be79fcbf.js";import{c as e,A as b,M as q}from"./Props.dd6274f3.js";import"./iframe.236b0c21.js";import"./jsx-runtime.b789c2e1.js";import{S as f}from"./SourceCodeLink.be0a1d60.js";import"./string.bf3fd91c.js";const N={},C="wrapper";function y(a){var n=a,{components:r}=n,t=c(n,["components"]);return e(C,i(p(p({},N),t),{components:r,mdxType:"MDXLayout"}),e(q,{title:"Utils/querystring",mdxType:"Meta"}),e("h1",null,"Utils: ",e("inlineCode",{parentName:"h1"},"querystring")),e("p",null,"Helpers for translating a querystring back and forth between and object and a string."),e("blockquote",null,e("p",{parentName:"blockquote"},"It leverages ",e("inlineCode",{parentName:"p"},"URLSearchParams")," so if you need to support old browsers you may need to reimplement.")),e("h2",null,"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { querystring } from "~ui-toolkit/utils/querystring";
`)),e("h2",null,"Usage"),e("h3",null,e("inlineCode",{parentName:"h3"},"querystring.parse(queryStr:string)")),e("p",null,"Turns a query string into an object"),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`// https://mysite.com?foo=bar&beep=boop
let params = querystring.parse(location.search);
// { foo: "bar", beep: "boop" }
`)),e("h3",null,e("inlineCode",{parentName:"h3"},"querystring.stringify(params:object)")),e("p",null,"Turns an object into a query string."),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`let params = { foo: "bar", beep: "boop" };
let queryStr = querystring.stringify(params);
// "foo=bar&beep=boop"
`)),e("h3",null,e("inlineCode",{parentName:"h3"},"querystring.append(url:string, params:object)")),e("p",null,"Checks to see if the provided url already has query params, if so joins the new params with an ",e("inlineCode",{parentName:"p"},"&"),". Otherwise it joins with an ",e("inlineCode",{parentName:"p"},"?")),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`// Ex 1: URL that already has query string
const currentUrl = "https://mysite.com?thing1=value1";
const params = { foo: "bar", beep: "boop" };
const newUrl = querystring.append(currentUrl, params);
// "https://mysite.com?thing1=value1&foo=bar&beep=boop"

// Ex 2: URL that doesn't already have query string
const currentUrl = "https://mysite.com/thing1";
const params = { foo: "bar", beep: "boop" };
const newUrl = querystring.append(currentUrl, params);
// "https://mysite.com/thing1?foo=bar&beep=boop"
`)),e(f,{path:"utils/querystring.ts",mdxType:"SourceCodeLink"},"View Source"))}y.isMDXComponent=!0;const U=()=>{throw new Error("Docs-only story")};U.parameters={docsOnly:!0};const o={title:"Utils/querystring",includeStories:["__page"]},w={};o.parameters=o.parameters||{};o.parameters.docs=i(p({},o.parameters.docs||{}),{page:()=>e(b,{mdxStoryNameToKey:w,mdxComponentAnnotations:o},e(y,null))});const T=["__page"];export{T as __namedExportsOrder,U as __page,o as default};
//# sourceMappingURL=querystring.stories.47bcb1f5.js.map
