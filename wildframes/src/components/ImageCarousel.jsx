import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

const images = [
  "/images/img1.jpg",
  "/images/img3.jpg",
  "/images/img2.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        height: "70vh",
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    />
  );
};

export default ImageCarousel;
