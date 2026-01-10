"use client";

import React, { ReactNode } from "react";

import { OfferingHeroImageSlider } from "@/components";

interface Props {
  imageSection: {
    images: string[];
    toastCards?: ReactNode;
  };
}

const OfferingHeroImage = ({ imageSection }: Props) => {
  return (
    <div className="relative mt-12 lg:mt-0">
      {imageSection.toastCards}
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
          <OfferingHeroImageSlider images={imageSection.images} />
        </div>
      </div>
    </div>
  );
};

export default OfferingHeroImage;
