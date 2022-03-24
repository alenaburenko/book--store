import React from "react";
import "../Card/card.scss";
function Button({ text, onClick, className }) {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
