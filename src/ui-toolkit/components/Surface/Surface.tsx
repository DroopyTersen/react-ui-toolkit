import React from "react";

type SurfaceProps = React.HTMLProps<HTMLDivElement> & {
  as?: string;
};
export const Surface = React.forwardRef<HTMLDivElement, SurfaceProps>(function Surface(
  { as = "div", className = "", ...rest }: SurfaceProps,
  ref
) {
  const Elem: any = as;

  return <Elem className={"bg-light p-4 shadow-sm rounded " + className} {...rest} ref={ref} />;
});
