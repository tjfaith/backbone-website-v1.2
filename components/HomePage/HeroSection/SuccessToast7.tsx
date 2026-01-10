import { Image } from "@heroui/image";
import { cn } from "@heroui/theme";
import React from "react";

import { Toast7 } from "@/public/assets";

interface Props {
  className?: string;
}
const SuccessToast7 = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
      <Image src={Toast7.src} />
    </div>
  );
};

export default SuccessToast7;
