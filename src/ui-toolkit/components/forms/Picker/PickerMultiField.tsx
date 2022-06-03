import React from "react";
import { FormField, FormFieldProps, getValidationStatus, pluckFormFieldProps } from "../FormField";
import { PickerMultiProps } from "./Picker.types";
import { PickerMulti } from "./PickerMulti";

export const PickerMultiField = React.forwardRef<HTMLSelectElement, SelectFieldProps>(
  // eslint-disable-next-line
  function PickerMultiField(props, ref) {
    const { formControlProps, formFieldProps } = pluckFormFieldProps(props);
    const status = getValidationStatus(formFieldProps.validationStatus, formFieldProps.error);
    return (
      <FormField {...formFieldProps}>
        <PickerMulti {...formControlProps} validationStatus={status} ref={ref} />
      </FormField>
    );
  }
);

export type SelectFieldProps = PickerMultiProps & FormFieldProps;
