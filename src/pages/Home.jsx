// src/pages/Home.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DestinationCard from "../components/DestinationCard";
import InteractiveGlobe from "../components/InteractiveGlobe";
import { World } from "../components/ui/Globe";
import { HeroScroll } from "../components/ui/HeroScroll";
import { SmoothScrollHero } from "../components/ui/SmoothScrollHero";

import bgImage from "../assets/images/hero2.jpg";

const Home = ({ openBookingModal }) => {
  const globeData = [
    {
      order: 1,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: "#6366f1",
    },
    {
      order: 2,
      startLat: 35.6762,
      startLng: 139.6503,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.4,
      color: "#ec4899",
    },
    {
      order: 3,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.5,
      color: "#f59e0b",
    },
    {
      order: 4,
      startLat: 40.4168,
      startLng: -3.7038,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.6,
      color: "#10b981",
    },
    {
      order: 5,
      startLat: 55.7558,
      startLng: 37.6173,
      endLat: 37.7749,
      endLng: -122.4194,
      arcAlt: 0.7,
      color: "#8b5cf6",
    },
    {
      order: 6,
      startLat: 25.276987,
      startLng: 55.296249,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.5,
      color: "#8b5cf6",
    },
    {
      order: 7,
      startLat: 24.7136,
      startLng: 46.6753,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.55,
      color: "#ef4444",
    },
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const destinations = [
    {
      name: "Bali",
      image: "bg-gradient-to-br from-amber-200 to-orange-500",
      description: "Island paradise with stunning beaches and temples",
      price: 1299,
    },
    {
      name: "Paris",
      image: "bg-gradient-to-br from-blue-400 to-indigo-700",
      description: "The city of lights, art, and romance",
      price: 899,
    },
    {
      name: "Tokyo",
      image: "bg-gradient-to-br from-rose-400 to-pink-600",
      description: "Where tradition meets futuristic innovation",
      price: 1499,
    },
    {
      name: "Santorini",
      image: "bg-gradient-to-br from-sky-300 to-blue-500",
      description: "Iconic white buildings and breathtaking sunsets",
      price: 1099,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section>
        <HeroScroll />
      </section>

      <section>
        <SmoothScrollHero />
      </section>

      <section
        className="relative bg-fixed bg-center bg-cover overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="relative z-10 bg-black bg-opacity-20 text-white py-16">
          <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4 md:px-8 gap-12">
            <div className="flex flex-col w-full lg:w-1/2 justify-center items-start text-left">
              <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-300 text-shadow-lg tracking-wide mb-4">
                Fly way Travel
              </h1>
              <h2 className="text-2xl text-shadow-lg md:text-4xl leading-tight md:leading-snug mb-4">
                Your gateway to unforgettable journeys.
              </h2>
              <p className="text-sm md:text-base text-shadow-lg text-white mb-6">
                Discover seamless travel experiences tailored just for you.
                Whether it's a quick getaway or a long holiday, Flyway Travel
                makes every trip effortless and memorable.
              </p>
              <a
                href="#"
                className="bg-yellow-300 hover:bg-yellow-400 text-black hover:text-white rounded-lg py-3 px-6 shadow-lg hover:shadow-xl border border-yellow-300 hover:border-transparent transition duration-300 ease-in-out"
              >
                Book Now
              </a>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <div className="w-full max-w-[500px] aspect-square">
                <World globeConfig={globeConfig} data={globeData} />
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <section className="py-16 sm:py-20 bg-gradient-to-r from-sky-500 to-indigo-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready for Your Next Journey?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-sky-100 mb-8 sm:mb-10 max-w-2xl mx-auto">
              Let our travel experts craft your perfect getaway. Special offers
              for first-time travelers!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openBookingModal()}
              className="bg-white text-sky-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all"
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
