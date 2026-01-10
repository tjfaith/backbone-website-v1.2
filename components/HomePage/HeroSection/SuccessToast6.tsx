import { Image } from "@heroui/image";
import { cn } from "@heroui/theme";
import React from "react";

import { Toast6 } from "@/public/assets";

interface Props {
  className?: string;
}
const SuccessToast6 = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
      <Image src={Toast6.src} />
    </div>
  );
};

export default SuccessToast6;
