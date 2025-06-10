import { motion } from "framer-motion";
import { Hero2 } from "../components/Hero2";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";


import { FiArrowDown } from "react-icons/fi";
import { FaPlaneDeparture, FaHotel, FaShuttleVan, FaPassport, FaUmbrellaBeach, FaGlobe, FaShieldAlt, } from "react-icons/fa";

import CollapseCardFeatures from "../components/ui/CollapseCardFeatures";

import vedioFile from "../assets/vedios/vedio2.mp4"; // Adjust the path as needed

import hero_fw_1 from "../assets/images/fw123.jpg";
import img1234 from "../assets/images/img1234.jpg"; // Ensure the image path is correct
import heroimg4 from "../assets/images/hero4.jpg";
import traveller1 from "../assets/images/traveller1.png";


import flight1 from '../assets/images/fwm1.jpg';
import flight2 from '../assets/images/fwm2.jpg';
import flight3 from '../assets/images/fwm3.jpg';
import flight4 from '../assets/images/fwm4.jpg';
import flight5 from '../assets/images/fwm5.jpg';


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
        <div className="relative text-white overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-screen object-cover z-0"
            src={vedioFile}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="sticky top-0 flex h-screen flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-center px-4 mt-52">
              <img
                src={hero_fw_1}
                alt="Placeholder image"
                className="mr-2 h-full w-20  object-cover"
              />
              <h1 className="text-2xl font-bold text-white text-shadow-lg sm:text-5xl md:text-7xl">
                See the world. <br />
                Create memories. <br />
                Travel with{" "}
                <span className="inline-block -skew-x-[18deg] font-black text-blue-700">
                  FLYWAY.
                </span>
              </h1>
            </div>

            <motion.div
              className="absolute left-4 top-1/2 hidden -translate-y-1/2 text-xs lg:block"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <span
                style={{
                  writingMode: "vertical-lr",
                }}
              >
                SCROLL
              </span>
              <FiArrowDown className="mx-auto" />
            </motion.div>
            <motion.div
              className="absolute right-4 top-1/2 hidden -translate-y-1/2 text-xs lg:block"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <span
                style={{
                  writingMode: "vertical-lr",
                }}
              >
                SCROLL
              </span>
              <FiArrowDown className="mx-auto" />
            </motion.div>
          </div>
        </div>
        <Hero2 />
      </section>

      <section
        className="relative bg-center bg-cover overflow-hidden"
        style={{ backgroundImage: `url(${heroimg4})` }}
      >
        {/* HERO Section */}
        <div className="py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            {/* Left Text Content */}
            <div className="flex flex-col w-full lg:w-1/2 justify-center space-y-6 text-left">
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide text-white">
                Fly way Travel
              </h1>
              <h2 className="text-xl md:text-3xl text-white leading-tight md:leading-snug">
                Your gateway to unforgettable journeys.
              </h2>
              <p className="text-sm md:text-base text-white/90 text-justify">
                Discover seamless travel experiences tailored just for you. Whether it's a quick getaway or a long holiday, Flyway Travel makes every trip effortless and memorable.
              </p>
              <a
                href="#"
                className="bg-yellow-300 hover:bg-yellow-400 text-black hover:text-white rounded-lg py-3 px-6 shadow-lg hover:shadow-xl border border-yellow-300 hover:border-transparent transition duration-300 ease-in-out w-max"
              >
                Book Now
              </a>
            </div>

            {/* Right Visual Content */}
            <div className="w-full lg:w-1/2 flex justify-center items-center min-h-[400px]">
              <div className="relative w-full h-full max-w-[700px] aspect-video lg:aspect-square">
                <div className="absolute inset-0 bg-gray-300 z-10">
                  <h3 className="font-black text-white absolute top-0 left-0 mt-32 sm:mt-32 lg:mt-56 ml-0 lg:ml-12 z-30 text-xl sm:text-2xl lg:text-3xl xl:text-4xl transform rotate-90">
                    Book Now
                  </h3>
                  <div className="left-0 bottom-0 w-full h-16 absolute z-30 flex items-center justify-center mb-12 lg:mb-24 xl:mb-32">
                    <span className="bg-black/80 text-white uppercase font-black xl:text-2xl py-1 px-4">
                      Dream it. Book it. Live it
                    </span>
                  </div>

                  <img
                    src={img1234}
                    alt="Promo"
                    loading="lazy"
                    className="absolute left-0 top-0 w-full h-full object-contain z-10"
                  />
                  <div className="bg-gray-500 absolute inset-0 mt-16 -ml-8"></div>
                  <svg className="relative z-20 pt-8 -ml-16" xmlns="http://www.w3.org/2000/svg" data-name="Capa 1" viewBox="0 0 428.29 298.11"><defs /><path fill="#fff" d="M364.79 23.93v199h-271v-199h271m2.06-2.06H91.73V225h275.12V21.87z" /><path fill="#fff" d="M119.74 11.53L84.99 46.29l-2.16-9.75-9.37-1.78L108.22 0l1.35 9.81 10.17 1.72zM387.74 211.53l-34.75 34.76-2.16-9.75-9.37-1.78L376.21 200l1.36 9.81 10.17 1.72z" /><path fill="#b7791f" d="M336.29 92.93h92v5h-92zM336.29 77.93h92v5h-92zM336.29 62.93h92v5h-92zM336.29 122.93h92v5h-92zM336.29 107.93h92v5h-92z" /><circle cx="1.75" cy="296.36" r="1.75" fill="#24263a" /><circle cx="1.75" cy="286.99" r="1.75" fill="#24263a" /><circle cx="1.75" cy="277.62" r="1.75" fill="#24263a" /><circle cx="1.75" cy="268.26" r="1.75" fill="#24263a" /><circle cx="1.75" cy="258.89" r="1.75" fill="#24263a" /><circle cx="1.75" cy="249.53" r="1.75" fill="#24263a" /><circle cx="1.75" cy="240.16" r="1.75" fill="#24263a" /><circle cx="1.75" cy="230.8" r="1.75" fill="#24263a" /><circle cx="1.75" cy="221.43" r="1.75" fill="#24263a" /><circle cx="1.75" cy="212.06" r="1.75" fill="#24263a" /><circle cx="1.75" cy="202.7" r="1.75" fill="#24263a" /><circle cx="1.75" cy="193.33" r="1.75" fill="#24263a" /><circle cx="1.75" cy="183.97" r="1.75" fill="#24263a" /><circle cx="1.75" cy="174.6" r="1.75" fill="#24263a" /><circle cx="1.75" cy="165.23" r="1.75" fill="#24263a" /><circle cx="1.75" cy="155.87" r="1.75" fill="#24263a" /><circle cx="1.75" cy="146.5" r="1.75" fill="#24263a" /><circle cx="1.75" cy="137.14" r="1.75" fill="#24263a" /><path fill="#24263a" d="M1.75 126A1.75 1.75 0 110 127.77 1.75 1.75 0 011.75 126zM1.75 116.65A1.76 1.76 0 110 118.41a1.75 1.75 0 011.75-1.76zM10.78 294.6A1.76 1.76 0 119 296.36a1.76 1.76 0 011.78-1.76zM10.78 285.24A1.75 1.75 0 119 287a1.75 1.75 0 011.78-1.76zM10.78 275.87A1.76 1.76 0 119 277.62a1.76 1.76 0 011.78-1.75zM10.78 266.51A1.75 1.75 0 119 268.26a1.75 1.75 0 011.78-1.75zM10.78 257.14A1.75 1.75 0 119 258.89a1.75 1.75 0 011.78-1.75zM10.78 247.77A1.76 1.76 0 119 249.53a1.76 1.76 0 011.78-1.76zM10.78 238.41A1.75 1.75 0 119 240.16a1.75 1.75 0 011.78-1.75zM10.78 229A1.76 1.76 0 119 230.8a1.76 1.76 0 011.78-1.8zM10.78 219.68A1.75 1.75 0 119 221.43a1.75 1.75 0 011.78-1.75zM10.78 210.31A1.76 1.76 0 119 212.06a1.76 1.76 0 011.78-1.75zM10.78 201A1.75 1.75 0 119 202.7a1.75 1.75 0 011.78-1.7zM10.78 191.58A1.75 1.75 0 119 193.33a1.75 1.75 0 011.78-1.75zM10.78 182.21A1.76 1.76 0 119 184a1.76 1.76 0 011.78-1.79zM10.78 172.85A1.75 1.75 0 119 174.6a1.75 1.75 0 011.78-1.75zM10.78 163.48A1.76 1.76 0 119 165.23a1.76 1.76 0 011.78-1.75zM10.78 154.12A1.75 1.75 0 119 155.87a1.75 1.75 0 011.78-1.75zM10.78 144.75A1.75 1.75 0 119 146.5a1.76 1.76 0 011.78-1.75zM10.78 135.39A1.75 1.75 0 119 137.14a1.75 1.75 0 011.78-1.75zM10.78 126A1.75 1.75 0 119 127.77a1.75 1.75 0 011.78-1.77zM10.78 116.65A1.76 1.76 0 119 118.41a1.76 1.76 0 011.78-1.76z" /><circle cx="19.82" cy="296.36" r="1.75" fill="#24263a" /><circle cx="19.82" cy="286.99" r="1.75" fill="#24263a" /><circle cx="19.82" cy="277.62" r="1.75" fill="#24263a" /><circle cx="19.82" cy="268.26" r="1.75" fill="#24263a" /><circle cx="19.82" cy="258.89" r="1.75" fill="#24263a" /><circle cx="19.82" cy="249.53" r="1.75" fill="#24263a" /><circle cx="19.82" cy="240.16" r="1.75" fill="#24263a" /><circle cx="19.82" cy="230.8" r="1.75" fill="#24263a" /><circle cx="19.82" cy="221.43" r="1.75" fill="#24263a" /><circle cx="19.82" cy="212.06" r="1.75" fill="#24263a" /><circle cx="19.82" cy="202.7" r="1.75" fill="#24263a" /><circle cx="19.82" cy="193.33" r="1.75" fill="#24263a" /><circle cx="19.82" cy="183.97" r="1.75" fill="#24263a" /><circle cx="19.82" cy="174.6" r="1.75" fill="#24263a" /><circle cx="19.82" cy="165.23" r="1.75" fill="#24263a" /><circle cx="19.82" cy="155.87" r="1.75" fill="#24263a" /><circle cx="19.82" cy="146.5" r="1.75" fill="#24263a" /><circle cx="19.82" cy="137.14" r="1.75" fill="#24263a" /><path fill="#24263a" d="M19.82 126a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM19.82 116.65a1.76 1.76 0 11-1.75 1.76 1.75 1.75 0 011.75-1.76z" /><circle cx="28.85" cy="296.36" r="1.75" fill="#24263a" /><circle cx="28.85" cy="286.99" r="1.75" fill="#24263a" /><circle cx="28.85" cy="277.62" r="1.75" fill="#24263a" /><circle cx="28.85" cy="268.26" r="1.75" fill="#24263a" /><circle cx="28.85" cy="258.89" r="1.75" fill="#24263a" /><circle cx="28.85" cy="249.53" r="1.75" fill="#24263a" /><circle cx="28.85" cy="240.16" r="1.75" fill="#24263a" /><circle cx="28.85" cy="230.8" r="1.75" fill="#24263a" /><circle cx="28.85" cy="221.43" r="1.75" fill="#24263a" /><circle cx="28.85" cy="212.06" r="1.75" fill="#24263a" /><circle cx="28.85" cy="202.7" r="1.75" fill="#24263a" /><circle cx="28.85" cy="193.33" r="1.75" fill="#24263a" /><circle cx="28.85" cy="183.97" r="1.75" fill="#24263a" /><circle cx="28.85" cy="174.6" r="1.75" fill="#24263a" /><circle cx="28.85" cy="165.23" r="1.75" fill="#24263a" /><circle cx="28.85" cy="155.87" r="1.75" fill="#24263a" /><circle cx="28.85" cy="146.5" r="1.75" fill="#24263a" /><circle cx="28.85" cy="137.14" r="1.75" fill="#24263a" /><path fill="#24263a" d="M28.85 126a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM28.85 116.65a1.76 1.76 0 11-1.75 1.76 1.75 1.75 0 011.75-1.76zM37.88 294.6a1.76 1.76 0 11-1.75 1.76 1.76 1.76 0 011.75-1.76zM37.88 285.24a1.75 1.75 0 11-1.75 1.76 1.75 1.75 0 011.75-1.76zM37.88 275.87a1.76 1.76 0 11-1.75 1.75 1.76 1.76 0 011.75-1.75zM37.88 266.51a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 257.14a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 247.77a1.76 1.76 0 11-1.75 1.76 1.76 1.76 0 011.75-1.76zM37.88 238.41a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 229a1.76 1.76 0 11-1.75 1.76 1.76 1.76 0 011.75-1.76zM37.88 219.68a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 210.31a1.76 1.76 0 11-1.75 1.75 1.76 1.76 0 011.75-1.75zM37.88 201a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 191.58a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 182.21a1.76 1.76 0 11-1.75 1.79 1.76 1.76 0 011.75-1.79zM37.88 172.85a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 163.48a1.76 1.76 0 11-1.75 1.75 1.76 1.76 0 011.75-1.75zM37.88 154.12a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 144.75a1.75 1.75 0 11-1.75 1.75 1.76 1.76 0 011.75-1.75zM37.88 135.39a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 126a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 116.65a1.76 1.76 0 11-1.75 1.76 1.76 1.76 0 011.75-1.76z" /><path fill="#fff" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.219" d="M387.79 245.93l5.49 5.49-5.49 5.49v-10.98z" /><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.219" d="M62.79 256.91l-5.49-5.49 5.49-5.49v10.98z" /></svg>                  </div>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURE STRIP */}
        <div className="py-24 px-6 md:px-12 ">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                READY FOR TAKEOFF! <br />
                THE <span className="text-blue-500">WORLD</span> IS <br />
                CALLING YOUR NAME
              </h1>
              <p className="text-gray-600">
                Grab your passport and leave the rest to us. From tourist visas to flight tickets, hotel stays to smooth airport transfers—Flyway Travel has every part of your journey covered.
              </p>
              <div className="flex flex-wrap gap-4 text-gray-700 font-medium">
                {[
                  ["fas fa-passport", "Tourist Visa"],
                  ["fas fa-plane", "Flight Booking"],
                  ["fas fa-hotel", "Hotel Stay"],
                  ["fas fa-car", "Airport Transfer"],
                ].map(([icon, label]) => (
                  <button key={label} className="flex items-center space-x-2">
                    <i className={`${icon} text-blue-500`}></i>
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Traveler Image Section */}
            <div className="relative flex-1 hidden md:flex items-center justify-center">
              <div className="absolute w-80 h-80 md:w-96 md:h-96 bg-blue-500 rounded-full z-0"></div>
              <img
                src={traveller1}
                alt="Traveler"
                className="relative z-10 w-64 md:w-80 object-contain"
              />

              {/* Floating Tags */}
              {[
                ["fas fa-hotel", "Hotel Booking", "top-6 left-20 md:top-16 md:left-28 sm:top-16 sm:-left-8"],
                ["fas fa-plane-departure", "Flight Tickets", "top-2 right-16 md:top-1 md:right-24 sm:top-0 sm:right-6"],
                ["fas fa-car", "Airport Transfer", "bottom-14 left-1 md:bottom-14 md:left-20 sm:bottom-4 sm:left-6"],
                ["fas fa-user-tie", "Tour Guide", "bottom-20 right-12 md:bottom-24 md:right-20 sm:bottom-12 sm:right-6"],
              ].map(([icon, text, pos], idx) => (
                <div
                  key={idx}
                  className={`absolute ${pos} bg-white shadow rounded-full flex items-center px-3 py-1 space-x-2 z-20`}
                >
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

        {/* BENTO Section */}
        <div id="bento-section" className="py-24 px-6 md:px-12 ">
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
