import ColorCard from "@/components/ColorCard";
import RollingBanner from "@/components/RollingBanner";
import { arrangedColorArray, colorsArr } from "@/constants/colors";
import { Box } from "@chakra-ui/react";
import React from "react";

export default function ContainerHome() {
  return (
    <Box>
      <RollingBanner>
        {arrangedColorArray.slice(0, 30).map((color) => (
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
  );
}
