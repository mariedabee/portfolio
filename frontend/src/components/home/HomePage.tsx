// HomePage.tsx
import React from 'react';
import { Typography, Button, Card, CardContent, Box, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { useStyles } from '../styles';
import profilePicture from '../../shared/profilePicture.jpg';
import { useLanguage } from '../../i18n/LanguageContext';
import AvailabilityCard from '../availability/AvailabilityCard';
import './HomePage.css';

// Character stat values shown under the avatar (labels come from translations)
const statValues = [95, 90, 75, 85];

const HomePage: React.FC = () => {
  const classes = useStyles();
  const { t } = useLanguage();

  return (
    <Box className={classes.root}>
        <div className="playerSelect">
            <span className="pixelLabel">PLAYER SELECT</span>
            <div className="avatarFrame">
              <CardMedia
                component="img"
                src={profilePicture}
                alt="Mariam Bari"
                className="profileImage"
              />
            </div>
            <div className="statPanel">
              {t.home.stats.map((label, i) => (
                <div key={label} className="statRow">
                  <span className="statLabel">{label}</span>
                  <div className="statBar">
                    <div className="statFill" style={{ width: `${statValues[i]}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="homeAvailability">
              <AvailabilityCard />
            </div>
        </div>
      <Card className={classes.card}>
        <CardContent>
          <div className="cardWrapper">
            <div className="textWrapper">
              <Typography variant="h4" align="center" gutterBottom className={classes.vintageText}>
                {t.home.title}
              </Typography>
              <p className="pressStart">PRESS START<span className="cursor">_</span></p>
              <div className={classes.textWrapper}>
                {t.home.bio.map((paragraph) => (
                  <Typography key={paragraph.slice(0, 20)} variant="body1" paragraph className={classes.vintageText}>
                    {paragraph}
                  </Typography>
                ))}
              </div>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  component={Link}
                  to="/about"
                  className="learnMoreButton"
                >
                  ▶ {t.home.learnMore}
                </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
}

export default HomePage;
