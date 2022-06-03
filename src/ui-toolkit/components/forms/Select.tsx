import React from "react";
import { getClassName } from "../../utils";
import { getValidationClass } from "./FormField";

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  // eslint-disable-next-line
  function Select({ validationStatus, className, children, ...rest }, ref) {
    const cssClass = getClassName(["form-select", getValidationClass(validationStatus), className]);
    return (
      <div className={"input-group " + getValidationClass(validationStatus)}>
        <select className={cssClass} ref={ref} {...rest}>
          {children}
        </select>
      </div>
    );
  }
);

export type SelectProps = React.HTMLProps<HTMLSelectElement> & {
  className?: string;
  children: React.ReactNode;
  validationStatus?: ValidationStatus;
};
