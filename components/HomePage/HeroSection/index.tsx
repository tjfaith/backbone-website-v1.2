"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { useDispatch } from "react-redux";

import HeroContent from "./HeroContent";

import { HeroBg2 } from "@/components";

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  // const dispatch = useDispatch();
  const heroBgs = [
    // <HeroBg1 key="bg1">
    //   <motion.div exit={{ x: "-100%" }} transition={{ duration: 0.1 }}>
    //     <HeroContent avatarClass="dark:from-success-100/10 dark:via-foreground-800 dark:to-foreground-800 from-background/30 to-background/30 via-background/30 text-primary" />
    //   </motion.div>
    // </HeroBg1>,
    <HeroBg2 key="bg2">
      <motion.div exit={{ x: "-100%" }} transition={{ duration: 0.1 }}>
        <HeroContent
          avatarClass=" from-background-200 to-background-200 via-background-200 text-primary drop-shadow-lg  md:text-primary"
          caption={2}
          descriptionClass="text-background dark:text-primary"
        />
      </motion.div>
    </HeroBg2>,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(Math.random() < 0.5 ? "left" : "right");
      setActiveIndex((prevIndex) => (prevIndex + 1) % heroBgs.length);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-screen bg-primary ">
      <AnimatePresence>
        <motion.div
          key={activeIndex}
          animate={{ x: 0 }} // Stay in place
          className="absolute w-full h-full top-0 left-0"
          exit={{ x: direction === "right" ? "-100%" : "100%" }}
          initial={{ x: direction === "right" ? "100%" : "-100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {heroBgs[activeIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;
