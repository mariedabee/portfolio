import React from 'react';
import { Typography, Container, IconButton } from '@mui/material';
import { useStyles } from './styles';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <IconButton className={classes.iconButtonGithub} aria-label="GitHub" href="https://github.com/your-github-account">
          <GitHubIcon style={{fontSize: '3.2rem',}}/>
        </IconButton>
      </Container>
    </footer>
  );
}

export default Footer;
