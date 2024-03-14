// NewPostPage.tsx
import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Snackbar, Box } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchPost, createPost, updatePost } from '../blog/postService';
import { useStyles } from '../styles';

function NewPostPage() {
    const { postId } = useParams();
    const navigate = useNavigate();
    const classes = useStyles();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [tags, setTags] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    useEffect(() => {
        // If postId exists, fetch post data for editing
        if (postId) {
            async function fetchPostData() {
                try {
                    const postData = await fetchPost(postId);
                    setTitle(postData.title);
                    setContent(postData.content);
                    setCategory(postData.category);
                    setTags(postData.tags.join(','));
                } catch (error) {
                    console.error('Error fetching post:', error);
                }
            }
            fetchPostData();
        }
    }, [postId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (postId) {
                // If postId exists, update the existing post
                await updatePost(postId, { title, content, category, tags: tags.split(',') });
                setSnackbarMessage('Post updated successfully');
            } else {
                // If postId does not exist, create a new post
                await createPost({ title, content, category, tags: tags.split(',') });
                setSnackbarMessage('Post created successfully');
            }
            setSnackbarOpen(true);
            navigate('/blogPage');
        } catch (error) {
            setSnackbarMessage('Error creating/updating post');
            setSnackbarOpen(true);
            console.error('Error creating/updating post:', error);
        }
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <Box className={classes.root}>
            <Container>
                <Typography variant="h4" component="h1" gutterBottom>
                    {postId ? 'Edit Post' : 'New Post'}
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Title"
                        variant="outlined"
                        fullWidth
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <TextField
                        label="Content"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        style={{ marginTop: '1rem' }}
                        required
                    />
                    <TextField
                        label="Category"
                        variant="outlined"
                        fullWidth
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        style={{ marginTop: '1rem' }}
                    />
                    <TextField
                        label="Tags (comma-separated)"
                        variant="outlined"
                        fullWidth
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        style={{ marginTop: '1rem' }}
                    />
                    <Button type="submit" variant="contained" color="primary" style={{ marginTop: '1rem' }}>
                        {postId ? 'Update' : 'Submit'}
                    </Button>
                </form>
                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={6000}
                    onClose={handleSnackbarClose}
                    message={snackbarMessage}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                />
            </Container>
        </Box>
    );
}

export default NewPostPage;
