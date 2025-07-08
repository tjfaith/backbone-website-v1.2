import { Spacer } from "@heroui/spacer";
import { Icon } from "@iconify/react";
import React from "react";
import Image from "next/image";
import { DottedBg, GradientLogo } from "@/public/assets";

const Testimonies = () => {
  const testimoniesList = [
    {
      message:
        "“Backbone made international transactions seamless for our business. The customer support and user-friendly platform have been game-changers for us.”",
      name: "Emeka Ugochukwu",
      post: "Founder, Lumina Tech",
    },
    // {
    //   message:
    //     "“Thanks to Backbone, our donation campaigns now reach a global audience with fast and secure payment solutions. It’s truly made a difference.”",
    //   name: "Ahmed Khan",
    //   post: "Director, Global Impact Initiative",
    // },
    // {
    //   message:
    //     "“Backbone has transformed how we handle crossborder payments. We now focus on growth without worrying about transaction hurdles.”",
    //   name: "Chukwuebuka Obinna",
    //   post: "COO, Greenwave Inc.",
    // },
  ];

  return (
    <div className="relative overflow-hidden z-20">
      {/* <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_80%_30%,_var(--tw-gradient-stops))] from-[#182F5B] from-1% via-[#000] to-[#000] opacity-70" /> */}
      <div className="relative z-20 py-16 ">
        <div className="page-max-width px-6  text-background dark:text-primary">
          <div className=" mb-10" data-aos="fade-up">
            <div className="clash-display-font text-3xl md:text-[32px] tracking-tight font-medium mb-4">
              What are people saying about us
            </div>
            <div className=" md:max-w-lg text-sm md:text-base font-normal">
              Imagine a world where payments aren’t just transactions but
              opportunities, opportunities to connect, to grow, and to thrive.
            </div>
          </div>

          <div className=" w-full">
            {testimoniesList.map((item, index) => (
              <div key={index} data-aos="fade-up">
                <div className=" text-left md:text-[32px] text-base leading-inherit font-medium tracking-wider max-w-7xl mb-4">
                  {item.message}
                </div>
                <div className="md:text-base text-xs flex items-center w-full text-primary-500 ">
                  <div>{item.name}</div>
                  <div>
                    <Icon icon="mdi:dot" className="text-[#CACFD8] text-3xl" />
                  </div>
                  <div className="text-primary-500">{item.post}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
