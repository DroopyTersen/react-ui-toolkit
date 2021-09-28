import React, { useState } from "react";
import { InputSuffixButton } from ".";

import { Button } from "../Button/Button";

import { FormField, getValidationStatus, pluckFormFieldProps } from "./FormField";
import { Input } from "./Input";
import { InputFieldProps } from "./InputField";

export const PeekableInputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  // eslint-disable-next-line
  function InputField(props, ref) {
    const { formControlProps, formFieldProps } = pluckFormFieldProps(props);
    const inputPeeking = useInputPeeking();
    const status = getValidationStatus(formFieldProps.validationStatus, formFieldProps.error);
    return (
      <FormField {...formFieldProps}>
        <Input
          {...formControlProps}
          {...inputPeeking.inputProps}
          validationStatus={status}
          ref={ref}
        />
      </FormField>
    );
  }
);

export const useInputPeeking = () => {
  const [isPeeking, setIsPeeking] = useState<boolean>(false);

  return {
    isPeeking,
    setIsPeeking,

    inputProps: {
      type: isPeeking ? "text" : "password",
      className: "hide-reveal",
      autoComplete: "new-password",
      suffix: (
        <InputSuffixButton
          title={isPeeking ? "Hide value" : "Show value"}
          onClick={() => {
            setIsPeeking((prev) => !prev);
          }}
        >
          <i className={`bi bi-${isPeeking ? "eye-slash" : "eye"}`}></i>
        </InputSuffixButton>
      ),
    },
  };
};
