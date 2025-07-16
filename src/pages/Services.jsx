import { motion } from 'framer-motion';
import ServiceSection from '../components/ServiceSection';
import image1 from "../assets/images/fw6.jpg";

const Services = ({ openBookingModal }) => {

  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(135deg, #da082d 3%, #5d1dab 37%, #67d71a 69%, #b1c709 95%)",
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

            <div class="relative font-emilys px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
              <h1 class="text-4xl font-bold text-black sm:text-6xl xl:text-7xl">
                Your Journey, Our Services
              </h1>
              <p class="mt-6 text-lg font-bold text-black sm:text-xl">
                Flyway Travel delivers complete solutions — from expert visa assistance to best flight deals, hotel bookings, and 24/7 support.

              </p>
              <p class="mt-4 text-base text-black font-bold max-w-xl">
                Explore our range of travel services designed to make every part of your trip simple, safe, and special.

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
                src="https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                alt="Explore with Flyway"
              />
            </div>

            {/* <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div> */}

            <div class="absolute bottom-0 left-0">
              <div class="p-4 font-emilys sm:p-6 lg:p-8">
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
                  <h2 class="ml-3 text-4xl font-bold text-black">3,500+</h2>
                </div>
                <p class="max-w-xs mt-1.5 text-base text-black">
                  Happy travelers choose Flyway every year for smooth, reliable
                  travel solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-24">
        <div className="max-w-3xl mb-10 lg:mb-14 mx-auto text-center">
          <h2 className="text-black font-emilys font-semibold text-2xl md:text-4xl md:leading-tight">
            Our Services
          </h2>
          <p className="mt-1 font-emilys text-lg text-black">
            At Flyway Travel, we take the hassle out of planning and bring the joy back to travel.
            Whether you're jetting off for adventure, business, family time, or spiritual
            journeys — we handle the details so you don't have to.
          </p>
        </div>
        <ServiceSection />
      </section>

      <section className="py-20">
        <div className="max-w-7xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
          <div className="max-w-3xl mb-10 lg:mb-14 mx-auto text-center">
            <h2 className="text-black font-emilys font-semibold text-2xl md:text-4xl md:leading-tight">
              Our Approach
            </h2>
            <p className="mt-1 font-emilys text-lg text-black">
              Every journey matters. Our approach combines deep expertise, local connections,
              and personalized support — ensuring you travel smoothly, safely, and stress-free
              from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            <div className="relative min-h-[400px] lg:min-h-[500px] w-full overflow-hidden rounded-xl">
              <img
                src={image1}
                alt="Travel planning"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <div className="mb-4">
                <h3 className="text-black font-emilys text-base font-medium uppercase">
                  Steps
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-x-5">
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-black font-semibold text-xs uppercase rounded-full">
                        1
                      </span>
                    </div>
                  </div>
                  <div className="grow pt-0.5 pb-8">
                    <p className="text-base font-emilys lg:text-base text-black">
                      <span className="text-black">Personalized Consultation:</span>
                      We listen to your travel needs and craft a plan that suits your destination, budget, and timeline.
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-5">
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-black font-semibold text-xs uppercase rounded-full">
                        2
                      </span>
                    </div>
                  </div>
                  <div className="grow pt-0.5 pb-8">
                    <p className="text-base font-emilys lg:text-base text-black">
                      <span className="text-black">Visa & Documents:</span>
                      We handle all paperwork, visa applications, and travel documents so you don’t have to stress.
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-5">
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-black font-semibold text-xs uppercase rounded-full">
                        3
                      </span>
                    </div>
                  </div>
                  <div className="grow pt-0.5 pb-8">
                    <p className="text-base font-emilys lg:text-base text-black">
                      <span className="text-black">Flights & Stays:</span>
                      Get the best flight deals, secure hotel bookings, and tailored recommendations for your comfort.
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-5">
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-black font-semibold text-xs uppercase rounded-full">
                        4
                      </span>
                    </div>
                  </div>
                  <div className="grow pt-0.5 pb-8">
                    <p className="text-base font-emilys lg:text-base text-black">
                      <span className="text-black">Travel Support:</span>
                      Relax while we manage transfers, itinerary updates, and 24/7 support during your trip.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <a
                  className="inline-flex w-auto font-emilys items-center gap-x-2 py-2 px-4 bg-white font-medium text-sm text-black rounded-full"
                  href="#contact"
                >
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
        </div>

      <div className="bg-gradient-to-r from-sky-700 to-sky-300 rounded-3xl max-w-7xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Need Help Choosing?</h2>
        <p className="text-sky-100 mb-8 max-w-2xl mx-auto">
          Our travel consultants are ready to help you select the perfect services for your next adventure.
        </p>
        <button
          onClick={() => openBookingModal()}
          className="bg-white text-sky-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
        >
          Contact Our Experts
        </button>
      </div>
      </section>

    </section>
  );
};

export default Services;