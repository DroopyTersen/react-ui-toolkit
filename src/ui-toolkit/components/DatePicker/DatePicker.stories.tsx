import React, { useState } from "react";
import { setupStories } from "../_storybook/storybook.utils";
import { DatePicker, DatePickerProps } from "./DatePicker";

export default {
  title: "Forms & Inputs/DatePicker",
  component: DatePicker,
  argTypes: {
    children: {
      control: false,
    },
  },
};

export const Basic = () => {
  let [date, setDate] = useState("");

  return (
    <div>
      <DatePicker value={date} onChange={setDate} />
      <h3 className="mt-4">Date={date}</h3>
    </div>
  );
};

export const AlwaysOpen = () => {
  let [date, setDate] = useState("");

  return (
    <div>
      <DatePicker
        value={date}
        onChange={setDate}
        options={{
          dropdownMode: "alwaysOpen",
        }}
      />
      <h3 className="mt-4">{date}</h3>
    </div>
  );
};
