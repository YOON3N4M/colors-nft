import { Box } from "@chakra-ui/react";
import React from "react";

export default function Contents({ children }: React.PropsWithChildren) {
  return (
    <Box maxW={"1280px"} m="0 auto" py={24} px={{ pc: 0, mo: 4 }}>
      {children}
    </Box>
  );
}
