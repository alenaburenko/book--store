import React from "react";
import { useSelector } from "react-redux";
import "../Modal/modal.scss";

function Modal({ header, text, onClose, actions}) {
  const color = useSelector(({modal}) => modal.bg)
  return (
    <>
      <div onClick={onClose} className="modal">
        <div
          onClick={(e) => e.stopPropagation()}
          className="modal__content"
          style={{ backgroundColor: color }}
        >
          <div className="modal__header">
            <h2 className="modal__header-title">{header}</h2>
            <button className="modal__close" onClick={onClose}>
              X
            </button>
          </div>
          <p className="modal__body">{text}</p>
          <div className="modal__buttons">{actions}</div>
        </div>
      </div>
    </>
  );
}

export default Modal;
