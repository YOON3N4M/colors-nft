import { Box, SimpleGrid } from "@chakra-ui/react";
import ColorCard, { ColorCardType } from "@/components/ColorCard";
import { colorsArr } from "@/constants/colors";
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
    let result = colorsArr;

    if (filterHue) {
      result = result.filter((color) => {
        const numbering = color[0];
        const hue = numbering.substring(3, 5);
        let result = false;
        if (filterHue) {
          result = hue === filterHue;
        }
        return result;
      });
    }

    if (filterLightness) {
      result = result.filter((color) => {
        const numbering = color[0];
        const lightness = numbering.substring(0, 2);

        let result = false;
        if (filterLightness) {
          result = lightness === filterLightness;
        }
        return result;
      });
    }

    const cards = result.map((color) => {
      const numbering = color[0];

      const name = color[1].name;
      const split = name.split("-");
      const capitalizedName = split
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      const hex = color[1].hex;
      return (
        <ColorCard
          name={capitalizedName}
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
