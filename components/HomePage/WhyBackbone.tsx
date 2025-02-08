import Image from "next/image";
import React from "react";

import { Gage, WorldMap2 } from "@/public/assets";
import { AnimatedGraph, RippleIcon } from "@/components";

const WhyBackbone = () => {
  return (
    <div
      className=" 
    bg-[radial-gradient(circle_at_50%_35%,_var(--tw-gradient-stops))]  from-[#0473F9] from-0% via-[#000C19] via-20% to-[#0E121B] to-100%  py-16  "
    >
      <div className="page-max-width ">
        <div className=" md:max-w-3xl text-center mx-auto mb-10">
          <div className="text-aqua text-base font-medium">Why Backbone?</div>
          <div className="text-[#FFFFFF] text-medium md:text-2xl font-medium">
            Whether it&apos;s cross-border transfers, global business scaling,
            or donations, we deliver more than just payments.
          </div>
        </div>

        {/* TOP CARDS */}
        <div className=" flex xl:flex-row flex-col items-stretch gap-5 mb-5">
          {/* card1 */}
          <div
            className=" bg-[#131925] flex md:flex-row flex-col-reverse items-end justify-between border border-[#1D2739] px-6 text-[#FFFFFF] rounded-2xl xl:w-7/12"
            data-aos="fade-up"
          >
            <div className="py-7 max-w-sm">
              <div className="clash-display-font text-3xl font-medium">
                Built for Speed
              </div>
              <div className=" text-base font-normal tracking-wide">
                We offer fast and efficient transactions tailored to your unique
                timeline, ensuring that your business operates smoothly and on
                schedule.
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-aqua text-2xl font-medium">Minutes</div>
                <div className="text-primary-600 font-normal text-xl">
                  Not Days
                </div>
              </div>
              <div className="transform scale-x-[-1] rounded-full  bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-[#0473F9]/30 from-0% via-[#131925]/10 via-50% to-[#131925] to-100%">
                <Image alt="gage image" src={Gage} width={700} />
              </div>
            </div>
          </div>

          {/* card2 */}
          <div
            className="bg-[#131925] border border-[#1D2739] flex xl:flex-col md:flex-row-reverse flex-col md:gap-0 gap-3 justify-between p-6 text-[#FFFFFF] rounded-2xl xl:w-5/12"
            data-aos="fade-up"
          >
            <div className="mt-5">
              <AnimatedGraph data-aos="flip-up" />
            </div>
            <div>
              <div className="clash-display-font text-2xl md:text-3xl font-medium">
                Competitive Rates
              </div>
              <div className=" text-medium md:text-lg font-normal md:max-w-md">
                We provide you with unbeatable pricing for maximum value.
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM CARDS */}
        <div className="grid md:grid-cols-2 gap-5">
          <div
            className="p-6 gap-4 justify-between border border-[#1D2739] px-6 text-[#FFFFFF] rounded-2xl bg-[radial-gradient(circle_at_15%_43%,_var(--tw-gradient-stops))] from-[#0473F9]/30 from-0% via-[#131925]/10 via-20% to-[#131925] to-100% "
            data-aos="fade-up"
          >
            <div className="">
              <Image alt="World map 2" data-aos="flip-up" src={WorldMap2} />
            </div>
            <div>
              <div className="clash-display-font text-2xl md:text-3xl font-medium">
                Global Reach
              </div>
              <div className=" text-medium md:text-lg font-normal md:max-w-md">
                We settle everywhere in the world except the sanctioned
                countries.
              </div>
            </div>
          </div>

          <div
            className="p-6 bg-[#131925] flex md:flex-row flex-col items-stretch justify-between border border-[#1D2739] px-6 text-[#FFFFFF] rounded-2xl bg-[radial-gradient(circle_at_80%_50%,_var(--tw-gradient-stops))] from-[#0473F9]/30 from-0% via-[#131925]/10 via-20% to-[#131925] to-100%"
            data-aos="fade-up"
          >
            <div className=" md:w-8/12 flex flex-col justify-end">
              <div className="clash-display-font text-2xl md:text-3xl font-medium">
                Secured Transactions
              </div>
              <div className=" text-medium w-full md:text-lg font-normal md:max-w-sm">
                We provide end-to-end encryption to ensure that every
                transaction you make is fully protected, from start to finish.
              </div>
            </div>
            <div className=" overflow-hidden rounded-full md:w-4/12 flex items-center justify-center ">
              <RippleIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyBackbone;
