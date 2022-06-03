var S=Object.defineProperty,x=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var o=(e,a,t)=>a in e?S(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,p=(e,a)=>{for(var t in a||(a={}))c.call(a,t)&&o(e,t,a[t]);if(n)for(var t of n(a))m.call(a,t)&&o(e,t,a[t]);return e},u=(e,a)=>x(e,N(a));var h=(e,a)=>{var t={};for(var r in e)c.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&n)for(var r of n(e))a.indexOf(r)<0&&m.call(e,r)&&(t[r]=e[r]);return t};import{R as b}from"./index.be79fcbf.js";import{L as v}from"./index.a228f116.js";import{a as f,j as i}from"./jsx-runtime.b789c2e1.js";const l=O=>{var d=O,{title:e,subtitle:a,image:t,url:r,imageSize:g="300px",children:y,className:C=""}=d,_=h(d,["title","subtitle","image","url","imageSize","children","className"]);const s=r?v:"span";return f("div",u(p({className:"card "+C},_),{children:[t&&i(s,{to:r,children:i("img",{style:{height:g,width:"100%"},className:"card-img-top",src:t,loading:"lazy"})}),f("div",{className:"card-body",children:[i(s,{to:r,className:"link-primary text-decoration-none",children:i("h5",{className:"card-title",children:e})}),a&&i("div",{className:"card-subtitle mb-2 text-muted",children:a}),y]})]}))};b.memo(l);try{l.displayName="Card",l.__docgenInfo={description:"",displayName:"Card",props:{title:{defaultValue:null,description:"The card title. You can pass a string or JSX",name:"title",required:!0,type:{name:"string | Element"}},subtitle:{defaultValue:null,description:"The card subtitle title. You can pass a string or JSX",name:"subtitle",required:!1,type:{name:"string"}},url:{defaultValue:null,description:"If provided the title and the (optional) image will become links pointed at the passed in url.",name:"url",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"Optional image url",name:"image",required:!1,type:{name:"string"}},imageSize:{defaultValue:{value:"300px"},description:"Allows you to control the height of the image",name:"imageSize",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Whatever JSX you put inside the card component will render under the subtitle.",name:"children",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/ui-toolkit/components/Card/Card.tsx#Card"]={docgenInfo:l.__docgenInfo,name:"Card",path:"src/ui-toolkit/components/Card/Card.tsx#Card"})}catch{}export{l as C};
//# sourceMappingURL=Card.33694831.js.map