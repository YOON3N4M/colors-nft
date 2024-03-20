import { Box } from "@chakra-ui/react";
import React from "react";

export default function Contents({ children }: React.PropsWithChildren) {
  return (
    <Box
      position={"relative"}
      maxW={"1280px"}
      m="0 auto"
      py={{ pc: 24, mo: 4 }}
      px={{ pc: 0, mo: 2 }}
    >
      {children}
    </Box>
  );
}
