"use client";

import React from "react";
import { Image } from "@heroui/image";

import { CTitle, GetStartedBtn, ContactSalesBtn } from "@/components";
import { OfferingImg9 } from "@/public/assets";

const WhatWeOffer = () => {
  const ourOfferings = [
    {
      title: "Bank Guarantee",
      body: "A bank guarantee from Backbone gives your customers the confidence to trust you without tying up your working capital.",
    },
    {
      title: "Letter of Credit",
      body: "A Letter of Credit protects both sides of the deal, ensuring payment only happens when terms are met.",
    },
    {
      title: "Invoice Financing",
      body: "Get your business or project moving by financing your unpaid invoices through Backbone.",
    },
  ];

  return (
    <div className="overflow-hidden bg-white py-10 sm:py-12">
      <div className="page-max-width px-4 sm:px-0">
        <div
          className="flex flex-col items-center mb-10 sm:mb-[53px]"
          data-aos="fade-up"
        >
          <CTitle
            className="border border-foreground-100 bg-white mb-3"
            data-aos="fade-up"
            iconType="flashlight"
            title="What we offer"
          />

          <div
            className="
              clash-display-font
              text-center
              tracking-[-0.16px]
              leading-9 sm:leading-10
              text-[26px] sm:text-[32px]
              text-primary
              font-medium
              max-w-xs sm:max-w-md
              mb-3
            "
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We have everything you need to get deals done
          </div>

          <div
            className="
              mb-6 sm:mb-8
              text-primary-500
              text-center
              text-sm sm:text-base
              font-normal
              leading-6
              tracking-[-0.176px]
              max-w-sm sm:max-w-lg
            "
            data-aos="fade-up"
            data-aos-delay="150"
          >
            From securing trust to unlocking working capital, our trade finance
            tools are built to help you deliver on promises, keep customers
            satisfied, and move business forward.
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
            data-aos-delay="200"
          >
            <GetStartedBtn className="text-base w-full sm:w-auto" />
            <ContactSalesBtn
              label="Speak to our team"
              className="w-full sm:w-auto"
            />
          </div>
        </div>

        {/* Offerings Section */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-0"
          data-aos="fade-up"
        >
          <div
            className="rounded-xl overflow-hidden max-w-2xl pr-0 sm:pr-4"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            {ourOfferings.map((data, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`group p-5 sm:p-6 border-l-[3px] ${
                  index === 0 && "border-info-250 bg-[#EBF8FF]"
                } transition-all ease-in-out duration-300`}
              >
                <div
                  className={`text-lg font-medium ${
                    index === 0 && "text-[#2597D0]"
                  } mb-2`}
                >
                  <div
                    className={`leading-6 tracking-[-0.27px] text-black ${
                      index === 0 && "text-[#2597D0]"
                    }`}
                  >
                    {data.title}
                  </div>
                </div>

                <div className="text-primary-500 text-sm sm:text-base font-normal leading-6 tracking-[-0.176px]">
                  {data.body}
                </div>
              </div>
            ))}
          </div>

          <div
            className="flex items-center justify-center"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <Image
              src={OfferingImg9.src}
              alt="Offering Image 9"
              className="mx-auto w-full max-w-sm sm:max-w-none"
              data-aos="zoom-in"
              data-aos-delay="300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
