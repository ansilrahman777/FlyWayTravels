import { motion } from 'framer-motion';
import ServiceSection from '../components/ServiceSection';

const Services = ({ openBookingModal }) => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-20 px-4"
    >
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-sky-600 to-indigo-700 bg-clip-text text-transparent"
          >
            Our Travel Services
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-sky-500 to-indigo-600 mx-auto rounded-full mb-10"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover our comprehensive range of travel services designed to make your journey seamless and unforgettable.
          </motion.p>
        </div>

        {/* Services Grid */}
        <ServiceSection />

        {/* Process Section */}
        <div className="bg-gradient-to-r from-sky-50 to-indigo-50 rounded-3xl p-12 mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-sky-500 to-indigo-600 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { step: "01", title: "Plan", desc: "Consult with our experts to design your perfect itinerary" },
              { step: "02", title: "Book", desc: "Secure your trip with our easy booking process" },
              { step: "03", title: "Travel", desc: "Enjoy your journey with 24/7 support from our team" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-sky-500 to-indigo-600 rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Need Help Choosing?</h2>
          <p className="text-sky-100 mb-8 max-w-2xl mx-auto">
            Our travel consultants are ready to help you select the perfect services for your next adventure.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openBookingModal()}
            className="bg-white text-sky-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Contact Our Experts
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;