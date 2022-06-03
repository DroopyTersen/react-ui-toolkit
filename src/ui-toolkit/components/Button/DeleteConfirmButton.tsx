import React from "react";
import { useState } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { Button } from "../Button/Button";

const DEFAULT_CONFIRM_MESSAGE = '<span class="text-danger">Are you sure?</span>';

export interface DeleteConfirmButtonProps {
  onConfirmed: () => void;
  confirmMessage?: string;
  children?: React.ReactNode;
  isReadOnly?: boolean;
  className?: string;
}

export function DeleteConfirmButton({
  children,
  confirmMessage = DEFAULT_CONFIRM_MESSAGE,
  isReadOnly = false,
  className,
  onConfirmed,
}: DeleteConfirmButtonProps) {
  const [isConfirming, setIsConfirming] = useState(false);

  if (!isConfirming) {
    return (
      <>
        {children}
        <button
          className={className + " btn px-0" + (isReadOnly ? " text-muted" : "")}
          type="button"
          onClick={() => setIsConfirming(true)}
          disabled={isReadOnly}
        >
          <RiDeleteBinFill title="Remove" size={26} />
        </button>
      </>
    );
  }

  return (
    <div className="d-flex align-items-center gap-2">
      {confirmMessage && (
        <div dangerouslySetInnerHTML={{ __html: confirmMessage }} className="me-2"></div>
      )}
      <a
        onClick={() => setIsConfirming(false)}
        className="text-underline"
        style={{ cursor: "pointer" }}
      >
        No, keep
      </a>
      <Button className="text-uppercase" color="light" scale="sm" onClick={onConfirmed}>
        Yes, delete
        <RiDeleteBinFill size={26} className="relative" style={{ left: "5px" }} />
      </Button>
    </div>
  );
}
