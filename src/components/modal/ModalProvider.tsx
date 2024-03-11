import {
  useIsModalOn,
  useModalActions,
  useModalType,
} from "@/store/modalStore";
import { Modal, ModalOverlay } from "@chakra-ui/react";
import React, { useEffect } from "react";
import ModalContentProvider from "./ModalContentProvider";

export default function ModalProvider() {
  const isModalOn = useIsModalOn();
  const modalType = useModalType();

  const { setIsModalOn, setModalType } = useModalActions();

  function handleModalOff() {
    setIsModalOn(false);
    setModalType(null);
  }

  useEffect(() => {
    if (!modalType) {
      setIsModalOn(false);
    } else {
      setIsModalOn(true);
    }
  }, [modalType]);

  return (
    <Modal
      isOpen={isModalOn}
      onClose={() => {
        handleModalOff();
      }}
      scrollBehavior="inside"
      isCentered
    >
      <ModalOverlay />
      <ModalContentProvider modalType={modalType} />
    </Modal>
  );
}
