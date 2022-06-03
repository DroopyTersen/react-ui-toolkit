var d=Object.defineProperty,p=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var r=(o,e,n)=>e in o?d(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,l=(o,e)=>{for(var n in e||(e={}))h.call(e,n)&&r(o,n,e[n]);if(s)for(var n of s(e))C.call(e,n)&&r(o,n,e[n]);return o},a=(o,e)=>p(o,m(e));import{R as u}from"./index.be79fcbf.js";import{s as k}from"./storybook.utils.67de74f5.js";import{C as c}from"./Check.b717936f.js";import{j as i,a as y}from"./jsx-runtime.b789c2e1.js";import"./index.68ea96fa.js";var x={parameters:{storySource:{source:`import React from "react";

import { setupStories } from "../_storybook/storybook.utils";
import { Check, CheckProps } from "./Check";

export default {
  title: "Forms & Inputs/Check",
  component: Check,
  argTypes: {
    children: {
      control: false,
    },
  },
};

const { createStory } = setupStories<CheckProps>(Check);

export const Basic = createStory({
  name: "isOptedIn",
  children: "Accept Terms and Conditions",
});

export const Controlled = createStory({
  name: "isOptedIn2",
  children: "Accept Terms and Conditions",
  checked: true,
});

export const ControlledFull = () => {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <Check
      name="isOptedInControlled"
      checked={isChecked}
      onChange={(e) => setIsChecked(e.currentTarget.checked)}
    >
      Accept terms and conditions
    </Check>
  );
};

export const Disabled = createStory({
  ...Basic.args,
  disabled: true,
});

export const CustomLabel = createStory({
  name: "isOptedIn3",
  children: (
    <h3>
      Sign up for notifications <span className="badge bg-primary">New</span>
    </h3>
  ),
});
`,locationsMap:{basic:{startLoc:{col:21,line:18},endLoc:{col:2,line:21},startBody:{col:21,line:18},endBody:{col:2,line:21}},controlled:{startLoc:{col:26,line:23},endLoc:{col:2,line:27},startBody:{col:26,line:23},endBody:{col:2,line:27}},"controlled-full":{startLoc:{col:30,line:29},endLoc:{col:1,line:41},startBody:{col:30,line:29},endBody:{col:1,line:41}},disabled:{startLoc:{col:24,line:43},endLoc:{col:2,line:46},startBody:{col:24,line:43},endBody:{col:2,line:46}},"custom-label":{startLoc:{col:27,line:48},endLoc:{col:2,line:55},startBody:{col:27,line:48},endBody:{col:2,line:55}}}}},title:"Forms & Inputs/Check",component:c,argTypes:{children:{control:!1}}};const{createStory:t}=k(c),f=t({name:"isOptedIn",children:"Accept Terms and Conditions"}),O=t({name:"isOptedIn2",children:"Accept Terms and Conditions",checked:!0}),T=()=>{const[o,e]=u.useState(!1);return i(c,{name:"isOptedInControlled",checked:o,onChange:n=>e(n.currentTarget.checked),children:"Accept terms and conditions"})},A=t(a(l({},f.args),{disabled:!0})),_=t({name:"isOptedIn3",children:y("h3",{children:["Sign up for notifications ",i("span",{className:"badge bg-primary",children:"New"})]})}),F=["Basic","Controlled","ControlledFull","Disabled","CustomLabel"];export{f as Basic,O as Controlled,T as ControlledFull,_ as CustomLabel,A as Disabled,F as __namedExportsOrder,x as default};
//# sourceMappingURL=Check.stories.1c049be8.js.map
