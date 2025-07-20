// src/components/Footer.jsx
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-white pt-16 pb-8"
      style={{
        background: "linear-gradient(181deg, #77ffc2 0%, #2c45d5 99%)",
      }}
    >
      <footer className="relative py-12 px-12 tracking-wide z-20">
        <div className="max-w-2xl mx-auto text-center">
          <Link to="/" className="inline-block">
            <img src="/logo_name.png" alt="Fly way" className="w-60" />
          </Link>
          <p className="text-sm mt-8 text-black leading-relaxed">
            Discover seamless travel experiences tailored just for you. Whether
            it's a quick getaway or a long holiday, Flyway Travel makes every
            trip effortless and memorable.
          </p>

          <ul className="flex flex-wrap justify-center gap-6 mt-8">
            <li>
              <a
                href="https://www.facebook.com/flywaytravelauh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900 text-2xl hover:scale-110 transition-transform"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/flywaytravel_auh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-800 text-2xl hover:scale-110 transition-transform"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/971509845162"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-800 text-2xl hover:scale-110 transition-transform"
              >
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </div>

        <ul className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-12 mt-20 text-black">
          <li className="flex items-center">
            <div className="bg-white/50 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <FaPhone size={20} />
            </div>
            <a href="tel:+97126414434" className="text-sm ml-3">
              <small className="block">Tel</small>
              <span className="font-medium">02 641 4434</span>
            </a>
          </li>
          <li className="flex items-center">
            <div className="bg-white/50 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <FaEnvelope size={20} />
            </div>
            <a href="mailto:info@flywaytraveluae.com" className="text-sm ml-3">
              <small className="block">Mail</small>
              <span className="font-medium">info@flywaytraveluae.com</span>
            </a>
          </li>
          <li className="flex items-center">
            <div className="bg-white/50 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <FaMapMarkerAlt size={20} />
            </div>
            <span className="text-sm ml-3">
              <small className="block">Address</small>
              <span className="font-medium">Al Nahyan - E25 - Abu Dhabi</span>
            </span>
          </li>
          <li className="flex items-center">
            <div className="bg-white/50 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <FaWhatsapp size={20} />
            </div>
            <a href="https://wa.me/971509845162" className="text-sm ml-3">
              <small className="block">WhatsApp</small>
              <span className="font-medium">+971509845162</span>
            </a>
          </li>
        </ul>

        <hr className="my-12 border-gray-500" />

        <div className="flex max-md:flex-col gap-4">
          <ul className="flex flex-wrap gap-4">
            <li className="text-sm">
              <Link
                to="/"
                className="text-black font-medium hover:underline"
              >
                Terms of Service
              </Link>
            </li>
            <li className="text-sm">
              <Link
                to="/"
                className="text-black font-medium hover:underline"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="text-sm">
              <Link
                to="/"
                className="text-black font-medium hover:underline"
              >
                Security
              </Link>
            </li>
          </ul>
          <p className="text-sm text-black md:ml-auto">
            © flywaytraveluae.com All rights reserved.
          </p>
        </div>
      </footer>
    </motion.footer>
  );
};

export default Footer;
