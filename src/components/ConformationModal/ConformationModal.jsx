import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideModal } from "../../store/modal/action";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

export const ConformationModal = () => {
  const dispatch = useDispatch();
  const { isOpen, description, onSuccess} = useSelector(
    ({ modal }) => modal
  );
  const handleSuccess = () => {
    onSuccess?.();
    dispatch(hideModal());
  };

  const handleCancel = () => {
    dispatch(hideModal());
  };

  const actions = [
    <Button key={1} onClick={handleSuccess} text="Ok" />,
    <Button key={2} onClick={handleCancel} text="Cancel" />,
  ];

  return (
    isOpen && (
      <Modal header={description} actions={actions} onClose={handleCancel} />
    )
  );
};
