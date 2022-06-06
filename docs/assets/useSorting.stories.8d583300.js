var g=Object.defineProperty,y=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;var m=(e,o,t)=>o in e?g(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,i=(e,o)=>{for(var t in o||(o={}))u.call(o,t)&&m(e,t,o[t]);if(n)for(var t of n(o))l.call(o,t)&&m(e,t,o[t]);return e},p=(e,o)=>y(e,h(o));var c=(e,o)=>{var t={};for(var s in e)u.call(e,s)&&o.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&n)for(var s of n(e))o.indexOf(s)<0&&l.call(e,s)&&(t[s]=e[s]);return t};import"./index.be79fcbf.js";import{c as r,A as S,M as x}from"./Props.ae9119dc.js";import"./iframe.ad13290e.js";import"./jsx-runtime.b789c2e1.js";import{P as k,S as T}from"./index.7fa186ee.js";import"./string.bf3fd91c.js";const w={},D="wrapper";function d(t){var s=t,{components:e}=s,o=c(s,["components"]);return r(D,p(i(i({},w),o),{components:e,mdxType:"MDXLayout"}),r(x,{title:"Hooks/useSorting",mdxType:"Meta"}),r("h1",null,"useSorting"),r("p",null,`A hook to help you manage sorting. Helps to deal with things like wrapping around back
to page 1 when you reach the max number of pages.`),r("pre",null,r("code",{parentName:"pre",className:"language-javascript"},`// You can grab the whole sorting object
let sorting = useSorting(items, { sortKey: "name", sortDir: "asc" });
// Or you can destructure
let { showingItems, onSort, sortKey, sortDir } = useSorting(items, {
  sortKey: "name",
  sortDir: "asc",
});
`)),r("h3",null,"Import"),r("pre",null,r("code",{parentName:"pre",className:"language-tsx"},`import { useSorting } from "~ui-toolkit/hooks/useSorting";
`)),r("h2",null,"Params"),r(k,{properties:[{name:"items",type:"array",description:"The items to sort.",isRequired:"Required"},{name:"initial",type:"object",description:"Takes sortDir (asc or desc) and/or sortKey properties.",isRequired:"Optional"},{name:"sortMethod",type:"function",description:"The sort method to use if complex sorting logic is required.",isRequired:"Optional"}],mdxType:"PropsTable"}),r(T,{path:"hooks/useSorting.ts",mdxType:"SourceCodeLink"},"View Source"))}d.isMDXComponent=!0;const M=()=>{throw new Error("Docs-only story")};M.parameters={docsOnly:!0};const a={title:"Hooks/useSorting",includeStories:["__page"]},f={};a.parameters=a.parameters||{};a.parameters.docs=p(i({},a.parameters.docs||{}),{page:()=>r(S,{mdxStoryNameToKey:f,mdxComponentAnnotations:a},r(d,null))});const P=["__page"];export{P as __namedExportsOrder,M as __page,a as default};
//# sourceMappingURL=useSorting.stories.8d583300.js.map