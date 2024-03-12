import { Box } from "@chakra-ui/react";
import React from "react";

export default function ColorCube() {
  const width = "200px";
  const height = "200px";
  const colors = ["red", "blue", "green", "yellow", "purple", "black"];

  function boxItem(color: string, idx: number) {
    const z = "100px";

    function generateTransform() {
      switch (idx) {
        case 0:
          return `translateZ(${z})`;
        case 1:
          return `rotateY(180deg) translateZ(${z})`;
        case 2:
          return `rotateY(-90deg) translateZ(${z})`;
        case 3:
          return `rotateY(90deg) translateZ(${z})`;
        case 4:
          return `rotateX(-90deg) translateZ(${z})`;
        case 5:
          return `rotateX(90deg) translateZ(${z})`;
      }
    }

    return (
      <Box
        w={"100%"}
        h="100%"
        position={"absolute"}
        opacity={1}
        bgColor={color}
        transform={generateTransform()}
      ></Box>
    );
  }

  return (
    <Box
      position={"relative"}
      w={width}
      h={height}
      style={{ transformStyle: "preserve-3d" }}
      animation="10s linear infinite rotate"
    >
      {colors.map((color, idx) => boxItem(color, idx))}
    </Box>
  );
}
