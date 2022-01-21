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

export const Vertical = createStory({
  ...Basic.args,
  orientation: "vertical",
});
export const HoriztonalTiles = () => {
  return (
    <div className="d-flex gap-2">
      <Radio
        className="p-3 border rounded"
        name="martialStatus"
        value="single"
        orientation="vertical"
      >
        <span>Single</span>
      </Radio>
      <Radio
        className="p-3 border rounded"
        name="martialStatus"
        value="married"
        orientation="vertical"
      >
        Married
      </Radio>
      <Radio
        className="p-3 border rounded"
        name="martialStatus"
        value="divorced"
        orientation="vertical"
      >
        Divorced
      </Radio>
    </div>
  );
};

export const VerticalTiles = () => {
  return (
    <div className="d-flex flex-column gap-2">
      <Radio className="p-2 border rounded" name="martialStatus" value="single">
        <span>Single</span>
      </Radio>
      <Radio className="p-2 border rounded" name="martialStatus" value="married">
        Married
      </Radio>
      <Radio className="p-2 border rounded" name="martialStatus" value="divorced">
        Divorced
      </Radio>
    </div>
  );
};
