"use client";
import { Avatar, AvatarGroup } from "@heroui/avatar";
import { Icon } from "@iconify/react";
import React from "react";
import CountUp from "react-countup";
import { Button } from "@heroui/button";
import { cn } from "@heroui/theme";
import { Link } from "@heroui/link";

import { CustomButton } from "@/components";

interface Props {
  avatarClass?: string;
}
const HeroContent = ({ avatarClass }: Props) => {
  return (
    <div className=" absolute inset-0 h-screen  flex items-center max-w-screen-2xl mx-auto lg:px-28 px-6 md:justify-start justify-center  z-20">
      <div>
        <div
          className={cn(
            "  md:bg-gradient-to-b from-primary-300 via-primary-300 to-primary-800 text-background rounded-full p-2 inline-flex md:flex-row flex-col items-center justify-center md:justify-start gap-3 mb-4",
            avatarClass,
          )}
          data-aos="zoom-out-down"
        >
          <AvatarGroup total={9}>
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
          <div className="md:text-left text-center">
            <span>We processed </span> $
            <CountUp
              enableScrollSpy
              scrollSpyOnce
              duration={10}
              end={197957000}
            />
            <span> in transactions in {new Date().getFullYear() - 1}.</span>
          </div>
        </div>

        <div className=" text-2xl  sm:text-6xl font-medium text-background clash-display-font mb-3 space-y-1">
          <div className="flex items-center gap-2">
            <div data-aos="fade-right">Empowering</div>{" "}
            <div
              className="md:py-1 py-0.5 pl-1 md:pr-10 border-l-2 border-accent3 bg-gradient-to-r from-accent3/40 from-20% via-accent3/3 to-transparent"
              data-aos="fade-left"
            >
              Payments
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div data-aos="fade-right">Unlocking</div>{" "}
            <div
              className="md:py-1 py-0.5 pl-1 md:pr-10 border-l-2 border-accent2 bg-gradient-to-r from-accent2/40 from-20% via-accent2/3 to-transparent"
              data-aos="fade-left"
            >
              Possibilities
            </div>
          </div>
        </div>

        <div
          className="text-background text-xs md:text-lg font-normal max-w-2xl mb-8"
          data-aos="fade-up"
        >
          Where individuals, businesses, and nonprofits connect to a seamless
          global payment solution spanning 150+ countries.
        </div>
        <div
          className="flex items-center md:flex-row flex-col-reverse gap-4"
          data-aos="fade-up"
        >
          <CustomButton as={Link} fullWidth={false} href="/#get_started">
            Get Started Now
          </CustomButton>
          <Button
            as={Link}
            className="text-foreground text-base font-medium border-2 bg-background"
            fullWidth={false}
            href="/#footer"
          >
            Learn More About Our Offerings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
