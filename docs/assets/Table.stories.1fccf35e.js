var x=Object.defineProperty,N=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var _=(e,a,o)=>a in e?x(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,s=(e,a)=>{for(var o in a||(a={}))S.call(a,o)&&_(e,o,a[o]);if(p)for(var o of p(a))y.call(a,o)&&_(e,o,a[o]);return e},c=(e,a)=>N(e,R(a));var i=(e,a)=>{var o={};for(var r in e)S.call(e,r)&&a.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&p)for(var r of p(e))a.indexOf(r)<0&&y.call(e,r)&&(o[r]=e[r]);return o};import{R as C}from"./index.be79fcbf.js";import{b as v,c as O,d as E}from"./index.esm.cf227d72.js";import{P as g}from"./index.65f1d40b.js";import"./Check.b717936f.js";import"./FormField.e4f52c7a.js";import{I as B}from"./Input.69c23bd8.js";import"./InputField.d5f4c248.js";import"./PeekableInputField.c6357cbd.js";import"./Radio.638ae4ce.js";import"./Select.6543b4f4.js";import"./SelectField.008b7972.js";import"./TextArea.39002fcc.js";import"./TextAreaField.76346a90.js";import{j as n,a as d}from"./jsx-runtime.b789c2e1.js";import"./iconBase.8e7190c9.js";import"./index.68ea96fa.js";const m=({onChange:e,value:a,placeholder:o="Search...",className:r=null})=>n("div",{className:`search-bar ${r}`,children:n(B,{placeholder:o,value:a,prefix:n(v,{className:"mt-1"}),type:"search",className:"text-truncate",onChange:t=>e(t.currentTarget.value)})});m.propTypes={onChange:g.func.isRequired,value:g.string.isRequired};try{m.displayName="TableSearchbox",m.__docgenInfo={description:"",displayName:"TableSearchbox",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"any"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"any"}},placeholder:{defaultValue:{value:"Search..."},description:"",name:"placeholder",required:!1,type:{name:"string"}},className:{defaultValue:{value:"null"},description:"",name:"className",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/ui-toolkit/components/Table/TableSearchbox.tsx#TableSearchbox"]={docgenInfo:m.__docgenInfo,name:"TableSearchbox",path:"src/ui-toolkit/components/Table/TableSearchbox.tsx#TableSearchbox"})}catch{}const l=({children:e,className:a=null})=>n("div",{className:`overflow-auto flex-fill ${a}`,children:n("table",{className:"table ui-toolkit-table table-hover",children:e})}),A=b=>{var h=b,{children:e,sortKey:a=null,sortDir:o=null,onSort:r=null}=h,t=i(h,["children","sortKey","sortDir","onSort"]);const T=r?C.Children.map(e,u=>C.cloneElement(u,{onSort:r,sortDir:u.props.id===a?o:null,sortable:u.props.sortable})):e;return n("thead",c(s({},t),{children:n("tr",{children:T})}))},I=h=>{var f=h,{children:e,id:a=null,sortDir:o=null,onSort:r=null,sortable:t=!0}=f,b=i(f,["children","id","sortDir","onSort","sortable"]);const T=r&&t,u=!!o;return T?d("th",c(s({scope:"col",className:"sortable",onClick:()=>r(a)},b),{children:[e," ",u?o==="asc"?n(O,{color:"grey",size:".75em"}):n(E,{color:"grey",size:".75em"}):null]})):n("th",c(s({scope:"col"},b),{children:e}))},k=o=>{var r=o,{children:e}=r,a=i(r,["children"]);return n("tbody",c(s({},a),{children:e}))},q=o=>{var r=o,{children:e}=r,a=i(r,["children"]);return n("tfoot",c(s({},a),{children:e}))},w=o=>{var r=o,{children:e}=r,a=i(r,["children"]);return n("tr",c(s({},a),{children:e}))},F=r=>{var t=r,{children:e,className:a=null}=t,o=i(t,["children","className"]);return n("td",c(s({className:a},o),{children:e}))};l.Header=A;l.Column=I;l.Body=k;l.Footer=q;l.Row=w;l.Cell=F;l.Search=m;try{l.displayName="Table",l.__docgenInfo={description:"",displayName:"Table",props:{className:{defaultValue:{value:"null"},description:"",name:"className",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/ui-toolkit/components/Table/Table.tsx#Table"]={docgenInfo:l.__docgenInfo,name:"Table",path:"src/ui-toolkit/components/Table/Table.tsx#Table"})}catch{}const Z={title:"Surfaces/Table",component:l,argTypes:{children:{control:!1}}},ee=()=>{const e=[{number:"1",name:"Test"},{number:"2",name:"Test 2"}];return d(l,{children:[d(l.Header,{children:[n(l.Column,{children:"Number"}),n(l.Column,{children:"Name"})]}),n(l.Body,{children:e.map(a=>d(l.Row,{children:[n(l.Cell,{children:a.number}),n(l.Cell,{children:a.name})]},a.number))})]})},ae=["Basic"];export{ee as Basic,ae as __namedExportsOrder,Z as default};
//# sourceMappingURL=Table.stories.1fccf35e.js.map