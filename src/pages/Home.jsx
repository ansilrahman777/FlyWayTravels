import { motion } from "framer-motion";
import HeroSection1 from "../components/HeroSection1";
import HeroSection2 from "../components/HeroSection2";
import HeroSection3 from "../components/HeroSection3";
import HeroSection4 from "../components/HeroSection4";
import HeroSection5 from "../components/HeroSection5";
import BasicFAQ from "../components/HeroSection6";



import heroimg4 from "../assets/images/hero4.jpg";



import { StaggerTestimonials } from "../components/StaggerTestimonials";
import BlurText from "../components/BlurText";
import SwooshText from "../components/SwooshText";
import CarouselComponent from "../components/CarouselComponent";
import WhyChooseUs from "../components/WhyChooseUs";


const Home = ({ openBookingModal }) => {



  return (
    <>
      <section
        className="relative bg-center bg-cover overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #d8dad7 5%, #43be5e 38%, #5f88b1 69%, #38d9a9 95%)",
          color: "#fff",
        }}      >
        <HeroSection1 />
        <HeroSection2 />

        <section className="relative py-20 px-4 sm:px-6 h-screen lg:px-8 overflow-hidden">
          <div className="flex items-center justify-center pointer-events-none">
            <SwooshText
              text="Flyway Travel"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-[5rem] md:text-[8rem] lg:text-[11rem] font-script tracking-wide leading-none text-black select-none"
            />
          </div>
        </section>

        <CarouselComponent />



        <HeroSection3 />

        <StaggerTestimonials />

        <HeroSection4 />
        <HeroSection5 />

        <WhyChooseUs />

        <BasicFAQ />
        
      </section>




    </>
  );
};

export default Home;
