var g=Object.defineProperty,h=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var l=(t,a,r)=>a in t?g(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,i=(t,a)=>{for(var r in a||(a={}))u.call(a,r)&&l(t,r,a[r]);if(n)for(var r of n(a))d.call(a,r)&&l(t,r,a[r]);return t},p=(t,a)=>h(t,y(a));var m=(t,a)=>{var r={};for(var s in t)u.call(t,s)&&a.indexOf(s)<0&&(r[s]=t[s]);if(t!=null&&n)for(var s of n(t))a.indexOf(s)<0&&d.call(t,s)&&(r[s]=t[s]);return r};import"./index.be79fcbf.js";import{c as e,A as S,M as k}from"./Props.dd6274f3.js";import"./iframe.236b0c21.js";import"./jsx-runtime.b789c2e1.js";import{P as f,S as P}from"./index.7fa186ee.js";import"./string.bf3fd91c.js";const b={},w="wrapper";function c(r){var s=r,{components:t}=s,a=m(s,["components"]);return e(w,p(i(i({},b),a),{components:t,mdxType:"MDXLayout"}),e(k,{title:"Hooks/usePersistedStorage",mdxType:"Meta"}),e("h1",null,"usePersistedStorage"),e("p",null,"A hook that works just like ",e("inlineCode",{parentName:"p"},"usePersistedState"),`, except that it reads the value directly
from `,e("inlineCode",{parentName:"p"},"localStorage"),` instead of storing it with useState. This is useful in scenarios where
the storage key is dependent on a query string parameter that may change.`),e("pre",null,e("code",{parentName:"pre",className:"language-javascript"},`// Ex: Remember which tab is active across refreshes and browser tabs
let [tab, setTab] = usePersistedStorage("myapp:active-tab", "users");
`)),e("h2",null,"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-tsx"},`import { usePersistedStorage } from "~ui-toolkit/hooks/usePersistedStorage";
`)),e("h2",null,"Params"),e(f,{properties:[{name:"key",type:"string",description:"The name of of the cache key",isRequired:"Required"},{name:"defaultValue",type:"T",description:"Will only be used if there isn't anything cache",isRequired:"Required"},{name:"storage",type:"LocalStorage | SessionStorage",description:"Defaults to LocalStorage.",isRequired:"Optional"}],mdxType:"PropsTable"}),e("h2",null,"Return value"),e("p",null,"Returns an Array (a tuple) with a getter and a setter, just like ",e("inlineCode",{parentName:"p"},"React.useState")),e("pre",null,e("code",{parentName:"pre",className:"language-javascript"},`// You could call 'thing' whatever you want. Just like useState
let [tabKey, setTabKey] = usePersistedStorage("myapp-active-tab", "");
`)),e(P,{path:"hooks/usePersistedStorage.ts",mdxType:"SourceCodeLink"},"View Source"))}c.isMDXComponent=!0;const x=()=>{throw new Error("Docs-only story")};x.parameters={docsOnly:!0};const o={title:"Hooks/usePersistedStorage",includeStories:["__page"]},T={};o.parameters=o.parameters||{};o.parameters.docs=p(i({},o.parameters.docs||{}),{page:()=>e(S,{mdxStoryNameToKey:T,mdxComponentAnnotations:o},e(c,null))});const D=["__page"];export{D as __namedExportsOrder,x as __page,o as default};
//# sourceMappingURL=usePersistedStorage.stories.494278f1.js.map