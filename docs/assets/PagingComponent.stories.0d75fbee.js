import{r as g}from"./index.be79fcbf.js";import{j as s,a as y,F as C}from"./jsx-runtime.b789c2e1.js";function x(e,n){let i=g.exports.useRef(!1);g.exports.useEffect(()=>{if(i.current)return e();i.current=!0},n)}function h(e,n){if(e){const i=parseInt(e+"");if(!Number.isNaN(i))e=i;else return 1}return n>0&&e>n||e<1?1:e}function _(e,{initialPage:n=1}={}){const[i,o]=g.exports.useState(()=>h(n,e));return g.exports.useEffect(()=>{o(h(n,e))},[n,e]),{currentPage:i,goForward:()=>{let t=i+1;t>e&&(t=1),o(t)},goBack:()=>{let t=i-1;t<1&&(t=e),o(t)},goTo:t=>{t>e&&(t=e),t<1&&(t=1),o(t)},totalPages:e}}const k=function(e,n,{initialPage:i=1}={}){let o=Math.ceil(e.length/n),p=_(o,{initialPage:i}),r=(p.currentPage-1)*n,c=r+n;c>e.length;let t=e.slice(r,c);return x(()=>{p.goTo(1)},[e]),[t,p]};function l({totalPages:e,currentPage:n,onChange:i,maxPagesToDisplay:o=5,className:p=""}){const r=[];if(e<=o+1)for(let a=1;a<=e;++a)r.push({page:a,display:a.toString()});else{const a=Math.floor((n-1)/o),d=a*o,m=d+1,f=Math.min(d+o,e);a>0&&(r.push({page:1,display:"1"}),r.push({page:m-1,display:"..."}));for(let u=m;u<=f;++u)r.push({page:u,display:u.toString()});f<e&&(r.push({page:f+1,display:"..."}),r.push({page:e,display:e.toString()}))}const c=n>1,t=n<e;return s("nav",{className:p+" mb-3",children:y("ul",{className:"pagination justify-content-end mb-0",children:[s("li",{className:"page-item"+(c?"":" disabled"),children:s("a",{className:"page-link"+(c?" text-dark":""),href:"#",onClick:a=>{a.preventDefault(),i(n-1)},children:"Previous"})}),r.map(a=>s("li",{className:"page-item"+(n==a.page?" active":""),children:s("a",{className:"page-link "+(n==a.page?"bg-dark":"text-dark"),href:"#",onClick:d=>{d.preventDefault(),i(a.page)},children:a.display})},a.page)),s("li",{className:"page-item"+(t?"":" disabled"),children:s("a",{className:"page-link"+(t?" text-dark":""),href:"#",onClick:a=>{a.preventDefault(),i(n+1)},children:"Next"})})]})})}try{l.displayName="PagingComponent",l.__docgenInfo={description:"",displayName:"PagingComponent",props:{totalPages:{defaultValue:null,description:"",name:"totalPages",required:!0,type:{name:"number"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(page: number) => void"}},maxPagesToDisplay:{defaultValue:{value:"5"},description:"",name:"maxPagesToDisplay",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/ui-toolkit/components/Paging/PagingComponent.tsx#PagingComponent"]={docgenInfo:l.__docgenInfo,name:"PagingComponent",path:"src/ui-toolkit/components/Paging/PagingComponent.tsx#PagingComponent"})}catch{}const T={title:"Forms & Inputs/PagingComponent",component:l,argTypes:{children:{control:!1}}},b=()=>{const e=[{number:"1",name:"Test"},{number:"2",name:"Test 2"}],n=25,[i,o]=k(e,n);return s(C,{children:s(l,{totalPages:o.totalPages,currentPage:o.currentPage,onChange:o.goTo})})},E=["Basic"];export{b as Basic,E as __namedExportsOrder,T as default};
//# sourceMappingURL=PagingComponent.stories.0d75fbee.js.map
