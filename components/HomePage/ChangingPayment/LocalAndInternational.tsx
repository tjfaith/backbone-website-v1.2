"use client";
import React from "react";
import { Icon } from "@iconify/react";

import { CTitle, SendMoneyForm } from "@/components";

const LocalAndInternational = () => {
  return (
    <div className=" rounded-2xl bg-background md:px-12 px-3 py-3 md:py-12 xl:py-3 mt-16 flex lg:flex-row flex-col items-center justify-between  space-y-5">
      <div data-aos="fade-up ">
        <CTitle title="Local and International Payments" />
        <div className="clash-display-font md:text-[32px] text-2xl text-primary font-medium md:max-w-md mb-1 xl:text-start text-center">
          Send money <br />
          <span>locally and internationally</span>
        </div>
        <div className="text-primary-500 text-base font-normal lg:max-w-md tracking-tight xl:text-start  text-center">
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
