import{s as a}from"./storybook.utils.67de74f5.js";import{I as t}from"./Input.69c23bd8.js";import{j as n}from"./jsx-runtime.b789c2e1.js";import"./index.be79fcbf.js";import"./index.68ea96fa.js";import"./FormField.e4f52c7a.js";var d={parameters:{storySource:{source:`import React from "react";

import { setupStories } from "../_storybook/storybook.utils";
import { Input, InputProps } from "./Input";

export default {
  title: "Forms & Inputs/Input",
  component: Input,
  argTypes: {
    children: {
      control: false,
    },
  },
};

const { createStory } = setupStories<InputProps>(Input);

export const Basic = createStory({
  name: "legalName",
  placeholder: "Legal name...",
});

export const Disabled = createStory({
  name: "legalName",
  disabled: true,
  value: "Andrew C. Petersen",
});

export const Valid = createStory({
  name: "legalName",
  value: "Andrew C. Petersen",
  validationStatus: "valid",
});

export const Invalid = createStory({
  name: "legalName",
  validationStatus: "invalid",
  value: "askfasldfj",
});

export const ExtraClasses = createStory({
  name: "legalName",
  value: "Andrew C. Petersen",
  validationStatus: "valid",
  className: "form-control-lg my-custom-class",
});

export const Prefix = createStory({
  name: "url",
  prefix: "https://yoursite.com/",
});

export const PrefixAndSuffix = createStory({
  name: "netWorth",
  className: "text-end",
  // It's complaining because HTML Input has a
  // property called prefix with is explicitely a string
  prefix: (<span>$</span>) as any,
  suffix: <span>.00</span>,
  type: "number",
});
`,locationsMap:{basic:{startLoc:{col:21,line:18},endLoc:{col:2,line:21},startBody:{col:21,line:18},endBody:{col:2,line:21}},disabled:{startLoc:{col:24,line:23},endLoc:{col:2,line:27},startBody:{col:24,line:23},endBody:{col:2,line:27}},valid:{startLoc:{col:21,line:29},endLoc:{col:2,line:33},startBody:{col:21,line:29},endBody:{col:2,line:33}},invalid:{startLoc:{col:23,line:35},endLoc:{col:2,line:39},startBody:{col:23,line:35},endBody:{col:2,line:39}},"extra-classes":{startLoc:{col:28,line:41},endLoc:{col:2,line:46},startBody:{col:28,line:41},endBody:{col:2,line:46}},prefix:{startLoc:{col:22,line:48},endLoc:{col:2,line:51},startBody:{col:22,line:48},endBody:{col:2,line:51}},"prefix-and-suffix":{startLoc:{col:31,line:53},endLoc:{col:2,line:61},startBody:{col:31,line:53},endBody:{col:2,line:61}}}}},title:"Forms & Inputs/Input",component:t,argTypes:{children:{control:!1}}};const{createStory:e}=a(t),p=e({name:"legalName",placeholder:"Legal name..."}),m=e({name:"legalName",disabled:!0,value:"Andrew C. Petersen"}),u=e({name:"legalName",value:"Andrew C. Petersen",validationStatus:"valid"}),f=e({name:"legalName",validationStatus:"invalid",value:"askfasldfj"}),x=e({name:"legalName",value:"Andrew C. Petersen",validationStatus:"valid",className:"form-control-lg my-custom-class"}),y=e({name:"url",prefix:"https://yoursite.com/"}),v=e({name:"netWorth",className:"text-end",prefix:n("span",{children:"$"}),suffix:n("span",{children:".00"}),type:"number"}),S=["Basic","Disabled","Valid","Invalid","ExtraClasses","Prefix","PrefixAndSuffix"];export{p as Basic,m as Disabled,x as ExtraClasses,f as Invalid,y as Prefix,v as PrefixAndSuffix,u as Valid,S as __namedExportsOrder,d as default};
//# sourceMappingURL=Input.stories.9381b113.js.map
