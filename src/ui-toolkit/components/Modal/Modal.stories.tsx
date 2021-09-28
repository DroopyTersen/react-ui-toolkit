import React from "react";
import { Button } from "../Button/Button";
import { Modal } from "./Modal";

export default {
  title: "Surfaces/Modal",
  component: Modal,
  argTypes: { children: { control: false } },
};

export const Basic = () => {
  let modal = Modal.useModal();

  return (
    <div>
      <Button onClick={modal.open}>Open Modal</Button>
      <Modal {...modal} title="Modal Title">
        <div className="modal-body">
          <p>I am the modal content</p>
        </div>
        <div className="modal-footer d-flex justify-content-end gap-2">
          <Button variant="link" onClick={modal.close}>
            Cancel
          </Button>
          <Button onClick={modal.close}>Save</Button>
        </div>
      </Modal>
      <p className="mt-4">
        The trick is to use the <code>Modal.useModal()</code> hook to supply the `props` that the
        `Modal` component needs.
      </p>

      <p>
        This way you have access to the <code>open()</code> and <code>close()</code> methods but
        don't have to manage all the state yourself.
      </p>
      <pre>
        {`
let modal = Modal.useModal();
return (
  <Modal {...modal}>
    ...Modal Contents
    <button onClick={modal.close}>Cancel</button>
  </Modal>
)
        `}
      </pre>
    </div>
  );
};
