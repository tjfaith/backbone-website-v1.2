"use client";
import React from "react";
import { Icon } from "@iconify/react";

import { CTitle, SendMoneyForm } from "@/components";

const LocalAndInternational = () => {
  return (
    <div className=" rounded-2xl bg-background md:px-12 px-3 py-3 md:py-12 xl:py-3 mt-16 flex lg:flex-row flex-col items-center justify-between  space-y-5">
      <div data-aos="fade-up ">
        <CTitle title="Local and International Payments" />
        <div className="clash-display-font lg:text-4xl md:text-3xl text-2xl text-primary font-medium lg:max-w-sm mb-1 xl:text-start text-center">
          Send money locally and internationally
        </div>
        <div className="text-primary-400 text-base font-medium lg:max-w-xs tracking-tight xl:text-start text-center">
          Enjoy Fast, secure transactions designed to keep you connected
          globally.
        </div>
      </div>

      <SendMoneyForm
        action={() =>
          window.open(`${process.env.NEXT_PUBLIC_APP_URL}/sign-in`, "_blank")
        }
        title={
          <div className="text-primary clash-display-font text-sm flex items-center gap-1 font-medium ">
            <Icon icon="ri:arrow-right-up-line" />
            <span>Send money</span>
          </div>
        }
      />
    </div>
  );
};

export default LocalAndInternational;
