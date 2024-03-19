import { useAuthActions, useUser } from "@/store/authStore";
import { UserDocument } from "@/types/document";
import { getUserDocument } from "@/utils/auth";
import { updateUserName } from "@/utils/firebaseApi";
import {
  Box,
  Button,
  Center,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function UserProfile() {
  const user = useUser();
  const { displayName, uid } = user as UserDocument;
  const { setUser } = useAuthActions();
  const [userName, setUserName] = useState("");
  const [disable, setDisable] = useState(true);
  const toast = useToast();

  function handleUserNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserName(e.target.value);
  }

  async function handleProfileChange(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await updateUserName(userName, uid);
    const refreshUser = await getUserDocument(uid);
    setUser(refreshUser);
    setDisable(true);

    toast({
      position: "bottom-left",
      render: () => (
        <Box color="white" p={3} bg="brand.500" borderRadius={"8px"}>
          User Name Changed.
        </Box>
      ),
    });
  }

  useEffect(() => {
    setUserName(displayName);
  }, []);

  useEffect(() => {
    if (displayName !== userName) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [userName]);

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
            <Box w={20} h={20} bg="brand.400" borderRadius={"50%"}></Box>
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
