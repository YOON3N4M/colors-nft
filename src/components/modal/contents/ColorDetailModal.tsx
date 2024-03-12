import { useSelectedColor } from "@/store/modalStore";
import { ArrangedColor } from "@/types/color";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
} from "@chakra-ui/react";

export default function ColorDetailModal() {
  const selectedColor = useSelectedColor();
  const { hue, displayName, hex, lightness, numbering } =
    selectedColor as ArrangedColor;

  function isDark() {
    if (lightness === "11" || lightness === "12") {
      return false;
    } else {
      return true;
    }
  }
  return (
    <>
      <ModalContent>
        <Center w={"100%"} h="20vw" bg={`#${selectedColor?.hex}`}>
          <Center
            w={"100%"}
            h="100%"
            opacity={0}
            transition={"opacity 0.5s"}
            _hover={{ opacity: 1 }}
          >
            <Heading color={isDark() ? "white" : "black"} opacity="0.5">
              #{hex}
            </Heading>
          </Center>
        </Center>

        <ModalBody flex={1}>
          <Flex alignItems={"end"}>
            <Heading>{selectedColor?.displayName}</Heading>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button
            bg={`#${selectedColor?.hex}`}
            color={isDark() ? "white" : "gray"}
            fontSize={"2xl"}
          >
            buy
          </Button>
        </ModalFooter>
      </ModalContent>
    </>
  );
}
