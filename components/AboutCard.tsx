import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@heroui/theme";

interface Props {
  className?: string;
  item: {
    img: StaticImageData;
    icon: ReactNode;
    title: string;
    description: string;
  };
}
const AboutCard = ({ className, item }: Props) => {
  return (
    <div
      className={cn("flex md:flex-row flex-col items-center gap-6 ", className)}
    >
      <div
        className="object-cover h-screen-40 rounded-2xl w-full md:w-6/12"
        data-aos="fade-right"
      >
        <Image
          alt="mission-img"
          className=" object-cover object-center h-full  w-full rounded-2xl"
          src={item.img}
        />
      </div>
      <div className="w-full md:w-6/12 overflow-hidden">
        <div data-aos="fade-left">
          {item.icon}
          <div className=" text-3xl font-medium text-primary mb-2">
            {item.title}
          </div>
          <div className="text-primary-600 text-lg">{item.description}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
