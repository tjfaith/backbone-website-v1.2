import { Icon } from "@iconify/react";
import React from "react";

import { Offerings } from "@/types";

interface Props {
  data: Offerings;
  iconColor?: String;
}
const OfferingsCard = ({ data, iconColor = "text-info" }: Props) => {
  return (
    <div
      className="bg-background rounded-xl p-3 hover:shadow-xl  transition-all ease-in-out duration-300"
      data-aos="fade-up"
    >
      <Icon className={`${iconColor} text-5xl mb-6`} icon={data.icon} />
      <div className="flex items-end gap-4">
        <div className="text-primary text-2xl font-medium clash-display-font">
          {data.title}
        </div>
        {data.status === "Coming soon" && (
          <div className=" text-xs p-2 rounded-full bg-background-100 shadow-[inset_0px_-1px_4px_0px_rgba(0,0,0,0.06)]">
            {data.status}
          </div>
        )}
      </div>
      <div className="text-primary-400 text-sm">{data.description}</div>
    </div>
  );
};

export default OfferingsCard;
