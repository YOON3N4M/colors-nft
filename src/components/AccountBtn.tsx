import { auth } from "@/firebase";
import { useAuthActions, useIsLogin, useUser } from "@/store/authStore";
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
  const { setIsLogin, setUser } = useAuthActions();
  const isLogin = useIsLogin();
  const user = useUser();

  function handleSignInClick() {
    setModalType("sign-in");
  }

  async function handleSignOutClick() {
    await signOut(auth);
    setUser(null);
    setIsLogin(false);
  }
  return (
    <Menu>
      <MenuButton as={"button"}>Account</MenuButton>
      <MenuList>
        {isLogin ? (
          <>
            <MenuItem>
              <Link href={`/account/${user?.uid}`}>Account</Link>
            </MenuItem>
            <MenuItem onClick={handleSignOutClick}>Sign out</MenuItem>
          </>
        ) : (
          <MenuItem onClick={handleSignInClick}>Sign in</MenuItem>
        )}
      </MenuList>
    </Menu>
  );
}
