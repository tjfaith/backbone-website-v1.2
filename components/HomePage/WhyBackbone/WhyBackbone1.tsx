import { Image } from "@heroui/image";
import React from "react";
import { useSelector } from "react-redux";
import { cn } from "@heroui/theme";

import { countryPageContent } from "@/app/utils";
import {
  CTitle,
  GetStartedBtn,
  ContactSalesBtn,
  ExpensesCard,
} from "@/components";
import { RootState } from "@/app/store";

const WhyBackbone1 = () => {
  const { selectedCountry } = useSelector((state: RootState) => state.settings);

  return (
    <div
      className="overflow-hidden bg-background-75 dark:bg-background pb-8 pt-24 lg:pt-48 min-h-[85vh]"
      data-aos="fade-up"
    >
      <div className="page-max-width grid grid-cols-1 lg:grid-cols-2 gap-28">
        {/* LEFT SECTION */}
        <div className="relative flex items-center" data-aos="fade-right">
          <div
            className=" lg:absolute -top-28 -right-16 w-[416px] h-[349px] object-bottom overflow-hidden rounded-2xl"
            data-aos="zoom-in"
          >
            <Image
              alt="whyBB1"
              className={cn(
                "w-[416px] h-[349px] object-cover scale-125 rounded-2xl",
                countryPageContent[selectedCountry.code].homePage.whyBackbone1
                  ?.img1Class,
              )}
              src={
                countryPageContent[selectedCountry.code].homePage.whyBackbone1
                  .img[0]
              }
            />
          </div>

          <div
            className="sm:block hidden lg:absolute sm:-bottom-48 w-[416px] h-[349px] overflow-hidden rounded-2xl"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <Image
              alt="whyBB2"
              className={cn(
                "w-[416px] h-[349px] object-cover  rounded-2xl",
                countryPageContent[selectedCountry.code].homePage.whyBackbone1
                  ?.img2Class,
              )}
              src={
                countryPageContent[selectedCountry.code].homePage.whyBackbone1
                  .img[1]
              }
            />
          </div>

          <div
            className="absolute -right-2 -bottom-12"
            data-aos="fade-left"
            data-aos-delay="250"
          >
            <Image
              disableAnimation
              disableSkeleton
              alt="exchange"
              radius="none"
              src={
                countryPageContent[selectedCountry.code].homePage.whyBackbone1
                  .exchange
              }
            />
          </div>

          <ExpensesCard
            className="absolute left-0 -top-12 z-20"
            data-aos="fade-down"
            data-aos-delay="350"
          />
        </div>

        {/* RIGHT SECTION */}
        <div
          className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
          data-aos="fade-left"
        >
          <CTitle
            className="border border-foreground-100 dark:border-foreground-300 bg-white dark:bg-background-200 mb-3"
            data-aos="fade-up"
            iconType="flashlight"
            title="Why Backbone?"
          />

          <div
            className="clash-display-font tracking-[-0.16px] leading-10 text-[32px] text-primary dark:text-foreground font-medium max-w-xl mb-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We have made crossborder payments simple for your business
          </div>

          <div
            className="mb-3 text-primary-500 dark:text-foreground-400 text-base font-normal leading-6 tracking-[-0.27px] max-w-xl lg:pr-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Backbone simplifies cross-border payments for businesses by
            combining security, efficiency, and transparency, so you can scale
            faster and operate confidently across markets.
          </div>

          <div
            className="flex flex-col sm:flex-row items-center gap-3 lg:gap-2"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <GetStartedBtn className="text-base" />
            <ContactSalesBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyBackbone1;
