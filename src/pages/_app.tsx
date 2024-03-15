import Layout from "@/components/layout/Layout";
import ModalProvider from "@/components/modal/ModalProvider";
import { auth } from "@/firebase";
import { useAuthActions } from "@/store/authStore";
import GlobalStyles from "@/styles/GlobalStyles";
import { theme } from "@/styles/theme";
import { UserDocument } from "@/types";
import { getUserDocument } from "@/utils/auth";
import { ChakraProvider } from "@chakra-ui/react";
import { onAuthStateChanged, User } from "firebase/auth";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

type IndexedDbState = "initial" | "success" | "fail";

export default function App({ Component, pageProps, router }: AppProps) {
  const { setIsLogin, setUser } = useAuthActions();
  const [indexedDbState, setIndexedDbState] =
    useState<IndexedDbState>("initial");
  const [indexedUser, setIndexedUser] = useState<User | null>(null);

  function checkIndexedDb() {
    onAuthStateChanged(auth, (user: any) => {
      if (!user) {
        setIndexedDbState("fail");
      } else {
        setIndexedDbState("success");
        setIndexedUser(user);
      }
    });
  }

  async function handleAuth() {
    if (!indexedUser) return;
    const userDocRes = await getUserDocument(indexedUser.uid);
    setUser(userDocRes);
    setIsLogin(true);
  }

  useEffect(() => {
    checkIndexedDb();
  }, []);

  useEffect(() => {
    if (indexedDbState !== "success") return;

    handleAuth();
  }, [indexedDbState]);

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <GlobalStyles />
        <AnimatePresence mode="wait">
          <Component key={router.route} {...pageProps} />
          <ModalProvider />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}
