import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

import { CTitle } from "..";

import { ReceiveImg, SendImg, SwapImg } from "@/public/assets";

const OnePlace = () => {
  return (
    <div className="bg-background-200">
      <div className="page-max-width pt-12 pb-12">
        <div>
          <CTitle
            iconType="flashlight"
            title="Backbone is free to use, with no hidden fees when you transact"
          />
          <div className="clash-display-font xl:text-start text-center lg:text-4xl md:text-3xl text-2xl text-primary font-medium max-w-2xl mb-1">
            Send, receive, and swap your money effortlessly in one place.
          </div>
          <div className="xl:text-start text-center text-primary-400 md:text-base text-xs font-medium w-full tracking-tight">
            Take full control of your money with our fast, secure app built to
            simplify how you move and manage funds
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-6 items-stretch">
          <div className="h-full flex flex-col  p-4">
            <div className="flex items-end justify-center bg-white  rounded-3xl flex-1">
              <Image alt="send" src={SendImg} />
            </div>
            <div className="w-full flex flex-col items-center mt-4">
              <div className="clash-display-font flex items-center gap-1 text-xl">
                <Icon
                  className="text-info-500"
                  icon="ri:arrow-up-circle-fill"
                />
                <span className="text-primary font-medium">Send</span>
              </div>
              <div className="text-primary-500 text-sm text-center">
                Move money instantly and securely.
              </div>
            </div>
          </div>

          <div className="h-full flex flex-col  p-4">
            <div className="flex items-end justify-center bg-white rounded-3xl flex-1">
              <Image alt="receive" src={ReceiveImg} />
            </div>
            <div className="w-full flex flex-col items-center mt-4">
              <div className="clash-display-font flex items-center gap-1 text-xl">
                <Icon
                  className="text-success-500"
                  icon="ri:arrow-down-circle-fill"
                />
                <span className="text-primary font-medium">Receive</span>
              </div>
              <div className="text-primary-500 text-sm text-center">
                Accept payments with ease, anytime.
              </div>
            </div>
          </div>

          <div className="h-full flex flex-col p-4">
            <div className="flex items-end justify-center bg-white rounded-3xl  flex-1">
              <Image alt="swap" src={SwapImg} />
            </div>
            <div className="w-full flex flex-col items-center mt-4">
              <div className="clash-display-font flex items-center gap-1 text-xl">
                <Icon className="text-info-500" icon="ri:refresh-fill" />
                <span className="text-primary font-medium">Swap</span>
              </div>
              <div className="text-primary-500 text-sm text-center">
                Convert currencies in seconds, at great rates.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnePlace;
