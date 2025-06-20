import { motion } from "framer-motion";

import girl12 from "../assets/images/girl123.png";
import profile from "../assets/images/profile.png";

const HeroSection3 = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 flex flex-col md:flex-row md:items-center md:space-x-8">
  <div className="w-full md:w-1/2">
    <div className="md:max-w-lg">
      <h1 className="text-2xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl md:leading-tight">
        Fly Smarter,<br/>Travel Better with Flyway
      </h1>
      <p className="mt-6 text-white">
        Visas, flights, stays, and transfers—everything you need to take off with confidence and ease.
      </p>

      <div className="mt-6 w-full md:max-w-md">
        <form className="flex flex-col sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 rounded-lg bg-white px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            type="button"
            className="mt-3 h-12 rounded-md bg-gray-900 px-5 text-white transition hover:bg-gray-700 sm:mt-0 sm:ml-3"
          >
            Contact Us
          </button>
        </form>
      </div>
    </div>
  </div>

  {/* Right Section */}
  <div className="relative mt-10 w-full md:mt-0 md:w-1/2 flex items-center justify-center">
    <div className="absolute left-0 top-0 space-y-4">
      <div className="flex items-center rounded-md border border-gray-100 bg-white px-4 py-3 shadow-lg">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={profile}
          alt="Emma Clarke"
        />
        <div className="ml-4">
          <p className="text-lg font-medium">Emma Clarke</p>
          <p className="text-xs text-gray-400">Every trip has been unforgettable.</p>
        </div>
      </div>

      <div className="flex flex-col items-start rounded-md border border-gray-100 bg-white px-4 py-4 shadow-lg">
        <p className="text-lg font-medium">Why People Choose Us</p>
        <p className="mt-2 text-xs text-gray-400">Expert planning. Personalized service. Zero stress.</p>
        <p className="mt-1 text-xs text-gray-400">Wherever you go, Flyway Travel gets you there.</p>
      </div>
    </div>

    <img
      className="z-10 mt-auto ml-auto h-80 w-auto object-cover border-b-8 border-blue-300 md:h-96"
      src={girl12}
      alt="Glasses photo"
    />
  </div>
</div>


  );
};
export default HeroSection3;
