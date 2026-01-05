import { WorldMap } from "@/public/assets";
import { Image } from "@heroui/image";
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const GlobalReachCard = () => {
  return (
    <div className="border-t-[0.5px] lg:border-r-[0.5px]" data-aos="fade-up">
      <div className="grid grid-cols-1 sm:grid-cols-2 px-6 border-b-1">
        <div
          className=" border-r-1 flex flex-col items-center justify-center px-6 py-14"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <div className="flex items-center clash-display-font text-3xl font-medium leading-10 tracking-[-0.16px] text-primary">
            <CountUp enableScrollSpy scrollSpyOnce duration={5} end={100} />
            <span>%</span>
          </div>
          <div className="text-base font-normal leading-6 tracking-[-0.176px]">
            Transparent pricing
          </div>
        </div>

        <div
          className=" border-l-1 py-14 flex flex-col items-center justify-center px-6 "
          data-aos="fade-up"
          data-aos-delay="120"
        >
          <div className="flex items-center clash-display-font text-3xl font-medium leading-10 tracking-[-0.16px] text-primary">
            <CountUp enableScrollSpy scrollSpyOnce duration={5} end={180} />
            <span>+</span>
          </div>
          <div className="text-base font-normal leading-6 tracking-[-0.176px]">
            Countries served
          </div>
        </div>
      </div>

      <div className="py-6 flex flex-col justify-between">
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(12px)",
            scale: 1.02,
          }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.8,
            ease: "easeOut",
          }}
        >
          <Image
            src={WorldMap.src}
            disableAnimation
            disableSkeleton
            className="mb-2"
          />
        </motion.div>

        <div
          className="relative  flex flex-col justify-center items-center max-w-sm mx-auto space-y-2"
          data-aos="fade-up"
          data-aos-delay="350"
        >
          <div className="clash-display-font text-2xl font-medium leading-8 text-primary">
            Global Reach
          </div>
          <div className="text-center text-primary-500 text-base font-normal leading-6 tracking-[-0.176px]">
            We support settlements across the world, enabling you to transact
            globally with ease except the sanctioned countries.
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalReachCard;
