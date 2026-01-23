import { Divider } from "@heroui/divider";
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
        "bg-white dark:bg-background-100 border border-foreground-100 dark:border-foreground-600 rounded-xl flex flex-col items-start w-full max-w-xs",
        className,
      )}
    >
      <div className="flex items-center gap-1 p-3 rounded-t-xl w-full">
        <Icon
          className="text-[#1FC16B] dark:text-success-600"
          icon="ep:circle-check-filled"
        />
        <div className="text-primary-400 dark:text-foreground-200 text-sm tracking-[-0.084px] leading-5">
          Payment for goods
        </div>
      </div>

      <Divider
        className="dark:border-foreground-600"
        orientation="horizontal"
      />

      <div className="flex items-center justify-between bg-[#F8FAFB] dark:bg-background-200 p-3 rounded-b-xl w-full">
        <span className="text-2xl text-primary dark:text-foreground-50 font-medium leading-8 clash-display-font">
          $ 24,029.12
        </span>
        <span className="text-primary-400 dark:text-foreground-300 text-sm tracking-[-0.084px] leading-5">
          Last month
        </span>
      </div>
    </div>
  );
};

export default SuccessToast3;
