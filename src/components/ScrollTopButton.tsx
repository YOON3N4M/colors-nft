import { Box, Center } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollTopButton() {
  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Center
      color={"brand.500"}
      position={"sticky"}
      className="return-top-btn"
      width={"40px"}
      h="40px"
      bg={"white"}
      borderRadius="50%"
      left={{ pc: "100%", mo: "80%" }}
      top={{ mo: "90%" }}
      boxShadow="md"
      cursor={"pointer"}
      onClick={scrollTop}
    >
      <FaArrowUp />
    </Center>
  );
}
