import { ModalType } from "@/store/modalStore";
import React from "react";
import ModalColorDetail from "./contents/ColorDetail";

interface ModalContentProviderProps {
  modalType: ModalType;
}

export default function ModalContentProvider(props: ModalContentProviderProps) {
  const { modalType } = props;

  switch (modalType) {
    case "color-detail":
      return <ModalColorDetail />;
    default:
      return <></>;
  }
}
