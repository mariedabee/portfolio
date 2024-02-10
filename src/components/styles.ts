import { makeStyles } from "@mui/styles";
import backgroundImage from "../shared/yellow-green.jpg";

// Define custom font for vintage look
const vintageFont = "'Old Standard TT', serif";

export const useStyles = makeStyles((theme: any) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",
    flexWrap: "wrap", // Allow wrapping for smaller screens
  },
  card: {
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
    marginBottom: theme.spacing(2),
    fontFamily: vintageFont,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    flex: 1, // Make cards grow to fill available space
    flexBasis: "100%",
  },
  vintageText: {
    fontFamily: vintageFont,
    color: "#12372A",
  },
  textCard: {
    marginRight: theme.spacing(2), // Adjust margin to create space between cards
    flexBasis: "60%", // Set the width of the text card
  },
  imageCard: {
    flexBasis: "30%", // Set the width of the image card
  },
}));
