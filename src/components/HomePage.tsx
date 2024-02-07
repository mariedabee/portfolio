// HomePage.tsx
import React from 'react';
import { Container, Typography, Button, ThemeProvider, createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#7f6000', 
        },
    },
});


const HomePage: React.FC = () => {
    return (
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm" >
            <Typography variant="h4" align="center" gutterBottom>
                Welcome to My Portfolio
            </Typography>
            <Typography variant="body1" align="center" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam libero nec lectus blandit vehicula.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
                Fusce vestibulum enim vitae ex pellentesque, nec ultricies turpis tristique.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
                Vivamus sit amet purus id nisi elementum aliquet.
            </Typography>
            <Button variant="contained" color="primary" size="large" fullWidth>
                Learn More
            </Button>
        </Container>
    </ThemeProvider>
    );
}

export default HomePage;
