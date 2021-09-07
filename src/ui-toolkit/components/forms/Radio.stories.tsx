import React from "react";

import { setupStories } from "../_storybook/storybook.utils";
import { Radio, RadioProps } from "./Radio";

export default {
  title: "Forms & Inputs/Radio",
  component: Radio,
  argTypes: {
    children: {
      control: false,
    },
  },
};

const { createStory } = setupStories<RadioProps>(Radio);

export const Basic = createStory({
  name: "maritalStatus",
  value: "single",
  children: "Single",
});

export const Disabled = createStory({
  ...Basic.args,
  disabled: true,
});

export const CustomLabel = createStory({
  ...Basic.args,
  children: <span className="badge bg-danger">Married</span>,
});
