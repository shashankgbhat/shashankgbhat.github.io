import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import imagesData from "../data/gallery.json";

const ImageCarousel = () => {
  const [carouselImages, setCarouselImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const filtered = imagesData.filter((img) => img.categories.includes("carousel"));
    setCarouselImages(filtered);
  }, []);

  useEffect(() => {
    if (carouselImages.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [carouselImages]);

  if (carouselImages.length === 0) return null;

  return (
    <Box
      sx={{
        height: "70vh",
        backgroundImage: `url(${carouselImages[currentIndex].url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    />
  );
};

export default ImageCarousel;
