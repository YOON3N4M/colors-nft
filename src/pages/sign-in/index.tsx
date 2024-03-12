import Contents from "@/components/layout/Contents";
import Curve from "@/components/layout/pageTransition";
import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";

export default function SignIn() {
  return (
    <Curve>
      <Contents>
        <Center flexDirection={"column"}>
          <Heading fontWeight={500}>Welcome to Colors</Heading>
          <Heading fontWeight={500} fontSize={"lg"} mt={4}>
            join us and find your colors
          </Heading>
          <Box w="500px" h="550px" boxShadow="md" border="1px solid gray"></Box>
        </Center>
      </Contents>
    </Curve>
  );
}
