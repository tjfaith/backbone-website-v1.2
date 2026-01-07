"use client";
import { motion } from "framer-motion";
import React from "react";

import { About2, About3, About4 } from "@/public/assets";

const AboutStatements = () => {
  return (
    <div className="page-max-width ">
      <div
        className="relative w-full rounded-xl h-screen-50 overflow-hidden mb-4"
        data-aos="fade-up"
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${About2.src})` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          whileHover={{ scale: 1.5 }}
        />

        <div className="relative  z-10 pointer-events-none flex flex-col justify-end h-full p-10 bg-black/30">
          <div className="text-3xl text-white mb-2 clash-display-font drop-shadow-xl">
            Mission
          </div>
          <div className="xl:text-base text-sm text-white max-w-xl font-medium tracking-tight drop-shadow-xl">
            Our Mission is to enable at least half of the fiat, stablecoin, and
            Bitcoin transactions that either originate out of Africa, have their
            destination in Africa, or are in one way or the other connected to
            Africa and Africans.
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div
          className="relative w-full rounded-xl h-screen-70 overflow-hidden"
          data-aos="fade-up"
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${About3.src})` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            whileHover={{ scale: 1.5 }}
          />

          <div className="relative bg-black/40 z-10 pointer-events-none flex flex-col justify-end h-full p-10">
            <div className="text-3xl drop-shadow-xl text-white mb-2 clash-display-font">
              Vision
            </div>
            <div className="xl:text-base text-sm text-white max-w-xl font-medium tracking-tight drop-shadow-xl">
              Our longterm Vision is to build an ecosystem of integrated
              financial services that create possibilities for Africans and the
              rest of the world across a broad range of sectors, industries, and
              market segments.
            </div>
          </div>
        </div>

        <div
          className="relative w-full rounded-xl h-screen-70 overflow-hidden"
          data-aos="fade-up"
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${About4.src})` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            whileHover={{ scale: 1.5 }}
          />

          <div className="relative bg-black/60 z-10 pointer-events-none flex flex-col justify-end h-full p-10">
            <div className="text-3xl text-white mb-2 clash-display-font drop-shadow-xl">
              Purpose
            </div>
            <div className="xl:text-base text-sm text-white max-w-xl font-medium tracking-tight drop-shadow-xl ">
              At Backbone, we see possibilities as the lightbulb moments when
              dreams suddenly feel tangible and achievable. Our Purpose is to
              enable these possibilities for the human race anywhere in the
              world, beginning with Africa and Africans.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStatements;
