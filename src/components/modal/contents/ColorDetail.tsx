import { useSelectedColor } from "@/store/modalStore";
import {
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/react";

export default function ModalColorDetail() {
  const selectedColor = useSelectedColor();
  return (
    <>
      <ModalContent>
        <ModalHeader display={"flex"} alignItems={"center"}></ModalHeader>
        <ModalCloseButton />
        <ModalBody>{selectedColor?.displayName}</ModalBody>
        <ModalFooter>
          <Button bgColor={"blue.800"} color={"white"} mr={"10px"}>
            버튼
          </Button>
          <Button>닫기</Button>
        </ModalFooter>
      </ModalContent>
    </>
  );
}
