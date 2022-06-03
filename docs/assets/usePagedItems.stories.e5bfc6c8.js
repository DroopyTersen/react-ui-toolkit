var c=Object.defineProperty,P=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var m=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,i=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&m(e,a,t[a]);if(n)for(var a of n(t))u.call(t,a)&&m(e,a,t[a]);return e},p=(e,t)=>P(e,y(t));var d=(e,t)=>{var a={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&n)for(var r of n(e))t.indexOf(r)<0&&u.call(e,r)&&(a[r]=e[r]);return a};import"./index.be79fcbf.js";import{c as o,A as h,M as k}from"./Props.dd6274f3.js";import"./iframe.236b0c21.js";import"./jsx-runtime.b789c2e1.js";import{P as b,S as x}from"./index.7fa186ee.js";import"./string.bf3fd91c.js";const T={},I="wrapper";function g(a){var r=a,{components:e}=r,t=d(r,["components"]);return o(I,p(i(i({},T),t),{components:e,mdxType:"MDXLayout"}),o(k,{title:"Hooks/usePagedItems",mdxType:"Meta"}),o("h1",null,"usePagedItems"),o("p",null,"A hook to help you manage only showing items on the current page."),o("pre",null,o("code",{parentName:"pre",className:"language-javascript"},`// Pass in the full item set and the number of items per page
let [pagedItems, paging] = usePagedItems(allItems, 10);

return (
  <>
    <Grid>
      {pagedItems.map((item) => (
        <Card key={item.id} title={item.name} />
      ))}
    </Grid>
    <div>
      <button disabled={paging.currentPage <= 1} onClick={paging.goBack}>
        Prev
      </button>
      <button disabled={paging.currentPage >= paging.totalPages} onClick={paging.goForward}>
        Next
      </button>
    </div>
  </>
);
`)),o("h3",null,"Import"),o("pre",null,o("code",{parentName:"pre",className:"language-tsx"},`import { usePagedItems } from "~ui-toolkit/hooks/usePaging";
`)),o("h2",null,"Params"),o(b,{properties:[{name:"allItems",type:"T[]",description:"The total item set.",isRequired:"Required"},{name:"itemsPerPage",type:"number",description:"The number of items to show on each page.",isRequired:"Required"},{name:"props",type:"object",description:"Takes initialPage property.",isRequired:"Optional"}],mdxType:"PropsTable"}),o(x,{path:"hooks/usePaging.ts",mdxType:"SourceCodeLink"},"View Source"))}g.isMDXComponent=!0;const C=()=>{throw new Error("Docs-only story")};C.parameters={docsOnly:!0};const s={title:"Hooks/usePagedItems",includeStories:["__page"]},f={};s.parameters=s.parameters||{};s.parameters.docs=p(i({},s.parameters.docs||{}),{page:()=>o(h,{mdxStoryNameToKey:f,mdxComponentAnnotations:s},o(g,null))});const R=["__page"];export{R as __namedExportsOrder,C as __page,s as default};
//# sourceMappingURL=usePagedItems.stories.e5bfc6c8.js.map
