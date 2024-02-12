import React, { useState } from 'react';
import { Box, Card, CardMedia, Container, ImageList, ImageListItem, Typography } from '@mui/material';
import { useStyles } from '../styles';
import nature_portfolio from '../../shared/imagesAlbum/nature_portfolio.jpg';
import profilePicture from '../../shared/profilePicture.jpg';
import cow from '../../shared/imagesAlbum/cow.jpeg';
import forest from '../../shared/imagesAlbum/forest.jpeg';
import GreenForestMe from '../../shared/imagesAlbum/GreenForestMe.jpeg';
import VlissingenSunsetBeach from '../../shared/imagesAlbum/VlissingenSunsetBeach.jpeg';

const AboutPage: React.FC = () => {
    const classes = useStyles();
    const [hoveredElement, setHoveredElement] = useState<string | null>(null);

    // Array of images for the scrollable image bar
    const itemData = [
  {
    img: nature_portfolio,
    title: 'nature',
  },
  {
    img: profilePicture,
    title: 'profilePicture',
  },{
    img: cow,
    title: 'cow',
  },{
    img: forest,
    title: 'forest',
  },{
    img: GreenForestMe,
    title: 'GreenForestMe',
  },,{
    img: VlissingenSunsetBeach,
    title: 'VlissingenSunsetBeach',
  },
];
    const images = [nature_portfolio, profilePicture];
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

                <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                        <img
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                        </ImageListItem>
                    ))}
                    </ImageList>
                </div>
            </Box>
            
    );
}

export default AboutPage;

//TODO: text appear / disappear state not working 