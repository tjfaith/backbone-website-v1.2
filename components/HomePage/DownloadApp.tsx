import React from "react";
import { Image } from "@heroui/image";

import { AppDownloadBtn } from "@/components";
import { backboneColoredLogo } from "@/public/assets";

const DownloadApp = () => {
  return (
    <div className="overflow-x-hidden py-12 sm:py-14" data-aos="fade-up">
      <div
        className="
          page-max-width
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-10
          lg:gap-0
          items-center
        "
      >
        {/* TEXT CONTENT */}
        <div
          className="
            flex
            flex-col
            justify-center
            text-center
            lg:text-left
            items-center
            lg:items-start
          "
          data-aos="fade-right"
        >
          <div
            className="
              mb-4
              clash-display-font
              font-medium
              text-[28px]
              sm:text-[32px]
              leading-9
              sm:leading-10
              tracking-[-0.16px]
              text-primary
              max-w-md
            "
            data-aos="fade-up"
          >
            Download our app today
          </div>

          <div
            className="
              mb-6
              text-base
              sm:text-lg
              leading-6
              tracking-[-0.27px]
              text-primary-500
              max-w-md
            "
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Download Backbone app to start managing your money with ease.
          </div>

          <div
            className="
              flex
              flex-col
              sm:flex-row
              items-center
              gap-3
            "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <AppDownloadBtn btnType={"ios"} />
            <AppDownloadBtn btnType={"android"} />
          </div>
        </div>

        {/* IMAGE */}
        <div
          className="flex justify-center lg:justify-end"
          data-aos="fade-left"
          data-aos-delay="150"
        >
          <Image
            disableAnimation
            disableSkeleton
            alt="backboneColoredLogo"
            src={backboneColoredLogo.src}
            className="
              w-[220px]
              sm:w-[260px]
              lg:w-auto
            "
            data-aos="zoom-in"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
