import { Image } from "@heroui/image";
import { cn } from "@heroui/theme";
import React from "react";

import { Toast8 } from "@/public/assets";

interface Props {
  className?: string;
}
const SuccessToast8 = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
      <Image src={Toast8.src} />
    </div>
  );
};

export default SuccessToast8;
