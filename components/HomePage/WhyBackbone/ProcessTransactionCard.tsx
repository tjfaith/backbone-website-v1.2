import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Skeleton } from "@heroui/skeleton";
import { Spacer } from "@heroui/spacer";
import { Icon } from "@iconify/react";
import React from "react";

import { halfLogoBlack, colorLogo2 } from "@/public/assets";

const ProcessTransactionCard = () => {
  return (
    <div
      className="px-6 sm:px-10 lg:px-14 py-7 border-b-[0.5px] lg:border-r-[0.5px] flex flex-col justify-between items-center w-full"
      data-aos="fade-up"
    >
      <div className="relative mb-10 w-full" data-aos="zoom-in">
        <div
          className=" mx-auto max-w-xs shadow-[0_0_6px_2px_rgba(0,0,0,0.05),_0_0_0_0.5px_var(--neutral-200,#E1E4EA)] bg-white rounded-xl p-4 clash-display-font"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex justify-between text-primary  mb-5">
            <div
              className="space-y-1"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <Image
                disableAnimation
                disableSkeleton
                alt="half logo black"
                radius="none"
                src={halfLogoBlack.src}
              />
              <div className="text-[12.146px] font-medium tracking-[0.729px] leading-[17.004px]">
                INV - 2938918
              </div>
              <div className="font-semibold text-[24.291px] tracking-[-0.243px] leading-[29.149px] ">
                $ 837,287.19
              </div>
              <div className="text-[12.146px] font-medium leading-[17.004px] tracking-[0.729px]">
                Due in 10 days
              </div>
            </div>

            <Image
              disableAnimation
              disableSkeleton
              alt="color logo2"
              className=" mb-1"
              radius="none"
              src={colorLogo2.src}
              data-aos="fade-left"
              data-aos-delay="250"
            />
          </div>

          <div
            className="space-y-1 text-primary-450 text-[12.146px]"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="grid grid-cols-[5rem_1fr] ">
              <div className="tracking-[0.729px] leading-[17.004px] font-medium">
                To
              </div>
              <Skeleton className="w-[45.546px] h-[9.716px] rounded-[4.858px] bg-[#F2F5F8]" />
            </div>
            <div className="grid grid-cols-[5rem_1fr] ">
              <div className="tracking-[0.729px] leading-[17.004px] font-medium">
                From
              </div>
              <Skeleton className="w-[76.517px] h-[9.716px] rounded-[4.858px] bg-[#F2F5F8]" />
            </div>
            <div className="grid grid-cols-[5rem_1fr] ">
              <div className="tracking-[0.729px] leading-[17.004px] font-medium">
                Address
              </div>
              <Skeleton className="w-[136.031px] h-[9.716px] rounded-[4.858px] bg-[#F2F5F8]" />
            </div>
          </div>

          <Spacer y={16} />

          <div
            className="flex items-end justify-center w-full bg-gradient-to-b from-background-75/0 via-background-75/80 to-background-75 from-[24.2%] absolute inset-x-0 top-0 -bottom-5 pb-8"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Button
              className="text-[#50BFF6] bg-[#E0F5FF] rounded-[40px] px-3 py-2 text-base font-medium tracking-[-0.176px] leading-6"
              startContent={<Icon icon="ri:send-plane-fill" />}
            >
              Process transaction
            </Button>
          </div>
        </div>
      </div>

      <div
        className="relative z-10 flex flex-col justify-center items-center max-w-sm mx-auto"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div className="clash-display-font text-2xl font-medium leading-8 text-primary">
          Built for Speed
        </div>
        <div className="text-center text-primary-500 text-base font-normal leading-6 tracking-[-0.176px]">
          We offer fast and efficient transactions tailored to your unique
          timeline, ensuring that your business operates smoothly and on
          schedule.
        </div>
      </div>
    </div>
  );
};

export default ProcessTransactionCard;
