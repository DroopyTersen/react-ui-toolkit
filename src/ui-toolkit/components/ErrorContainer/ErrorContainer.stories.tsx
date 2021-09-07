import React from "react";

import { setupStories } from "../_storybook/storybook.utils";
import { ErrorContainer, ErrorContainerProps } from "./ErrorContainer";

export default {
  title: "Surfaces/ErrorContainer",
  component: ErrorContainer,
  argTypes: { children: { control: false } },
};

const { createStory } = setupStories<ErrorContainerProps>(ErrorContainer);

export const Basic = createStory({
  title: "Uh oh something went wrong!",
});

export const WithDetailsMessage = createStory({
  title: "Unable to save item",
  children: <p className="font-monospace">The request to the server responded with 500.</p>,
});
export const WithCustomErrorBody = createStory({
  title: "Unable to save item",
  children: (
    <>
      <p className="font-monospace">The request to the server responded with 500.</p>
      <button className="btn btn-primary">Try again</button>
    </>
  ),
});
