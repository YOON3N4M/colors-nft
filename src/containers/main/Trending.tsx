import Carousel from "@/components/Carousel";
import FlipCard from "@/components/FlipCard";
import useDeviceDetect from "@/hooks/useDeviceDetect";
import { ColorDocument } from "@/types/document";
import { sortByPurchaseCount } from "@/utils";
import { getAllColorDocuments } from "@/utils/firebaseApi";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function Trending() {
  const [colors, setColors] = useState<ColorDocument[]>([]);
  const { isPc, isMobile } = useDeviceDetect();
  const [slidePerView, setSlidePerview] = useState(4);

  useEffect(() => {
    async function handleColor() {
      const colorDocuments = await getAllColorDocuments();
      const sortedColors = sortByPurchaseCount(colorDocuments);
      setColors(sortedColors);
    }
    handleColor();
  }, []);

  useEffect(() => {
    if (isMobile) {
      setSlidePerview(1.25);
    } else {
      setSlidePerview(4);
    }
  }, [isMobile]);
  return (
    <Box mt={12}>
      <Carousel slidePerView={slidePerView} autoPlay={true} loop={true}>
        {colors.map((color) => (
          <Box key={`${color.numbering}-trending`} transform={"scale(0.9)"}>
            <FlipCard color={color} />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
