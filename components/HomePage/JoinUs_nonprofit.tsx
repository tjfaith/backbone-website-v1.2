import { Icon } from "@iconify/react";
import Image from "next/image";

import { Img6 } from "@/public/assets";

interface Props {
  hideCaption?: boolean;
}
const JoinUsNonprofit = ({ hideCaption = true }: Props) => {
  return (
    <div className="w-full relative    ">
      <Image
        alt="image 5"
        className="object-cover rounded-xl shadow-xl h-full w-full "
        src={Img6}
      />
      <div className="absolute top-0 md:top-10 left-0 md:left-4  p-8 text-background animate__animated animate__flipInX ">
        <div className="uppercase text-xs md:text-base font-medium mb-2">
          Nonprofits
        </div>
        <div className="clash-display-font text-lg md:text-4xl font-medium text-accent1-200 leading-5 md:leading-none md:tracking-wide max-w-lg mb-4">
          Securely fundraise, disburse grants, and track donor contributions.
        </div>
        {!hideCaption && (
          <div className="flex items-center space-x-1 text-xs md:text-base font-medium">
            <span>Learn about Non Profit services</span>
            <Icon icon="ri:arrow-right-s-line" />
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinUsNonprofit;
