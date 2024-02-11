import React from 'react';
import { Typography, Button, Card, CardContent, Box, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { useStyles } from '../styles';
import profilePicture from '../../shared/profilePicture.jpg';

const HomePage: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0px' }}>
            <CardMedia
              component="img"
              src={profilePicture}
              alt="Your Image Alt Text"
              style={{ width: '200px', borderRadius: '50%', marginRight: '20px' }}
            />
            <div>
              <Typography variant="h4" align="center" gutterBottom className={classes.vintageText}>
                Welcome to My Portfolio
              </Typography>
              <div className={classes.textWrapper}>
                <Typography variant="body1" paragraph className={classes.vintageText}>
                  Hi there! I'm a Syrian girl with a passion for exploration and learning. Having lived in various countries, including Egypt, Turkey, KSA, and currently Germany, I've been shaped by diverse experiences.
                </Typography>
                <Typography variant="body1" paragraph className={classes.vintageText}>
                  My wanderlust led me to an unforgettable semester abroad in the Netherlands, where I discovered the profound impact of embracing new cultures and perspectives.
                </Typography>
                <Typography variant="body1" paragraph className={classes.vintageText}>
                  I'm a kind-hearted individual who thrives on organization and structure. Animals and nature hold a special place in my heart, and I find solace in the harmony of the natural world.
                </Typography>
              </div>
              <Button variant="contained" color="primary" size="large" fullWidth component={Link} to="/about">
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
