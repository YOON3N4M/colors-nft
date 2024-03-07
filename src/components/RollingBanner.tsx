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

  function handleAnimation(type: "original" | "clone") {
    const duration = children.length * 3;

    if (type === "original") {
      return `${duration}s linear infinite none running infiniteAnimation1`;
    } else {
      return `${duration}s linear infinite infiniteAnimation2`;
    }
  }
  console.log(children.length);
  return (
    <Box
      className="rolling-banner-wrapper"
      onMouseEnter={stopAnimate}
      onMouseLeave={runAnimate}
    >
      <Box className="slide-container">
        <Box className="slide-wrapper">
          <Box
            className={"slide original".concat(animate ? "" : " stop")}
            animation={handleAnimation("original")}
          >
            {children.map((child) => (
              <Box className="item">{child}</Box>
            ))}
          </Box>
          <Box
            className={"slide clone".concat(animate ? "" : " stop")}
            animation={handleAnimation("clone")}
          >
            {children.map((child) => (
              <Box className="item">{child}</Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
