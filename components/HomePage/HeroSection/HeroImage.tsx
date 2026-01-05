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

// "use client";

// import { Image } from "@heroui/image";
// import React from "react";
// import { motion } from "framer-motion";

// import {
//   Hero1,
//   Hero2,
//   Hero3,
//   Hero4,
//   Hero5,
//   Hero6,
//   Pattern,
// } from "@/public/assets";
// import {
//   HeroImageSlider,
//   SuccessToast,
//   SuccessToast2,
//   SuccessToast3,
// } from "@/components";
// import DrawPattern from "./DrawPattern";

// const floatAnim = {
//   y: [0, -6, 0],
//   transition: {
//     duration: 4,
//     repeat: Infinity,
//     ease: "easeInOut",
//   },
// };

// const hoverAnim = {
//   scale: 1.05,
//   y: -4,
//   boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
//   transition: { duration: 0.25, ease: "easeOut" },
// };

// const HeroImage = () => {
//   return (
//     <div className="relative mt-12 lg:mt-0">
//       {/* Toast 1 */}

//       <motion.div
//         animate={floatAnim}
//         whileHover={hoverAnim}
// data-aos="fade-left"
// data-aos-delay="100"
// data-aos-duration="700"
//         className="
//         rounded-[12.874px]
//           absolute z-20
//           top-4 right-4 scale-90
//           sm:top-6 sm:right-6
//           lg:top-7 lg:-right-20 lg:scale-100
//           will-change-transform
//         "
//       >
//         <SuccessToast />
//       </motion.div>

//       {/* Toast 2 */}
//       <motion.div
//         animate={floatAnim}
//         whileHover={hoverAnim}
// data-aos="fade-right"
// data-aos-delay="250"
// data-aos-duration="700"
//         className="
//           absolute z-20
//           rounded-[40px]
//           bottom-4 left-4 scale-90 rotate-0
//           sm:bottom-6 sm:left-6
//           lg:bottom-3 lg:-left-40 lg:rotate-[-2.826deg] lg:scale-100
//           will-change-transform
//         "
//       >
//         <SuccessToast2 />
//       </motion.div>

//       {/* Toast 3 */}
//       <motion.div
//         animate={floatAnim}
//         whileHover={hoverAnim}
// data-aos="fade-up"
// data-aos-delay="400"
// data-aos-duration="700"
//         className="
//           absolute z-20
//           rounded-xl
//           bottom-4 right-4 scale-90
//           sm:bottom-6 sm:right-6
//           lg:bottom-3 lg:-right-16 lg:scale-100
//           will-change-transform
//         "
//       >
//         <SuccessToast3 />
//       </motion.div>

//       {/* Hero Image */}
//       <div
//         className="
//           w-full
//           h-[40vh] sm:h-[50vh] lg:h-[64vh]
//           bg-cover bg-center bg-no-repeat
//           transform skew-x-[-12deg]
//           overflow-hidden relative
//           rounded-xl
//         "
//       >
// <div className="relative w-full h-full transform skew-x-[12deg] overflow-hidden scale-[1.2]">
//   <HeroImageSlider />
// </div>
//       </div>
//     </div>
//   );
// };

// export default HeroImage;
