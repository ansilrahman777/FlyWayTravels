import {
  FaPassport,
  FaPlane,
  FaHotel,
  FaCar,
  FaUserTie,
  FaHeadset,
  FaPlaneDeparture,
} from "react-icons/fa";
import traveller1 from "../../assets/images/traveller1.png";

const HeroSection07 = () => {
  const services = [
    { icon: <FaPassport className="text-white" />, label: "Tourist Visa" },
    { icon: <FaPlane className="text-white" />, label: "Flight Booking" },
    { icon: <FaCar className="text-white" />, label: "Airport Transfer" },
  ];

  const floatingTags = [
    {
      icon: <FaHotel className="text-orange-500" />,
      text: "Hotel Booking",
      pos: "top-6 left-16 md:top-14 md:left-24",
    },
    {
      icon: <FaPlaneDeparture className="text-orange-500" />,
      text: "Flight Tickets",
      pos: "top-2 right-14 md:top-1 md:right-20",
    },
    {
      icon: <FaCar className="text-orange-500" />,
      text: "Airport Transfer",
      pos: "bottom-14 left-2 md:bottom-14 md:left-16",
    },
    {
      icon: <FaUserTie className="text-orange-500" />,
      text: "Tour Guide",
      pos: "bottom-16 right-8 md:bottom-20 md:right-16",
    },
  ];

  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-8 md:py-14 lg:py-28 relative text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Text Section */}
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl font-emilys md:text-5xl font-bold leading-tight">
            READY FOR TAKEOFF! <br />
            THE <span className="text-orange-500">WORLD</span> IS <br />
            CALLING YOUR NAME
          </h1>
          <p className="text-justify font-emilys max-w-xl">
            Grab your passport and leave the rest to us. From tourist visas to
            flight tickets, hotel stays to smooth airport transfers—Flyway
            Travel has every part of your journey covered.
          </p>

          <div className="flex flex-wrap gap-4 font-medium">
            {services.map(({ icon, label }) => (
              <button
                key={label}
                className="flex items-center font-emilys bg-gradient-to-br space-x-2 from-blue-50/10 to-emerald-50 rounded-md px-4 py-2 text-gray-700 font-medium hover:bg-gradient-to-r hover:from-blue-500 hover:to-emerald-500 hover:text-white cursor-pointer transition-all duration-300"
                type="button"
              >
                {icon}
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Image & Floating Tags Section */}
        <div className="relative flex-1 hidden md:flex items-center justify-center">
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-blue-100 rounded-full z-0 opacity-30"></div>
          <img
            src={traveller1}
            alt="Traveler"
            className="relative z-10 w-60 md:w-80 object-contain"
          />

          {floatingTags.map(({ icon, text, pos }, idx) => (
            <div
              key={idx}
              className={`absolute ${pos} bg-white shadow-md rounded-full flex items-center px-3 py-1 space-x-2 z-20`}
            >
              {icon}
              <span className="text-xs font-emilys md:text-sm font-medium text-gray-900">
                {text}
              </span>
            </div>
          ))}

          <div className="absolute bottom-2 font-emilys bg-orange-500 text-white rounded-full flex items-center px-4 py-2 space-x-2 text-xs md:text-sm shadow-lg z-20">
            <FaHeadset />
            <span>+12 345 6789 0</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection07;
