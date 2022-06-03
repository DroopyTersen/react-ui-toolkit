import { ReactNode } from "react";
import { setupStories } from "../_storybook/storybook.utils";

const storyConfig = {
  title: "Design System",
  component: Block,
  argTypes: {
    children: {
      control: false,
    },
  },
};

export default storyConfig;

interface Props {
  className: string;
  children?: ReactNode;
}
function Block({ className, children = null }) {
  return (
    <div
      style={{ width: "120px", height: "120px", fontSize: "12px" }}
      className={"d-flex justify-content-center align-items-center font-monospace " + className}
    >
      {children}
    </div>
  );
}
const { createStory } = setupStories<Props>(Block);

export const Borders = () => {
  return (
    <div className="d-flex gap-2 flex-wrap">
      <Block className="bg-light border">border</Block>
      <Block className="bg-light border-top">border-top</Block>
      <Block className="bg-light border-end">border-end</Block>
      <Block className="bg-light border-bottom">border-bottom</Block>
      <Block className="bg-light border-start">border-start</Block>
    </div>
  );
};

export const BorderRadius = () => {
  return (
    <div className="d-flex gap-2 flex-wrap">
      <Block className="bg-primary text-light rounded">rounded</Block>
      <Block className="bg-primary text-light rounded-0">rounded-0</Block>
      <Block className="bg-primary text-light rounded-1">rounded-1</Block>
      <Block className="bg-primary text-light rounded-2">rounded-2</Block>
      <Block className="bg-primary text-light rounded-3">rounded-3</Block>
      <Block className="bg-primary text-light rounded-top">rounded-top</Block>
      <Block className="bg-primary text-light rounded-end">rounded-end</Block>
      <Block className="bg-primary text-light rounded-bottom">rounded-bottom</Block>
      <Block className="bg-primary text-light rounded-start">rounded-start</Block>
      <Block className="bg-primary text-light rounded-circle">rounded-circle</Block>
      <Block className="bg-primary text-light rounded-pill">rounded-pill</Block>
    </div>
  );
};
