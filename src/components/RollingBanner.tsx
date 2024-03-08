import { Box } from "@chakra-ui/react";
import React, { useState } from "react";

interface RollingBannerProps {
  children: React.ReactNode[];
  direction?: "to left" | "to right";
  bg?: string;
}

export default function RollingBanner(props: RollingBannerProps) {
  const { children, direction = "to left", bg = "white" } = props;

  const [animate, setAnimate] = useState(true);

  function stopAnimate() {
    setAnimate(false);
  }
  function runAnimate() {
    setAnimate(true);
  }

  function handleAnimation(type: "original" | "clone") {
    const duration = children.length * 3;
    const keyframeName =
      direction === "to left" ? "rollingBanner" : "rollingBannerReverse";

    if (type === "original") {
      return `${duration}s linear infinite none running ${keyframeName}1`;
    } else {
      return `${duration}s linear infinite ${keyframeName}2`;
    }
  }
  console.log(children.length);
  return (
    <Box
      className="rolling-banner-wrapper"
      onMouseEnter={stopAnimate}
      onMouseLeave={runAnimate}
    >
      <Box className="slide-container" bg={bg}>
        <Box className="slide-wrapper">
          <Box
            className={"slide"
              .concat(direction === "to left" ? " original" : " clone")
              .concat(animate ? "" : " stop")}
            animation={handleAnimation("original")}
          >
            {children.map((child, idx) => (
              <Box key={`wrap-${idx}`} className="item">
                {child}
              </Box>
            ))}
          </Box>
          <Box
            className={"slide"
              .concat(direction === "to left" ? " clone" : " original")
              .concat(animate ? "" : " stop")}
            animation={handleAnimation("clone")}
          >
            {children.map((child, idx) => (
              <Box key={`wrap-${idx}`} className="item">
                {child}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
