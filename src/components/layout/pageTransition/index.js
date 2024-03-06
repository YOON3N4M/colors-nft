import React, { useEffect, useState } from "react";

import { animate, motion } from "framer-motion";

import { useRouter } from "next/router";

import { text, curve, translate } from "./anim";
import { Box } from "@chakra-ui/react";
import { colorsArr } from "@/constants/colors";

const routes = {
  "/": "Home",

  "/shop": "Shop",

  "/about": "About",
};

const anim = (variants) => {
  return {
    variants,

    initial: "initial",

    animate: "enter",

    exit: "exit",
  };
};

const bgColor = `#${
  colorsArr[Math.floor(Math.random() * colorsArr.length)][1].hex
}`;

export default function Curve({ children }) {
  const router = useRouter();

  const [dimensions, setDimensions] = useState({
    width: null,

    height: null,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,

        height: window.innerHeight,
      });
    }

    resize();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="page curve" style={{ backgroundColor: "white" }}>
      <Box
        as={motion.div}
        bgColor={bgColor}
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
        className="background"
        zIndex={100}
      />

      <motion.p className="route" {...anim(text)}>
        {/* {routes[router.route]} */}
      </motion.p>

      {dimensions.width != null && <SVG {...dimensions} />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

const SVG = ({ height, width }) => {
  const initialPath = `

        M0 300 

        Q${width / 2} 0 ${width} 300

        L${width} ${height + 300}

        Q${width / 2} ${height + 600} 0 ${height + 300}

        L0 0

    `;

  const targetPath = `

        M0 300

        Q${width / 2} 0 ${width} 300

        L${width} ${height}

        Q${width / 2} ${height} 0 ${height}

        L0 0

    `;

  return (
    <motion.svg className={"curve"} {...anim(translate)} fill={bgColor}>
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};
