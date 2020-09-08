import React from "react";
import "./Modal.css";

function Modal({ open, onClose, children }) {
  return (
    <div>
      {open ? (
        <div className="modal" onClick={onClose}>
          {children}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Modal;
