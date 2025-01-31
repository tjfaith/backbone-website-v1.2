import React from "react";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";

import { ArrowUp, Img1, Img2, Img3 } from "@/public/assets";
import { NotificationCard } from "@/components";

const About = () => {
  return (
    <div
      className="max-w-screen-2xl mx-auto lg:px-28 px-6 space-y-12"
      id="about"
    >
      {/* Global Payment */}
      <div className="bg-primary rounded-2xl text-background  flex items-end justify-between md:flex-row flex-col ">
        <div className="pl-8 py-16 space-y-2  w-full" data-aos="fade-up">
          <div>GLOBAL PAYMENTS</div>
          <div className="clash-display-font text-2xl md:text-3xl lg:text-5xl font-medium md:max-w-md tracking-wider mb-3">
            Fast, secure, and designed to keep you connected globally.
          </div>
          <div className="flex items-center  gap-2 md:ml-10  text-xs md:text-base">
            <Divider
              className="bg-background w-10 h-[2px]"
              orientation="horizontal"
            />
            <span>
              Send and receive payments anywhere in the world with ease.
            </span>
          </div>
        </div>
        <Image alt="arrow up" data-aos="fade-up" src={ArrowUp.src} />
      </div>

      {/* Money transfer */}
      <div className="flex  md:flex-row flex-col  justify-between  gap-4">
        <div className=" rounded-2xl border border-accent3-400 bg-gradient-to-b from-accent3-400/30  to-accent3-400  flex-grow flex flex-col   ">
          <div className="p-8">
            <div className="text-accent3 uppercase text-sm md:text-base font-medium mb-2">
              Money transfer
            </div>
            <div className="text-foreground-900 text-xl md:text-4xl max-w-sm tracking-tight font-medium clash-display-font mb">
              Send money seamlessly to businesses and family anywhere in the
              world.
            </div>
            <div className="flex items-center text-foreground-900 gap-2 md:ml-10 text-xs md:text-base">
              <Divider
                className="bg-foreground-900 w-10 h-[2px]"
                orientation="horizontal"
              />
              <span>
                Send and receive payments anywhere in the world with ease.
              </span>
            </div>
          </div>

          <div className="relative overflow-hidden flex-grow lg:h-auto h-screen-35 ">
            <NotificationCard
              hideContent
              aosDelay="300"
              className=" absolute bottom-11 -right-32 bg-background/30 "
            />
            <NotificationCard
              hideContent
              aosDelay="600"
              className=" absolute bottom-16 -right-24 bg-background/50"
            />
            <NotificationCard
              hideContent
              aosDelay="1200"
              className=" absolute bottom-20 -right-16 bg-background/80"
            />
            <NotificationCard
              aosDelay="1800"
              className=" absolute bottom-24 -right-12"
              data-aos="fade-left"
            />
          </div>
        </div>
        <Image
          isBlurred
          isZoomed
          data-aos="fade-up"
          height={600}
          src={Img1.src}
        />
      </div>

      {/* Exchange */}
      <div className="flex items-center md:flex-row flex-col justify-between gap-4">
        <Image isZoomed data-aos="fade-up" src={Img2.src} />
        <div
          className="  bg-accent2-300 pt-8 px-8 rounded-2xl flex-grow"
          data-aos="fade-up"
        >
          <div>
            <div className="text-accent2 uppercase text-sm md:text-base font-medium mb-2">
              Currency exchange
            </div>
            <div className="text-foreground-900 text-xl md:text-4xl max-w-sm tracking-tight font-medium clash-display-font mb">
              Exchange major currencies effortlessly and at unbeatable rates.
            </div>
            <div className="flex items-center text-foreground-900 gap-2 md:ml-10 text-xs md:text-base">
              <Divider
                className="bg-foreground-900 w-10 h-[2px]"
                orientation="horizontal"
              />
              <span>we make it quick, simple, and seamless.</span>
            </div>
          </div>
          <Image
            disableAnimation
            disableSkeleton
            data-aos="zoom-in"
            data-aos-delay="600"
            sizes="sm"
            src={Img3.src}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
