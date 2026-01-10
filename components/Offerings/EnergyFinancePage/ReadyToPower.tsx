import React from "react";
import { Image } from "@heroui/image";

import { OfferingImg20 } from "@/public/assets";
import { GetStartedBtn, ContactSalesBtn } from "@/components";

const ReadyToPower = () => {
  return (
    <div className="pt-10 sm:pt-12 pb-12 sm:pb-14">
      <div className="page-max-width">
        <div className="relative" data-aos="fade-up">
          <Image
            removeWrapper
            className="h-[320px] sm:h-[460px] w-full object-cover object-[50%_50%]"
            data-aos="zoom-in"
            data-aos-delay="100"
            src={OfferingImg20.src}
          />

          <div
            className="absolute inset-0 z-20  flex flex-col items-center text-white justify-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div
              className="
          clash-display-font
          text-[28px] sm:text-[48px]
          font-medium
          leading-[36px] sm:leading-[56px]
          tracking-[-0.48px]
          mb-3
          max-w-sm sm:max-w-lg
          text-center
        "
              data-aos="fade-up"
              data-aos-delay="250"
            >
              Ready to power what matters?
            </div>

            <div
              className="
          mb-6 sm:mb-8
          text-sm sm:text-lg
          font-medium
          leading-6
          tracking-[-0.27px]
          text-center
          max-w-sm sm:max-w-xl
          px-3 sm:px-5
        "
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Access financing designed to support reliable, innovative, and
              sustainable energy solutions.
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
              data-aos-delay="350"
            >
              <GetStartedBtn
                className="text-base text-primary bg-white"
                label="Start investing"
              />
              <ContactSalesBtn
                className="text-white bg-transparent "
                label="Speak to our team"
              />
            </div>
          </div>

          <div
            className="pointer-events-none absolute inset-0 bg-black/10 z-10 rounded-xl"
            data-aos="fade-in"
            data-aos-delay="150"
          />
        </div>
      </div>
    </div>
  );
};

export default ReadyToPower;
