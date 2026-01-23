import React from "react";
import Image from "next/image";

import { Bar, Bar2 } from "@/public/assets";
import {
  ContactSalesBtn,
  GetStartedBtn,
  TransactionReport,
} from "@/components";

interface Props {
  caption1: string;
  caption2: string;
  caption3: string;
  caption4: string;
}
const OfferingsCaption = ({
  caption1,
  caption2,
  caption3,
  caption4,
}: Props) => {
  return (
    <div className="flex flex-col xl:items-start items-center">
      <TransactionReport />

      <div className=" text-2xl   sm:text-5xl font-medium clash-display-font mb-5 text-primary space-y-3">
        <div className="inline-flex items-center   gap-2   animate__animated animate__fadeInUp animate__faster">
          <div>{caption1}</div>{" "}
          <span className=" relative  text-secondary-500 dark:text-secondary-600">
            {caption2}
            <Image
              alt="bar"
              className="block mx-auto w-[calc(100%)] absolute  h-auto "
              data-aos="fade-up"
              src={Bar}
            />
          </span>
        </div>

        <div className="flex items-center  gap-2   animate__animated animate__fadeInUp animate__fast">
          <div>{caption3}</div>
          <span className="text-info-300 relative">
            {caption4}{" "}
            <Image
              alt="bar2"
              className=" w-full absolute"
              data-aos="fade-up"
              src={Bar2}
            />
          </span>
        </div>
      </div>

      <div className="text-primary-600 xl:text-left text-center text-xs md:text-medium  font-normal max-w-3xl mb-4   animate__animated animate__fadeInUp animate__slow">
        Where individuals, businesses, and nonprofits connect to a seamless
        global payment solution spanning 170+ countries.
      </div>
      <div className="flex items-center  md:flex-row flex-col-reverse gap-4   animate__animated animate__fadeInUp animate__slower">
        <GetStartedBtn />
        <ContactSalesBtn />
      </div>
    </div>
  );
};

export default OfferingsCaption;
