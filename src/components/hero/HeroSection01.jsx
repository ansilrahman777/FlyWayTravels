import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import webmFile from "../../assets/videos/video.webm";
import mp4File from "../../assets/videos/video.mp4";
import hero_fw_1 from "../../assets/images/fw123.jpg";
import heroPoster from "../../assets/images/poster.jpg";
import BlurText from "../BlurText";

const HeroSection01 = () => {
  return (
    <div className="relative text-white overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-screen object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        poster={heroPoster}

      >
        <source src={webmFile} type="video/webm" />
        <source src={mp4File} type="video/mp4" />
      </video>
      <div className="relative z-10 flex h-screen flex-col justify-between">
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="flex items-stretch justify-center gap-4">
            <div className="flex items-center justify-center w-20 sm:w-24 md:w-28">
              <img
                src={hero_fw_1}
                alt="Placeholder image"
                className="object-cover w-full h-full"
              />
            </div>
            <h1 className="text-3xl font-rubikvinyl text-blue-600 leading-tight sm:text-5xl md:text-7xl">
              See the world. <br />
              Create memories. <br />
              Travel with{" "}
              <span className="inline-block font-black text-neutral-950">
                <BlurText
                  text="FLYWAY"
                  delay={1000}
                  animateBy="words"
                  direction="top"
                />
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

export default HeroSection01;
