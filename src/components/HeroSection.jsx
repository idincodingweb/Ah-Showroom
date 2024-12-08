// src/components/HeroSection.jsx
import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import '../assets/style/HeroSection.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const carImages = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg',
    alt: 'Car 1',
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/1231643/pexels-photo-1231643.jpeg',
    alt: 'Car 2',
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg',
    alt: 'Car 3',
  },
];

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <Slider {...settings}>
        {carImages.map((image) => (
          <Box key={image.id} sx={{ position: 'relative' }}>
            <img src={image.src} alt={image.alt} className="carousel-image" />
            <Box className="carousel-caption">
              <Container>
                <Typography variant="h2" component="h1" gutterBottom>
                  PT. Ah Showroom
                </Typography>
                <Typography variant="h5" component="p" gutterBottom>
                  Temukan mobil impian Anda dengan penawaran terbaik.
                </Typography>
                <Button
                  component={Link}
                  to="/collection"
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ mt: 2 }}
                >
                  Lihat Koleksi
                </Button>
              </Container>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroSection;
