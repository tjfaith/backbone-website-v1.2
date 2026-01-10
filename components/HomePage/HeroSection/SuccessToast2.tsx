import { cn } from "@heroui/theme";
import { Icon } from "@iconify/react";
import React from "react";

interface Props {
  className?: string;
  title?: string;
}
const SuccessToast2 = ({
  className,
  title = "Transaction successful",
}: Props) => {
  return (
    <div
      className={cn(
        "bg-[#E0F5FF] text-[#50BFF6] h-auto py-2 pl-3 pr-4 rounded-[40px] inline-flex items-center gap-2 ",
        className,
      )}
    >
      <Icon icon="ep:circle-check-filled" />
      <div className="tracking-[-0.176px] leading-6 font-medium text-base">
        {title}
      </div>
    </div>
  );
};

export default SuccessToast2;
