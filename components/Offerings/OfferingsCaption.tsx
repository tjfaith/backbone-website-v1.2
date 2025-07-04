import { AvatarGroup, Avatar } from "@heroui/avatar";
import { Icon } from "@iconify/react";
import React from "react";
import Image from "next/image";
import { Button } from "@heroui/button";
import Link from "next/link";

import { Bar, Bar2 } from "@/public/assets";
import { CustomButton } from "@/components";

interface Props {
  caption1: string;
  caption2: string;
  caption3: string;
  caption4: string;
}
const OfferingsCaption = ({
  caption1,
  caption2,
  caption3,
  caption4,
}: Props) => {
  return (
    <div className="flex flex-col xl:items-start items-center">
      <div className="animate__animated animate__fadeInUp animate__fast md:bg-background-100 md:shadow-[inset_0px_-1px_4px_0px_rgba(0,0,0,0.06)]  dark:text-white  md:text-primary rounded-full p-[6px] inline-flex md:flex-row flex-col items-center justify-center md:justify-start gap-3 mb-4">
        <AvatarGroup size="sm" total={9}>
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
            in transactions from 8th March 2024 to 6th June, 2025. Welcome to
            the new Standard!
          </span>
        </div>
      </div>

      <div className=" text-2xl   sm:text-5xl font-medium clash-display-font mb-5 text-primary space-y-3">
        <div className="inline-flex items-center   gap-2   animate__animated animate__fadeInUp animate__faster">
          <div>{caption1}</div>{" "}
          <span className=" relative  text-secondary-500 dark:text-secondary-600">
            {caption2}
            <Image
              alt="bar"
              className="block mx-auto w-[calc(100%)] absolute  h-auto "
              data-aos="fade-up"
              src={Bar}
            />
          </span>
        </div>

        <div className="flex items-center  gap-2   animate__animated animate__fadeInUp animate__fast">
          <div>{caption3}</div>
          <span className="text-info-300 relative">
            {caption4}{" "}
            <Image
              alt="bar2"
              className=" w-full absolute"
              data-aos="fade-up"
              src={Bar2}
            />
          </span>
        </div>
      </div>

      <div className="text-primary-600 xl:text-left text-center text-xs md:text-medium  font-normal max-w-3xl mb-4   animate__animated animate__fadeInUp animate__slow">
        Where individuals, businesses, and nonprofits connect to a seamless
        global payment solution spanning 150+ countries.
      </div>
      <div className="flex items-center  md:flex-row flex-col-reverse gap-4   animate__animated animate__fadeInUp animate__slower">
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
    </div>
  );
};

export default OfferingsCaption;
