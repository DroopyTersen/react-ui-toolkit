import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import "../src/global/styles/global.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  options: {
    storySort: {
      method: "alphabetical",
    },
  },
};

export const decorators = [
  (Story) => (
    <div className="story-wrapper">
      <Router>
        <Story />
      </Router>
    </div>
  ),
];
