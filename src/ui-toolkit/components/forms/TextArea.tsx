import React from "react";

import { getClassName } from "../../utils";

import { getValidationClass } from "./FormField";

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  // eslint-disable-next-line
  function TextArea({ validationStatus, className, ...rest }, ref) {
    const cssClass = getClassName([
      "form-control",
      getValidationClass(validationStatus),
      className,
    ]);
    return (
      <div className={"input-group " + getValidationClass(validationStatus)}>
        <textarea className={cssClass} ref={ref} {...rest}></textarea>
      </div>
    );
  }
);

export type TextAreaProps = React.HTMLProps<HTMLTextAreaElement> & {
  className?: string;
  validationStatus?: ValidationStatus;
};
