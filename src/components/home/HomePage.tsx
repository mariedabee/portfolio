import React from 'react';
import { Container, Typography, Button, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

// Define custom font for vintage look
const vintageFont = "'Old Standard TT', serif";

export const useStyles = makeStyles((theme : any) => ({
  card: {
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
    marginBottom: theme.spacing(2),
    fontFamily: vintageFont, // Apply vintage font to card content
  },
  // Adjust typography styles for vintage font
  vintageText: {
    fontFamily: vintageFont,
    color: '#ADBC9F', 
  },
}));

const HomePage: React.FC = () => {
  const classes = useStyles();

  return (
    <Container style={{ backgroundColor:'#436850', padding: '50px', borderRadius: '10px', width:'100%' }}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom className={classes.vintageText}>
            Welcome to My Portfolio
          </Typography>
          <Typography variant="body1" align="left" paragraph className={classes.vintageText}>
            Hi there! I'm a Syrian girl with a passion for exploration and learning. Having lived in various countries, including Egypt, Turkey, KSA, and currently Germany, I've been shaped by diverse experiences.
          </Typography>
          <Typography variant="body1" align="left" paragraph className={classes.vintageText}>
            My wanderlust led me to an unforgettable semester abroad in the Netherlands, where I discovered the profound impact of embracing new cultures and perspectives.
          </Typography>
          <Typography variant="body1" align="left" paragraph className={classes.vintageText}>
            I'm a kind-hearted individual who thrives on organization and structure. Animals and nature hold a special place in my heart, and I find solace in the harmony of the natural world.
          </Typography>
          <Button variant="contained" color="primary" size="large" fullWidth component={Link} to="/about">
            Learn More
          </Button>
        </CardContent>
      </Card>

      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom className={classes.vintageText}>
            i dont know yet
          </Typography>
          <Typography variant="body1" align="left" paragraph className={classes.vintageText}>
            Hi there! I'm a Syrian girl with a passion for exploration and learning. Having lived in various countries, including Egypt, Turkey, KSA, and currently Germany, I've been shaped by diverse experiences.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default HomePage;
