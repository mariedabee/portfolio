import { createTheme } from "@mui/material/styles";

// Futuristic game palette: black panels, neon green accents
export const neon = {
  green: "#39ff14",
  greenSoft: "#7dff6a",
  greenDim: "#1f8f0c",
  mint: "#00ffa3",
  black: "#030805",
  panel: "rgba(6, 20, 10, 0.6)",
  border: "rgba(57, 255, 20, 0.55)",
};

export const fonts = {
  display: "'Bungee', 'Exo 2', sans-serif",
  body: "'Exo 2', sans-serif",
  pixel: "'Press Start 2P', monospace",
};

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: neon.green,
      contrastText: neon.black,
    },
    secondary: {
      main: neon.mint,
      contrastText: neon.black,
    },
    background: {
      default: neon.black,
      paper: neon.panel,
    },
    text: {
      primary: "#e6ffe0",
      secondary: "#8fbf88",
    },
    divider: neon.border,
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: fonts.body,
    h1: { fontFamily: fonts.display },
    h2: { fontFamily: fonts.display, color: neon.green },
    h3: { fontFamily: fonts.display },
    h4: { fontFamily: fonts.display, color: neon.green, letterSpacing: "0.04em" },
    h5: { fontFamily: fonts.display },
    h6: { fontFamily: fonts.display },
    button: { fontFamily: fonts.display, letterSpacing: "0.08em" },
    body1: {
      margin: "5px", // Add margin for body1 variant
      lineHeight: 1.7,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        // Keep body transparent so the background layers stay visible (see index.css)
        html: { backgroundColor: neon.black },
        body: { backgroundColor: "transparent" },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: "none" },
      },
    },
    MuiCard: {
      styleOverrides: {
        // Cartoon "sticker" panel: thick outline + hard offset shadow
        root: {
          backgroundColor: neon.panel,
          border: `3px solid ${neon.green}`,
          borderRadius: 18,
          boxShadow: `6px 6px 0 ${neon.greenDim}, 0 0 24px rgba(57, 255, 20, 0.25)`,
          backdropFilter: "blur(1px)",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
          "&:hover": {
            boxShadow: `9px 9px 0 ${neon.greenDim}, 0 0 36px rgba(57, 255, 20, 0.45)`,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          fontWeight: 400,
          transition: "transform 0.1s ease, box-shadow 0.1s ease, background-color 0.2s",
        },
        // Chunky arcade button that presses down on click
        contained: {
          border: `2px solid ${neon.black}`,
          boxShadow: `0 5px 0 ${neon.greenDim}, 0 0 18px rgba(57, 255, 20, 0.45)`,
          "&:hover": {
            backgroundColor: neon.greenSoft,
            transform: "translateY(-2px)",
            boxShadow: `0 7px 0 ${neon.greenDim}, 0 0 28px rgba(57, 255, 20, 0.7)`,
          },
          "&:active": {
            transform: "translateY(4px)",
            boxShadow: `0 1px 0 ${neon.greenDim}, 0 0 12px rgba(57, 255, 20, 0.5)`,
          },
        },
        containedSecondary: {
          boxShadow: "0 5px 0 #00805a, 0 0 18px rgba(0, 255, 163, 0.45)",
          "&:hover": {
            backgroundColor: "#5fffc4",
            boxShadow: "0 7px 0 #00805a, 0 0 28px rgba(0, 255, 163, 0.7)",
          },
          "&:active": {
            boxShadow: "0 1px 0 #00805a, 0 0 12px rgba(0, 255, 163, 0.5)",
          },
        },
        text: {
          "&:hover": {
            backgroundColor: "rgba(57, 255, 20, 0.12)",
            textShadow: `0 0 8px ${neon.green}`,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(3, 8, 5, 0.85)",
          backdropFilter: "blur(8px)",
          borderBottom: `2px solid ${neon.green}`,
          boxShadow: "0 0 24px rgba(57, 255, 20, 0.35)",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0, 0, 0, 0.45)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: neon.border,
            borderWidth: 2,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: neon.green,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: neon.green,
            boxShadow: "0 0 14px rgba(57, 255, 20, 0.5)",
          },
        },
      },
    },
    MuiImageListItemBar: {
      styleOverrides: {
        title: { fontFamily: fonts.pixel, fontSize: "0.6rem", color: neon.green },
      },
    },
  },
});

export default darkTheme;
