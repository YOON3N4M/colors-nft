import { ColorCardType } from "@/components/ColorCard";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useState } from "react";
import { GoPlus } from "react-icons/go";

interface FiltersProps {
  children: React.ReactNode;
  filterName: string;
}

export default function Filters(props: FiltersProps) {
  const { filterName, children } = props;
  const [isListOn, setIsListOn] = useState(false);
  return (
    <>
      <Box py={6} borderBottom="1px solid" borderColor={"base.200"}>
        <Flex cursor={"pointer"} onClick={() => setIsListOn((prev) => !prev)}>
          <Text>{filterName}</Text>
          <Center
            fontSize={"xl"}
            color={"gray"}
            _hover={{ color: "black" }}
            ml="auto"
          >
            <GoPlus />
          </Center>
        </Flex>
        {isListOn && <>{children}</>}
      </Box>
    </>
  );
}
