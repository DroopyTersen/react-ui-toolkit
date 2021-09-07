import { setupStories } from "../_storybook/storybook.utils";
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
