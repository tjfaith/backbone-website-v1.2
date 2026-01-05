// import { Button } from "@heroui/button";
// import { Divider } from "@heroui/divider";
// import { Link } from "@heroui/link";
// import React from "react";

// const HeroContent = () => {
//   return (
//     <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
//       <div
//         className="
//     inline-flex
//     flex-col
//     items-center
//     gap-2
//     px-4 py-3
//     rounded-xl
//     shadow-[0_1px_0_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(225,228,234,0.5)]
//     bg-background-200
//     mb-6

//     lg:flex-row
//     lg:gap-3
//     lg:justify-start
//   "
//       >
//         {/* Left divider — desktop only */}
//         <Divider
//           orientation="vertical"
//           className="hidden lg:block bg-info-250 h-5 w-0.5"
//         />

//         {/* Text */}
//         <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-1 text-small text-center lg:text-left">
//           <span>Processed over</span>
//           <b>
//             $
//             {Number(
//               process.env.NEXT_PUBLIC_TOTAL_PROCESSED as string
//             ).toLocaleString()}
//           </b>
//           <span>in transactions in 2025</span>
//         </div>

//         {/* Right divider — desktop only */}
//         <Divider
//           orientation="vertical"
//           className="hidden lg:block bg-foreground-100 h-5 w-0.5"
//         />

//         {/* CTA */}
//         <span className="text-primary-400 text-base tracking-[-0.176px] leading-6">
//           Read More
//         </span>
//       </div>

//       {/* HEADLINE — unchanged desktop */}
//       <div className="clash-display-font text-[40px] font-medium tracking-[0.8px] leading-[52px] text-black mb-3">
//         Powering payments that unlock global opportunities
//       </div>

//       <div className="text-primary-500 text-lg tracking-[-0.27px] leading-6 mb-8">
//         We connect individuals, businesses, and nonprofits to a seamless global
//         payment solution, spanning over 150 countries worldwide.
//       </div>

//       <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
//         <Button
//           as={Link}
//           className="text-background !px-6"
//           color="primary"
//           href={`${process.env.NEXT_PUBLIC_APP_URL}/sign-up`}
//           size="sm"
//         >
//           Get Started Now
//         </Button>
//         <Button
//           as={Link}
//           className="text-primary !px-6"
//           href="/contact-us"
//           size="sm"
//           variant="flat"
//         >
//           Contact sales
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default HeroContent;

import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import React from "react";

const HeroContent = () => {
  return (
    <div
      className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
      data-aos="fade-up"
    >
      <div
        className="
          inline-flex
          flex-col
          items-center
          gap-2
          px-4 py-3
          rounded-xl
          shadow-[0_1px_0_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(225,228,234,0.5)]
          bg-background-200
          mb-6

          lg:flex-row
          lg:gap-3
          lg:justify-start
        "
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        {/* Left divider — desktop only */}
        <Divider
          orientation="vertical"
          className="hidden lg:block bg-info-250 h-5 w-0.5"
        />

        {/* Text */}
        <div
          className="flex flex-wrap justify-center lg:justify-start items-center gap-x-1 text-small text-center lg:text-left"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span>Processed over</span>
          <b>
            $
            {Number(
              process.env.NEXT_PUBLIC_TOTAL_PROCESSED as string
            ).toLocaleString()}
          </b>
          <span>in transactions in 2025</span>
        </div>

        {/* Right divider — desktop only */}
        <Divider
          orientation="vertical"
          className="hidden lg:block bg-foreground-100 h-5 w-0.5"
        />

        {/* CTA */}
        <span
          className="text-primary-400 text-base tracking-[-0.176px] leading-6"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          Read More
        </span>
      </div>

      {/* HEADLINE */}
      <div
        className="clash-display-font text-[40px] font-medium tracking-[0.8px] leading-[52px] text-black mb-3"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Powering payments that unlock global opportunities
      </div>

      <div
        className="text-primary-500 text-lg tracking-[-0.27px] leading-6 mb-8"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        We connect individuals, businesses, and nonprofits to a seamless global
        payment solution, spanning over 150 countries worldwide.
      </div>

      <div
        className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <Button
          as={Link}
          className="text-background !px-6"
          color="primary"
          href={`${process.env.NEXT_PUBLIC_APP_URL}/sign-up`}
          size="sm"
        >
          Get Started Now
        </Button>
        <Button
          as={Link}
          className="text-primary !px-6"
          href="/contact-us"
          size="sm"
          variant="flat"
        >
          Contact sales
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
