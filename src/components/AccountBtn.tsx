import { auth } from "@/firebase";
import { useAuthActions, useIsLogin, useUser } from "@/store/authStore";
import { useModalActions } from "@/store/modalStore";
import {
  getUserDocument,
  googleLogin,
  registerUserDocument,
} from "@/utils/auth";
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

  async function handleSignInClick() {
    const res = await googleLogin();
    let userDoc = null;

    if (!res.status) return;
    if (!res.userData) return;
    // ^ db에 유저 정보 조회
    const docRes = await getUserDocument(res.userData.uid);

    userDoc = docRes;
    // ^ 없으면 document 생성
    if (!docRes) {
      userDoc = await registerUserDocument(res.userData);
    }

    setIsLogin(true);
    setUser(userDoc);
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
