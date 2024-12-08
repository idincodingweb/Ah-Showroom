// src/pages/CarDetailPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import CarDetail from '../components/CarDetail';

const CarDetailPage = ({ cars }) => {
  const { id } = useParams();
  const car = cars.find(car => car.id === parseInt(id));

  return (
    <div className="car-detail-page">
      {car ? <CarDetail car={car} /> : <p>Mobil tidak ditemukan</p>}
    </div>
  );
};

export default CarDetailPage;
