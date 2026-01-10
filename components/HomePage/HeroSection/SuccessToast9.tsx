import { Image } from "@heroui/image";
import { cn } from "@heroui/theme";
import React from "react";

import { Toast9 } from "@/public/assets";

interface Props {
  className?: string;
}
const SuccessToast9 = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
      <Image src={Toast9.src} />
    </div>
  );
};

export default SuccessToast9;
