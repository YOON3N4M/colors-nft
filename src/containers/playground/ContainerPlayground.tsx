import Contents from "@/components/layout/Contents";
import { keyColor } from "@/components/layout/pageTransition";
import { Box, Flex, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import LayoutAnim from "./anim/LayoutAnim";
import { AnimatePresence, motion } from "framer-motion";
import DarwingAnim from "./anim/DarwingAnim";
import RevealEffectAnim from "./anim/RevealEffectAnim";

type PlaygroundContents = "layout animation" | "line drawing" | "reveal effect";

export default function ContainerPlayground() {
  const playgroundContents: PlaygroundContents[] = [
    "layout animation",
    "line drawing",
    "reveal effect",
  ];
  const [selectedContent, setSelectedContent] = useState<PlaygroundContents>(
    playgroundContents[0]
  );

  function RenderMain() {
    let content;
    switch (selectedContent) {
      case "layout animation":
        content = <LayoutAnim />;
        break;
      case "line drawing":
        content = <DarwingAnim />;
        break;
      case "reveal effect":
        content = <RevealEffectAnim />;
    }
    return <>{content}</>;
  }

  return (
    <Contents>
      <Flex minH={500} gap={10}>
        <Flex
          flexDirection={"column"}
          p={"10px 10px"}
          className="menu"
          w={200}
          //bg={keyColor}
          gap={2}
        >
          {playgroundContents.map((content) => (
            <Box
              position="relative"
              as="button"
              key={content}
              onClick={() => setSelectedContent(content)}
              textAlign="start"
            >
              {selectedContent === content && (
                <Box
                  textAlign={"left"}
                  as={motion.div}
                  position="absolute"
                  left={"-5px"}
                  w="2px"
                  bg="#8855ff"
                  top={0}
                  bottom={0}
                  layoutId="leftline"
                />
              )}
              {content}
            </Box>
          ))}
        </Flex>
        <Box p={"10px 10px"} flex={1} className="content" bg={keyColor}>
          <AnimatePresence mode="wait">
            <Box
              className="dd"
              h={"100%"}
              as={motion.div}
              key={`${selectedContent}-box`}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              // transition="0.2s"
            >
              <RenderMain />
            </Box>
          </AnimatePresence>
        </Box>
      </Flex>
    </Contents>
  );
}
