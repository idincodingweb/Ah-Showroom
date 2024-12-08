// src/App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Collection from './pages/Collection';
import CarDetailPage from './pages/CarDetailPage';
import About from './pages/About';
import Contact from './pages/Contact';
import DeveloperInfo from './components/DeveloperInfo';
import carData from './assets/data/carData';
import './assets/style/App.css';

const App = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    setCars(carData); // Set data mobil langsung dari file JSX
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home cars={cars} />} />
        <Route path="/collection" element={<Collection cars={cars} />} />
        <Route path="/car/:id" element={<CarDetailPage cars={cars} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/developerinfo" element={<DeveloperInfo />} />
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
