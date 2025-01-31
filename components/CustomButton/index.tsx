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
  fullWidth = true,
  onPress,
}: CustomButtonProps) => {
  return (
    <Button
      className={cn(
        variant == "bordered"
          ? "border-2 border-primary-700  text-primary-600"
          : "bg-gradient-to-t from-primary via-primary-800 to-primary-600 text-white ",
        "flex items-center p-[1px] text-sm ",
        className,
      )}
      color={color}
      endContent={endContent}
      fullWidth={fullWidth}
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
      <div className="bg-gradient-to-t from-primary-800/50 via-primary-600/50 to-primary-500  rounded-md h-full  p-[1px]">
        <div className="bg-gradient-to-t from-primary/10 via-primary-800 to-primary-600 h-full flex items-center justify-center p-3 rounded-md">
          {!isLoading && children}
        </div>
      </div>
    </Button>
  );
};

export default CustomButton;
