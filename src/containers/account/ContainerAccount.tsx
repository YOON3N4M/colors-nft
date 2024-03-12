import Contents from "@/components/layout/Contents";
import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import React from "react";

export default function ContainerAccount() {
  return (
    <Contents>
      <Flex
        py={12}
        w={"100%"}
        justifyContent="space-between"
        gap={1}
        h="500px"
        bg="gray"
      >
        <Box w={"50%"}>
          <Center>
            <Heading>6</Heading>
          </Center>
          <Heading textAlign={"center"}>Auto Token</Heading>
        </Box>
        <Box w={"50%"} bg="navy">
          <Center>
            <Heading>6</Heading>
          </Center>
          <Heading textAlign={"center"}>Auto Token</Heading>
        </Box>
      </Flex>
    </Contents>
  );
}
