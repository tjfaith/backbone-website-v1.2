import { colorLogo } from "@/public/assets";
import { Image } from "@heroui/image";
import { cn } from "@heroui/theme";
import React from "react";

interface Props {
  className?: string;
}
const ExpensesCard = ({ className }: Props) => {
  return (
    <div
      className={cn(
        " p-4 rounded-xl bg-white shadow-[0_0_6px_2px_rgba(0,0,0,0.05),_0_0_0_0.5px_var(--neutral-200,#E1E4EA)] max-w-2xl",
        className
      )}
    >
      <Image
        src={colorLogo.src}
        className=" mb-1"
        radius="none"
        disableAnimation
        disableSkeleton
        alt="color logo"
      />
      <div className=" flex justify-between gap-8">
        <div>
          <div className="clash-display-font text-xs font-medium text-primary tracking-[-0.132px] leading-5">
            Business expenses
          </div>
          <div className="text-[8px] leading-4 font-normal text-primary-500">
            Transaction invoice
          </div>
        </div>
        <div className="clash-display-font font-semibold tracking-[1.08px] leading-[17.004px] text-xl text-primary">
          $24,000
        </div>
      </div>
    </div>
  );
};

export default ExpensesCard;
