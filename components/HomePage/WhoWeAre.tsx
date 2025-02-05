import Image from "next/image";
import React from "react";

import {
  Innovation,
  LockImg,
  Rates,
  User1,
  User2,
  User3,
  User4,
  WorldMap,
} from "@/public/assets";
import { DigitalTransaction } from "@/components";

const WhoWeAre = () => {
  return (
    <div className="max-w-screen-2xl mx-auto lg:px-28 px-6 pt-60 pb-10 md:pt-0  md:py-10 ">
      <div className=" flex flex-col items-center justify-center mb-6">
        <div className="text-primary text-center text-3xl md:text-4xl font-medium clash-display-font">
          Why Everyone Trusts Backbone.
        </div>
        <div className="text-primary-600 text-lg font-normal md:max-w-3xl text-center">
          Whether it&apos;s cross-border transfers, global business scaling, or
          donations, we deliver more than just payments.
        </div>
      </div>
      <div className=" grid md:grid-cols-2  gap-6 ">
        <div
          className=" border rounded-xl bg-gradient-to-b from-background from-50% to-background-200 shadow-sm border-foreground-100 inline-flex flex-col "
          data-aos="fade-up"
          data-aos-offset="200"
        >
          <div className=" p-4 mb-16">
            <div className="clash-display-font text-primary text-3xl font-medium">
              Built for Speed
            </div>
            <div className=" text-lg text-primary-600 font-normal">
              We offer fast and efficient transactions tailored to your
              timeline.
            </div>
          </div>
          <DigitalTransaction />
        </div>

        <div
          className=" border rounded-xl bg-background-100 shadow-sm border-foreground-100 inline-flex flex-col"
          data-aos="fade-up"
        >
          <div className=" p-4 mb-16">
            <div className="clash-display-font text-primary text-3xl font-medium">
              Secured Transactions
            </div>
            <div className=" text-lg text-primary-600 font-normal">
              {" "}
              We provide End-to-end encryption protecting every transaction.
            </div>
          </div>
          <div className=" flex justify-center">
            <Image alt="lock image" src={LockImg} />
          </div>
        </div>
      </div>

      <div className=" grid md:grid-cols-3 gap-6 mt-6">
        <div className="bg-background-100 shadow-sm border rounded-xl">
          <div className="relative h-screen-50">
            <Image alt="world map" src={WorldMap} />
            <div
              className="absolute bottom-36 left-20 z-10"
              data-aos="flip-left"
              data-aos-delay="300"
              data-aos-easing="ease-out-cubic"
              data-aos-once="false"
            >
              <Image alt="user 1" src={User1} />
            </div>
            <div
              className="absolute top-16 right-20 z-10"
              data-aos="flip-left"
              data-aos-delay="500"
              data-aos-easing="ease-out-cubic"
              data-aos-once="false"
            >
              <Image alt="user 2" src={User2} />
            </div>
            <div
              className="absolute top-20 left-28 z-10"
              data-aos="flip-left"
              data-aos-delay="700"
              data-aos-easing="ease-out-cubic"
              data-aos-once="false"
            >
              <Image alt="user 3" src={User3} />
            </div>
            <div
              className="absolute bottom-16 right-12 z-10"
              data-aos="flip-left"
              data-aos-delay="300"
              data-aos-easing="ease-out-cubic"
              data-aos-once="false"
            >
              <Image alt="user 4" src={User4} />
            </div>
          </div>
          <div className=" p-4">
            <div className="clash-display-font text-primary text-3xl font-medium">
              Global Reach
            </div>
            <div className=" text-lg text-primary-600 font-normal">
              Access to over 150 countries through trusted partnerships (We
              settle everywhere in the world except the sanctioned countries)
            </div>
          </div>
        </div>
        <div className="bg-background-100 shadow-sm border rounded-xl">
          <div className="flex items-center justify-end py-4 h-screen-50">
            <Image alt="rates" src={Rates} />
          </div>
          <div className=" p-4">
            <div className="clash-display-font text-primary text-3xl font-medium">
              Competitive Rates
            </div>
            <div className=" text-lg text-primary-600 font-normal">
              We provide you with unbeatable pricing for maximum value.
            </div>
          </div>
        </div>
        <div className="bg-background-100 shadow-sm border rounded-xl">
          <div className=" h-screen-50 pt-8">
            <div className=" flex items-stretch justify-stretch ">
              <Image
                alt="Ino4 img"
                className="h-full w-full object-cover"
                src={Innovation}
              />
            </div>
          </div>
          <div className=" p-4">
            <div className="clash-display-font text-primary text-3xl font-medium">
              Innovation
            </div>
            <div className=" text-lg text-primary-600 font-normal">
              Cutting-edge tools to streamline your payment processes.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
