import React from 'react';
import { Container, Typography } from '@mui/material';

const AboutPage: React.FC = () => {
    return (
        <Container maxWidth="sm" style={{ padding: '20px', borderRadius: '10px' }}>
            <Typography variant="h4" align="center" gutterBottom>
                About Me
            </Typography>
            <Typography variant="h5" align="left" gutterBottom>
                Skills & Experiences
            </Typography>
            <Typography variant="body1" align="left" paragraph>
                - Proficient in Java, HTML, CSS, and beginner in React.
            </Typography>
            <Typography variant="body1" align="left" paragraph>
                - Experienced in marketing and technicalities of advertisement placement.
            </Typography>
            <Typography variant="body1" align="left" paragraph>
                - Previous work experience in IT at Encoway in Bremen, gaining insights into real-world development environments and sharpening programming skills.
            </Typography>
            <Typography variant="h5" align="left" gutterBottom>
                Hobbies & Interests
            </Typography>
            <Typography variant="body1" align="left" paragraph>
                - Enjoys reading, writing, painting, kickboxing, and discovering new music.
            </Typography>
            <Typography variant="body1" align="left" paragraph>
                - Fascinated by AI and aspiring to make meaningful contributions to humanity with software-related skills and knowledge.
            </Typography>
            <Typography variant="h5" align="left" gutterBottom>
                Aspirations
            </Typography>
            <Typography variant="body1" align="left" paragraph>
                - Seeking a position as a software developer in a supportive environment where I can continue to learn and grow.
            </Typography>
            <Typography variant="body1" align="left" paragraph>
                - Eager to travel and explore, and to eventually use my skills to do something helpful for humanity.
            </Typography>
        </Container>
    );
}

export default AboutPage;
