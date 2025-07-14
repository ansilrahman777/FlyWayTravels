import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import fwm1 from "../../assets/images/fwm1.jpg";
import fwm2 from "../../assets/images/fwm2.jpg";
import fwm3 from "../../assets/images/fwm3.jpg";
import fwm4 from "../../assets/images/fwm4.jpg";
import fwm5 from "../../assets/images/fwm5.jpg";

// === Config Constants ===
const CARD_SIZE_LG = 365;
const CARD_SIZE_SM = 290;
const BORDER_SIZE = 2;
const CORNER_CLIP = 50;
const CORNER_LINE_LEN = Math.sqrt(
  CORNER_CLIP * CORNER_CLIP + CORNER_CLIP * CORNER_CLIP
);
const ROTATE_DEG = 0;
const STAGGER = 0;
const CENTER_STAGGER = 0;
const SECTION_HEIGHT = 500;
const CARD_GAP_FACTOR = 0.9; // Lower = more spacing
const CARD_ACTIVE_SCALE = 1; // 1.1 = 10% bigger when active

// === Main Component ===
const HeroSection06 = () => {
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

    const handleResize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? CARD_SIZE_LG : CARD_SIZE_SM);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: SECTION_HEIGHT }}
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

// === Testimonial Card Component ===
const TestimonialCard = ({ position, testimonial, handleMove, cardSize }) => {
  const isActive = position === 0;

  return (
    <motion.div
      initial={false}
      onClick={() => handleMove(position)}
      className={`
        absolute left-1/2 top-1/2 cursor-pointer border-black rounded-lg text-black transition-colors duration-500
        ${isActive ? "z-10" : "z-0 bg-white"}
      `}
      style={{
        borderWidth: BORDER_SIZE,
        backgroundImage: `url(${testimonial.imgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      animate={{
        width: isActive ? cardSize * CARD_ACTIVE_SCALE : cardSize,
        height: isActive
          ? (cardSize * CARD_ACTIVE_SCALE * 2) / 3
          : (cardSize * 2) / 3,
        x: `calc(-50% + ${position * (cardSize / CARD_GAP_FACTOR)}px)`,
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
          isActive ? "text-black" : "text-white backdrop-blur-sm"
        }`}
      >
        <h3 className="text-base sm:text-xl mb-2">
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
      "Explore iconic skyscrapers, beaches, and world-class shopping in one unforgettable city.",
    by: "Dubai City Tour",
    imgSrc: fwm3,
  },
  {
    tempId: 1,
    testimonial:
      "Experience thrilling dune bashing, camel rides, and a sunset desert BBQ.",
    by: "Desert Safari Adventure",
    imgSrc: fwm4,
  },
  {
    tempId: 2,
    testimonial:
      "Visit the majestic Sheikh Zayed Mosque and stroll Abu Dhabi's vibrant Corniche.",
    by: "Abu Dhabi City Tour",
    imgSrc: fwm5,
  },
  {
    tempId: 3,
    testimonial:
      "Discover ancient ruins, coastal villages, and mouthwatering pizza in every town.",
    by: "Italy Escape Package",
    imgSrc: fwm3,
  },
  {
    tempId: 4,
    testimonial:
      "Tour multiple European cities, from Paris to Amsterdam, in one seamless journey.",
    by: "Europe Discovery Package",
    imgSrc: fwm2,
  },
  {
    tempId: 5,
    testimonial:
      "Wander through souks, palaces, and the Sahara on a mesmerizing cultural adventure.",
    by: "Morocco Explorer",
    imgSrc: fwm5,
  },
  {
    tempId: 6,
    testimonial:
      "Stroll charming medieval streets and enjoy legendary nightlife in the heart of Prague.",
    by: "Prague City Break",
    imgSrc: fwm4,
  },
  {
    tempId: 7,
    testimonial:
      "Admire delicate cherry blossoms and tranquil temples in Japan's cultural capital.",
    by: "Kyoto Blossom Tour",
    imgSrc: fwm3,
  },
  {
    tempId: 8,
    testimonial:
      "Explore stunning coastlines, Table Mountain, and famous vineyards in South Africa.",
    by: "Cape Town Escape",
    imgSrc: fwm2,
  },
  {
    tempId: 9,
    testimonial:
      "Hike crystal-clear lakes and towering peaks in Canada’s most iconic park.",
    by: "Banff Adventure Package",
    imgSrc: fwm1,
  },
  {
    tempId: 10,
    testimonial:
      "Unwind with spectacular sea views, whitewashed villages, and Mediterranean sunsets.",
    by: "Santorini Honeymoon",
    imgSrc: fwm2,
  },
  {
    tempId: 11,
    testimonial:
      "Wander colorful streets, enjoy coastal views, and discover Lisbon’s hidden gems.",
    by: "Lisbon City Tour",
    imgSrc: fwm1,
  },
];

export default HeroSection06;
