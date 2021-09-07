import { setupStories } from "../_storybook/storybook.utils";
import { Card, CardProps } from "./Card";

export default {
  title: "Surfaces/Card",
  component: Card,
  argTypes: { children: { control: false } },
};

const { createStory } = setupStories<CardProps>(Card);

export const Basic = createStory({
  title: "I am a card",
  subtitle: "I am the subtitle",
  style: { maxWidth: "400px" },
});

export const WithImage = createStory({
  title: "Fish in the Sawtooths",
  subtitle: "Stanley, ID",
  style: { maxWidth: "400px" },
  imageSize: "220px",
  image:
    "https://res.cloudinary.com/droopytersen/image/upload/c_scale,q_auto:good,w_1115/v1614564603/natanddrewsayido/things-to-do/181013jjw-0116-1.jpg",
});

export const WithLink = createStory({
  ...WithImage.args,
  url: "/items/123",
});
