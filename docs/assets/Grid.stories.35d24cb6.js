var y=Object.defineProperty,h=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var s=(e,t,r)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,a=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&s(e,r,t[r]);if(n)for(var r of n(t))p.call(t,r)&&s(e,r,t[r]);return e},l=(e,t)=>h(e,f(t));var m=(e,t)=>{var r={};for(var i in e)c.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&n)for(var i of n(e))t.indexOf(i)<0&&p.call(e,i)&&(r[i]=e[i]);return r};import{s as g}from"./storybook.utils.67de74f5.js";import{C as _}from"./Card.33694831.js";import{j as u}from"./jsx-runtime.b789c2e1.js";import"./index.be79fcbf.js";import"./index.a228f116.js";import"./index.0c35013c.js";const o=w=>{var d=w,{width:e="250px",gap:t="10px",children:r}=d,i=m(d,["width","gap","children"]);return u("div",l(a({},i),{style:{display:"grid",gap:t,gridTemplateColumns:`repeat(auto-fill, minmax(min(${e}, 100%), 1fr)`,maxWidth:"100%"},children:r}))};try{o.displayName="Grid",o.__docgenInfo={description:"",displayName:"Grid",props:{width:{defaultValue:{value:"250px"},description:"The targeted width of each grid item. It won't be exactly this as it will stretch to fit the parent container while sticking as close this this width as it can.",name:"width",required:!1,type:{name:"string"}},gap:{defaultValue:{value:"10px"},description:"How much space between each grid item?",name:"gap",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Render an array of grid items inside the Grid component",name:"children",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/ui-toolkit/components/Grid/Grid.tsx#Grid"]={docgenInfo:o.__docgenInfo,name:"Grid",path:"src/ui-toolkit/components/Grid/Grid.tsx#Grid"})}catch{}var O={parameters:{storySource:{source:`import React from "react";

import { setupStories } from "../_storybook/storybook.utils";
import { Card } from "../Card/Card";
import { Grid, GridProps } from "./Grid";

export default {
  title: "Surfaces/Grid",
  component: Grid,
  argTypes: {
    children: {
      control: false,
    },
  },
};

const { createStory } = setupStories<GridProps>(Grid);

const items = Array.from(new Array(12), (_, index) => ({
  title: "Card " + index,
  subtitle: "This card was auto generated in the story",
  imageSize: "200px",
  image:
    "https://res.cloudinary.com/droopytersen/image/upload/c_scale,q_auto:good,w_1115/v1614564603/natanddrewsayido/things-to-do/181013jjw-0116-1.jpg",
}));

export const Basic = createStory({
  children: items.map((item, index) => <Card key={index} {...item} />),
});
`,locationsMap:{basic:{startLoc:{col:21,line:27},endLoc:{col:2,line:29},startBody:{col:21,line:27},endBody:{col:2,line:29}}}}},title:"Surfaces/Grid",component:o,argTypes:{children:{control:!1}}};const{createStory:x}=g(o),G=Array.from(new Array(12),(e,t)=>({title:"Card "+t,subtitle:"This card was auto generated in the story",imageSize:"200px",image:"https://res.cloudinary.com/droopytersen/image/upload/c_scale,q_auto:good,w_1115/v1614564603/natanddrewsayido/things-to-do/181013jjw-0116-1.jpg"})),R=x({children:G.map((e,t)=>u(_,a({},e),t))}),k=["Basic"];export{R as Basic,k as __namedExportsOrder,O as default};
//# sourceMappingURL=Grid.stories.35d24cb6.js.map
