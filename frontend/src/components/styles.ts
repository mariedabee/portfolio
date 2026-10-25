import { makeStyles } from "@mui/styles";
import { neon, fonts } from "./darkTheme";

export const useStyles = makeStyles((theme: any) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: theme.spacing(4),
    flex: 1,
    minHeight: "calc(100vh - 140px)",
    padding: theme.spacing(4, 2),
    // Transparent so the global neon grid + particles show through
    background:
      "radial-gradient(ellipse at top, rgba(57, 255, 20, 0.12), transparent 60%)",
  },
  card: {
    width: "80%",
    maxWidth: "600px",
    padding: theme.spacing(4),
    position: "relative",
    "&:hover": {
      transform: "translate(-3px, -3px)",
    },
    // Little HUD corner tag on every panel
    "&::before": {
      content: '"◆ PLAYER 1"',
      position: "absolute",
      top: 10,
      left: 14,
      fontFamily: fonts.pixel,
      fontSize: "0.5rem",
      color: neon.green,
      opacity: 0.7,
    },
  },
  // Game level-select tile
  transparentWhiteBackground: {
    backgroundColor: neon.panel,
    border: `3px solid ${neon.green}`,
    borderRadius: 16,
    boxShadow: `5px 5px 0 ${neon.greenDim}`,
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    "& .MuiButton-root": {
      padding: theme.spacing(3, 5),
      fontSize: "1.1rem",
    },
    "&:hover": {
      transform: "translate(-3px, -3px) rotate(-1deg)",
      boxShadow: `8px 8px 0 ${neon.greenDim}, 0 0 30px rgba(57, 255, 20, 0.5)`,
    },
    margin: 4,
  },
  textWrapper: {
    flex: 1, // Allow text to grow to fill available space
  },
  hoverText: {
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  hoverTitle: {
    cursor: "pointer", // Change cursor to pointer on hover
    textDecoration: "underline", // Add underline effect on hover
  },
  // Neon text (class name kept so existing pages pick it up)
  vintageText: {
    color: "#e6ffe0",
    "&.MuiTypography-h4": {
      color: neon.green,
      animation: "glow-pulse 3s ease-in-out infinite",
    },
  },
  textCard: {
    marginRight: theme.spacing(2), // Adjust margin to create space between cards
    flexBasis: "50%", // Set the width of the text card
  },

  imageCard: {
    flexBasis: "20%", // Set the width of the image card
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  contactInfo: {
    textAlign: "left",
    marginBottom: theme.spacing(2),
  },
  contactItem: {
    marginBottom: theme.spacing(1),
  },
  contactLabel: {
    fontWeight: "bold",
    marginRight: theme.spacing(1),
  },
  footer: {
    padding: theme.spacing(1),
    marginTop: "auto",
    background: "rgba(3, 8, 5, 0.9)",
    borderTop: `2px solid ${neon.green}`,
    boxShadow: "0 0 24px rgba(57, 255, 20, 0.3)",
  },
  iconButtonGithub: {
    color: neon.green,
    transition: "transform 0.2s ease, filter 0.2s ease",
    "&:hover": {
      transform: "translateY(-4px) scale(1.1)",
      filter: `drop-shadow(0 0 8px ${neon.green})`,
    },
  },
  blogPost: {
    width: "75%", // Set width to 75%
    margin: "0 auto", // Center horizontally
    textAlign: "center", // Center text
    padding: theme.spacing(2),
    marginBlock: theme.spacing(3),
  },
}));
