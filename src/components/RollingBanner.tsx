import { Box } from "@chakra-ui/react";
import React, { useState } from "react";

interface RollingBannerProps {
  children: React.ReactNode[];
}

export default function RollingBanner(props: RollingBannerProps) {
  const { children } = props;

  const [animate, setAnimate] = useState(false);

  function stopAnimate() {
    setAnimate(false);
  }
  function runAnimate() {
    setAnimate(true);
  }

  return (
    <Box
      className="rolling-banner-wrapper"
      onMouseEnter={stopAnimate}
      onMouseLeave={runAnimate}
    >
      <Box className="slide-container">
        <Box className="slide-wrapper">
          <Box className={"slide original".concat(animate ? "" : " stop")}>
            {children.map((child) => (
              <Box className="item">{child}</Box>
            ))}
          </Box>
          <Box className={"slide clone".concat(animate ? "" : " stop")}>
            {children.map((child) => (
              <Box className="item">{child}</Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
