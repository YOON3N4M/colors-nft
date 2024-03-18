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
    "50": "hsl(187, 53%,97%)",
    "100": "hsl(185, 55%, 87%)",
    "200": "hsl(185, 55%, 74%)",
    "300": "hsl(185, 54%, 64%)",
    "400": "hsl(185, 58%, 48%)",
    "500": "hsl(185, 100%, 35%)",
    "600": "hsl(185, 100%, 30%)",
    "700": "hsl(185, 100%, 25%)",
    "800": "hsl(185, 100%, 18%)",
    "900": "hsl(185, 100%, 14%)",
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
