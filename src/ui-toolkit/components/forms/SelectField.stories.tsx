import React from "react";

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
