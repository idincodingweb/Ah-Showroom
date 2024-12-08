// src/components/CarDetail.jsx
import React from 'react';
import { Box, Typography, Grid, TextField, Button } from '@mui/material';
import '../assets/style/CarDetail.css';

const CarDetail = ({ car }) => (
  <Box sx={{ p: 4 }}>
    <Typography variant="h4" component="h2" gutterBottom>
      {car.name}
    </Typography>
    <Grid container spacing={2} sx={{ mb: 4 }}>
      {car.images.map((image, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <img src={image} alt={`${car.name} ${index + 1}`} style={{ width: '100%', borderRadius: '8px' }} />
        </Grid>
      ))}
    </Grid>
    <Typography variant="h6" component="h3" gutterBottom>
      Spesifikasi Teknis
    </Typography>
    <Typography variant="body1" paragraph>
      {car.specs}
    </Typography>
    <Typography variant="h6" component="h3" gutterBottom>
      Harga dan Penawaran
    </Typography>
    <Typography variant="body1" paragraph>
      Harga: {car.price}
    </Typography>
    <Typography variant="body1" paragraph>
      Opsi Pembiayaan: {car.financingOptions}
    </Typography>
    <Box component="form" sx={{ mt: 4 }}>
      <Typography variant="h6" component="h3" gutterBottom>
        Hubungi Kami
      </Typography>
      <TextField fullWidth label="Nama" name="name" margin="normal" />
      <TextField fullWidth label="Email" name="email" margin="normal" />
      <TextField fullWidth label="Pesan" name="message" multiline rows={4} margin="normal" />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Kirim
      </Button>
    </Box>
  </Box>
);

export default CarDetail;
