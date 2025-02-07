"use client";
import React from "react";
import { Button } from "@heroui/button";
import { cn } from "@heroui/theme";

import { Spinner } from "@/public/assets";
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  children,
  color = "primary",
  type = "button",
  isLoading,
  startContent,
  className,
  endContent,
  size,
  radius = "sm",
  variant,
  isDisabled,
  href,
  as,
  fullWidth = true,
  onPress,
}: CustomButtonProps) => {
  return (
    <Button
      as={as}
      className={cn(
        variant == "bordered"
          ? "border-2 border-primary-700  text-primary-600"
          : "bg-gradient-to-t  from-background/10 via-background-300 to-background-500 dark:from-[#000] dark:via-[#242628] dark:to-[#4C4F55] text-primary dark:text-white  ",
        "flex items-center p-[1px] text-sm ",
        className,
      )}
      color={color}
      endContent={endContent}
      fullWidth={fullWidth}
      href={href}
      isDisabled={isDisabled}
      isLoading={isLoading}
      radius={radius}
      size={size}
      spinner={<Spinner className="h-12 w-12" />}
      startContent={!isLoading && startContent}
      type={type}
      variant={variant}
      onPress={onPress}
    >
      <div className="bg-gradient-to-t from-background/10 via-background-300 to-background-500 dark:from-[#242628]/50 dark:via-[#4C4F55]/50 dark:to-[#646671]  rounded-md h-full  p-[1px]">
        <div className="bg-gradient-to-t from-background/10 via-background to-background dark:from-[#000000]/10 dark:via-[#242628] dark:to-[#4C4F55] h-full flex items-center justify-center p-3 rounded-md">
          {!isLoading && children}
        </div>
      </div>
    </Button>
  );
};

export default CustomButton;
