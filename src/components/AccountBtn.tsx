import { useModalActions } from "@/store/modalStore";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function AccountBtn() {
  const { setModalType } = useModalActions();

  function handleSignInClick() {
    setModalType("sign-in");
  }
  return (
    <Menu>
      <MenuButton as={"button"}>Account</MenuButton>
      <MenuList>
        <MenuItem onClick={handleSignInClick}>Sign in</MenuItem>
      </MenuList>
    </Menu>
  );
}
