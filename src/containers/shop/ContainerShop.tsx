import React, { useEffect, useState } from "react";
import colors from "@/data/pantone-numbers.json";
import Contents from "@/components/layout/Contents";
import { Box, Divider, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import ColorCard, { ColorCardType } from "@/components/ColorCard";
import FilterColor from "./FilterColor";
import ColorList from "./ColorList";
import { animate, motion } from "framer-motion";

export default function ContainerShop() {
  const [type, setType] = useState<ColorCardType>("card");
  const [filterLightness, setFilterLightness] = useState<string | null>(null);
  const [filterHue, setFilterHue] = useState<string | null>("01");
  const [filterSaturation, setFilterSaturation] = useState<string | null>(null);

  const [isListOn, setIsListOn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsListOn(true);
    }, 1000);
  }, []);

  return (
    <Contents>
      <Heading fontWeight={500}>Colors</Heading>
      <Divider my={4} />
      <Flex w="100%" gap={12}>
        <Box minW={"20%"} w={"20%"} maxW="20%">
          <FilterColor
            type={type}
            filterLightness={filterLightness}
            filterHue={filterHue}
            filterSaturation={filterSaturation}
            setType={setType}
            setFilterLightness={setFilterLightness}
            setFilterHue={setFilterHue}
            setFilterSaturation={setFilterSaturation}
          />
        </Box>
        <Box flex={1}>
          {isListOn && (
            <ColorList
              type={type}
              filterHue={filterHue}
              filterLightness={filterLightness}
              filterSaturation={filterSaturation}
            />
          )}
        </Box>
      </Flex>
    </Contents>
  );
}
