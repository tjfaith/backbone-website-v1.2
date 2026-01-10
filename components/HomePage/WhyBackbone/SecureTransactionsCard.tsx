// import { Icon } from "@iconify/react";
// import React from "react";
// import { Image } from "@heroui/image";
// import { Skeleton } from "@heroui/skeleton";

// import { halfLogoBlack, transactionCrab } from "@/public/assets";
// import ShieldNetworkPattern from "./ShieldNetworkPattern";

// const SecureTransactionsCard = () => {
//   return (
//     // <div className="border-t-[0.5px] border-l-[0.5px] ">
//     <div className="border-t-[0.5px] lg:border-l-[0.5px]">
//       <div className="flex items-stretch flex-0 gap-5 py-8 px-6 border-b-1">
//         <div className=" w-1 bg-info-250 rounded-t-full" />
//         <div className=" space-y-4">
//           <div className="text-base font-medium leading-6 text-primary tracking-[-0.176px] max-w-xl pr-2">
//             “Backbone made international transactions seamless for our business.
//             The customer support and user-friendly platform have been
//             game-changers for us.”
//           </div>
//           <div className="flex items-start sm:items-center gap-3 sm:gap-4">
//             <Icon
//               icon="material-symbols:account-circle"
//               className="text-2xl sm:text-[28px]"
//             />

//             <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
//               <span className="text-primary-500 font-medium italic text-base leading-6 tracking-[-0.176px]">
//                 Emeka Ugochukwu
//               </span>

//               {/* separator — desktop only */}
//               <div className="hidden sm:block h-1 w-1 bg-[#CACFD8] rounded-full" />

//               <span className="text-primary-400 font-normal leading-6 tracking-[-0.176px] text-sm sm:text-base">
//                 Founder, Lumina Tech
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <div className=" py-6 pl-20 flex flex-col justify-between "> */}
//       <div className="py-6 pl-6 sm:pl-10 lg:pl-20 flex flex-col justify-between">
//         {/* <div className="relative mb-10 w-full grid grid-cols-[13rem_35rem]"> */}
//         <div className="relative mb-10 w-full grid grid-cols-1 lg:grid-cols-[13rem_35rem]">
//           <div className=" py-4 overflow-hidden relative">
//             <div className="  w-auto h-full  shadow-[0_0_6px_2px_rgba(0,0,0,0.05),_0_0_0_0.5px_var(--neutral-200,#E1E4EA)] flex-1 bg-white rounded-l-xl p-4 clash-display-font ">
//               <div className="space-y-1 ">
//                 <Image
//                   disableAnimation
//                   disableSkeleton
//                   alt="half logo black"
//                   radius="none"
//                   src={halfLogoBlack.src}
//                 />
//                 <div className="text-[12.146px] font-medium tracking-[0.729px] leading-[17.004px]">
//                   INV - 2938918
//                 </div>
//                 <div className="font-semibold text-[24.291px] tracking-[-0.243px] leading-[29.149px] text-primary ">
//                   $ 837,287.19
//                 </div>
//                 <div className="text-[12.146px] font-medium leading-[17.004px] tracking-[0.729px]">
//                   Due in 10 days
//                 </div>
//               </div>
//               <div className="space-y-3 text-primary-450 text-[12.146px] mt-5">
//                 <div className="grid grid-cols-[5rem_1fr] ">
//                   <div className="tracking-[0.729px] leading-[17.004px] font-medium">
//                     To
//                   </div>
//                   <Skeleton className="w-[45px] h-[9.716px] rounded-[4.858px] bg-[#F2F5F8]" />
//                 </div>
//                 <div className="grid grid-cols-[5rem_1fr] ">
//                   <div className="tracking-[0.729px] leading-[17.004px] font-medium">
//                     From
//                   </div>
//                   <Skeleton className="w-[76px] h-[9.716px] rounded-[4.858px] bg-[#F2F5F8]" />
//                 </div>
//                 <div className="grid grid-cols-[5rem_1fr] ">
//                   <div className="tracking-[0.729px] leading-[17.004px] font-medium">
//                     Address
//                   </div>
//                   <Skeleton className="w-[136px] h-[9.716px] rounded-[4.858px] bg-[#F2F5F8]" />
//                 </div>
//               </div>
//             </div>

//             <div className="w-full bg-gradient-to-r  from-background-75/0 via-info-250/5 to-info-250/20 from-[24.2%] absolute inset-x-0 top-0 -bottom-5" />
//           </div>
//           <div className=" w-full bg-gradient-to-b from-transparent from-[50%] via-[95%] via-background-75 to-background-75 absolute inset-x-0 top-0 -left-5 -right-5 -bottom-5 " />

//           <div className=" border-l-2 border-info-250  flex items-center justify-start">
//             {/* <Image src={transactionCrab.src} /> */}
//             <ShieldNetworkPattern />
//           </div>
//         </div>

//         {/* bottom writeup */}
//         <div className="relative z-10 flex flex-col justify-center items-center space-y-2 max-w-sm mx-auto">
//           <div className="clash-display-font text-2xl font-medium leading-8 text-primary text-center">
//             Secured Transactions
//           </div>
//           <div className="text-center text-primary-500 text-base font-normal leading-6 tracking-[-0.176px]">
//             We provide end-to-end encryption to ensure that every transaction
//             you make is fully protected, from start to finish.
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SecureTransactionsCard;

