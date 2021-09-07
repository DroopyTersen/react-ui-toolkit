import React from "react";

import { setupStories } from "../_storybook/storybook.utils";
import { Check, CheckProps } from "./Check";

export default {
  title: "Forms & Inputs/Check",
  component: Check,
  argTypes: {
    children: {
      control: false,
    },
  },
};

const { createStory } = setupStories<CheckProps>(Check);

export const Basic = createStory({
  name: "isOptedIn",
  children: "Accept Terms and Conditions",
});

export const Controlled = createStory({
  name: "isOptedIn2",
  children: "Accept Terms and Conditions",
  checked: true,
});

export const ControlledFull = () => {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <Check
      name="isOptedInControlled"
      checked={isChecked}
      onChange={(e) => setIsChecked(e.currentTarget.checked)}
    >
      Accept terms and conditions
    </Check>
  );
};

export const Disabled = createStory({
  ...Basic.args,
  disabled: true,
});

export const CustomLabel = createStory({
  name: "isOptedIn3",
  children: (
    <h3>
      Sign up for notifications <span className="badge bg-primary">New</span>
    </h3>
  ),
});
