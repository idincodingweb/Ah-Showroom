import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box, Typography, Grid, Avatar } from '@mui/material';
import '../assets/style/AboutUs.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box className="about-us" sx={{ py: 6, px: 4 }} data-aos="fade-up">
      <Typography variant="h4" component="h2" gutterBottom textAlign="center" className="about-us-title">
        Tentang Kami
      </Typography>
      <Typography variant="body1" paragraph textAlign="center" maxWidth="md" mx="auto" className="about-us-description">
        Showroom kami berdiri sejak tahun 2000 dengan visi untuk menyediakan mobil berkualitas tinggi dan layanan pelanggan terbaik. Kami berkomitmen untuk memberikan pengalaman membeli mobil yang menyenangkan dan memuaskan.
      </Typography>
      <Box sx={{ mt: 6 }} data-aos="fade-up" className="about-us-team">
        <Typography variant="h5" component="h3" gutterBottom textAlign="center" className="about-us-team-title">
          Tim Kami
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4} textAlign="center" className="about-us-team-member">
            <Avatar src="https://images.pexels.com/photos/12791384/pexels-photo-12791384.jpeg" alt="Tim Member 1" sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }} />
            <Typography variant="h6">Idin Iskandar, S.Kom - CEO</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} textAlign="center" className="about-us-team-member">
            <Avatar src="https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/feel__la.26-27-05-2024-0001.jpg" alt="Tim Member 2" sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }} />
            <Typography variant="h6">Fela Jane - Sales Manager</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: 6 }} data-aos="fade-up" className="about-us-testimonials">
        <Typography variant="h5" component="h3" gutterBottom textAlign="center" className="about-us-testimonials-title">
          Testimoni Pelanggan
        </Typography>
        <Box sx={{ maxWidth: 'md', mx: 'auto' }}>
          <Box className="about-us-testimonial" sx={{ backgroundColor: 'grey.100', p: 3, borderRadius: 2, mb: 2 }}>
            <Typography variant="body1" fontStyle="italic">
              "Layanan yang luar biasa! Saya sangat puas dengan mobil yang saya beli di sini."
            </Typography>
            <Typography variant="body2" textAlign="right">- Ahmad</Typography>
          </Box>
          <Box className="about-us-testimonial" sx={{ backgroundColor: 'grey.100', p: 3, borderRadius: 2 }}>
            <Typography variant="body1" fontStyle="italic">
              "Proses pembelian yang mudah dan staf yang sangat membantu."
            </Typography>
            <Typography variant="body2" textAlign="right">- Siti</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
