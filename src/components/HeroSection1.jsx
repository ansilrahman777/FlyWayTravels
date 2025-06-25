import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import vedioFile from "../assets/vedios/vedio2.mp4";
import hero_fw_1 from "../assets/images/fw123.jpg";

const HeroSection1 = () => {
  return (
    <div className="relative text-white overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-screen object-cover z-0"
        src={vedioFile}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="relative z-10 flex h-screen flex-col justify-between">
        <div className="flex flex-1 items-center justify-center px-4">
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left max-w-5xl">
            <img
              src={hero_fw_1}
              alt="Placeholder image"
              className="mb-4 sm:mb-0 sm:mr-6 w-20 object-cover"
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
        </div>

        <motion.div
          className="absolute left-4 top-1/2 hidden -translate-y-1/2 text-xs lg:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span style={{ writingMode: "vertical-lr" }}>SCROLL</span>
          <FiArrowDown className="mx-auto" />
        </motion.div>
        <motion.div
          className="absolute right-4 top-1/2 hidden -translate-y-1/2 text-xs lg:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span style={{ writingMode: "vertical-lr" }}>SCROLL</span>
          <FiArrowDown className="mx-auto" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection1;