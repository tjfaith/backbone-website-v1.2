import { Icon } from "@iconify/react";
import Image from "next/image";
import { Image as HerouiImage } from "@heroui/image";
import React from "react";
import { Link } from "@heroui/link";
import { useSelector } from "react-redux";

import { countryPageContent } from "@/app/utils";
import { Img4 } from "@/public/assets";
import { RootState } from "@/app/store";

const JoinUsIndividual = () => {
  const { selectedCountry } = useSelector((state: RootState) => state.settings);

  return (
    <div
      className={`${countryPageContent[selectedCountry.code].homePage.joinUs.joinUsIndividual.contentBgColor} w-full relative rounded-xl flex bg-no-repeat bg-cover h-full overflow-hidden`}
    >
      <div className="absolute top-0 left-0 right-0 h-[98%] bg-no-repeat bg-top">
        <Image
          fill
          alt="image 4"
          className="scale-x-110 dark:opacity-80"
          src={
            countryPageContent[selectedCountry.code].homePage.joinUs
              .joinUsIndividual.pattern
          }
        />
      </div>

      <HerouiImage
        disableAnimation
        disableSkeleton
        alt="image 4"
        className="object-cover md:object-left object-right w-full h-full dark:brightness-90"
        radius="none"
        src={Img4.src}
      />

      <div
        className="absolute left-0 top-auto md:top-10 md:bottom-auto bottom-0 z-10 md:bg-transparent bg-white/10 md:dark:bg-transparent
 dark:bg-background-100/70 backdrop-blur-md md:backdrop-blur-none p-8 text-background animate__animated animate__flipInX"
      >
        <div
          className={`${countryPageContent[selectedCountry.code].homePage.joinUs.joinUsIndividual.textColor} uppercase text-xs :text-base font-medium mb-2 text-left`}
        >
          Individuals
        </div>

        <div
          className={`${countryPageContent[selectedCountry.code].homePage.joinUs.joinUsIndividual.bodyColor} clash-display-font text-xl md:text-4xl font-medium text-left leading-5 md:leading-none md:tracking-wide max-w-lg mb-4`}
        >
          Simplify everyday payments, from money transfers to bill payments.
        </div>

        <Link
          className={`${countryPageContent[selectedCountry.code].homePage.joinUs.joinUsIndividual.textColor} flex items-center space-x-1 text-xs md:text-base font-medium`}
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
