import React from "react";

import { setupStories } from "../_storybook/storybook.utils";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Forms & Inputs/Button",
  component: Button,
};

const { createStory } = setupStories<ButtonProps>(Button);

export const Primary = createStory({
  color: "primary",
  children: "Click Me",
});

export const Secondary = createStory({
  color: "secondary",
  children: "Click Me",
});

export const Danger = createStory({
  color: "danger",
  children: "Click Me",
});

export const Default = createStory({
  children: "Click Me",
});

export const Disabled = createStory({
  children: "You can't click me",
  color: "primary",
  disabled: true,
});

export const Outlined = createStory({
  color: "primary",
  variant: "outline",
  children: "Click Me",
});

export const Link = createStory({
  to: "/clients",
  variant: "link",
  children: "Clients",
});

export const ButtonLink = createStory({
  to: "/clients",
  children: "This renders as an <a> tag because the 'to' prop was set",
});
export const Large = createStory({
  color: "primary",
  scale: "lg",
  children: "Click Me",
});

export const Small = createStory({
  color: "primary",
  scale: "sm",
  children: "Click Me",
});

export const IconButton = createStory({
  color: "primary",
  children: <i className="bi bi-pencil"></i>,
});

export const TextWithIcon = createStory({
  variant: "outline",
  color: "danger",
  children: (
    <>
      Menu <i className="fas fa-bars"></i>
    </>
  ),
});
