import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
  opacity?: number;
}

export function Overlay({ className = "", children, opacity = 0.5 }: Props) {
  return (
    <div
      className="position-absolute d-flex flex-column align-items-center justify-content-center"
      style={{ inset: "0" }}
    >
      <div
        className={"position-absolute " + className}
        style={{ opacity: opacity + "", inset: "0" }}
      ></div>
      <div className="z-50">{children}</div>
    </div>
  );
}
