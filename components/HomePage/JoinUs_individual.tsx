import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

import { Img4 } from "@/public/assets";

interface Props {
  hideCaption?: boolean;
}
const JoinUsIndividual = ({ hideCaption = true }: Props) => {
  return (
    <div className="w-full relative   ">
      <Image
        alt="image 4"
        className="object-cover  rounded-xl shadow-xl h-full w-full "
        src={Img4}
      />
      <div className="absolute top-0  md:top-20  p-8 text-background animate__animated animate__flipInX ">
        <div className="uppercase text-xs :text-base font-medium mb-2 text-left">
          Individuals
        </div>
        <div className="clash-display-font text-xl md:text-4xl font-medium text-left  text-accent3-300 leading-5 md:leading-none md:tracking-wide max-w-lg mb-4">
          Simplify everyday payments, from money transfers to bill payments.
        </div>
        {!hideCaption && (
          <div className="flex items-center space-x-1 text-xs md:text-base font-medium">
            <span>Get started as an individual</span>
            <Icon icon="ri:arrow-right-s-line" />
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinUsIndividual;
