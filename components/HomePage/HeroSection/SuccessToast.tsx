import { Image } from "@heroui/image";
import { cn } from "@heroui/theme";
import React from "react";

import { TransactionIcon } from "@/public/assets";

interface Props {
  className?: string;
}
const SuccessToast = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "bg-white p-[6.44px] rounded-[12.874px] inline-flex items-center gap-[6.44px] shadow-[0_4px_10px_0_rgba(14,18,27,0.05)]",
        className,
      )}
    >
      <Image
        disableAnimation
        disableSkeleton
        alt="transaction icon"
        radius="none"
        src={TransactionIcon.src}
      />
      <div>
        <div className="text-primary clash-display-font text-xs font-medium leading-[17.165px]">
          Transaction successful
        </div>
        <div className="text-[10px] tracking-[-0.15px] leading-[12.874px] text-primary-500">
          Daniel Anderson sent $5,000 to Kate Uche.
        </div>
      </div>
    </div>
  );
};

export default SuccessToast;
