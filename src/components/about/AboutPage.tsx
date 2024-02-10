import React from 'react';
import { Box, Card, CardMedia, Container, Typography } from '@mui/material';
import { useStyles } from '../styles';
import naturePortfolio from '../../shared/nature_portfolio.jpg';

const AboutPage: React.FC = () => {
    const classes = useStyles();

    return (
        <Container>
            <Box className={classes.root}>
                {/* Text content */}
            <Card className={`${classes.card} ${classes.textCard}`}>                    <Typography variant="h2" align="center" gutterBottom className={classes.vintageText}>
                        About Me
                    </Typography>
                    {/* Skills & Experiences */}
                    <Typography variant="h4" align="center" gutterBottom className={classes.vintageText} >
                        Skills & Experiences
                    </Typography>
                    <Typography variant="body1" align="left" paragraph className={classes.vintageText} >
                        Proficient in Java, HTML, CSS, and beginner in React.
                    </Typography>
                    <Typography variant="body1" align="left" paragraph className={classes.vintageText}>
                        Experienced in marketing and technicalities of advertisement placement.
                    </Typography>
                    <Typography variant="body1" align="left" paragraph className={classes.vintageText}>
                        Previous work experience in IT at Encoway in Bremen, gaining insights into real-world development environments and sharpening programming skills.
                    </Typography>

                    {/* Hobbies & Interests */}
                    <Typography variant="h4" align="center" gutterBottom className={classes.vintageText}>
                        Hobbies & Interests
                    </Typography>
                    <Typography variant="body1" align="left" paragraph className={classes.vintageText}>
                        Enjoys reading, writing, painting, kickboxing, and discovering new music.
                    </Typography>
                    <Typography variant="body1" align="left" paragraph className={classes.vintageText}>
                        Fascinated by AI and aspiring to make meaningful contributions to humanity with software-related skills and knowledge.
                    </Typography>

                    {/* Aspirations */}
                    <Typography variant="h4" align="center" gutterBottom className={classes.vintageText}>
                        Aspirations
                    </Typography>
                    <Typography variant="body1" align="left" paragraph className={classes.vintageText}>
                        Seeking a position as a software developer in a supportive environment where I can continue to learn and grow.
                    </Typography>
                    <Typography variant="body1" align="left" paragraph className={classes.vintageText}>
                        Eager to travel and explore, and to eventually use my skills to do something helpful for humanity.
                    </Typography>
                </Card>

                {/* Image */}
            <Card className={`${classes.card} ${classes.imageCard}`}>     
                           <CardMedia className={classes.imageCard}
                        component="img"
                        src={naturePortfolio} // Pass the imported image variable
                        alt="Your Image Alt Text"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </Card>
            </Box>
        </Container>
    );
}

export default AboutPage;
