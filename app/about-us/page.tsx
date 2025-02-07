"use client";
import { Image as HeroImage } from "@heroui/image";
import Image from "next/image";
import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTheme } from "next-themes";

import { About1, About2, About3, About4, Bar } from "@/public/assets";
import { AboutCard } from "@/components";
import { setShowLightNav } from "@/app/store/Features/settingsSlice";

const AboutUs = () => {
  const about_items = [
    {
      img: About2,
      icon: (
        <div className="bg-purple-200/50 p-1 rounded-lg inline-block text-white">
          <div className="border-2 border-purple-400 bg-purple-800 rounded-lg p-1 text-xl">
            <Icon className=" rotate-45" icon="ri:rocket-2-fill" />
          </div>
        </div>
      ),
      title: "Mission",
      description:
        "Our Mission is to enable at least half of the B2B, B2C, and C2C transactions that either originate out of Africa, have their destination in Africa, or are in one way or the other connected to Africa and Africans.",
    },
    {
      img: About3,
      icon: (
        <div className="bg-blue-200/50 p-1 rounded-lg inline-block text-white">
          <div className="border-2 border-blue-500 bg-blue-500 rounded-lg p-1 text-xl">
            <Icon icon="ri:lightbulb-flash-fill" />
          </div>
        </div>
      ),
      title: "Vision",
      description:
        "Our long term goal and Vision is to build an ecosystem of integrated financial services that create possibilities for Africans and the rest of the world across a broad range of sectors, industries, and market segments.",
    },
    {
      img: About4,
      icon: (
        <div className="bg-orange-200/50 p-1 rounded-lg inline-block text-white">
          <div className="border-2 border-orange-500 bg-orange-500 rounded-lg p-1 text-xl">
            <Icon icon="ri:fire-fill" />
          </div>
        </div>
      ),
      title: "Purpose",
      description:
        "At Backbone, we see possibilities as the lightbulb moments when dreams suddenly feel tangible and achievable. Our Purpose is to enable these possibilities for the human race anywhere in the world, beginning with Africa.",
    },
  ];

  const dispatch = useDispatch();
  const { theme } = useTheme();

  useEffect(() => {
    dispatch(setShowLightNav(theme === "light" ? false : true));
  }, [theme]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_70%_15%,_var(--tw-gradient-stops))] from-[#d2e8df] dark:from-background-50 from-0% via-background dark:via-background-200 via-20% to-background dark:to-background-200 to-100% pt-40 pb-7">
      <div className=" page-max-width ">
        <div className="flex flex-col items-center mb-9">
          <div className="uppercase mb-4 text-primary text-base font-medium p-2  rounded-full">
            About Us
          </div>
          <div className="clash-display-font text-2xl md:text-6xl text-center space-x-2 font-medium mb-3 flex-col md:flex-row flex md:items-start">
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
        <div className=" mt-32">
          <div className=" text-4xl font-medium mb-10 text-primary text-center ">
            What we’re about
          </div>
          <div className=" space-y-12">
            {about_items.map((item, index) => (
              <AboutCard
                key={index}
                className={
                  index % 2 !== 0 ? " flex-col md:flex-row-reverse" : ""
                }
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
