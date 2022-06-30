import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    dark: {
      black: "#000000",
      text: "#47585B",
      info: "#999999",
    },
    light: {
      info: "#DADADA",
      text: "#F5F8FA",
      white: "#FFFFFF",
    },
    highlight: "#FFBA08",
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "light.text",
        color: "dark.text",
      },
    },
  },
});
