import { setupStories } from "../_storybook/storybook.utils";
import { CloseButton } from "./CloseButton";

export default {
  title: "Forms & Inputs/CloseButton",
  component: CloseButton,
};

const { createStory } = setupStories(CloseButton);

export const Default = createStory({});
