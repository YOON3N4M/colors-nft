import { Box, Center, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LayoutAnim() {
  const item = [
    { icon: "🍅", label: "Tomato" },
    { icon: "🥬", label: "Lettuce" },
    { icon: "🧀", label: "Cheese" },
    { icon: "🥕", label: "Carrot" },
    { icon: "🍌", label: "Banana" },
    { icon: "🫐", label: "Blueberries" },
    { icon: "🥂", label: "Champers?" },
  ];
  const [tomato, lettuce, cheese] = item;

  const tabs = [tomato, lettuce, cheese];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  useEffect(() => {
    console.log(typeof selectedTab);
  }, [selectedTab]);
  return (
    <Center bg="#8855ff" h={"100%"}>
      <Flex
        flexDirection={"column"}
        className="window"
        bg="#FFFFFF"
        w={"400px"}
        h="300px"
        borderRadius={"4px"}
        boxShadow="md"
      >
        <Box className="nav" display="flex">
          {tabs.map((item, idx) => (
            <Center
              as={"button"}
              position="relative"
              onClick={() => {
                setSelectedTab(item);
              }}
              bg={item.label === selectedTab.label ? "#eee" : "white"}
              py={5}
              flex={1}
            >
              {`${item.icon} ${item.label}`}
              {item.label === selectedTab.label ? (
                <Box
                  as={motion.div}
                  position="absolute"
                  bottom={"-1px"}
                  left={0}
                  right={0}
                  h="1px"
                  bg="#8855ff"
                  className="underline"
                  //아래 부분이 핵심
                  layoutId="underline"
                />
              ) : null}
            </Center>
          ))}
        </Box>
        <Center fontSize={50} flex={1} className="main">
          {selectedTab.icon}
        </Center>
      </Flex>
    </Center>
  );
}
