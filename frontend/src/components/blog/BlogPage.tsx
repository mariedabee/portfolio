import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, List, ListItem, ListItemText } from '@mui/material';

function BlogPage() {
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
                        {/* Display other information like category, tags, and date */}
                        <ListItemText secondary={`Category: ${post.category}`} />
                        <ListItemText secondary={`Tags: ${post.tags.join(', ')}`} />
                        <ListItemText secondary={`Date: ${post.date}`} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}

export default BlogPage;
