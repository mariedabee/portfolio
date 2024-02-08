import { makeStyles } from "@mui/styles";
import backgroundImage from "../shared/yellow-green.jpg";

// Define custom font for vintage look
const vintageFont = "'Old Standard TT', serif";

export const useStyles = makeStyles((theme: any) => ({
  root: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backdropFilter: "blur(57px)", // Reduced blur effect
    padding: "50px",
    borderRadius: "10px",
    margin: 0,
  },
  card: {
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
    marginBottom: theme.spacing(2),
    fontFamily: vintageFont,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  vintageText: {
    fontFamily: vintageFont,
    color: "#12372A",
  },
}));
