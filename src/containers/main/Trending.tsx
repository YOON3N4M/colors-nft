import Carousel from "@/components/Carousel";
import FlipCard from "@/components/FlipCard";
import { ColorDocument } from "@/types/document";
import { sortByPurchaseCount } from "@/utils";
import { getAllColorDocuments } from "@/utils/firebaseApi";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function Trending() {
  const [colors, setColors] = useState<ColorDocument[]>([]);

  useEffect(() => {
    async function handleColor() {
      const colorDocuments = await getAllColorDocuments();
      const sortedColors = sortByPurchaseCount(colorDocuments);
      setColors(sortedColors);
    }
    handleColor();
  }, []);
  return (
    <Box mt={12}>
      <Carousel slidePerView={4} autoPlay={true} loop={true}>
        {colors.map((color) => (
          <Box key={`${color.numbering}-trending`} transform={"scale(0.9)"}>
            <FlipCard color={color} />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
