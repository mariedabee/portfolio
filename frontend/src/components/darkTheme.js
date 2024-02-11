import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#12372A",
    },
    secondary: {
      main: "#0a5664",
    },
    background: {
      default: "#c8cccb",
      paper: "rgba(173, 188, 159, 0.7)",
    },
    text: {
      primary: "#ffffff",
      secondary: "#a0a0a0",
    },
  },
  typography: {
    fontFamily: ["'Old Standard TT', serif "].join(","),
    body1: {
      margin: "5px", // Add margin for body1 variant
    },
  },
});

export default darkTheme;
