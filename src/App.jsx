// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import BookingModal from './components/BookingModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [destination, setDestination] = useState('');

  const openBookingModal = (dest = '') => {
    setDestination(dest);
    setIsModalOpen(true);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-sky-50 to-indigo-50">
        <Header openBookingModal={openBookingModal} />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home openBookingModal={openBookingModal} />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services openBookingModal={openBookingModal} />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        {isModalOpen && (
          <BookingModal 
            destination={destination} 
            onClose={() => setIsModalOpen(false)} 
          />
        )}
      </div>
    </Router>
  );
}

export default App;