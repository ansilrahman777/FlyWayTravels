// src/components/WhyChooseUs.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaRocket, 
  FaPlane,
  FaHotel,
  FaCar,
  FaUserFriends,
  FaPassport, 
  FaTicketAlt, 
  FaWallet, 
  FaMapMarkedAlt,
  FaGlobe,
  FaUserCheck,
  FaHeadset,
  FaStar
} from 'react-icons/fa';
import { cn } from '../lib/utils';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaPassport className="text-3xl" />,
      title: "Hassle-Free Visa Processing",
      subtitle: "Smooth documentation & approval",
      description: "Whether it's your first trip or your tenth, we simplify the visa process with expert guidance, documentation checks, and real-time updates—so you never miss a step.",
      features: ["Expert guidance", "Documentation checks", "Real-time updates", "Stress-free process"],
      color: "blue",
      background: "bg-[url('https://images.unsplash.com/photo-1506970845240-76861bd7dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]"
    },
    {
      icon: <FaTicketAlt className="text-3xl" />,
      title: "Quick & Reliable Ticket Booking",
      subtitle: "Best flights at the best prices",
      description: "We find the best flights at competitive prices. From economy to business class, our ticketing ensures smooth bookings, flexible options, and support for changing plans.",
      features: ["Best prices", "Flexible options", "Full support", "Smooth booking"],
      color: "emerald",
      background: "bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&q=80')]"
    },
    {
      icon: <FaWallet className="text-3xl" />,
      title: "Affordable Travel, Premium Service",
      subtitle: "Quality experiences without the high cost",
      description: "Great experiences don't need a high price tag. We curate cost-effective options for flights, hotels, and transfers—without compromising quality or comfort.",
      features: ["Cost-effective options", "No quality compromise", "Premium service", "Curated experiences"],
      color: "amber",
      background: "bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]"
    },
    {
      icon: <FaMapMarkedAlt className="text-3xl" />,
      title: "Local Guides & Support",
      subtitle: "Explore like a local, not a tourist",
      description: "We connect you with experienced guides who know the best spots and hidden gems—making every trip personal and memorable with 24/7 support.",
      features: ["Experienced guides", "Hidden gems", "Personalized trips", "24/7 support"],
      color: "rose",
      background: "bg-[url('https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]"
    }
  ];

  const travelOptions = [
    { icon: <FaPlane className="text-2xl" />, name: "Flights" },
    { icon: <FaHotel className="text-2xl" />, name: "Hotels" },
    { icon: <FaCar className="text-2xl" />, name: "Car Rentals" },
    { icon: <FaUserFriends className="text-2xl" />, name: "Experiences" },
  ];

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute bottom-10 -left-20 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <div className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white py-2 px-6 rounded-full text-sm font-medium inline-flex items-center">
              <FaRocket className="mr-2" /> TRAVEL WITH CONFIDENCE
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Why Travelers Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">Flyway</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Premium travel services that take the stress out of planning, so you can focus on the experience
          </motion.p>
        </div>

        {/* Travel options animation */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="bg-white rounded-full shadow-lg p-2 flex flex-wrap justify-center gap-2">
            {travelOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                className="flex items-center bg-gradient-to-br from-blue-50 to-emerald-50 rounded-full px-4 py-2 text-gray-700 font-medium hover:bg-gradient-to-r hover:from-blue-500 hover:to-emerald-500 hover:text-white cursor-pointer transition-all duration-300"
              >
                {option.icon}
                <span className="ml-2">{option.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features grid with flip cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {features.map((feature, index) => (
            <FeatureFlipCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              subtitle={feature.subtitle}
              description={feature.description}
              features={feature.features}
              color={feature.color}
              background={feature.background}
            />
          ))}
        </div>

        {/* Statistics Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white shadow-xl overflow-hidden relative"
        >
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/10"></div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <StatCard 
                icon={<FaGlobe className="text-3xl text-white" />}
                number="150+" 
                label="Countries Covered" 
                delay={0.1} 
              />
              <StatCard 
                icon={<FaUserCheck className="text-3xl text-white" />}
                number="500K+" 
                label="Happy Travelers" 
                delay={0.2} 
              />
              <StatCard 
                icon={<FaHeadset className="text-3xl text-white" />}
                number="24/7" 
                label="Global Support" 
                delay={0.3} 
              />
              <StatCard 
                icon={<FaStar className="text-3xl text-white" />}
                number="98%" 
                label="Satisfaction Rate" 
                delay={0.4} 
              />
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Ready for your next adventure?</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all"
            >
              Plan Your Trip
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-white text-gray-900 rounded-lg font-bold border border-gray-200 shadow hover:shadow-md transition-all"
            >
              Get a Free Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Feature Flip Card Component
const FeatureFlipCard = ({
  icon,
  title = "Travel Solution",
  subtitle = "Explore the benefits",
  description = "Experience premium travel management services.",
  features = ["Fast booking", "Global options", "Enterprise tools", "Best prices"],
  color = "blue",
  background = "bg-gradient-to-br from-blue-500 to-blue-700"
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Color mapping
  const colorMap = {
    blue: { 
      gradient: "from-blue-500/20 to-blue-500/10",
      text: "text-blue-600",
      icon: "text-blue-500"
    },
    emerald: { 
      gradient: "from-emerald-500/20 to-emerald-500/10",
      text: "text-emerald-600",
      icon: "text-emerald-500"
    },
    amber: { 
      gradient: "from-amber-500/20 to-amber-500/10",
      text: "text-amber-600",
      icon: "text-amber-500"
    },
    rose: { 
      gradient: "from-rose-500/20 to-rose-500/10",
      text: "text-rose-600",
      icon: "text-rose-500"
    }
  };

  const colors = colorMap[color] || colorMap.blue;

  return (
    <div
      className="relative w-full aspect-[2/3] group [perspective:2000px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={cn(
          "relative w-full h-full",
          "[transform-style:preserve-3d]",
          "transition-all duration-700",
          isFlipped
            ? "[transform:rotateY(180deg)]"
            : "[transform:rotateY(0deg)]"
        )}
      >
        {/* Front of card with background image */}
        <div
          className={cn(
            "absolute inset-0 w-full h-full",
            "[backface-visibility:hidden] [transform:rotateY(0deg)]",
            "overflow-hidden rounded-2xl",
            background,
            "bg-cover bg-center",
            "border border-slate-200/30",
            "shadow-lg",
            "transition-all duration-700",
            "group-hover:shadow-xl",
            isFlipped ? "opacity-0" : "opacity-100"
          )}
        >
          <div className="relative h-full overflow-hidden p-6 flex flex-col bg-black/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`w-16 h-16 rounded-full ${colors.icon} flex items-center justify-center bg-white/50`}>
                {React.cloneElement(icon, { className: "text-3xl" })}
              </div>
            </div>
            
            {/* Title and subtitle at bottom */}
            <div className="mt-auto text-center">
              <h3 className="text-xl font-bold text-white leading-tight">
                {title}
              </h3>
              <p className="text-white/90 mt-2 text-sm">
                {subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Back of card - no background image */}
        <div
          className={cn(
            "absolute inset-0 w-full h-full",
            "[backface-visibility:hidden] [transform:rotateY(180deg)]",
            "p-6 rounded-2xl",
            "bg-gradient-to-b from-slate-50 to-white",
            "border border-slate-200",
            "shadow-lg",
            "flex flex-col",
            "transition-all duration-700",
            "group-hover:shadow-xl",
            !isFlipped ? "opacity-0" : "opacity-100"
          )}
        >
          <div className="flex-1 space-y-4">
            <div className="flex justify-center mb-4">
              
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-900 text-center">
                {title}
              </h3>
              <p className="text-slate-600 text-sm text-center">
                {description}
              </p>
            </div>

            <div className="space-y-3 mt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 text-sm text-slate-700 transition-all duration-500"
                  style={{
                    transform: isFlipped
                      ? "translateX(0)"
                      : "translateX(-10px)",
                    opacity: isFlipped ? 1 : 0,
                    transitionDelay: `${index * 100 + 200}ms`,
                  }}
                >
                  <div className={`w-5 h-5 rounded-full ${colors.icon} flex items-center justify-center mt-0.5`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 mt-auto">
            <div
              className={cn(
                "group/start relative",
                "flex items-center justify-between",
                "p-3 -m-3 rounded-xl",
                "transition-all duration-300",
                "bg-gradient-to-r from-slate-100 to-slate-50",
                "hover:from-blue-500/10 hover:from-0% hover:via-blue-500/5 hover:via-100% hover:to-transparent hover:to-100%",
                "hover:scale-[1.02] hover:cursor-pointer"
              )}
            >
              <span className={`text-sm font-medium ${colors.text} transition-colors duration-300 group-hover/start:text-blue-600`}>
                Learn more
              </span>
              <div className="relative group/icon">
                <div
                  className={cn(
                    "absolute inset-[-6px] rounded-lg transition-all duration-300",
                    `bg-gradient-to-br ${colors.gradient}`,
                    "opacity-0 group-hover/start:opacity-100 scale-90 group-hover/start:scale-100"
                  )}
                />
                <svg xmlns="http://www.w3.org/2000/svg" className={`relative z-10 w-4 h-4 ${colors.icon} transition-all duration-300 group-hover/start:translate-x-0.5 group-hover/start:scale-110`} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// StatCard component for animated statistics
const StatCard = ({ icon, number, label, delay = 0 }) => {
  return (
    <motion.div 
      className="flex flex-col items-center p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="mb-4 p-3 rounded-full bg-white/20 backdrop-blur-sm">
        {icon}
      </div>
      <div className="text-3xl font-bold mb-2">
        {number}
      </div>
      <div className="text-sm opacity-90 text-center">{label}</div>
    </motion.div>
  );
};

export default WhyChooseUs;