import React from "react";

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
