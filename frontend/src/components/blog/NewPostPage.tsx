import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NewPostPage() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [tags, setTags] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, content, category, tags: tags.split(',') }),
            });
            if (response.ok) {
                setSnackbarMessage('Post created successfully');
                setSnackbarOpen(true);
                navigate('/blogPage');
            } else {
                throw new Error('Failed to create post');
            }
        } catch (error) {
            setSnackbarMessage('Error creating post');
            setSnackbarOpen(true);
            console.error('Error creating post:', error);
        }
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                New Post
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
                    Submit
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
    );
}

export default NewPostPage;
