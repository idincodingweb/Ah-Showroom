// src/components/CarGrid.jsx
import React from 'react';
import { Grid } from '@mui/material';
import CarCard from './CarCard';
import '../assets/style/CarGrid.css';

const CarGrid = ({ cars }) => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {cars.map((car) => (
        <Grid item key={car.id} xs={12} sm={6} md={4}>
          <CarCard car={car} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CarGrid;
