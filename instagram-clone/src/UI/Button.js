import React from "react";
import "./Button.css";

function Button({ onClick, children }) {
  return (
    <>
      <button className="ui-button" onClick={onClick}>
        {children}
      </button>
    </>
  );
}

export default Button;