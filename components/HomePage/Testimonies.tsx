import { Icon } from "@iconify/react";
import React from "react";
import { Image } from "@heroui/image";

import { User } from "@/public/assets";

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
              <div key={index} className="space-y-4" data-aos="fade-up">
                <div className="h-12 w-12 rounded-full bg-[#2B303B] relative overflow-hidden text-white flex items-center justify-center">
                  <Image alt="avatar" src={User.src} />
                </div>
                <div className="clash-display-font text-left md:text-[32px] text-base leading-inherit font-medium tracking-wider max-w-7xl mb-4">
                  {item.message}
                </div>
                <div className="md:text-base text-xs flex items-center w-full text-primary-500 ">
                  <div>{item.name}</div>
                  <div>
                    <Icon className="text-[#CACFD8] text-3xl" icon="mdi:dot" />
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
