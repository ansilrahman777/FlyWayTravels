// src/components/Footer.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const services = [
    "Airline Tickets",
    "Hotel Booking",
    "Holiday Packages",
    "Airport Transfer",
    "Tourist Visas",
    "Travel Insurance",
    "Worldwide Visa Service"
  ]

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-gradient-to-r from-sky-900 to-indigo-900 text-white pt-16 pb-8"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-sky-500 to-indigo-600 p-1 rounded-lg mr-3">
                <div className="bg-white p-1 rounded-md">
                  <div className="w-10 h-10 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-md" />
                </div>
              </div>
              <h2 className="text-3xl font-bold">FLY WAY TRAVEL</h2>
            </div>
            <p className="text-sky-200 mb-6 max-w-md">
              Your journey begins with us. We craft unforgettable travel experiences tailored to your dreams. 
              Discover the world with our premium travel services and expert guidance.
            </p>
            <div className="flex space-x-4">
              {[1, 2, 3, 4].map((item) => (
                <motion.a 
                  key={item}
                  whileHover={{ y: -5, scale: 1.1 }}
                  href="#"
                  className="w-10 h-10 bg-sky-800 rounded-full flex items-center justify-center hover:bg-sky-700 transition-colors"
                >
                  <div className="w-4 h-4 bg-white rounded-sm" />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-sky-700 pb-2">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link to="/services" className="text-sky-200 hover:text-white transition-colors">
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-sky-700 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-sky-700 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span>123 Travel Avenue, Paradise City</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-sky-700 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span>contact@flywaytravel.com</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-sky-700 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-sky-800 pt-8 text-center text-sky-400">
          <p>© {currentYear} FLY WAY TRAVEL. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer