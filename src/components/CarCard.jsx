// src/components/CarCard.jsx
import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../assets/style/CarCard.css';

const CarCard = ({ car }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' } }}>
      <CardMedia
        component="img"
        height="200"
        image={car.images[0]} // Menampilkan gambar pertama dari array images
        alt={car.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {car.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Harga: {car.price}
        </Typography>
        <Button component={Link} to={`/car/${car.id}`} variant="contained" color="primary" sx={{ mt: 2 }}>
          Lihat Detail
        </Button>
      </CardContent>
    </Card>
  );
};

export default CarCard;
