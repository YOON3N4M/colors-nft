import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  mo: "0px",
  pc: "768px",
};

const colors = {
  border: {
    rightGray: "hsl(0, 0%, 90%)",
  },
  // 컬러 컨벤션 생성 이후 추가
  brand: {
    "50": "#E8F3FC",
    "100": "#BFDDF8",
    "200": "#96C8F3",
    "300": "#6CB2EE",
    "400": "#439CEA",
    "500": "#1A87E5",
    "600": "#156CB7",
    "700": "#105189",
    "800": "#0A365C",
    "900": "#051B2E",
  },
  base: {
    50: "hsl(0, 0%, 98%)",
    100: "hsl(0, 0%, 96%)",
    200: "hsl(0, 0%, 90%)",
    300: "hsl(0, 0%, 84%)",
    400: "hsl(0, 0%, 64%)",
    500: "hsl(0, 0%, 45%)",
    600: "hsl(0, 0%, 32%)",
    700: "hsl(0, 0%, 25%)",
    800: "hsl(0, 0%, 15%)",
    900: "hsl(0, 0%, 9%)",
    white: "hsl(0, 0%, 100%)",
    black: "hsl(0, 0%, 0%)",
  },
  rose: {
    400: "hsl(350, 89%, 60%)",
    500: "hsl(350, 89%, 68%)",
    600: "hsl(350, 59%, 48%)",
  },
};

export const theme = extendTheme({ breakpoints, colors });
