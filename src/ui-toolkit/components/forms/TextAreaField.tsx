import React from "react";
import { FormField, FormFieldProps, getValidationStatus, pluckFormFieldProps } from "./FormField";
import { TextArea, TextAreaProps } from "./TextArea";

export const TextAreaField = React.forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
  // eslint-disable-next-line
  function TextAreaField(props, ref) {
    const { formControlProps, formFieldProps } = pluckFormFieldProps(props);
    const status = getValidationStatus(formFieldProps.validationStatus, formFieldProps.error);
    return (
      <FormField {...formFieldProps}>
        <TextArea {...formControlProps} validationStatus={status} ref={ref} />
      </FormField>
    );
  }
);

export type TextAreaFieldProps = TextAreaProps & FormFieldProps;
