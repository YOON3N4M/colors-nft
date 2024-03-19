import Contents from "@/components/layout/Contents";
import { useAuthActions, useIsLogin, useUser } from "@/store/authStore";
import { getUserDocument } from "@/utils/auth";
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";
import UserProfile from "./UserProfile";

import UserToken from "./UserToken";

export default function ContainerAccount() {
  const router = useRouter();
  const isLogin = useIsLogin();
  const user = useUser();

  const { setUser } = useAuthActions();

  async function updateUser() {
    if (!user) return;
    const freshUserDocument = await getUserDocument(user.uid);
    setUser(freshUserDocument);
  }

  useEffect(() => {
    // * 해당 페이지는 토큰, 보유 색상등 데이터 최신화가 필요하기 떄문에 페이지 진입시 데이터 최신화
    updateUser();
  }, []);

  if (!isLogin) {
    return;
  }

  return (
    <Contents>
      {user && (
        <>
          <UserToken user={user} />
          <UserProfile />
        </>
      )}
    </Contents>
  );
}
