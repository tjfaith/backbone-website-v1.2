import { Icon } from "@iconify/react";
import React from "react";

interface Props {
  title: string;
  iconType?: "flashlight" | "check";
}
const CTitle = ({ title, iconType = "check" }: Props) => {
  return (
    <div className="xl:block  flex flex-col justify-center items-center ">
      <div className=" mb-4 text-primary inline-flex gap-2 text-sm font-medium bg-background-100 rounded-full items-center py-1 px-2 shadow-[inset_0px_-1px_4px_0px_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-center text-background bg-primary rounded-full p-0.5 text-base">
          {iconType === "flashlight" && <Icon icon="ri:flashlight-fill" />}
          {iconType === "check" && (
            <Icon icon="qlementine-icons:check-tick-16" className="text-xs" />
          )}
        </div>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default CTitle;
