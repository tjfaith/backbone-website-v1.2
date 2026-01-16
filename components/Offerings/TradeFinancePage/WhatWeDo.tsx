"use client";

import React from "react";

import { CTitle, GetStartedBtn, ContactSalesBtn } from "@/components";

const WhatWeDo = () => {
  return (
    <div className="overflow-hidden bg-white dark:bg-background py-10 sm:py-12">
      <div className="page-max-width px-4 sm:px-0">
        <div
          className="flex flex-col items-center mb-10 sm:mb-[53px]"
          data-aos="fade-up"
        >
          <CTitle
            className="
              border border-foreground-100
              bg-white
              dark:bg-background-100
              dark:border-background-300
              mb-3
            "
            data-aos="fade-up"
            iconType="flashlight"
            title="What we do"
          />

          <div
            className="
              clash-display-font
              text-center
              tracking-[-0.16px]
              leading-9 sm:leading-10
              text-[26px] sm:text-[32px]
              text-primary
              dark:text-foreground-50
              font-medium
              max-w-xs sm:max-w-md
              mb-3
            "
            data-aos="fade-up"
            data-aos-delay="100"
          >
            we provide a better way to satisfy your customers
          </div>

          <div
            className="
              mb-6 sm:mb-8
              text-primary-500
              dark:text-foreground-300
              text-center
              text-sm sm:text-base
              font-normal
              leading-6
              tracking-[-0.176px]
              max-w-sm sm:max-w-lg
            "
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Backbone gives you smarter capital and trusted financial tools, so
            you can meet customer commitments, manage risk, and deliver with
            confidence.
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
              className="w-full sm:w-auto"
              label="Speak to our team"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
