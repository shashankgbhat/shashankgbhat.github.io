import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
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
              sx={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: 1,
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.03)',
                },
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Gallery;
