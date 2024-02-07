// src/components/Navbar.tsx

import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material'; 
import logo from '../shared/logo.png';
import './Navbar.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Define a custom theme with the desired AppBar color
const theme = createTheme({
    palette: {
        primary: {
            main: '#fff2cc', 
        },
    },
});

const Navbar: React.FC = () => {
    return (
    <ThemeProvider theme={theme}>
        <AppBar  position="static">
            <Toolbar>
                <img src={logo} alt="logo" className="logo" /> 
                <Button color="inherit">Home</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Portfolio</Button>
                <Button color="inherit">Contact</Button>
            </Toolbar>
        </AppBar>
    </ThemeProvider>

    );
}

export default Navbar;
