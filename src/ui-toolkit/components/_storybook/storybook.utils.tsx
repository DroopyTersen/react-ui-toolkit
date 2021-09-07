import { Story } from "@storybook/react";
import React, { ComponentProps } from "react";

export const setupStories = function <Props>(Component) {
  const Template: Story<ComponentProps<typeof Component>> = (args) => <Component {...args} />;
  return {
    createStory(props: Props): typeof Template & { args: Props } {
      const story = Template.bind({});
      story.args = props;
      return story;
    },
  };
};
