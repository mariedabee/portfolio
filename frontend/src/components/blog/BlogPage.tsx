import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, List, ListItem, ListItemText, Box, Card } from '@mui/material';
import { useStyles } from '../styles';

export default function BlogPage() {
    const classes = useStyles();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
    try {
        const response = await fetch('http://localhost:3001/api/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        if (!Array.isArray(data)) {
            throw new Error('Fetched data is not an array');
        }
        setPosts(data);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
};


    return (
        <Box className={classes.root}>
            <Container>
                <Typography variant="h4" component="h1" gutterBottom>
                    My Blog
                </Typography>
                <Button variant="contained" color="primary" href="/new-post">
                    New Post
                </Button>
                <List>
                    {posts.map((post) => (
                        <Card className={`${classes.blogPost}`} key={post._id}>
                            {/* Left side */}
                            <ListItem>
                                <Box flexGrow={1}>
                                    <ListItemText primary={post.title} />
                                    <ListItemText primary={post.content} />
                                </Box>

                                {/* Right side */}
                                <Box textAlign="right">
                                    <ListItemText primary={`Date: ${post.date}`} />
                                </Box>
                            </ListItem>

                            {/* Centered */}
                            <ListItem>
                                <Box textAlign="center">
                                    <ListItemText primary={`Category: ${post.category}`} />
                                    {post.tags && (
                                        <ListItemText primary={`Tags: ${post.tags.join(', ')}`} />
                                    )}
                                </Box>
                            </ListItem>
                        </Card>
                    ))}
                </List>
            </Container>
        </Box>
    );
}
