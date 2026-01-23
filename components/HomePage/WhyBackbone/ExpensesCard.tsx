import { Image } from "@heroui/image";
import { cn } from "@heroui/theme";
import React from "react";
import { useSelector } from "react-redux";

import { colorLogo } from "@/public/assets";
import { countryPageContent } from "@/app/utils";
import { RootState } from "@/app/store";

interface Props {
  className?: string;
}
const ExpensesCard = ({ className }: Props) => {
  const { selectedCountry } = useSelector((state: RootState) => state.settings);

  return (
    <div
      className={cn(
        "p-4 rounded-xl bg-white dark:bg-background-200 shadow-[0_0_6px_2px_rgba(0,0,0,0.05),_0_0_0_0.5px_var(--neutral-200,#E1E4EA)] dark:shadow-[0_0_6px_2px_rgba(0,0,0,0.4),_0_0_0_0.5px_#1F2838] max-w-2xl",
        className,
      )}
    >
      <Image
        disableAnimation
        disableSkeleton
        alt="color logo"
        className="mb-1"
        radius="none"
        src={colorLogo.src}
      />
      <div className="flex justify-between gap-8">
        <div>
          <div className="clash-display-font text-xs font-medium text-primary dark:text-foreground tracking-[-0.132px] leading-5">
            Business expenses
          </div>
          <div className="text-[8px] leading-4 font-normal text-primary-500 dark:text-foreground-400">
            Transaction invoice
          </div>
        </div>
        <div className="clash-display-font font-semibold tracking-[1.08px] leading-[17.004px] text-xl text-primary dark:text-foreground">
          {
            countryPageContent[selectedCountry.code].homePage.whyBackbone1
              .expensesCardValue
          }
        </div>
      </div>
    </div>
  );
};

export default ExpensesCard;
