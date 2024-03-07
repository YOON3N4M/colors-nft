import ColorCard from "@/components/ColorCard";
import RollingBanner from "@/components/RollingBanner";
import { arrangedColorArray, colorsArr } from "@/constants/colors";
import { filterColor, suffleIndex } from "@/utils";
import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function ContainerHome() {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(true);
  }, []);
  return (
    <>
      {render && (
        <Box>
          <RollingBanner bg="black">
            {suffleIndex(
              filterColor(arrangedColorArray, "lightness", "11")
            ).map((color) => (
              <ColorCard
                type="text"
                numbering={color.numbering}
                hex={color.hex}
                name={color.displayName}
                comma={false}
                colorText={true}
              />
            ))}
          </RollingBanner>
          <RollingBanner direction="to right">
            {suffleIndex(
              filterColor(arrangedColorArray, "lightness", "18")
            ).map((color) => (
              <ColorCard
                type="text"
                numbering={color.numbering}
                hex={color.hex}
                name={color.displayName}
                comma={false}
                colorText={true}
              />
            ))}
          </RollingBanner>
          <RollingBanner bg="black">
            {suffleIndex(
              filterColor(arrangedColorArray, "lightness", "12")
            ).map((color) => (
              <ColorCard
                type="text"
                numbering={color.numbering}
                hex={color.hex}
                name={color.displayName}
                comma={false}
                colorText={true}
              />
            ))}
          </RollingBanner>
          <RollingBanner direction="to right">
            {suffleIndex(
              filterColor(arrangedColorArray, "lightness", "17")
            ).map((color) => (
              <ColorCard
                type="text"
                numbering={color.numbering}
                hex={color.hex}
                name={color.displayName}
                comma={false}
                colorText={true}
              />
            ))}
          </RollingBanner>
        </Box>
      )}
    </>
  );
}
