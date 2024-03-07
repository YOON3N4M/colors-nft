import ColorCard from "@/components/ColorCard";
import RollingBanner from "@/components/RollingBanner";
import { arrangedColorArray, colorsArr } from "@/constants/colors";
import { filterColor, suffleIndex } from "@/utils";
import { Box, Center, Text, transition } from "@chakra-ui/react";
import { delay, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function ContainerHome() {
  const [render, setRender] = useState(false);
  const bgColor = "white";

  const textDelay = 1.5;
  const textDuration = 0.7;

  const bannerDelay = 1.0;
  const bannerDuration = 0.7;

  useEffect(() => {
    setRender(true);
  }, []);
  return (
    <Box height={"100dvh"} overflowY="hidden">
      <Box className="select-your-own-color" position={"relative"}>
        {render && (
          <>
            <Center
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: textDelay, duration: textDuration },
              }}
              position={"absolute"}
              left="50%"
              top="50%"
              transform={"translateX(-50%) translateY(-50%)"}
              fontSize={150}
              w="max-content"
              zIndex={200}
              gap={4}
              // bg={bgColor}
              fontWeight="semibold"
              color="black"
              px={8}
            >
              <Text>Select</Text>
              <Text>your</Text>
              <Text>own</Text>
              <Text>color</Text>
            </Center>
            <Box
              position={"absolute"}
              w="100%"
              h="100%"
              bg={"#fefefe68"}
              transition="background-color 0.3s"
              backdropFilter="blur(7px)"
              zIndex={100}
              _hover={{ bg: "#fefefe22" }}
            ></Box>
          </>
        )}
        {render && (
          <Box
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: bannerDelay, duration: bannerDuration },
            }}
          >
            <RollingBanner bg={bgColor}>
              {suffleIndex(
                filterColor(arrangedColorArray, "lightness", "11")
              ).map((color) => (
                <ColorCard
                  type="text"
                  numbering={color.numbering}
                  hex={color.hex}
                  name={color.displayName}
                  comma={false}
                  colorText={true}
                />
              ))}
            </RollingBanner>
            <RollingBanner direction="to right" bg={bgColor}>
              {suffleIndex(
                filterColor(arrangedColorArray, "lightness", "14")
              ).map((color) => (
                <ColorCard
                  type="text"
                  numbering={color.numbering}
                  hex={color.hex}
                  name={color.displayName}
                  comma={false}
                  colorText={true}
                />
              ))}
            </RollingBanner>
            <RollingBanner bg={bgColor}>
              {suffleIndex(
                filterColor(arrangedColorArray, "lightness", "15")
              ).map((color) => (
                <ColorCard
                  type="text"
                  numbering={color.numbering}
                  hex={color.hex}
                  name={color.displayName}
                  comma={false}
                  colorText={true}
                />
              ))}
            </RollingBanner>
            <RollingBanner direction="to right" bg={bgColor}>
              {suffleIndex(
                filterColor(arrangedColorArray, "lightness", "16")
              ).map((color) => (
                <ColorCard
                  type="text"
                  numbering={color.numbering}
                  hex={color.hex}
                  name={color.displayName}
                  comma={false}
                  colorText={true}
                />
              ))}
            </RollingBanner>
          </Box>
        )}
      </Box>
      <Box position={"relative"}>
        <Box
          position={"absolute"}
          w="100%"
          h="100%"
          bg={"#fefefe68"}
          transition="background-color 0.3s"
          backdropFilter="blur(7px)"
          zIndex={100}
          _hover={{ bg: "#fefefe22" }}
        ></Box>
        {render && (
          <Box
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: bannerDelay, duration: bannerDuration },
            }}
          >
            <RollingBanner bg={bgColor}>
              {suffleIndex(
                filterColor(arrangedColorArray, "lightness", "15")
              ).map((color) => (
                <ColorCard
                  type="text"
                  numbering={color.numbering}
                  hex={color.hex}
                  name={color.displayName}
                  comma={false}
                  colorText={true}
                />
              ))}
            </RollingBanner>
            <RollingBanner direction="to right" bg={bgColor}>
              {suffleIndex(
                filterColor(arrangedColorArray, "lightness", "14")
              ).map((color) => (
                <ColorCard
                  type="text"
                  numbering={color.numbering}
                  hex={color.hex}
                  name={color.displayName}
                  comma={false}
                  colorText={true}
                />
              ))}
            </RollingBanner>
            <RollingBanner bg={bgColor}>
              {suffleIndex(
                filterColor(arrangedColorArray, "lightness", "12")
              ).map((color) => (
                <ColorCard
                  type="text"
                  numbering={color.numbering}
                  hex={color.hex}
                  name={color.displayName}
                  comma={false}
                  colorText={true}
                />
              ))}
            </RollingBanner>
            <RollingBanner direction="to right" bg={bgColor}>
              {suffleIndex(
                filterColor(arrangedColorArray, "lightness", "11")
              ).map((color) => (
                <ColorCard
                  type="text"
                  numbering={color.numbering}
                  hex={color.hex}
                  name={color.displayName}
                  comma={false}
                  colorText={true}
                />
              ))}
            </RollingBanner>
            <RollingBanner bg={bgColor}>
              {suffleIndex(
                filterColor(arrangedColorArray, "lightness", "11")
              ).map((color) => (
                <ColorCard
                  type="text"
                  numbering={color.numbering}
                  hex={color.hex}
                  name={color.displayName}
                  comma={false}
                  colorText={true}
                />
              ))}
            </RollingBanner>
          </Box>
        )}
      </Box>
    </Box>
  );
}
