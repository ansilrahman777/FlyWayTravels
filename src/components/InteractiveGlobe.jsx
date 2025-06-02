// src/components/InteractiveGlobe.jsx
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const InteractiveGlobe = () => {
  const [rotation, setRotation] = useState(0);
  const [selectedRegion, setSelectedRegion] = useState(null);
  
  const regions = [
    { id: 'europe', name: 'Europe', color: 'from-blue-400 to-indigo-600', rotation: 0 },
    { id: 'asia', name: 'Asia', color: 'from-amber-400 to-orange-600', rotation: 90 },
    { id: 'americas', name: 'Americas', color: 'from-emerald-400 to-green-600', rotation: 180 },
    { id: 'africa', name: 'Africa', color: 'from-yellow-400 to-amber-600', rotation: 270 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
    setRotation(region.rotation);
  };

  return (
    <div className="flex flex-col lg:flex-row h-full">
      <div className="w-full lg:w-1/2 flex items-center justify-center relative">
        <motion.div 
          className="w-64 h-64 rounded-full bg-gradient-to-br from-sky-400 to-indigo-700 shadow-xl"
          animate={{ rotate: rotation }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        >
          {/* Globe continents - simplified representation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-green-400 to-emerald-700 opacity-30"></div>
          </div>
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-amber-400 rounded-full opacity-70"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-16 bg-blue-400 rounded-full opacity-70"></div>
          <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-emerald-400 rounded-full opacity-70"></div>
          <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-yellow-400 rounded-full opacity-70"></div>
        </motion.div>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-72 h-72 border-2 border-white/20 rounded-full"></div>
          <div className="w-80 h-80 border-2 border-white/10 rounded-full"></div>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Discover Our Regions</h3>
        
        <div className="space-y-4">
          {regions.map((region) => (
            <motion.div
              key={region.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleRegionClick(region)}
              className={`p-4 rounded-xl cursor-pointer transition-all ${
                selectedRegion?.id === region.id 
                  ? `bg-gradient-to-r ${region.color} text-white shadow-lg`
                  : 'bg-white hover:bg-gray-50 shadow'
              }`}
            >
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  selectedRegion?.id === region.id 
                    ? 'bg-white/20' 
                    : `bg-gradient-to-r ${region.color}`
                }`}>
                  <span className={`${selectedRegion?.id === region.id ? 'text-white' : 'text-white'}`}>
                    {region.name.charAt(0)}
                  </span>
                </div>
                <span className="ml-4 font-medium">{region.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        {selectedRegion && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-4 bg-white rounded-xl shadow"
          >
            <h4 className="font-bold text-gray-800 mb-2">Popular in {selectedRegion.name}</h4>
            <ul className="space-y-2">
              {selectedRegion.id === 'europe' && (
                <>
                  <li>Paris, France</li>
                  <li>Santorini, Greece</li>
                  <li>Rome, Italy</li>
                </>
              )}
              {selectedRegion.id === 'asia' && (
                <>
                  <li>Bali, Indonesia</li>
                  <li>Tokyo, Japan</li>
                  <li>Phuket, Thailand</li>
                </>
              )}
              {selectedRegion.id === 'americas' && (
                <>
                  <li>New York, USA</li>
                  <li>Rio de Janeiro, Brazil</li>
                  <li>Banff, Canada</li>
                </>
              )}
              {selectedRegion.id === 'africa' && (
                <>
                  <li>Marrakech, Morocco</li>
                  <li>Cape Town, South Africa</li>
                  <li>Serengeti, Tanzania</li>
                </>
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default InteractiveGlobe;