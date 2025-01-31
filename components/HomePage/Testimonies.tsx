import { Divider } from "@heroui/divider";
import { Spacer } from "@heroui/spacer";
import React from "react";

const Testimonies = () => {
  const testimoniesList = [
    {
      message:
        "“At Backbone, every feature is designed with you in mind. Whether you’re transferring funds across borders, scaling your business globally, or driving donations for a cause, we’re here to deliver more than just a payment service.”",
      name: "Charles Emmanuel",
      post: "CEO, Omeri co",
    },
    {
      message:
        "“At Backbone, every feature is designed with you in mind. Whether you’re transferring funds across borders, scaling your business globally, or driving donations for a cause, we’re here to deliver more than just a payment service.”",
      name: "Charles Emmanuel",
      post: "CEO, Omeri co",
    },
    {
      message:
        "“At Backbone, every feature is designed with you in mind. Whether you’re transferring funds across borders, scaling your business globally, or driving donations for a cause, we’re here to deliver more than just a payment service.”",
      name: "Charles Emmanuel",
      post: "CEO, Omeri co",
    },
  ];

  return (
    <div className="bg-primary">
      <div className="max-w-screen-2xl mx-auto lg:px-28 px-6  py-16 text-background">
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
            <div key={index} className={`${index === 0 && 'md:border-l-1'}  flex px-3 border-foreground gap-5 md:border-r-1`} data-aos="fade-up">

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
