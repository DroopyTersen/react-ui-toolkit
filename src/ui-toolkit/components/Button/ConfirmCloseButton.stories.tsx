import { setupStories } from "../_storybook/storybook.utils";
import { ConfirmCloseButton, ConfirmCloseButtonProps } from "./ConfirmCloseButton";

const storyConfig = {
  title: "Forms & Inputs/ConfirmCloseButton",
  component: ConfirmCloseButton,
};

const { createStory } = setupStories<ConfirmCloseButtonProps>(ConfirmCloseButton);

export const Basic = createStory({
  close: () => alert("Closed without confirmation"),
  shouldConfirm: false,
});

export const DefaultConfirmMessage = createStory({
  close: () => alert("Confirmed with default message"),
  shouldConfirm: true,
});

export const CustomConfirmMessage = createStory({
  close: () => alert("Confirmed with custom message"),
  confirmMessage: "Are you really really really sure???",
  shouldConfirm: true,
});

export default storyConfig;
