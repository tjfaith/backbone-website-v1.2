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
          className="absolute lg:bottom-2 bottom-20 lg:left-36 left-0 inline-flex  p-3 rounded-full text-[#346A4D] text-3xl w-16 h-16
    px-[19.692px] py-[14.769px]
    justify-center items-center
    gap-[4.923px]
    flex-shrink-0
    border-[0.615px] border-[#9BE1BC]
    bg-[#D6F7E5]
    shadow-[inset_0px_-0.615px_3.692px_0px_#9BE1BC,_2.462px_1.846px_0px_2.462px_#9BE1BC]
          "
          data-aos="fade-up"
          transition={{ duration: 2, repeat: Infinity }}
        >
          ₦
        </motion.div>

        <motion.div
          animate={{ scale: [1, 0.9, 1] }}
          className="absolute top-2 lg:right-36 right-0 inline-flex rounded-full dark:bg-secondary-600/50 text-[#6A5E34] text-3xl
    w-16 h-16
    px-[19.692px] py-[14.769px]
    justify-center items-center
    gap-[4.923px]
    flex-shrink-0
    border-[0.615px] border-[#E1D29B]
    bg-[#F7F0D6]
    shadow-[inset_0px_-0.615px_3.692px_0px_#E1D29B,_2.462px_1.846px_0px_2.462px_#E1D29B]
          "
          data-aos="fade-up"
          transition={{ duration: 2, repeat: Infinity }}
        >
          £
        </motion.div>

        <motion.div
          animate={{ scale: [1, 0.9, 1] }}
          className="absolute -bottom-16 lg:right-48 right-0 inline-flex rounded-full dark:bg-secondary-600/50 text-[#34586A] text-3xl w-16 h-16
    px-[19.692px] py-[14.769px]
    justify-center items-center
    gap-[4.923px]
    flex-shrink-0
    border-[0.615px] border-[#9BCAE1]
    bg-[#D6ECF7]
    shadow-[inset_0px_-0.615px_3.692px_0px_#9BCAE1,_2.462px_1.846px_0px_2.462px_#9BCAE1]
          "
          data-aos="fade-up"
          transition={{ duration: 2, repeat: Infinity }}
        >
          $
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
          className="text-primary-600 text-base font-medium max-w-lg mx-auto text-center"
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
