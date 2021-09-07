import "./Modal.scss";

import React from "react";

import { Button } from "../Button/Button";

import { setupStories } from "../_storybook/storybook.utils";
import { Modal, ModalProps } from "./Modal";

export default {
  title: "Surfaces/Modal",
  component: Modal,
  argTypes: { children: { control: false } },
};

const { createStory } = setupStories<ModalProps>(Modal);

export const ModalExample = createStory({
  children: (
    <div>
      <div className="modal-body">
        <p>
          A minimum of one account owner is required to save a trusted account to your account. If
          you would like to remove the trusted contact please confirm you would like do so;
          otherwise, please cancel and select at least one account owner.
        </p>
      </div>
      <div className="modal-footer">
        <Button color="dark">Close</Button>
        <Button color="success">Delete the trusted contact</Button>
      </div>
    </div>
  ),
  showModal: false,
  title: "You have deselected all of the account owners from this trusted contact",
  onClose: close,
});
