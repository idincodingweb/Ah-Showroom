// src/components/Pagination.jsx
import React from 'react';
import { Box, Button } from '@mui/material';
import '../assets/style/Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 0) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <Box className="pagination">
      <Button onClick={handlePrevious} disabled={currentPage === 0}>
        {'<'} Previous
      </Button>
      <span>{currentPage + 1} of {totalPages}</span>
      <Button onClick={handleNext} disabled={currentPage === totalPages - 1}>
        Next {'>'}
      </Button>
    </Box>
  );
};

export default Pagination;
