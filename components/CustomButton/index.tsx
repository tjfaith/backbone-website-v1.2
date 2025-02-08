"use client";
import React from "react";
import { Button } from "@heroui/button";
import { cn } from "@heroui/theme";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";

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
  const { theme } = useTheme();
  const isSSR = useIsSSR();

  return (
    <Button
      as={as}
      className={cn(
        theme == "light" || isSSR
          ? "bg-gray-200"
          : "bg-gradient-to-t  from-[#000] via-[#242628] to-[#4C4F55] text-primary",
        "flex items-center w-full p-[1px] text-sm ",
        className,
      )}
      color={color}
      endContent={endContent}
      fullWidth={fullWidth}
      href={href}
      isDisabled={isDisabled}
      radius={radius}
      size={size}
      startContent={!isLoading && startContent}
      type={type}
      variant={variant}
      onPress={onPress}
    >
      <div
        className={`${theme === "light" || isSSR ? "bg-gray-200" : "bg-gradient-to-t"} from-[#242628]/50 via-[#4C4F55]/50 to-[#646671] w-full  rounded-md h-full  p-[1px]`}
      >
        <div
          className={`${theme === "light" || isSSR ? "bg-gray-100 text-primary dark:text-background" : "bg-gradient-to-t text-background dark:text-primary"}  from-[#000000]/10 via-[#242628] to-[#4C4F55] h-full flex items-center justify-center p-3 w-full rounded-md`}
        >
          {!isLoading ? (
            children
          ) : (
            <Spinner
              className="h-12 w-12"
              color={theme === "light" ? "#0E121B" : "#ffffff"}
            />
          )}
        </div>
      </div>
    </Button>
  );
};

export default CustomButton;
