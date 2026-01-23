import { Image } from "@heroui/image";
import React from "react";
import { useSelector } from "react-redux";
import { cn } from "@heroui/theme";

import { ContactSalesBtn, CTitle, GetStartedBtn } from "@/components";
import { countryPageContent } from "@/app/utils";
import { RootState } from "@/app/store";

const WhyBackbone3 = () => {
  const { selectedCountry } = useSelector((state: RootState) => state.settings);

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
            dark:shadow-[0_4px_36px_0_rgba(0,0,0,0.4)]
            bg-white
            dark:bg-background-100
            rounded-3xl
            px-2
            pt-2
            pb-0.5
            flex
            flex-col
            items-center
          "
          data-aos="fade-right"
        >
          <div
            className=" rounded-3xl overflow-hidden h-[220px] sm:h-[260px] lg:h-[363px] w-full"
            data-aos="zoom-in"
            // data-aos-delay="100"
          >
            <Image
              disableAnimation
              disableSkeleton
              // removeWrapper
              alt="why backbone meeting"
              className={cn(
                "rounded-3xl w-full object-cover h-[220px] sm:h-[260px] lg:h-[363px]",
                countryPageContent[selectedCountry.code]?.homePage.whyBackbone3
                  .className,
              )}
              src={
                countryPageContent[selectedCountry.code]?.homePage.whyBackbone3
                  .img
              }
            />
          </div>

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
              dark:text-primary-50
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
            className="
              border
              border-foreground-100
              dark:border-foreground-700
              bg-white
              dark:bg-background-100
              mb-3
            "
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
              sm:text-3xl
              text-primary
              dark:text-primary-50
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
              dark:text-primary-400
              text-base
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
