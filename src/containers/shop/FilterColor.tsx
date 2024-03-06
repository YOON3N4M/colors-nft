import { ColorCardType } from "@/components/ColorCard";
import { hue, lightness } from "@/constants/colors";
import { Box, Flex } from "@chakra-ui/react";

interface FilterColorProps {
  type: ColorCardType;
  filterLightness: string | null;
  filterHue: string | null;
  setType: React.Dispatch<React.SetStateAction<ColorCardType>>;
  setFilterLightness: React.Dispatch<React.SetStateAction<string | null>>;
  setFilterHue: React.Dispatch<React.SetStateAction<string | null>>;
}

function FilterColor(props: FilterColorProps) {
  const {
    type,
    filterHue,
    filterLightness,
    setType,
    setFilterLightness,
    setFilterHue,
  } = props;

  const colorTransition = {
    transition: "color",
    transitionDuration: "200ms",
  };

  return (
    <Box>
      <Box>
        <Flex>
          <Box>style</Box>
          <Flex ml={1} gap={2}>
            <Box
              as="button"
              color={type === "card" ? "black" : "#808080b8"}
              _hover={{ color: "black" }}
              __css={colorTransition}
              onClick={() => setType("card")}
              fontStyle={"italic"}
            >
              card
            </Box>
            <Box
              as="button"
              color={type === "square" ? "black" : "#808080b8"}
              _hover={{ color: "black" }}
              __css={colorTransition}
              onClick={() => setType("square")}
              fontStyle={"italic"}
            >
              square
            </Box>
            <Box
              as="button"
              color={type === "text" ? "black" : "#808080b8"}
              _hover={{ color: "black" }}
              __css={colorTransition}
              onClick={() => setType("text")}
              fontStyle={"italic"}
            >
              text
            </Box>
          </Flex>
        </Flex>
        <Flex>
          <Box>lightness</Box>
          <Flex ml={1} gap={2}>
            <Box
              as="button"
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
                as="button"
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
          <Flex ml={1} columnGap={2} flexWrap={"wrap"}>
            {hue.map((level) => (
              <Box
                key={`hue-${level}`}
                as="button"
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
      </Box>
    </Box>
  );
}

export default FilterColor;
