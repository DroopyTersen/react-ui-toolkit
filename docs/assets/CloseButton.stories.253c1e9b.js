var i=Object.defineProperty;var r=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var l=(t,o,e)=>o in t?i(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,a=(t,o)=>{for(var e in o||(o={}))u.call(o,e)&&l(t,e,o[e]);if(r)for(var e of r(o))c.call(o,e)&&l(t,e,o[e]);return t};var p=(t,o)=>{var e={};for(var n in t)u.call(t,n)&&o.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&r)for(var n of r(t))o.indexOf(n)<0&&c.call(t,n)&&(e[n]=t[n]);return e};import{s as m}from"./storybook.utils.67de74f5.js";import{j as B}from"./jsx-runtime.b789c2e1.js";import"./index.be79fcbf.js";const s=e=>{var n=e,{className:t}=n,o=p(n,["className"]);return B("button",a({type:"button",className:"btn-close "+t,"aria-label":"Close"},o))};try{s.displayName="CloseButton",s.__docgenInfo={description:"",displayName:"CloseButton",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/ui-toolkit/components/Button/CloseButton.tsx#CloseButton"]={docgenInfo:s.__docgenInfo,name:"CloseButton",path:"src/ui-toolkit/components/Button/CloseButton.tsx#CloseButton"})}catch{}var y={parameters:{storySource:{source:`import { setupStories } from "../_storybook/storybook.utils";
import { CloseButton } from "./CloseButton";

export default {
  title: "Forms & Inputs/CloseButton",
  component: CloseButton,
};

const { createStory } = setupStories(CloseButton);

export const Default = createStory({});
`,locationsMap:{default:{startLoc:{col:23,line:11},endLoc:{col:38,line:11},startBody:{col:23,line:11},endBody:{col:38,line:11}}}}},title:"Forms & Inputs/CloseButton",component:s};const{createStory:C}=m(s),x=C({}),O=["Default"];export{x as Default,O as __namedExportsOrder,y as default};
//# sourceMappingURL=CloseButton.stories.253c1e9b.js.map
