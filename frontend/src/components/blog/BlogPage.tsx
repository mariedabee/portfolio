import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, List, ListItem, ListItemText, Box, Card } from '@mui/material';
import { useStyles } from '../styles';
import { createPost, updatePost, fetchPosts, deletePost } from '../blog/postService';
import { Navigate, useNavigate } from 'react-router-dom';

// Define interface for post object
interface Post {
    _id: string;
    title: string;
    content: string;
    date: string;
    category?: string;
    tags?: string[];
}

export default function BlogPage() {
    const classes = useStyles();
    const navigate = useNavigate();
    const [posts, setPosts] = useState<Post[]>([]); // Specify type as Post[]
    
    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetchPosts();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }
        fetchData();
    }, []);

    const handleDeletePost = async (postId) => {
        try {
            await deletePost(postId);
            setPosts(posts.filter(post => post._id !== postId));
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    const handleEditPost = async (postId) => {
        navigate(`/editPost/${postId}`);
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
                            {/* Right side */}
                            <Box textAlign="right">
                                    <ListItemText primary={`Date: ${post.date}`} />
                            </Box>
                            <ListItem>
                                <Box flexGrow={1}>
                                <Typography variant="h1" style={{ fontSize: '35px' }} >{post.title}</Typography>                                    
                                <Typography variant="h1" style={{ fontSize: '25px', whiteSpace: 'pre-line' }} >{post.content}</Typography>                                                                    
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
                            <Button variant="contained" style={{margin: '15px'}} color="primary" onClick={() => handleDeletePost(post._id)}>
                                    delete post
                            </Button>
                            <Button variant="contained" style={{margin: '15px'}} color="primary" onClick={() => handleEditPost(post._id)}>
                                    EDIT
                            </Button>
                        </Card>
                    ))}
                </List>
            </Container>
        </Box>
    );
}
