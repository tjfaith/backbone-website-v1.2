import { Image } from "@heroui/image";
import { cn } from "@heroui/theme";
import React from "react";

import { Toast5 } from "@/public/assets";

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
