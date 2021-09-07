import React from "react";

import { FormField, FormFieldProps, getValidationStatus, pluckFormFieldProps } from "./FormField";
import { Input, InputProps } from "./Input";

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  // eslint-disable-next-line
  function InputField(props, ref) {
    const { formControlProps, formFieldProps } = pluckFormFieldProps(props);
    const status = getValidationStatus(formFieldProps.validationStatus, formFieldProps.error);
    return (
      <FormField {...formFieldProps}>
        <Input {...formControlProps} validationStatus={status} ref={ref} />
      </FormField>
    );
  }
);

export type InputFieldProps = InputProps & FormFieldProps;
