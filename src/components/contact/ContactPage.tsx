import React from 'react';
import { Typography, Card, CardContent, Button, Box, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { useStyles } from '../styles';
import './ContactPage.css'; 

const ContactPage: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <div className="contact-container">
        <Card style={{width:"60%"}}>
          <CardContent>
            <Typography variant="h4" align="center" gutterBottom className={classes.vintageText}>
              Contact Me
            </Typography>
            <form className="contact-form">
              <TextField
                label="First Name"
                variant="outlined"
                name="firstName"
                required
                inputProps={{ pattern: "[A-Za-z]+" }}
                title="Only letters are allowed"
                fullWidth
              />
              <TextField
                label="Last Name"
                variant="outlined"
                name="lastName"
                required
                inputProps={{ pattern: "[A-Za-z]+" }}
                title="Only letters are allowed"
                fullWidth
              />
              <TextField
                label="Email"
                variant="outlined"
                name="email"
                type="email"
                required
                fullWidth
              />
              <TextField
                label="Message"
                variant="outlined"
                name="message"
                multiline
                rows={10}
                required
                fullWidth
              />
              <Button variant="contained" color="primary" size="large" fullWidth component={Link} to="/">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
        <div className="background-image"></div>
      </div>
    </Box>
  );
}

export default ContactPage;
