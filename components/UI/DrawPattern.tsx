"use client";

import { motion } from "framer-motion";
import React from "react";

const DrawPattern = () => {
  return (
    <svg
      className="w-full h-full"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 653 492"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g style={{ mixBlendMode: "soft-light" }}>
        <motion.path
          animate={{ pathLength: 1, opacity: 1 }}
          d="M20.0039 20.542L62.3078 277.161C64.8913 292.833 86.2654 295.571 92.7159 281.056L217.993 -0.843752C225.318 -17.3249 250.07 -10.9773 248.558 6.99462L205.534 518.683C204.16 535.017 225.317 542.606 234.639 529.122L539.38 88.295C548.206 75.5282 568.213 81.5419 568.538 97.0589L574.317 373.504C574.711 392.342 601.667 395.127 605.904 376.768L633.004 259.337"
          initial={{ pathLength: 0, opacity: 0 }}
          stroke="white"
          strokeLinecap="round"
          strokeWidth="40"
          transition={{
            pathLength: {
              duration: 2.6,
              delay: 0.9, // 👈 drawing delay
              ease: "easeInOut",
            },
            opacity: {
              duration: 0.2,
              delay: 0.9,
            },
          }}
        />
      </g>
    </svg>
  );
};

export default DrawPattern;
