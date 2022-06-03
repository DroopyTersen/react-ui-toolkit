import React from "react";

const storyConfig = {
  title: "Design System",
  // component: Text,
  argTypes: {
    children: {
      control: false,
    },
  },
};
export default storyConfig;

export const Shadows = () => {
  return (
    <div>
      <div className="shadow-none p-3 mb-5 bg-body rounded font-monospace">shadow-none</div>
      <div className="shadow-sm p-3 mb-5 bg-body rounded font-monospace">shadow-sm</div>
      <div className="shadow p-3 mb-5 bg-body rounded font-monospace">shadow</div>
      <div className="shadow-lg p-3 mb-5 bg-body rounded font-monospace">shadow-lg</div>
    </div>
  );
};
