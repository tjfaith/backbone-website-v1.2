"use client";
import { Image } from "@heroui/image";
import { cn } from "@heroui/theme";
import React from "react";
import { useSelector } from "react-redux";

import { countryPageContent } from "@/app/utils";
import { RootState } from "@/app/store";

interface Props {
  className?: string;
}

const SuccessToast = ({ className }: Props) => {
  const { selectedCountry } = useSelector((state: RootState) => state.settings);

  return (
    <div
      className={cn(
        "bg-white dark:bg-background-100 p-[6.44px] rounded-[12.874px] inline-flex items-center gap-[6.44px] shadow-[0_4px_10px_0_rgba(14,18,27,0.05)] dark:shadow-[0_6px_16px_0_rgba(0,0,0,0.4)]",
        className,
      )}
    >
      <Image
        disableAnimation
        disableSkeleton
        alt="transaction icon"
        radius="none"
        src={
          countryPageContent[selectedCountry.code].homePage.heroSection
            .successToast[0]
        }
      />
      <div>
        <div className="text-primary dark:text-success-600 clash-display-font text-xs font-medium leading-[17.165px]">
          Transaction successful
        </div>
        <div className="text-[10px] tracking-[-0.15px] leading-[12.874px] text-primary-500 dark:text-foreground-300">
          Daniel Anderson sent $5,000 to Kate Uche.
        </div>
      </div>
    </div>
  );
};

export default SuccessToast;
