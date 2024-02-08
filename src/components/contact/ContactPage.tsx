import React from 'react';
import { Typography, Card, CardContent, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useStyles } from '../styles';

const ContactPage: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom className={classes.vintageText}>
            Contact Me
          </Typography>
          <Typography variant="body1" align="left" paragraph className={classes.vintageText}>
            If you'd like to get in touch, feel free to reach out to me using one of the following methods:
          </Typography>
          <Typography variant="body1" align="left" paragraph className={classes.vintageText}>
            Email: example@example.com
          </Typography>
          <Typography variant="body1" align="left" paragraph className={classes.vintageText}>
            Phone: +1234567890
          </Typography>
          <Typography variant="body1" align="left" paragraph className={classes.vintageText}>
            Address: 123 Street, City, Country
          </Typography>
          <Button variant="contained" color="primary" size="large" fullWidth component={Link} to="/">
            Back to Home
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ContactPage;
