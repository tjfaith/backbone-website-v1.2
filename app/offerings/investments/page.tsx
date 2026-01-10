"use client";
import {
  BlogExtract,
  HowToStartInvesting,
  OfferingHeroSection,
  OurApproach,
  WhyBackbone4,
  Faq,
  StartInvestment,
  SuccessToast4,
  SuccessToast5,
} from "@/components";
import { Hero6 } from "@/public/assets";

const Investments = () => {
  const frequentlyQuestions = [
    {
      question: "What is investment?",
      answer:
        "Investment is the act of putting your money into opportunities designed to grow its value over time. Instead of leaving your money idle, investing allows it to work for you—aiming to generate returns through structured, long-term strategies while managing risk responsibly.",
    },
  ];

  const heroProps = {
    content: {
      title: " Invest with confidence and grow with clarity.",
      description:
        "Backbone Investments gives you access to simple, secure investment options designed to help your money grow over time.",
    },
    imageSection: {
      images: [Hero6.src],
      toastCards: (
        <>
          <SuccessToast4
            className="
            absolute z-20
            -top-7 left-4
            scale-75
            sm:-top-9 sm:left-6 sm:scale-90
            lg:-top-10 lg:left-2 lg:scale-100
          "
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="700"
          />

          <SuccessToast5
            className="
            absolute z-20
            -bottom-4 right-4
            scale-75
            sm:-bottom-6 sm:right-6 sm:scale-90
            lg:-bottom-6 lg:-right-12
          "
            data-aos="fade-right"
            data-aos-delay="250"
            data-aos-duration="700"
          />
        </>
      ),
    },
  };

  return (
    <div className="md:pt-0 pt-20 overflow-hidden">
      <OfferingHeroSection heroData={heroProps} />
      <WhyBackbone4 />
      <OurApproach />
      <HowToStartInvesting />
      <BlogExtract
        btnText="Read more"
        description="Explore articles, guides, and market perspectives designed to help you understand more about investment."
        title="Insights to help you Invest smarter"
      />
      <Faq faqData={frequentlyQuestions} />
      <StartInvestment />
    </div>
  );
};

export default Investments;
