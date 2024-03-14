import React, { useEffect, useState } from "react";
import { useAuthActions, useUser } from "@/store/authStore";
import { UserDocument } from "@/types";
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { GiToken } from "react-icons/gi";
import { calculateTimeDiffer } from "@/utils";
import {
  updateUsersLastAutoEarn,
  updateUsersLastClickEarn,
  updateUsersToken,
} from "@/utils/firebaseApi";
import { getUserDocument } from "@/utils/auth";

interface UserTokenProps {
  user: UserDocument;
}

export default function UserToken(props: UserTokenProps) {
  const { user } = props;
  const { tokens, lastAutoEarn, lastClickEarn, createdAt, uid } = user;
  const { setUser } = useAuthActions();

  const [myTokens, setMyTokens] = useState(0);
  const [autoTokens, setAutoTokens] = useState(0);
  const [dailyTokens, setDailyTokens] = useState(0);

  function autoTokenQty() {
    let timeDiffer = calculateTimeDiffer(createdAt);

    if (lastAutoEarn) {
      timeDiffer = calculateTimeDiffer(lastAutoEarn);
    }

    const availableToken = Math.floor(timeDiffer / 1800);
    return availableToken;
  }

  function dailyTokenQty() {
    let timeDiffer = calculateTimeDiffer(createdAt);

    if (lastClickEarn) {
      timeDiffer = calculateTimeDiffer(lastClickEarn);
    }

    const availableToken = Math.floor(timeDiffer / 86400);
    console.log(availableToken);
    return availableToken;
  }

  async function getAutoTokens() {
    const tokenQty = autoTokenQty();
    if (tokenQty === 0) return;
    await updateUsersToken(tokenQty, uid);
    await updateUsersLastAutoEarn(uid);
    const updatedUserDoc = await getUserDocument(uid);
    setUser(updatedUserDoc);
    setAutoTokens(0);
  }

  async function getDailyToken() {
    const tokenQty = dailyTokenQty();
    if (tokenQty === 0) return;
    await updateUsersToken(tokenQty, uid);
    await updateUsersLastClickEarn(uid);
    const updatedUserDoc = await getUserDocument(uid);
    setUser(updatedUserDoc);
    setDailyTokens(0);
  }

  useEffect(() => {
    setMyTokens(user.tokens);
    setAutoTokens(autoTokenQty());
    setDailyTokens(dailyTokenQty());
  }, [user]);

  return (
    <Center w="100%" h="max-content">
      <Flex
        py={12}
        borderRadius="8px"
        w="50%"
        h={"100%"}
        border={"1px solid "}
        borderColor={"base.300"}
        gap={4}
      >
        <Box w={"50%"}>
          <Center color={"brand.500"} h={"100%"} flexDirection="column">
            <Text fontSize={"4xl"}>{myTokens}</Text>
            <Text>My tokens</Text>
          </Center>
        </Box>
        <Divider orientation="vertical" h={"100px"} />
        <Center w={"50%"}>
          <Flex flexDirection={"column"} w="80%" gap={4}>
            <Button
              gap={2}
              colorScheme={"brand"}
              onClick={getAutoTokens}
              isDisabled={autoTokens === 0}
            >
              {autoTokens !== 0 ? (
                <>
                  {" "}
                  <GiToken />
                  Get {autoTokens} tokens
                </>
              ) : (
                "available in 30min"
              )}
            </Button>
            <Button
              gap={2}
              colorScheme={"brand"}
              onClick={getDailyToken}
              isDisabled={dailyTokens === 0}
            >
              {" "}
              {dailyTokens !== 0 ? (
                <>
                  {" "}
                  <GiToken />
                  Get {autoTokens} tokens
                </>
              ) : (
                "available in 30min"
              )}
            </Button>
          </Flex>
        </Center>
      </Flex>
    </Center>
  );
}
