import React from "react";

import {
  CTitle,
  GetStartedBtn,
  ContactSalesBtn,
  RatesCard,
  ProcessTransactionCard,
  GlobalReachCard,
  SecureTransactionsCard,
} from "@/components";

const WhyBackbone2 = () => {
  return (
    <div className="overflow-hidden bg-background-75 dark:bg-background py-12">
      <div className="page-max-width">
        <div className="flex flex-col items-center mb-20" data-aos="fade-up">
          <CTitle
            className="border border-foreground-100 dark:border-foreground-300 bg-white dark:bg-background-200 mb-3"
            data-aos="fade-up"
            iconType="flashlight"
            title="Why Backbone?"
          />

          <div
            className="clash-display-font text-center tracking-[-0.16px] leading-10 text-[32px] text-primary dark:text-foreground font-medium max-w-xl sm:px-2 mb-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We are setting a new standard for the global payments experience
          </div>

          <div
            className="mb-8 text-primary-500 dark:text-foreground-400 text-center text-base font-normal leading-6 tracking-[-0.176px] max-w-xl"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            At Backbone, payments are more than transactions, they’re a gateway
            to growth, opportunity, and limitless possibilities.
          </div>

          <div
            className="flex flex-col sm:flex-row items-center gap-3 lg:gap-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <GetStartedBtn className="text-base" />
            <ContactSalesBtn />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <ProcessTransactionCard />
          <RatesCard />
          <GlobalReachCard />
          <SecureTransactionsCard />
        </div>
      </div>
    </div>
  );
};

export default WhyBackbone2;
