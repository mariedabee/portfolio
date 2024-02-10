import { makeStyles } from "@mui/styles";
import backgroundImage from "../shared/yellow-green.jpg";

// Define custom font for vintage look
const vintageFont = "'Old Standard TT', serif ";

export const useStyles = makeStyles((theme: any) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",
    flexWrap: "wrap", // Allow wrapping for smaller screens
  },
  card: {
    transition: "transform 0.3s ease",
    marginBottom: theme.spacing(2),
    fontFamily: vintageFont,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    flex: 1, // Make cards grow to fill available space
    flexBasis: "100%",
    transform: "scale(0.95)", // Set initial scale to 95%
    "&:hover": {
      transform: "scale(0.98)", // Adjust scale to make the card return to normal size on hover
    },
  },
  hoverText: {
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  hoverTitle: {
    cursor: "pointer", // Change cursor to pointer on hover
    textDecoration: "underline", // Add underline effect on hover
  },
  vintageText: {
    fontFamily: vintageFont,
    color: "#12372A",
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
}));
