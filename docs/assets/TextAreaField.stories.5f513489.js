var d=Object.defineProperty,p=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var l=(r,e,o)=>e in r?d(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,t=(r,e)=>{for(var o in e||(e={}))u.call(e,o)&&l(r,o,e[o]);if(a)for(var o of a(e))y.call(e,o)&&l(r,o,e[o]);return r},n=(r,e)=>p(r,m(e));import{s as w}from"./storybook.utils.67de74f5.js";import{T as c}from"./TextAreaField.76346a90.js";import"./jsx-runtime.b789c2e1.js";import"./index.be79fcbf.js";import"./FormField.e4f52c7a.js";import"./index.68ea96fa.js";import"./TextArea.39002fcc.js";var S={parameters:{storySource:{source:`import { setupStories } from "../_storybook/storybook.utils";
import { TextAreaField, TextAreaFieldProps } from "./TextAreaField";

export default {
  title: "Forms & Inputs/TextAreaField",
  component: TextAreaField,
  argTypes: {
    children: {
      control: false,
    },
  },
};

const { createStory } = setupStories<TextAreaFieldProps>(TextAreaField);

export const Basic = createStory({
  label: "Description",
  name: "description",
});

export const Hint = createStory({
  ...Basic.args,
  rows: 7,
  hint: "You can write in markdown if you want!",
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
  value: \`Andrew C. Petersen is a world renowned developer... 
  
...of his own fiction.\`,
  rows: 4,
  required: true,
  hint: "This is some helper text to describe the field.",
});


export const ExtraClasses = createStory({
  ...Basic.args,
  rows: 4,
  value: \`Andrew C. Petersen is a world renowned developer... 
  
...of his own fiction.\`,
  className: "form-control-lg my-custom-class",
  hint: "This example uses the Bootstrap class to make it larger."
});`,locationsMap:{basic:{startLoc:{col:21,line:16},endLoc:{col:2,line:19},startBody:{col:21,line:16},endBody:{col:2,line:19}},hint:{startLoc:{col:20,line:21},endLoc:{col:2,line:25},startBody:{col:20,line:21},endBody:{col:2,line:25}},invalid:{startLoc:{col:23,line:27},endLoc:{col:2,line:31},startBody:{col:23,line:27},endBody:{col:2,line:31}},"required-error":{startLoc:{col:29,line:33},endLoc:{col:2,line:38},startBody:{col:29,line:33},endBody:{col:2,line:38}},valid:{startLoc:{col:21,line:40},endLoc:{col:2,line:49},startBody:{col:21,line:40},endBody:{col:2,line:49}},"extra-classes":{startLoc:{col:28,line:52},endLoc:{col:2,line:60},startBody:{col:28,line:52},endBody:{col:2,line:60}}}}},title:"Forms & Inputs/TextAreaField",component:c,argTypes:{children:{control:!1}}};const{createStory:s}=w(c),i=s({label:"Description",name:"description"}),F=s(n(t({},i.args),{rows:7,hint:"You can write in markdown if you want!"})),L=s(n(t({},i.args),{value:"alkdjfasd",error:{message:"There is a problem with this input",type:"custom"}})),q=s(n(t({},i.args),{required:!0,error:{type:"required"}})),b=s(n(t({},i.args),{validationStatus:"valid",value:`Andrew C. Petersen is a world renowned developer... 
  
...of his own fiction.`,rows:4,required:!0,hint:"This is some helper text to describe the field."})),k=s(n(t({},i.args),{rows:4,value:`Andrew C. Petersen is a world renowned developer... 
  
...of his own fiction.`,className:"form-control-lg my-custom-class",hint:"This example uses the Bootstrap class to make it larger."})),C=["Basic","Hint","Invalid","RequiredError","Valid","ExtraClasses"];export{i as Basic,k as ExtraClasses,F as Hint,L as Invalid,q as RequiredError,b as Valid,C as __namedExportsOrder,S as default};
//# sourceMappingURL=TextAreaField.stories.5f513489.js.map
