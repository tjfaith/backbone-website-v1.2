import React from "react";

import {
  BlogExtract,
  Faq,
  OfferingHeroSection,
  ReadyToPower,
  SuccessToast10,
  SuccessToast8,
  SuccessToast9,
  WhyBackbone7,
  WhyBackbone8,
  WhyBackbone9,
} from "@/components";
import { Hero9 } from "@/public/assets";

const EnergyFinance = () => {
  const heroProps = {
    content: {
      title: (
        <div className="max-w-xl">
          Solutions built to power everyday life and big ideas
        </div>
      ),
      description: (
        <div className="max-w-xl pr-8">
          We provide energy solutions that power homes, keep businesses running,
          and enable larger projects to grow and scale.
        </div>
      ),
    },
    imageSection: {
      images: [Hero9.src],
      toastCards: (
        <>
          {/* TOP CARD */}
          <SuccessToast10
            className="
            absolute z-20
            -top-12 left-1/2 -translate-x-1/2 scale-[0.65]
            sm:-top-16 sm:left-6 sm:translate-x-0 sm:scale-[0.75]
            lg:-top-10 lg:left-1 lg:scale-100
          "
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="700"
          />

          {/* RIGHT CARD */}
          <SuccessToast9
            className="
            absolute z-20
            bottom-[45%] right-[-1rem] scale-[0.7]
            sm:bottom-[25%] sm:right-6 sm:scale-[0.8]
            lg:-bottom-8 lg:-right-20 lg:scale-100
          "
            data-aos="fade-right"
            data-aos-delay="250"
            data-aos-duration="700"
          />

          {/* LEFT CARD */}
          <SuccessToast8
            className="
    absolute z-20
    bottom-2 left-2 -translate-x-2 translate-y-6 scale-[0.7]
    sm:bottom-6 sm:left-6 sm:translate-x-0 sm:translate-y-0 sm:scale-[0.8]
    lg:bottom-12 lg:-left-32 lg:scale-100
  "
            data-aos="fade-right"
            data-aos-delay="250"
            data-aos-duration="700"
          />
        </>
      ),
    },
  };

  const frequentlyQuestions = [
    {
      question: "What is Energy Finance?",
      answer:
        "Energy finance is a financial solution that helps individuals and businesses access funding to install or upgrade reliable energy solutions without the burden of high upfront costs. It offers structured support, flexible repayment options, and expert guidance, making it easier to adopt sustainable energy systems and manage payments gradually over time.",
    },
  ];

  return (
    <div className="md:pt-0 pt-20 overflow-hidden">
      <OfferingHeroSection heroData={heroProps} />
      <WhyBackbone7 />
      <WhyBackbone8 />
      <WhyBackbone9 />
      <BlogExtract
        btnText="Read more"
        description="Explore practical guides, expert tips, and market insights to help you navigate energy finance with confidence."
        title="Insights to help you make smarter decisions"
      />
      <Faq faqData={frequentlyQuestions} />
      <ReadyToPower />
    </div>
  );
};

export default EnergyFinance;
