import React from 'react';
import { Container, IconButton } from '@mui/material';
import { useStyles } from '../styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram'; 

// GitHub link as a constant
const githubLink = "https://github.com/mariedabee"; 
const instagramLink = "https://instagram.com/marie.dabee"; 

function Footer() {
  const classes = useStyles();
  const iconSize = '2.0rem';

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <IconButton className={classes.iconButtonGithub} aria-label="GitHub" href={githubLink}>
          <GitHubIcon style={{ fontSize: iconSize }} />
        </IconButton>
        <IconButton className={classes.iconButtonGithub} aria-label="Instagram" href={instagramLink}>
          <InstagramIcon style={{ fontSize: iconSize }} />
        </IconButton>
      </Container>
    </footer>
  );
}

export default Footer;
