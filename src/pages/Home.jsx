// src/pages/Home.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DestinationCard from '../components/DestinationCard';
import InteractiveGlobe from '../components/InteractiveGlobe';
import { World } from "../components/ui/Globe";

import vedioFile from '../assets/vedios/vedio1.mp4';        // Adjust the path as needed
import bgImage from '../assets/images/fw8.jpg';
import h1 from '../assets/images/hero1/h1.png';


const Home = ({ openBookingModal }) => {

  const globeData = [
    { order: 1, startLat: 51.5072, startLng: -0.1276, endLat: 40.7128, endLng: -74.0060, arcAlt: 0.3, color: '#6366f1' },
    { order: 2, startLat: 35.6762, startLng: 139.6503, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.4, color: '#ec4899' },
    { order: 3, startLat: 28.6139, startLng: 77.2090, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.5, color: '#f59e0b' },
    { order: 4, startLat: 40.4168, startLng: -3.7038, endLat: -22.9068, endLng: -43.1729, arcAlt: 0.6, color: '#10b981' },
    { order: 5, startLat: 55.7558, startLng: 37.6173, endLat: 37.7749, endLng: -122.4194, arcAlt: 0.7, color: '#8b5cf6' },
    { order: 6, startLat: 25.276987, startLng: 55.296249, endLat: 28.6139, endLng: 77.2090, arcAlt: 0.5, color: '#8b5cf6' },
    { order: 7, startLat: 24.7136, startLng: 46.6753, endLat: 40.7128, endLng: -74.0060, arcAlt: 0.55, color: '#ef4444' }

  ];

  const globeConfig = {
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    ambientLight: "#38bdf8",
    autoRotate: true,
  };


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const destinations = [
    {
      name: "Bali",
      image: "bg-gradient-to-br from-amber-200 to-orange-500",
      description: "Island paradise with stunning beaches and temples",
      price: 1299
    },
    {
      name: "Paris",
      image: "bg-gradient-to-br from-blue-400 to-indigo-700",
      description: "The city of lights, art, and romance",
      price: 899
    },
    {
      name: "Tokyo",
      image: "bg-gradient-to-br from-rose-400 to-pink-600",
      description: "Where tradition meets futuristic innovation",
      price: 1499
    },
    {
      name: "Santorini",
      image: "bg-gradient-to-br from-sky-300 to-blue-500",
      description: "Iconic white buildings and breathtaking sunsets",
      price: 1099
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}

      <section className="relative">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover z-0"
          poster={bgImage}
        >
          <source src={vedioFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="relative z-10 bg-black bg-opacity-70 text-white py-20">
          <div className="container mx-auto flex flex-col lg:flex-row items-center my-12 md:my-24 min-h-[70vh]">

            {/* Text Block */}
            <div className="flex flex-col w-full lg:w-1/2 justify-center items-start p-8">
              <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">Fly Way Travel</h1>
              <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
                Discover the World, One Flight at a Time
              </h2>
              <p className="text-sm md:text-base text-gray-50 mb-4">
                Plan unforgettable journeys with the best travel packages across the globe. From Dubai to London,
                your dream vacation starts here.
              </p>
              <a
                href="#"
                className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
              >
                Book Now
              </a>
            </div>

            {/* Globe Block */}
            <div className="w-full lg:w-1/2 p-8 flex justify-center items-center">
              <div className="w-full aspect-square max-w-[500px]">
                <World globeConfig={globeConfig} data={globeData} />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="relative pt-32 pb-20 px-4 min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-coast-with-a-cruise-ship-4158-large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 text-white"
            >
              Discover Your Next Adventure
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-white/90 max-w-2xl mx-auto mb-10"
            >
              Explore the world with our expertly crafted travel experiences.
              Your dream vacation is just a click away.
            </motion.p>
            <motion.div variants={itemVariants}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openBookingModal()}
                className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all mr-4"
              >
                Book Your Trip
              </motion.button>
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-sky-600 px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Explore Services
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      <section className="py-20 bg-gradient-to-r from-sky-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-gray-800 mb-4"
            >
              Explore Our Destinations
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "200px" }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-sky-500 to-indigo-600 mx-auto rounded-full"
            />
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 h-[500px]">
            <World globeConfig={globeConfig} data={globeData} />
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-gray-800 mb-4"
            >
              Popular Destinations
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-sky-500 to-indigo-600 mx-auto rounded-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((destination, index) => (
              <DestinationCard
                key={index}
                destination={destination}
                index={index}
                openBookingModal={openBookingModal}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Globe */}
      <section className="py-20 bg-gradient-to-r from-sky-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-gray-800 mb-4"
            >
              Explore Our Destinations
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "200px" }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-sky-500 to-indigo-600 mx-auto rounded-full"
            />
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 h-[500px]">
            <InteractiveGlobe />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready for Your Next Journey?
            </h2>
            <p className="text-sky-100 text-xl mb-10">
              Let our travel experts craft your perfect getaway. Special offers for first-time travelers!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openBookingModal()}
              className="bg-white text-sky-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;