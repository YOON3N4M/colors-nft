import { Box } from "@chakra-ui/react";
import { Variants, motion, stagger, useAnimationControls } from "framer-motion";
import React, { useEffect } from "react";

const parVar: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
    },
  },
};

const childVar: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

export default function ContainerAbout() {
  const controls = useAnimationControls();

  return (
    <>
      {/* <motion.div variants={parVar} initial="hidden" animate="show">
        <motion.div
          variants={childVar}
          animate="show"
          style={{ width: "200px", height: "100px", backgroundColor: "black" }}
        ></motion.div>
        <motion.div
          variants={childVar}
          animate="show"
          style={{ width: "200px", height: "100px", backgroundColor: "black" }}
        ></motion.div>
        <motion.div
          variants={childVar}
          style={{ width: "200px", height: "100px", backgroundColor: "black" }}
        ></motion.div>
      </motion.div> */}
      <Box
        variants={parVar}
        initial="hidden"
        animate="show"
        as={motion.div}
        display="flex"
        flexDirection={"column"}
        gap="15px"
      >
        <Box
          key={1}
          as={motion.div}
          variants={childVar}
          w={"200px"}
          h="100px"
          bg={"blue"}
        ></Box>
        <Box
          key={2}
          as={motion.div}
          variants={childVar}
          w={"200px"}
          h="100px"
          bg={"blue"}
        ></Box>
        <Box
          key={3}
          as={motion.div}
          variants={childVar}
          w={"200px"}
          h="100px"
          bg={"blue"}
        ></Box>
      </Box>
    </>
  );
}
