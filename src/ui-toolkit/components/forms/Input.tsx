import React from "react";
import { getClassName } from "../../utils";
import { ButtonProps } from "../Button/Button";
import { getValidationClass } from "./FormField";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  // eslint-disable-next-line
  function Input({ validationStatus, prefix, suffix, className, ...rest }, ref) {
    const cssClass = getClassName([
      "form-control",
      getValidationClass(validationStatus),
      className,
    ]);
    return (
      <div className={"input-group " + getValidationClass(validationStatus)}>
        {prefix && (
          <span className={"input-group-text " + getValidationClass(validationStatus)}>
            {prefix}
          </span>
        )}
        <input className={cssClass} ref={ref} {...rest} />
        {suffix && (
          <span className={"input-group-text " + getValidationClass(validationStatus)}>
            {suffix}
          </span>
        )}
      </div>
    );
  }
);

export const InputSuffixButton = React.forwardRef(function InputSuffixButton(
  { children, ...props }: ButtonProps,
  ref
) {
  return (
    <button
      type="button"
      className="btn d-flex align-items-center px-3 bg-light"
      style={{
        border: "none",
        borderRadius: "0 .25rem .25rem 0",
        background: "white",
        margin: "-0.35rem -0.75rem",
      }}
      {...(props as any)}
      ref={ref}
    >
      {children}
    </button>
  );
});

export type InputProps = React.HTMLProps<HTMLInputElement> & {
  className?: string;
  validationStatus?: ValidationStatus;
  prefix?: any;
  suffix?: string | React.ReactNode;
};
