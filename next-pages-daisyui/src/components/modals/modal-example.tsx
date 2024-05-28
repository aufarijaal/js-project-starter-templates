import { Modal, useModal } from "@faceless-ui/modal";
import React from "react";

function ModalExample() {
  const { toggleModal } = useModal();

  return (
    <Modal slug="modal-example" className="modal-box">
      <h3 className="font-bold text-lg">Hello!</h3>
      <p className="py-4">Press ESC key or click the button below to close</p>
      <div className="modal-action">
        <button type="button" className="btn btn-sm" onClick={() => toggleModal("modal-example")}>
          Close
        </button>
      </div>
    </Modal>
  );
}

export default ModalExample;
