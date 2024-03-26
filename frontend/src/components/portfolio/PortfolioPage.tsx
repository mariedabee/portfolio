// HomePage.tsx
import React from 'react';
import { Typography, Button, Card, CardContent, Box, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { useStyles } from '../styles';

const PortfolioPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box>
        <Button className={classes.transparentWhiteBackground} color="primary" component={Link} to="/dataStructures">Data Structures</Button>
      </Box>
      <Box>
        <Button className={classes.transparentWhiteBackground} color="primary" component={Link} to="/blogPage">Blogs</Button>
      </Box>
      <Box>
        <Button className={classes.transparentWhiteBackground} color="primary" component={Link} to="/login">Log in</Button>
      </Box>
      <Box>
        <Button className={classes.transparentWhiteBackground} color="primary" component={Link} to="/signup">Sign up</Button>
      </Box>
    </div>
  );
}

export default PortfolioPage;
