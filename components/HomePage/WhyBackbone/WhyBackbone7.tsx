"use client";

import React from "react";
import { Image } from "@heroui/image";

import { CTitle, GetStartedBtn, ContactSalesBtn } from "@/components";
import { OfferingImg18 } from "@/public/assets";

const WhyBackbone7 = () => {
  return (
    <div className="overflow-hidden bg-white dark:bg-background py-12">
      <div className="page-max-width">
        <div
          className="flex flex-col items-center mb-[53px]"
          data-aos="fade-up"
        >
          <CTitle
            className="border border-foreground-100 bg-white dark:bg-background-100 mb-3"
            data-aos="fade-up"
            iconType="flashlight"
            title="Why Backbone"
          />

          <div
            className="clash-display-font text-center tracking-[-0.16px] leading-10 text-[32px] text-primary font-medium max-w-xs mb-3 dark:text-primary"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We are financing your energy need
          </div>

          <div
            className="mb-8 text-primary-500 dark:text-primary-300 text-center text-base font-normal leading-6 tracking-[-0.176px] max-w-lg"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Energy projects need more than funding. We provide structured,
            flexible support that helps them move from idea to impact.
          </div>

          <div
            className="flex flex-col sm:flex-row items-center gap-3 lg:gap-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <GetStartedBtn className="text-base" />
            <ContactSalesBtn />
          </div>
        </div>

        <div className="relative overflow-hidden">
          <Image
            removeWrapper
            className="h-[365px] w-full object-cover object-center"
            src={OfferingImg18.src}
          />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_53.93%,#000_111.92%)] z-10 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default WhyBackbone7;
