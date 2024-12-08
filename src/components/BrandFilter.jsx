// src/components/BrandFilter.jsx
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const BrandFilter = ({ selectedBrand, handleBrandChange, brands }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="brand-select-label">Merek</InputLabel>
      <Select
        labelId="brand-select-label"
        value={selectedBrand}
        onChange={handleBrandChange}
        label="Merek"
      >
        <MenuItem value="">
          <em>Semua</em>
        </MenuItem>
        {brands.map((brand) => (
          <MenuItem key={brand} value={brand}>
            {brand}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default BrandFilter;
