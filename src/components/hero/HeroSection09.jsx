import { useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";

const HeroSection09 = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-14 md:py-18 lg:py-18 relative bg-center bg-cover overflow-hidden">
      <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-10 mx-auto rounded-lg">
        <TestimonialCarousel />
      </div>

      <div className="mx-auto max-w-3xl mt-10">
        <h3 className="mb-6 text-center text-3xl font-semibold text-white font-emilys">
          Frequently Asked Questions
        </h3>
        <Question title="How can I book a flight through your agency?">
          <p>
            You can book a flight by contacting us directly via phone, WhatsApp,
            or by visiting our office. We'll find the best options based on your
            preferences, budget, and travel dates.
          </p>
        </Question>
        <Question title="Do you assist with Dubai visa processing?">
          <p>
            Yes, we provide complete assistance with Dubai visa applications
            including tourist, transit, and long-term stay visas. We also offer
            express processing options.
          </p>
        </Question>
        <Question title="What documents are required for a Schengen visa?">
          <p>
            Common documents include your passport, recent photographs, travel
            insurance, flight itinerary, proof of accommodation, bank
            statements, and employment proof. We’ll guide you step by step for
            smooth processing.
          </p>
        </Question>
        <Question title="Can I reschedule or cancel a flight after booking?">
          <p>
            Yes, flight changes or cancellations are possible depending on the
            airline's policy. We help you manage any modifications and explain
            refund or rebooking terms clearly.
          </p>
        </Question>
        <Question title="Do you offer travel insurance and hotel booking services?">
          <p>
            Absolutely! We provide competitive travel insurance plans and assist
            in booking hotels globally to ensure a seamless travel experience.
          </p>
        </Question>
        <Question title="How long does it take to process a visa?">
          <p>
            Visa processing time varies by country. For Dubai, it typically
            takes 2-4 working days. For Schengen or other countries, it may take
            7–15 working days depending on the embassy.
          </p>
        </Question>
      </div>
    </section>
  );
};

const Question = ({ title, children, defaultOpen = false }) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="border-b border-b-slate-300 font-emilys"
    >
      <button
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
      >
        <motion.span
          className="bg-gradient-to-r from-white to-white font-emilys bg-clip-text text-lg font-medium text-white"
        >
          {title}
        </motion.span>
        <motion.span
          variants={{
            open: { rotate: "180deg" },
            closed: { rotate: "0deg" },
          }}
          transition={{ duration: 0.3 }}
        >
          <FiChevronDown className="text-2xl text-white" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? height : 0,
          marginBottom: open ? 16 : 0,
        }}
        className="overflow-hidden font-emilys text-white"
      >
        <div ref={ref} className="pb-3">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection09;

function TestimonialCarousel() {
  const testimonials = [
    {
      quote:
        "I just wanted to say Flyway made my entire trip effortless—from visa to hotel. Everything was perfectly handled, and I didn't worry about a thing.",
      name: "Ansil Rahman",
      title: "Frequent Traveler | Dubai",
    },
    {
      quote:
        "Flyway is my go-to for hassle-free travel. Their team is super professional and always goes the extra mile!",
      name: "Sara Khan",
      title: "Entrepreneur | Doha",
    },
    {
      quote:
        "From tickets to itinerary, they handled it all. I could actually enjoy my vacation instead of stressing about the details.",
      name: "Ahmed Al Farsi",
      title: "Marketing Manager | Muscat",
    },
    {
      quote:
        "No hidden costs, no drama, just great service. Highly recommended for busy travelers!",
      name: "Fatima Noor",
      title: "Consultant | Riyadh",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-10 mx-auto rounded-lg overflow-hidden">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 rounded-full hover:bg-white/40 text-white z-20"
        aria-label="Previous"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 rounded-full hover:bg-white/40 text-white z-20"
        aria-label="Next"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Quote Block with Motion */}
      <div className="relative min-h-[150px]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:mx-auto lg:w-3/5 absolute inset-0 flex flex-col justify-center"
          >
            <div className="mt-3 lg:mt-5">
              <p className="relative text-xl sm:text-2xl md:text-3xl md:leading-normal font-medium text-gray-800 italic">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-8 -translate-y-8 w-16 h-16 text-gray-200"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7.18079 9.25611C7.18079 10.0101 6.93759 10.6211 6.45119 11.0891C5.96479 11.5311 5.35039 11.7521 4.60799 11.7521C3.71199 11.7521 2.96958 11.4531 2.38078 10.8551C1.81758 10.2571 1.53598 9.39911 1.53598 8.28111C1.53598 7.08511 1.86878 5.91511 2.53438 4.77111C3.22559 3.60111 4.18559 2.67811 5.41439 2.00211L6.29759 3.36711C5.63199 3.83511 5.09439 4.35511 4.68479 4.92711C4.30079 5.49911 4.04479 6.16211 3.91679 6.91611C4.14719 6.81211 4.41599 6.76011 4.72319 6.76011C5.43999 6.76011 6.02879 6.99411 6.48959 7.46211C6.95039 7.93011 7.18079 8.52811 7.18079 9.25611ZM14.2464 9.25611C14.2464 10.0101 14.0032 10.6211 13.5168 11.0891C13.0304 11.5311 12.416 11.7521 11.6736 11.7521C10.7776 11.7521 10.0352 11.4531 9.44639 10.8551C8.88319 10.2571 8.60159 9.39911 8.60159 8.28111C8.60159 7.08511 8.93439 5.91511 9.59999 4.77111C10.2912 3.60111 11.2512 2.67811 12.48 2.00211L13.3632 3.36711C12.6976 3.83511 12.16 4.35511 11.7504 4.92711C11.3664 5.49911 11.1104 6.16211 10.9824 6.91611C11.2128 6.81211 11.4816 6.76011 11.7888 6.76011C12.5056 6.76011 13.0944 6.99411 13.5552 7.46211C14.016 7.93011 14.2464 8.52811 14.2464 9.25611Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="relative font-emilys text-white z-10">
                  {testimonials[current].quote}
                </span>
              </p>
            </div>

            <footer className="mt-3">
              <div className="font-semibold text-white font-emilys">
                {testimonials[current].name}
              </div>
              <div className="text-sm text-white font-emilys">
                {testimonials[current].title}
              </div>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>
    </div>
  );
}
