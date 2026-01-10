import { Icon } from "@iconify/react";
import Image from "next/image";
import { Image as HerouiImage } from "@heroui/image";
import { Link } from "@heroui/link";

import { Img5, Pattern3 } from "@/public/assets";

const JoinUsBusinesses = () => {
  return (
    <div className="w-full relative bg-[#FFE0C7] rounded-xl flex   bg-no-repeat bg-cover   h-full overflow-hidden ">
      <div className="absolute top-0 -left-10 right-0 h-[98%] bg-no-repeat bg-top">
        <Image
          fill
          alt="image 4"
          className=" scale-x-110  "
          src={Pattern3.src}
        />
      </div>

      <HerouiImage
        disableAnimation
        disableSkeleton
        alt="image 5"
        className=" object-cover md:object-left object-right w-full  h-full "
        radius="none"
        src={Img5.src}
      />
      <div className="absolute top-auto md:top-8 left-0 md:left-4  p-8 text-background md:bottom-auto bottom-0 z-10 md:bg-transparent bg-white/80 backdrop-blur-md md:backdrop-blur-none animate__animated animate__flipInX">
        <div className="uppercase text-xs md:text-base font-medium mb-2 text-left dark:text-primary text-[#FF7300]">
          Businesses
        </div>
        <div className="clash-display-font text-xl md:text-4xl leading-5 text-left md:leading-none font-medium text-[#994500] dark:text-warning-900 md:tracking-wide max-w-md mb-4">
          Manage bulk payments, automate transactions, and grow globally.
        </div>
        <Link
          className="flex items-center space-x-1 text-xs md:text-base font-medium dark:text-primary text-[#FF7300]"
          href="/offerings/businesses"
        >
          <span>Explore business solutions</span>
          <Icon icon="ri:arrow-right-s-line" />
        </Link>
      </div>
    </div>
  );
};

export default JoinUsBusinesses;
