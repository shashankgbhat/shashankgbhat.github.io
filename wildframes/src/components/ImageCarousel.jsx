import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import imagesData from "../data/gallery.json";
import Carousel from "react-material-ui-carousel";

const ImageCarousel = () => {
  const [carouselImages, setCarouselImages] = useState([]);

  useEffect(() => {
      const filtered = imagesData.filter((img) => img.categories.includes("carousel"));
      setCarouselImages(filtered);
    }, []);

    console.log(carouselImages);

  return (
    <Box sx={{ width: '100%', height: '70vh', overflow: 'hidden' }}>
      <Carousel indicators={false} interval={5000} navButtonsAlwaysVisible>
        {carouselImages.map((image) => (
          <Box
            key={image.id}
            component="img"
            src={image.url}
            alt={image.title}
            sx={{
              width: '100%',
              height: '70vh',
              objectFit: 'cover',
            }}
          />
        ))}
      </Carousel>
    </Box>
  );
};

export default ImageCarousel;
