import { motion } from "framer-motion";

import girl12 from "../../assets/images/girl123.png";
import profile from "../../assets/images/profile.png";
import { FaPlane, FaHotel, FaCar, FaUserFriends } from "react-icons/fa";

const HeroSection05 = () => {
    const travelOptions = [
    { icon: <FaPlane className="text-2xl" />, name: "Flights" },
    { icon: <FaHotel className="text-2xl" />, name: "Hotels" },
    { icon: <FaCar className="text-2xl" />, name: "Car Rentals" },
  ];

  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-8 md:py-14 lg:py-28 mx-auto flex flex-col md:flex-row md:items-center md:space-x-8 rounded-lg">
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-white">
        <div className="md:max-w-lg">
          <h1 className="text-2xl font-emilys font-extrabold sm:text-4xl md:text-5xl md:leading-tight">
            Fly Smarter,
            <br />
            Travel Better with Flyway
          </h1>
          <p className="mt-6 font-emilys text-white">
            Visas, flights, stays, and transfers—everything you need to take off
            with confidence and ease.
          </p>

          <div className="mt-6 w-full md:max-w-md">
             <motion.div
              className="flex"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="bg-transparent p-2 flex flex-wrap justify-center gap-2">
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
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative mt-10 w-full md:mt-0 md:w-1/2 flex items-center justify-center">
        <div className="absolute left-0 top-0 space-y-4">
          <div className="flex items-center rounded-md border border-gray-100 bg-white px-4 py-3 shadow-lg">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={profile}
              alt="Fly Way"
            />
            <div className="ml-4">
              <p className="text-lg font-emilys font-medium text-gray-900">Emma Clarke</p>
              <p className="text-xs font-emilys text-gray-500">
                Every trip has been unforgettable.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start rounded-md border border-gray-100 bg-white px-4 py-4 shadow-lg max-w-xs">
            <p className="text-lg font-emilys font-medium text-gray-900">
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
          className="z-10 mt-auto ml-auto h-80 w-auto object-cover border-b-2 border-black md:h-96"
          src={girl12}
          alt="Fly Way"
        />
      </div>
    </section>
  );
};

export default HeroSection05;
