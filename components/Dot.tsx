// "use client";

// import { motion } from "framer-motion";

// type DotProps = {
//   timing?: number;
// };

// const Dot = ({ timing = 1.5 }: DotProps) => {
//   return (
//     <div className="flex items-center justify-center rounded-full relative w-3 h-3">
//       {[...Array(2)].map((_, index) => (
//         <motion.div
//           key={index}
//           className="absolute rounded-full border border-white"
//           initial={{ scale: 0, opacity: 1 }}
//           animate={{ scale: 2.2, opacity: 0 }}
//           style={{
//             width: `${4 + index * 3}px`,
//             height: `${4 + index * 3}px`,
//           }}
//           transition={{
//             duration: 3,
//             ease: "easeInOut",
//             repeat: Infinity,
//             repeatType: "loop",
//             repeatDelay: index * timing,
//           }}
//         />
//       ))}

//       <div className="rounded-full p-2 border-transparent relative z-10">
//         <div className="bg-white h-1 w-1 rounded-full"></div>
//       </div>
//     </div>
//   );
// };

// export default Dot;

"use client";

import { motion } from "framer-motion";

type DotProps = {
  timing?: number; // Half-cycle duration in seconds
};

const Dot = ({ timing = 0.75 }: DotProps) => {
  const totalDuration = timing * 2; // Full cycle

  return (
    <div className="flex items-center justify-center rounded-full relative w-3 h-3">
      {[...Array(2)].map((_, index) => (
        <motion.div
          key={index}
          animate={{ scale: 2.2, opacity: 0 }}
          className="absolute rounded-full border-4 border-white"
          initial={{ scale: 0, opacity: 1 }}
          style={{
            width: `${4 + index * 3}px`,
            height: `${4 + index * 3}px`,
          }}
          transition={{
            duration: timing,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: totalDuration, // space out repeats
            delay: index === 1 ? timing : 0, // offset second ripple
          }}
        />
      ))}

      <div className="rounded-full p-2 border-transparent relative z-10 ">
        <div className="bg-white h-1 w-1 rounded-full" />
      </div>
    </div>
  );
};

export default Dot;
