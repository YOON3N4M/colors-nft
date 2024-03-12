import { create } from "zustand";
import { ArrangedColor } from "@/types/color";
import { ModalType } from "@/components/modal/ModalContentProvider";

interface ModalStore {
  isModalOn: boolean;
  modalType: ModalType;
  selectedColor: ArrangedColor | null;
  actions: {
    setIsModalOn: (bool: boolean) => void;
    setModalType: (type: ModalType | null) => void;
    setSelectedColor: (color: ArrangedColor | null) => void;
  };
}

const useModalStore = create<ModalStore>((set) => ({
  isModalOn: false,
  modalType: null,
  selectedColor: null,
  actions: {
    setSelectedColor: (color) => set({ selectedColor: color }),
    setIsModalOn: (bool) => set({ isModalOn: bool }),
    setModalType: (type) => set({ modalType: type }),
  },
}));

export const useModalType = () => useModalStore((state) => state.modalType);
export const useIsModalOn = () => useModalStore((state) => state.isModalOn);
export const useSelectedColor = () =>
  useModalStore((state) => state.selectedColor);

export const useModalActions = () => useModalStore((state) => state.actions);
