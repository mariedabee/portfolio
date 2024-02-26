import { makeStyles } from "@mui/styles";
import backgroundImage from "../shared/greenish.jpg";

// Define custom font for vintage look
const vintageFont = "'Old Standard TT', serif ";

export const useStyles = makeStyles((theme: any) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: theme.spacing(2),
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  card: {
    width: "80%",
    maxWidth: "600px",
    padding: theme.spacing(4),
    fontFamily: vintageFont,
    transform: "scale(0.95)",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1)",
    },
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
  footer: {
    padding: theme.spacing(0.1),
    marginTop: "auto",
  },
  iconButtonGithub: {
    color: theme.palette.text.secondary,
  },
  arrayImage: {
    backgroundImage: `url('../shared/dataStructures/array.png')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
  },
}));
