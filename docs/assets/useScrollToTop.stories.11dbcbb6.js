var h=Object.defineProperty,T=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;var u=(o,t,r)=>t in o?h(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r,a=(o,t)=>{for(var r in t||(t={}))m.call(t,r)&&u(o,r,t[r]);if(l)for(var r of l(t))i.call(t,r)&&u(o,r,t[r]);return o},s=(o,t)=>T(o,R(t));var c=(o,t)=>{var r={};for(var n in o)m.call(o,n)&&t.indexOf(n)<0&&(r[n]=o[n]);if(o!=null&&l)for(var n of l(o))t.indexOf(n)<0&&i.call(o,n)&&(r[n]=o[n]);return r};import"./index.be79fcbf.js";import{c as e,A as y,M as S}from"./Props.dd6274f3.js";import"./iframe.236b0c21.js";import"./jsx-runtime.b789c2e1.js";import{S as f}from"./SourceCodeLink.be0a1d60.js";import"./string.bf3fd91c.js";const k={},g="wrapper";function d(r){var n=r,{components:o}=n,t=c(n,["components"]);return e(g,s(a(a({},k),t),{components:o,mdxType:"MDXLayout"}),e(S,{title:"Hooks/useScrollToTop",mdxType:"Meta"}),e("h1",null,"useScrollToTop"),e("p",null,"A React hook reset the scroll position anytime the url changes."),e("ul",null,e("li",{parentName:"ul"},"Assumes you are using React Router v6"),e("li",{parentName:"ul"},"Use it once per application"),e("li",{parentName:"ul"},"Place the hook near the top of your component tree, but inside the ",e("inlineCode",{parentName:"li"},"BrowserRouter")," (the React Router Context Provider).")),e("h3",null,"Dependencies"),e("pre",null,e("code",{parentName:"pre"},`npm i react-router-dom
`)),e("h3",null,"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { useScrollToTop } from "~ui-toolkit/hooks/useScrollToTop";
`)),e("h3",null,"Usage"),e("pre",null,e("code",{parentName:"pre",className:"language-tsx"},`import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useScrollToTop } from "~ui-toolkit/hooks/useScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {
  // You only need this hook once per app
  useScrollToTop();

  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="*" element={<NotFoundView />} />
      <Route path="/profile" element={<ProfileView />} />
    </Routes>
  );
}
`)),e(f,{path:"hooks/useScrollToTop.ts",mdxType:"SourceCodeLink"},"View Source"))}d.isMDXComponent=!0;const w=()=>{throw new Error("Docs-only story")};w.parameters={docsOnly:!0};const p={title:"Hooks/useScrollToTop",includeStories:["__page"]},N={};p.parameters=p.parameters||{};p.parameters.docs=s(a({},p.parameters.docs||{}),{page:()=>e(y,{mdxStoryNameToKey:N,mdxComponentAnnotations:p},e(d,null))});const L=["__page"];export{L as __namedExportsOrder,w as __page,p as default};
//# sourceMappingURL=useScrollToTop.stories.11dbcbb6.js.map
