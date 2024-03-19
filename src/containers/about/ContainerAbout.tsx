import ColorCard from "@/components/ColorCard";
import FlipCard from "@/components/FlipCard";
import Contents from "@/components/layout/Contents";
import { pickColors } from "@/utils";
import {
  Box,
  Center,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Variants, motion, stagger, useAnimationControls } from "framer-motion";
import React, { useEffect } from "react";
import { BiSolidColor } from "react-icons/bi";
import { MdLightMode } from "react-icons/md";
import { IoIosColorFill } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function ContainerAbout() {
  const color = pickColors(["16-4728"]);
  const colors = ["#476A30", "#D33479"];
  const detailURL =
    "https://pantone.kr/article/%EC%9E%90%EC%A3%BC-%EB%AC%BB%EB%8A%94-%EC%A7%88%EB%AC%B8/101/1422/";
  return (
    <Contents>
      <Flex as="section">
        <SimpleGrid w="100%" h="100%" columns={2} spacing={12}>
          <Box
            p={8}
            boxShadow="sm"
            border="1px solid"
            borderColor={"base.300"}
            borderRadius="8px"
          >
            <Heading>Introduce</Heading>
            <Text mt={4}>
              This is a purchase simulator where you can buy colors standardized
              by Pantone as if they were products. Currently, it does not
              include an actual payment system, and you can use the service by
              utilizing tokens, a type of virtual currency provided internally.
              Even if you don&apos;t use the purchase service please look
              through the color lists and discover colors you like!
            </Text>
          </Box>
          <Box
            p={8}
            boxShadow="sm"
            border="1px solid"
            borderColor={"base.300"}
            borderRadius="8px"
          >
            <Heading>Token</Heading>
            <Text mt={4}>
              Tokens are the currency used to purchase colors on this service.
              Tokens can be obtained in two ways: tokens that accumulate every
              30 minutes (hereafter 30-minute tokens) and tokens that are
              generated every 24 hours (hereafter daily tokens). One thing to
              note is that while 30-minute tokens will accumulate even if you
              don&apos;t claim them, for daily tokens, only 1 token will be
              generated 24 hours after the last claim, and no additional tokens
              will be generated if you don&apos;t claim it.
            </Text>
          </Box>
          <Box
            p={8}
            boxShadow="sm"
            border="1px solid"
            borderColor={"base.300"}
            borderRadius="8px"
          >
            <Heading>Purchase system</Heading>
            <Text mt={4}>
              Colors can be purchased using tokens. The base price of a color is
              1 token, but the price increases by 1 token each time someone
              purchases it. Additionally, once a color is purchased, it cannot
              be purchased again for 10 minutes after which it becomes available
              for purchase again. Try to quickly claim the colors you want at a
              low price!
            </Text>
          </Box>
          <Box
            p={8}
            boxShadow="sm"
            border="1px solid"
            borderColor={"base.300"}
            borderRadius="8px"
          >
            <Heading>Color Usage</Heading>
            <Text mt={4}>
              The ways you can utilize the colors you&apos;ve purchased are as
              follows. You can set them as your profile color, change the
              transition color between page changes, and also use them in the
              &quot;Playground&quot; where you can experience various motions.
              (The Playground feature will be added soon!)
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>

      <Box as="section"></Box>
      <Flex
        as="section"
        mt={12}
        gap={24}
        p={20}
        border="1px solid"
        borderColor={"base.300"}
        borderRadius={"8px"}
        boxShadow="sm"
      >
        <Flex w="20%">
          <Center flexDirection={"column"}>
            <ColorCard type="card" color={color[0]} />
            <Text
              color={"brand.500"}
              mt={1}
              textAlign={"center"}
              fontSize={"xl"}
              fontWeight={600}
            >
              Example
            </Text>
          </Center>
        </Flex>
        <Box flex={1}>
          <Heading>Guide of Numbering</Heading>
          <Text fontSize={"lg"} mt={4}>
            The numbering standardized by Pantone basically takes the form of{" "}
            <Text display={"inline"} fontWeight={600} fontSize="xl">
              16-4728
            </Text>
          </Text>
          <Box>
            <Link
              display={"flex"}
              target={"_blank"}
              href={detailURL}
              color="brand.500"
              alignItems={"center"}
              gap={1}
            >
              If you would like more detailed information
              <Box fontSize={"xs"}>
                <FaExternalLinkAlt />
              </Box>
            </Link>
          </Box>
          <Flex mt={8} gap={12} alignItems="center">
            <Flex
              fontSize={"3xl"}
              bg="brand.400"
              p={1.5}
              borderRadius="4px"
              color={"white"}
            >
              <MdLightMode />
            </Flex>
            <Box>
              <Box fontWeight={600} fontSize="xl">
                Lightness
              </Box>
              <Box mt={2}>
                there are levels from &apos;11&apos; to &apos;19&apos;, with
                lower numbers being brighter and higher numbers being darker.{" "}
                <br /> In the example, 16 is lightness.
              </Box>
            </Box>
          </Flex>
          <Flex mt={12} gap={12} alignItems="center">
            <Center
              fontSize={"3xl"}
              bg={colors[0]}
              p={1.5}
              borderRadius="4px"
              color={"white"}
            >
              <BiSolidColor />
            </Center>
            <Box>
              <Box fontWeight={600} fontSize="xl">
                Hue
              </Box>
              <Box mt={2}>
                there are levels from &apos;01&apos; to &apos;64&apos;,
                including the natural color (center point) &apos;00&apos;.{" "}
                <br />
                In the example, 47 is hue.
              </Box>
            </Box>
          </Flex>
          <Flex mt={12} gap={12} alignItems="center">
            <Center
              fontSize={"3xl"}
              bg={colors[1]}
              p={1.5}
              borderRadius="4px"
              color={"white"}
            >
              <IoIosColorFill />
            </Center>
            <Box>
              {" "}
              <Box fontWeight={600} fontSize="xl">
                Saturation
              </Box>
              <Box mt={2}>
                there are levels from &apos;01&apos; to &apos;64&apos;,
                including the natural color &apos;00&apos;. Lower numbers
                indicate lower saturation colors, while higher numbers mean
                higher saturation. In the example, 28 is saturation.
              </Box>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Contents>
  );
}
