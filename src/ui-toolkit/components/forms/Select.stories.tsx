import React from "react";

import { setupStories } from "../_storybook/storybook.utils";
import { Select, SelectProps } from "./Select";

export default {
  title: "Forms & Inputs/Select",
  component: Select,
  argTypes: {
    children: {
      control: false,
    },
  },
};

const { createStory } = setupStories<SelectProps>(Select);

export const Basic = createStory({
  name: "legalName",
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

export const Valid = createStory({
  ...Basic.args,
  value: "Single",
  validationStatus: "valid",
});

export const Invalid = createStory({
  ...Basic.args,
  validationStatus: "invalid",
});

export const ExtraClasses = createStory({
  ...Basic.args,
  className: "form-select-lg bg-dark text-white",
  value: "Single",
  validationStatus: "valid",
});
