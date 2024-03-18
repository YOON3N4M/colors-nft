import FlipCard from "@/components/FlipCard";
import { ArrangedColor } from "@/types/color";
import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface DisplayFlipCardProps {
  colors: ArrangedColor[];
}

export default function DisplayFlipCard(props: DisplayFlipCardProps) {
  const { colors } = props;
  const [hoverd, setHoverd] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.3, type: "tween" }}
    >
      <Box position={"relative"} display="flex" w="min-content">
        {colors.map((color, idx) => (
          <Box
            onMouseEnter={() => setHoverd(idx)}
            onMouseLeave={() => setHoverd(0)}
            position={idx > 0 ? "absolute" : "initial"}
            left={idx > 0 ? `${idx === 1 ? "20" : "-20"}` : 0}
            zIndex={hoverd === idx ? 100 : `${90 - idx}`}
            transform={`rotate(${idx === 1 ? "20" : "-15"}deg) ${
              idx > 0 && `scale(0.85)`
            }`}
            transition="transform 0.2s"
            _hover={{ transform: "rotate(0)" }}
          >
            <FlipCard color={color} />
          </Box>
        ))}
      </Box>
    </motion.div>
  );
}
