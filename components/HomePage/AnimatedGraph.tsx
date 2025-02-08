"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function AnimatedSVG() {
  const controls = useAnimation();
  const svgRef = useRef(null);
  const isInView = useInView(svgRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      controls.start({ pathLength: 1 });
    }
  }, [isInView, controls]);

  return (
    <motion.svg
      ref={svgRef}
      fill="none"
      height="100"
      viewBox="0 0 207 100"
      width="207"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Animated Path */}
      <motion.path
        animate={controls}
        d="M3 81L13.1467 88.8972C19.8395 94.1062 29.0087 94.7781 36.3894 90.6004L41.7897 87.5436C44.1735 86.1942 46.2704 84.3915 47.962 82.237L58.5543 68.7469C63.4824 62.4705 71.5421 59.5296 79.3543 61.1571L84.4416 62.217C86.9266 62.7347 89.2972 63.6987 91.4383 65.0621L94.2031 66.8227C102.946 72.3902 114.443 70.7459 121.275 62.9512L124.235 59.5745C128.201 55.049 134.198 52.8535 140.149 53.7483V53.7483C147.204 54.809 154.205 51.5229 157.896 45.4179L169.311 26.5385C171.703 22.582 175.334 19.5257 179.641 17.8434L194.6 12"
        initial={{ pathLength: 0 }}
        stroke="url(#paint0_linear_3487_41461)"
        strokeLinecap="round"
        strokeWidth="5"
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* Pulsating Circle */}
      <motion.circle
        animate={{ scale: [1, 1.3, 1] }}
        cx="196.333"
        cy="10.9998"
        fill="#01DAE9"
        r="5.33333"
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "easeInOut",
        }}
      />

      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_3487_41461"
          x1="194.6"
          x2="3"
          y1="54.75"
          y2="54.75"
        >
          <stop stopColor="#00E9FA" />
          <stop offset="1" stopColor="#0075FF" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
