"use client";
import { Image as HeroImage } from "@heroui/image";
import Image from "next/image";

import { About1, Bar } from "@/public/assets";
const AboutHero = () => {
  return (
    <div className=" page-max-width">
      <div className="flex flex-col items-center mb-9">
        <div className="clash-display-font text-2xl md:text-5xl xl:text-6xl text-center space-x-2 font-medium mb-3 flex-col md:flex-row flex md:items-start">
          <span className="text-primary" data-aos="fade-up">
            The Power of
          </span>
          <div
            className="dark:text-secondary-600 text-secondary  flex flex-col"
            data-aos="fade-up"
          >
            <span>
              Possibilities
              <Image
                alt="bar"
                className=" w-full"
                data-aos="fade-up"
                src={Bar}
              />
            </span>
          </div>
        </div>
        <div
          className="text-primary-600 text-lg font-normal md:max-w-3xl text-center"
          data-aos="fade-up"
        >
          Backbone is a payments company empowering Africans worldwide with
          seamless transactions and endless possibilities.
        </div>
      </div>
      <HeroImage
        alt="about banner"
        className="w-screen object-cover h-[63vh] object-center "
        src={About1.src}
      />
    </div>
  );
};

export default AboutHero;
