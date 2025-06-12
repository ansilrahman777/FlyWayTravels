import { motion } from "framer-motion";

import girl12 from "../assets/images/girl123.png";
import profile from "../assets/images/profile.png";

const HeroSection3 = () => {
  return (
    <div>
      <div className="lg:h-[38rem] mx-auto flex max-w-screen-xl flex-col space-y-6 overflow-hidden px-6 pb-16 lg:flex-row lg:items-center">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <div className="mt-10 lg:max-w-lg">
            {/* <p className="mb-4">— &nbsp;&nbsp; Creative Design</p> */}
            <h1 className="font-[900] text-3xl text-gray-900 lg:text-5xl lg:leading-snug">
              Fly Smarter, Travel Better with Flyway
            </h1>
            <div className="mt-8 space-y-5 text-gray-600">
              Visas, flights, stays, and transfers—everything you need to take
              off with confidence and ease.{" "}
            </div>
          </div>

          <div className="mt-8 w-full rounded-md bg-transparent lg:max-w-md">
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="m-1 h-12 flex-1 rounded-lg bg-white px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              />
              <button
                type="button"
                className="m-1 h-12 rounded-md bg-gray-900 px-4 py-2 text-white transition-colors duration-200 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
              >
                Connect with Us
              </button>
            </form>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative h-full w-full items-center justify-center lg:flex lg:w-1/2">
          <div className="absolute lg:left-0 space-y-4">
            <div className="flex items-center rounded-md border border-gray-100 bg-white px-4 py-3 shadow-lg">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src={profile}
                alt="Simon Lewis"
              />
              <p className="ml-4 w-56">
                <strong className="block text-lg font-medium">
                  Emma Clarke
                </strong>
                <span className="text-xs text-gray-400">
                  Every trip has been unforgettable.
                </span>
              </p>
            </div>
            <div className="flex flex-col items-start rounded-md border border-gray-100 bg-white px-4 pt-3 pb-6 shadow-lg">
              <strong className="block text-lg font-medium">
                Why People Choose Us
              </strong>
              <div className="mt-4 flex items-center text-xs text-gray-400">
                Expert planning. Personalized service. Zero stress.
              </div>
              <div className="mt-4 flex items-center text-xs text-gray-400">
                Wherever you go, Flyway Travel gets you there.
              </div>
            </div>
          </div>
          <img
            className="scale-x-100 z-10 border-b-8 border-blue-300 mt-auto ml-auto h-4/6 object-cover lg:max-w-2xl"
            src={girl12}
            alt="glasses photo"
          />
        </div>
      </div>
    </div>
  );
};
export default HeroSection3;
