"use client";
import { ContactSalesBtn, GetStartedBtn } from "@/components";
import { Icon } from "@iconify/react";
import { ReactNode } from "react";

interface Props {
  content: {
    title: string | ReactNode;
    description: string | ReactNode;
  };
}

const OfferingHeroContent = ({ content }: Props) => {
  return (
    <div
      className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left px-4 sm:px-0"
      data-aos="fade-up"
    >
      {/* HEADLINE */}
      <div
        className="
          clash-display-font
          text-[32px] sm:text-[36px] lg:text-[40px]
          font-medium
          tracking-[0.8px]
          leading-[42px] sm:leading-[48px] lg:leading-[52px]
          text-black
          mb-3
        "
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {content.title}
      </div>

      <div
        className="
          text-primary-500
          text-base sm:text-lg
          tracking-[-0.27px]
          leading-6
          mb-8
        "
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {content.description}
      </div>

      {/* CTA BUTTONS */}
      <div
        className="
          flex flex-col sm:flex-row
          items-stretch sm:items-center
          gap-4
          justify-center lg:justify-start
          mb-6
        "
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <GetStartedBtn />
        <ContactSalesBtn />
      </div>

      {/* BULLETS */}
      <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
        {["No stress", "Zero guesswork", "100% Clarity"].map(
          (bullet, index) => (
            <div
              key={index}
              className="
                bg-background-200
                text-primary-450
                gap-2
                px-3 py-1.5
                text-xs sm:text-sm
                rounded-full
                inline-flex
                items-center
                whitespace-nowrap
              "
            >
              <Icon icon="ri:check-double-fill" />
              <span>{bullet}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default OfferingHeroContent;
