var h=Object.defineProperty,N=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var p=(a,t,n)=>t in a?h(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n,o=(a,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(a,n,t[n]);if(i)for(var n of i(t))d.call(t,n)&&p(a,n,t[n]);return a},s=(a,t)=>N(a,C(t));var m=(a,t)=>{var n={};for(var l in a)u.call(a,l)&&t.indexOf(l)<0&&(n[l]=a[l]);if(a!=null&&i)for(var l of i(a))t.indexOf(l)<0&&d.call(a,l)&&(n[l]=a[l]);return n};import"./index.be79fcbf.js";import{c as e,A as g,M as y}from"./Props.ae9119dc.js";import"./iframe.ad13290e.js";import"./jsx-runtime.b789c2e1.js";import{S as f}from"./SourceCodeLink.be0a1d60.js";import"./string.bf3fd91c.js";const S={},w="wrapper";function c(n){var l=n,{components:a}=l,t=m(l,["components"]);return e(w,s(o(o({},S),t),{components:a,mdxType:"MDXLayout"}),e(y,{title:"Utils/cache",mdxType:"Meta"}),e("h1",null,"Utils: ",e("inlineCode",{parentName:"h1"},"cache")),e("p",null,"Helpers for synchronously working with browser ",e("inlineCode",{parentName:"p"},"Storage")," apis (",e("inlineCode",{parentName:"p"},"localStorage")," and/or ",e("inlineCode",{parentName:"p"},"sessionStorage"),") with built in capabilities to check expiration."),e("h2",null,"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { getCache, setCache } from "~ui-toolkit/utils/querystring";
`)),e("h2",null,"Usage"),e("h3",null,e("inlineCode",{parentName:"h3"},"getCache(key:string)")),e("ul",null,e("li",{parentName:"ul"},"Uses the default ",e("inlineCode",{parentName:"li"},"CacheOptions")," to get a value (see below for explanation of CacheOptions and defaults)."),e("li",{parentName:"ul"},"Returns ",e("inlineCode",{parentName:"li"},"null")," if nothing is found"),e("li",{parentName:"ul"},"It will attempt to parse the value as JSON")),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`let currentUser = getCache("myapp:current-user");
// {
//   id: "123"
//   name: "Andrew Petersen"
// }
`)),e("h3",null,e("inlineCode",{parentName:"h3"},"getCache({key:string, location?:Storage })")),e("p",null,"Use this option if you want to override the default storage location."),e("ul",null,e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"key")," is required"),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"location")," is optional and should be ",e("inlineCode",{parentName:"li"},"localStorage")," or ",e("inlineCode",{parentName:"li"},"sessionStorage"),".",e("ul",{parentName:"li"},e("li",{parentName:"ul"},"If not provided, the default location will be used."))),e("li",{parentName:"ul"},"Returns ",e("inlineCode",{parentName:"li"},"null")," if nothing is found"),e("li",{parentName:"ul"},"It will attempt to parse the value as JSON")),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`let currentUser = getCache({ key: "myapp:current-user", location: sessionStorage });
// {
//   id: "123"
//   name: "Andrew Petersen"
// }
`)),e("h3",null,e("inlineCode",{parentName:"h3"},"setCache(key:string, value:any)")),e("ul",null,e("li",{parentName:"ul"},"Uses the default ",e("inlineCode",{parentName:"li"},"CacheOptions")," to store a value."),e("li",{parentName:"ul"},"It will attempt to stringify the passed in value (unless it is already a string)")),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`let currentUser = {
  id: "123"
  name: "Andrew Petersen"
}
setCache("myapp:current-user", currentUser);
`)),e("h3",null,e("inlineCode",{parentName:"h3"},"setCache({ key:string, location?:Storage, duration?:number }, value:any)")),e("ul",null,e("li",{parentName:"ul"},"Uses the default ",e("inlineCode",{parentName:"li"},"CacheOptions")," to store a value."),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"key")," is required"),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"location")," is optional and should be ",e("inlineCode",{parentName:"li"},"localStorage")," or ",e("inlineCode",{parentName:"li"},"sessionStorage"),".",e("ul",{parentName:"li"},e("li",{parentName:"ul"},"If not provided, the default will be used."))),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"duration")," is the optional number of milliseconds the cached",e("ul",{parentName:"li"},e("li",{parentName:"ul"},"If not provided, the default will be used."))),e("li",{parentName:"ul"},"It will stringify the passed in value (unless it is already a string)")),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`let currentUser = {
  id: "123"
  name: "Andrew Petersen"
}
setCache({
  key: "myapp:current-user",
  location: sessionStorage,
  duration: 1000*60*60 // 1 hour
 }, currentUser);
`)),e("h2",null,e("inlineCode",{parentName:"h2"},"CacheOptions")," & Defaults"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"getCache")," and ",e("inlineCode",{parentName:"p"},"setCache")," need to know 3 things:"),e("ol",null,e("li",{parentName:"ol"},"What is the cache key?"),e("li",{parentName:"ol"},e("inlineCode",{parentName:"li"},"localStorage")," or ",e("inlineCode",{parentName:"li"},"sessionStorage")),e("li",{parentName:"ol"},"When should the cached value expire?")),e("p",null,"These are referred to as the ",e("inlineCode",{parentName:"p"},"CacheOptions"),"."),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`export interface CacheOptions {
  duration?: number;
  location?: Storage;
  key?: string;
}
`)),e("p",null,"The ",e("inlineCode",{parentName:"p"},"utils/cache.ts"),` module has some sane defaults
so that all you need to pass is a cache key string. You can change these defaults
for your project, but you can also pass a `,e("inlineCode",{parentName:"p"},"CacheOptions")," directly to ",e("inlineCode",{parentName:"p"},"getCache"),`
and `,e("inlineCode",{parentName:"p"},"setCache")," to override the defaults."),e("p",null,e("em",{parentName:"p"},"Here the cache is defaulted use ",e("inlineCode",{parentName:"em"},"localStorage")," with a 1 day expiration.")),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`const defaultConfig: CacheOptions = {
  // 86400000 = 1000 * 60 * 60 * 24 = 1 DAY
  duration: 86400000,
  location: localStorage,
};
`)),e(f,{path:"utils/cache.ts",mdxType:"SourceCodeLink"},"View Source"))}c.isMDXComponent=!0;const k=()=>{throw new Error("Docs-only story")};k.parameters={docsOnly:!0};const r={title:"Utils/cache",includeStories:["__page"]},v={};r.parameters=r.parameters||{};r.parameters.docs=s(o({},r.parameters.docs||{}),{page:()=>e(g,{mdxStoryNameToKey:v,mdxComponentAnnotations:r},e(c,null))});const _=["__page"];export{_ as __namedExportsOrder,k as __page,r as default};
//# sourceMappingURL=cache.stories.78502fa2.js.map
