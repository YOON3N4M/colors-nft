import { create } from "zustand";

interface AuthStore {
  isLogin: boolean;
  actions: {
    setIsLogin: (bool: boolean) => void;
  };
}

const useAuthStore = create<AuthStore>((set) => ({
  isLogin: false,
  actions: {
    setIsLogin: (bool) => set({ isLogin: bool }),
  },
}));

export const useIsLogin = () => useAuthStore((state) => state.isLogin);

export const useAuthActions = () => useAuthStore((state) => state.actions);
