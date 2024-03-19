import { hue } from "@/constants/colors";
import { useModalActions, useSelectedColor } from "@/store/modalStore";
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
import React, { useEffect, useState } from "react";
import { GiToken } from "react-icons/gi";

import { FaArrowsRotate } from "react-icons/fa6";
import { BiSolidColor } from "react-icons/bi";
import { calculateTimeDiffer, isDark } from "@/utils";
import {
  createColorDocument,
  getColorDocument,
  handlePurchaseColorDocument,
  updateUsersColor,
  updateUsersToken,
} from "@/utils/firebaseApi";
import { useAuthActions, useIsLogin, useUser } from "@/store/authStore";
import useTimer from "@/hooks/useTimer";
import { getUserDocument } from "@/utils/auth";
import { ColorDocument, UserDocument } from "@/types/document";

/**
 * children으로 2개의 jsx 요소를 받으며 첫번째 요소가 앞면
 *
 * 두번째 요소가 뒷면에 배치된다.
 *
 */

interface FlipCardProps {
  color: ArrangedColor | ColorDocument;
  price?: number;
  lastPurchaseAt?: number;
}

export default function FlipCard(props: FlipCardProps) {
  const { color } = props;
  const user = useUser();
  const isLogin = useIsLogin();
  const { setUser } = useAuthActions();
  const { setModalType } = useModalActions();

  const [price, setPrice] = useState(1);
  const [isAvailable, setIsAvailable] = useState(false);
  const [isFliped, setIsFliped] = useState(false);

  const [isAlert, setIsAlert] = useState(true);

  const { second, setBaseUnixTime } = useTimer(null, 10);

  const { hex, displayName, numbering, lightness, hue, saturation } =
    color as ArrangedColor;

  const childrenStyle = {
    width: "300px",
    height: "480px",
    borderRadius: "1rem",
    padding: "12px 16px",
  };

  async function updateColorState(numbering: string) {
    const colorData = await getColorDocument(numbering);
    console.log("동작");
    if (!colorData) {
      setIsAvailable(true);
      return;
    } else {
      setPrice(colorData.price);
      const timeDiffer = calculateTimeDiffer(colorData.lastPurchaseAt);
      if (timeDiffer > 600) {
        setIsAvailable(true);
      } else {
        setBaseUnixTime(colorData.lastPurchaseAt);
      }
    }
  }

  async function handleBuy() {
    if (!user) {
      setModalType("sign-in");
      return;
    }

    const freshUserDocument = (await getUserDocument(user.uid)) as UserDocument;
    setUser(freshUserDocument);
    let existColorDocument = await getColorDocument(numbering);

    if (!existColorDocument) {
      existColorDocument = await createColorDocument(color, user.uid);
    } else {
      const timeDiffer = calculateTimeDiffer(existColorDocument.lastPurchaseAt);

      const checkTimeDiffer = timeDiffer > 600;
      const checkTokens = freshUserDocument.tokens >= existColorDocument.price;

      if (!checkTimeDiffer) {
        confirm("can't buy this color now");
        return;
      }
      if (!checkTokens) {
        confirm("not enough tokens");
        return;
      }
    }
    await updateUsersToken(-existColorDocument.price, user.uid);
    //console.log("토큰업데이트 완료");
    await updateUsersColor(existColorDocument, user.uid);
    // console.log("유저 업데이트 완료");
    await handlePurchaseColorDocument(user.uid, numbering);
    // console.log("구매동장시 컬러 문서 수정완료");
    await updateColorState(numbering);
    //  console.log("컬러스테이트 업데이트 완료");
    setIsAvailable(false);
  }

  useEffect(() => {
    console.log("플립 온");
    updateColorState(numbering);
  }, []);

  useEffect(() => {
    if (second === 0) {
      setIsAvailable(true);
    }
  }, [second]);
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
      boxShadow={"md"}
      _hover={{
        transform: "scale(1.1)".concat(
          !isFliped
            ? " perspective(800px) rotateY(0deg)"
            : " perspective(800px) rotateY(180deg)"
        ),
      }}
    >
      {isAlert && <></>}
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
            cursor="pointer"
            onClick={() => setIsFliped((prev) => !prev)}
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
            borderColor={`#${hex}`}
            p="8px"
            color={`#${hex}`}
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
            <GiToken /> {price} token
          </Flex>
        </Flex>
        <Button
          w="100%"
          mt="auto"
          bg={`#${hex}`}
          color={isDark(lightness) ? "white" : "gray"}
          onClick={() => handleBuy()}
          isDisabled={!isAvailable}
        >
          {isAvailable ? "buy with token" : `available in ${second}s`}
        </Button>
      </Flex>
      <Box
        className="flip-back"
        css={childrenStyle}
        transform="rotateY(180deg)"
        style={{ backfaceVisibility: "hidden" }}
        gridArea="1/1/1/1"
        cursor={"pointer"}
        onClick={() => setIsFliped((prev) => !prev)}
      >
        <Center fontSize={"5xl"} color={`#${hex}`}>
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
