"use client";
import { Link } from "@heroui/link";
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

import { Bar } from "@/public/assets";

const ContactInfo = () => {
  return (
    <div className=" xl:max-w-xl max-w-xs" data-aos="fade-up">
      <div className=" xl:text-5xl md:text-4xl text-3xl clash-display-font mb-3 font-medium">
        <div className="flex items-center space-x-2 ">
          <span className="inline-block text-warning  ">
            Help
            <Image
              alt="bar"
              className="block mx-auto w-[calc(100%)] max-w-[3ch] h-auto xl:mt-2"
              height={50}
              src={Bar}
            />
          </span>
          <span className="text-primary">is here</span>
        </div>
        <div className="text-primary">when you need it</div>
      </div>
      <div className=" text-primary-600 md:text-lg text-sm">
        Support is always available when you need it. Contact our team when you
        have a question.
      </div>
      <div className="text-primary md:text-lg text-sm md:space-y-6 space-y-3 mt-4">
        <div className=" flex items-start space-x-2 ">
          <Icon className="text-2xl" icon="ri:map-pin-fill" />{" "}
          <span> 8, The Green, Suite A, Dover, DE 19901, United States</span>
        </div>
        <Link
          className="md:text-lg text-sm  flex items-center space-x-2"
          href="mailto:sales@usecotton.io"
        >
          <Icon icon="ri:mail-fill" /> <span>sales@mybackbone.io</span>
        </Link>
        <Link
          className="md:text-lg text-sm flex items-center space-x-2 "
          href={`tel:${process.env.NEXT_PUBLIC_UK_NUMBER_1?.replace(/\s+/g, "")}`}
        >
          <Icon icon="ri:phone-fill" />{" "}
          <span>{process.env.NEXT_PUBLIC_USA_NUMBER}</span>
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;
