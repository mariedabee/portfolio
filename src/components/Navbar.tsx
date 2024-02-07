// src/components/Navbar.tsx

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material'; // Assuming you are using Material-UI

const Navbar: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    My Portfolio
                </Typography>
                <Button color="inherit">Home</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Portfolio</Button>
                <Button color="inherit">Contact</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
