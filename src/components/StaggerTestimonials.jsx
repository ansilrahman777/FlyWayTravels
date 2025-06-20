import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import fwm1 from "../assets/images/fwm1.jpg";
import fwm2 from "../assets/images/fwm2.jpg";
import fwm3 from "../assets/images/fwm3.jpg";
import fwm4 from "../assets/images/fwm4.jpg";
import fwm5 from "../assets/images/fwm5.jpg";


const CARD_SIZE_LG = 365;
const CARD_SIZE_SM = 290;

const BORDER_SIZE = 2;
const CORNER_CLIP = 50;
const CORNER_LINE_LEN = Math.sqrt(
  CORNER_CLIP * CORNER_CLIP + CORNER_CLIP * CORNER_CLIP
);

const ROTATE_DEG = 0;

const STAGGER = 15;
const CENTER_STAGGER = -10;

const SECTION_HEIGHT = 500;

export const StaggerTestimonials = () => {
  const [cardSize, setCardSize] = useState(CARD_SIZE_LG);

  const [testimonials, setTestimonials] = useState(TESTIMONIAL_DATA);

  const handleMove = (position) => {
    const copy = [...testimonials];

    if (position > 0) {
      for (let i = position; i > 0; i--) {
        const firstEl = copy.shift();

        if (!firstEl) return;

        copy.push({ ...firstEl, tempId: Math.random() });
      }
    } else {
      for (let i = position; i < 0; i++) {
        const lastEl = copy.pop();

        if (!lastEl) return;

        copy.unshift({ ...lastEl, tempId: Math.random() });
      }
    }

    setTestimonials(copy);
  };

  useEffect(() => {
    const { matches } = window.matchMedia("(min-width: 640px)");

    if (matches) {
      setCardSize(CARD_SIZE_LG);
    } else {
      setCardSize(CARD_SIZE_SM);
    }

    const handleSetCardSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");

      if (matches) {
        setCardSize(CARD_SIZE_LG);
      } else {
        setCardSize(CARD_SIZE_SM);
      }
    };

    window.addEventListener("resize", handleSetCardSize);

    return () => window.removeEventListener("resize", handleSetCardSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden "
      style={{
        height: SECTION_HEIGHT,
      }}
    >
      {testimonials.map((t, idx) => {
        let position = 0;

        if (testimonials.length % 2) {
          position = idx - (testimonials.length + 1) / 2;
        } else {
          position = idx - testimonials.length / 2;
        }

        return (
          <TestimonialCard
            key={t.tempId}
            testimonial={t}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-8">
        <button
          onClick={() => handleMove(-1)}
          className="grid h-14 w-14 rounded-full place-content-center text-3xl transition-colors hover:bg-black hover:text-white"
        >
          <GoArrowLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className="grid h-14 w-14 rounded-full place-content-center text-3xl transition-colors hover:bg-black hover:text-white"
        >
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

const TestimonialCard = ({ position, testimonial, handleMove, cardSize }) => {
  const isActive = position === 0;

  return (
    <motion.div
  initial={false}
  onClick={() => handleMove(position)}
  className={`
    absolute left-1/2 top-1/2 cursor-pointer border-black rounded-lg text-black transition-colors duration-500
    ${isActive ? "z-10 " : "z-0 bg-white"}
  `}
  style={{
    borderWidth: BORDER_SIZE,
    backgroundImage: `url(${testimonial.imgSrc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
  animate={{
    width: cardSize, // assuming 300 or 600
    height: (cardSize * 2) / 3, // 3:2 ratio
    x: `calc(-50% + ${position * (cardSize / 1.5)}px)`,
    y: `calc(-50% + ${
      isActive ? CENTER_STAGGER : position % 2 ? STAGGER : -STAGGER
    }px)`,
    rotate: isActive ? 0 : position % 2 ? ROTATE_DEG : -ROTATE_DEG,
    boxShadow: isActive ? "0px 0px 0px 0px black" : "0px 0px 0px 0px black",
  }}
  transition={{
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 50,
  }}
>
  <div
    className={`absolute inset-0 flex flex-col justify-end rounded-lg p-6 transition-colors duration-500 ${
      isActive ? "text-black " : "text-white backdrop-blur-sm"
    }`}
  >
    <h3 className={`text-base sm:text-xl mb-2`}>
      "{testimonial.testimonial}"
    </h3>
    <p
      className={`text-sm italic ${
        isActive ? "text-indigo-200" : "text-neutral-200"
      }`}
    >
      - {testimonial.by}
    </p>
  </div>
</motion.div>

  );
};

const TESTIMONIAL_DATA = [
  {
    tempId: 0,
    testimonial:
      "My favorite solution in the market. We work 5x faster with COMPANY.",
    by: "Alex, CEO at COMPANY",
    imgSrc: fwm3,
  },
  {
    tempId: 1,
    testimonial:
      "I'm confident my data is safe with COMPANY. I can't say that about other providers.",
    by: "Dan, CEO at COMPANY",
    imgSrc: fwm4,
  },
  {
    tempId: 2,
    testimonial:
      "I know it's cliche, but we were lost before we found COMPANY. Can't thank you guys enough!",
    by: "Stephanie, CEO at COMPANY",
    imgSrc: fwm5,
  },
  {
    tempId: 3,
    testimonial:
      "COMPANY's products make planning for the future seamless. Can't recommend them enough!",
    by: "Marie, CEO at COMPANY",
    imgSrc: fwm3,
  },
  {
    tempId: 4,
    testimonial: "If I could give 11 stars, I'd give 12.",
    by: "Andre, CEO at COMPANY",
    imgSrc: fwm2,
  },
  {
    tempId: 5,
    testimonial:
      "SO SO SO HAPPY WE FOUND YOU GUYS!!!! I'd bet you've saved me 100 hours so far.",
    by: "Jeremy, CEO at COMPANY",
    imgSrc: fwm5,
  },
  {
    tempId: 6,
    testimonial:
      "Took some convincing, but now that we're on COMPANY, we're never going back.",
    by: "Pam, CEO at COMPANY",
    imgSrc: fwm4,
  },
  {
    tempId: 7,
    testimonial:
      "I would be lost without COMPANY's in depth analytics. The ROI is EASILY 100X for us.",
    by: "Daniel, CEO at COMPANY",
    imgSrc: fwm3,
  },
  {
    tempId: 8,
    testimonial: "It's just the best. Period.",
    by: "Fernando, CEO at COMPANY",
    imgSrc: fwm2,
  },
  {
    tempId: 9,
    testimonial: "I switched 5 years ago and never looked back.",
    by: "Andy, CEO at COMPANY",
    imgSrc: fwm1,
  },
  {
    tempId: 10,
    testimonial:
      "I've been searching for a solution like COMPANY for YEARS. So glad I finally found one!",
    by: "Pete, CEO at COMPANY",
    imgSrc: fwm2,
  },
  {
    tempId: 11,
    testimonial:
      "It's so simple and intuitive, we got the team up to speed in 10 minutes.",
    by: "Marina, CEO at COMPANY",
    imgSrc: fwm1,
  },
];