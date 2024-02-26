import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material'; 
import logo from '../../shared/logo.png';
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
          
                {/* Use Box component with flexGrow to push buttons to the right */}
                <Box flexGrow={1} />
                <Button color="inherit" component={Link} to="/dataStructures">Data Structures</Button>
                <Button color="inherit" component={Link} to="/blogPage">Blogs</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
