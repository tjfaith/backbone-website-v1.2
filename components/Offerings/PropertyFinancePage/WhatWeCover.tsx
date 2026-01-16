import { Image } from "@heroui/image";
import React from "react";

import { OfferingImg15, OfferingImg16 } from "@/public/assets";
import { ContactSalesBtn, CTitle, GetStartedBtn } from "@/components";

const WhatWeCover = () => {
  return (
    <div className="overflow-hidden py-16 sm:py-20" data-aos="fade-up">
      <div
        className="
          page-max-width
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12
        "
      >
        {/* TEXT CONTENT */}
        <div
          className="
            flex
            flex-col
            justify-start
            mt-10 
            items-center
            lg:items-start
            text-center
            lg:text-left
          "
          data-aos="fade-left"
        >
          <CTitle
            className="border border-foreground-100 bg-white dark:bg-background-100 dark:border-background-300 mb-3"
            data-aos="fade-up"
            iconType="flashlight"
            title="What we cover"
          />

          <div
            className="
              clash-display-font
              tracking-[-0.16px]
              leading-9
              sm:leading-10
              text-2xl
              sm:text-[32px]
              text-primary
              dark:text-foreground
              font-medium
              mb-3
              max-w-lg
            "
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We’ve put together options that truly work for you.
          </div>

          <div
            className="
              mb-8
              text-primary-500
              dark:text-foreground-300
              text-base
              font-normal
              leading-6
              tracking-[-0.27px]
              max-w-lg
            "
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Whether you’re renting or buying, our home finance options are
            designed to give you flexibility, clarity, and peace of mind.
          </div>

          <div
            className="
              flex
              flex-col
              sm:flex-row
              items-center
              gap-3
              sm:gap-2
            "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <GetStartedBtn className="text-base w-full sm:w-auto" />
            <ContactSalesBtn />
          </div>
        </div>

        {/* IMAGE CARDS */}
        <div className="flex flex-col gap-[14px]">
          {/* CARD 1 */}
          <div
            className="relative overflow-hidden rounded-3xl h-[185px]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Image
              disableAnimation
              disableSkeleton
              alt="what we cover 15"
              className="
                rounded-3xl
                h-[185px]
                w-full
                object-cover
                object-[5%_25%]
                scale-[2.1]
              "
              src={OfferingImg15.src}
            />

            <div
              className="flex flex-col justify-end p-6 rounded-3xl bg-gradient-to-r from-[#05161E] to-[rgba(0,0,0,0)] dark:from-background dark:to-transparent absolute inset-0 z-10"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              <div className="clash-display-font text-info-250 dark:text-foreground font-medium text-xl mb-1">
                Property Finance
              </div>
              <div className="text-info-250 dark:text-foreground-300 text-sm font-normal leading-5 tracking-[-0.084px] max-w-md">
                With Backbone, you can purchase your dream home and
                <br />
                pay back in flexible terms that suit your budget and lifestyle.
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            className="relative overflow-hidden rounded-3xl"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <Image
              disableAnimation
              disableSkeleton
              alt="why backbone meeting"
              className="
                rounded-3xl
                h-[185px]
                w-full
                object-cover
              "
              src={OfferingImg16.src}
            />

            <div
              className="flex flex-col justify-end p-6 rounded-3xl bg-gradient-to-r from-[#110803] to-[rgba(0,0,0,0)] dark:from-background dark:to-transparent absolute inset-0 z-10"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="clash-display-font text-[#FF8447] dark:text-secondary font-medium text-xl mb-1">
                Rent Finance
              </div>
              <div className="text-[#FF8447] dark:text-foreground-300 text-sm font-normal leading-5 tracking-[-0.084px] max-w-xs pr-5">
                Backbone helps cover your rent upfront so you can move in now
                and repay overtime.
              </div>
            </div>
          </div>
        </div>
        {/* END IMAGE CARDS */}
      </div>
    </div>
  );
};

export default WhatWeCover;
