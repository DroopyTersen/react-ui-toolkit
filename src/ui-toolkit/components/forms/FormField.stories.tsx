import React from "react";

import { setupStories } from "../_storybook/storybook.utils";
import { Check } from "./Check";
import { FormField, FormFieldProps } from "./FormField";
import { Radio } from "./Radio";

export default {
  title: "forms & inputs/FormField",
  component: FormField,
  argTypes: {
    children: {
      control: false,
    },
  },
};

const { createStory } = setupStories<FormFieldProps>(FormField);

export const Basic = createStory({
  label: "Legal Name",
  name: "legalName",
  children: <input className="form-control form-input" name="legalName" id="legalName" />,
});

export const Hint = createStory({
  ...Basic.args,
  hint: "This is some helper text to describe the field.",
});

export const Invalid = createStory({
  ...Basic.args,
  children: (
    <input className="form-control form-input is-invalid" name="legalName" id="legalName" />
  ),
  error: { message: "There is a problem with this input", type: "custom" },
});

export const Required = createStory({
  ...Basic.args,
  required: true,
  hint: "This is field is required.",
});

export const RequiredError = createStory({
  ...Basic.args,
  children: <input className="form-control form-input is-invalid" name="legalName" />,
  required: true,
  // This would come from React Hook Form
  error: { type: "required" },
  hint: "This is the hint. Should it show when there is an error?",
});

export const Valid = createStory({
  ...Basic.args,
  validationStatus: "valid",
  children: (
    <input
      className="form-control form-input is-valid"
      name="legalName"
      value="Andrew C. Petersen"
    />
  ),
  hint: "This is some helper text to describe the field.",
});

export const Radios = createStory({
  name: "maritalStatus",
  label: "Marital Status",
  hint: "Your marital status can impact your taxes.",
  children: (
    <>
      <Radio value="single" name="maritalStatus">
        Single
      </Radio>
      <Radio value="married" name="maritalStatus">
        Married
      </Radio>
      <Radio value="divorced" name="maritalStatus">
        Divorced
      </Radio>
      <Radio value="widowed" name="maritalStatus">
        Windowed
      </Radio>
    </>
  ),
});

export const RadiosError = createStory({
  name: "maritalStatus",
  label: "Marital Status",
  hint: "Your marital status can impact your taxes.",
  required: true,
  error: { type: "required" },
  children: (
    <>
      <Radio value="single" name="maritalStatus">
        Single
      </Radio>
      <Radio value="married" name="maritalStatus">
        Married
      </Radio>
      <Radio value="divorced" name="maritalStatus">
        Divorced
      </Radio>
      <Radio value="widowed" name="maritalStatus">
        Windowed
      </Radio>
    </>
  ),
});

export const Checkboxes = createStory({
  name: "developerSkills",
  label: "Developer Skills",
  children: (
    <>
      <Check name="hasCss">CSS and Styling</Check>
      <Check name="hasJS">Javascript</Check>
      <Check name="hasTS">Typescript</Check>
      <Check name="hasDotNet">C# / .NET</Check>
      <Check name="hasJava">Java</Check>
      <Check name="hasSocial">Interfacing w/ Humans</Check>
    </>
  ),
});
