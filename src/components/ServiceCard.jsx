// src/components/ServiceCard.jsx
import { motion } from 'framer-motion';

const ServiceCard = ({ service, index, openBookingModal }) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.03 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group"
    >
      <div className="p-8">
        <div className="text-5xl mb-6 group-hover:text-sky-600 transition-colors">{service.icon}</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-sky-700 transition-colors">{service.title}</h3>
        <p className="text-gray-600 mb-6">{service.description}</p>
        <motion.button
          whileHover={{ x: 5 }}
          onClick={() => openBookingModal()}
          className="flex items-center text-sky-600 font-medium group-hover:text-sky-800 transition-colors"
        >
          Learn more
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;