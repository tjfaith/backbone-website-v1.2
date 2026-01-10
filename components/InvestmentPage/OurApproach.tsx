"use client";

import React from "react";
import { Image } from "@heroui/image";

import { CTitle, GetStartedBtn, ContactSalesBtn } from "@/components";
import { OurApp } from "@/public/assets";

const OurApproach = () => {
  return (
    <div className="overflow-hidden bg-white py-12">
      <div className="page-max-width">
        {/* TEXT HEADER */}
        <div
          className="flex flex-col items-center mb-10 sm:mb-[53px]"
          data-aos="fade-up"
        >
          <CTitle
            className="border border-foreground-100 bg-white mb-3"
            data-aos="fade-up"
            iconType="flashlight"
            title="Our approach"
          />

          <div
            className="
              clash-display-font
              text-center
              tracking-[-0.16px]
              leading-8
              sm:leading-10
              text-2xl
              sm:text-[32px]
              text-primary
              font-medium
              max-w-md
              mb-3
            "
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We provide strategies designed to work for you
          </div>

          <div
            className="
              mb-8
              text-primary-500
              text-center
              text-base
              font-normal
              leading-6
              tracking-[-0.176px]
              max-w-lg
            "
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Our strategies are thoughtfully designed around your goals, helping
            you make smarter decisions and grow with confidence.
          </div>

          <div
            className="flex flex-col sm:flex-row items-center gap-3 lg:gap-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <GetStartedBtn className="text-base" label="Start investing" />
            <ContactSalesBtn label="Speak to our team" />
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div
          className="relative overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <Image
            removeWrapper
            className="
              h-[32vh]
              sm:h-[36vh]
              lg:h-[40.6vh]
              w-full
              object-cover
              object-[50%_60%]
            "
            src={OurApp.src}
          />

          {/* QUOTE */}
          <div
            className="
              z-20
              absolute
              italic
              font-normal
              leading-6
              tracking-[-0.27px]
              text-xs
              sm:text-sm
              flex
              flex-col
              justify-end
              items-end
              bottom-4
              right-4
              sm:bottom-5
              sm:right-5
              text-white
              max-w-[70%]
              text-right
            "
            data-aos="fade-left"
            data-aos-delay="350"
          >
            <div>“Know what you own, and know why you own it.”</div>
            <div>Peter Lynch</div>
          </div>

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_53.93%,#000_111.92%)] z-10 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
