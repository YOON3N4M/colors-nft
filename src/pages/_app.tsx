import Layout from "@/components/layout/Layout";
import ModalProvider from "@/components/modal/ModalProvider";
import GlobalStyles from "@/styles/GlobalStyles";
import { theme } from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
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
