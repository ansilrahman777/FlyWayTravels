import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";
import foot1 from "../assets/images/foot3.jpg";

const HeroSection6 = () => {
  return (
    <div
      className="px-4 py-12 relative bg-center bg-cover overflow-hidden "
    // style={{ backgroundImage: `url(${foot1})` }}
    >

      <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <blockquote className="text-center lg:mx-auto lg:w-3/5">
          {/* <svg className="mx-auto w-20 h-auto sm:w-28 text-gray-800" width="106" height="36" viewBox="0 0 106 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M55.4732 9.52669C55.4732 10.6846 54.5258 11.6846 53.3153 11.6846C52.1048 11.6846 51.1574 10.7372 51.1574 9.52669C51.1574 8.31616 52.0521 7.36879 53.3153 7.36879C54.5785 7.47406 55.4732 8.42142 55.4732 9.52669ZM46.6837 13.8425C46.6837 14.053 46.6837 14.3688 46.6837 14.3688C46.6837 14.3688 45.6837 13.053 43.5258 13.053C39.9469 13.053 37.1574 15.7898 37.1574 19.5267C37.1574 23.2635 39.8942 26.0004 43.5258 26.0004C45.7363 26.0004 46.6837 24.6319 46.6837 24.6319V25.2109C46.6837 25.4741 46.8942 25.6846 47.1574 25.6846H49.789V13.3688C49.789 13.3688 47.3679 13.3688 47.1574 13.3688C46.8942 13.3688 46.6837 13.632 46.6837 13.8425ZM46.6837 21.7372C46.21 22.4741 45.21 23.1056 44.0521 23.1056C41.9469 23.1056 40.3679 21.7898 40.3679 19.5793C40.3679 17.3688 41.9995 16.053 44.0521 16.053C45.21 16.053 46.2627 16.6846 46.6837 17.4214V21.7372ZM51.789 13.3688H54.9469V25.6846H51.789V13.3688ZM98.789 13.053C96.6311 13.053 95.6311 14.3688 95.6311 14.3688V7.47406H92.4732V25.7372C92.4732 25.7372 94.8942 25.7372 95.1048 25.7372C95.3679 25.7372 95.5785 25.5267 95.5785 25.2635V24.6846C95.5785 24.6846 96.5785 26.053 98.7364 26.053C102.315 26.053 105.105 23.3162 105.105 19.5793C105.157 15.7898 102.368 13.053 98.789 13.053ZM98.2627 23.053C97.0521 23.053 96.1048 22.4214 95.6311 21.6846V17.2635C96.1048 16.632 97.1574 15.8951 98.2627 15.8951C100.368 15.8951 101.947 17.2109 101.947 19.4214C101.947 21.632 100.368 23.053 98.2627 23.053ZM90.8416 18.4214V25.7898H87.6837V18.7898C87.6837 16.7372 87.0521 15.9477 85.2627 15.9477C84.3153 15.9477 83.3153 16.4214 82.6837 17.1583V25.7372H79.5258V13.3688H81.9995C82.2627 13.3688 82.4732 13.5793 82.4732 13.8425V14.3688C83.3679 13.4214 84.6311 13.053 85.8416 13.053C87.21 13.053 88.3679 13.4214 89.2627 14.2109C90.4206 15.1583 90.8416 16.3162 90.8416 18.4214ZM71.8942 13.053C69.7364 13.053 68.7364 14.3688 68.7364 14.3688V7.47406H65.5785V25.7372C65.5785 25.7372 67.9995 25.7372 68.21 25.7372C68.4732 25.7372 68.6837 25.5267 68.6837 25.2635V24.6846C68.6837 24.6846 69.6837 26.053 71.8416 26.053C75.4206 26.053 78.21 23.3162 78.21 19.5793C78.2627 15.7898 75.4732 13.053 71.8942 13.053ZM71.3679 23.053C70.1574 23.053 69.21 22.4214 68.7364 21.6846V17.2635C69.21 16.632 70.2627 15.8951 71.3679 15.8951C73.4732 15.8951 75.0521 17.2109 75.0521 19.4214C75.0521 21.632 73.4732 23.053 71.3679 23.053ZM62.8416 13.053C63.789 13.053 64.2627 13.2109 64.2627 13.2109V16.1056C64.2627 16.1056 61.6311 15.2109 59.9995 17.1056V25.7372H56.8416V13.3688C56.8416 13.3688 59.2627 13.3688 59.4732 13.3688C59.7364 13.3688 59.9469 13.5793 59.9469 13.8425V14.3688C60.5785 13.6846 61.8942 13.053 62.8416 13.053ZM30.1574 24.6319C29.9995 24.2635 29.8416 23.7898 29.6837 23.4741C29.4206 22.8951 29.1574 22.3162 28.9469 21.7898L28.8942 21.7372C26.6311 16.8425 24.21 11.8425 21.6311 6.89511L21.5258 6.68458C21.2627 6.2109 20.9995 5.68458 20.7363 5.15827C20.4206 4.57932 20.1048 3.94774 19.5785 3.36879C18.5258 2.053 16.9995 1.31616 15.4206 1.31616C13.789 1.31616 12.3153 2.053 11.21 3.26353C10.6837 3.89511 10.3153 4.47406 9.99951 5.10564C9.73635 5.63195 9.47319 6.15827 9.21003 6.63195L9.10477 6.84248C6.57845 11.7372 4.10477 16.7372 1.84161 21.6846L1.78898 21.7372C1.57845 22.2635 1.3153 22.8425 1.05214 23.4214C0.894243 23.7898 0.736348 24.1583 0.578453 24.5793C0.1574 25.7898 -0.000494055 26.9477 0.210032 28.1056C0.578453 30.5793 2.21003 32.632 4.47319 33.5267C5.3153 33.8951 6.21003 34.053 7.10477 34.053C7.36793 34.053 7.68372 34.0004 7.94687 34.0004C9.05214 33.8951 10.1574 33.5267 11.21 32.8951C12.5785 32.1583 13.8416 31.053 15.2627 29.4741C16.6837 31.053 17.9995 32.1056 19.3153 32.8951C20.4206 33.5267 21.5258 33.8951 22.5785 34.0004C22.8416 34.053 23.1574 34.053 23.4206 34.053C24.3153 34.053 25.2627 33.8951 26.0521 33.5267C28.3679 32.632 29.9469 30.5267 30.3153 28.1056C30.6837 26.9477 30.5785 25.8425 30.1574 24.6319ZM15.3679 26.3162C13.5785 24.1056 12.4732 22.0004 12.0521 20.2109C11.8942 19.4741 11.8416 18.7898 11.9469 18.2109C11.9995 17.6846 12.21 17.2109 12.4732 16.8425C13.1048 15.9477 14.1574 15.4214 15.3679 15.4214C16.5785 15.4214 17.6837 15.9477 18.2627 16.8425C18.5258 17.2109 18.7363 17.6846 18.789 18.2109C18.8942 18.7898 18.8416 19.4741 18.6837 20.2109C18.2627 21.9477 17.1048 24.053 15.3679 26.3162ZM28.4206 27.8425C28.21 29.5267 27.0521 31.0004 25.4206 31.6846C24.6311 32.0004 23.789 32.1056 22.9469 32.0004C22.1048 31.8951 21.3153 31.632 20.4732 31.1583C19.3153 30.5267 18.1048 29.4741 16.7363 28.0004C18.8942 25.3688 20.21 22.8951 20.6837 20.7372C20.8942 19.7372 20.9469 18.7898 20.8416 17.9477C20.7363 17.1056 20.4206 16.3688 19.9469 15.7372C18.9469 14.2635 17.21 13.4214 15.3153 13.4214C13.4206 13.4214 11.6837 14.3162 10.6837 15.7372C10.21 16.3688 9.94687 17.1583 9.78898 17.9477C9.68372 18.7898 9.68372 19.7372 9.94687 20.7372C10.4206 22.8951 11.789 25.3688 13.8942 28.0004C12.5258 29.5267 11.3153 30.5267 10.1574 31.1583C9.3153 31.632 8.47319 31.8951 7.68372 32.0004C6.78898 32.1056 5.94687 31.9477 5.21003 31.6846C3.57845 31.053 2.47319 29.5267 2.21003 27.8425C2.10477 27.0004 2.1574 26.2109 2.52582 25.2635C2.63108 24.9477 2.78898 24.632 2.94687 24.2109C3.1574 23.6846 3.42056 23.1056 3.68372 22.5793L3.73635 22.5267C5.99951 17.632 8.42056 12.632 10.9469 7.78985L11.0521 7.57932C11.3153 7.10564 11.5785 6.57932 11.8416 6.053C12.1048 5.52669 12.4206 5.053 12.7363 4.63195C13.4206 3.84248 14.3679 3.42143 15.3679 3.42143C16.3679 3.42143 17.3153 3.84248 17.9995 4.63195C18.3679 5.053 18.6311 5.52669 18.8942 6.053C19.1574 6.52669 19.4206 7.053 19.6837 7.57932L19.789 7.78985C22.2627 12.6846 24.6837 17.6846 26.9469 22.5267V22.5793C27.21 23.1056 27.4206 23.6846 27.6837 24.2109C27.8416 24.5793 27.9995 24.9477 28.1048 25.2635C28.4732 26.1583 28.5785 27.0004 28.4206 27.8425Z" fill="currentColor"></path>
          </svg> */}

          <div className="mt-6 lg:mt-10">
            <p className="relative text-xl sm:text-2xl md:text-3xl md:leading-normal font-medium text-gray-800">
              <svg className="absolute top-0 start-0 transform -translate-x-8 -translate-y-8 size-16 text-gray-200 sm:h-24 sm:w-24" width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M7.18079 9.25611C7.18079 10.0101 6.93759 10.6211 6.45119 11.0891C5.96479 11.5311 5.35039 11.7521 4.60799 11.7521C3.71199 11.7521 2.96958 11.4531 2.38078 10.8551C1.81758 10.2571 1.53598 9.39911 1.53598 8.28111C1.53598 7.08511 1.86878 5.91511 2.53438 4.77111C3.22559 3.60111 4.18559 2.67811 5.41439 2.00211L6.29759 3.36711C5.63199 3.83511 5.09439 4.35511 4.68479 4.92711C4.30079 5.49911 4.04479 6.16211 3.91679 6.91611C4.14719 6.81211 4.41599 6.76011 4.72319 6.76011C5.43999 6.76011 6.02879 6.99411 6.48959 7.46211C6.95039 7.93011 7.18079 8.52811 7.18079 9.25611ZM14.2464 9.25611C14.2464 10.0101 14.0032 10.6211 13.5168 11.0891C13.0304 11.5311 12.416 11.7521 11.6736 11.7521C10.7776 11.7521 10.0352 11.4531 9.44639 10.8551C8.88319 10.2571 8.60159 9.39911 8.60159 8.28111C8.60159 7.08511 8.93439 5.91511 9.59999 4.77111C10.2912 3.60111 11.2512 2.67811 12.48 2.00211L13.3632 3.36711C12.6976 3.83511 12.16 4.35511 11.7504 4.92711C11.3664 5.49911 11.1104 6.16211 10.9824 6.91611C11.2128 6.81211 11.4816 6.76011 11.7888 6.76011C12.5056 6.76011 13.0944 6.99411 13.5552 7.46211C14.016 7.93011 14.2464 8.52811 14.2464 9.25611Z" fill="currentColor" />
              </svg>
              <span className="relative z-10 italic text-gray-800">
                I just wanted to say Flyway made my entire trip effortless—from visa to hotel. Everything was perfectly handled, and I didn't worry about a thing.                </span>
            </p>
          </div>

          <footer className="mt-6">
            <div className="font-semibold text-gray-800">Ansil Rahman</div>
            <div className="text-sm text-gray-500">Frequent Traveler | Dubai</div>
          </footer>
        </blockquote>
        {/* End Blockquote */}
      </div>
      {/* End Testimonials */}

      <div className="mx-auto max-w-3xl">
        <h3 className="mb-4 text-center text-3xl font-semibold text-white">
          Frequently Asked Questions
        </h3>
        <Question title="How can I book a flight through your agency?" defaultOpen>
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
            insurance, flight itinerary, proof of accommodation, bank statements,
            and employment proof. We’ll guide you step by step for smooth processing.
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
            Visa processing time varies by country. For Dubai, it typically takes
            2-4 working days. For Schengen or other countries, it may take 7–15
            working days depending on the embassy.
          </p>
        </Question>
      </div>
    </div>
  );
};

const Question = ({ title, children, defaultOpen = false }) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="border-b-[1px] border-b-slate-300"
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 py-6"
      >
        <motion.span
          variants={{
            open: { color: "rgba(3, 6, 23, 0)" },
            closed: { color: "rgba(3, 6, 23, 1)" },
          }}
          className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-left text-lg font-medium"
        >
          {title}
        </motion.span>
        <motion.span
          variants={{
            open: { rotate: "180deg", color: "rgb(124 58 237)" },
            closed: { rotate: "0deg", color: "#030617" },
          }}
        >
          <FiChevronDown className="text-2xl" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? height : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden text-slate-200"
      >
        <div ref={ref}>{children}</div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection6;
