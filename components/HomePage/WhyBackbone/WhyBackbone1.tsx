import { Exchange, WhyBB1, WhyBB2 } from "@/public/assets";
import { Image } from "@heroui/image";
import React from "react";
import {
  CTitle,
  GetStartedBtn,
  ContactSalesBtn,
  ExpensesCard,
} from "@/components";

const WhyBackbone1 = () => {
  return (
    <div
      className="bg-background-75 pb-8 pt-24 lg:pt-48 min-h-[85vh]"
      data-aos="fade-up"
    >
      <div className="page-max-width grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* LEFT SECTION */}
        <div className="relative flex items-center" data-aos="fade-right">
          <div
            className=" max-w-md lg:absolute -top-28 -right-16"
            data-aos="zoom-in"
          >
            <Image alt="whyBB1" src={WhyBB1.src} />
          </div>

          <div
            className=" max-w-md lg:absolute -bottom-32 "
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <Image alt="whyBB1" src={WhyBB2.src} />
          </div>

          <div
            className="absolute right-0 -bottom-14 "
            data-aos="fade-left"
            data-aos-delay="250"
          >
            <Image
              src={Exchange.src}
              radius="none"
              disableAnimation
              disableSkeleton
              alt="exchange"
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
            className="border border-foreground-100 bg-white mb-3"
            iconType="flashlight"
            title="Why Backbone?"
            data-aos="fade-up"
          />

          <div
            className="clash-display-font tracking-[-0.16px] leading-10 text-3xl text-primary font-medium max-w-lg mb-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We have made crossborder payments simple for your business
          </div>

          <div
            className="mb-3 text-primary-500 text-lg font-normal leading-6 tracking-[-0.27px] max-w-xl lg:pr-8"
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
