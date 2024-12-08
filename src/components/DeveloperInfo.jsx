// src/pages/DeveloperInfo.jsx
import React from 'react';
import { Box, Typography, Avatar, Grid, Paper } from '@mui/material';
import '../assets/style/DeveloperInfo.css';

const DeveloperInfo = () => {
  return (
    <container>
    <Box sx={{ p: 4 }}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 800, margin: 'auto' }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4}>
            <Avatar
              alt="Idin Iskandar, S.Kom"
              src="https://images.pexels.com/photos/12791384/pexels-photo-12791384.jpeg"
              sx={{ width: 150, height: 150, margin: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h4" component="h2" gutterBottom>
              Idin Iskandar, S.Kom
            </Typography>
            <Typography variant="body1" paragraph>
              Halo! Saya adalah seorang web developer dengan pengalaman dalam pengembangan aplikasi web menggunakan teknologi terbaru seperti React, Node.js, dan Material UI. Saya memiliki passion dalam menciptakan solusi yang inovatif dan user-friendly.
            </Typography>
            <Typography variant="body1" paragraph>
              Jika Anda memiliki proyek atau ide yang ingin didiskusikan, jangan ragu untuk menghubungi saya melalui email atau media sosial.
            </Typography>
            <Typography variant="body1">
              Email: idincode@gmail.com
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  </container>
  );
};

export default DeveloperInfo;
