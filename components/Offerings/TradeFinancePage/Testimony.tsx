"use client";

import React from "react";
import { motion } from "framer-motion";

import {
  OfferingImg4,
  OfferingImg5,
  OfferingImg6,
  OfferingImg7,
  OfferingImg8,
} from "@/public/assets";
import { TestimonyCard } from "@/components";

const Testimony = () => {
  const cardPros = [
    {
      img: OfferingImg5.src,
      tag: {
        name: "Matgreen Farms",
        avatar: OfferingImg7.src,
        rating: 9.5,
      },
    },
    {
      img: OfferingImg4.src,
      tag: {
        name: "Iya Bassira stores",
        avatar: OfferingImg8.src,
        rating: 9.5,
      },
    },
    {
      img: OfferingImg6.src,
      tag: {
        name: "Johnson auto imports",
        avatar: OfferingImg8.src,
        rating: 9.5,
      },
    },
  ];

  return (
    <div className="py-14 overflow-hidden">
      <div
        className="
          page-max-width mx-auto w-full
          flex flex-col items-center gap-6
          sm:flex-row sm:justify-center sm:gap-0
        "
      >
        {cardPros.map((data, index) => (
          <motion.div
            key={index}
            className="
              w-full flex justify-center
              sm:w-auto
            "
            data-aos="fade-up"
            data-aos-delay={index * 120}
            data-aos-duration="700"
            initial={false}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            whileHover={{
              y:
                typeof window !== "undefined" && window.innerWidth < 640
                  ? -6
                  : 0,
              scale:
                typeof window !== "undefined" && window.innerWidth < 640
                  ? 1.03
                  : 1,
            }}
          >
            <TestimonyCard
              cardPros={data}
              className={`
                ${(index < 1 || index > 1) && "h-[382px]"}
                ${index === 0 && "sm:-mr-9"}
                ${index === 2 && "sm:-ml-8 sm:z-10"}
                ${index === 1 && "sm:z-20"}
              `}
              imageClassName={`${index === 0 && "object-[50%_50%]"}`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimony;
