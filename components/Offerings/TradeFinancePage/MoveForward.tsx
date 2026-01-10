import React from "react";
import { Image } from "@heroui/image";

import { OfferingImg11 } from "@/public/assets";
import { GetStartedBtn, ContactSalesBtn } from "@/components";

const MoveForward = () => {
  return (
    <div className=" pt-12 pb-14">
      <div className="page-max-width">
        <div className="relative ">
          <Image
            removeWrapper
            className="min-h-[460px] w-full object-cover object-[50%_50%] "
            src={OfferingImg11.src}
          />

          <div className="absolute inset-0 z-20 flex flex-col items-center text-white justify-center">
            <div className="clash-display-font lg:text-5xl sm:text-4xl text-2xl  font-medium lg:leading-[56px]  lg:tracking-[-0.48px] mb-3 lg:max-w-lg max-w-md text-center">
              Ready to move your business forward?
            </div>
            <div className=" mb-8 lg:text-lg text-sm font-medium lg:leading-6 lg:tracking-[-0.27px] text-center max-w-xl px-5">
              Access the capital, confidence, and tools you need to execute
              bigger deals and scale smarter with Backbone Trade Finance.
            </div>
            <div
              className="flex flex-col sm:flex-row items-center gap-3 lg:gap-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <GetStartedBtn
                className="text-base text-primary bg-white"
                label="Start investing"
              />
              <ContactSalesBtn
                className="text-white bg-transparent"
                label="Speak to our team"
              />
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 bg-black/10 z-10 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default MoveForward;
