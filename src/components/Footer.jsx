// src/components/Footer.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Airline Tickets",
    "Hotel Booking",
    "Holiday Packages",
    "Airport Transfer",
    "Tourist Visas",
    "Travel Insurance",
    "Worldwide Visa Service",
  ];

  return (
    <footer
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
          <a href="javascript:void(0)" className="inline-block">
            <img src="/logo_name.png" alt="Fly way" className="w-60" />
          </a>
          <p className="text-sm mt-8 text-black leading-relaxed">
            Discover seamless travel experiences tailored just for you. Whether
            it's a quick getaway or a long holiday, Flyway Travel makes every
            trip effortless and memorable.
          </p>

          <ul className="flex flex-wrap justify-center gap-6 mt-8">
            <li>
              <a href="https://www.facebook.com/flywaytravelauh">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-blue-600 w-8 h-8"
                  viewBox="0 0 49.652 49.652"
                >
                  <path
                    d="M24.826 0C11.137 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.137 38.516 0 24.826 0zM31 25.7h-4.039v14.396h-5.985V25.7h-2.845v-5.088h2.845v-3.291c0-2.357 1.12-6.04 6.04-6.04l4.435.017v4.939h-3.219c-.524 0-1.269.262-1.269 1.386v2.99h4.56z"
                    data-original="#000000"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/flywaytravel_auh">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  viewBox="0 0 152 152"
                >
                  <linearGradient
                    id="a"
                    x1="22.26"
                    x2="129.74"
                    y1="22.26"
                    y2="129.74"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#fae100" />
                    <stop offset=".15" stopColor="#fcb720" />
                    <stop offset=".3" stopColor="#ff7950" />
                    <stop offset=".5" stopColor="#ff1c74" />
                    <stop offset="1" stopColor="#6c1cd1" />
                  </linearGradient>
                  <g data-name="Layer 2">
                    <g data-name="03.Instagram">
                      <rect
                        width="152"
                        height="152"
                        fill="url(#a)"
                        data-original="url(#a)"
                        rx="76"
                      />
                      <g fill="#fff">
                        <path
                          fill="#ffffff10"
                          d="M133.2 26c-11.08 20.34-26.75 41.32-46.33 60.9S46.31 122.12 26 133.2q-1.91-1.66-3.71-3.46A76 76 0 1 1 129.74 22.26q1.8 1.8 3.46 3.74z"
                          data-original="#ffffff10"
                        />
                        <path
                          d="M94 36H58a22 22 0 0 0-22 22v36a22 22 0 0 0 22 22h36a22 22 0 0 0 22-22V58a22 22 0 0 0-22-22zm15 54.84A18.16 18.16 0 0 1 90.84 109H61.16A18.16 18.16 0 0 1 43 90.84V61.16A18.16 18.16 0 0 1 61.16 43h29.68A18.16 18.16 0 0 1 109 61.16z"
                          data-original="#ffffff"
                        />
                        <path
                          d="m90.59 61.56-.19-.19-.16-.16A20.16 20.16 0 0 0 76 55.33 20.52 20.52 0 0 0 55.62 76a20.75 20.75 0 0 0 6 14.61 20.19 20.19 0 0 0 14.42 6 20.73 20.73 0 0 0 14.55-35.05zM76 89.56A13.56 13.56 0 1 1 89.37 76 13.46 13.46 0 0 1 76 89.56zm26.43-35.18a4.88 4.88 0 0 1-4.85 4.92 4.81 4.81 0 0 1-3.42-1.43 4.93 4.93 0 0 1 3.43-8.39 4.82 4.82 0 0 1 3.09 1.12l.1.1a3.05 3.05 0 0 1 .44.44l.11.12a4.92 4.92 0 0 1 1.1 3.12z"
                          data-original="#ffffff"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/971509845162"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  viewBox="0 0 32 32"
                  fill="lightgreen"
                >
                  <path d="M16.001 2.001c-7.732 0-14 6.268-14 14a13.94 13.94 0 002.048 7.27L2 30l6.868-2.015A13.937 13.937 0 0016.001 30c7.732 0 14-6.268 14-14s-6.268-14-14-14zm0 2c6.627 0 12 5.373 12 12 0 6.627-5.373 12-12 12a11.92 11.92 0 01-6.112-1.667l-.43-.26-4.068 1.194 1.194-4.068-.26-.43A11.92 11.92 0 014 16.001c0-6.627 5.373-12 12-12zm5.416 16.682c-.294-.147-1.747-.861-2.019-.959-.271-.098-.469-.147-.666.148-.196.294-.764.959-.937 1.157-.173.196-.345.221-.639.074-.294-.148-1.24-.456-2.36-1.453-.873-.779-1.461-1.743-1.633-2.037-.173-.294-.018-.452.13-.599.134-.133.294-.345.441-.518.147-.173.196-.295.295-.49.098-.196.049-.37-.025-.518-.074-.148-.666-1.611-.914-2.207-.241-.579-.487-.501-.666-.511l-.57-.01c-.196 0-.518.074-.79.37s-1.038 1.014-1.038 2.475 1.063 2.866 1.211 3.063c.148.196 2.091 3.189 5.07 4.469.708.305 1.261.487 1.693.623.712.227 1.36.195 1.872.119.571-.085 1.747-.713 1.994-1.401.246-.686.246-1.273.172-1.401-.074-.127-.267-.196-.561-.343z" />
                </svg>
              </a>
            </li>

          </ul>
        </div>

        <ul className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
          <li className="flex items-center">
            <div className="bg-white/50 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="#000000"
                viewBox="0 0 482.6 482.6"
              >
                <path
                  d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                  data-original="#000000"
                />
              </svg>
            </div>
            <a href="javascript:void(0)" className="text-black text-sm ml-3">
              <small className="block">Tel</small>
              <span className="font-medium">02 641 4434</span>
            </a>
          </li>
          <li className="flex items-center">
            <div className="bg-white/50  h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="#000000"
                viewBox="0 0 479.058 479.058"
              >
                <path
                  d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                  data-original="#000000"
                />
              </svg>
            </div>
            <a href="javascript:void(0)" className="text-black text-sm ml-3">
              <small className="block">Mail</small>
              <span className="font-medium">info@flywaytraveluae.com</span>
            </a>
          </li>
          <li className="flex items-center">
            <div className="bg-white/50  h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="#000000"
                viewBox="0 0 368.16 368.16"
              >
                <path
                  d="M184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.288c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.296c5.096-7.728 12.144-20.912 15.72-29.4.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zM293.8 182.152c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.296c-1.84 2.792-2.424 2.792-4.264 0L88.696 208.952c-4.568-6.928-11.136-19.2-14.328-26.808-.136-.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z"
                  data-original="#000000"
                />
                <path
                  d="M184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z"
                  data-original="#000000"
                />
              </svg>
            </div>
            <a href="javascript:void(0)" className="text-black text-sm ml-3">
              <small className="block">Address</small>
              <span className="font-medium">Al Nahyan - E25 - Abu Dhabi</span>
            </a>
          </li>
          <li className="flex items-center">
            <div className="bg-white/50  h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                viewBox="0 0 32 32"
                fill="#000000"
              >
                <path d="M16.001 2.001c-7.732 0-14 6.268-14 14a13.94 13.94 0 002.048 7.27L2 30l6.868-2.015A13.937 13.937 0 0016.001 30c7.732 0 14-6.268 14-14s-6.268-14-14-14zm0 2c6.627 0 12 5.373 12 12 0 6.627-5.373 12-12 12a11.92 11.92 0 01-6.112-1.667l-.43-.26-4.068 1.194 1.194-4.068-.26-.43A11.92 11.92 0 014 16.001c0-6.627 5.373-12 12-12zm5.416 16.682c-.294-.147-1.747-.861-2.019-.959-.271-.098-.469-.147-.666.148-.196.294-.764.959-.937 1.157-.173.196-.345.221-.639.074-.294-.148-1.24-.456-2.36-1.453-.873-.779-1.461-1.743-1.633-2.037-.173-.294-.018-.452.13-.599.134-.133.294-.345.441-.518.147-.173.196-.295.295-.49.098-.196.049-.37-.025-.518-.074-.148-.666-1.611-.914-2.207-.241-.579-.487-.501-.666-.511l-.57-.01c-.196 0-.518.074-.79.37s-1.038 1.014-1.038 2.475 1.063 2.866 1.211 3.063c.148.196 2.091 3.189 5.07 4.469.708.305 1.261.487 1.693.623.712.227 1.36.195 1.872.119.571-.085 1.747-.713 1.994-1.401.246-.686.246-1.273.172-1.401-.074-.127-.267-.196-.561-.343z" />
              </svg>
            </div>
            <a href="https://wa.me/971509845162" className="text-black text-sm ml-3">
              <small className="block">WhatsApp</small>
              <span className="font-medium">+971509845162</span>
            </a>
          </li>
        </ul>

        <hr className="my-12 border-gray-500" />

        <div className="flex max-md:flex-col gap-4">
          <ul className="flex flex-wrap gap-4">
            <li className="text-sm">
              <a
                href="javascript:void(0)"
                className="text-black font-medium hover:underline"
              >
                Terms of Service
              </a>
            </li>
            <li className="text-sm">
              <a
                href="javascript:void(0)"
                className="text-black font-medium hover:underline"
              >
                Privacy Policy
              </a>
            </li>
            <li className="text-sm">
              <a
                href="javascript:void(0)"
                className="text-black font-medium hover:underline"
              >
                Security
              </a>
            </li>
          </ul>
          <p className="text-sm text-black md:ml-auto">
            © flyway.com All rights reserved.
          </p>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
