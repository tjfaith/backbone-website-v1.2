import { Toast5, TransactionIcon } from "@/public/assets";
import { Image } from "@heroui/image";
import { cn } from "@heroui/theme";
import React from "react";

interface Props {
  className?: string;
}
const SuccessToast5 = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
      <Image src={Toast5.src} />
    </div>
  );
};

export default SuccessToast5;
