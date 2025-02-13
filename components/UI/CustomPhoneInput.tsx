"use client";
import React from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import flags from "react-phone-number-input/flags";
import { cn } from "@heroui/theme";

import { E164Number } from "@/types";

interface Props {
  value: E164Number | undefined;
  setValue: (value: E164Number | undefined) => void;
  isRequired?: boolean;
  containerClass?: string;
  countrySelectClass?: string;
  numberInputClass?: string;
  label?: string;
}
const CustomPhoneInput = ({
  value,
  isRequired = false,
  containerClass,
  countrySelectClass,
  numberInputClass,
  label = "Phone number",
  setValue,
}: Props) => {
  return (
    <div className=" w-full ">
      <div className={`font-medium text-primary mb-2 text-sm`}>
        <span>{label}</span>
      </div>
      <PhoneInput
        containerComponentProps={{
          className: `${cn("flex pl-3 border-2  rounded-lg box-border w-full  shadow-xs text-sm border-gray-200 dark:border-background-500 dark:hover:border-[#5E5F68] hover:border-[#A1A1AA] shadow-sm rounded-xl", containerClass)}`,
        }}
        countryCallingCodeEditable={false}
        countrySelectProps={{
          className: `${cn("rounded-lg", countrySelectClass)}`,
        }}
        defaultCountry="NG"
        flags={flags}
        international={true}
        limitMaxLength={true}
        numberInputProps={{
          className: `${cn("w-xs bg-transparent border-l p-2 border-gray-200 dark:border-background-500 dark:hover:border-[#5E5F68] hover:border-[#A1A1AA] focus:outline-none", numberInputClass)}`,
        }}
        rules={{ required: isRequired }}
        value={value}
        onChange={(value: E164Number | undefined) => setValue(value)}
      />
    </div>
  );
};

export default CustomPhoneInput;
