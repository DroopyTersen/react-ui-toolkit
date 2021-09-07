import React from "react";

import { setupStories } from "../_storybook/storybook.utils";
import { Card } from "../Card/Card";
import { Grid, GridProps } from "./Grid";

export default {
  title: "Surfaces/Grid",
  component: Grid,
  argTypes: {
    children: {
      control: false,
    },
  },
};

const { createStory } = setupStories<GridProps>(Grid);

const items = Array.from(new Array(12), (_, index) => ({
  title: "Card " + index,
  subtitle: "This card was auto generated in the story",
  imageSize: "200px",
  image:
    "https://res.cloudinary.com/droopytersen/image/upload/c_scale,q_auto:good,w_1115/v1614564603/natanddrewsayido/things-to-do/181013jjw-0116-1.jpg",
}));

export const Basic = createStory({
  children: items.map((item, index) => <Card key={index} {...item} />),
});
