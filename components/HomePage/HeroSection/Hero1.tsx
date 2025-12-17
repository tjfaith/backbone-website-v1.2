"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useTheme } from "next-themes";
import { useDispatch } from "react-redux";
import { useIsSSR } from "@react-aria/ssr";
import { Avatar, AvatarGroup } from "@heroui/avatar";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { Button } from "@heroui/button";
import { motion } from "framer-motion";

import { Bar, Bar2, Map } from "@/public/assets";
import { CustomButton } from "@/components";
import { setShowLightNav } from "@/app/store/Features/settingsSlice";

const Hero1 = () => {
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const isSSR = useIsSSR();

  useEffect(() => {
    dispatch(setShowLightNav(theme === "light" || isSSR ? false : true));
  }, [theme]);

  return (
    <motion.div
      className=" min-h-screen flex flex-col items-center pt-32  bg-[radial-gradient(ellipse_at_60%_40%,_var(--tw-gradient-stops))] from-success-50 from-0% via-background via-50% to-background to-100%"
      exit={{ x: "-100%" }}
      transition={{ duration: 0.1 }}
    >
      <div className="flex flex-col items-center justify-center page-max-width">
        <div className="animate__delay-2s animate__animated animate__fadeInUp animate__fast md:bg-background-100 md:shadow-[inset_0px_-1px_4px_0px_rgba(0,0,0,0.06)]  dark:text-white  md:text-primary rounded-full p-[6px] inline-flex md:flex-row flex-col items-center justify-center md:justify-start gap-3 mb-4">
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
            <span className="">We processed </span>{" "}
            <b>
              $
              {Number(
                process.env.NEXT_PUBLIC_TOTAL_PROCESSED as string
              ).toLocaleString()}
            </b>
            <span className="">
              {" "}
              {/* {new Date().getFullYear() - 1} */}
              in transactions from 8th March, 2024 to 30th November, 2025. Join
              us on the road to $1B!
            </span>
          </div>
        </div>

        <div className=" text-2xl   sm:text-5xl font-medium clash-display-font mb-5 text-primary space-y-3">
          <div className="inline-flex items-center  justify-center gap-2 animate__delay-2s animate__animated animate__fadeInUp animate__faster">
            <div>Empowering</div>{" "}
            <span className=" relative  text-secondary-500 dark:text-secondary-600">
              Payments
              <Image
                alt="bar"
                className="block mx-auto w-[calc(100%)] absolute  h-auto "
                data-aos="fade-up"
                src={Bar}
              />
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 animate__delay-2s animate__animated animate__fadeInUp animate__fast">
            <div>Unlocking</div>
            <span className="text-info-300 relative">
              Possibilities{" "}
              <Image
                alt="bar2"
                className=" w-full absolute"
                data-aos="fade-up"
                src={Bar2}
              />
            </span>
          </div>
        </div>

        <div className="text-primary-600 text-xs md:text-medium text-center font-normal max-w-3xl mb-4 animate__delay-2s animate__animated animate__fadeInUp animate__slow">
          Where individuals, businesses, and nonprofits connect to a seamless
          global payment solution spanning 170+ countries.
        </div>
        <div className="flex items-center justify-center md:flex-row flex-col-reverse gap-4 animate__delay-2s animate__animated animate__fadeInUp animate__slower">
          <div>
            <CustomButton
              as={Link}
              fullWidth={false}
              href={`${process.env.NEXT_PUBLIC_APP_URL}/sign-in`}
            >
              Get Started Now
            </CustomButton>
          </div>

          <Button
            as={Link}
            className="text-primary text-base font-medium shadow-none bg-transparent"
            fullWidth={false}
            href="/contact-us"
            variant="light"
          >
            Contact Sales
          </Button>
        </div>
        <Image
          alt="banner map"
          className="animate__delay-2s animate__animated animate__fadeIn animate__slower"
          src={Map}
          width={800}
        />
      </div>
    </motion.div>
  );
};

export default Hero1;
