import { useAuthActions } from "@/store/authStore";
import { useModalActions } from "@/store/modalStore";
import {
  getUserDocument,
  googleLogin,
  registerUserDocument,
} from "@/utils/auth";
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
  const { setIsLogin, setUser } = useAuthActions();
  const { setModalType } = useModalActions();

  async function handleLogin() {
    const res = await googleLogin();
    let userDoc = null;

    if (!res.status) return;
    if (!res.userData) return;
    // ^ db에 유저 정보 조회
    const docRes = await getUserDocument(res.userData.uid);

    userDoc = docRes;
    // ^ 없으면 document 생성
    if (!docRes) {
      userDoc = await registerUserDocument(res.userData);
    }

    setIsLogin(true);
    setUser(userDoc);
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
