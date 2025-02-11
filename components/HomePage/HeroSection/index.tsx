"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useIsSSR } from "@react-aria/ssr";

import { Hero1, Hero2, Hero3, HeroContent } from "@/components";

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const { theme } = useTheme();
  const isSSR = useIsSSR();

  const heroBgs = [
    <Hero1 key="bg1" />,
    <Hero2 key="bg2">
      <motion.div exit={{ x: "-100%" }} transition={{ duration: 0.1 }}>
        <HeroContent
          avatarClass=" from-background-200 to-background-200 via-background-200 text-white drop-shadow-lg  md:text-primary"
          caption={2}
          descriptionClass="text-background dark:text-primary"
          offeringsBtnClass="text-white"
          showLightBtn={theme === "dark" || isSSR ? false : true}
        />
      </motion.div>
    </Hero2>,
    <Hero3 key="bg3">
      <motion.div exit={{ x: "-100%" }} transition={{ duration: 0.1 }}>
        <HeroContent
          avatarClass="dark:from-success-100/10 dark:via-foreground-800 dark:to-foreground-800 from-background/30 to-background/30 via-background/30 text-primary"
          showLightBtn={theme === "dark" || isSSR ? false : true}
        />
      </motion.div>
    </Hero3>,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(Math.random() < 0.5 ? "left" : "right");
      setActiveIndex((prevIndex) => (prevIndex + 1) % heroBgs.length);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative  w-full min-h-screen bg-primary ">
      <AnimatePresence>
        <motion.div
          key={activeIndex}
          animate={{ x: 0 }}
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
