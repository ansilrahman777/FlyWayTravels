"use client";

import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import SwooshText from "../SwooshText";

const HeroSection03 = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden ">
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/[0.02] via-transparent to-emerald-500/[0.02] dark:from-blue-500/[0.05] dark:via-transparent dark:to-emerald-500/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        {/* Tall rectangle - top left (Mountain) */}
        <TravelShape
          delay={0.3}
          width={300}
          height={500}
          rotate={-8}
          borderRadius={24}
          gradient="from-blue-500 dark:from-blue-600"
          className="left-[-15%] top-[-10%]"
        />

        {/* Wide rectangle - bottom right (Ocean) */}
        <TravelShape
          delay={0.5}
          width={600}
          height={200}
          rotate={15}
          borderRadius={20}
          gradient="from-emerald-500/10 dark:from-emerald-600/90"
          className="right-[-20%] bottom-[-5%]"
        />

        {/* Square - middle left (Island) */}
        <TravelShape
          delay={0.4}
          width={300}
          height={300}
          rotate={24}
          borderRadius={32}
          gradient="from-amber-500/90 dark:from-amber-600/90"
          className="left-[-5%] top-[40%]"
        />

        {/* Small rectangle - top right (Sun) */}
        <TravelShape
          delay={0.6}
          width={250}
          height={100}
          rotate={-20}
          borderRadius={12}
          gradient="from-amber-500/90 dark:from-amber-500/90"
          className="right-[10%] top-[5%]"
        />

        {/* Medium rectangle - center right (Cloud) */}
        <TravelShape
          delay={0.7}
          width={400}
          height={150}
          rotate={35}
          borderRadius={16}
          gradient="from-white dark:from-white"
          className="right-[-10%] top-[45%]"
        />

        {/* Small square - bottom left (Beach) */}
        <TravelShape
          delay={0.2}
          width={200}
          height={200}
          rotate={-25}
          borderRadius={28}
          gradient="from-amber-400 dark:from-amber-500"
          className="left-[20%] bottom-[10%]"
        />

        {/* Tiny rectangle - top center (Airplane) */}
        <TravelShape
          delay={0.8}
          width={150}
          height={80}
          rotate={45}
          borderRadius={10}
          gradient="from-sky-500 dark:from-sky-500"
          className="left-[40%] top-[15%]"
        />

        {/* Wide rectangle - middle (Horizon) */}
        <TravelShape
          delay={0.9}
          width={450}
          height={120}
          rotate={-12}
          borderRadius={18}
          gradient="from-teal-500 dark:from-teal-500"
          className="left-[25%] top-[60%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <SwooshText
              text="Flyway Travel"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-[5rem] md:text-[8rem] lg:text-[8rem] font-script tracking-wide leading-none text-black select-none"
            />
            {/* <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-white bg-linear-to-b from-blue-800 to-blue-600 dark:from-sky-300 dark:to-blue-400">
                Discover Your
              </span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-white bg-linear-to-r from-amber-500 via-blue-500 to-emerald-500 dark:from-amber-300 dark:via-blue-400 dark:to-emerald-300",
                  "font-pacifico"
                )}
              >
                Next Adventure
              </span>
            </h1> */}
          </motion.div>
          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            {/* <p className="text-base sm:text-lg md:text-xl text-blue-800/80 dark:text-sky-200/80 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              Premium travel experiences crafted just for you. Explore the world with confidence.
            </p> */}
          </motion.div>
          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col mt-20 sm:flex-row justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 font-emilys bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all"
            >
              Plan Your Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 font-emilys bg-white/90 text-blue-800 rounded-lg font-bold border border-blue-200 shadow hover:shadow-md transition-all dark:bg-blue-900/30 dark:text-white dark:border-blue-700"
            >
              View Services
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-sky-50 via-transparent to-blue-50/80 dark:from-[#030712] dark:via-transparent dark:to-[#0a1429]/80 pointer-events-none" />

      {/* Floating elements */}
      {/* <motion.div
        className="absolute bottom-20 left-1/4 text-blue-600 dark:text-blue-400"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        ✈️
      </motion.div> */}
      <motion.div
        className="absolute top-1/3 right-1/3 text-2xl"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      >
        ✈️
      </motion.div>
    </div>
  );
};

function TravelShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/10",
  borderRadius = 16,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          style={{ borderRadius }}
          className={cn(
            "absolute inset-0",
            "bg-linear-to-r to-transparent",
            gradient,
            "backdrop-blur-[1px]",
            "ring-1 ring-white/[0.03] dark:ring-white/[0.02]",
            "shadow-[0_2px_16px_-2px_rgba(255,255,255,0.04)]",
            "after:absolute after:inset-0",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12),transparent_70%)]",
            "after:rounded-[inherit]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export default HeroSection03;
