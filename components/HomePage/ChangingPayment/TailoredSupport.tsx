import React from "react";
import { Icon } from "@iconify/react";

import { CTitle } from "@/components";

const TailoredSupport = () => {
  const card = (
    <div className=" rounded-xl border  ">
      <div className="p-3 bg-background rounded-t-xl">
        <div className="flex items-center text-sm gap-1 ">
          <Icon className="text-success text-xl" icon="lets-icons:check-fill" />
          <span className="text-primary-400">Payment for goods</span>
        </div>
      </div>
      <div className="flex items-center justify-between bg-background-200 w-full p-3 rounded-b-xl">
        <div className="text-primary lash-display-font font-medium">
          $ 24,029.12
        </div>
        <div className="text-xs text-primary-400">Last month</div>
      </div>
    </div>
  );

  return (
    <div
      className=" rounded-2xl bg-background md:p-12 p-6 flex flex-col xl:items-start items-center"
      data-aos="fade-up"
    >
      <CTitle title="Tailored support" />
      <div className="clash-display-font xl:text-start text-center lg:text-4xl md:text-3xl text-2xl text-primary font-medium max-w-lg mb-1">
        Tailored Financial Solutions for your Business
      </div>
      <div className="xl:text-start text-center text-primary-400 text-base font-medium max-w-lg tracking-tight">
        From seamless transactions to multi-currency support, manage your
        business finances effortlessly.
      </div>

      <div className="relative mt-24 w-full h-[10vh]">
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-full md:w-8/12 px-3">
          {card}
        </div>

        <div className="absolute left-1/2 top-3 transform -translate-x-1/2 -translate-y-1/2 w-full md:w-8/12 px-2">
          {card}
        </div>

        <div className="absolute left-1/2 top-9 transform -translate-x-1/2 -translate-y-1/2  w-full md:w-8/12 px-2">
          {card}
        </div>

        <div className="absolute left-1/2 top-6 transform -translate-x-1/2 -translate-y-1/2 w-full md:w-8/12">
          {card}
        </div>
      </div>
    </div>
  );
};

export default TailoredSupport;
