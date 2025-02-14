import { Spacer } from "@heroui/spacer";
import React from "react";

const Testimonies = () => {
  const testimoniesList = [
    {
      message:
        "“Backbone made international transactions seamless for our business. The customer support and user-friendly platform have been game-changers for us.”",
      name: "Emeka Ugochukwu",
      post: "Founder, Lumina Tech",
    },
    {
      message:
        "“Thanks to Backbone, our donation campaigns now reach a global audience with fast and secure payment solutions. It’s truly made a difference.”",
      name: "Ahmed Khan",
      post: "Director, Global Impact Initiative",
    },
    {
      message:
        "“Backbone has transformed how we handle crossborder payments. We now focus on growth without worrying about transaction hurdles.”",
      name: "Chukwuebuka Obinna",
      post: "COO, Greenwave Inc.",
    },
  ];

  return (
    <div className=" bg-background dark:bg-[#0E121B]">
      <div className="page-max-width px-6  py-16 text-primary">
        <div className=" mb-10" data-aos="fade-up">
          <div className="clash-display-font text-3xl md:text-5xl tracking-tight mb-4">
            What are people saying about us
          </div>
          <div className=" md:max-w-3xl text-sm md:text-lg tracking-wider">
            Imagine a world where payments aren’t just transactions but
            opportunities—opportunities to connect, to grow, and to thrive.
          </div>
        </div>

        <div className=" grid md:grid-cols-3 gap-10 md:gap-5">
          {testimoniesList.map((item, index) => (
            <div
              key={index}
              className={`${index === 0 && "md:border-l-1"}  flex px-3 border-foreground gap-5 md:border-r-1`}
              data-aos="fade-up"
            >
              {/* <Divider
                className=" bg-background/50 md:block hidden"
                orientation="vertical"
              /> */}

              <div>
                <div className=" text-left md:text-base text-sm">
                  {item.message}
                </div>
                <Spacer className="md:block hidden" y={20} />
                <Spacer className="md:hidden block" y={5} />
                <div className="md:text-base text-xs">
                  <div>{item.name}</div>
                  <div>{item.post}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
