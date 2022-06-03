import React from "react";
import { ReactNode } from "react";
import { Surface } from "../Surface/Surface";
import { setupStories } from "../_storybook/storybook.utils";

interface TextProps {
  className: string;
  /** HTML Element to use */
  as?: string;
  children: ReactNode;
}
function Text({ as = "div", ...props }: TextProps) {
  const Element: any = as;
  return <Element {...props} />;
}
const storyConfig = {
  title: "Design System",
  component: Text,
  argTypes: {
    children: {
      control: false,
    },
  },
};
export default storyConfig;

const { createStory } = setupStories<TextProps>(Text);

export const TextTester = createStory({
  as: "div",
  className: "fs-3 fw-bold text-primary",
  children: "I am some text",
});

export const FontSize = () => {
  return (
    <Surface>
      <p className="fs-1">.fs-1 text</p>
      <p className="fs-2">.fs-2 text</p>
      <p className="fs-3">.fs-3 text</p>
      <p className="fs-4">.fs-4 text</p>
      <p className="fs-5">.fs-5 text</p>
      <p className="fs-6">.fs-6 text</p>
    </Surface>
  );
};

export const FontWeight = () => {
  return (
    <Surface>
      <p className="fw-bold">fw-bold - Bold text.</p>
      <p className="fw-bolder">fw-bolder Bolder weight text (relative to the parent element).</p>
      <p className="fw-normal">fw-normal Normal weight text.</p>
      <p className="fw-light">fw-light Light weight text.</p>
      <p className="fw-lighter">fw-lighter Lighter weight text (relative to the parent element).</p>
      <p className="fst-italic">fst-italic Italic text.</p>
      <p className="fst-normal">fst-normal Text with normal font style</p>
    </Surface>
  );
};
