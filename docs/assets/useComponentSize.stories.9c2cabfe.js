var h=Object.defineProperty,f=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;var l=(e,t,o)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,m=(e,t)=>{for(var o in t||(t={}))u.call(t,o)&&l(e,o,t[o]);if(s)for(var o of s(t))i.call(t,o)&&l(e,o,t[o]);return e},p=(e,t)=>f(e,C(t));var c=(e,t)=>{var o={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&s)for(var r of s(e))t.indexOf(r)<0&&i.call(e,r)&&(o[r]=e[r]);return o};import"./index.be79fcbf.js";import{c as n,A as S,M as g}from"./Props.dd6274f3.js";import"./iframe.236b0c21.js";import"./jsx-runtime.b789c2e1.js";import{S as k}from"./SourceCodeLink.be0a1d60.js";import"./string.bf3fd91c.js";const y={},x="wrapper";function d(o){var r=o,{components:e}=r,t=c(r,["components"]);return n(x,p(m(m({},y),t),{components:e,mdxType:"MDXLayout"}),n(g,{title:"Hooks/useComponentSize",mdxType:"Meta"}),n("h1",null,"useComponentSize"),n("p",null,"A React hook that will track the size of an element."),n("h3",null,"Import"),n("pre",null,n("code",{parentName:"pre",className:"language-js"},`import { useComponentSize } from "~ui-toolkit/hooks/useComponentSize";
`)),n("h3",null,"Usage"),n("pre",null,n("code",{parentName:"pre",className:"language-tsx"},`function ComponentSizeDemo() {
  // 1. Create a ref to be attached to a dom element
  let elementRef = useRef(null);
  // 2. Pass the ref to the hook
  let { width, height } = useComponentSize(elementRef);

  return (
    // 3.  Make sure to attach the ref on a dom element
    <div ref={elementRef}>A bunch of other stuff would go here</div>
  );
}
`)),n(k,{path:"hooks/useComponentSize.ts",mdxType:"SourceCodeLink"},"View Source"))}d.isMDXComponent=!0;const z=()=>{throw new Error("Docs-only story")};z.parameters={docsOnly:!0};const a={title:"Hooks/useComponentSize",includeStories:["__page"]},M={};a.parameters=a.parameters||{};a.parameters.docs=p(m({},a.parameters.docs||{}),{page:()=>n(S,{mdxStoryNameToKey:M,mdxComponentAnnotations:a},n(d,null))});const T=["__page"];export{T as __namedExportsOrder,z as __page,a as default};
//# sourceMappingURL=useComponentSize.stories.9c2cabfe.js.map
