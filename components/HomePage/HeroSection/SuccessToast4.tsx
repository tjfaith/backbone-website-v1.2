import { cn } from "@heroui/theme";
import { Icon } from "@iconify/react";
import React from "react";

interface Props {
  className?: string;
}

const SuccessToast3 = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "bg-white dark:bg-background-100 border border-foreground-100 dark:border-background-300 flex flex-col items-start p-3 rounded-xl overflow-hidden w-full max-w-xs ",
        className,
      )}
    >
      <div className="flex relative items-center justify-between w-full mb-2">
        <div>
          <div className="clash-display-font mb-1 text-sm text-primary dark:text-foreground-50 font-medium leading-4 tracking-[-0.154px]">
            Portfolio performance
          </div>
          <div className="text-[10px] text-primary-450 dark:text-foreground-400 font-normal leading-4">
            In the past 7 days
          </div>
        </div>

        <Icon
          className="text-[#1FC16B] dark:text-success-500 text-xl"
          icon="ri:line-chart-line"
        />
      </div>

      <div className="space-y-1">
        <div className="text-[#1FC16B] dark:text-success-500 text-[40px] font-medium leading-10 tracking-[-0.4px] clash-display-font">
          80%
        </div>
        <div className="text-primary-450 dark:text-foreground-400 text-[10px] leading-4 font-normal">
          50% growth in the past 1 month
        </div>
      </div>

      <div
        className="
          absolute
          -bottom-8 right-0
          w-[91px]
          h-[66px]
          rounded-full
          bg-[#C2F5DA]
          dark:bg-success-500/30
          blur-[50px]
        "
      />
    </div>
  );
};

export default SuccessToast3;
