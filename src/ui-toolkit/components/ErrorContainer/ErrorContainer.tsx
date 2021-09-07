import React from "react";

export const ErrorContainer = ({
  title = "Something unexpectedly went wrong! 😢",
  children = undefined,
  className = "",
}: ErrorContainerProps) => {
  return (
    <section className={"p-4 bg-light rounded shadow-sm " + className}>
      {title && <h1 className="text-danger">{title}</h1>}
      {children}
    </section>
  );
};

export interface ErrorContainerProps {
  /** The primary error message to display */
  title?: string;
  /** Additional error details */
  children?: React.ReactNode;
  className?: string;
}
