import React from "react";
import { useCallback, useState } from "react";
import { ClearablePill } from "./ClearablePill";

export default {
  title: "Forms & Inputs/ClearablePill",
  component: ClearablePill,
  argTypes: {
    children: {
      control: false,
    },
  },
};

export const Basic = () => {
  let [items, setItems] = useState(["One", "Two", "Three", "Four", "Five", "Six"]);
  let clearItem = useCallback(
    (item: string) => {
      setItems((prev) => prev.filter((i) => i !== item));
    },
    [setItems]
  );
  return (
    <div className="d-flex gap-2 align-items-center">
      {items.map((item) => (
        <ClearablePill key={item} onClear={() => clearItem(item)}>
          {item}
        </ClearablePill>
      ))}
    </div>
  );
};
