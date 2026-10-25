import React, { useEffect, useState } from 'react';
import { Modal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface GalleryItem {
  img: string;
  title: string;
  caption: string;
}

// Tilted "memory cards" that open in a neon lightbox (arrow keys to browse)
const ImageGallery: React.FC<{ itemData: GalleryItem[] }> = ({ itemData }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const showNext = (step: number) => {
    setSelectedIndex((i) => (i === null ? i : (i + step + itemData.length) % itemData.length));
  };

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') showNext(1);
      if (e.key === 'ArrowLeft') showNext(-1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  });

  const selected = selectedIndex === null ? null : itemData[selectedIndex];

  return (
    <>
      <div className="memoryGrid">
        {itemData.map((item, i) => (
          <button
            key={item.title}
            className="memoryCard"
            style={{ '--tilt': `${i % 2 === 0 ? -3 : 3}deg` } as React.CSSProperties}
            onClick={() => setSelectedIndex(i)}
          >
            <img src={item.img} alt={item.caption} loading="lazy" />
            <span className="memoryCaption">{item.caption}</span>
          </button>
        ))}
      </div>

      <Modal open={selected !== null} onClose={() => setSelectedIndex(null)}>
        <Box className="lightbox">
          {selected && (
            <figure className="lightboxFrame">
              <img src={selected.img} alt={selected.caption} />
              <figcaption>
                {selected.caption}
                <span className="lightboxCount">
                  {selectedIndex! + 1}/{itemData.length}
                </span>
              </figcaption>
            </figure>
          )}
          <IconButton className="lightboxClose" aria-label="Close" onClick={() => setSelectedIndex(null)}>
            <CloseIcon />
          </IconButton>
          <IconButton className="lightboxNav prev" aria-label="Previous photo" onClick={() => showNext(-1)}>
            <ChevronLeftIcon fontSize="large" />
          </IconButton>
          <IconButton className="lightboxNav next" aria-label="Next photo" onClick={() => showNext(1)}>
            <ChevronRightIcon fontSize="large" />
          </IconButton>
        </Box>
      </Modal>
    </>
  );
};

export default ImageGallery;
