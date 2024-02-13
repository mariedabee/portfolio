// HomePage.tsx
import React from 'react';
import { Typography, Button, Card, CardContent, Box, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { useStyles } from '../styles';
import profilePicture from '../../shared/profilePicture.jpg';
import './HomePage.css'; // Import the CSS file

const HomePage: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
        <div>
            <CardMedia
              component="img"
              src={profilePicture}
              alt="Your Image Alt Text"
              className="profileImage"
            />
        </div>
      <Card className={classes.card}>
        <CardContent>
          <div className="cardWrapper"> 
            <div className="textWrapper"> 
              <Typography variant="h4" align="center" gutterBottom className={classes.vintageText}>
                Welcome to My Portfolio
              </Typography>
              <div className={classes.textWrapper}>
                  <Typography variant="body1" paragraph className={classes.vintageText}>
                  I'm a big lover of animals and nature. There's nothing quite like the soothing sound of the ocean or the gentle rustle of trees to make me feel at peace. I'm also quite active and love trying out new sports and activities whenever I can.
                  </Typography>
                  <Typography variant="body1" paragraph className={classes.vintageText}>
                  Music has been my rock during tough times, offering me comfort and solace. It's something that's very close to my heart. When it comes to meeting new people, I can be a bit shy at first, but give me time, and I'll warm up to you!                
                  </Typography>
                  <Typography variant="body1" paragraph className={classes.vintageText}>
                  During my studies, I embarked on a transformative semester abroad in the Netherlands, an experience that profoundly shaped my perspective. I've come to value structure and adherence to guidelines, as they enable me to effectively manage my diverse interests. Organization is key for me, as I harbor a keen fascination for a multitude of subjects and find myself drawn in many directions simultaneously.
                  </Typography>
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
                  Learn More
                </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
}

export default HomePage;
