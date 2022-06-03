var p=Object.defineProperty,u=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var c=(t,e,o)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,r=(t,e)=>{for(var o in e||(e={}))S.call(e,o)&&c(t,o,e[o]);if(s)for(var o of s(e))y.call(e,o)&&c(t,o,e[o]);return t},n=(t,e)=>u(t,m(e));import{s as B}from"./storybook.utils.67de74f5.js";import{S as d}from"./SelectField.008b7972.js";import{a as h,F as g,j as l}from"./jsx-runtime.b789c2e1.js";import"./index.be79fcbf.js";import"./FormField.e4f52c7a.js";import"./index.68ea96fa.js";import"./Select.6543b4f4.js";var D={parameters:{storySource:{source:`import React from "react";

import { setupStories } from "../_storybook/storybook.utils";
import { SelectField, SelectFieldProps } from "./SelectField";

export default {
  title: "Forms & Inputs/SelectField",
  component: SelectField,
  argTypes: {
    children: {
      control: false,
    },
  },
};

const { createStory } = setupStories<SelectFieldProps>(SelectField);

export const Basic = createStory({
  name: "maritalStatus",
  label: "Marital Status",
  children: (
    <>
      <option value="">Choose...</option>
      <option>Single</option>
      <option>Married</option>
      <option>Divorced</option>
      <option>Windowed</option>
    </>
  ),
});

export const Disabled = createStory({
  ...Basic.args,
  disabled: true,
});

export const Hint = createStory({
  ...Basic.args,
  hint: "Your marital status impacts your taxes.",
});

export const Required = createStory({
  ...Basic.args,
  required: true,
});

export const RequiredError = createStory({
  ...Basic.args,
  required: true,
  // This would come from React Hook Form
  error: { type: "required" },
});

export const Valid = createStory({
  ...Basic.args,
  value: "Single",
  validationStatus: "valid",
  hint: "Your marital status impacts your taxes.",
});
`,locationsMap:{basic:{startLoc:{col:21,line:18},endLoc:{col:2,line:30},startBody:{col:21,line:18},endBody:{col:2,line:30}},disabled:{startLoc:{col:24,line:32},endLoc:{col:2,line:35},startBody:{col:24,line:32},endBody:{col:2,line:35}},hint:{startLoc:{col:20,line:37},endLoc:{col:2,line:40},startBody:{col:20,line:37},endBody:{col:2,line:40}},required:{startLoc:{col:24,line:42},endLoc:{col:2,line:45},startBody:{col:24,line:42},endBody:{col:2,line:45}},"required-error":{startLoc:{col:29,line:47},endLoc:{col:2,line:52},startBody:{col:29,line:47},endBody:{col:2,line:52}},valid:{startLoc:{col:21,line:54},endLoc:{col:2,line:59},startBody:{col:21,line:54},endBody:{col:2,line:59}}}}},title:"Forms & Inputs/SelectField",component:d,argTypes:{children:{control:!1}}};const{createStory:i}=B(d),a=i({name:"maritalStatus",label:"Marital Status",children:h(g,{children:[l("option",{value:"",children:"Choose..."}),l("option",{children:"Single"}),l("option",{children:"Married"}),l("option",{children:"Divorced"}),l("option",{children:"Windowed"})]})}),M=i(n(r({},a.args),{disabled:!0})),E=i(n(r({},a.args),{hint:"Your marital status impacts your taxes."})),H=i(n(r({},a.args),{required:!0})),Y=i(n(r({},a.args),{required:!0,error:{type:"required"}})),_=i(n(r({},a.args),{value:"Single",validationStatus:"valid",hint:"Your marital status impacts your taxes."})),j=["Basic","Disabled","Hint","Required","RequiredError","Valid"];export{a as Basic,M as Disabled,E as Hint,H as Required,Y as RequiredError,_ as Valid,j as __namedExportsOrder,D as default};
//# sourceMappingURL=SelectField.stories.fbc6e372.js.map
