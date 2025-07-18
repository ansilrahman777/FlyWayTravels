import { motion } from "framer-motion";

import girl12 from "../../assets/images/girl123.png";
import profile from "../../assets/images/profile.png";
import img1 from "../../assets/images/girl213.png";
import { FaPlane, FaHotel, FaCar } from "react-icons/fa";

const HeroSection05 = () => {
  const travelOptions = [
    { icon: <FaPlane className="text-2xl" />, name: "Flights" },
    { icon: <FaHotel className="text-2xl" />, name: "Hotels" },
    { icon: <FaCar className="text-2xl" />, name: "Car Rentals" },
  ];

  return (
    <section className="w-full  text-white overflow-hidden">
      {/* TOP HERO */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col md:flex-row md:items-center md:gap-12">
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block py-1 font-emilys text-sm font-semibold tracking-wider text-primary uppercase rounded-full bg-primary/10 mb-4">
            About Flyway Travel
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-emilys font-bold leading-tight mb-6">
            <span className="text-gradient">Your Trusted</span> Partner In{" "}
            <span className="text-gradient">Global Journeys</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-emilys mb-8 max-w-xl mx-auto md:mx-0">
            Flyway Travel makes travel simple, seamless, and memorable. From visa
            assistance to tickets, hotels, transfers, and custom packages — we
            guide you every step of the way to your dream destination.
          </p>
          <div className="mt-10 flex items-center justify-center md:justify-start gap-4">
            <div className="flex -space-x-2">
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="https://randomuser.me/api/portraits/men/15.jpg"
                alt="Client"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="https://randomuser.me/api/portraits/women/30.jpg"
                alt="Client"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="https://randomuser.me/api/portraits/men/44.jpg"
                alt="Client"
              />
            </div>
            <div>
              <div className="flex items-center">
                ✈️ 🌍 ⭐️⭐️⭐️⭐️⭐️
              </div>
              <p className="text-sm font-emilys">Thousands trust Flyway for smooth journeys</p>
            </div>
          </div>
        </div>

        <div className="flex-1 mt-12 md:mt-0 flex justify-center md:justify-end">
          <img
            src={img1}
            alt="Traveling the World"
            
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
      </div>

      {/* BOTTOM CONTENT */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row md:items-center md:gap-12">
        {/* LEFT IMAGE + TESTIMONIAL */}
        <div className="relative flex-1 mb-12 md:mb-0 flex justify-center md:justify-start">
          <div className="absolute -left-2 top-0 space-y-4">
            <div className="flex items-center rounded-md border border-gray-100 bg-white px-4 py-3 shadow-lg">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src={profile}
                alt="Fly Way"
              />
              <div className="ml-4">
                <p className="text-base font-emilys font-medium text-gray-900">Emma Clarke</p>
                <p className="text-xs font-emilys text-gray-500">
                  Every trip has been unforgettable.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start rounded-md border border-gray-100 bg-white px-4 py-4 shadow-lg max-w-xs">
              <p className="text-base font-emilys font-medium text-gray-900">
                Why People Choose Us
              </p>
              <p className="mt-2 font-emilys text-xs text-gray-500">
                Expert planning. Personalized service. Zero stress.
              </p>
              <p className="mt-1 font-emilys text-xs text-gray-500">
                Wherever you go, Flyway Travel gets you there.
              </p>
            </div>
          </div>
          <img
            src={girl12}
            alt="Fly Way"
            className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover border-b-2 border-black rounded-md"
          />
        </div>

        {/* RIGHT TEXT + OPTIONS */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-emilys mb-6">
            Fly Smarter,
            <br />
            Travel Better with Flyway
          </h2>
          <p className="mb-6 max-w-xl text-base sm:text-lg md:text-xl mx-auto md:mx-0 font-emilys">
            Visas, flights, stays, and transfers — everything you need to take off
            with confidence and ease.
          </p>

          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {travelOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                className="flex items-center bg-gradient-to-br from-blue-50/10 to-emerald-50 rounded-md px-4 py-2 text-gray-700 font-medium hover:bg-gradient-to-r hover:from-blue-500 hover:to-emerald-500 hover:text-white cursor-pointer transition-all duration-300"
              >
                {option.icon}
                <span className="ml-2 font-emilys">{option.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection05;
