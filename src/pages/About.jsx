// src/pages/About.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const About = () => {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "50K+", label: "Happy Travelers" },
    { value: "120+", label: "Destinations" },
    { value: "24/7", label: "Support" },
  ]

  const team = [
    { name: "Alex Morgan", role: "Travel Director" },
    { name: "Sarah Johnson", role: "Destination Expert" },
    { name: "Michael Chen", role: "Operations Manager" },
    { name: "Emma Williams", role: "Customer Experience" },
  ]

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
            About Fly Way Travel
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "150px" }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-sky-500 to-indigo-600 mx-auto rounded-full mb-10"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We're passionate about creating unforgettable travel experiences that connect you with the world's most incredible destinations.
          </motion.p>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="bg-gradient-to-r from-sky-500 to-indigo-600 h-96 rounded-2xl shadow-xl" />
              <div className="absolute -bottom-8 -right-8 bg-gray-100 w-64 h-64 rounded-2xl shadow-xl border-8 border-white" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2009, Fly Way Travel began with a simple mission: to make extraordinary travel experiences accessible to everyone. 
              What started as a small team of travel enthusiasts has grown into a globally recognized agency with a passion for creating 
              unforgettable journeys.
            </p>
            <p className="text-gray-600 mb-8">
              Over the years, we've helped over 50,000 travelers discover new horizons. Our commitment to exceptional service, 
              attention to detail, and deep destination knowledge sets us apart in the travel industry.
            </p>
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Our Services
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-28">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 bg-white rounded-2xl shadow-lg"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-sky-600 to-indigo-700 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Team */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Team</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-sky-500 to-indigo-600 mx-auto rounded-full mb-12" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="bg-gradient-to-br from-sky-400 to-indigo-500 h-48" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-sky-600">{member.role}</p>
                </div>
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-sky-100 mb-8 max-w-2xl mx-auto">
            Contact our travel experts today to plan your perfect getaway. We're here to make your travel dreams a reality.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-sky-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About