import React from "react";
import { Image } from "@heroui/image";

import { Inv } from "@/public/assets";
import { GetStartedBtn, ContactSalesBtn } from "@/components";

const StartInvestment = () => {
  return (
    <div className="pt-12 pb-14">
      <div className="page-max-width">
        <div className="relative">
          {/* BACKGROUND IMAGE */}
          <Image
            removeWrapper
            className="
            h-[360px]
            sm:h-[420px]
            lg:h-[460px]
            w-full
            object-cover
            object-[50%_28%]
          "
            src={Inv.src}
            data-aos="fade-up"
          />

          {/* CONTENT */}
          <div
            className="
            absolute
            inset-0
            z-20
            flex
            flex-col
            items-center
            justify-center
            text-white
            px-4
          "
          >
            <div
              className="
              clash-display-font
              text-2xl
              sm:text-3xl
              lg:text-[48px]
              font-medium
              leading-8
              sm:leading-10
              lg:leading-[56px]
              tracking-[-0.48px]
              mb-3
              max-w-lg
              text-center
            "
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Start Your Investment Journey Today
            </div>

            <div
              className="
              mb-6
              sm:mb-8
              text-sm
              sm:text-base
              lg:text-lg
              font-medium
              leading-6
              tracking-[-0.27px]
              text-center
            "
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Begin investing with clarity and confidence
            </div>

            <div
              className="
              flex
              flex-col
              sm:flex-row
              items-stretch
              sm:items-center
              gap-3
              lg:gap-2
              w-full
              sm:w-auto
            "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <GetStartedBtn
                className="text-base w-full sm:w-auto"
                label="Start investing"
              />
              <ContactSalesBtn
                className="w-full sm:w-auto"
                label="Speak to our team"
              />
            </div>
          </div>

          {/* OVERLAY */}
          <div className="pointer-events-none absolute inset-0 bg-black/10 z-10 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default StartInvestment;
