var S=Object.defineProperty,v=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var h=(r,a,n)=>a in r?S(r,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[a]=n,o=(r,a)=>{for(var n in a||(a={}))g.call(a,n)&&h(r,n,a[n]);if(u)for(var n of u(a))f.call(a,n)&&h(r,n,a[n]);return r},l=(r,a)=>v(r,y(a));import{s as R}from"./storybook.utils.67de74f5.js";import{C as s}from"./Check.b717936f.js";import{F as p}from"./FormField.e4f52c7a.js";import{R as t}from"./Radio.638ae4ce.js";import{j as e,a as c,F as m}from"./jsx-runtime.b789c2e1.js";import"./index.be79fcbf.js";import"./index.68ea96fa.js";var q={parameters:{storySource:{source:`import React from "react";

import { setupStories } from "../_storybook/storybook.utils";
import { Check } from "./Check";
import { FormField, FormFieldProps } from "./FormField";
import { Radio } from "./Radio";

export default {
  title: "forms & inputs/FormField",
  component: FormField,
  argTypes: {
    children: {
      control: false,
    },
  },
};

const { createStory } = setupStories<FormFieldProps>(FormField);

export const Basic = createStory({
  label: "Legal Name",
  name: "legalName",
  children: <input className="form-control form-input" name="legalName" id="legalName" />,
});

export const Hint = createStory({
  ...Basic.args,
  hint: "This is some helper text to describe the field.",
});

export const Invalid = createStory({
  ...Basic.args,
  children: (
    <input className="form-control form-input is-invalid" name="legalName" id="legalName" />
  ),
  error: { message: "There is a problem with this input", type: "custom" },
});

export const Required = createStory({
  ...Basic.args,
  required: true,
  hint: "This is field is required.",
});

export const RequiredError = createStory({
  ...Basic.args,
  children: <input className="form-control form-input is-invalid" name="legalName" />,
  required: true,
  // This would come from React Hook Form
  error: { type: "required" },
  hint: "This is the hint. Should it show when there is an error?",
});

export const Valid = createStory({
  ...Basic.args,
  validationStatus: "valid",
  children: (
    <input
      className="form-control form-input is-valid"
      name="legalName"
      value="Andrew C. Petersen"
    />
  ),
  hint: "This is some helper text to describe the field.",
});

export const Radios = createStory({
  name: "maritalStatus",
  label: "Marital Status",
  hint: "Your marital status can impact your taxes.",
  children: (
    <>
      <Radio value="single" name="maritalStatus">
        Single
      </Radio>
      <Radio value="married" name="maritalStatus">
        Married
      </Radio>
      <Radio value="divorced" name="maritalStatus">
        Divorced
      </Radio>
      <Radio value="widowed" name="maritalStatus">
        Windowed
      </Radio>
    </>
  ),
});

export const RadiosError = createStory({
  name: "maritalStatus",
  label: "Marital Status",
  hint: "Your marital status can impact your taxes.",
  required: true,
  error: { type: "required" },
  children: (
    <>
      <Radio value="single" name="maritalStatus">
        Single
      </Radio>
      <Radio value="married" name="maritalStatus">
        Married
      </Radio>
      <Radio value="divorced" name="maritalStatus">
        Divorced
      </Radio>
      <Radio value="widowed" name="maritalStatus">
        Windowed
      </Radio>
    </>
  ),
});

export const Checkboxes = createStory({
  name: "developerSkills",
  label: "Developer Skills",
  children: (
    <>
      <Check name="hasCss">CSS and Styling</Check>
      <Check name="hasJS">Javascript</Check>
      <Check name="hasTS">Typescript</Check>
      <Check name="hasDotNet">C# / .NET</Check>
      <Check name="hasJava">Java</Check>
      <Check name="hasSocial">Interfacing w/ Humans</Check>
    </>
  ),
});
`,locationsMap:{basic:{startLoc:{col:21,line:20},endLoc:{col:2,line:24},startBody:{col:21,line:20},endBody:{col:2,line:24}},hint:{startLoc:{col:20,line:26},endLoc:{col:2,line:29},startBody:{col:20,line:26},endBody:{col:2,line:29}},invalid:{startLoc:{col:23,line:31},endLoc:{col:2,line:37},startBody:{col:23,line:31},endBody:{col:2,line:37}},required:{startLoc:{col:24,line:39},endLoc:{col:2,line:43},startBody:{col:24,line:39},endBody:{col:2,line:43}},"required-error":{startLoc:{col:29,line:45},endLoc:{col:2,line:52},startBody:{col:29,line:45},endBody:{col:2,line:52}},valid:{startLoc:{col:21,line:54},endLoc:{col:2,line:65},startBody:{col:21,line:54},endBody:{col:2,line:65}},radios:{startLoc:{col:22,line:67},endLoc:{col:2,line:87},startBody:{col:22,line:67},endBody:{col:2,line:87}},"radios-error":{startLoc:{col:27,line:89},endLoc:{col:2,line:111},startBody:{col:27,line:89},endBody:{col:2,line:111}},checkboxes:{startLoc:{col:26,line:113},endLoc:{col:2,line:126},startBody:{col:26,line:113},endBody:{col:2,line:126}}}}},title:"forms & inputs/FormField",component:p,argTypes:{children:{control:!1}}};const{createStory:i}=R(p),d=i({label:"Legal Name",name:"legalName",children:e("input",{className:"form-control form-input",name:"legalName",id:"legalName"})}),L=i(l(o({},d.args),{hint:"This is some helper text to describe the field."})),T=i(l(o({},d.args),{children:e("input",{className:"form-control form-input is-invalid",name:"legalName",id:"legalName"}),error:{message:"There is a problem with this input",type:"custom"}})),E=i(l(o({},d.args),{required:!0,hint:"This is field is required."})),M=i(l(o({},d.args),{children:e("input",{className:"form-control form-input is-invalid",name:"legalName"}),required:!0,error:{type:"required"},hint:"This is the hint. Should it show when there is an error?"})),D=i(l(o({},d.args),{validationStatus:"valid",children:e("input",{className:"form-control form-input is-valid",name:"legalName",value:"Andrew C. Petersen"}),hint:"This is some helper text to describe the field."})),J=i({name:"maritalStatus",label:"Marital Status",hint:"Your marital status can impact your taxes.",children:c(m,{children:[e(t,{value:"single",name:"maritalStatus",children:"Single"}),e(t,{value:"married",name:"maritalStatus",children:"Married"}),e(t,{value:"divorced",name:"maritalStatus",children:"Divorced"}),e(t,{value:"widowed",name:"maritalStatus",children:"Windowed"})]})}),H=i({name:"maritalStatus",label:"Marital Status",hint:"Your marital status can impact your taxes.",required:!0,error:{type:"required"},children:c(m,{children:[e(t,{value:"single",name:"maritalStatus",children:"Single"}),e(t,{value:"married",name:"maritalStatus",children:"Married"}),e(t,{value:"divorced",name:"maritalStatus",children:"Divorced"}),e(t,{value:"widowed",name:"maritalStatus",children:"Windowed"})]})}),I=i({name:"developerSkills",label:"Developer Skills",children:c(m,{children:[e(s,{name:"hasCss",children:"CSS and Styling"}),e(s,{name:"hasJS",children:"Javascript"}),e(s,{name:"hasTS",children:"Typescript"}),e(s,{name:"hasDotNet",children:"C# / .NET"}),e(s,{name:"hasJava",children:"Java"}),e(s,{name:"hasSocial",children:"Interfacing w/ Humans"})]})}),P=["Basic","Hint","Invalid","Required","RequiredError","Valid","Radios","RadiosError","Checkboxes"];export{d as Basic,I as Checkboxes,L as Hint,T as Invalid,J as Radios,H as RadiosError,E as Required,M as RequiredError,D as Valid,P as __namedExportsOrder,q as default};
//# sourceMappingURL=FormField.stories.47d11eed.js.map
