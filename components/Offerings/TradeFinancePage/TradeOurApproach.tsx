"use client";

import React from "react";
import { Image } from "@heroui/image";

import { CTitle, GetStartedBtn, ContactSalesBtn } from "@/components";
import { OfferingImg10, OurApp } from "@/public/assets";

const TradeOurApproach = () => {
  return (
    <div className="overflow-hidden bg-white py-10 sm:py-12">
      <div className="page-max-width px-4 sm:px-0">
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
              leading-9 sm:leading-10
              text-[26px] sm:text-[32px]
              text-primary
              font-medium
              max-w-xs sm:max-w-sm
              mb-3
            "
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Designed for scale, security, and confidence
          </div>

          <div
            className="
              mb-6 sm:mb-8
              text-primary-500
              text-center
              text-sm sm:text-base
              font-normal
              leading-6
              tracking-[-0.176px]
              max-w-sm sm:max-w-2xl
            "
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Whether you’re managing imports, exports, large projects, or
            supplier relationships, Backbone Trade Finance gives you the
            leverage to operate with certainty and control.
          </div>

          <div
            className="
              flex
              flex-col
              sm:flex-row
              items-center
              w-full sm:w-auto
              gap-3
              lg:gap-2
            "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <GetStartedBtn className="text-base w-full sm:w-auto" />
            <ContactSalesBtn
              label="Speak to our team"
              className="w-full sm:w-auto"
            />
          </div>
        </div>

        {/* Image Section */}
        <div
          className="relative overflow-hidden rounded-xl"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <Image
            removeWrapper
            className="h-[32vh] sm:h-[40.6vh] w-full object-cover object-[50%_60%]"
            src={OfferingImg10.src}
            data-aos="zoom-in"
            data-aos-delay="300"
          />

          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_53.93%,#000_111.92%)] z-10 rounded-xl"
            data-aos="fade-in"
            data-aos-delay="400"
          />
        </div>
      </div>
    </div>
  );
};

export default TradeOurApproach;
