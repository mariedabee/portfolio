import React, { useState } from 'react';
import { ImageList, ImageListItem, Modal, Box, Button, ImageListItemBar } from '@mui/material';

const ImageGallery = ({ itemData }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (img) => {
    setSelectedImage(img);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
    <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
        <ImageList variant="masonry" cols={2} gap={4}>
            {itemData.map((item) => (
            <ImageListItem key={item.img} style={{ cursor: 'pointer' }}>
                <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                onClick={() => openImageModal(item.img)}
                loading="lazy"
                />
                <ImageListItemBar position="below" title={item.author} />
            </ImageListItem>
            ))}
        </ImageList>
    </Box>

      <Modal open={Boolean(selectedImage)} onClose={closeImageModal}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            margin:'20px',
          }}
        >
          <Button sx={{ position: 'absolute', top: 20, right: 20, zIndex: 1, color:'white' }} onClick={closeImageModal}>
            X
          </Button>
          <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </Box>
      </Modal>
    </>
  );
};

export default ImageGallery;
