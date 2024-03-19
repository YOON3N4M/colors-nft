import { useAuthActions, useUser } from "@/store/authStore";
import { UserDocument } from "@/types/document";
import { getUserDocument } from "@/utils/auth";
import { updateUserName, updateUserProfileColor } from "@/utils/firebaseApi";
import {
  Box,
  Button,
  Center,
  Flex,
  FormLabel,
  Input,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function UserProfile() {
  const user = useUser();
  const {
    displayName,
    uid,
    profileColor = "#c2c2c2",
    ownColors,
  } = user as UserDocument;
  const { setUser } = useAuthActions();
  const [userName, setUserName] = useState("");
  const [disable, setDisable] = useState(true);
  const [color, setColor] = useState(profileColor);
  const [isPalette, setIsPalette] = useState(false);

  const toast = useToast();

  function handleUserNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserName(e.target.value);
  }

  async function handleProfileChange(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (userName !== displayName) {
      await updateUserName(userName, uid);
    }
    if (color !== profileColor) {
      await updateUserProfileColor(color, uid);
    }

    const refreshUser = await getUserDocument(uid);
    setUser(refreshUser);
    setDisable(true);

    toast({
      position: "bottom-left",
      render: () => (
        <Box color="white" p={3} bg="brand.500" borderRadius={"8px"}>
          Profile Changed.
        </Box>
      ),
    });
  }

  useEffect(() => {
    setUserName(displayName);
    setColor(profileColor);
  }, []);

  useEffect(() => {
    if (displayName !== userName) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [userName]);

  useEffect(() => {
    if (profileColor !== color) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [color]);

  return (
    <Center w="100%" mt={12}>
      <Center
        w={"50%"}
        borderRadius={"8px"}
        border="1px solid"
        borderColor={"base.300"}
      >
        <Center p={8} w="100%">
          <form
            onSubmit={handleProfileChange}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Box position={"relative"} cursor="pointer">
              <Box
                w={20}
                h={20}
                bg={color}
                borderRadius={"50%"}
                onClick={() => setIsPalette((prev) => !prev)}
              ></Box>
              {isPalette && (
                <Box top={0} left={"110%"} position={"absolute"}>
                  <Flex
                    bg={"base.50"}
                    borderRadius="8px"
                    boxShadow={"md"}
                    flexWrap="wrap"
                    w="250px"
                    maxW={"250px"}
                    p={2}
                    gap={2}
                  >
                    {ownColors.map((color) => (
                      <Box
                        bg={`#${color.hex}`}
                        w="25px"
                        h={"25px"}
                        borderRadius="50%"
                        onClick={() => setColor(`#${color.hex}`)}
                      />
                    ))}
                  </Flex>
                </Box>
              )}
            </Box>
            <Box w={"140%"}>
              <FormLabel mt={4}>User Name</FormLabel>

              <Input
                required
                onChange={handleUserNameChange}
                value={userName}
              />
              <Button
                isDisabled={disable}
                mt={4}
                w={"100%"}
                colorScheme="brand"
                type="submit"
              >
                Save
              </Button>
            </Box>
          </form>
        </Center>
      </Center>
    </Center>
  );
}
