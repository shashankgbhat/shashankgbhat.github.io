import React from 'react';
import ImageCarousel from "../components/ImageCarousel";
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box>
      <ImageCarousel />
      <Box sx={{ padding: "2rem" }}>
        <Typography variant='h4' gutterBottom>
          Welcome!
        </Typography>
        <Typography variant="body1">
          I'm an electronics engineer turned passionate herper, documenting reptiles and amphibians across India.
          This site showcases my photography, trip reports, and workshops, built entirely using my frontend development skills.
        </Typography>
      </Box>
    </Box>
  )
}

export default Home
