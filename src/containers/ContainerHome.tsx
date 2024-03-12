import ColorCard from "@/components/ColorCard";
import ColorCube from "@/components/ColorCube";
import RollingBanner from "@/components/RollingBanner";
import { arrangedColorArray, colorsArr } from "@/constants/colors";
import { filterColor, suffleIndex } from "@/utils";
import { Box, Center, Text, transition } from "@chakra-ui/react";
import { delay, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import HomeBackground from "./HomeBackground";

export default function ContainerHome() {
  const [render, setRender] = useState(false);

  const textDelay = 1.5;
  const textDuration = 0.7;

  const bannerDelay = 1.0;
  const bannerDuration = 0.7;

  useEffect(() => {
    setRender(true);
  }, []);
  return (
    <Box height={"100dvh"} overflowY="hidden">
      {/* <Box className="select-your-own-color" position={"relative"}>
        {render && (
          <>
            <Center
              className="text-box"
              as={motion.div}
              position={"absolute"}
              top={50}
              left="50%"
              transform={"translateX(-50%)"}
              zIndex={200}
              px={8}
              gap={4}
              fontSize={150}
              color="black"
              fontWeight="semibold"
              // bg={bgColor}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: textDelay, duration: textDuration },
              }}
            >
              <Text>Select</Text>
              <Text>your</Text>
              <Text>own</Text>
              <Text>color</Text>
            </Center>
            <Box
              className="blur-box"
              position={"absolute"}
              w="100%"
              h="100%"
              bg={"#fefefe68"}
              transition="background-color 0.3s"
              backdropFilter="blur(7px)"
              zIndex={100}
              _hover={{ bg: "#fefefe22" }}
            ></Box>
            <Box
              className="bg-box"
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: bannerDelay, duration: bannerDuration },
              }}
            ></Box>
          </>
        )}
      </Box> */}
    </Box>
  );
}
