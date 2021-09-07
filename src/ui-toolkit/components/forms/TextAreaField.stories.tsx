import { setupStories } from "../_storybook/storybook.utils";
import { TextAreaField, TextAreaFieldProps } from "./TextAreaField";

export default {
  title: "Forms & Inputs/TextAreaField",
  component: TextAreaField,
  argTypes: {
    children: {
      control: false,
    },
  },
};

const { createStory } = setupStories<TextAreaFieldProps>(TextAreaField);

export const Basic = createStory({
  label: "Description",
  name: "description",
});

export const Hint = createStory({
  ...Basic.args,
  rows: 7,
  hint: "You can write in markdown if you want!",
});

export const Invalid = createStory({
  ...Basic.args,
  value: "alkdjfasd",
  error: { message: "There is a problem with this input", type: "custom" },
});

export const RequiredError = createStory({
  ...Basic.args,
  required: true,
  // This would come from React Hook Form
  error: { type: "required" },
});

export const Valid = createStory({
  ...Basic.args,
  validationStatus: "valid",
  value: `Andrew C. Petersen is a world renowned developer... 
  
...of his own fiction.`,
  rows: 4,
  required: true,
  hint: "This is some helper text to describe the field.",
});


export const ExtraClasses = createStory({
  ...Basic.args,
  rows: 4,
  value: `Andrew C. Petersen is a world renowned developer... 
  
...of his own fiction.`,
  className: "form-control-lg my-custom-class",
  hint: "This example uses the Bootstrap class to make it larger."
});