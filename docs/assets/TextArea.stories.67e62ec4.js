var d=Object.defineProperty,p=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var i=(n,e,t)=>e in n?d(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,o=(n,e)=>{for(var t in e||(e={}))m.call(e,t)&&i(n,t,e[t]);if(r)for(var t of r(e))u.call(e,t)&&i(n,t,e[t]);return n},a=(n,e)=>p(n,v(e));import{s as x}from"./storybook.utils.67de74f5.js";import{T as c}from"./TextArea.39002fcc.js";import"./jsx-runtime.b789c2e1.js";import"./index.be79fcbf.js";import"./index.68ea96fa.js";import"./FormField.e4f52c7a.js";var L={parameters:{storySource:{source:`import { setupStories } from "../_storybook/storybook.utils";
import { TextArea, TextAreaProps } from "./TextArea";

export default {
  title: "Forms & Inputs/TextArea",
  component: TextArea,
  argTypes: {
    children: {
      control: false,
    },
  },
};

const { createStory } = setupStories<TextAreaProps>(TextArea);

export const Basic = createStory({
  name: "description",
});

export const ExtraRows = createStory({
  ...Basic.args,
  rows: 8,
  value: \`I am some content
that might even span... 
  
multiple lines.\`,
});

export const Disabled = createStory({
  ...Basic.args,
  disabled: true,
});

export const Valid = createStory({
  ...Basic.args,
  value: "This is a valid value for the text area and should show a green checkmark.",
  validationStatus: "valid",
});

export const Invalid = createStory({
  ...Basic.args,
  value: "",
  validationStatus: "invalid",
});

export const ScrollCoversValidationIcon = createStory({
  ...Basic.args,
  validationStatus: "valid",
  value: \`I am some content
that might even span...   
multiple lines.\`,
});
`,locationsMap:{basic:{startLoc:{col:21,line:16},endLoc:{col:2,line:18},startBody:{col:21,line:16},endBody:{col:2,line:18}},"extra-rows":{startLoc:{col:25,line:20},endLoc:{col:2,line:27},startBody:{col:25,line:20},endBody:{col:2,line:27}},disabled:{startLoc:{col:24,line:29},endLoc:{col:2,line:32},startBody:{col:24,line:29},endBody:{col:2,line:32}},valid:{startLoc:{col:21,line:34},endLoc:{col:2,line:38},startBody:{col:21,line:34},endBody:{col:2,line:38}},invalid:{startLoc:{col:23,line:40},endLoc:{col:2,line:44},startBody:{col:23,line:40},endBody:{col:2,line:44}},"scroll-covers-validation-icon":{startLoc:{col:42,line:46},endLoc:{col:2,line:52},startBody:{col:42,line:46},endBody:{col:2,line:52}}}}},title:"Forms & Inputs/TextArea",component:c,argTypes:{children:{control:!1}}};const{createStory:l}=x(c),s=l({name:"description"}),f=l(a(o({},s.args),{rows:8,value:`I am some content
that might even span... 
  
multiple lines.`})),A=l(a(o({},s.args),{disabled:!0})),b=l(a(o({},s.args),{value:"This is a valid value for the text area and should show a green checkmark.",validationStatus:"valid"})),w=l(a(o({},s.args),{value:"",validationStatus:"invalid"})),k=l(a(o({},s.args),{validationStatus:"valid",value:`I am some content
that might even span...   
multiple lines.`})),V=["Basic","ExtraRows","Disabled","Valid","Invalid","ScrollCoversValidationIcon"];export{s as Basic,A as Disabled,f as ExtraRows,w as Invalid,k as ScrollCoversValidationIcon,b as Valid,V as __namedExportsOrder,L as default};
//# sourceMappingURL=TextArea.stories.67e62ec4.js.map
