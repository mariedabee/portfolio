import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, List, ListItem, ListItemText, Box } from '@mui/material';
import { useStyles } from '../styles';

function BlogPage() {
    const classes = useStyles();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/posts'); // Endpoint to get all posts
            const data = await response.json();
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
        <ListItem key={post._id}>
            <ListItemText primary={post.title} secondary={post.content} />
            <ListItemText secondary={`Category: ${post.category}`} />
            {post.tags && (
                <ListItemText secondary={`Tags: ${post.tags.join(', ')}`} />
            )}
            <ListItemText secondary={`Date: ${post.date}`} />
        </ListItem>
    ))}
</List>
        </Container>
        </Box>
    );
}

export default BlogPage;
