import React from "react";
import { setupStories } from "../_storybook/storybook.utils";
import { Surface } from "./Surface";

const storyConfig = {
  title: "Surfaces/Surface",
  component: Surface,
};

const { createStory } = setupStories(Surface);

export const Basic = createStory({
  children: <h1 className="m-0">I am an elevated surface</h1>,
});

export const Widgets = () => {
  return (
    <div className="gap-4 grid">
      <Surface className="g-col-12">
        <h2>Widget 1</h2>
      </Surface>

      <Surface className="g-col-12">
        <h2>Widget 2</h2>
      </Surface>

      <Surface className="g-col-8">
        <h2>Widget 3</h2>
        <p>
          Donec vitae mattis enim. Morbi non metus in lorem posuere imperdiet. In scelerisque nulla
          eget tristique laoreet. Nulla efficitur magna nec nunc finibus consectetur. Phasellus nibh
          enim, rhoncus nec cursus eget, posuere ac justo. Vivamus vel metus nunc. Nullam rhoncus
          leo quis ante pretium gravida et nec libero. Aliquam ac eleifend justo, nec vehicula
          turpis. Praesent pretium ante vitae purus luctus hendrerit. Pellentesque eleifend molestie
          pulvinar. Pellentesque ac massa molestie, egestas justo aliquet, hendrerit purus. Aliquam
          eget cursus eros, id aliquet lectus. Duis pellentesque pulvinar urna, nec condimentum
          sapien euismod eget. Praesent fermentum, metus et molestie tristique, nulla mauris dapibus
          purus, eu aliquam ipsum felis et lorem. Integer sodales consequat velit ac iaculis. Proin
          a elit vitae lacus eleifend congue.
        </p>
      </Surface>

      <Surface className="g-col-4">
        <h2>Widget 3</h2>
        <p>
          The 26-display showroom provides an opportunity to explore our capabilities – at your
          fingertips, and at your leisure. Various window and door types are represented with a
          variety of hardware, wood and finish options. Come experience why – We’re for the
          visionaries.®
        </p>
      </Surface>
    </div>
  );
};

export default storyConfig;
