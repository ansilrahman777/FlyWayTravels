// src/components/DestinationCard.jsx
import { motion } from 'framer-motion';

const DestinationCard = ({ destination, index, openBookingModal }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -15 }}
      className="overflow-hidden rounded-2xl shadow-xl group"
    >
      <div className={`h-64 ${destination.image} relative`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
          <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-sky-300 transition-colors">
            {destination.name}
          </h3>
          <p className="text-white/90 mb-4">
            {destination.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-white">${destination.price}</span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openBookingModal(destination.name)}
              className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow hover:shadow-md transition-all"
            >
              Book Now
            </motion.button>
          </div>
        </div>
        
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1 }}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationCard;