import FlipCard from "@/components/FlipCard";
import { useSelectedColor } from "@/store/modalStore";
import { ArrangedColor } from "@/types/color";
import { motion, Variants } from "framer-motion";
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

const flipCardAnim: Variants = {
  hidden: {
    transform: "scale(0.1) perspective(800px) rotateY(180deg)",
  },
  show: {
    transform: "scale(1) perspective(800px) rotateY(0deg)",
    transition: { duration: 0.3, type: "tween" },
  },
};

export default function ColorDetailModal() {
  const selectedColor = useSelectedColor();

  return (
    <>
      <ModalContent py={4} bg="" boxShadow={"none"}>
        <Center>
          {selectedColor && (
            <motion.div
              initial="hidden"
              animate="show"
              variants={flipCardAnim}
              style={{ transformStyle: "preserve-3d" }}
            >
              <FlipCard color={selectedColor} />
            </motion.div>
          )}
        </Center>
      </ModalContent>
    </>
  );
}
