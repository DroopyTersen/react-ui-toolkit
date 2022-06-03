import React from "react";

export interface ClearablePillProps {
  children: React.ReactNode;
  onClear: () => void;
  className?: string;
}

export function ClearablePill({ children, onClear, className = "" }: ClearablePillProps) {
  return (
    <div
      className={`d-flex align-items-center bg-primary bg-opacity-10 rounded-pill text-small text-spaced text-uppercase ${className}`}
    >
      <span className="ps-3">{children}</span>
      <button
        type="button"
        className="btn-close"
        aria-label="clear filter"
        onClick={() => onClear()}
        style={{
          fontSize: ".6rem",
          lineHeight: ".6rem",
          padding: ".7rem",
          borderRadius: "50%",
        }}
      ></button>
    </div>
  );
}
