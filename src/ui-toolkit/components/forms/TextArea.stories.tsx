import { setupStories } from "../_storybook/storybook.utils";
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
  value: `I am some content
that might even span... 
  
multiple lines.`,
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
  value: `I am some content
that might even span...   
multiple lines.`,
});
