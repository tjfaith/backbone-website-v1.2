import React from "react";
import Image from "next/image";
import { cn } from "@heroui/theme";

import { HalfLogo } from "@/public/assets";

interface Props {
  className?: string;
  hideContent?: boolean;
  aosDelay?: string;
}
const NotificationCard = ({
  className,
  hideContent = false,
  aosDelay = "300",
}: Props) => {
  return (
    <div
      className={cn(
        "px-3 py-2 rounded-3xl bg-background shadow-xl flex items-center gap-3 md:max-w-xl h-[12vh] w-full",
        className,
      )}
      data-aos="fade-left"
      data-aos-delay={aosDelay}
    >
      {!hideContent && (
        <>
          <Image
            alt="half logo"
            className=" p-3 bg-primary w-56 md:w-28 rounded-2xl"
            sizes="sm"
            src={HalfLogo}
          />
          <div>
            <div className="flex items-center justify-between max-w-md mr-8">
              <div className="clash-display-font text-base whitespace-nowrap md:text-2xl text-foreground-950 font-medium">
                Transaction successful
              </div>
              <div className="text-foreground-400 text-xs whitespace-nowrap md:text-lg font-normal">
                Just now
              </div>
            </div>
            <div className=" text-xs md:text-sm md:tracking-wide">
              Your transfer of $5,000 to Dale Daniel was successful. Thank you
              for trusting Backbone!
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NotificationCard;
