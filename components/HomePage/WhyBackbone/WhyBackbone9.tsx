"use client";

import React from "react";
import { Icon } from "@iconify/react";

import { CTitle, GetStartedBtn, ContactSalesBtn } from "@/components";

const WhyBackbone9 = () => {
  const ourOfferings = [
    {
      icon: "ri:wallet-fill",
      title: "E&P Project Financing",
      body: "We provide structured financing to help operators develop assets, manage risk, and execute projects efficiently.",
    },
    {
      icon: "ri:flow-chart",
      title: "IoT-Enabled Solar Finance",
      body: "We finance IoT-integrated solar solutions for efficient, monitored energy use while helping homes and businesses save and optimise costs.",
    },
    {
      icon: "ri:shopping-basket-fill",
      title: "Energy Marketplace",
      body: "A one-stop platform to browse, compare, and purchase energy products with ease, making it simple for homes and businesses to access what they need.",
    },
    {
      icon: "ri:lightbulb-flash-fill",
      title: "Hybrid Renewable Energy Power Grid",
      body: "AOur hybrid renewable energy grid lets homes and businesses tap into sustainable power, providing flexible, reliable energy for everyday use and growth.",
    },
  ];

  return (
    <div
      className="overflow-hidden bg-white py-10 sm:py-12"
      data-aos="fade-up"
      data-aos-duration="700"
    >
      <div className="page-max-width">
        {/* HEADER */}
        <div
          className="flex flex-col items-center mb-10"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <CTitle
            className="border border-foreground-100 bg-white mb-3"
            data-aos="fade-up"
            data-aos-delay="100"
            iconType="flashlight"
            title="Why Backbone?"
          />

          <div
            className="
              clash-display-font
              text-center
              tracking-[-0.16px]
              leading-9
              sm:leading-10
              text-2xl
              sm:text-[32px]
              text-primary
              font-medium
              max-w-md
              mb-3
            "
            data-aos="fade-up"
            data-aos-delay="150"
          >
            We are financing your energy need
          </div>

          <div
            className="
              mb-8
              text-primary-500
              text-center
              text-base
              font-normal
              leading-6
              tracking-[-0.176px]
              max-w-lg
              px-2
              sm:px-0
            "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Energy projects need more than funding. We provide structured,
            flexible support that helps them move from idea to impact.
          </div>

          <div
            className="flex flex-col sm:flex-row items-center gap-3 lg:gap-2"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <GetStartedBtn
              className="text-base w-full sm:w-auto"
              label="Start investing"
            />
            <ContactSalesBtn label="Speak to our team" />
          </div>
        </div>

        {/* OFFERINGS GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            w-full
            gap-4
            sm:gap-6
          "
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {ourOfferings.map((data, index) => (
            <div
              key={index}
              className="group p-5 sm:p-6 rounded-3xl bg-[#F8FAFB]"
              data-aos="fade-up"
              data-aos-delay={350 + index * 80}
            >
              <div className="w-10 h-10 relative mb-6 sm:mb-10 flex items-center justify-center bg-[#F8FAFB]">
                {/* Decorative corners */}
                <Icon
                  className="absolute top-0 right-0 rotate-45 text-info-250"
                  icon="clarity:angle-line"
                />
                <Icon
                  className="absolute top-0 left-0 -rotate-45 scale-x-[-1] text-info-250"
                  icon="clarity:angle-line"
                />
                <Icon
                  className="absolute bottom-0 left-0 rotate-45 scale-y-[-1] text-info-250"
                  icon="clarity:angle-line"
                />
                <Icon
                  className="absolute bottom-0 right-0 -rotate-45 scale-x-[-1] scale-y-[-1] text-info-250"
                  icon="clarity:angle-line"
                />

                {/* Center icon */}
                <Icon className="text-primary" icon={data.icon} />
              </div>

              <div className="text-base text-black font-medium leading-6 tracking-[-0.176px] mb-3">
                {data.title}
              </div>
              <div className="text-primary-500 text-sm sm:text-base">
                {data.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyBackbone9;
