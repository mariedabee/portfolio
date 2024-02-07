// src/components/Navbar.tsx

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material'; 
import logo from '../shared/logo.png';

const Navbar: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <img src={logo} alt="logo" style={{ height: '50px', marginRight: '10px' }} /> 
                <Button color="inherit">Home</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Portfolio</Button>
                <Button color="inherit">Contact</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
