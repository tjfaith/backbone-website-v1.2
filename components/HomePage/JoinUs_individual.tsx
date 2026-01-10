import { Icon } from "@iconify/react";
import Image from "next/image";
import { Image as HerouiImage } from "@heroui/image";
import React from "react";
import { Link } from "@heroui/link";

import { Img4, Pattern2 } from "@/public/assets";

const JoinUsIndividual = () => {
  return (
    <div className="w-full relative bg-[#D5F1FF] rounded-xl flex   bg-no-repeat bg-cover   h-full overflow-hidden ">
      <div className="absolute top-0 left-0 right-0 h-[98%] bg-no-repeat bg-top">
        <Image
          fill
          alt="image 4"
          className=" scale-x-110  "
          src={Pattern2.src}
        />
      </div>
      <HerouiImage
        disableAnimation
        disableSkeleton
        alt="image 4"
        className=" object-cover md:object-left object-right w-full  h-full "
        radius="none"
        src={Img4.src}
      />
      <div className="absolute left-0 top-auto md:top-10  md:bottom-auto bottom-0 z-10 md:bg-transparent bg-white/10 backdrop-blur-md md:backdrop-blur-none  p-8 text-background animate__animated animate__flipInX ">
        <div className="uppercase text-xs :text-base font-medium mb-2 text-left dark:text-primary text-[#2597D0]">
          Individuals
        </div>
        <div className="clash-display-font text-xl md:text-4xl font-medium text-left  dark:text-primary text-[#124B68]  leading-5 md:leading-none md:tracking-wide max-w-lg mb-4">
          Simplify everyday payments, from money transfers to bill payments.
        </div>
        <Link
          className="flex items-center space-x-1 text-xs md:text-base font-medium dark:text-primary text-[#2597D0]"
          href="/offerings/individual"
        >
          <span>Get started as an individual</span>
          <Icon icon="ri:arrow-right-s-line" />
        </Link>
      </div>
    </div>
  );
};

export default JoinUsIndividual;
