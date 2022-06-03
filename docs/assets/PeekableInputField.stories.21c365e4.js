import{s as t}from"./storybook.utils.67de74f5.js";import{P as e}from"./PeekableInputField.c6357cbd.js";import"./jsx-runtime.b789c2e1.js";import"./index.be79fcbf.js";import"./Check.b717936f.js";import"./index.68ea96fa.js";import"./FormField.e4f52c7a.js";import"./Input.69c23bd8.js";import"./InputField.d5f4c248.js";import"./Radio.638ae4ce.js";import"./Select.6543b4f4.js";import"./SelectField.008b7972.js";import"./TextArea.39002fcc.js";import"./TextAreaField.76346a90.js";var y={parameters:{storySource:{source:`import { setupStories } from "../_storybook/storybook.utils";
import { PeekableInputField } from "./PeekableInputField";
import { InputFieldProps } from "./InputField";

export default {
  title: "Forms & Inputs/PeekableInputField",
  component: PeekableInputField,
  argTypes: {
    children: {
      control: false,
    },
  },
};

const { createStory } = setupStories<InputFieldProps>(PeekableInputField);

export const Basic = createStory({
  name: "ssn",
  required: true,
  label: "SSN/Tax ID",
  hint: "What is your Social Security number or Tax Identification number? (no dashes)",
});
`,locationsMap:{basic:{startLoc:{col:21,line:17},endLoc:{col:2,line:22},startBody:{col:21,line:17},endBody:{col:2,line:22}}}}},title:"Forms & Inputs/PeekableInputField",component:e,argTypes:{children:{control:!1}}};const{createStory:o}=t(e),F=o({name:"ssn",required:!0,label:"SSN/Tax ID",hint:"What is your Social Security number or Tax Identification number? (no dashes)"}),f=["Basic"];export{F as Basic,f as __namedExportsOrder,y as default};
//# sourceMappingURL=PeekableInputField.stories.21c365e4.js.map
