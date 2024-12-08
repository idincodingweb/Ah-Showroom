import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../assets/style/Footer.css'

const Footer = () => (
  <Box className="footer" sx={{ backgroundColor: 'primary.main', color: 'white', py: 3, textAlign: 'center', mt: 'auto' }}>
    <Typography variant="body2" component="p">
      © 2024 Showroom Mobil. All rights reserved.
    </Typography>
    <Box className="footer-icons" sx={{ mt: 2 }}>
      <IconButton href="https://facebook.com" target="_blank" rel="noopener noreferrer" color="inherit">
        <FaFacebook />
      </IconButton>
      <IconButton href="https://twitter.com" target="_blank" rel="noopener noreferrer" color="inherit">
        <FaTwitter />
      </IconButton>
      <IconButton href="https://instagram.com" target="_blank" rel="noopener noreferrer" color="inherit">
        <FaInstagram />
      </IconButton>
    </Box>
  </Box>
);

export default Footer;
