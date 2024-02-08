import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3FA796", // Green color for primary
    },
    secondary: {
      main: "#FEC260", // Pink color for secondary
    },
    background: {
      default: "#0d0d0d", // Darker background color
      paper: "#1a1a1a", // Darkest background color
    },
    text: {
      primary: "#ffffff", // White text color
      secondary: "#a0a0a0", // Light grey text color
    },
  },
  typography: {
    fontFamily: ["Roboto", '"Helvetica Neue"', "Arial", "sans-serif"].join(","),
  },
  spacing: 8, // Default spacing between components
  shadows: ["none"], // Disable shadows for a flatter look
});

export default darkTheme;
