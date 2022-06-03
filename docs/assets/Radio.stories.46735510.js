var u=Object.defineProperty,p=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var c=(n,e,a)=>e in n?u(n,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[e]=a,i=(n,e)=>{for(var a in e||(e={}))g.call(e,a)&&c(n,a,e[a]);if(d)for(var a of d(e))S.call(e,a)&&c(n,a,e[a]);return n},t=(n,e)=>p(n,v(e));import{s as b}from"./storybook.utils.67de74f5.js";import{R as o}from"./Radio.638ae4ce.js";import{j as r,a as m}from"./jsx-runtime.b789c2e1.js";import"./index.be79fcbf.js";import"./index.68ea96fa.js";var f={parameters:{storySource:{source:`import React from "react";

import { setupStories } from "../_storybook/storybook.utils";
import { Radio, RadioProps } from "./Radio";

export default {
  title: "Forms & Inputs/Radio",
  component: Radio,
  argTypes: {
    children: {
      control: false,
    },
  },
};

const { createStory } = setupStories<RadioProps>(Radio);

export const Basic = createStory({
  name: "maritalStatus",
  value: "single",
  children: "Single",
});

export const Disabled = createStory({
  ...Basic.args,
  disabled: true,
});

export const CustomLabel = createStory({
  ...Basic.args,
  children: <span className="badge bg-danger">Married</span>,
});

export const Vertical = createStory({
  ...Basic.args,
  orientation: "vertical",
});
export const HoriztonalTiles = () => {
  return (
    <div className="d-flex gap-2">
      <Radio
        className="p-3 border rounded"
        name="martialStatus"
        value="single"
        orientation="vertical"
      >
        <span>Single</span>
      </Radio>
      <Radio
        className="p-3 border rounded"
        name="martialStatus"
        value="married"
        orientation="vertical"
      >
        Married
      </Radio>
      <Radio
        className="p-3 border rounded"
        name="martialStatus"
        value="divorced"
        orientation="vertical"
      >
        Divorced
      </Radio>
    </div>
  );
};

export const VerticalTiles = () => {
  return (
    <div className="d-flex flex-column gap-2">
      <Radio className="p-2 border rounded" name="martialStatus" value="single">
        <span>Single</span>
      </Radio>
      <Radio className="p-2 border rounded" name="martialStatus" value="married">
        Married
      </Radio>
      <Radio className="p-2 border rounded" name="martialStatus" value="divorced">
        Divorced
      </Radio>
    </div>
  );
};
`,locationsMap:{basic:{startLoc:{col:21,line:18},endLoc:{col:2,line:22},startBody:{col:21,line:18},endBody:{col:2,line:22}},disabled:{startLoc:{col:24,line:24},endLoc:{col:2,line:27},startBody:{col:24,line:24},endBody:{col:2,line:27}},"custom-label":{startLoc:{col:27,line:29},endLoc:{col:2,line:32},startBody:{col:27,line:29},endBody:{col:2,line:32}},vertical:{startLoc:{col:24,line:34},endLoc:{col:2,line:37},startBody:{col:24,line:34},endBody:{col:2,line:37}},"horiztonal-tiles":{startLoc:{col:31,line:38},endLoc:{col:1,line:67},startBody:{col:31,line:38},endBody:{col:1,line:67}},"vertical-tiles":{startLoc:{col:29,line:69},endLoc:{col:1,line:83},startBody:{col:29,line:69},endBody:{col:1,line:83}}}}},title:"Forms & Inputs/Radio",component:o,argTypes:{children:{control:!1}}};const{createStory:l}=b(o),s=l({name:"maritalStatus",value:"single",children:"Single"}),L=l(t(i({},s.args),{disabled:!0})),T=l(t(i({},s.args),{children:r("span",{className:"badge bg-danger",children:"Married"})})),D=l(t(i({},s.args),{orientation:"vertical"})),M=()=>m("div",{className:"d-flex gap-2",children:[r(o,{className:"p-3 border rounded",name:"martialStatus",value:"single",orientation:"vertical",children:r("span",{children:"Single"})}),r(o,{className:"p-3 border rounded",name:"martialStatus",value:"married",orientation:"vertical",children:"Married"}),r(o,{className:"p-3 border rounded",name:"martialStatus",value:"divorced",orientation:"vertical",children:"Divorced"})]}),V=()=>m("div",{className:"d-flex flex-column gap-2",children:[r(o,{className:"p-2 border rounded",name:"martialStatus",value:"single",children:r("span",{children:"Single"})}),r(o,{className:"p-2 border rounded",name:"martialStatus",value:"married",children:"Married"}),r(o,{className:"p-2 border rounded",name:"martialStatus",value:"divorced",children:"Divorced"})]}),z=["Basic","Disabled","CustomLabel","Vertical","HoriztonalTiles","VerticalTiles"];export{s as Basic,T as CustomLabel,L as Disabled,M as HoriztonalTiles,D as Vertical,V as VerticalTiles,z as __namedExportsOrder,f as default};
//# sourceMappingURL=Radio.stories.46735510.js.map
