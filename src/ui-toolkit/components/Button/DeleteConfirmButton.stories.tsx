import { FaRegEdit } from "react-icons/fa";
import { setupStories } from "../_storybook/storybook.utils";
import { DeleteConfirmButton, DeleteConfirmButtonProps } from "./DeleteConfirmButton";

const storyConfig = {
  title: "Forms & Inputs/DeleteConfirmButton",
  component: DeleteConfirmButton,
};

const { createStory } = setupStories<DeleteConfirmButtonProps>(DeleteConfirmButton);

export const Basic = createStory({
  onConfirmed: () => alert("Confirmed Delete"),
});

export const CustomConfirmMessage = createStory({
  onConfirmed: () => alert("Confirmed Delete"),
  confirmMessage: "Are you really really really sure???",
});

export const NoConfirmMessage = createStory({
  onConfirmed: () => alert("Confirmed Delete"),
  confirmMessage: null,
});

export const Children = createStory({
  onConfirmed: () => alert("Confirmed Delete"),
  children: (
    <span style={{ marginRight: "0.5rem" }}>
      <FaRegEdit />
    </span>
  ),
});

export default storyConfig;
