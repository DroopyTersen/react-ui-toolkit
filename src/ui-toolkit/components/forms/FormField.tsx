import React from "react";
import { FieldError } from "react-hook-form";
import { getClassName } from "../../utils";

export const FormField = ({
  name,
  label,
  validationStatus,
  className,
  error,
  required,
  children,
  hint,
  ...rest
}: FormFieldProps) => {
  const errorMsg = parseErrorMessage(error, label);
  const cssClass = getClassName(["form-field", "has-validation", className]);
  const status = getValidationStatus(validationStatus, errorMsg);
  return (
    <div className={cssClass} {...rest}>
      {label && (
        <div className="d-flex">
          <label className="form-label" htmlFor={name} style={{ position: "relative" }}>
            {label}
            {required && <span className="text-danger required">*</span>}
          </label>
        </div>
      )}
      <span className={getValidationClass(status)}>{children}</span>
      {errorMsg && status === "invalid" && <div className="invalid-feedback">{errorMsg}</div>}
      {status !== "invalid" && hint && (
        <div
          className={getClassName([
            "form-field-hint",
            status === "valid" ? "text-success" : "text-muted",
          ])}
        >
          {hint}
        </div>
      )}
    </div>
  );
};

export interface FormFieldProps {
  /** The input name */
  name: string;
  /** The field label */
  label?: string;
  /** Helper text */
  hint?: string;
  /** The React Hook Form error */
  error?: FieldError | string;
  /** JSX that contains an input element with a matching name. */
  children?: React.ReactNode;
  /** Optionally pass an explicit validation status */
  validationStatus?: ValidationStatus;
  /** Show the little red asterisk? */
  required?: boolean;
  /** Additional CSS classes to add */
  className?: string;
  [key: string]: any;
}

export const pluckFormFieldProps = (props: any) => {
  const { name, label, validationStatus, error, required, hint, className, ...formControlProps } =
    props;

  return {
    formFieldProps: {
      name,
      label,
      validationStatus,
      error,
      required,
      hint,
      className,
    },

    formControlProps: {
      name,
      id: name,
      ...formControlProps,
    },
  };
};

export const getValidationStatus = (
  validationStatus: ValidationStatus,
  error: FieldError | string
) => {
  let status = validationStatus;
  if (!status && error) {
    status = "invalid";
  }

  return status;
};

const VALIDATION_CSS_CLASSES = {
  valid: "is-valid",
  invalid: "is-invalid",
};

export const getValidationClass = (status: ValidationStatus) => {
  if (!status) return "";
  return VALIDATION_CSS_CLASSES[status] || "";
};

export const parseErrorMessage = (error: FieldError | string, label) => {
  if (!error) return "";
  if (typeof error === "string") return error;

  if (error.message) return error.message;

  if (error.type === "required") return `${label || "Field"} is required`;
  return `${label || "Field"} error: ${error.type}`;
};
