"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

interface SwooshTextProps {
  text?: string;
  className?: string;
  shadowColors?: {
    first?: string;
    second?: string;
    third?: string;
    fourth?: string;
    glow?: string;
  };
  delay?: number;
  threshold?: number;
  rootMargin?: string;
}

const SwooshText = ({
  text = "Hover Me",
  className = "",
  shadowColors = {
    first: "#0072bb",
    second: "#1278b7",
    third: "#267eb5",
    fourth: "#498ab2",
    glow: "#6794af",
  },
  delay = 0,
  threshold = 0.2,
  rootMargin = "0px",
}: SwooshTextProps) =>{
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
  if (!ref.current) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (ref.current) observer.unobserve(ref.current);
      }
    },
    { threshold, rootMargin }
  );

  if (ref.current) observer.observe(ref.current);
  return () => observer.disconnect();
}, [threshold, rootMargin]);


  const textShadowStyle = {
    textShadow: `10px 10px 0px ${shadowColors.first}, 
                 15px 15px 0px ${shadowColors.second}, 
                 20px 20px 0px ${shadowColors.third}, 
                 25px 25px 0px ${shadowColors.fourth}, 
                 45px 45px 10px ${shadowColors.glow}`,
  };

  return (
    <div className="w-full text-center" ref={ref}>
      <motion.div
        className={cn(
          "inline-block cursor-pointer text-3xl font-bold",
          "transition-all duration-200 ease-in-out tracking-widest",
          "text-black dark:text-white italic",
          className
        )}
        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
        animate={
          inView
            ? { opacity: 1, y: 0, filter: "blur(0px)" }
            : { opacity: 0, y: 50, filter: "blur(10px)" }
        }
        transition={{ duration: 0.8, delay: delay / 1000 }}
        style={inView ? textShadowStyle : {}}
        whileHover={{ textShadow: "none" }}
      >
        {text}
      </motion.div>
    </div>
  );
}

export default SwooshText;