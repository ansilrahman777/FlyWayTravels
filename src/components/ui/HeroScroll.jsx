import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import { FiArrowDown } from "react-icons/fi";
import vedioFile from "../../assets/vedios/vedio1.mp4"; // Adjust the path as needed
import hero_fw_1 from "../../assets/images/fw123.jpg"; // Adjust the path as needed

export const HeroScroll = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scrollVelocity = useVelocity(scrollYProgress);

  const skewXRaw = useTransform(scrollVelocity, [-1, 1], ["45deg", "-45deg"]);
  const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -3000]);
  const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

  return (
    <section
      ref={targetRef}
      className="relative text-white overflow-hidden"
    >
      <video
        className="absolute top-0 left-0 w-full h-screen object-cover z-0"
        src={vedioFile}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="sticky top-0 flex h-screen flex-col justify-between overflow-hidden">
        <CenterCopy />
        <motion.p
          style={{ skewX, x }}
          className="origin-bottom-left whitespace-nowrap text-7xl font-black uppercase leading-[0.85] md:text-9xl md:leading-[0.85]"
        >
          Fly beyond borders, travel with heart—because the world is waiting and Flyway makes it happen.
        </motion.p>
        <ScrollArrow />
      </div>
    </section>
  );
};

const CenterCopy = () => {
  return (
    <div className="flex items-center justify-center px-4 mt-52">
      <img
        src={hero_fw_1}
        alt="Placeholder image"
        className="mr-2 h-full w-20  object-cover"
      />
      <h1 className="text-2xl font-bold text-white sm:text-5xl md:text-7xl">
        See the world. <br />
        Create memories. <br />
        Travel with{" "}
        <span className="inline-block -skew-x-[18deg] font-black text-blue-700">
          FLYWAY.
        </span>
      </h1>
    </div>
  );
};

const ScrollArrow = () => {
  return (
    <>
      <motion.div
        className="absolute left-4 top-1/2 hidden -translate-y-1/2 text-xs lg:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
        >
          SCROLL
        </span>
        <FiArrowDown className="mx-auto" />
      </motion.div>
      <motion.div
        className="absolute right-4 top-1/2 hidden -translate-y-1/2 text-xs lg:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
        >
          SCROLL
        </span>
        <FiArrowDown className="mx-auto" />
      </motion.div>
    </>
  );
};
