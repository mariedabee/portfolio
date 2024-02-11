import React, { useState } from 'react';
import { Typography, Card, CardContent, Button, Box, TextField, Snackbar, Backdrop } from '@mui/material';
import { Link } from 'react-router-dom';
import { useStyles } from '../styles';
import './ContactPage.css'; 

const ContactPage: React.FC = () => {
  const classes = useStyles();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
    setFirstNameError(false); // Reset error state on change
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
    setLastNameError(false); 
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailError(false); 
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
    setMessageError(false); // Reset error state on change
  };

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  // Validation logic
  if (!firstName.trim()) {
    setFirstNameError(true);
    return;
  }
  if (!lastName.trim()) {
    setLastNameError(true);
    return;
  }
  if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
    setEmailError(true);
    return;
  }
  if (!message.trim()) {
    setMessageError(true);
    return;
  }

  try {
    // Send form data to backend
    const response = await fetch('http://localhost:3001/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        message,
      }),
    });

    if (response.ok) {
      // Submission successful
      setSubmissionSuccess(true);
      // Clear form fields after successful submission
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
    } else {
      // Handle server error
      console.error('Server error:', response.statusText);
    }
  } catch (error) {
    // Handle network error
    console.error('Network error:', error);
  }
};


  const handleSnackbarClose = () => {
    setSubmissionSuccess(false);
  };

  return (
    <Box className={classes.root}>
      <div className="contact-container">
        <Card style={{width:"60%"}}>
          <CardContent>
            <Typography variant="h4" align="center" gutterBottom className={classes.vintageText}>
              Contact Me
            </Typography>
            <form className="contact-form" onSubmit={handleSubmit}>
              <TextField
                label="First Name"
                variant="outlined"
                name="firstName"
                required
                fullWidth
                value={firstName}
                onChange={handleFirstNameChange}
                error={firstNameError}
                helperText={firstNameError && "First Name is required"}
              />
              <TextField
                label="Last Name"
                variant="outlined"
                name="lastName"
                required
                fullWidth
                value={lastName}
                onChange={handleLastNameChange}
                error={lastNameError}
                helperText={lastNameError && "Last Name is required"}
              />
              <TextField
                label="Email"
                variant="outlined"
                name="email"
                type="email"
                required
                fullWidth
                value={email}
                onChange={handleEmailChange}
                error={emailError}
                helperText={emailError && "Invalid email format"}
              />
              <TextField
                label="Message"
                variant="outlined"
                name="message"
                multiline
                rows={10}
                required
                fullWidth
                value={message}
                onChange={handleMessageChange}
                error={messageError}
                helperText={messageError && "Message is required"}
              />
              <Button variant="contained" color="primary" size="large" fullWidth type="submit">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
        <div className="background-image"></div>
      </div>

      <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, color: 'rgba(0, 0, 0, 0.5)' }} open={submissionSuccess}>
        <Snackbar
        open={submissionSuccess}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Form submitted successfully"
        action={
            <Button color="inherit" size="small" onClick={handleSnackbarClose}>
            Close
            </Button>
        }
        sx={{ height: "100%" }}
        anchorOrigin={{   vertical: "top", horizontal: "center"}}
        />

      </Backdrop>
    </Box>
  );
}

export default ContactPage;
