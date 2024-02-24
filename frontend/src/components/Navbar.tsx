// Navbar.tsx
import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import logo from '../shared/logo.png';
import './Navbar.css'; 
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar className="toolbar">
                <Link to="/">
                    <img src={logo} alt="logo" className="logo" />
                </Link>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/about">About</Button>
                <Button color="inherit" component={Link} to="/portfolio">Portfolio</Button>
                <Button color="inherit" component={Link} to="/contact">Contact</Button>
                <Button color="inherit" component={Link} to="/dataStructures">Data Structures</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
