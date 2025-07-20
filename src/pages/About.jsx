import { motion } from "framer-motion";
import ceoImg from "../assets/images/ceo.png";
import chairmanImg from "../assets/images/chairman.png";
import teamImg from "../assets/images/team1.png";
import officeImg from "../assets/images/office1.png";
const About = () => {
  return (
    <main
      className="w-full overflow-x-hidden text-white font-emilys"
      style={{
        backgroundImage:
          "linear-gradient(135deg, #db1212 5%, #7a43bf 38%, #3dd7d7 69%, #b1c709 95%)",
        color: "#fff",
      }}
    >
      <section class="overflow-hidden">
        <div class="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[600px]">
          <div class="relative flex items-center justify-center w-full lg:order-1 lg:w-7/12">
            <div class="absolute bottom-0 right-0 hidden lg:block">
              <img
                class="object-contain w-auto h-48"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png"
                alt=""
              />
            </div>

            <div class="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
              <h1 class="text-4xl font-bold text-white sm:text-6xl xl:text-7xl">
                Discover the World with Flyway Travel
              </h1>
              <p class="mt-6 text-lg font-bold text-white sm:text-xl">
                Your trusted partner for stress-free journeys, luxury stays,
                smooth visas, and unforgettable adventures — planned with care
                and delivered with excellence.
              </p>
              <p class="mt-4 text-base text-white font-bold max-w-xl">
                From your first enquiry to your safe return, our mission is to
                make travel easy, inspiring, and perfectly suited to you.
              </p>
            </div>

            <div class="absolute right-0 z-10 -bottom-16 lg:top-24 lg:-right-20">
              <img
                class="w-32 h-32 md:w-40 md:h-40"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/circular-text.png"
                alt=""
              />
            </div>
          </div>

          <div class="relative w-full overflow-hidden lg:order-2 h-screen lg:w-5/12">
            <div class="absolute inset-0">
              <img
                class="object-cover w-full h-full scale-150"
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                alt="Explore with Flyway"
              />
            </div>

            {/* <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div> */}

            <div class="absolute bottom-0 left-0">
              <div class="p-4 sm:p-6 lg:p-8">
                <div class="flex items-center">
                  <svg
                    class="w-10 h-10 text-orange-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <h2 class="ml-3 text-4xl font-bold text-white">3,500+</h2>
                </div>
                <p class="max-w-xs mt-1.5 text-base text-white">
                  Happy travelers choose Flyway every year for smooth, reliable
                  travel solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 mt-24">
        <div class="px-4 bg-slate-500/50 rounded-lg py-10  mx-auto  max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-16 items-center">
            <div className="order-1">
              <img
                className="w-full rounded-xl shadow-lg"
                src={officeImg}
                alt="Our Team"
              />
            </div>

            <div className="text-center md:text-left order-2">
              <h2 className="text-3xl font-bold text-blwhiteack sm:text-4xl lg:text-5xl mb-6">
                Our Mission & Vision
              </h2>
              <p className="text-lg text-white font-synemono font-semibold leading-relaxed text-justify">
                At Flyway Travel, our mission is simple — to make global travel
                effortless, accessible, and memorable for every explorer. Our
                vision is to be the trusted partner people choose when they want
                expert visa support, the best flights, comfortable stays, and
                reliable transfers — all handled with genuine care.
              </p>
              <p className="mt-6 text-lg font-synemono font-semibold text-white text-justify">
                We believe every journey should be stress-free, every traveler
                should feel confident, and every experience should create
                stories worth telling
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 ">
        <div class="px-4  mx-auto bg-slate-500/50 rounded-lg py-10  max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-16 items-center">
            <div className="order-2 justify-items-center ">
              <img
                className="w-[350px] rounded-full"
                src={ceoImg}
                alt="Our Team"
              />
            </div>

            <div className="text-center md:text-left order-1">
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl mb-6">
                Message from Founder
              </h2>
              <blockquote>
                <p class="text-lg font-semibold font-synemono leading-relaxed text-white text-justify">
                  “Travel changes lives — it opens minds, builds memories, and
                  connects people in ways nothing else can. As someone who has
                  explored over 30+ countries, I know first-hand how special
                  each journey can be. At Flyway Travel, my promise is simple:
                  we'll treat your trip like our own — with care, clarity, and
                  passion that only true travelers understand.”
                </p>
              </blockquote>
              <div class="mt-6 sm:flex font-synemono sm:items-baseline sm:justify-center md:justify-start">
                <p class="text-base font-semibold text-white">Mohmmed Jabir</p>
                <p class="mt-2 text-base text-white sm:mt-0 sm:ml-2">
                  Founder & CEO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 ">
        <div class="px-4 mx-auto bg-slate-500/50 rounded-lg py-10 max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-16 items-center">
            <div className="order-1 justify-items-center ">
              <img
                className="w-[310px] rounded-full"
                src={chairmanImg}
                alt="Our Chairman"
              />
            </div>

            <div className="text-center md:text-left order-2">
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl mb-6">
                Message from Chairman
              </h2>
              <blockquote>
                <p class="text-lg font-semibold font-synemono leading-relaxed text-white text-justify">
                  “At Flyway Travel, we believe that travel is more than just movement — it's an experience that connects cultures and creates lifelong memories. As Chairman, I am proud to lead a team that goes the extra mile to make every journey smooth, safe, and unforgettable. We promise to keep raising the bar in service, trust, and care for our travelers.”
                </p>
              </blockquote>
              <div class="mt-6 sm:flex font-synemono sm:items-baseline sm:justify-center md:justify-start">
                <p class="text-base font-semibold text-white">(name)</p>
                <p class="mt-2 text-base text-white sm:mt-0 sm:ml-2">
                  Chairman
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 ">
        <div class="px-4  mx-auto bg-slate-500/50 rounded-lg py-10  max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-16 items-center">
            <div className="order-2">
              <img
                className="w-full rounded-xl shadow-lg"
                src={teamImg}
                alt="Our Team"
              />
            </div>

            <div className="text-center md:text-left order-1">
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl mb-6">
                Meet Our Dedicated Team
              </h2>
              <p className="text-lg font-synemono text-white font-semibold leading-relaxed">
                At Flyway Travel, our greatest strength is our people. From
                seasoned travel planners and visa experts to our friendly
                support crew, every team member is driven by one goal: to make
                your journey smooth, safe, and unforgettable. We handle every
                detail, solve every hiccup, and stay by your side — so you can
                travel with complete peace of mind.
              </p>
              <p className="mt-6 font-synemono text-base font-semibold text-white">
                Together, we go further.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16">
        <div class="mx-auto max-w-7xl">
          <div class="text-center">
            <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Why we are the Best
            </h2>
            <p class="mt-2 text-base font-medium leading-tight text-white sm:text-lg lg:text-xl">
              We go the extra mile to make every trip smooth — from fast visas
              to best flight deals and trusted support, Flyway Travel is your
              hassle-free travel partner.
            </p>
          </div>

          <div class="px-5 py-8 mt-12 rounded-lg bg-black/30 lg:mt-20 lg:p-16">
            <div class="grid grid-cols-1 gap-12 lg:gap-16 sm:grid-cols-2">
              <div class="flex items-start">
                <svg
                  class="flex-shrink-0 w-16 h-16 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div class="ml-5">
                  <h3 class="text-lg font-semibold text-white">
                    Trusted by Thousands
                  </h3>
                  <p class="mt-4 text-base text-white">
                    Over 3,500 happy travelers choose Flyway Travel every year
                    for stress-free trips worldwide.
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <svg
                  class="flex-shrink-0 w-16 h-16 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M18 8a6 6 0 11-12 0 6 6 0 0112 0zM12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z"
                  />
                </svg>
                <div class="ml-5">
                  <h3 class="text-lg font-semibold text-white">
                    Dedicated Support Team
                  </h3>
                  <p class="mt-4 text-base text-white">
                    From visa help to last-minute changes, our friendly experts
                    are always just a call away.
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <svg
                  class="flex-shrink-0 w-16 h-16 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <div class="ml-5">
                  <h3 class="text-lg font-semibold text-white">
                    100+ Destinations
                  </h3>
                  <p class="mt-4 text-base text-white">
                    Whether it’s a city break, beach holiday, or adventure tour,
                    we take you wherever you want to go.
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <svg
                  class="flex-shrink-0 w-16 h-16 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M12 11c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4zm0 0v1a5 5 0 005 5h1m-6-6H6a2 2 0 00-2 2v4h8v-4a2 2 0 00-2-2z"
                  />
                </svg>
                <div class="ml-5">
                  <h3 class="text-lg font-semibold text-white">
                    Safe & Secure Payments
                  </h3>
                  <p class="mt-4 text-base text-white">
                    Book with peace of mind — your payments and bookings are
                    protected with industry-leading security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{ overflow: "hidden" }}>
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            fill: "#77ffc2",
            width: "100%",
            height: 165,
            transform: "rotate(180deg)",
          }}
        >
          <path
            d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
            opacity=".25"
          />
          <path
            d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
            opacity=".5"
          />
          <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
        </svg>
      </div>
    </main>
  );
};

export default About;
