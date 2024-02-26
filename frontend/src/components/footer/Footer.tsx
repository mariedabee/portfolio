import React from 'react';
import { Container, IconButton } from '@mui/material';
import { useStyles } from '../styles';
import GitHubIcon from '@mui/icons-material/GitHub';

// GitHub link as a constant
const githubLink = "https://github.com/mariedabee"; 

function Footer() {
  const classes = useStyles();
  const backgroundColor = "linear-gradient(45deg, rgba(65,80,47,255), rgba(27,12,5,255), rgba(29, 32, 34, 1))"; // Define gradient background color
  const iconSize = '2.0rem';

  return (
    <footer className={classes.footer} style={{ background: backgroundColor }}>
      <Container maxWidth="lg">
        <IconButton className={classes.iconButtonGithub} aria-label="GitHub" href={githubLink}>
          <GitHubIcon style={{ fontSize: iconSize }} />
        </IconButton>
      </Container>
    </footer>
  );
}

export default Footer;
