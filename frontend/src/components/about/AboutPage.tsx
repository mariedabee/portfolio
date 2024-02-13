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
                        My journey has been pretty diverse, ranging from internships at a veterinary clinic to working with individuals with disabilities. 
                        Each experience has taught me so much about empathy and compassion. 
                        I've also dipped my toes into the worlds of marketing and IT, gaining valuable insights along the way.
                        My current role in IT at Encoway has been eye-opening. 
                        It's given me a real taste of what software development looks like in the real world. Sure, it's been challenging, but I'm all about pushing myself to grow and develop stronger connections with others.                    </Typography>
                     <Typography
                        id="skillsText"
                        variant="body1"
                        align="left"
                        paragraph
                        fontFamily={classes.vintageText}
                    >
                      - Proficient in Java, HTML, CSS, and beginner in React.
                    </Typography>
                     <Typography
                        id="skillsText"
                        variant="body1"
                        align="left"
                        paragraph
                        fontFamily={classes.vintageText}
                    >
                    
                        - Experienced in marketing and technicalities of advertisement placement.
                    </Typography>
                    <Typography
                        id="skillsText"
                        variant="body1"
                        align="left"
                        paragraph
                        fontFamily={classes.vintageText}
                    >
                    
                        - Previous work experience in IT at Encoway in Bremen, gaining insights into real-world development environments and sharpening programming skills.
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
                    When I'm not busy with work or studies, you'll probably find me hanging out with animals, exploring nature, or jamming out to some tunes. Being active and trying new things is what keeps me going!                    </Typography>
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
                        As I look ahead to the future, I'm excited about the possibilities that lie ahead. I'm eager to dive into my career as a software developer and continue learning and growing along the way. While my German skills are decent, I'm always looking for a supportive environment where I can ask questions and expand my knowledge every single day.
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