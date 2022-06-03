var c=Object.defineProperty,d=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var r=(e,t,o)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,i=(e,t)=>{for(var o in t||(t={}))p.call(t,o)&&r(e,o,t[o]);if(n)for(var o of n(t))y.call(t,o)&&r(e,o,t[o]);return e},s=(e,t)=>d(e,m(t));import{s as h}from"./storybook.utils.67de74f5.js";import{C as l}from"./Card.33694831.js";import"./jsx-runtime.b789c2e1.js";import"./index.be79fcbf.js";import"./index.a228f116.js";import"./index.0c35013c.js";var I={parameters:{storySource:{source:`import { setupStories } from "../_storybook/storybook.utils";
import { Card, CardProps } from "./Card";

export default {
  title: "Surfaces/Card",
  component: Card,
  argTypes: { children: { control: false } },
};

const { createStory } = setupStories<CardProps>(Card);

export const Basic = createStory({
  title: "I am a card",
  subtitle: "I am the subtitle",
  style: { maxWidth: "400px" },
});

export const WithImage = createStory({
  title: "Fish in the Sawtooths",
  subtitle: "Stanley, ID",
  style: { maxWidth: "400px" },
  imageSize: "220px",
  image:
    "https://res.cloudinary.com/droopytersen/image/upload/c_scale,q_auto:good,w_1115/v1614564603/natanddrewsayido/things-to-do/181013jjw-0116-1.jpg",
});

export const WithLink = createStory({
  ...WithImage.args,
  url: "/items/123",
});
`,locationsMap:{basic:{startLoc:{col:21,line:12},endLoc:{col:2,line:16},startBody:{col:21,line:12},endBody:{col:2,line:16}},"with-image":{startLoc:{col:25,line:18},endLoc:{col:2,line:25},startBody:{col:25,line:18},endBody:{col:2,line:25}},"with-link":{startLoc:{col:24,line:27},endLoc:{col:2,line:30},startBody:{col:24,line:27},endBody:{col:2,line:30}}}}},title:"Surfaces/Card",component:l,argTypes:{children:{control:!1}}};const{createStory:a}=h(l),_=a({title:"I am a card",subtitle:"I am the subtitle",style:{maxWidth:"400px"}}),u=a({title:"Fish in the Sawtooths",subtitle:"Stanley, ID",style:{maxWidth:"400px"},imageSize:"220px",image:"https://res.cloudinary.com/droopytersen/image/upload/c_scale,q_auto:good,w_1115/v1614564603/natanddrewsayido/things-to-do/181013jjw-0116-1.jpg"}),b=a(s(i({},u.args),{url:"/items/123"})),B=["Basic","WithImage","WithLink"];export{_ as Basic,u as WithImage,b as WithLink,B as __namedExportsOrder,I as default};
//# sourceMappingURL=Card.stories.50237db0.js.map
