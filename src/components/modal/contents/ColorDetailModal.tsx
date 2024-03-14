import FlipCard from "@/components/FlipCard";
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
      <ModalContent py={4} bg="" boxShadow={"none"}>
        <Center minH={"600px"}>
          <FlipCard></FlipCard>
        </Center>
      </ModalContent>
    </>
  );
}
