import React from "react";

import { CTitle, CurrencySlider } from "@/components";

const MultiCurrencySupport = () => {
  return (
    <div
      className=" rounded-2xl bg-background xl:pb-0 pb-16"
      data-aos="fade-up"
    >
      <div className="md:p-12 p-6 rounded-t-2xl">
        <CTitle title="Multi-currency Support" />
        <div className="clash-display-font  lg:text-4xl md:text-3xl text-2xl text-primary font-medium max-w-lg mb-1">
          Focus on other things while we handle your transactions
        </div>
        <div className="text-primary-400 md:text-base text-xs font-medium max-w-lg tracking-tight">
          Exchange major currencies effortlessly and at unbeatable rates. we
          make it quick, simple, and seamless.
        </div>
      </div>
      <CurrencySlider />
    </div>
  );
};

export default MultiCurrencySupport;
