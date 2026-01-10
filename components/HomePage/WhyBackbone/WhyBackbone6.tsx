import React from "react";
import { Icon } from "@iconify/react";

import {
  ContactSalesBtn,
  CTitle,
  GetStartedBtn,
  PropertyCarousel,
} from "@/components";

const WhyBackbone6 = () => {
  return (
    <div className="overflow-hidden py-12 sm:py-16 lg:py-20" data-aos="fade-up">
      <div
        className="
          page-max-width
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8
          sm:gap-10
          lg:gap-12
        "
      >
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
            data-aos="fade-up"
            iconType="flashlight"
            title="Why Backbone?"
          />

          <div
            className="
              clash-display-font
              tracking-[-0.16px]
              leading-8
              sm:leading-9
              text-xl
              sm:text-2xl
              lg:text-[32px]
              text-primary
              font-medium
              mb-3
              max-w-lg
            "
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We are providing a smarter <br />
            way to secure your dream home
          </div>

          <div
            className="
              mb-6
              sm:mb-8
              text-primary-500
              text-sm
              sm:text-base
              font-normal
              leading-6
              tracking-[-0.27px]
              max-w-xl
            "
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Finding a home shouldn’t come with financial pressure. Backbone
            removes the upfront burden by supporting your rent or home purchase
            so you can focus on settling in, not scrambling for funds.
          </div>

          {/* FEATURES */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-4
              mb-8
              w-full
            "
            data-aos="fade-up"
            data-aos-delay="180"
          >
            <div className="bg-[#F8FAFB] rounded-3xl p-4">
              <div
                className="rounded-full bg-primary h-6 w-6 p-[1.455px] flex items-center justify-center text-white mb-5"
                data-aos="zoom-in"
              >
                <Icon icon="ri:money-dollar-circle-fill" />
              </div>
              <div className="text-black text-base font-medium leading-6 tracking-[-0.176px] mb-2">
                Flexible Repayment
              </div>
              <div className="text-sm font-normal leading-5 tracking-[-0.084px] text-primary-500">
                Pay back over time with terms designed around your income and
                lifestyle
              </div>
            </div>

            <div className="bg-[#F8FAFB] rounded-3xl p-4">
              <div
                className="rounded-full bg-primary h-6 w-6 p-[1.455px] flex items-center justify-center text-white mb-5"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <Icon icon="ri:building-fill" />
              </div>
              <div className="text-black text-base font-medium leading-6 tracking-[-0.176px] mb-2">
                Upfront Support
              </div>
              <div className="text-sm font-normal leading-5 tracking-[-0.084px] text-primary-500">
                We cover your rent or home costs upfront, helping you move in
                without financial strain.
              </div>
            </div>
          </div>

          {/* CTA BUTTONS */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              items-stretch
              sm:items-center
              gap-3
              sm:gap-2
              w-full
              sm:w-auto
            "
            data-aos="fade-up"
            data-aos-delay="220"
          >
            <GetStartedBtn className="text-base w-full sm:w-auto" />
            <ContactSalesBtn label="Speak to our team" />
          </div>
        </div>

        {/* IMAGE / CAROUSEL */}
        <div data-aos="fade-right" data-aos-delay="150">
          <PropertyCarousel />
        </div>
      </div>
    </div>
  );
};

export default WhyBackbone6;
