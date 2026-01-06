// "use client";
// import { Image } from "@heroui/image";
// import { Spacer } from "@heroui/spacer";
// import { Tooltip } from "@heroui/tooltip";
// import { Icon } from "@iconify/react";
// import React from "react";

// import { HalfLogo } from "@/public/assets";

// const RatesCard = () => {
//   return (
//     <div className="border-b-[0.5px] lg:border-l-[0.5px] flex flex-col justify-between items-center w-full px-6 sm:px-10 lg:px-14 py-7">
//       {/* ICON STACK */}
//       <div className="grid grid-cols-3 gap-2 sm:gap-4 items-end w-full max-w-md mx-auto lg:max-w-none">
//         {/* LEFT */}
//         <div className="bg-gradient-to-t rounded-t-[18px] from-background-200/20 via-foreground-100/20 to-[#CACFD8]/20 p-[6px]">
//           <div className="bg-foreground-100 p-1 rounded-[18px]">
//             <div className="rounded-full bg-[#CACFD8] p-2 inline-flex items-center justify-center text-white">
//               <Icon className="text-xl" icon="ri:building-2-fill" />
//             </div>
//           </div>
//           <Spacer y={20} className="lg:!h-[28px]" />
//         </div>

//         {/* CENTER (TOOLTIP) */}
//         <Tooltip
//           defaultOpen
//           isOpen
//           shadow="none"
//           className="text-info-250 bg-[#EBF8FF] border-none"
//           classNames={{
//             base: `
//               will-change-transform
//               mb-3 sm:mb-4 lg:mb-5
//               max-w-[160px] sm:max-w-[180px] lg:max-w-none
//             `,
//             content: "px-3 py-2",
//           }}
//           content={
//             <div className="relative flex flex-col items-center text-center">
//               {/* arrow */}
//               <Icon
//                 className="absolute -bottom-2 sm:-bottom-3 left-1/2 -translate-x-1/2 rotate-180 text-[#EBF8FF]"
//                 icon="mingcute:triangle-fill"
//               />

//               {/* dot */}
//               <div className="rounded-full h-3.5 w-3.5 bg-white absolute -bottom-5 sm:-bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center">
//                 <div className="bg-info-250 rounded-full h-2 w-2" />
//               </div>

//               <div className="bg-[#EBF8FF] text-info-250 rounded-lg text-sm whitespace-nowrap">
//                 Better rates
//               </div>
//             </div>
//           }
//         >
//           <div className="bg-gradient-to-t rounded-t-[18px] from-[#EBF8FF]/10 via-[#C0EAFF]/20 to-info-250/20 p-[6px]">
//             <div className="bg-[#C0EAFF] p-1 rounded-[18px]">
//               <div className="rounded-full bg-info-250 p-2 inline-flex items-center justify-center">
//                 <Image
//                   disableAnimation
//                   disableSkeleton
//                   alt="half logo black"
//                   className="h-5 w-5"
//                   radius="none"
//                   src={HalfLogo.src}
//                 />
//               </div>
//             </div>
//             <Spacer y={36} className="lg:!h-[52px]" />
//           </div>
//         </Tooltip>

//         {/* RIGHT */}
//         <div className="bg-gradient-to-t rounded-t-[18px] from-background-200/20 via-foreground-100/20 to-[#CACFD8]/20 p-[6px]">
//           <div className="bg-foreground-100 p-1 rounded-[18px]">
//             <div className="rounded-full bg-[#CACFD8] p-2 inline-flex items-center justify-center text-white">
//               <Icon className="text-xl" icon="ri:building-2-fill" />
//             </div>
//           </div>
//           <Spacer y={20} className="lg:!h-[28px]" />
//         </div>
//       </div>

//       {/* TEXT */}
//       <div className="relative z-10 flex flex-col justify-center items-center max-w-sm mx-auto mt-6 space-y-2 px-2 sm:px-0">
//         <div className="clash-display-font text-2xl font-medium leading-8 text-primary text-center">
//           Competitive Rates
//         </div>
//         <div className="text-center text-primary-500 text-base font-normal leading-6 tracking-[-0.176px]">
//           We offer competitive pricing that maximizes value. Our transparent
//           rates keep every transaction clear and confident.
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RatesCard;

