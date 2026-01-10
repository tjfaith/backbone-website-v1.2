import { Image } from "@heroui/image";
import { cn } from "@heroui/theme";
import React from "react";

import { Toast10 } from "@/public/assets";

interface Props {
  className?: string;
}
const SuccessToast10 = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
      <Image src={Toast10.src} />
    </div>
  );
};

export default SuccessToast10;
