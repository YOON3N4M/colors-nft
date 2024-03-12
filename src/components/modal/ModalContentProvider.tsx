import React from "react";
import ColorDetailModal from "./contents/ColorDetailModal";
import SignInModal from "./contents/SignInModal";

export type ModalType = null | "color-detail" | "sign-in";

interface ModalContentProviderProps {
  modalType: ModalType;
}

export default function ModalContentProvider(props: ModalContentProviderProps) {
  const { modalType } = props;

  switch (modalType) {
    case "color-detail":
      return <ColorDetailModal />;
    case "sign-in":
      return <SignInModal />;
    default:
      return <></>;
  }
}
