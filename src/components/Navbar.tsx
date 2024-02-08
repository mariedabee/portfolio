import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material'; 
import logo from '../shared/logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

// Define custom font for vintage look
const vintageFont = "'Old Standard TT', serif";

const Navbar: React.FC = () => {
    return (
        <AppBar position="static" style={{ background: '#12372A', fontFamily: vintageFont }}>
            <Toolbar>
                <img src={logo} alt="logo" className="logo" /> 
                <Button color="inherit" component={Link} to="/" style={{ fontFamily: vintageFont }}>Home</Button>                
                <Button color="inherit" component={Link} to="/about" style={{ fontFamily: vintageFont }}>About</Button>
                <Button color="inherit" component={Link} to="/portfolio" style={{ fontFamily: vintageFont }}>Portfolio</Button>
                <Button color="inherit" component={Link} to="/contact" style={{ fontFamily: vintageFont }}>Contact</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