"use client";
import { Image } from "@heroui/image";
import { Spacer } from "@heroui/spacer";
import { Tooltip } from "@heroui/tooltip";
import { Icon } from "@iconify/react";
import React from "react";

import { HalfLogo } from "@/public/assets";

const RatesCard = () => {
  return (
    <div
      className="border-b-[0.5px] flex flex-col justify-between items-center w-full px-6 sm:px-10 lg:px-14 py-7"
      data-aos="fade-up"
    >
      {/* ICON STACK */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 items-end w-full max-w-md mx-auto lg:max-w-none">
        {/* LEFT */}
        <div
          className="bg-gradient-to-t rounded-t-[18px] from-background-200/20 via-foreground-100/20 to-[#CACFD8]/20 p-[6px]"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="700"
          data-aos-easing="ease-out-back"
        >
          <div className="bg-foreground-100 p-1 rounded-[18px]">
            <div className="rounded-full bg-[#CACFD8] p-2 inline-flex items-center justify-center text-white">
              <Icon className="text-xl" icon="ri:building-2-fill" />
            </div>
          </div>
          <Spacer y={20} className="lg:!h-[28px]" />
        </div>

        {/* CENTER (TOOLTIP) */}
        <div
          data-aos="fade-up"
          data-aos-delay="60"
          data-aos-duration="700"
          data-aos-easing="ease-out-back"
        >
          <div className="w-full flex justify-center">
            <div className="relative px-3 mx-auto py-1 inline-flex rounded-full  flex-col items-center text-center text-info-250 bg-[#EBF8FF] border-none mb-3 sm:mb-4 lg:mb-5">
              <Icon
                className="absolute -bottom-2 sm:-bottom-3 left-1/2 -translate-x-1/2 rotate-180 text-[#EBF8FF]"
                icon="mingcute:triangle-fill"
              />
              <div className="rounded-full h-3.5 w-3.5 bg-white absolute -bottom-5 sm:-bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center">
                <div className="bg-info-250 rounded-full h-2 w-2" />
              </div>
              <div className="bg-[#EBF8FF] text-info-250 rounded-lg text-sm whitespace-nowrap">
                Better rates
              </div>
            </div>
          </div>

          <div
            className="bg-gradient-to-t rounded-t-[18px] from-[#EBF8FF]/10 via-[#C0EAFF]/20 to-info-250/20 p-[6px]"
            data-aos="fade-up"
            data-aos-delay="120"
            data-aos-duration="800"
            data-aos-easing="ease-out-back"
          >
            <div className="bg-[#C0EAFF] p-1 rounded-[18px]">
              <div className="rounded-full bg-info-250 p-2 inline-flex items-center justify-center">
                <Image
                  disableAnimation
                  disableSkeleton
                  alt="half logo black"
                  className="h-5 w-5"
                  radius="none"
                  src={HalfLogo.src}
                />
              </div>
            </div>
            <Spacer y={36} className="lg:!h-[52px]" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-gradient-to-t rounded-t-[18px] from-background-200/20 via-foreground-100/20 to-[#CACFD8]/20 p-[6px]">
          <div className="bg-foreground-100 p-1 rounded-[18px]">
            <div className="rounded-full bg-[#CACFD8] p-2 inline-flex items-center justify-center text-white">
              <Icon className="text-xl" icon="ri:building-2-fill" />
            </div>
          </div>
          <Spacer y={20} className="lg:!h-[28px]" />
        </div>
      </div>

      {/* TEXT */}
      <div
        className="relative z-10 flex flex-col justify-center items-center max-w-sm mx-auto mt-6 space-y-2 px-2 sm:px-0"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="clash-display-font text-2xl font-medium leading-8 text-primary text-center">
          Competitive Rates
        </div>
        <div className="text-center text-primary-500 text-base font-normal leading-6 tracking-[-0.176px]">
          We offer competitive pricing that maximizes value. Our transparent
          rates keep every transaction clear and confident.
        </div>
      </div>
    </div>
  );
};

export default RatesCard;
