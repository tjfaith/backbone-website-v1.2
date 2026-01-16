// import { Avatar, AvatarGroup } from "@heroui/avatar";
// import { Icon } from "@iconify/react";
// import React from "react";
// import { useDispatch } from "react-redux";

// import { ContactSalesBtn, GetStartedBtn } from "@/components";
// import { updateShowAnnouncement } from "@/app/store/Features/settingsSlice";

// const HeroContent = () => {
//   const dispatch = useDispatch();

//   return (
//     <div
//       className=" mx-auto lg:mx-0 text-center lg:text-left"
//       data-aos="fade-up"
//     >

//       <button
//         className="
//         cursor-pointer
//     group
//     animate__delay-2s animate__animated animate__fadeInUp animate__fast
//     md:bg-background-100
//     md:shadow-[inset_0px_-1px_4px_0px_rgba(0,0,0,0.06)]
//     dark:text-white
//     md:text-primary
//     rounded-full
//     px-4 py-3
//     inline-flex
//     md:flex-row
//     flex-col
//     items-center
//     gap-3
//     mb-4
//     transition
//     hover:shadow-md
//   "
//         onClick={() => {
//           localStorage.removeItem("announcement_seen_v1");
//           dispatch(updateShowAnnouncement(true));
//         }}
//       >
//         <AvatarGroup size="sm" total={170}>
//           <Avatar
//             classNames={{ base: "bg-transparent" }}
//             icon={
//               <Icon className="text-3xl" icon="emojione:flag-for-nigeria" />
//             }
//           />
//           <Avatar
//             classNames={{ base: "bg-transparent" }}
//             icon={
//               <Icon
//                 className="text-3xl"
//                 icon="emojione:flag-for-united-states"
//               />
//             }
//           />
//           <Avatar
//             classNames={{ base: "bg-transparent" }}
//             icon={<Icon className="text-3xl" icon="circle-flags:gb" />}
//           />
//           <Avatar
//             classNames={{ base: "bg-transparent" }}
//             icon={<Icon className="text-3xl" icon="circle-flags:cn" />}
//           />
//         </AvatarGroup>

//         <div className="text-center md:text-left text-sm md:text-base leading-tight">
//           <span className="opacity-80">We processed </span>
//           <b>
//             $
//             {Number(
//               process.env.NEXT_PUBLIC_TOTAL_PROCESSED as string
//             ).toLocaleString()}
//           </b>
//           <span className="opacity-80">
//             {" "}
//             in transactions from 8th March, 2024, to 30th November, 2025. Join
//             us on the road to $1B!
//           </span>

//           {/* Read more */}
//           <div
//             className="
//         text-xs
//         font-medium
//         text-primary
//         inline-flex
//         items-center
//         gap-1 ml-1
//         opacity-80
//         group-hover:opacity-100
//         transition
//       "
//           >
//             {" "}
//             Read more
//             <Icon
//               className="text-sm transition-transform group-hover:translate-x-0.5"
//               icon="solar:arrow-right-linear"
//             />
//           </div>
//         </div>
//       </button>

//       {/* HEADLINE */}
//       <div
//         className="clash-display-font text-[40px] font-medium tracking-[0.8px] leading-[52px] text-black mb-3"
//         data-aos="fade-up"
//         data-aos-delay="200"
//       >
//         Powering payments that unlock global opportunities
//       </div>

//       <div
//         className="text-primary-500 text-base tracking-[-0.27px] leading-6 mb-8"
//         data-aos="fade-up"
//         data-aos-delay="300"
//       >
//         We connect individuals, businesses, and nonprofits to a seamless global
//         payment solution, spanning over 150 countries worldwide.
//       </div>

//       <div
//         className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
//         data-aos="fade-up"
//         data-aos-delay="400"
//       >
//         <GetStartedBtn />
//         <ContactSalesBtn />
//       </div>
//     </div>
//   );
// };

// export default HeroContent;

import { Avatar, AvatarGroup } from "@heroui/avatar";
import { Icon } from "@iconify/react";
import React from "react";
import { useDispatch } from "react-redux";

import { ContactSalesBtn, GetStartedBtn } from "@/components";
import { updateShowAnnouncement } from "@/app/store/Features/settingsSlice";

const HeroContent = () => {
  const dispatch = useDispatch();

  return (
    <div
      className="mx-auto lg:mx-0 text-center lg:text-left"
      data-aos="fade-up"
    >
      <button
        className="
          cursor-pointer
          group
          animate__delay-2s animate__animated animate__fadeInUp animate__fast
          md:bg-background-100
          md:shadow-[inset_0px_-1px_4px_0px_rgba(0,0,0,0.06)]
          dark:bg-background-200
          dark:text-foreground-100
          dark:shadow-[inset_0px_-1px_4px_0px_rgba(0,0,0,0.5)]
          md:text-primary
          rounded-full
          px-4 py-3
          inline-flex
          md:flex-row
          flex-col
          items-center
          gap-3
          mb-4
          transition
          hover:shadow-md
          dark:hover:bg-background-300
        "
        onClick={() => {
          localStorage.removeItem("announcement_seen_v1");
          dispatch(updateShowAnnouncement(true));
        }}
      >
        <AvatarGroup size="sm" total={170}>
          <Avatar
            classNames={{ base: "bg-transparent" }}
            icon={
              <Icon className="text-3xl" icon="emojione:flag-for-nigeria" />
            }
          />
          <Avatar
            classNames={{ base: "bg-transparent" }}
            icon={
              <Icon
                className="text-3xl"
                icon="emojione:flag-for-united-states"
              />
            }
          />
          <Avatar
            classNames={{ base: "bg-transparent" }}
            icon={<Icon className="text-3xl" icon="circle-flags:gb" />}
          />
          <Avatar
            classNames={{ base: "bg-transparent" }}
            icon={<Icon className="text-3xl" icon="circle-flags:cn" />}
          />
        </AvatarGroup>

        <div className="text-center md:text-left text-sm md:text-base leading-tight dark:text-foreground-200">
          <span className="opacity-80">We processed </span>
          <b className="dark:text-foreground-50">
            $
            {Number(
              process.env.NEXT_PUBLIC_TOTAL_PROCESSED as string
            ).toLocaleString()}
          </b>
          <span className="opacity-80">
            {" "}
            in transactions from 8th March, 2024, to 30th November, 2025. Join
            us on the road to $1B!
          </span>

          <div
            className="
              text-xs
              font-medium
              text-primary
              dark:text-info-600
              inline-flex
              items-center
              gap-1 ml-1
              opacity-80
              group-hover:opacity-100
              transition
            "
          >
            Read more
            <Icon
              className="text-sm transition-transform group-hover:translate-x-0.5"
              icon="solar:arrow-right-linear"
            />
          </div>
        </div>
      </button>

      {/* HEADLINE */}
      <div
        className="
          clash-display-font
          text-[40px]
          font-medium
          tracking-[0.8px]
          leading-[52px]
          text-black
          dark:text-foreground-50
          mb-3
        "
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Powering payments that unlock global opportunities
      </div>

      <div
        className="
          text-primary-500
          dark:text-foreground-300
          text-base
          tracking-[-0.27px]
          leading-6
          mb-8
        "
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
        <GetStartedBtn />
        <ContactSalesBtn />
      </div>
    </div>
  );
};

export default HeroContent;
