import React from "react";
import { PagingStats } from "./PagingStats";

const storyConfig = {
  title: "Forms & Inputs/PagingStats",
  component: PagingStats,
  argTypes: { children: { control: false } },
};

export const Basic = () => {
  return (
    <>
      <PagingStats start={1} end={25} totalItems={250} />
    </>
  );
};

export default storyConfig;
