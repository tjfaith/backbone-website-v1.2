import { Image } from "@heroui/image";
import React from "react";
import { Icon } from "@iconify/react";

import { WhyBB3 } from "@/public/assets";
import { ContactSalesBtn, CTitle, GetStartedBtn } from "@/components";

const WhyBackbone4 = () => {
  return (
    <div className="overflow-hidden py-14 sm:py-16 lg:py-20" data-aos="fade-up">
      <div
        className="
          page-max-width
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-10
          lg:gap-12
        "
      >
        {/* IMAGE CARD */}
        <Image
          disableAnimation
          disableSkeleton
          alt="why backbone meeting"
          className="
            h-[60vh]
            sm:h-[70vh]
            lg:h-[80vh]
            rounded-3xl
            w-full
            object-cover
          "
          data-aos="fade-up"
          data-aos-delay="100"
          src={WhyBB3.src}
        />

        {/* TEXT CONTENT */}
        <div
          className="
            flex
            flex-col
            justify-start
            mt-6
            sm:mt-10
            items-center
            lg:items-start
            text-center
            lg:text-left
          "
          data-aos="fade-left"
        >
          <CTitle
            className="border border-foreground-100 bg-white mb-3"
            data-aos="fade-up"
            iconType="flashlight"
            title="Why Backbone?"
          />

          <div
            className="
              clash-display-font
              tracking-[-0.16px]
              leading-8
              sm:leading-10
              text-xl
              sm:text-[32px]
              text-primary
              font-medium
              mb-3
              pr-0
              lg:pr-7
              max-w-md
            "
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We help you stay ahead with strategy and precision
          </div>

          <div
            className="
              mb-8
              text-primary-500
              text-base
              font-normal
              leading-6
              tracking-[-0.27px]
              max-w-xl
            "
            data-aos="fade-up"
            data-aos-delay="150"
          >
            We combine clear strategy with precise execution to help you make
            smarter decisions, stay ahead of change, and grow with confidence in
            a constantly evolving market.
          </div>

          {/* FEATURE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div
              className="bg-[#F8FAFB] rounded-3xl p-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div
                className="rounded-full bg-primary h-6 w-6 p-[1.455px] flex items-center justify-center text-white mb-6"
                data-aos="zoom-in"
                data-aos-delay="250"
              >
                <Icon icon="ri:fire-fill" />
              </div>
              <div className="text-black text-base font-medium leading-6 tracking-[-0.176px] mb-3">
                Focused Strategy
              </div>
              <div className="text-sm font-normal leading-5 tracking-[-0.084px] text-primary-500">
                We take a research-driven approach, focusing on what matters
                most for consistent performance.
              </div>
            </div>

            <div
              className="bg-[#F8FAFB] rounded-3xl p-4"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <div
                className="rounded-full bg-primary h-6 w-6 p-[1.455px] flex items-center justify-center text-white mb-6"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <Icon icon="ri:timer-fill" />
              </div>
              <div className="text-black text-base font-medium leading-6 tracking-[-0.176px] mb-3">
                Long term Value
              </div>
              <div className="text-sm font-normal leading-5 tracking-[-0.084px] text-primary-500">
                Our investments prioritise stability and sustainable returns for
                steady long term value.
              </div>
            </div>
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
            data-aos-delay="300"
          >
            <GetStartedBtn
              className="text-base w-full sm:w-auto"
              label="Start investing"
            />
            <ContactSalesBtn label="Speak to our team" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyBackbone4;
