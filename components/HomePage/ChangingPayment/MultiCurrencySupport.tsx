import React from "react";

import { CTitle, CurrencySlider } from "@/components";

const MultiCurrencySupport = () => {
  return (
    <div
      className=" rounded-2xl bg-background xl:pb-0 pb-16"
      data-aos="fade-up"
    >
      <div className="md:p-12 p-6 rounded-t-2xl flex flex-col xl:items-start items-center">
        <CTitle title="Multi-currency Support" />
        <div className="clash-display-font xl:text-start text-center md:text-[32px] text-2xl text-primary font-medium max-w-md mb-1">
          Focus on other things while we handle your transactions
        </div>
        <div className="xl:text-start text-center text-primary-500 md:text-base text-xs font-normal max-w-md ">
          Exchange major currencies effortlessly and at unbeatable rates. we
          make it quick, simple, and seamless.
        </div>
      </div>
      <CurrencySlider />
    </div>
  );
};

export default MultiCurrencySupport;
