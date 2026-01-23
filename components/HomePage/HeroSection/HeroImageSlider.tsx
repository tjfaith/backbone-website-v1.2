"use client";

import { Image } from "@heroui/image";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { cn } from "@heroui/theme";

import { countryPageContent } from "@/app/utils";
import { DrawPattern } from "@/components";
import { RootState } from "@/app/store";

const HeroImageSlider = () => {
  const { selectedCountry } = useSelector((state: RootState) => state.settings);

  const images =
    countryPageContent[selectedCountry.code].homePage.heroSection.heroImage;

  const IMAGE_DURATION = 16; // seconds per image
  const DRAW_DELAY = 1.2; // when pattern starts after image settles

  const [index, setIndex] = useState(0);
  const [showPattern, setShowPattern] = useState(
    images.length > 1 ? false : true,
  );

  useEffect(() => {
    if (images.length > 1) {
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
    }
  }, [index]);

  return (
    <div className="absolute inset-0">
      {/* Image transition */}
      {images.length <= 1 ? (
        <Image
          removeWrapper
          className={cn(
            "absolute inset-0 w-full h-full object-cover",
            countryPageContent[selectedCountry.code].homePage.heroSection
              .heroImageClass,
          )}
          src={images[0]}
        />
      ) : (
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
              className={cn(
                "absolute inset-0 w-full h-full object-cover",
                countryPageContent[selectedCountry.code].homePage.heroSection
                  .heroImageClass,
              )}
              src={images[index]}
            />
          </motion.div>
        </AnimatePresence>
      )}

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
