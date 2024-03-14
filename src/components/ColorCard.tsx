import { useModalActions } from "@/store/modalStore";
import { ArrangedColor } from "@/types/color";
import { Box, Center, Text } from "@chakra-ui/react";
import { Variants, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export type ColorCardType = "card" | "square" | "text";

interface ColorCardProps {
  color: ArrangedColor;
  type: ColorCardType;
  //text type
  colorText?: boolean;
  comma?: boolean;
  isLastIdx?: boolean;
}

const scrollFadeInVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function ColorCard(props: ColorCardProps) {
  const {
    color,
    type = "card",
    comma = true,
    colorText = false,
    isLastIdx = false,
  } = props;

  const { numbering, name, displayName, hex } = color;

  const height = type === "square" ? "180px" : "160px";

  const { setModalType, setSelectedColor } = useModalActions();

  function handleColorCardClick() {
    openColorDetailModal();
  }

  function openColorDetailModal() {
    setSelectedColor(color);
    setModalType("color-detail");
  }

  return (
    <>
      {type !== "text" ? (
        <Box
          as={motion.div}
          w="180px"
          maxW={"180px"}
          // variants={scrollFadeInVariants}
          cursor={"pointer"}
          key={numbering}
          onClick={handleColorCardClick}
        >
          <Center h={height} bg={`#${hex}`}></Center>
          {type === "card" && (
            <Box
              py={4}
              px={3}
              borderRight={"1px solid #A8A8A8"}
              borderBottom={"1px solid #A8A8A8"}
              borderLeft={"1px solid #A8A8A8"}
            >
              <Text fontWeight={700} fontSize={"x-large"} lineHeight={1.3}>
                PANTONE
              </Text>
              <Text fontWeight={600} lineHeight={1}>
                {numbering}
              </Text>
              <Text fontWeight={600} fontSize={"large"} lineHeight={0.8}>
                {displayName}
              </Text>
            </Box>
          )}
        </Box>
      ) : (
        <Box
          as={motion.button}
          variants={scrollFadeInVariants}
          display={"inline"}
          fontSize={80}
          fontWeight={500}
          _hover={{ color: `#${hex}` }}
          cursor={"pointer"}
          color={colorText ? `#${hex}` : `#80808073`}
          transition={"color"}
          transitionDuration={"200ms"}
          width={"max-content"}
          onClick={handleColorCardClick}
        >{`${displayName}${!isLastIdx && comma ? "," : ""}`}</Box>
      )}
    </>
  );
}
