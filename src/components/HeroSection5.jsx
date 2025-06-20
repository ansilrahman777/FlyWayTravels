
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import flight1 from '../assets/images/fwm1.jpg';
import flight2 from '../assets/images/fwm2.jpg';
import flight3 from '../assets/images/fwm3.jpg';
import flight4 from '../assets/images/fwm4.jpg';
import flight5 from '../assets/images/fwm5.jpg';

import { FaPlaneDeparture, FaHotel, FaShuttleVan, FaPassport, FaUmbrellaBeach, FaGlobe, FaShieldAlt, } from "react-icons/fa";


const HeroSection5 = () => {

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
        

    )
}

export default HeroSection5