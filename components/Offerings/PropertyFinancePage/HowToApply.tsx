"use client";

import React from "react";
import { Icon } from "@iconify/react";

import { CTitle, GetStartedBtn, ContactSalesBtn } from "@/components";

const HowToApply = () => {
  const getStarted = [
    {
      icon: "ri:account-circle-fill",
      title: "Apply",
      body: "Share a few details about your rent or home purchase needs so we can understand what works best for you.",
    },
    {
      icon: "ri:donut-chart-fill",
      title: "Get Approved",
      body: "We review your request and structure a flexible plan tailored to your income and situation.",
    },
    {
      icon: "ri:key-2-fill",
      title: "Move In",
      body: "Once everything is set, you can move in with confidence and repay comfortably over time.",
    },
  ];

  return (
    <div className="overflow-hidden bg-white py-12">
      <div
        className="
          page-max-width
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-10
        "
      >
        {/* LEFT CONTENT */}
        <div data-aos="fade-up">
          <CTitle
            className="border border-foreground-100 bg-white mb-3"
            iconType="flashlight"
            title="How to apply"
            data-aos="fade-up"
          />

          <div
            className="
              clash-display-font
              tracking-[-0.16px]
              leading-8
              sm:leading-9
              lg:leading-10
              text-xl
              sm:text-2xl
              lg:text-[32px]
              text-primary
              font-medium
              max-w-xl
              mb-3
            "
            data-aos="fade-up"
            data-aos-delay="100"
          >
            You just have simple steps to your next home
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
              tracking-[-0.176px]
              max-w-lg
            "
            data-aos="fade-up"
            data-aos-delay="150"
          >
            We’ve made getting into your next home straightforward. Our process
            is designed to be clear, supportive, and stress-free
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
            "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <GetStartedBtn className="text-base w-full sm:w-auto" />
            <ContactSalesBtn />
          </div>
        </div>

        {/* RIGHT STEPS */}
        <div data-aos="fade-left">
          {getStarted.map((data, index) => (
            <div
              key={index}
              className={`group p-5 sm:p-6 border-l-[3px] ${
                index === 0 && "border-info-250 bg-[#EBF8FF]"
              } transition-all ease-in-out duration-300`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className={`flex items-center gap-2 text-base sm:text-lg font-medium ${
                  index === 0 && "text-[#2597D0]"
                } mb-2`}
              >
                <Icon icon={data.icon} />
                <div
                  className={`leading-6 tracking-[-0.27px] text-black ${
                    index === 0 && "!text-[#2597D0]"
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
      </div>
    </div>
  );
};

export default HowToApply;
