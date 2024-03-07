import ColorCard from "@/components/ColorCard";
import RollingBanner from "@/components/RollingBanner";
import { arrangedColorArray, colorsArr } from "@/constants/colors";
import { filterColor, suffleIndex } from "@/utils";
import { Box } from "@chakra-ui/react";
import React from "react";

export default function ContainerHome() {
  return (
    <Box>
      <RollingBanner>
        {suffleIndex(filterColor(arrangedColorArray, "lightness", "18")).map(
          (color) => (
            <ColorCard
              type="text"
              numbering={color.numbering}
              hex={color.hex}
              name={color.displayName}
              comma={false}
              colorText={true}
            />
          )
        )}
      </RollingBanner>
    </Box>
  );
}
