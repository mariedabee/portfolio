import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    return (
        <Container maxWidth="sm" style={{ padding: '20px', borderRadius: '10px' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Welcome to My Portfolio
            </Typography>
        
            <Typography variant="body1" align="left" paragraph>
                Hi there! I'm a Syrian girl with a passion for exploration and learning. Having lived in various countries, including Egypt, Turkey, KSA, and currently Germany, I've been shaped by diverse experiences.
            </Typography>
            <Typography variant="body1" align="left" paragraph>
                My wanderlust led me to an unforgettable semester abroad in the Netherlands, where I discovered the profound impact of embracing new cultures and perspectives.
            </Typography>
            <Typography variant="body1" align="left" paragraph>
                I'm a kind-hearted individual who thrives on organization and structure. Animals and nature hold a special place in my heart, and I find solace in the harmony of the natural world.
            </Typography>
            <Button variant="contained" color="primary" size="large" fullWidth component={Link} to="/about">
                Learn More
            </Button>
        </Container>
    );
}

export default HomePage;
