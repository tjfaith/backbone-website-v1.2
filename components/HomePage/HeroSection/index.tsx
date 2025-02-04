"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroContent from "./HeroContent";
import { HeroBg1, HeroBg2 } from "@/components";

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const darkHeroBgs = [
    <HeroBg1 key="bg1">
      <motion.div
        exit={{ x: "-100%" }}
        transition={{ duration: 0.10 }}
      >
        <HeroContent avatarClass="dark:from-primary/30 dark:via-primary/30 dark:to-primary/30" />
      </motion.div>
    </HeroBg1>,
    <HeroBg2 key="bg2">
      <motion.div
        exit={{ x: "-100%" }}
        transition={{ duration: 0.10 }}
      >
        <HeroContent caption={2} avatarClass="dark:from-primary dark:via-primary dark:to-primary dark:text-white from-background to-background via-background text-background md:text-primary" />
      </motion.div>
    </HeroBg2>,
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly set direction to 'left' or 'right'
      setDirection(Math.random() < 0.5 ? 'left' : 'right');
      setActiveIndex((prevIndex) => (prevIndex + 1) % darkHeroBgs.length); // Assuming you have 2 background elements
    }, 12000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="relative overflow-hidden w-full h-screen bg-primary">
      <AnimatePresence>
        {/* <motion.div
          key={activeIndex}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute w-full h-full top-0 left-0"
        > */}
        <motion.div
          key={activeIndex}
          initial={{ x: direction === 'right' ? "100%" : "-100%" }} // Random entry direction
          animate={{ x: 0 }} // Stay in place
          exit={{ x: direction === 'right' ? "-100%" : "100%" }} // Exit in opposite direction
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute w-full h-full top-0 left-0"
        >
          {darkHeroBgs[activeIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;
