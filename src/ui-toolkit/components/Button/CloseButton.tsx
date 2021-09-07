import React from "react";

export const CloseButton = ({ className, ...rest }: Props) => {
  return (
    <button
      type={"button" as any}
      className={"btn-close " + className}
      aria-label="Close"
      {...rest}
    ></button>
  );
};
type Props = React.HTMLProps<HTMLButtonElement>;
