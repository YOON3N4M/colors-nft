import { ColorCardType } from "@/components/ColorCard";
import { hue, lightness, saturation } from "@/constants/colors";
import { Box, Center, filter, Flex, Text } from "@chakra-ui/react";
import { Variants, motion } from "framer-motion";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";
import Filters from "./Filters";

interface FilterColorProps {
  type: ColorCardType;
  filterLightness: string | null;
  filterHue: string | null;
  filterSaturation: string | null;
  setType: React.Dispatch<React.SetStateAction<ColorCardType>>;
  setFilterLightness: React.Dispatch<React.SetStateAction<string | null>>;
  setFilterHue: React.Dispatch<React.SetStateAction<string | null>>;
  setFilterSaturation: React.Dispatch<React.SetStateAction<string | null>>;
}

const filterTitleVar: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.05,
    },
  },
};

function FilterColor(props: FilterColorProps) {
  const {
    type,
    filterHue,
    filterLightness,
    filterSaturation,
    setType,
    setFilterLightness,
    setFilterHue,
    setFilterSaturation,
  } = props;

  const colorTransition = {
    transition: "color",
    transitionDuration: "200ms",
  };

  function handleLightnessFilter(level: string) {
    if (level === filterLightness) {
      setFilterLightness(null);
    } else {
      setFilterLightness(level);
    }
  }

  function handleSaturationFilter(level: string) {
    if (level === filterSaturation) {
      setFilterSaturation(null);
    } else {
      setFilterSaturation(level);
    }
  }

  function handleHueFilter(level: string) {
    setFilterHue(level);
  }
  return (
    <Box>
      <Box py={6} borderBottom="1px solid" borderColor={"base.200"}>
        <Flex fontSize={"lg"} alignItems={"center"}>
          <HiAdjustmentsHorizontal />
          <Text fontWeight={600} ml={2}>
            Filters
          </Text>
        </Flex>
      </Box>

      <Filters filterName={"Style"}>
        <Flex
          as={motion.div}
          variants={filterTitleVar}
          initial="hidden"
          animate="show"
          pt={4}
          gap={2}
        >
          <Box
            as={motion.button}
            color={type === "card" ? "black" : "#808080b8"}
            _hover={{ color: "black" }}
            __css={colorTransition}
            onClick={() => setType("card")}
          >
            card
          </Box>
          <Box
            as={motion.button}
            color={type === "square" ? "black" : "#808080b8"}
            _hover={{ color: "black" }}
            __css={colorTransition}
            onClick={() => setType("square")}
          >
            square
          </Box>
          <Box
            as={motion.button}
            color={type === "text" ? "black" : "#808080b8"}
            _hover={{ color: "black" }}
            __css={colorTransition}
            onClick={() => setType("text")}
          >
            text
          </Box>
        </Flex>
      </Filters>

      <Filters filterName={"Lightness"}>
        <Flex
          pt={4}
          gap={2}
          as={motion.div}
          variants={filterTitleVar}
          initial="hidden"
          animate="show"
        >
          {lightness.map((level) => (
            <Box
              key={`lightness-${level}`}
              as={motion.button}
              color={filterLightness === level ? "black" : "#808080b8"}
              _hover={{ color: "black" }}
              __css={colorTransition}
              onClick={() => handleLightnessFilter(level)}
            >
              {level}
            </Box>
          ))}
        </Flex>
      </Filters>
      <Filters filterName={"Hue"}>
        <Flex
          pt={4}
          gap={2}
          as={motion.div}
          variants={filterTitleVar}
          initial="hidden"
          animate="show"
          flexWrap={"wrap"}
        >
          {hue.map((level) => (
            <Box
              key={`hue-${level}`}
              as={motion.button}
              color={filterHue === level ? "black" : "#808080b8"}
              _hover={{ color: "black" }}
              __css={colorTransition}
              onClick={() => handleHueFilter(level)}
            >
              {level}
            </Box>
          ))}
        </Flex>
      </Filters>
      <Filters filterName={"Saturation"}>
        <Flex
          pt={4}
          gap={2}
          as={motion.div}
          variants={filterTitleVar}
          initial="hidden"
          animate="show"
          flexWrap={"wrap"}
        >
          {saturation.map((level) => (
            <Box
              key={`hue-${level}`}
              as={motion.button}
              color={filterSaturation === level ? "black" : "#808080b8"}
              _hover={{ color: "black" }}
              __css={colorTransition}
              onClick={() => handleSaturationFilter(level)}
            >
              {level}
            </Box>
          ))}
        </Flex>
      </Filters>
      {/* <Box py={6} borderBottom="1px solid" borderColor={"base.200"}>
        <Flex cursor={"pointer"}>
          <Text>Lightness</Text>
          <Center
            fontSize={"xl"}
            color={"gray"}
            _hover={{ color: "black" }}
            ml="auto"
          >
            <GoPlus />
          </Center>
        </Flex>
      </Box>
      <Box py={6} borderBottom="1px solid" borderColor={"base.200"}>
        <Flex cursor={"pointer"}>
          <Text>Hue</Text>
          <Center
            fontSize={"xl"}
            color={"gray"}
            _hover={{ color: "black" }}
            ml="auto"
          >
            <GoPlus />
          </Center>
        </Flex>
      </Box> */}
      {/* <Box>
        <Flex>
          <Box>style</Box>
          <Flex
            as={motion.div}
            variants={filterTitleVar}
            initial="hidden"
            animate="show"
            ml={1}
            gap={2}
          >
           
          </Flex>
        </Flex>
        <Flex>
          <Box>lightness</Box>
          <Flex
            ml={1}
            gap={2}
            as={motion.div}
            variants={filterTitleVar}
            initial="hidden"
            animate="show"
          >
            <Box
              as={motion.button}
              variants={itemsVar}
              color={filterLightness === null ? "black" : "#808080b8"}
              _hover={{ color: "black" }}
              __css={colorTransition}
              onClick={() => setFilterLightness(null)}
              fontStyle={"italic"}
            >
              all
            </Box>
            {lightness.map((level) => (
              <Box
                key={`lightness-${level}`}
                as={motion.button}
                variants={itemsVar}
                color={filterLightness === level ? "black" : "#808080b8"}
                _hover={{ color: "black" }}
                __css={colorTransition}
                onClick={() => setFilterLightness(level)}
                fontStyle={"italic"}
              >
                {level}
              </Box>
            ))}
          </Flex>
        </Flex>
        <Flex>
          <Box>hue</Box>
          <Flex
            as={motion.div}
            variants={filterTitleVar}
            initial="hidden"
            animate="show"
            ml={1}
            columnGap={2}
            flexWrap={"wrap"}
          >
            {hue.map((level) => (
              <Box
                key={`hue-${level}`}
                as={motion.button}
                variants={itemsVar}
                color={filterHue === level ? "black" : "#808080b8"}
                _hover={{ color: "black" }}
                __css={colorTransition}
                onClick={() => setFilterHue(level)}
                fontStyle={"italic"}
              >
                {level}
              </Box>
            ))}
          </Flex>
        </Flex>
      </Box> */}
    </Box>
  );
}

export default FilterColor;
