"use client";

import React from "react";

import { CTitle, GetStartedBtn, ContactSalesBtn } from "@/components";
import { Icon } from "@iconify/react";

const HowToStartInvesting = () => {
  const getStarted = [
    {
      icon: "ri:account-circle-fill",
      title: "Register",
      body: "Get started in minutes with a simple registration process designed to keep things quick, secure, and hassle-free.",
    },
    {
      icon: "ri:donut-chart-fill",
      title: "Choose how you Invest",
      body: "Explore clear investment options and select what fits your goals—no guesswork, just informed decisions.",
    },
    {
      icon: "ri:line-chart-line",
      title: "Watch your money grow",
      body: "Sit back as your investment works over time, with returns tracked clearly and transparently.",
    },
  ];

  return (
    <div className="overflow-hidden bg-white py-12">
      <div className="page-max-width grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
        {/* LEFT CONTENT */}
        <div data-aos="fade-up">
          <CTitle
            className="border border-foreground-100 bg-white mb-3"
            data-aos="fade-up"
            iconType="flashlight"
            title="How to start investing"
          />

          <div
            className="
              clash-display-font
              tracking-[-0.16px]
              leading-8
              sm:leading-10
              text-2xl
              sm:text-[32px]
              text-primary
              font-medium
              max-w-md
              mb-3
            "
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Taking your first step into Investing just got easier
          </div>

          <div
            className="
              mb-8
              text-primary-500
              text-base
              font-normal
              leading-6
              tracking-[-0.176px]
              max-w-lg
            "
            data-aos="fade-up"
            data-aos-delay="150"
          >
            We’ve made investing easy from your first sign-up to earning
            returns, we have every step is clear, secure, and built for
            confidence.
          </div>

          <div
            className="flex flex-col sm:flex-row items-center gap-3 lg:gap-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <GetStartedBtn className="text-base" label="Start investing" />
            <ContactSalesBtn label="Speak to our team" />
          </div>
        </div>

        {/* RIGHT STEPS */}
        <div className="flex flex-col" data-aos="fade-up" data-aos-delay="250">
          {getStarted.map((data, index) => (
            <div
              key={index}
              data-aos="fade-left"
              data-aos-delay={300 + index * 100}
              className={`group p-6 border-l-[3px] ${
                index === 0 && "border-info-250 bg-[#EBF8FF]"
              } transition-all ease-in-out duration-300`}
            >
              <div
                className={`flex items-center gap-2 text-lg font-medium ${
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

              <div className="text-primary-500 text-base font-normal leading-6 tracking-[-0.176px]">
                {data.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowToStartInvesting;
