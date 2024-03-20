import React, { useEffect, useState } from "react";
import colors from "@/data/pantone-numbers.json";
import Contents from "@/components/layout/Contents";
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Input,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import ColorCard, { ColorCardType } from "@/components/ColorCard";
import FilterColor from "./FilterColor";
import ColorList from "./ColorList";
import { animate, motion } from "framer-motion";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import useDeviceDetect from "@/hooks/useDeviceDetect";

export default function ContainerShop() {
  const [type, setType] = useState<ColorCardType>("card");
  const [filterLightness, setFilterLightness] = useState<string | null>(null);
  const [filterHue, setFilterHue] = useState<string | null>("39");
  const [filterSaturation, setFilterSaturation] = useState<string | null>(null);
  const { isMobile } = useDeviceDetect();

  //for mob drawer filter
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  const [isListOn, setIsListOn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsListOn(true);
    }, 1000);
  }, []);

  return (
    <Contents>
      <Flex alignItems={"center"}>
        <Heading fontWeight={500}>Colors</Heading>
        <Box display={{ pc: "none" }} ml="auto">
          <Button ref={btnRef} bg={"none"} fontSize="2xl" onClick={onOpen}>
            <HiAdjustmentsHorizontal />
          </Button>
        </Box>
      </Flex>
      <Divider my={4} />
      <Flex w="100%" gap={12}>
        <Box
          display={{ pc: "initial", mo: "none" }}
          minW={"20%"}
          w={"20%"}
          maxW="20%"
        >
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
        <Box position={"absolute"} display={{ pc: "none" }}>
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader></DrawerHeader>

              <DrawerBody>
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
              </DrawerBody>

              <DrawerFooter></DrawerFooter>
            </DrawerContent>
          </Drawer>
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
