import { motion } from "framer-motion";
import img1 from "../assets/images/girl213.png";
import ceoImg from "../assets/images/ceo.png";
import teamImg from "../assets/images/team1.png";
const About = () => {
  return (
    <main
      className="w-full overflow-x-hidden text-white font-emilys"
      style={{
        backgroundImage:
          "linear-gradient(135deg, #d8dad7 5%, #43be5e 38%, #5f88b1 69%, #38d9a9 95%)",
        color: "#fff",
      }}
    >

      <section class="overflow-hidden bg-white">
        <div class="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[600px]">
          <div class="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
            <div class="absolute bottom-0 right-0 hidden lg:block">
              <img class="object-contain w-auto h-48" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png" alt="" />
            </div>

            <div class="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
              <h1 class="text-4xl font-bold text-black sm:text-6xl xl:text-7xl">
                Discover the World with Flyway Travel
              </h1>
              <p class="mt-6 text-lg text-black sm:text-xl">
                Your trusted partner for stress-free journeys, luxury stays, smooth visas, and unforgettable adventures — planned with care and delivered with excellence.
              </p>
              <p class="mt-4 text-base text-gray-600 max-w-xl">
                From your first enquiry to your safe return, our mission is to make travel easy, inspiring, and perfectly suited to you.
              </p>
            </div>

            <div class="absolute right-0 z-10 -bottom-16 lg:top-24 lg:-left-20">
              <img class="w-32 h-32 md:w-40 md:h-40" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/circular-text.png" alt="" />
            </div>
          </div>

          <div class="relative w-full overflow-hidden lg:order-1 h-screen lg:w-5/12">
            <div class="absolute inset-0">
              <img class="object-cover w-full h-full scale-150" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Explore with Flyway" />
            </div>

            <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

            <div class="absolute bottom-0 left-0">
              <div class="p-4 sm:p-6 lg:p-8">
                <div class="flex items-center">
                  <svg class="w-10 h-10 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
                  </svg>
                  <h2 class="ml-3 text-4xl font-bold text-white">3,500+</h2>
                </div>
                <p class="max-w-xs mt-1.5 text-base text-white">Happy travelers choose Flyway every year for smooth, reliable travel solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-10 sm:py-16 lg:py-24 bg-white">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20">
            <div class="relative grid grid-cols-2 gap-6 mt-10 md:mt-0">
              <div class="overflow-hidden aspect-w-3 aspect-h-4">
                <img class="object-cover object-top origin-top scale-150" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/team-work.jpg" alt="Our Team at Work" />
              </div>
              <div class="relative">
                <div class="h-full overflow-hidden aspect-w-3 aspect-h-4">
                  <img class="object-cover scale-150 lg:origin-bottom-right" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/woman-working-on-laptop.jpg" alt="Planning your journey" />
                </div>
                <div class="absolute inset-0 grid w-full h-full place-items-center">
                  <button type="button" class="inline-flex items-center justify-center w-12 h-12 text-blue-600 bg-white rounded-full shadow-md lg:w-20 lg:h-20">
                    <svg class="w-6 h-6 lg:w-8 lg:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="absolute -translate-x-1/2 left-1/2 -top-16">
                <img class="w-32 h-32" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/round-text.png" alt="" />
              </div>
            </div>

            <div class="flex flex-col items-start xl:px-16">
              <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Our Mission & Vision</h2>
              <p class="mt-4 text-base leading-relaxed text-gray-600">
                At Flyway Travel, our mission is simple — to make global travel effortless, accessible, and memorable for every explorer. Our vision is to be the trusted partner people choose when they want expert visa help, the best flights, comfortable stays, and reliable transfers, all handled with care.
              </p>

              <p class="mt-4 text-base leading-relaxed text-gray-600">
                We believe every journey should be stress-free and every customer should feel supported from takeoff to touchdown.
              </p>

              <a href="#contact" title="Contact Flyway Travel" class="inline-flex items-center justify-center px-5 py-4 mt-8 text-base font-semibold text-white transition-all duration-200 rounded-md hover:opacity-90 focus:opacity-90 lg:mt-auto bg-gradient-to-r from-blue-600 to-green-600" role="button">
                Let’s Plan Your Trip
                <svg class="w-5 h-5 ml-8 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="py-24 bg-white">
        <div class="px-4 mx-auto rounded-md bg-white max-w-7xl sm:px-6 lg:px-8">
          <div class="2xl:pl-24">
            <div class="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 2xl:gap-x-20">
              <div class="text-center md:py-16 xl:py-24 md:text-left">
                <blockquote>
                  <p class="text-2xl font-semibold leading-relaxed text-black">
                    “Travel changes lives — it opens minds, builds memories, and connects people in ways nothing else can. At Flyway Travel, my promise is that we’ll treat your journey like our own — with care, clarity, and genuine passion.”</p>
                </blockquote>
                <div class="mt-6 sm:flex sm:items-baseline sm:justify-center md:justify-start">
                  <p class="text-base font-semibold text-black">Jabir</p>
                  <p class="mt-2 text-base text-black sm:mt-0 sm:ml-2">Founder & CEO</p>
                </div>
                {/* <p class="mt-12 text-base text-gray-900 lg:mt-20">Want to see Celebration in action?</p> */}
                {/* <a href="#" title="" class="inline-flex items-center justify-center px-8 py-4 mt-4 text-base font-semibold text-white transition-all duration-200 bg-black rounded-md hover:opacity-80 focus:opacity-80" role="button"> Create your first website </a> */}
              </div>

              <div class="relative">
                <img class="w-full rounded-full md:absolute md:bottom-0 md:scale-110 md:origin-bottom-right lg:scale-75 2xl:scale-100 2xl:-mt-20" src={ceoImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div class="px-4 py-16 mx-auto rounded-md bg-white max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-16 items-center">

            {/* LEFT: TEAM PHOTO */}
            <div className="order-2 md:order-1">
              <img
                className="w-full rounded-xl shadow-lg"
                src={teamImg} // 👉 Replace with your imported group photo
                alt="Our Team"
              />
            </div>

            {/* RIGHT: TEAM TEXT */}
            <div className="text-center md:text-left order-1 md:order-2">
              <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl mb-6">
                Meet Our Dedicated Team
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Flyway Travel, our strength lies in our people. Our experienced planners,
                consultants, and support crew work hand-in-hand to make every trip memorable.
                From booking your dream destinations to solving any travel hiccup, this team
                is here to make sure your journey is smooth, safe, and unforgettable.
              </p>
              <p className="mt-6 text-base font-semibold text-black">
                Together, we go further.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section class="py-10  sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">WHY WE ARE THE BEST</h2>
            <p class="mt-2 text-base font-medium leading-tight text-gray-700 sm:text-lg lg:text-xl">
              We go the extra mile to make every trip smooth — from fast visas to best flight deals and trusted support, Flyway Travel is your hassle-free travel partner.
            </p>
          </div>


          <div class="px-5 py-8 mt-12 bg-white lg:mt-20 lg:p-16">
            <div class="grid grid-cols-1 gap-12 lg:gap-16 sm:grid-cols-2">

              <div class="flex items-start">
                <svg class="flex-shrink-0 w-16 h-16 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 13l4 4L19 7" />
                </svg>
                <div class="ml-5">
                  <h3 class="text-lg font-semibold text-black">Trusted by Thousands</h3>
                  <p class="mt-4 text-base text-gray-600">
                    Over 3,500 happy travelers choose Flyway Travel every year for stress-free trips worldwide.
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <svg class="flex-shrink-0 w-16 h-16 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M18 8a6 6 0 11-12 0 6 6 0 0112 0zM12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" />
                </svg>
                <div class="ml-5">
                  <h3 class="text-lg font-semibold text-black">Dedicated Support Team</h3>
                  <p class="mt-4 text-base text-gray-600">
                    From visa help to last-minute changes, our friendly experts are always just a call away.
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <svg class="flex-shrink-0 w-16 h-16 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <div class="ml-5">
                  <h3 class="text-lg font-semibold text-black">100+ Destinations</h3>
                  <p class="mt-4 text-base text-gray-600">
                    Whether it’s a city break, beach holiday, or adventure tour, we take you wherever you want to go.
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <svg class="flex-shrink-0 w-16 h-16 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 11c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4zm0 0v1a5 5 0 005 5h1m-6-6H6a2 2 0 00-2 2v4h8v-4a2 2 0 00-2-2z" />
                </svg>
                <div class="ml-5">
                  <h3 class="text-lg font-semibold text-black">Safe & Secure Payments</h3>
                  <p class="mt-4 text-base text-gray-600">
                    Book with peace of mind — your payments and bookings are protected with industry-leading security.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
};

export default About;
