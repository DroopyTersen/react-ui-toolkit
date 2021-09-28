import { setupStories } from "../_storybook/storybook.utils";
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
