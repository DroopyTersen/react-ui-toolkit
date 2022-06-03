import React from "react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Button } from "./Button";

const DEFAULT_CONFIRM_MESSAGE =
  '<span class="text-danger">Are you sure?</span> All unsaved changes will be lost.';

export interface ConfirmCloseButtonProps {
  close: () => void;
  shouldConfirm: boolean;
  confirmMessage?: string;
}

export function ConfirmCloseButton({
  close,
  shouldConfirm = false,
  confirmMessage = DEFAULT_CONFIRM_MESSAGE,
}: ConfirmCloseButtonProps) {
  let [isConfirming, setIsConfirming] = useState(false);

  if (!isConfirming) {
    return (
      <Button
        color="light"
        scale="sm"
        type="button"
        className="text-uppercase align-self-baseline mt-2"
        onClick={() => {
          if (shouldConfirm) {
            setIsConfirming(true);
          } else {
            close();
          }
        }}
      >
        Close
        <IoMdClose size={16} className="relative" style={{ left: "5px" }} />
      </Button>
    );
  }

  return (
    <div>
      {confirmMessage && (
        <div
          className="position-absolute end-0 text-end"
          style={{ width: "344px", top: "-16px", fontSize: "14px" }}
          dangerouslySetInnerHTML={{ __html: confirmMessage }}
        ></div>
      )}
      <div className="d-flex align-items-center mt-2">
        <a
          className="text-underline me-4"
          style={{ cursor: "pointer" }}
          onClick={() => setIsConfirming(false)}
        >
          No,&nbsp;keep&nbsp;editing
        </a>
        <Button className="text-uppercase" color="light" scale="sm" onClick={() => close()}>
          yes,&nbsp;close
          <IoMdClose size={16} className="relative" style={{ left: "5px" }} />
        </Button>
      </div>
    </div>
  );
}
