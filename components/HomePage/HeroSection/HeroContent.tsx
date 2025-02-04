"use client";
import { Avatar, AvatarGroup } from "@heroui/avatar";
import { Icon } from "@iconify/react";
import React from "react";
import { Button } from "@heroui/button";
import { cn } from "@heroui/theme";
import { Link } from "@heroui/link";

import { CustomButton } from "@/components";

interface Props {
  avatarClass?: string;
  caption?: number;
}
const HeroContent = ({ avatarClass, caption = 1 }: Props) => {
  return (
    <div className=" absolute inset-0 h-screen  flex items-center max-w-screen-2xl mx-auto lg:px-28 px-6 md:justify-start justify-center  z-20 animate__animated animate__delay-4s">
      <div>
        <div
          className={cn(
            "animate__delay-2s animate__animated animate__fadeInUp animate__fast md:bg-gradient-to-b from-primary-300 via-primary-300 to-primary-800 text-background rounded-full p-2 inline-flex md:flex-row flex-col items-center justify-center md:justify-start gap-3 mb-4",
            avatarClass,
          )}
          // data-aos="zoom-out-down"
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
            <span className="dark:text-foreground-500">We processed </span>{" "}
            <b>$197,957,000</b>
            <span className="dark:text-foreground-500">
              {" "}
              in transactions in {new Date().getFullYear() - 1}.
            </span>
          </div>
        </div>

        {caption === 1 && (
          <div className=" text-2xl  sm:text-6xl font-medium text-background clash-display-font mb-3 space-y-1">
            <div className="flex items-center gap-2 animate__delay-2s animate__animated animate__fadeInUp animate__faster">
              <div
              // data-aos="fade-right"
              >
                Powering
              </div>{" "}
              <div
              // data-aos="fade-left"
              >
                Payments
              </div>
            </div>

            <div className="flex items-center gap-2 animate__delay-2s animate__animated animate__fadeInUp animate__fast">
              <div
              // data-aos="fade-right"
              >
                Unlocking
              </div>
              <div
              // data-aos="fade-left"
              >
                Global Opportunities
              </div>
            </div>
          </div>
        )}

        {caption === 2 && (
          <div className=" text-2xl  sm:text-6xl font-medium text-background clash-display-font mb-3 space-y-1">
            <div className="flex items-center gap-2 animate__delay-2s animate__animated animate__fadeInUp animate__faster">
              <div
              // data-aos="fade-right"
              >
                Empowering
              </div>{" "}
              <div
              // data-aos="fade-left"
              >
                Futures
              </div>
            </div>

            <div className="flex items-center gap-2 animate__delay-2s animate__animated animate__fadeInUp animate__fast">
              <div
              // data-aos="fade-right"
              >
                Unlocking
              </div>
              <div
              // data-aos="fade-left"
              >
                Possibilities
              </div>
            </div>
          </div>
        )}

        <div
          className="text-background text-xs md:text-lg font-normal max-w-2xl mb-8 animate__delay-2s animate__animated animate__fadeInUp animate__slow"
          // data-aos="fade-up"
        >
          Where individuals, businesses, and nonprofits connect to a seamless
          global payment solution spanning 150+ countries.
        </div>
        <div
          className="flex items-center md:flex-row flex-col-reverse gap-4 animate__delay-2s animate__animated animate__fadeInUp animate__slower"
          // data-aos="fade-up"
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
