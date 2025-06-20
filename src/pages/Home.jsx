import { motion } from "framer-motion";
import HeroSection2 from "../components/HeroSection2";
import ImageCarousel from "../components/ImageCarousel";

import HeroSection3 from "../components/HeroSection3";


import heroimg4 from "../assets/images/hero4.jpg";



import HeroSection1 from "../components/HeroSection1";
import HeroSection4 from "../components/HeroSection4";
import HeroSection5 from "../components/HeroSection5";
import { StaggerTestimonials } from "../components/StaggerTestimonials";


const Home = ({ openBookingModal }) => {

  

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
        <ImageCarousel />

        <HeroSection3 />

        <StaggerTestimonials />

        <HeroSection4 />
  
        <HeroSection5 />

      </section>
    </motion.div>
  );
};

export default Home;
