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
  captionClass?: string;
  descriptionClass?: string;
  offeringsBtnClass?: string;
  showLightBtn?: boolean;
  caption?: number;
}
const HeroContent = ({
  avatarClass,
  captionClass,
  descriptionClass,
  offeringsBtnClass,
  showLightBtn,
  caption = 1,
}: Props) => {
  return (
    <div className=" absolute inset-0 h-screen  flex items-center page-max-width md:justify-start justify-center  z-20 animate__animated animate__delay-4s">
      <div>
        <div
          className={cn(
            "animate__delay-2s animate__animated animate__fadeInUp animate__fast md:bg-gradient-to-b from-primary-300 via-primary-300 to-primary-800 text-background rounded-full p-2 inline-flex md:flex-row flex-col items-center justify-center md:justify-start gap-3 mb-4",
            avatarClass,
          )}
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
            <span className="">We processed </span> <b>$197,957,000</b>
            <span className="">
              {" "}
              in transactions in {new Date().getFullYear() - 1}.
            </span>
          </div>
        </div>

        {caption === 1 && (
          <div
            className={cn(
              " text-2xl  sm:text-6xl font-medium  text-primary clash-display-font mb-3 space-y-1",
              captionClass,
            )}
          >
            <div className="flex items-center  md:justify-start justify-center gap-2 animate__delay-2s animate__animated animate__fadeInUp animate__faster">
              <div>Powering</div> <div>Payments</div>
            </div>

            <div className="flex items-center md:flex-row flex-col md:justify-start justify-center md:gap-2  animate__delay-2s animate__animated animate__fadeInUp animate__fast">
              <div>Unlocking</div>
              <div>Global Opportunities</div>
            </div>
          </div>
        )}

        {caption === 2 && (
          <div
            className={cn(
              " text-2xl  sm:text-6xl font-medium text-background dark:text-primary  clash-display-font mb-3 space-y-1",
              captionClass,
            )}
          >
            <div className="flex items-center md:justify-start justify-center gap-2 animate__delay-2s animate__animated animate__fadeInUp animate__faster">
              <div>Empowering</div> <div>Futures</div>
            </div>

            <div className="flex items-center md:justify-start justify-center gap-2 animate__delay-2s animate__animated animate__fadeInUp animate__fast">
              <div>Unlocking</div>
              <div>Possibilities</div>
            </div>
          </div>
        )}

        <div
          className={cn(
            "text-primary text-xs md:text-lg md:text-start text-center font-normal max-w-2xl mb-8 animate__delay-2s animate__animated animate__fadeInUp animate__slow",
            descriptionClass,
          )}
        >
          Where individuals, businesses, and nonprofits connect to a seamless
          global payment solution spanning 150+ countries.
        </div>
        <div className="flex items-center md:flex-row flex-col-reverse gap-4 animate__delay-2s animate__animated animate__fadeInUp animate__slower">
          <div>
            <CustomButton
              as={Link}
              fullWidth={false}
              href="/#get_started"
              variant={showLightBtn ? "light" : "flat"}
            >
              Get Started Now
            </CustomButton>
          </div>

          <Button
            as={Link}
            className={cn(
              "text-primary text-base font-medium shadow-none bg-transparent",
              offeringsBtnClass,
            )}
            endContent={<Icon icon="ri:arrow-right-s-line" />}
            fullWidth={false}
            href="/#footer"
            variant="light"
          >
            Learn More About Our Offerings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
