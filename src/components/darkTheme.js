import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ADBC9F", 
    },
    secondary: {
      main: "#0a5664", 
    },
    background: {
      default: "#c8cccb", 
      paper: "#12372A", 
    },
    text: {
      primary: "#ADBC9F", 
      secondary: "#a0a0a0", 
    },
  },
  typography: {
    fontFamily: ["Roboto", '"Helvetica Neue"', "Arial", "sans-serif"].join(","),
    body1: {
      margin: '15px', // Add margin for body1 variant
    },
  },
  spacing: 8, // Default spacing between components
  shadows: ["none"], // Disable shadows for a flatter look
});

export default darkTheme;
