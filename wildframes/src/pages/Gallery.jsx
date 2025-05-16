import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Grid,
  Typography,
  Dialog,
  DialogContent,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import imagesData from '../data/gallery.json';

const categories = [
  'All',
  'Western Ghats',
  'Bangalore Outskirts',
  'Agumbe',
  'Andaman',
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredImages, setFilteredImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredImages(imagesData);
    } else {
      const filtered = imagesData.filter((img) =>
        img.categories.includes(activeCategory.toLowerCase())
      );
      setFilteredImages(filtered);
    }
  }, [activeCategory]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <Box sx={{ padding: 2 }}>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? 'contained' : 'outlined'}
            onClick={() => setActiveCategory(category)}
            sx={{ textTransform: 'none' }}
          >
            {category}
          </Button>
        ))}
      </Box>

      <Grid container spacing={2}>
        {filteredImages.map((image) => (
          <Grid item key={image.id} xs={12} sm={6} md={4} lg={3}>
            <Box
              component="img"
              src={image.url}
              alt={image.title}
              onClick={() => handleImageClick(image)}
              sx={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: 1,
                cursor: 'pointer',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.03)',
                },
              }}
            />
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={!!selectedImage}
        onClose={handleClose}
        fullScreen
        PaperProps={{
          sx: {
            backgroundColor: '#000',
            color: '#fff',
          },
        }}
      >
        <DialogContent sx={{ position: 'relative', textAlign: 'center', p: 0 }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              color: '#fff',
              zIndex: 1000,
            }}
          >
            <CloseIcon />
          </IconButton>
          {selectedImage && (
            <>
              <Box
                component="img"
                src={selectedImage.url}
                alt={selectedImage.title}
                sx={{
                  maxWidth: '100%',
                  maxHeight: '70vh',
                  objectFit: 'contain',
                  mt: 8,
                }}
              />
              <Box sx={{ mt: 2, px: 4 }}>
                <Typography variant="body1" color="white">
                  {selectedImage.note}
                </Typography>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Gallery;
