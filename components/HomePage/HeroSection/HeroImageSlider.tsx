"use client";

import { Image } from "@heroui/image";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { Hero1, Hero2, Hero3, Hero4, Hero5, Hero6 } from "@/public/assets";
import { DrawPattern } from "@/components";

const images = [
  Hero1.src,
  Hero2.src,
  Hero3.src,
  Hero4.src,
  Hero5.src,
  Hero6.src,
];

const IMAGE_DURATION = 16; // seconds per image
const DRAW_DELAY = 1.2; // when pattern starts after image settles

const HeroImageSlider = () => {
  const [index, setIndex] = useState(0);
  const [showPattern, setShowPattern] = useState(false);

  useEffect(() => {
    setShowPattern(false);

    const patternTimer = setTimeout(() => {
      setShowPattern(true);
    }, DRAW_DELAY * 1000);

    const imageTimer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, IMAGE_DURATION * 1000);

    return () => {
      clearTimeout(patternTimer);
      clearTimeout(imageTimer);
    };
  }, [index]);

  return (
    <div className="absolute inset-0">
      {/* Image transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-0"
          exit={{ opacity: 0, scale: 1.02 }}
          initial={{ opacity: 0, scale: 1.04 }}
          transition={{
            duration: 1.4,
            ease: "easeInOut",
          }}
        >
          <Image
            removeWrapper
            className="absolute inset-0 w-full h-full object-cover"
            src={images[index]}
          />
        </motion.div>
      </AnimatePresence>

      {/* Pattern draw (after image settles) */}
      {showPattern && (
        <div className="absolute inset-0 z-10 w-full h-full pointer-events-none opacity-30">
          <DrawPattern />
        </div>
      )}
    </div>
  );
};

export default HeroImageSlider;
