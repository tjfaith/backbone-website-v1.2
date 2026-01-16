import { Image } from "@heroui/image";
import React from "react";
import { Icon } from "@iconify/react";

import { OfferingImg19 } from "@/public/assets";
import { ContactSalesBtn, CTitle, GetStartedBtn } from "@/components";

const WhyBackbone8 = () => {
  const weProvide = [
    {
      icon: "ri:fire-fill",
      title: "Smarter Energy Deployment",
      description:
        "Support for modern energy solutions, including technology-enabled systems that improve efficiency, monitoring, and performance.",
    },
    {
      icon: "ri:timer-fill",
      title: "Built for Long-Term Impact",
      description:
        "We focus on sustainable growth, helping energy projects scale responsibly while delivering reliable power over time.",
    },
    {
      icon: "ri:layout-grid-fill",
      title: "Flexible Structures",
      description:
        "Financing designed to fit different energy needs, timelines, and scales so projects can move forward without unnecessary constraints.",
    },
  ];

  return (
    <div
      className="overflow-hidden py-14 sm:py-18 lg:py-16"
      data-aos="fade-up"
      data-aos-duration="700"
    >
      <div
        className="
          page-max-width
          grid
          grid-cols-1
          lg:grid-cols-[1.5fr_2fr]
          items-center
          justify-center
          gap-10
          lg:gap-12
        "
        data-aos="fade-up"
        data-aos-delay="50"
      >
        {/* IMAGE CARD */}
        <Image
          disableAnimation
          disableSkeleton
          alt="why backbone meeting"
          className="
            w-full
            h-[280px]
            sm:h-[360px]
            lg:h-full
            rounded-3xl
            object-cover
          "
          data-aos="fade-up"
          data-aos-delay="100"
          src={OfferingImg19.src}
        />

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
          data-aos-delay="150"
        >
          <CTitle
            className="border border-foreground-100 bg-white dark:bg-background-100 mb-3"
            data-aos="fade-up"
            data-aos-delay="200"
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
              sm:text-[32px]
              text-primary
              font-medium
              mb-3
              dark:text-primary
            "
            data-aos="fade-up"
            data-aos-delay="250"
          >
            We provide more than funding,
            <br /> we provide real support for your needs.
          </div>

          <div
            className="
              mb-8
              text-primary-500
              dark:text-primary-300
              text-base
              font-normal
              leading-6
              tracking-[-0.27px]
              max-w-2xl
              px-2
              sm:px-0
              lg:pr-20
            "
            data-aos="fade-up"
            data-aos-delay="300"
          >
            We go beyond funding to support energy solutions that are practical,
            scalable, and built for long term impact whether for homes,
            businesses, or large projects.
          </div>

          <div
            className="
              flex
              flex-col
              sm:flex-row
              items-center
              gap-3
              sm:gap-2
              mb-12
              w-full
              sm:w-auto
            "
            data-aos="fade-up"
            data-aos-delay="350"
          >
            <GetStartedBtn
              className="text-base w-full sm:w-auto"
              label="Start investing"
            />
            <ContactSalesBtn label="Speak to our team" />
          </div>

          <div
            className="space-y-3 mb-8 w-full"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {weProvide.map((data, index) => (
              <div
                key={index}
                className="
                  bg-[#F8FAFB]
                  dark:bg-background-100
                  rounded-3xl
                  flex
                  gap-4
                  sm:gap-6
                  p-4
                "
                data-aos="fade-up"
                data-aos-delay={450 + index * 80}
              >
                <div className="flex-shrink-0 rounded-full bg-primary h-6 w-6 p-[1.455px] flex items-center justify-center text-white dark:bg-primary-450 dark:text-primary-950">
                  <Icon icon={data.icon} />
                </div>

                <div>
                  <div className="text-black dark:text-foreground-50 text-base font-medium leading-6 tracking-[-0.176px] mb-2">
                    {data.title}
                  </div>
                  <div className="text-sm font-normal leading-5 tracking-[-0.084px] text-primary-500 dark:text-primary-300 max-w-xl">
                    {data.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyBackbone8;
