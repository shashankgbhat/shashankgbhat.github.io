import React from 'react';
import ImageCarousel from "../components/ImageCarousel";
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box>
      <ImageCarousel />
      <Box sx={{ padding: "2rem" }}>
        {/* <Typography variant='h4' gutterBottom>
          Welcome!
        </Typography> */}
        <Typography variant="body1">
          Shashank G Bhat is an engineer by education but naturalist by passion, who documents reptiles and amphibians
          across India. This website showcases his photography, trip reports, and workshops, and has been entirely 
          designed and developed by him using his frontend development skills.
        </Typography>
      </Box>
    </Box>
  )
}

export default Home
