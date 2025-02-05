import { Icon } from "@iconify/react";
import Image from "next/image";

import { Img5 } from "@/public/assets";

interface Props {
  hideCaption?: boolean;
}
const JoinUsBusinesses = ({ hideCaption = true }: Props) => {
  return (
    <div className="w-full relative    ">
      <Image
        alt="image 5"
        className="object-cover  rounded-xl shadow-xl h-full w-full "
        src={Img5}
      />
      <div className="absolute top-0 md:top-10 left-0 md:left-4  p-8 text-background  animate__animated animate__flipInX">
        <div className="uppercase text-xs md:text-base font-medium mb-2 text-left dark:text-primary">
          Businesses
        </div>
        <div className="clash-display-font text-xl md:text-4xl leading-5 text-left md:leading-none font-medium text-warning-300 dark:text-warning-900 md:tracking-wide max-w-md mb-4">
          Manage bulk payments, automate transactions, and grow globally.
        </div>
        {!hideCaption && (
          <div className="flex items-center space-x-1 text-xs md:text-base font-medium dark:text-primary ">
            <span>Explore business solutions</span>
            <Icon icon="ri:arrow-right-s-line" />
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinUsBusinesses;
