import React from "react";
import "./Modal.css";

function Modal({ open, onClose, children }) {
  return (
    <div>
      {open ? (
        <div className="modal" onClick={onClose}>
          <h1>{children}</h1>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Modal;
