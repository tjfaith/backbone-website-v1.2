// import React from "react";
// import { Image } from "@heroui/image";
// import { Skeleton } from "@heroui/skeleton";
// import { Spacer } from "@heroui/spacer";
// import { Button } from "@heroui/button";
// import { Icon } from "@iconify/react";

// import { colorLogo2, HalfLogo, halfLogoBlack } from "@/public/assets";
// import {
//   CTitle,
//   GetStartedBtn,
//   ContactSalesBtn,
//   RatesCard,
//   ProcessTransactionCard,
//   GlobalReachCard,
//   SecureTransactionsCard,
// } from "@/components";

// const WhyBackbone2 = () => {
//   return (
//     <div className="bg-background-75 py-12  ">
//       <div className="page-max-width">
//         <div className="flex flex-col items-center mb-20">
//           <CTitle
//             className="border border-foreground-100 bg-white mb-3"
//             iconType="flashlight"
//             title="Why Backbone?"
//           />
//           <div className="clash-display-font  text-center tracking-[-0.16px] leading-10  text-3xl text-primary font-medium max-w-lg mb-3">
//             We are setting a new standard for the global payments experience
//           </div>
//           <div className=" mb-8 text-primary-500 text-center text-lg font-normal leading-6 tracking-[-0.27px] max-w-xl ">
//             At Backbone, payments are more than transactions, they’re a gateway
//             to growth, opportunity, and limitless possibilities.
//           </div>
//           <div className="flex items-center gap-2">
//             <GetStartedBtn className="text-base" />
//             <ContactSalesBtn />
//           </div>
//         </div>
//         <div className="grid grid-cols-2 ">
//           <ProcessTransactionCard />
//           <RatesCard />
//           <GlobalReachCard />
//           <SecureTransactionsCard />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyBackbone2;

import React from "react";
import { Image } from "@heroui/image";
import { Skeleton } from "@heroui/skeleton";
import { Spacer } from "@heroui/spacer";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";

import { colorLogo2, HalfLogo, halfLogoBlack } from "@/public/assets";
import {
  CTitle,
  GetStartedBtn,
  ContactSalesBtn,
  RatesCard,
  ProcessTransactionCard,
  GlobalReachCard,
  SecureTransactionsCard,
} from "@/components";

const WhyBackbone2 = () => {
  return (
    <div className="overflow-hidden bg-background-75 py-12  ">
      <div className="page-max-width">
        <div className="flex flex-col items-center mb-20" data-aos="fade-up">
          <CTitle
            className="border border-foreground-100 bg-white mb-3"
            iconType="flashlight"
            title="Why Backbone?"
            data-aos="fade-up"
          />

          <div
            className="clash-display-font  text-center tracking-[-0.16px] leading-10  text-3xl text-primary font-medium max-w-lg mb-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We are setting a new standard for the global payments experience
          </div>

          <div
            className=" mb-8 text-primary-500 text-center text-lg font-normal leading-6 tracking-[-0.27px] max-w-xl "
            data-aos="fade-up"
            data-aos-delay="150"
          >
            At Backbone, payments are more than transactions, they’re a gateway
            to growth, opportunity, and limitless possibilities.
          </div>

          <div
            className="flex flex-col sm:flex-row items-center gap-3 lg:gap-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <GetStartedBtn className="text-base" />
            <ContactSalesBtn />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <ProcessTransactionCard />
          <RatesCard />
          <GlobalReachCard />
          <SecureTransactionsCard />
        </div>
      </div>
    </div>
  );
};

export default WhyBackbone2;
