import { motion } from "framer-motion";
import HeroSection2 from "../components/HeroSection2";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import CollapseCardFeatures from "../components/ui/CollapseCardFeatures";
import ImageCarousel from "../components/ImageCarousel";

import HeroSection3 from "../components/HeroSection3";

import { FaPlaneDeparture, FaHotel, FaShuttleVan, FaPassport, FaUmbrellaBeach, FaGlobe, FaShieldAlt, } from "react-icons/fa";



import img1234 from "../assets/images/img1234.jpg"; // Ensure the image path is correct
import heroimg4 from "../assets/images/hero4.jpg";
import traveller1 from "../assets/images/traveller1.png";


import flight1 from '../assets/images/fwm1.jpg';
import flight2 from '../assets/images/fwm2.jpg';
import flight3 from '../assets/images/fwm3.jpg';
import flight4 from '../assets/images/fwm4.jpg';
import flight5 from '../assets/images/fwm5.jpg';
import HeroSection1 from "../components/HeroSection1";
import HeroSection4 from "../components/HeroSection4";


const Home = ({ openBookingModal }) => {

  const items = [
    {
      title: "Flight Bookings Made Easy",
      description: "Book flights at the best rates with seamless support for all major airlines worldwide.",
      image: flight1,
      icon: <FaPlaneDeparture className="h-5 w-5 text-white" />,
    },
    {
      title: "Comfortable Hotel Stays",
      description: "Choose from top-rated hotels around the world, perfectly suited to your travel style.",
      image: flight2,
      icon: <FaHotel className="h-5 w-5 text-white" />,
    },
    {
      title: "Smooth Airport Transfers",
      description: "Start and end your trip stress-free with reliable airport pickup and drop services.",
      image: flight3,
      icon: <FaShuttleVan className="h-5 w-5 text-white" />,
    },
    {
      title: "Expert Visa Assistance",
      description: "Get complete tourist visa support for any destination—fast processing, no confusion.",
      image: flight4,
      icon: <FaPassport className="h-5 w-5 text-white" />,
    },
    {
      title: "Holiday Packages",
      description: "All-in-one holiday deals with flights, hotels, transfers, and tours—crafted just for you.",
      image: flight5,
      icon: <FaUmbrellaBeach className="h-5 w-5 text-white" />,
    },
    {
      title: "Worldwide Travel Services",
      description: "Wherever you're headed, our global network ensures a smooth, supported experience.",
      image: flight5,
      icon: <FaGlobe className="h-5 w-5 text-white" />,
    },
    {
      title: "Travel Insurance",
      description: "Stay protected with travel insurance plans tailored to your trip, from delays to emergencies.",
      image: flight5,
      icon: <FaShieldAlt className="h-5 w-5 text-white" />,
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
        <HeroSection1 />
        <HeroSection2 />
      </section>

      <section
        className="relative bg-center bg-cover overflow-hidden"
        style={{ backgroundImage: `url(${heroimg4})` }}
      >
        <HeroSection4 />

        <HeroSection3 />

        <ImageCarousel />

        <div className="py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                READY FOR TAKEOFF! <br />
                THE <span className="text-white">WORLD</span> IS <br />
                CALLING YOUR NAME
              </h1>
              <p className="text-white text-justify">
                Grab your passport and leave the rest to us. From tourist visas to flight tickets, hotel stays to smooth airport transfers—Flyway Travel has every part of your journey covered.
              </p>
              <div className="flex flex-wrap gap-4 text-white font-medium">
                {[
                  ["fas fa-passport", "Tourist Visa"],
                  ["fas fa-plane", "Flight Booking"],
                  ["fas fa-hotel", "Hotel Stay"],
                  ["fas fa-car", "Airport Transfer"],
                ].map(([icon, label]) => (
                  <button key={label} className="flex items-center space-x-2">
                    <i className={`${icon} text-white`}></i>
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="relative flex-1 hidden md:flex items-center justify-center">
              <div className="absolute w-80 h-80 md:w-96 md:h-96 bg-blue-500 rounded-full z-0"></div>
              <img
                src={traveller1}
                alt="Traveler"
                className="relative z-10 w-64 md:w-80 object-contain"
              />
              {[
                ["fas fa-hotel", "Hotel Booking", "top-6 left-20 md:top-16 md:left-28 sm:top-16 sm:-left-8"],
                ["fas fa-plane-departure", "Flight Tickets", "top-2 right-16 md:top-1 md:right-24 sm:top-0 sm:right-6"],
                ["fas fa-car", "Airport Transfer", "bottom-14 left-1 md:bottom-14 md:left-20 sm:bottom-4 sm:left-6"],
                ["fas fa-user-tie", "Tour Guide", "bottom-20 right-12 md:bottom-24 md:right-20 sm:bottom-12 sm:right-6"],
              ].map(([icon, text, pos], idx) => (
                <div key={idx} className={`absolute ${pos} bg-white shadow rounded-full flex items-center px-3 py-1 space-x-2 z-20`}>
                  <i className={`${icon} text-orange-500`}></i>
                  <span className="text-xs md:text-sm font-medium">{text}</span>
                </div>
              ))}

              <div className="absolute bottom-1 bg-orange-500 text-white rounded-full flex items-center px-4 py-2 space-x-2 text-xs md:text-sm shadow-lg z-20">
                <i className="fas fa-headset"></i>
                <span>+12 345 6789 0</span>
              </div>
            </div>
          </div>
        </div>

        <div id="bento-section" className="py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-neutral-800 dark:text-white">
              Why Travel with Flyway?
            </h2>
            <BentoGrid className="max-w-6xl mx-auto">
              {items.map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={
                    <div className="w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-in-out group-hover/bento:scale-110"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                    </div>
                  }
                  icon={item.icon}
                  className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
              ))}
            </BentoGrid>
          </div>
        </div>




        <CollapseCardFeatures />
      </section>
    </motion.div>
  );
};

export default Home;
