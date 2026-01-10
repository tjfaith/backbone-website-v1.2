import React from "react";

import {
  BlogExtract,
  Faq,
  MoveForward,
  OfferingHeroSection,
  SuccessToast2,
  SuccessToast6,
  SuccessToast7,
  Testimony,
  TradeOurApproach,
  WhatWeDo,
  WhatWeOffer,
  WhyBackbone5,
} from "@/components";
import { Hero7 } from "@/public/assets";

const TradeFinance = () => {
  const heroProps = {
    content: {
      title: (
        <div className="max-w-md">Access capital that supports your trade</div>
      ),
      description: (
        <div className="max-w-xl pr-8">
          We help businesses access the funding and instruments they need to
          move goods, manage cash flow, and trade confidently across borders
          without delays or complexity
        </div>
      ),
    },
    imageSection: {
      images: [Hero7.src],
      toastCards: (
        <>
          <SuccessToast2
            className="
            absolute z-20
            top-3 -left-6 scale-[0.65]
            sm:top-6 sm:-left-8 sm:scale-[0.85]
            lg:top-10 lg:-left-12 lg:scale-100
            rotate-[-8.976deg]
          "
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="700"
            title="Request successful"
          />

          <SuccessToast6
            className="
            absolute z-20
            -bottom-10 -right-6 scale-[0.65]
            sm:-bottom-4 sm:-right-4 sm:scale-[0.85]
            lg:bottom-6 lg:-right-12 lg:scale-100
          "
            data-aos="fade-right"
            data-aos-delay="250"
            data-aos-duration="700"
          />

          <SuccessToast7
            className="
            absolute z-20
            -bottom-16 -left-20 scale-[0.65]
            sm:-bottom-16 sm:-left-4 sm:scale-[0.85]
            lg:-bottom-6 lg:-left-28 lg:scale-100
          "
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="700"
          />
        </>
      ),
    },
  };

  const frequentlyQuestions = [
    {
      question: "What is Trade Finance?",
      answer:
        "Trade finance refers to the set of financial tools and products that help businesses fund and manage their domestic or cross-border trade. It provides working capital, reduces risk, and ensures that buyers and sellers can complete transactions securely and on time. Instruments like letters of credit, bank guarantees, invoice financing, and overdrafts are commonly used to make trade smoother and more reliable.",
    },
  ];

  return (
    <div className="md:pt-0 pt-20 overflow-hidden">
      <OfferingHeroSection heroData={heroProps} />
      <WhyBackbone5 />
      <Testimony />
      <WhatWeDo />
      <WhatWeOffer />
      <TradeOurApproach />
      <BlogExtract
        btnText="Read more"
        description="Explore articles, guides, and market perspectives designed to help you understand more about Trade Finance."
        title="Insights to grow your business "
      />
      <Faq faqData={frequentlyQuestions} />
      <MoveForward />
    </div>
  );
};

export default TradeFinance;
