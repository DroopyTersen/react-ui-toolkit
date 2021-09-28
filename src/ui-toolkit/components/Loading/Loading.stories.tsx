import React from "react";
import { Loading } from "./Loading";

export default {
  title: "Surfaces/Loading",
  component: Loading,
  argTypes: { children: { control: false } },
};

export const Basic = () => {
  return <Loading />;
};
