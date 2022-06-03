var d=Object.defineProperty,p=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var i=(o,e,t)=>e in o?d(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,r=(o,e)=>{for(var t in e||(e={}))m.call(e,t)&&i(o,t,e[t]);if(a)for(var t of a(e))y.call(e,t)&&i(o,t,e[t]);return o},l=(o,e)=>p(o,u(e));import{s as f}from"./storybook.utils.67de74f5.js";import{I as c}from"./InputField.d5f4c248.js";import"./jsx-runtime.b789c2e1.js";import"./index.be79fcbf.js";import"./FormField.e4f52c7a.js";import"./index.68ea96fa.js";import"./Input.69c23bd8.js";var b={parameters:{storySource:{source:`import { setupStories } from "../_storybook/storybook.utils";
import { InputField, InputFieldProps } from "./InputField";

export default {
  title: "Forms & Inputs/InputField",
  component: InputField,
  argTypes: {
    children: {
      control: false,
    },
  },
};

const { createStory } = setupStories<InputFieldProps>(InputField);

export const Basic = createStory({
  label: "Legal Name",
  name: "legalName",
});

export const Hint = createStory({
  ...Basic.args,
  hint: "This is some helper text to describe the field.",
});

export const Invalid = createStory({
  ...Basic.args,
  value: "alkdjfasd",
  error: { message: "There is a problem with this input", type: "custom" },
});

export const RequiredError = createStory({
  ...Basic.args,
  required: true,
  // This would come from React Hook Form
  error: { type: "required" },
});

export const Valid = createStory({
  ...Basic.args,
  validationStatus: "valid",
  value: "Andrew C. Petersen",
  required: true,
  hint: "This is some helper text to describe the field.",
});

export const PrefixAndSuffix = createStory({
  name: "netWorth",
  label: "Net Worth",
  prefix: "$",
  suffix: ".00",
  type: "number",
});

export const ExtraClasses = createStory({
  ...Basic.args,
  value: "Andrew C. Petersen",
  validationStatus: "valid",
  className: "form-control-lg my-custom-class",
});

export const ExtraInputProps = createStory({
  ...Basic.args,
  "aria-label": "Legal Name",
  value: "Extra Input Props",
  disabled: true,
  style: { color: "red", cursor: "pointer" },
  className: "form-control-lg my-custom-class",
  onChange: () => console.log("You clicked"),
});
`,locationsMap:{basic:{startLoc:{col:21,line:16},endLoc:{col:2,line:19},startBody:{col:21,line:16},endBody:{col:2,line:19}},hint:{startLoc:{col:20,line:21},endLoc:{col:2,line:24},startBody:{col:20,line:21},endBody:{col:2,line:24}},invalid:{startLoc:{col:23,line:26},endLoc:{col:2,line:30},startBody:{col:23,line:26},endBody:{col:2,line:30}},"required-error":{startLoc:{col:29,line:32},endLoc:{col:2,line:37},startBody:{col:29,line:32},endBody:{col:2,line:37}},valid:{startLoc:{col:21,line:39},endLoc:{col:2,line:45},startBody:{col:21,line:39},endBody:{col:2,line:45}},"prefix-and-suffix":{startLoc:{col:31,line:47},endLoc:{col:2,line:53},startBody:{col:31,line:47},endBody:{col:2,line:53}},"extra-classes":{startLoc:{col:28,line:55},endLoc:{col:2,line:60},startBody:{col:28,line:55},endBody:{col:2,line:60}},"extra-input-props":{startLoc:{col:31,line:62},endLoc:{col:2,line:70},startBody:{col:31,line:62},endBody:{col:2,line:70}}}}},title:"Forms & Inputs/InputField",component:c,argTypes:{children:{control:!1}}};const{createStory:n}=f(c),s=n({label:"Legal Name",name:"legalName"}),P=n(l(r({},s.args),{hint:"This is some helper text to describe the field."})),F=n(l(r({},s.args),{value:"alkdjfasd",error:{message:"There is a problem with this input",type:"custom"}})),E=n(l(r({},s.args),{required:!0,error:{type:"required"}})),N=n(l(r({},s.args),{validationStatus:"valid",value:"Andrew C. Petersen",required:!0,hint:"This is some helper text to describe the field."})),q=n({name:"netWorth",label:"Net Worth",prefix:"$",suffix:".00",type:"number"}),C=n(l(r({},s.args),{value:"Andrew C. Petersen",validationStatus:"valid",className:"form-control-lg my-custom-class"})),T=n(l(r({},s.args),{"aria-label":"Legal Name",value:"Extra Input Props",disabled:!0,style:{color:"red",cursor:"pointer"},className:"form-control-lg my-custom-class",onChange:()=>console.log("You clicked")})),k=["Basic","Hint","Invalid","RequiredError","Valid","PrefixAndSuffix","ExtraClasses","ExtraInputProps"];export{s as Basic,C as ExtraClasses,T as ExtraInputProps,P as Hint,F as Invalid,q as PrefixAndSuffix,E as RequiredError,N as Valid,k as __namedExportsOrder,b as default};
//# sourceMappingURL=InputField.stories.3980827b.js.map
