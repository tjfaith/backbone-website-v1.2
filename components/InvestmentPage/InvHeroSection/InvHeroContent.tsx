import { ContactSalesBtn, GetStartedBtn } from "@/components";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import React from "react";

const InvHeroContent = () => {
  return (
    <div
      className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
      data-aos="fade-up"
    >
      {/* HEADLINE */}
      <div
        className="clash-display-font text-[40px] font-medium tracking-[0.8px] leading-[52px] text-black mb-3"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Invest with confidence and grow with clarity.
      </div>

      <div
        className="text-primary-500 text-lg tracking-[-0.27px] leading-6 mb-8"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Backbone Investments gives you access to simple, secure investment
        options designed to help your money grow over time.
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

export default InvHeroContent;
