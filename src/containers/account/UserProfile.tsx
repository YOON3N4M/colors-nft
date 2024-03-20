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
  Text,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
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
        w={{ mo: "100%", pc: "50%" }}
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
                <Box
                  top={{ pc: 0, mo: "80%" }}
                  left={{ mo: "0%", pc: "110%" }}
                  position={"absolute"}
                  zIndex="100"
                >
                  <Flex
                    bg={"base.50"}
                    borderRadius="8px"
                    boxShadow={"md"}
                    flexWrap="wrap"
                    w="150px"
                    maxW={"150px"}
                    p={2}
                    gap={2}
                  >
                    {ownColors.length > 0 ? (
                      <>
                        {ownColors.map((color, idx) => (
                          <Box
                            key={`${color.numbering}-idx `}
                            bg={`#${color.hex}`}
                            w="25px"
                            h={"25px"}
                            borderRadius="50%"
                            onClick={() => {
                              setColor(`#${color.hex}`);
                              setIsPalette(false);
                            }}
                          />
                        ))}
                      </>
                    ) : (
                      <Box p={2}>
                        <Text color={"base.400"}>
                          you have no color. <br />
                          purchase your favorite
                        </Text>
                        <Box
                          color={"brand.300"}
                          _hover={{ color: "brand.500" }}
                        >
                          <Link href={"/shop"}>to Shop</Link>
                        </Box>
                      </Box>
                    )}
                  </Flex>
                </Box>
              )}
            </Box>
            <Box w={{ pc: "140%", mo: "100%" }}>
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
