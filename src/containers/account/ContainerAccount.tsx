import Contents from "@/components/layout/Contents";
import { useIsLogin, useUser } from "@/store/authStore";
import { useRouter } from "next/navigation";

import React from "react";

import UserToken from "./UserToken";

export default function ContainerAccount() {
  const router = useRouter();
  const isLogin = useIsLogin();
  const user = useUser();

  if (!isLogin) {
    return;
  }

  return <Contents>{user && <UserToken user={user} />}</Contents>;
}
