import { Image } from "@heroui/image";
import React from "react";

import { OfferingImg1, OfferingImg2, OfferingImg3 } from "@/public/assets";
import { ContactSalesBtn, CTitle, GetStartedBtn } from "@/components";

const WhyBackbone5 = () => {
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
            className="border border-foreground-100 bg-white mb-3"
            data-aos="fade-up"
            iconType="flashlight"
            title="Why Backbone?"
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
              font-medium
              mb-3
              max-w-lg
            "
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We provide capital that moves at the speed of your business
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
            Trade shouldn’t stall because of cash flow gaps or complex
            processes. Backbone simplifies access to trusted financial
            instruments that help you execute deals, protect transactions, and
            grow sustainably.
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
            <ContactSalesBtn label="Speak to our team" />
          </div>
        </div>

        {/* IMAGE CARD */}
        <div className="flex flex-col gap-[14px]">
          <Image
            disableAnimation
            disableSkeleton
            alt="why backbone meeting"
            className="
            self-end
            max-w-md
           rounded-[45.506px]
          h-[144.419px]
              w-full
              object-cover
              
              "
            data-aos="fade-up"
            data-aos-delay="100"
            src={OfferingImg1.src}
          />
          <Image
            disableAnimation
            disableSkeleton
            alt="why backbone meeting"
            className="
            self-center
              max-w-md
          h-[144.419px]
                  rounded-[45.506px]
              w-full
              object-cover
              
              "
            data-aos="fade-up"
            data-aos-delay="100"
            src={OfferingImg2.src}
          />
          <Image
            disableAnimation
            disableSkeleton
            alt="why backbone meeting"
            className="
            self-start
              max-w-md
          h-[144.419px]
                     rounded-[45.506px]
              w-full
              object-cover
              
              "
            data-aos="fade-up"
            data-aos-delay="100"
            src={OfferingImg3.src}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyBackbone5;
