import { Image } from "@heroui/image";
import React from "react";

import { Meeting } from "@/public/assets";
import { ContactSalesBtn, CTitle, GetStartedBtn } from "@/components";

const WhyBackbone3 = () => {
  return (
    <div className="overflow-hidden py-16 sm:py-20" data-aos="fade-up">
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
        <div
          className="
            shadow-[0_4px_36px_0_rgba(0,0,0,0.05)]
            bg-white
            rounded-3xl
            px-2
            pt-2
            pb-0.5
            flex
            flex-col
            items-center
            max-w-md
            mx-auto
            lg:max-w-none
          "
          data-aos="fade-right"
        >
          <Image
            disableAnimation
            disableSkeleton
            className="
              rounded-3xl
              w-full
              object-cover
              h-[220px]
              sm:h-[260px]
              lg:h-auto
            "
            alt="why backbone meeting"
            src={Meeting.src}
            data-aos="zoom-in"
            data-aos-delay="100"
          />

          <div
            className="
              font-beau
              text-[24px]
              sm:text-[28px]
              lg:text-[32px]
              py-4
              sm:py-5
              tracking-[-0.352px]
              leading-6
              font-normal
              text-primary
              text-center
            "
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Business of the year
          </div>
        </div>

        {/* TEXT CONTENT */}
        <div
          className="
            flex
            flex-col
            justify-center
            items-center
            lg:items-start
            text-center
            lg:text-left
          "
          data-aos="fade-left"
        >
          <CTitle
            className="border border-foreground-100 bg-white mb-3"
            iconType="flashlight"
            title="Why Backbone?"
            data-aos="fade-up"
          />

          <div
            className="
              clash-display-font
              tracking-[-0.16px]
              leading-9
              sm:leading-10
              text-2xl
              sm:text-3xl
              text-primary
              font-medium
              mb-3
              max-w-xl
            "
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We provide your with real tools, right leverage and real business
            growth.
          </div>

          <div
            className="
              mb-4
              text-primary-500
              text-base
              sm:text-lg
              font-normal
              leading-6
              tracking-[-0.27px]
              max-w-xl
            "
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Backbone gives your business the infrastructure, reach, and freedom
            to grow with confidence, cutting friction, lowering costs, and
            opening doors to new markets.
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
      </div>
    </div>
  );
};

export default WhyBackbone3;
