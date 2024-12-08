// src/pages/Home.jsx
import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import CarGrid from '../components/CarGrid';
import Pagination from '../components/Pagination';
import carData from '../assets/data/carData';
import '../assets/style/Home.css';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const carsPerPage = 6;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const offset = currentPage * carsPerPage;
  const currentCars = carData.slice(offset, offset + carsPerPage);
  const pageCount = Math.ceil(carData.length / carsPerPage);

  return (
    <div className="home">
      <HeroSection />
      <section className="featured-cars">
        <h2>Koleksi Mobil Terbaru</h2>
        <CarGrid cars={currentCars} />
        <Pagination
          currentPage={currentPage}
          totalPages={pageCount}
          onPageChange={handlePageChange}
        />
      </section>
    </div>
  );
};

export default Home;
