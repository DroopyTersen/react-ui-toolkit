import React from "react";

export const Grid = ({ width = "250px", gap = "10px", children, ...rest }: GridProps) => (
  <div
    {...rest}
    style={{
      display: "grid",
      gap,
      gridTemplateColumns: `repeat(auto-fill, minmax(min(${width}, 100%), 1fr)`,
      maxWidth: "100%",
    }}
  >
    {children}
  </div>
);

export interface GridProps {
  /** The targeted width of each grid item. It won't be exactly this as it will stretch to fit the parent container while sticking as close this this width as it can. */
  width?: string;
  /** How much space between each grid item? */
  gap?: string;
  /** Render an array of grid items inside the Grid component */
  children: React.ReactNode;
  [key: string]: any;
}
