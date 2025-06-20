
import traveller1 from "../assets/images/traveller1.png";

const HeroSection4 = () => {
    return (

        <div className="px-4 py-12 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">

            {/* Text Section */}
            <div className="flex-1 space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                READY FOR TAKEOFF! <br />
                THE <span className="text-white">WORLD</span> IS <br />
                CALLING YOUR NAME
              </h1>
              <p className="text-white text-justify">
                Grab your passport and leave the rest to us. From tourist visas to flight tickets, hotel stays to smooth airport transfers—Flyway Travel has every part of your journey covered.
              </p>

              <div className="flex flex-wrap gap-4 text-white font-medium">
                {[
                  ["fas fa-passport", "Tourist Visa"],
                  ["fas fa-plane", "Flight Booking"],
                  ["fas fa-hotel", "Hotel Stay"],
                  ["fas fa-car", "Airport Transfer"],
                ].map(([icon, label]) => (
                  <button key={label} className="flex items-center space-x-2">
                    <i className={`${icon} text-white`}></i>
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="relative flex-1 hidden md:flex items-center justify-center">
              <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-blue-500 rounded-full z-0"></div>
              <img
                src={traveller1}
                alt="Traveler"
                className="relative z-10 w-60 md:w-80 object-contain"
              />
              {[
                ["fas fa-hotel", "Hotel Booking", "top-6 left-16 md:top-14 md:left-24"],
                ["fas fa-plane-departure", "Flight Tickets", "top-2 right-14 md:top-1 md:right-20"],
                ["fas fa-car", "Airport Transfer", "bottom-14 left-2 md:bottom-14 md:left-16"],
                ["fas fa-user-tie", "Tour Guide", "bottom-16 right-8 md:bottom-20 md:right-16"],
              ].map(([icon, text, pos], idx) => (
                <div
                  key={idx}
                  className={`absolute ${pos} bg-white shadow rounded-full flex items-center px-3 py-1 space-x-2 z-20`}
                >
                  <i className={`${icon} text-orange-500`}></i>
                  <span className="text-xs md:text-sm font-medium">{text}</span>
                </div>
              ))}

              <div className="absolute bottom-2 bg-orange-500 text-white rounded-full flex items-center px-4 py-2 space-x-2 text-xs md:text-sm shadow-lg z-20">
                <i className="fas fa-headset"></i>
                <span>+12 345 6789 0</span>
              </div>
            </div>
          </div>
        </div>
        

    )
}

export default HeroSection4