// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import CustomBuildPage from './components/CustomBuildPage';
import AboutPage from './components/AboutUsPage';
import OrderConfirmation from './components/OrderConfirmation';
import ServiceBookingPage from './components/ServiceBookingPage';
import ContactUsPage from './components/ContactUsPage';
import PromotionDetailPage from './components/PromotionDetailPage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // 动画持续时间，单位为毫秒
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/custom-build" element={<CustomBuildPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/service-booking" element={<ServiceBookingPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/promotion-detail" element={<PromotionDetailPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
