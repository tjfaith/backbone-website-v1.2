"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Icon } from "@iconify/react";

import { Bar, Bar2 } from "@/public/assets";

const CHeader = () => {
  return (
    <div className="relative">
      <div className="z-0">
        <motion.div
          animate={{ scale: [1, 0.9, 1] }}
          className="absolute lg:bottom-2 bottom-20 lg:left-36 left-0 inline-flex items-center justify-center p-3 rounded-full bg-info-300 text-white text-3xl"
          data-aos="fade-up"
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Icon icon="ri:coins-fill" />
        </motion.div>

        <motion.div
          animate={{ scale: [1, 0.9, 1] }}
          className="absolute top-2 lg:right-36 right-0 inline-flex items-center justify-center p-3 rounded-full bg-secondary-500 dark:bg-secondary-600/50 text-white text-3xl"
          data-aos="fade-up"
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Icon icon="ri:flashlight-fill" />
        </motion.div>
      </div>
      <div className=" z-10 w-full">
        <div className=" sm:text-4xl text-3xl text-primary gap-1 flex flex-col items-center justify-center mb-4 clash-display-font font-medium">
          <div
            className="flex items-center sm:flex-row flex-col gap-1"
            data-aos="fade-up"
          >
            <span>Here is how we are</span>
            <span className="text-secondary-500 dark:text-secondary-600 relative">
              Changing
              <Image
                alt="bar2"
                className=" w-full absolute"
                data-aos="fade-up"
                src={Bar}
              />
            </span>
          </div>
          <div
            className="flex items-center sm:flex-row flex-col gap-1 "
            data-aos="fade-up"
          >
            <span className="text-info-300 relative">
              Payments
              <Image
                alt="bar2"
                className=" w-full absolute"
                data-aos="fade-up"
                src={Bar2}
              />
            </span>
            <span>for you</span>
          </div>
        </div>
        <div
          className="text-primary-600 text-sm font-medium max-w-lg mx-auto text-center"
          data-aos="fade-up"
        >
          Imagine a world where payments aren’t just transactions but
          opportunities to connect, to grow, and to thrive.
        </div>
      </div>
    </div>
  );
};

export default CHeader;
