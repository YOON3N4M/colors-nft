import ColorCard from "@/components/ColorCard";
import ColorCube from "@/components/ColorCube";
import FlipCard from "@/components/FlipCard";
import Contents from "@/components/layout/Contents";
import RollingBanner from "@/components/RollingBanner";
import { arrangedColorArray, colorsArr } from "@/constants/colors";
import { filterColor, pickColors, suffleIndex } from "@/utils";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  IconButton,
  Text,
  transition,
} from "@chakra-ui/react";
import { delay, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BiSolidColor } from "react-icons/bi";
import DisplayFlipCard from "./DisplayFlipCard";

export default function ContainerHome() {
  const cardColors = pickColors(["16-4728", "18-2436", "18-0135"]);

  return (
    <Contents>
      <Flex as={"section"} w={"100%"} py={8} justifyContent="space-between">
        <Box className="left" w={"50%"} py={8} flexWrap="wrap">
          <Heading fontSize={"6xl"}>
            Welcome to the <br />
            <Text display={"inline"} color={`#${cardColors[0].hex}`}>
              colorful&nbsp;
            </Text>
            World
          </Heading>
          <Text mt={2}>COLORS are bla blab bla bla</Text>
          <Flex mt={12} gap={8}>
            <Button
              display={"flex"}
              colorScheme="brand"
              alignItems={"center"}
              gap={2}
            >
              See the colors <BiSolidColor />
            </Button>
            <Button variant={"outline"} colorScheme="brand">
              More information
            </Button>
          </Flex>
        </Box>
        <Box flex={1}>
          <Box display="flex" justifyContent={"center"}>
            <DisplayFlipCard colors={cardColors} />
          </Box>
        </Box>
      </Flex>
    </Contents>
  );
}
