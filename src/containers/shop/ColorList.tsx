import { Box, SimpleGrid } from "@chakra-ui/react";
import ColorCard, { ColorCardType } from "@/components/ColorCard";
import { arrangedColorArray, colorsArr } from "@/constants/colors";
import { motion, useAnimationControls, Variants } from "framer-motion";
import { useEffect } from "react";

interface ColorListProps {
  type: ColorCardType;
  filterLightness: string | null;
  filterHue: string | null;
}

const listVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      //delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
};

function ColorList(props: ColorListProps) {
  const { type, filterHue, filterLightness } = props;

  const contorols = useAnimationControls();

  useEffect(() => {
    contorols.start("show");
  }, [type, filterHue, filterLightness]);

  function RenderFilteredList() {
    let result = arrangedColorArray;

    if (filterHue) {
      result = result.filter((color) => {
        let filterResult = false;
        if (filterHue) {
          filterResult = color.hue === filterHue;
        }
        return filterResult;
      });
    }

    if (filterLightness) {
      result = result.filter((color) => {
        let filterResult = false;
        if (filterLightness) {
          filterResult = color.lightness === filterLightness;
        }
        return filterResult;
      });
    }

    const cards = result.map((color) => {
      const { displayName, numbering, hex } = color;
      return (
        <ColorCard
          name={displayName}
          numbering={numbering}
          hex={hex}
          type={type}
          key={numbering}
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
        columns={type === "card" ? 5 : 6}
        spacingY={type === "text" ? 0 : 8}
        justifyContent={"center"}
        placeItems={type === "text" ? "start" : "center"}
        gap={type === "text" ? 2 : "initial"}
        //애니메이션
        variants={listVariants}
        initial="hidden"
        animate={contorols}
      >
        {/* {colorsArr.map((color) => (
					<ColorCard
						name={color[1].name}
						numbering={color[0]}
						hex={color[1].hex}
					/>
				))} */}
        <RenderFilteredList />
      </SimpleGrid>
    </Box>
  );
}

export default ColorList;
