import { Avatar, AvatarGroup } from "@heroui/avatar";
import { Icon } from "@iconify/react";
import React from "react";
import { useDispatch } from "react-redux";

import { ContactSalesBtn, GetStartedBtn } from "@/components";
import { setShowAnnouncement } from "@/app/store/Features/settingsSlice";

const HeroContent = () => {
  const dispatch = useDispatch();

  return (
    <div
      className=" mx-auto lg:mx-0 text-center lg:text-left"
      data-aos="fade-up"
    >
      {/* <div
        className="
          inline-flex
          flex-col
          items-center
          gap-2
          px-4 py-3
          rounded-xl
          shadow-[0_1px_0_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(225,228,234,0.5)]
          bg-background-200
          mb-6

          lg:flex-row
          lg:gap-3
          lg:justify-start
        "
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <Divider
          orientation="vertical"
          className="hidden lg:block bg-info-250 h-5 w-0.5"
        />

        <div
          className="flex md:flex-nowrap flex-wrap justify-center lg:justify-start items-center gap-x-1 text-base font-normal leading-6 tracking-[-0.176px] text-center lg:text-left"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span className=" whitespace-nowrap">Processed over</span>
          <span className="text-primary text-base font-medium tracking-[-0.176px] leading-6">
            $
            {Number(
              process.env.NEXT_PUBLIC_TOTAL_PROCESSED as string
            ).toLocaleString()}
          </span>
          <span className=" whitespace-nowrap">in transactions in 2025</span>
        </div>

        <Divider
          orientation="vertical"
          className="hidden lg:block bg-foreground-100 h-5 w-0.5"
        />

        <span
          className="text-primary-400 text-base tracking-[-0.176px] whitespace-nowrap leading-6"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          Read More
        </span>
      </div> */}

      {/* <button
        onClick={() => {
          localStorage.removeItem("announcement_seen_v1");
          dispatch(setShowAnnouncement(true));
        }}
        className="animate__delay-2s animate__animated animate__fadeInUp animate__fast md:bg-background-100 md:shadow-[inset_0px_-1px_4px_0px_rgba(0,0,0,0.06)]  dark:text-white  md:text-primary rounded-full p-3 inline-flex md:flex-row flex-col items-center justify-center md:justify-start gap-3 mb-4"
      >
        <AvatarGroup size="sm" total={170}>
          <Avatar
            classNames={{ base: "bg-transparent" }}
            icon={
              <Icon
                className="text-3xl h-full w-full"
                icon="emojione:flag-for-nigeria"
              />
            }
          />
          <Avatar
            classNames={{ base: "bg-transparent" }}
            icon={
              <Icon
                className="text-3xl  h-full w-full"
                icon="emojione:flag-for-united-states"
              />
            }
          />
          <Avatar
            classNames={{ base: "bg-transparent" }}
            icon={
              <Icon
                className="text-3xl  h-full w-full"
                icon="circle-flags:gb"
              />
            }
          />
          <Avatar
            classNames={{ base: "bg-transparent" }}
            icon={
              <Icon
                className="text-3xl  h-full w-full"
                icon="circle-flags:cn"
              />
            }
          />
        </AvatarGroup>
        <div className="md:text-left text-center text-base">
          <span className="">Processed over </span>{" "}
          <b>
            $
            {Number(
              process.env.NEXT_PUBLIC_TOTAL_PROCESSED as string
            ).toLocaleString()}
          </b>
          <span className="">
            {" "}

            in transactions in 2025
          </span>
        </div>
      </button> */}

      <button
        className="
        cursor-pointer
    group
    animate__delay-2s animate__animated animate__fadeInUp animate__fast
    md:bg-background-100
    md:shadow-[inset_0px_-1px_4px_0px_rgba(0,0,0,0.06)]
    dark:text-white
    md:text-primary
    rounded-full
    px-4 py-3
    inline-flex
    md:flex-row
    flex-col
    items-center
    gap-3
    mb-4
    transition
    hover:shadow-md
  "
        onClick={() => {
          localStorage.removeItem("announcement_seen_v1");
          dispatch(setShowAnnouncement(true));
        }}
      >
        <AvatarGroup size="sm" total={170}>
          <Avatar
            classNames={{ base: "bg-transparent" }}
            icon={
              <Icon className="text-3xl" icon="emojione:flag-for-nigeria" />
            }
          />
          <Avatar
            classNames={{ base: "bg-transparent" }}
            icon={
              <Icon
                className="text-3xl"
                icon="emojione:flag-for-united-states"
              />
            }
          />
          <Avatar
            classNames={{ base: "bg-transparent" }}
            icon={<Icon className="text-3xl" icon="circle-flags:gb" />}
          />
          <Avatar
            classNames={{ base: "bg-transparent" }}
            icon={<Icon className="text-3xl" icon="circle-flags:cn" />}
          />
        </AvatarGroup>

        <div className="text-center md:text-left text-sm md:text-base leading-tight">
          <span className="opacity-80">Processed over </span>
          <b>
            $
            {Number(
              process.env.NEXT_PUBLIC_TOTAL_PROCESSED as string
            ).toLocaleString()}
          </b>
          <span className="opacity-80"> in transactions in 2025</span>

          {/* Read more */}
          <div
            className="
        mt-1
        text-xs
        font-medium
        text-primary
        inline-flex
        items-center
        gap-1
        opacity-80
        group-hover:opacity-100
        transition
      "
          >
            Read more
            <Icon
              className="text-sm transition-transform group-hover:translate-x-0.5"
              icon="solar:arrow-right-linear"
            />
          </div>
        </div>
      </button>

      {/* HEADLINE */}
      <div
        className="clash-display-font text-[40px] font-medium tracking-[0.8px] leading-[52px] text-black mb-3"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Powering payments that unlock global opportunities
      </div>

      <div
        className="text-primary-500 text-base tracking-[-0.27px] leading-6 mb-8"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        We connect individuals, businesses, and nonprofits to a seamless global
        payment solution, spanning over 150 countries worldwide.
      </div>

      <div
        className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <GetStartedBtn />
        <ContactSalesBtn />
      </div>
    </div>
  );
};

export default HeroContent;
