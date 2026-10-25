import React, { useRef, useState } from 'react';
import { Typography, Card, CardContent, Button, Box, TextField, Snackbar, Backdrop, Alert } from '@mui/material';
import { Link } from 'react-router-dom';
import { useStyles } from '../styles';
import { useLanguage } from '../../i18n/LanguageContext';
import './ContactPage.css'; 

const ContactPage: React.FC = () => {
  const classes = useStyles();
  const { t } = useLanguage();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [senderEmail, setsenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [senderEmailError, setsenderEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  // Spam protection: hidden honeypot field + time when the form was opened
  const [website, setWebsite] = useState('');
  const formStartedAt = useRef(Date.now());
  const [sending, setSending] = useState(false);

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
    setFirstNameError(false); // Reset error state on change
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
    setLastNameError(false); 
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setsenderEmail(event.target.value);
    setsenderEmailError(false); 
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
  if (!senderEmail.trim() || !/^\S+@\S+\.\S+$/.test(senderEmail)) {
    setsenderEmailError(true);
    return;
  }
  if (!message.trim()) {
    setMessageError(true);
    return;
  }

  setSending(true);
  setSubmissionError(null);
  try {
    // Send form data to backend
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        senderEmail,
        message,
        website,
        formStartedAt: formStartedAt.current,
      }),
    });

    if (response.ok) {
      // Submission successful
      setSubmissionSuccess(true);
      formStartedAt.current = Date.now();
      // Clear form fields after successful submission
      setFirstName('');
      setLastName('');
      setsenderEmail('');
      setMessage('');
    } else {
      // Handle server error
      console.error('Server error:', response.statusText);
      setSubmissionError(response.status === 429 ? t.contact.tooMany : t.contact.error);
    }
  } catch (error) {
    // Handle network error
    console.error('Network error:', error);
    setSubmissionError(t.contact.error);
  } finally {
    setSending(false);
  }
};


  const handleSnackbarClose = () => {
    setSubmissionSuccess(false);
  };

  return (
    <Box className={classes.root}>
      <div className="contact-container">
        <Card className="contact-card">
          <CardContent>
            <Typography variant="h4" align="center" gutterBottom className={classes.vintageText}>
              {t.contact.title}
            </Typography>
            <form className="contact-form" onSubmit={handleSubmit}>
              <TextField
                label={t.contact.firstName}
                variant="outlined"
                name="firstName"
                required
                fullWidth
                value={firstName}
                onChange={handleFirstNameChange}
                error={firstNameError}
                helperText={firstNameError && t.contact.firstNameError}
              />
              <TextField
                label={t.contact.lastName}
                variant="outlined"
                name="lastName"
                required
                fullWidth
                value={lastName}
                onChange={handleLastNameChange}
                error={lastNameError}
                helperText={lastNameError && t.contact.lastNameError}
              />
              <TextField
                label={t.contact.email}
                variant="outlined"
                name="email"
                type="email"
                required
                fullWidth
                value={senderEmail}
                onChange={handleEmailChange}
                error={senderEmailError}
                helperText={senderEmailError && t.contact.emailError}
              />
              <TextField
                label={t.contact.message}
                variant="outlined"
                name="message"
                multiline
                rows={10}
                required
                fullWidth
                value={message}
                onChange={handleMessageChange}
                error={messageError}
                helperText={messageError && t.contact.messageError}
              />
              {/* Honeypot: invisible to people, bots fill it in */}
              <input
                type="text"
                name="website"
                className="honeypot"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
              {submissionError && <Alert severity="error">{submissionError}</Alert>}
              <Button variant="contained" color="primary" size="large" fullWidth type="submit" disabled={sending}>
                {sending ? t.contact.sending : t.contact.submit}
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
        message={t.contact.success}
        action={
            <Button color="inherit" size="small" onClick={handleSnackbarClose}>
            {t.contact.close}
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

//TODO: check if email is valid 
