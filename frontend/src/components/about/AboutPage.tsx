import React, { useState } from 'react';
import { Box, Card, ImageList, ImageListItem, Typography } from '@mui/material';
import { useStyles } from '../styles';
import ImageGallery from './ImageGallery';
import imageData from './imageData';



const AboutPage: React.FC = () => {
    const classes = useStyles();
    const [hoveredElement, setHoveredElement] = useState<string | null>(null);

    return (
            <Box className={classes.root}>
                <div>
                    <Card 
                    className={`${classes.card} ${classes.textCard}`} 
                    onMouseEnter={() => setHoveredElement("skillsTitle")} 
                    onMouseLeave={() => setHoveredElement(null)}
                    >
                    {/* Skills & Experiences */}
                    <Typography
                        id="skillsTitle"
                        variant="h4"
                        align="center"
                        gutterBottom
                        fontFamily={`${classes.vintageText} ${classes.hoverTitle}`}
                    >
                        Skills & Experiences
                    </Typography>
                    <Typography
                        id="skillsText"
                        variant="body1"
                        align="left"
                        paragraph
                        fontFamily={classes.vintageText}
                    >
                        Proficient in Java, HTML, CSS, and beginner in React.
                        Experienced in marketing and technicalities of advertisement placement.
                        Previous work experience in IT at Encoway in Bremen, gaining insights into real-world development environments and sharpening programming skills.
                    </Typography>
                </Card>

                {/*  Hobbies & Interests  */}
                <Card className={`${classes.card} ${classes.textCard}`}  
                    onMouseEnter={() => setHoveredElement("hobbiesText")} 
                    onMouseLeave={() => setHoveredElement(null)}
                >
                    <Typography variant="h4" align="center" gutterBottom fontFamily={`${classes.vintageText} ${classes.hoverTitle}`}>
                        Hobbies & Interests
                    </Typography>
                    <Typography  id="hobbiesText" variant="body1" align="left" paragraph fontFamily={`${classes.vintageText} ${classes.hoverText}`}>
                        Enjoys reading, writing, painting, kickboxing, and discovering new music.
                    </Typography>
                </Card>

                {/* Aspirations */}
                <Card className={`${classes.card} ${classes.textCard}`}  
                    onMouseEnter={() => setHoveredElement("aspirationsText")} 
                    onMouseLeave={() => setHoveredElement(null)}
                >
                    <Typography variant="h4" align="center" gutterBottom fontFamily={`${classes.vintageText} ${classes.hoverTitle}`}>
                        Aspirations
                    </Typography>
                    <Typography id="aspirationsText" variant="body1" align="left" paragraph fontFamily={`${classes.vintageText} ${classes.hoverText}`}>
                        Seeking a position as a software developer in a supportive environment where I can continue to learn and grow.
                        Eager to travel and explore, and to eventually use my skills to do something helpful for humanity.
                    </Typography>
                </Card>
                </div>
                
                <ImageGallery itemData={imageData}></ImageGallery>
            </Box>
    );
}

export default AboutPage;

//TODO: text appear / disappear state not working 