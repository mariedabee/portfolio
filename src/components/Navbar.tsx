// src/components/Navbar.tsx

import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material'; 
import logo from '../shared/logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar: React.FC = () => {
    return (
        <AppBar  position="static">
            <Toolbar>
                <img src={logo} alt="logo" className="logo" /> 
                <Button color="inherit" component={Link} to="/">Home</Button>                
                <Button color="inherit" component={Link} to="/about">About</Button>
                <Button color="inherit">Portfolio</Button>
                <Button color="inherit">Contact</Button>
            </Toolbar>
        </AppBar>

    );
}

export default Navbar;
