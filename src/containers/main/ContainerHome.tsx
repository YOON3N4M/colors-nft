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
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiSolidColor } from "react-icons/bi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import DisplayFlipCard from "./DisplayFlipCard";
import Trending from "./Trending";

export default function ContainerHome() {
  const cardColors = pickColors(["16-4728", "18-2436", "18-0135"]);
  const router = useRouter();

  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(true);
  }, []);
  return (
    <>
      {render && (
        <Contents>
          <Flex
            flexDirection={{ mo: "column", pc: "row" }}
            as={"section"}
            w={"100%"}
            py={8}
            justifyContent="space-between"
          >
            <Box
              className="left"
              w={{ pc: "50%" }}
              py={8}
              flexWrap="wrap"
              textAlign={{ pc: "initial", mo: "center" }}
            >
              <Heading fontSize={{ pc: "6xl", mo: "4xl" }}>
                Welcome to the <br />
                <Text display={"inline"} color={`#${cardColors[0].hex}`}>
                  colorful&nbsp;
                </Text>
                World
              </Heading>
              <Text mt={8} fontSize="lg">
                <Text display={"inline"} fontWeight="600">
                  Find the your favorite
                </Text>{" "}
                out of 3,000 different colors
              </Text>
              <Flex mt={12} gap={8}>
                <Button
                  display={"flex"}
                  colorScheme="brand"
                  alignItems={"center"}
                  gap={2}
                  onClick={() => router.push("/shop")}
                >
                  See the colors <BiSolidColor />
                </Button>
                <Button
                  variant={"outline"}
                  colorScheme="brand"
                  alignItems={"center"}
                  gap={2}
                  onClick={() => router.push("/about")}
                >
                  More information <IoIosInformationCircleOutline />
                </Button>
              </Flex>
            </Box>
            <Box flex={1} display={{ mo: "none", pc: "initial" }}>
              <Box display="flex" justifyContent={"center"}>
                <DisplayFlipCard colors={cardColors} />
              </Box>
            </Box>
          </Flex>
          <Box py={8}>
            <Heading textAlign={"center"}>Trending Color</Heading>
            <Trending />
          </Box>
        </Contents>
      )}
    </>
  );
}
