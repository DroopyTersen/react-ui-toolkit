var d=Object.defineProperty,h=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var u=(e,o,t)=>o in e?d(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,p=(e,o)=>{for(var t in o||(o={}))m.call(o,t)&&u(e,t,o[t]);if(s)for(var t of s(o))g.call(o,t)&&u(e,t,o[t]);return e},i=(e,o)=>h(e,y(o));var l=(e,o)=>{var t={};for(var r in e)m.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&s)for(var r of s(e))o.indexOf(r)<0&&g.call(e,r)&&(t[r]=e[r]);return t};import"./index.be79fcbf.js";import{c as a,A as P,M as k}from"./Props.ae9119dc.js";import"./iframe.ad13290e.js";import"./jsx-runtime.b789c2e1.js";import{P as x,S as T}from"./index.7fa186ee.js";import"./string.bf3fd91c.js";const b={},w="wrapper";function c(t){var r=t,{components:e}=r,o=l(r,["components"]);return a(w,i(p(p({},b),o),{components:e,mdxType:"MDXLayout"}),a(k,{title:"Hooks/usePaging",mdxType:"Meta"}),a("h1",null,"usePaging"),a("p",null,`A hook to help you manage paging. Helps to deal with things like wrapping around back
to page 1 when you reach the max number of pages.`),a("pre",null,a("code",{parentName:"pre",className:"language-javascript"},`// You can grab the whole paging object
let paging = usePaging(items.length);
// Or you can destructure
let { currentPage, goForward, goBack, goTo } = usePaging(items.length);
`)),a("h3",null,"Import"),a("pre",null,a("code",{parentName:"pre",className:"language-tsx"},`import { usePaging } from "~ui-toolkit/hooks/usePaging";
`)),a("h2",null,"Params"),a(x,{properties:[{name:"totalItems",type:"number",description:"The total number of items you have.",isRequired:"Required"},{name:"props",type:"object",description:"Takes initialPage property.",isRequired:"Optional"}],mdxType:"PropsTable"}),a(T,{path:"hooks/usePaging.ts",mdxType:"SourceCodeLink"},"View Source"))}c.isMDXComponent=!0;const M=()=>{throw new Error("Docs-only story")};M.parameters={docsOnly:!0};const n={title:"Hooks/usePaging",includeStories:["__page"]},_={};n.parameters=n.parameters||{};n.parameters.docs=i(p({},n.parameters.docs||{}),{page:()=>a(P,{mdxStoryNameToKey:_,mdxComponentAnnotations:n},a(c,null))});const O=["__page"];export{O as __namedExportsOrder,M as __page,n as default};
//# sourceMappingURL=usePaging.stories.a505a20a.js.map