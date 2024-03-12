import { auth } from "@/firebase";
import { useAuthActions, useIsLogin } from "@/store/authStore";
import { useModalActions } from "@/store/modalStore";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import Link from "next/link";
import React from "react";

export default function AccountBtn() {
  const { setModalType } = useModalActions();
  const { setIsLogin } = useAuthActions();
  const isLogin = useIsLogin();

  function handleSignInClick() {
    setModalType("sign-in");
  }

  async function handleSignOutClick() {
    await signOut(auth);
    setIsLogin(false);
  }
  return (
    <Menu>
      <MenuButton as={"button"}>Account</MenuButton>
      <MenuList>
        {isLogin ? (
          <>
            <MenuItem>Account</MenuItem>
            <MenuItem onClick={handleSignOutClick}>Sign out</MenuItem>
          </>
        ) : (
          <MenuItem onClick={handleSignInClick}>Sign in</MenuItem>
        )}
      </MenuList>
    </Menu>
  );
}