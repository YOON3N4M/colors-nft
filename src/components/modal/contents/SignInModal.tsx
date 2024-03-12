import { useAuthActions } from "@/store/authStore";
import { useModalActions } from "@/store/modalStore";
import { googleLogin } from "@/utils/auth";
import {
  Button,
  Center,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/react";

export default function SignInModal() {
  const { setIsLogin } = useAuthActions();
  const { setModalType } = useModalActions();

  async function handleLogin() {
    const res = await googleLogin();

    if (!res.status) {
      return;
    }

    setIsLogin(true);
    setModalType(null);
  }
  return (
    <>
      <ModalContent>
        <ModalHeader display={"flex"} alignItems={"center"}></ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Center as={Button} onClick={handleLogin}>
            Sign in With Google
          </Center>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </>
  );
}
