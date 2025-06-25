import { motion } from "framer-motion";
import HeroSection2 from "../components/HeroSection2";
import ImageCarousel from "../components/ImageCarousel";

import HeroSection3 from "../components/HeroSection3";
import BasicFAQ from "../components/HeroSection6";


import heroimg4 from "../assets/images/hero4.jpg";



import HeroSection1 from "../components/HeroSection1";
import HeroSection4 from "../components/HeroSection4";
import HeroSection5 from "../components/HeroSection5";
import { StaggerTestimonials } from "../components/StaggerTestimonials";


const Home = ({ openBookingModal }) => {



  return (
    <>
      <section>
        <HeroSection1 />
        <HeroSection2 />
      </section>
      <section
        className="relative bg-center bg-cover overflow-hidden"
        style={{ backgroundImage: `url(${heroimg4})` }}
      >
        {/* <ImageCarousel /> */}

        <section className="relative py-20 px-4 sm:px-6 h-screen lg:px-8 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <p className="text-[5rem] md:text-[8rem] lg:text-[11rem] font-script tracking-wide leading-none text-black select-none">
              Flyway Travel
            </p>
            
          </div>

          <div className="relative max-w-7xl mx-auto text-center flex flex-col items-center justify-center h-full ">
            <p className="max-w-2xl mx-auto text-xl text-white font-light leading-relaxed">
              Take flight into unforgettable experiences. Whether it's a weekend escape or a worldwide adventure — Fly Way makes it effortless and unforgettable.
            </p>
          </div>


        </section>

        

        <HeroSection3 />

        <StaggerTestimonials />

        <HeroSection4 />

        <HeroSection5 />

        <BasicFAQ />
      </section>




    </>
  );
};

export default Home;
