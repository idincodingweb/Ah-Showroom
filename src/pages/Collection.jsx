// src/pages/Collection.jsx
import React, { useState } from 'react';
import carData from '../assets/data/carData';
import CarGrid from '../components/CarGrid';
import BrandFilter from '../components/BrandFilter';
import Pagination from '../components/Pagination';
import '../assets/style/Collection.css';

const Collection = () => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const carsPerPage = 6;

  const brands = [...new Set(carData.map((car) => car.brand))];

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
    setCurrentPage(0);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredCars = selectedBrand
    ? carData.filter((car) => car.brand === selectedBrand)
    : carData;

  const offset = currentPage * carsPerPage;
  const currentCars = filteredCars.slice(offset, offset + carsPerPage);
  const pageCount = Math.ceil(filteredCars.length / carsPerPage);

  return (
    <div className="collection">
      <section className="title"><h2>Koleksi Mobil PT. Ah Show Room</h2></section>
      <BrandFilter
        selectedBrand={selectedBrand}
        handleBrandChange={handleBrandChange}
        brands={brands}
      />
      <CarGrid cars={currentCars} />
      <Pagination
        currentPage={currentPage}
        totalPages={pageCount}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Collection;
