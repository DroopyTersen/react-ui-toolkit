import React from "react";
import { getClassName } from "../../utils";

export const Check = React.forwardRef<HTMLInputElement, CheckProps>(
  // eslint-disable-next-line
  function Check({ children, name, id, className, ...rest }, ref) {
    const cssClass = getClassName(["form-check", "align-middle", className]);
    return (
      <div className={cssClass}>
        <input
          className="form-check-input"
          type="checkbox"
          id={id || name}
          name={name}
          ref={ref}
          {...rest}
        />
        <label className="form-check-label" htmlFor={id || name}>
          {children}
        </label>
      </div>
    );
  }
);
export type CheckProps = React.HTMLProps<HTMLInputElement> & {
  name: string;
  children: React.ReactNode;
  className?: string;
};
