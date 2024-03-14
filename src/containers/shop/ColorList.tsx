import { Box, SimpleGrid } from "@chakra-ui/react";
import ColorCard, { ColorCardType } from "@/components/ColorCard";
import { arrangedColorArray } from "@/constants/colors";
import { motion, useAnimationControls, Variants } from "framer-motion";
import { useEffect } from "react";
import { filterColor } from "@/utils";

interface ColorListProps {
  type: ColorCardType;
  filterLightness: string | null;
  filterHue: string | null;
  filterSaturation: string | null;
}

const listVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      //delayChildren: 0.5,
      // staggerChildren: 0.1,
    },
  },
};

function ColorList(props: ColorListProps) {
  const { type, filterHue, filterLightness, filterSaturation } = props;

  const contorols = useAnimationControls();

  useEffect(() => {
    contorols.start("show");
  }, [type, filterHue, filterLightness, filterSaturation]);

  function RenderFilteredList() {
    let result = arrangedColorArray;

    if (filterHue) {
      result = filterColor(result, "hue", filterHue);
    }

    if (filterLightness) {
      result = filterColor(result, "lightness", filterLightness);
    }

    if (filterSaturation) {
      result = filterColor(result, "saturation", filterSaturation);
    }

    const cards = result.map((color, idx) => {
      const { displayName, numbering, hex, hue } = color;
      return (
        <ColorCard
          color={color}
          type={type}
          key={numbering}
          isLastIdx={idx === result.length - 1}
        />
      );
    });
    return <>{cards}</>;
  }
  return (
    <Box mt={4}>
      <SimpleGrid
        as={motion.div}
        // layout
        display={type === "text" ? "flex" : "grid"}
        flexWrap={type === "text" ? "wrap" : "initial"}
        columns={type === "card" ? 4 : 4}
        spacingX={type === "text" ? 0 : 6}
        spacingY={type === "text" ? 0 : 8}
        justifyContent={"center"}
        placeItems={type === "text" ? "start" : "center"}
        gap={type === "text" ? 2 : "initial"}
        //애니메이션
        variants={listVariants}
        initial="hidden"
        animate={contorols}
      >
        <RenderFilteredList />
      </SimpleGrid>
    </Box>
  );
}

export default ColorList;
