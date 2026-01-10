import React from "react";

import {
  BlogExtract,
  Faq,
  HowToApply,
  OfferingHeroSection,
  OurOffering,
  ReadyToMoveIn,
  WhatWeCover,
  WhyBackbone6,
} from "@/components";
import { Hero8 } from "@/public/assets";

const PropertyFinance = () => {
  const heroProps = {
    content: {
      title: (
        <div className="max-w-lg">
          Move In today and pay comfortably over time.
        </div>
      ),
      description: (
        <div className="max-w-xl pr-8">
          We handle the upfront costs so you can move in easily and repay over
          time on terms that fit your income and lifestyle.
        </div>
      ),
    },
    imageSection: {
      images: [Hero8.src],
    },
  };

  const frequentlyQuestions = [
    {
      question: "What is Home Finance",
      answer:
        "Home finance is a financial solution that helps individuals access funds to rent or purchase a home without the usual stress of upfront payments. It provides structured support, flexible repayment options, and guidance, making it easier to secure a home and manage payments over time.",
    },
  ];

  return (
    <div className="md:pt-0 pt-20 overflow-hidden">
      <OfferingHeroSection heroData={heroProps} />
      <WhyBackbone6 />
      <OurOffering />
      <WhatWeCover />
      <HowToApply />
      <BlogExtract
        btnText="Read more"
        description="Explore practical guides, expert tips, and market insights to help you navigate rent, home, and property finance with confidence."
        title="Insights to help you make smarter decisions"
      />
      <Faq faqData={frequentlyQuestions} />
      <ReadyToMoveIn />
    </div>
  );
};

export default PropertyFinance;
