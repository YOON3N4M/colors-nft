import { hue } from "@/constants/colors";
import { useSelectedColor } from "@/store/modalStore";
import { ArrangedColor } from "@/types/color";
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { GiToken } from "react-icons/gi";

import { FaArrowsRotate } from "react-icons/fa6";
import { BiSolidColor } from "react-icons/bi";

/**
 * children으로 2개의 jsx 요소를 받으며 첫번째 요소가 앞면
 *
 * 두번째 요소가 뒷면에 배치된다.
 *
 */
export default function FlipCard() {
  const [isFliped, setIsFliped] = useState(false);
  const selectedColor = useSelectedColor();
  const { hex, displayName, numbering, lightness, hue, saturation } =
    selectedColor as ArrangedColor;

  const childrenStyle = {
    width: "300px",
    height: "480px",
    borderRadius: "1rem",
    padding: "12px 16px",
  };
  return (
    <Box
      className="flip-card"
      display={"inline-grid"}
      borderRadius={"8px"}
      border="1px solid"
      borderColor={"base.100"}
      bg="white"
      transform={
        !isFliped
          ? "perspective(800px) rotateY(0deg)"
          : "perspective(800px) rotateY(180deg)"
      }
      transition="transform 0.4s"
      style={{ transformStyle: "preserve-3d" }}
      onClick={() => setIsFliped((prev) => !prev)}
      cursor="pointer"
      boxShadow={"md"}
      _hover={{
        transform: "scale(1.1)".concat(
          !isFliped
            ? " perspective(800px) rotateY(0deg)"
            : " perspective(800px) rotateY(180deg)"
        ),
      }}
    >
      <Flex
        flexDirection={"column"}
        className="flip-front"
        css={childrenStyle}
        style={{ backfaceVisibility: "hidden" }}
        gridArea="1/1/1/1"
      >
        <Flex
          borderRadius={"4px"}
          bg={`#${hex}`}
          w="100%"
          h={"55%"}
          p={"8px 12px"}
        >
          <Flex
            justifyContent={"end"}
            mt={"auto"}
            ml={"auto"}
            borderRadius="50%"
            bg={"black"}
            p={2}
            color="white"
            opacity={0.7}
          >
            <FaArrowsRotate />
          </Flex>
        </Flex>
        <Heading mt={4} fontSize={"2xl"}>
          {displayName}
        </Heading>
        <Divider my={6} borderColor="base.300" />
        <Flex>
          <Flex
            position={"relative"}
            alignItems={"center"}
            borderRadius={"8px"}
            border={"2px solid"}
            borderColor="brand.500"
            p="8px"
            color={"brand.600"}
            fontWeight="600"
            gap={2}
          >
            <Box
              position={"absolute"}
              top={-3}
              bg="white"
              px={2}
              fontWeight="500"
              fontSize={"sm"}
            >
              Price
            </Box>
            <GiToken /> 1 token
          </Flex>
        </Flex>
        <Button colorScheme={"brand"} w="100%" mt="auto">
          buy with token
        </Button>
      </Flex>
      <Box
        className="flip-back"
        css={childrenStyle}
        transform="rotateY(180deg)"
        style={{ backfaceVisibility: "hidden" }}
        gridArea="1/1/1/1"
      >
        <Center fontSize={"5xl"} color="brand.500">
          <BiSolidColor />
        </Center>
        <Box className="top">
          <Center mt={2}>
            <Heading fontSize={"xl"} fontWeight="600">
              Attributes
            </Heading>
          </Center>
          <Divider borderColor={"base.300"} mt={2} />
          <SimpleGrid columns={2} mt={4} spacing={2}>
            <Center
              bg={"brand.50"}
              border="1.5px solid"
              borderColor={"brand.500"}
              py={2}
              borderRadius="4px"
              flexDirection={"column"}
            >
              <Box fontSize={"sm"} color="brand.500">
                Lightness
              </Box>
              <Box>{lightness}</Box>
            </Center>

            <Center
              bg={"brand.50"}
              border="1.5px solid"
              borderColor={"brand.500"}
              py={2}
              borderRadius="4px"
              flexDirection={"column"}
            >
              <Box fontSize={"sm"} color="brand.500">
                Hue
              </Box>
              <Box>{hue}</Box>
            </Center>

            <Center
              bg={"brand.50"}
              border="1.5px solid"
              borderColor={"brand.500"}
              py={2}
              borderRadius="4px"
              flexDirection={"column"}
            >
              <Box fontSize={"sm"} color="brand.500">
                Saturation
              </Box>
              <Box>{saturation}</Box>
            </Center>
          </SimpleGrid>
        </Box>
        <Box className="bottom" mt={8}>
          <Center mt={4}>
            <Heading fontSize={"xl"} fontWeight="600">
              Details
            </Heading>
          </Center>
          <Divider borderColor={"base.300"} mt={2} />
          <Flex direction={"column"} gap={2} mt={2} fontSize="sm">
            <Flex justifyContent={"space-between"}>
              <Box>Name</Box>
              <Box>{displayName}</Box>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Box>Numbering</Box>
              <Box>{numbering}</Box>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Box>Hex</Box>
              <Box>#{hex}</Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
