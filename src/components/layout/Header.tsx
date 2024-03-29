import { Box, Center, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import AccountBtn from "../AccountBtn";

export default function Header() {
  return (
    <Box
      top={"0px"}
      // bg={"#ffffff7d"}
      //backdropFilter={"blur(10px)"}
      zIndex={250}
      borderBottom="1px solid #0000002d"
    >
      <Flex maxW={"1280px"} m="0 auto" gap={16} px={{ pc: 0, mo: 4 }}>
        <Center py={4} fontSize={20}>
          <Link href={"/"}>COLORS</Link>
        </Center>
        <Flex flex={1} gap={8}>
          <Center>
            <Link href={"/shop"}>Shop</Link>
          </Center>
          <Center>
            <Link href={"/about"}>About</Link>
          </Center>
          <Center ml="auto">
            <AccountBtn />
          </Center>
        </Flex>
      </Flex>
    </Box>
  );
}
