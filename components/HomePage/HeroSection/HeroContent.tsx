import React from "react";
import { useSelector } from "react-redux";

import {
  ContactSalesBtn,
  GetStartedBtn,
  TransactionReport,
} from "@/components";
import { RootState } from "@/app/store";
import { countryPageContent } from "@/app/utils";

const HeroContent = () => {
  const { selectedCountry } = useSelector((state: RootState) => state.settings);

  return (
    <div
      className="mx-auto lg:mx-0 text-center lg:text-left"
      data-aos="fade-up"
    >
      <TransactionReport />
      {/* HEADLINE */}
      <div
        className="
          clash-display-font
          text-[40px]
          font-medium
          tracking-[0.8px]
          leading-[52px]
          text-black
          dark:text-foreground-50
          mb-3
        "
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {
          countryPageContent[selectedCountry.code]?.homePage?.heroSection
            ?.heroContent?.contentHeading
        }
      </div>

      <div
        className="
          text-primary-500
          dark:text-foreground-300
          text-base
          tracking-[-0.27px]
          leading-6
          mb-8
        "
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {
          countryPageContent[selectedCountry.code]?.homePage?.heroSection
            ?.heroContent?.contentBody
        }
      </div>

      <div
        className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <GetStartedBtn />
        <ContactSalesBtn />
      </div>
    </div>
  );
};

export default HeroContent;
