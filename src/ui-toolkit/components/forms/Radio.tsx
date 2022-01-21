import React from "react";

import { getClassName } from "../../utils";

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  // eslint-disable-next-line
  function Radio(
    { children, value, className, id, style, orientation = "horizontal", ...rest },
    ref
  ) {
    const cssClass = getClassName([
      // "form-check",
      "align-middle",
      "d-flex align-items-center gap-2",
      className,
      orientation === "vertical" ? "flex-column d-inline-flex" : "",
    ]);
    return (
      <label htmlFor={id || value} className={cssClass} style={style}>
        <input
          className="form-check-input"
          type="radio"
          id={id || value}
          value={value}
          ref={ref}
          style={
            orientation === "vertical" || true
              ? {
                  float: "initial",
                  marginLeft: "0",
                  marginTop: "0",
                }
              : undefined
          }
          {...rest}
        />
        {children}
      </label>
    );
  }
);
export type RadioProps = React.HTMLProps<HTMLInputElement> & {
  value: string;
  children: React.ReactNode;
  orientation?: "horizontal" | "vertical";
  className?: string;
};
