import { UserDocument } from "@/types";
import { create } from "zustand";

interface AuthStore {
  user: UserDocument | null;
  isLogin: boolean;
  actions: {
    setUser: (user: UserDocument | null) => void;
    setIsLogin: (bool: boolean) => void;
  };
}

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLogin: false,
  actions: {
    setUser: (user) => set({ user: user }),
    setIsLogin: (bool) => set({ isLogin: bool }),
  },
}));

export const useUser = () => useAuthStore((state) => state.user);
export const useIsLogin = () => useAuthStore((state) => state.isLogin);

export const useAuthActions = () => useAuthStore((state) => state.actions);
