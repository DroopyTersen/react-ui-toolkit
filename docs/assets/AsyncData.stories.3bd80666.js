var h=Object.defineProperty,A=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var d=(e,n,a)=>n in e?h(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,l=(e,n)=>{for(var a in n||(n={}))m.call(n,a)&&d(e,a,n[a]);if(i)for(var a of i(n))u.call(n,a)&&d(e,a,n[a]);return e},c=(e,n)=>A(e,D(n));var y=(e,n)=>{var a={};for(var r in e)m.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&i)for(var r of i(e))n.indexOf(r)<0&&u.call(e,r)&&(a[r]=e[r]);return a};import"./index.be79fcbf.js";import{c as t,A as g,M as _}from"./Props.dd6274f3.js";import"./iframe.236b0c21.js";import{a as C,j as p}from"./jsx-runtime.b789c2e1.js";import{u as N}from"./useAsyncData.85b8bd21.js";import{L as w}from"./Loading.2edd8b95.js";import"./string.bf3fd91c.js";const s=e=>{const{data:n,error:a,isLoading:r}=N(e.asyncFn,e.params,null);return console.log("\u{1F680} | data",n),a?C("div",{children:[p("h3",{children:"Error!"}),p("pre",{children:JSON.stringify(a,null,3)})]}):r?e.loading||p(w,{}):n!==null?e.children(n):null};try{s.displayName="AsyncData",s.__docgenInfo={description:"",displayName:"AsyncData",props:{asyncFn:{defaultValue:null,description:"",name:"asyncFn",required:!0,type:{name:"(...args: any[]) => Promise<T>"}},params:{defaultValue:null,description:"",name:"params",required:!0,type:{name:"any[]"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"Element"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/ui-toolkit/components/AsyncData/AsyncData.tsx#AsyncData"]={docgenInfo:s.__docgenInfo,name:"AsyncData",path:"src/ui-toolkit/components/AsyncData/AsyncData.tsx#AsyncData"})}catch{}const x={},S="wrapper";function f(a){var r=a,{components:e}=r,n=y(r,["components"]);return t(S,c(l(l({},x),n),{components:e,mdxType:"MDXLayout"}),t(_,{title:"State Management/AsyncData",component:s,mdxType:"Meta"}),t("h1",null,"AsyncData"),t("p",null,"The ",t("inlineCode",{parentName:"p"},"AsyncData"),` component allows us to wrap a component with an async
function to fetch to the view model. The AsyncData component will automatically...`),t("ul",null,t("li",{parentName:"ul"},"render an ",t("inlineCode",{parentName:"li"},"ErrorContainer")," if the request fails"),t("li",{parentName:"ul"},"render a loading spinner while the request is pending"),t("li",{parentName:"ul"},"render the ",t("inlineCode",{parentName:"li"},"children")," if the request comes back with data")),t("p",null,t("em",{parentName:"p"},"Example View")),t("pre",null,t("code",{parentName:"pre",className:"language-tsx"},`export const ClientListView = () => {
  return (
    <div className="clients-screen">
      <h1>Clients</h1>

      <AsyncData asyncFn={fetchClients} params={[]}>
        {/* 
        NOTE: this is a function, not standard JSX 
        'data' will be whatever the 'asyncFn' returned
      */}
        {(data) => <ClientsGrid clients={data.clients} />}
      </AsyncData>
    </div>
  );
};

const fetchClients = () => {
  return apiRequest("/api/clients");
};
`)))}f.isMDXComponent=!0;const E=()=>{throw new Error("Docs-only story")};E.parameters={docsOnly:!0};const o={title:"State Management/AsyncData",component:s,includeStories:["__page"]},T={};o.parameters=o.parameters||{};o.parameters.docs=c(l({},o.parameters.docs||{}),{page:()=>t(g,{mdxStoryNameToKey:T,mdxComponentAnnotations:o},t(f,null))});const X=["__page"];export{X as __namedExportsOrder,E as __page,o as default};
//# sourceMappingURL=AsyncData.stories.3bd80666.js.map
