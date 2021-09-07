import React from "react";

import { getClassName } from "~ui-toolkit/utils";

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
        {prefix && <span className="input-group-text py-1 px-2">{prefix}</span>}
        <input className={cssClass} ref={ref} {...rest} />
        {suffix && <span className="input-group-text py-1 px-2">{suffix}</span>}
      </div>
    );
  }
);

export type InputProps = React.HTMLProps<HTMLInputElement> & {
  className?: string;
  validationStatus?: ValidationStatus;
  prefix?: string | React.ReactNode;
  suffix?: string | React.ReactNode;
};
