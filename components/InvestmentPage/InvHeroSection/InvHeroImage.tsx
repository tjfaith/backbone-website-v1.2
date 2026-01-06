// // style={{ backgroundImage: `url(${Hero1.src})` }}
import { Image } from "@heroui/image";
import React from "react";

import { Hero1, Pattern } from "@/public/assets";
import {
  HeroImageSlider,
  SuccessToast,
  SuccessToast2,
  SuccessToast3,
} from "@/components";

const HeroImage = () => {
  return (
    <div className="relative mt-12 lg:mt-0">
      {/* Floating toasts — desktop only */}
      {/* Toast 1 */}
      <SuccessToast
        data-aos="fade-left"
        data-aos-delay="100"
        data-aos-duration="700"
        className="
          absolute z-20
          top-4 right-4 scale-90
          sm:top-6 sm:right-6
          lg:top-7 lg:-right-20 lg:scale-100
        "
      />

      {/* Toast 2 */}
      <SuccessToast2
        data-aos="fade-right"
        data-aos-delay="250"
        data-aos-duration="700"
        className="
          absolute z-20
          bottom-4 left-4 scale-90 rotate-0
          sm:bottom-6 sm:left-6
          lg:bottom-3 lg:-left-40 lg:rotate-[-2.826deg] lg:scale-100
        "
      />

      {/* Toast 3 */}
      <SuccessToast3
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="700"
        className="
          absolute z-20
          bottom-4 right-4 scale-90
          sm:bottom-6 sm:right-6
          lg:bottom-3 lg:-right-16 lg:scale-100
        "
      />

      <div
        className="
          w-full
          h-[40vh] sm:h-[50vh] lg:h-[64vh]
          bg-cover bg-center bg-no-repeat
          transform skew-x-[-12deg]
          overflow-hidden relative
          rounded-xl
        "
      >
        <div className="relative w-full h-full transform skew-x-[12deg]  scale-[1.2]">
          <HeroImageSlider />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
