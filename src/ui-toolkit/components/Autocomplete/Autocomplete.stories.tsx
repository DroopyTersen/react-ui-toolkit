import React from "react";
import { FormField } from "../forms";

import { setupStories } from "../_storybook/storybook.utils";
import { Autocomplete, AutocompleteOption, AutocompleteProps } from "./Autocomplete";

export default {
  title: "Forms & Inputs/Autocomplete",
  component: Autocomplete,
};

const getFruitOptions = (inputValue: string, selectedOption: Fruit): Fruit[] => {
  // if no filter or a selection was made return everything
  if (!inputValue || selectedOption) return fruits;

  return fruits.filter((f) => f.title.toLowerCase().includes(inputValue.toLowerCase()));
};

export const Basic = () => {
  const getFruitOptions = (inputValue: string, selectedOption: Fruit): Fruit[] => {
    // if no filter or a selection was made return everything
    if (!inputValue || selectedOption) return fruits;

    return fruits.filter((f) => f.title.toLowerCase().includes(inputValue.toLowerCase()));
  };

  return (
    <div style={{ maxWidth: "300px" }}>
      <Autocomplete
        getOptions={getFruitOptions}
        getValue={(option: Fruit) => option?.title || ""}
      />
    </div>
  );
};

export const RenderOption = () => {
  return (
    <FormField
      hint="You can render the option however you want"
      name="autocomplete-demo-debounced"
      style={{ maxWidth: "400px" }}
    >
      <Autocomplete
        getOptions={getFruitOptions}
        getValue={(option: Fruit) => option?.title || ""}
        renderOption={({ option, index, highlighted, selected, props }) => (
          <div
            {...props}
            style={{
              padding: "20px",
              textAlign: "center",
              background: highlighted ? "steelblue" : "white",
              textTransform: selected ? "uppercase" : "lowercase",
            }}
          >
            {index + 1}: {option.title}
          </div>
        )}
      />
    </FormField>
  );
};

// export const Basic = createStory({
//   getOptions: getFruitOptions,
//   getValue: (option: Fruit) => option?.title || "",
//   renderOption: (data) => <AutocompleteOption {...data}>{data.option.title}</AutocompleteOption>,
// });

export const Debounced = () => {
  return (
    <FormField
      hint="Wait for the user to stop typing before getting options"
      name="autocomplete-demo-debounced"
      style={{ maxWidth: "400px" }}
    >
      <Autocomplete
        getOptions={getFruitOptions}
        getValue={(option: Fruit) => option?.title || ""}
        config={{
          debounce: 650,
        }}
      />
    </FormField>
  );
};

export const DelayGetOptions = () => {
  return (
    <FormField
      hint="Don't load any options until the user has typed"
      name="autocomplete-demo-delayed-load"
      style={{ maxWidth: "400px" }}
    >
      <Autocomplete
        getOptions={getFruitOptions}
        getValue={(option: Fruit) => option?.title || ""}
        config={{
          getOptionsOnMount: false,
        }}
      />
    </FormField>
  );
};
// export const Debounced = createStory({
//   getOptions: getFruitOptions,
//   getValue: (option: Fruit) => option?.title || "",
//   config: {
//     debounce: 750,
//   },
//   // eslint-disable-next-line react/display-name
//   renderOption: (data) => <AutocompleteOption {...data}>{data.option.title}</AutocompleteOption>,
// });

// export const CustomDropdownHeight = createStory({
//   getOptions: getFruitOptions,
//   getInputValue: (option: Fruit) => option?.title || "",
//   config: {
//     dropdownHeight: "120px",
//   },
//   // eslint-disable-next-line react/display-name
//   renderOption: (data) => <AutocompleteOption {...data}>{data.option.title}</AutocompleteOption>,
// });

// export const CustomRenderOption = createStory({
//   getOptions: getFruitOptions,
//   getInputValue: (option: Fruit) => option?.title || "",
//   config: {
//     dropdownHeight: "120px",
//   },
//   // eslint-disable-next-line react/display-name
// renderOption: ({ option, index, highlighted, selected, props }) => (
//   <div
//     {...props}
//     style={{
//       background: highlighted ? "steelblue" : "white",
//       textTransform: selected ? "uppercase" : "lowercase",
//     }}
//   >
//     {index + 1}: {option.title}
//   </div>
// ),
// });

// export const DelayGetOptions = createStory({
//   getOptions: getFruitOptions,
//   getInputValue: (option: Fruit) => option?.title || "",
//   config: {
//     getOptionsOnMount: false,
//   },
//   // eslint-disable-next-line react/display-name
//   renderOption: (data) => <AutocompleteOption {...data}>{data.option.title}</AutocompleteOption>,
// });

interface Fruit {
  title: string;
}
const fruits: Fruit[] = [
  {
    title: "Apple",
  },
  {
    title: "Bananna",
  },
  {
    title: "Kiwi",
  },
  {
    title: "Watermelon",
  },
  {
    title: "Grapes",
  },
  {
    title: "Tangerine",
  },
  {
    title: "Lemon",
  },
  {
    title: "Lime",
  },
  {
    title: "Cranberry",
  },
  {
    title: "Strawberry",
  },
  {
    title: "Raspberry",
  },
  {
    title: "Cherry",
  },
  {
    title: "Blueberry",
  },
  {
    title: "Orange",
  },
].sort((a, b) => (a.title < b.title ? -1 : 1));