import { Icon } from "@iconify/react";
import React from "react";
import { Image } from "@heroui/image";
import { Skeleton } from "@heroui/skeleton";

import ShieldNetworkPattern from "./ShieldNetworkPattern";

import { halfLogoBlack } from "@/public/assets";

const SecureTransactionsCard = () => {
  return (
    <div>
      {/* testimonial */}
      <div
        className="flex items-stretch flex-0 gap-5 sm:h-[23vh] py-8 px-6 border-b-[0.5px]"
        data-aos="fade-up"
      >
        <div
          className=" w-1 bg-info-250 rounded-t-full"
          data-aos="zoom-in"
          data-aos-delay="100"
        />
        <div className=" space-y-4">
          <div
            className="text-base font-medium leading-6 text-primary tracking-[-0.176px] max-w-xl pr-2"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            “Backbone made international transactions seamless for our business.
            The customer support and user-friendly platform have been
            game-changers for us.”
          </div>

          <div
            className="flex items-start sm:items-center gap-3 sm:gap-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Icon
              className="text-2xl sm:text-[28px]"
              icon="material-symbols:account-circle"
            />

            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="text-primary-500 font-medium italic text-base leading-6 tracking-[-0.176px]">
                Emeka Ugochukwu
              </span>

              <div className="hidden sm:block h-1 w-1 bg-[#CACFD8] rounded-full" />

              <span className="text-primary-400 font-normal leading-6 tracking-[-0.176px] text-sm sm:text-base">
                Founder, Lumina Tech
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* card section */}
      <div className="py-6 pl-6 sm:pl-10 lg:pl-20 flex flex-col relative justify-between  ">
        <div className="absolute z-10 left-1/2 -translate-x-1/2  border  px-3  py-1 inline-flex rounded-full  flex-col items-center text-center text-info-250 bg-[#EBF8FF] border-none mb-3 sm:mb-4 lg:mb-5">
          <Icon
            className="absolute -bottom-2 sm:-bottom-3 left-1/2 -translate-x-1/2 rotate-180 text-[#EBF8FF]"
            icon="mingcute:triangle-fill"
          />
          <div className="bg-[#EBF8FF] text-info-250 rounded-lg text-sm whitespace-nowrap">
            Maximum Security
          </div>
        </div>

        <div className="relative mb-10 w-full grid grid-cols-1 lg:grid-cols-[13rem_35rem] mt-10">
          <div
            className=" sm:py-4 py-0 sm:px-0 px-4 overflow-hidden relative"
            data-aos="fade-right"
          >
            <div className="  w-auto h-full  shadow-[0_0_6px_2px_rgba(0,0,0,0.05),_0_0_0_0.5px_var(--neutral-200,#E1E4EA)] flex-1 bg-white sm:rounded-l-xl sm:rounded-t-none rounded-t-xl p-4 clash-display-font ">
              <div className="space-y-1 ">
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
                <div className="font-semibold text-[24.291px] tracking-[-0.243px] leading-[29.149px] text-primary ">
                  $ 837,287.19
                </div>
                <div className="text-[12.146px] font-medium leading-[17.004px] tracking-[0.729px]">
                  Due in 10 days
                </div>
              </div>

              <div
                className="space-y-3 text-primary-450 text-[12.146px] mt-5"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <div className="grid grid-cols-[5rem_1fr] ">
                  <div className="tracking-[0.729px] leading-[17.004px] font-medium">
                    To
                  </div>
                  <Skeleton className="w-[45px] h-[9.716px] rounded-[4.858px] bg-[#F2F5F8]" />
                </div>
                <div className="grid grid-cols-[5rem_1fr] ">
                  <div className="tracking-[0.729px] leading-[17.004px] font-medium">
                    From
                  </div>
                  <Skeleton className="w-[76px] h-[9.716px] rounded-[4.858px] bg-[#F2F5F8]" />
                </div>
                <div className="grid grid-cols-[5rem_1fr] ">
                  <div className="tracking-[0.729px] leading-[17.004px] font-medium">
                    Address
                  </div>
                  <Skeleton className="w-[136px] h-[9.716px] rounded-[4.858px] bg-[#F2F5F8]" />
                </div>
              </div>
            </div>

            <div className="w-full sm:bg-gradient-to-r bg-gradient-to-b  from-background-75/0 via-info-250/5 to-info-250/20 from-[24.2%] absolute inset-x-0 top-0 -bottom-5" />
          </div>
          {/* bg-gradient-to-b from-transparent from-[50%] via-[95%] via-background-75 to-background-75  */}
          {/* gradients */}
          <div className=" w-full z-10 absolute top-0 bg-gradient-to-b from-transparent from-[50%] via-[95%] via-background-75 to-background-75 inset-x-0 -left-5 -right-5 -bottom-5  " />

          {/* shield / network */}
          <div
            className=" sm:border-l-2 sm:border-t-0 border-t-2 border-info-250  flex items-center justify-start"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <ShieldNetworkPattern />
          </div>
        </div>

        {/* bottom writeup */}
        <div
          className="relative z-10 flex flex-col justify-center items-center space-y-2 max-w-sm mx-auto"
          data-aos="fade-up"
        >
          <div className="clash-display-font text-2xl font-medium leading-8 text-primary text-center">
            Secured Transactions
          </div>
          <div className="text-center text-primary-500 text-base font-normal leading-6 tracking-[-0.176px]">
            We provide end-to-end encryption to ensure that every transaction
            you make is fully protected, from start to finish.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecureTransactionsCard;
