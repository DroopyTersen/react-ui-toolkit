var x=Object.defineProperty,y=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;var u=(e,t,r)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,n=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&u(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&u(e,r,t[r]);return e},i=(e,t)=>y(e,h(t));var c=(e,t)=>{var r={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&s)for(var a of s(e))t.indexOf(a)<0&&l.call(e,a)&&(r[a]=e[a]);return r};import"./index.be79fcbf.js";import{c as o,A as v,M as D}from"./Props.dd6274f3.js";import"./iframe.236b0c21.js";import"./jsx-runtime.b789c2e1.js";import{P as d,S as g}from"./index.7fa186ee.js";import"./string.bf3fd91c.js";const N={},q="wrapper";function f(r){var a=r,{components:e}=a,t=c(a,["components"]);return o(q,i(n(n({},N),t),{components:e,mdxType:"MDXLayout"}),o(D,{title:"Hooks/useDataExport",mdxType:"Meta"}),o("h1",null,"useDataExport"),o("p",null,"A hook that returns a function to export tabular data to csv and prompt a browser download"),o("pre",null,o("code",{parentName:"pre",className:"language-javascript"},`const props: DataExportProps = {
  columns: {
    quoteNumber: { title: "Quote Number", format: (value) => value },
    createdOn: { title: "Created On", format: (value) => formatDateOnly(value, "M/D/YY") },
    updatedOn: { title: "Last Update", format: (value) => getFromNow(value) },
    projectName: { title: "Project Name", format: (value) => value },
    quoteName: { title: "Quote Name", format: (value) => value },
    totalCustomerPrice: { title: "Amount", format: (value) => formatUSCurrency(value || 0) },
  },
  format: "csv",
  fileName: "quotes.csv",
};

let exportFn = useDataExport(items, props);

exportFn();
`)),o("h2",null,"Import"),o("pre",null,o("code",{parentName:"pre",className:"language-tsx"},`import { useDataExport } from "~ui-toolkit/hooks/useDataExport";
`)),o("h2",null,"Params"),o(d,{properties:[{name:"items",type:"Array",description:"An array containing the records to export",isRequired:"Required"},{name:"props",type:"object",description:"The properties specifying which columns to export, etc.",isRequired:"Required"}],mdxType:"PropsTable"}),o("h2",null,"Props Object Parameter"),o(d,{properties:[{name:"columns",type:"object",description:"An object containing a title and optional format function",isRequired:"Required"},{name:"fileName",type:"string",description:"The namea of the file to export",isRequired:"Required"},{name:"format",type:"string",description:"The file format to create. Currently only supports csv",isRequired:"Optional"}],mdxType:"PropsTable"}),o(g,{path:"hooks/useDataExport.ts",mdxType:"SourceCodeLink"},"View Source"))}f.isMDXComponent=!0;const T=()=>{throw new Error("Docs-only story")};T.parameters={docsOnly:!0};const p={title:"Hooks/useDataExport",includeStories:["__page"]},b={};p.parameters=p.parameters||{};p.parameters.docs=i(n({},p.parameters.docs||{}),{page:()=>o(v,{mdxStoryNameToKey:b,mdxComponentAnnotations:p},o(f,null))});const A=["__page"];export{A as __namedExportsOrder,T as __page,p as default};
//# sourceMappingURL=useDataExport.stories.6cad52ab.js.map
