import "./Modal.scss";

import React, { BaseSyntheticEvent } from "react";

import { Button } from "../Button/Button";
export const Modal = ({ showModal, title, onClose, children }: ModalProps) => {
  return (
    <div>
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        tabIndex={-1}
        role="dialog"
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">{title}</h2>
              <Button
                variant="link"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              ></Button>
            </div>
            {children}
          </div>
        </div>
      </div>
      <div className={`fade ${showModal ? "modal-backdrop show" : ""}`}></div>
    </div>
  );
};
export interface ModalProps {
  showModal: boolean;
  title: string;
  onClose: (event: BaseSyntheticEvent) => void;
  children?: React.ReactNode;
}
