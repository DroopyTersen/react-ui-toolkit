import "./Modal.scss";

import React, { useMemo, useState } from "react";

import { Button } from "../Button/Button";
export const Modal = ({ isOpen, close, title, children }: ModalProps) => {
  return (
    <div>
      <div
        className={`modal fade ${isOpen ? "show" : ""}`}
        tabIndex={-1}
        role="dialog"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              {title && <ModalTitle>{title}</ModalTitle>}
              <Button
                variant="link"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => close()}
              ></Button>
            </div>
            {children}
          </div>
        </div>
      </div>
      <div className={`fade ${isOpen ? "modal-backdrop show" : ""}`}></div>
    </div>
  );
};

function ModalTitle({ children }) {
  return <h2 className="modal-title">{children}</h2>;
}

function useModal() {
  let [isOpen, setIsOpen] = useState(false);
  let actions = useMemo(() => {
    return {
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    };
  }, [setIsOpen]);

  return {
    ...actions,
    isOpen,
  };
}

Modal.useModal = useModal;
Modal.Title = ModalTitle;

export interface ModalProps {
  isOpen: boolean;
  close: () => void;
  className?: string;
  title?: React.ReactNode;
  children: React.ReactNode;
}
