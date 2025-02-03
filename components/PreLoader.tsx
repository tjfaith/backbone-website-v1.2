// "use client";

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Overlay() {
//     const [isPageLoaded, setIsPageLoaded] = useState(false);

//     useEffect(() => {
//         const handleLoad = () => setIsPageLoaded(true);

//         if (document.readyState === "complete") {
//             handleLoad();
//         } else {
//             window.addEventListener("load", handleLoad);
//         }

//         return () => window.removeEventListener("load", handleLoad);
//     }, []);

//     return (
//         <AnimatePresence>
//             {!isPageLoaded && (
//                 <motion.div
//                     animate={{ opacity: 0 }}
//                     className="fixed inset-0 bg-black z-50 flex items-center justify-center"
//                     exit={{ opacity: 0 }}
//                     initial={{ opacity: 1 }}
//                     transition={{ duration: 1.5 }}
//                 >
//                     <motion.svg
//                         width="58"
//                         height="42"
//                         viewBox="0 0 58 42"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <motion.path
//                             d="M29.0331 5.78264C32.0478 2.41206 36.4471 0.269539 41.3545 0.269538C50.4123 0.269538 57.783 7.525 57.783 16.4476C57.783 25.3676 51.5383 34.4837 41.3533 31.0002C41.3533 31.0002 31.4655 27.0053 33.1402 32.6257C34.815 38.246 33.7575 39.5558 33.1402 40.7141C32.5229 41.8723 25.9679 42.259 24.9273 40.7141C23.8867 39.1691 26.6725 29.6624 25.4881 25.8165C24.3037 21.9707 24.102 18.3625 24.9273 16.4476C27.0195 11.5934 21.2419 8.35794 16.713 8.35794C12.1842 8.35794 9.37491 9.69826 8.49877 16.4476C7.62261 23.197 13.6342 26.2624 16.713 24.5372C19.7918 22.812 20.2164 23.7317 20.8202 24.5372C21.4239 25.3428 24.1616 32.3378 20.8202 32.6244C17.4788 32.911 16.713 32.6244 16.713 32.6244C7.65524 32.6244 1.18767 26.1104 0.284513 16.4464C-0.61864 6.78232 7.6527 0.267029 16.713 0.267029C21.6205 0.269537 26.0198 2.40955 29.0331 5.78264ZM33.1402 24.5348C33.7256 25.5254 35.7077 25.4576 41.3533 24.5348C46.6557 23.2805 49.5676 20.9058 49.5676 16.4463C49.5676 11.9857 49.5663 9.09505 41.3533 8.35669C33.1402 7.61832 31.7584 12.2596 33.139 16.4464C34.5196 20.633 31.6315 20.6912 33.139 24.5348H33.1402Z"
//                             stroke="white"
//                             strokeWidth="2"
//                             fill="white"
//                             initial={{ pathLength: 0 }}
//                             animate={{ pathLength: 1 }}
//                             transition={{
//                                 duration: 2,
//                                 ease: "easeInOut",
//                                 repeat: Infinity,
//                             }}
//                         />
//                     </motion.svg>
//                     {/* <svg
//             className="w-12 h-12 animate-spin text-white"
//             fill="none"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <circle
//               className="opacity-25"
//               cx="12"
//               cy="12"
//               r="10"
//               stroke="currentColor"
//               strokeWidth="4"
//             />
//             <path
//               className="opacity-75"
//               d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
//               fill="currentColor"
//             />
//           </svg> */}
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// }

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Overlay() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => setIsPageLoaded(true);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <AnimatePresence>
      {!isPageLoaded && (
        // <motion.div
        //   className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        //   style={{ pointerEvents: "none" }}
        // >
        <motion.div
          animate={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          style={{ pointerEvents: "none" }}
          exit={{ opacity: 0 }}
          initial={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >

          {/* SVG Loader */}
          <motion.svg
            height="42"
            viewBox="0 0 58 42"
            width="58"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              animate={{ pathLength: 1 }}
              d="M29.0331 5.78264C32.0478 2.41206 36.4471 0.269539 41.3545 0.269538C50.4123 0.269538 57.783 7.525 57.783 16.4476C57.783 25.3676 51.5383 34.4837 41.3533 31.0002C41.3533 31.0002 31.4655 27.0053 33.1402 32.6257C34.815 38.246 33.7575 39.5558 33.1402 40.7141C32.5229 41.8723 25.9679 42.259 24.9273 40.7141C23.8867 39.1691 26.6725 29.6624 25.4881 25.8165C24.3037 21.9707 24.102 18.3625 24.9273 16.4476C27.0195 11.5934 21.2419 8.35794 16.713 8.35794C12.1842 8.35794 9.37491 9.69826 8.49877 16.4476C7.62261 23.197 13.6342 26.2624 16.713 24.5372C19.7918 22.812 20.2164 23.7317 20.8202 24.5372C21.4239 25.3428 24.1616 32.3378 20.8202 32.6244C17.4788 32.911 16.713 32.6244 16.713 32.6244C7.65524 32.6244 1.18767 26.1104 0.284513 16.4464C-0.61864 6.78232 7.6527 0.267029 16.713 0.267029C21.6205 0.269537 26.0198 2.40955 29.0331 5.78264ZM33.1402 24.5348C33.7256 25.5254 35.7077 25.4576 41.3533 24.5348C46.6557 23.2805 49.5676 20.9058 49.5676 16.4463C49.5676 11.9857 49.5663 9.09505 41.3533 8.35669C33.1402 7.61832 31.7584 12.2596 33.139 16.4464C34.5196 20.633 31.6315 20.6912 33.139 24.5348H33.1402Z"
              fill="none"
              initial={{ pathLength: 0 }}
              stroke="white"
              strokeWidth="2"
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </motion.svg>

          {/* <motion.div
            animate={{ opacity: 0 }}
            className="absolute inset-0 bg-black"
            exit={{ opacity: 0 }}
            initial={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          /> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
