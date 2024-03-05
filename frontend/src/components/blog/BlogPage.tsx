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

    // Function to handle post deletion
const deletePost = async(postId) => {
    try{
        const response = await fetch(`http://localhost:3001/api/posts/${postId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete post');
        }
        // Remove the deleted post from the local state
        setPosts(posts.filter(post => post._id !== postId));
    }catch (error) {
        console.error('Error fetching posts:', error);
    }
}




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
                                <Typography variant="h1" style={{ fontSize: '35px' }}>{post.title}</Typography>                                    
                                <ListItemText primary={post.content} />
                                </Box>

                                {/* Right side */}
                                <Box textAlign="right">
                                    <ListItemText primary={`Date: ${post.date}`} />
                                </Box>
                            </ListItem>

                            {/* Centered */}
                            <ListItem>
                                <Box textAlign="left">
                                    <ListItemText primary={`Category: ${post.category}`} />
                                    
                                </Box>
                                 {/* Right side */}
                                <Box textAlign="right">
                                    {post.tags && (
                                        <ListItemText primary={`Tags: ${post.tags.join(', ')}`} />
                                    )}                                
                                </Box>
                            </ListItem>
                           <Button variant="contained" color="primary" onClick={() => deletePost(post._id)}>
                                delete post
                            </Button>

                        </Card>
                    ))}
                </List>
            </Container>
        </Box>
    );
}
