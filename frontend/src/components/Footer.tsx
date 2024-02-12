import React from 'react';
import { Typography, Container, IconButton } from '@mui/material';
import { useStyles } from './styles';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  const classes = useStyles();
  const backgroundColor = "linear-gradient(45deg, rgba(65,80,47,255), rgba(27,12,5,255), rgba(29, 32, 34, 1))"; // Define gradient background color

  return (
    <footer className={classes.footer} style={{ background: backgroundColor }}>
      <Container maxWidth="lg">
        <IconButton className={classes.iconButtonGithub} aria-label="GitHub" href="https://github.com/your-github-account">
          <GitHubIcon style={{fontSize: '2.0rem',}}/>
        </IconButton>
      </Container>
    </footer>
  );
}

export default Footer;
