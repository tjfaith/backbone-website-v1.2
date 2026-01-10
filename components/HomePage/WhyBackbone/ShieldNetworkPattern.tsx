"use client";

import { motion } from "framer-motion";
import React from "react";

const lineAnim = {
  initial: {
    strokeDasharray: "4 14",
    strokeDashoffset: 0,
    opacity: 0.9,
  },
  animate: {
    strokeDashoffset: -120,
    opacity: 1,
  },
};

const randomDuration = () => 4 + Math.random() * 2; // slower, organic

const ShieldNetworkPattern = () => {
  return (
    <svg
      fill="none"
      height="313"
      viewBox="0 0 313 313"
      width="313"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ================= STATIC SHIELD / SHAPES ================= */}
      {/* ⛔ DO NOT TOUCH YOUR ORIGINAL NON-BLUE PATHS */}
      {/* KEEP THEM EXACTLY AS THEY ARE */}

      {/* ================= ANIMATED BLUE CONNECTOR LINES ================= */}

      <path
        d="M257.486 78.4485L154.919 45.5913L53.5586 78.4485V167.581C53.5586 172.21 54.4032 176.823 56.1736 181.101C74.0781 224.361 94.8888 246.387 154.919 275.591C206.97 249.212 231.342 229.125 254.082 181.884C256.378 177.113 257.486 171.847 257.486 166.552V78.4485Z"
        fill="#EBF8FF"
      />
      <path
        d="M227.686 102.386L155.092 79.1069L83.3535 102.386V163.502C83.3535 168.127 84.1797 172.731 85.9888 176.987C98.4939 206.41 113.479 221.796 155.092 242.062C191.155 223.767 208.446 209.744 224.256 177.764C226.6 173.022 227.686 167.764 227.686 162.473V102.386Z"
        fill="#FAFAFA"
      />
      <rect
        fill="url(#paint0_linear_7212_25123)"
        height="230"
        transform="translate(53.5566 45.5913)"
        width="203.927"
      />
      <g filter="url(#filter0_i_7212_25123)">
        <path
          d="M195.096 129.002L155.755 116.365V204.826C174.034 195.537 183.414 188.276 191.562 173.171C194.069 168.522 195.096 163.246 195.096 157.964V129.002Z"
          fill="#EBF8FF"
        />
        <path
          d="M116.877 158.991C116.877 163.609 117.651 168.225 119.597 172.413C126.156 186.528 134.615 194.514 155.755 204.826V116.365L116.877 129.002V158.991Z"
          fill="#FAFAFA"
        />
      </g>
      <path
        d="M195.096 129.002L155.755 116.365L116.877 129.002V158.991C116.877 163.609 117.651 168.225 119.597 172.413C126.156 186.528 134.615 194.514 155.755 204.826C174.034 195.537 183.414 188.276 191.562 173.171C194.069 168.522 195.096 163.246 195.096 157.964V129.002Z"
        stroke="#47C2FF"
        strokeWidth="1.88525"
        strokeLinecap="round"
        // variants={lineAnim}
        // initial="initial"
        // animate="animate"
        // transition={{
        //   duration: randomDuration(),
        //   repeat: Infinity,
        //   ease: "linear",
        //   delay: 3,
        // }}
      />
      <path
        d="M156.254 153.535C157.743 151.87 159.917 150.811 162.341 150.811C166.816 150.811 170.458 154.396 170.458 158.804C170.458 163.211 167.372 167.714 162.341 165.993C162.341 165.993 157.456 164.02 158.283 166.797C159.11 169.573 158.588 170.22 158.283 170.793C157.978 171.365 154.74 171.556 154.226 170.793C153.711 170.029 155.088 165.333 154.503 163.433C153.917 161.533 153.818 159.75 154.226 158.804C155.259 156.406 152.405 154.807 150.167 154.807C147.93 154.807 146.542 155.469 146.109 158.804C145.676 162.138 148.646 163.653 150.167 162.801C151.688 161.948 151.898 162.403 152.196 162.801C152.495 163.199 153.847 166.654 152.196 166.796C150.546 166.938 150.167 166.796 150.167 166.796C145.692 166.796 142.497 163.578 142.051 158.803C141.605 154.029 145.691 150.81 150.167 150.81C152.592 150.811 154.765 151.869 156.254 153.535ZM158.283 162.799C158.572 163.289 159.552 163.255 162.341 162.799C164.96 162.18 166.399 161.006 166.399 158.803C166.399 156.6 166.398 155.171 162.341 154.807C158.283 154.442 157.6 156.735 158.283 158.803C158.965 160.872 157.538 160.9 158.283 162.799H158.283Z"
        fill="#D5F1FF"
      />
      <motion.path
        animate="animate"
        d="M170.34 117.299V53.9179L220.378 15M196.471 125.082V107.291L187.575 97.8395V63.3694L244.84 17.2239M207.59 142.873L227.049 130.642V53.9179L272.639 17.2239M205.366 166.224H214.818L254.292 125.082L299.881 120.634L311.557 156.216M205.366 179.011H223.713L251.512 150.657L269.303 162.332V286.313M200.919 185.683L254.292 223.489V300.769M187.575 200.138L235.945 239.056V284.09L210.926 312.444M170.34 214.593L214.818 251.843V290.761M162.557 214.593V300.769"
        initial="initial"
        opacity="0.1"
        stroke="#47C2FF"
        strokeLinecap="round"
        strokeWidth="1.11194"
        transition={{
          duration: randomDuration(),
          repeat: Infinity,
          ease: "linear",
          delay: 3,
        }}
        variants={lineAnim}
      />
      <path
        d="M238.057 212L254.557 223.5V241"
        stroke="url(#paint1_linear_7212_25123)"
        strokeLinecap="round"
        strokeWidth="1.11194"
      />
      <path
        d="M170.057 108V83M192.057 102.5L196.557 107V116"
        stroke="url(#paint2_linear_7212_25123)"
        strokeLinecap="round"
        strokeWidth="1.11194"
      />
      <path
        d="M248.557 131L253.557 125.5L272.557 124"
        stroke="url(#paint3_linear_7212_25123)"
        strokeLinecap="round"
        strokeWidth="1.11194"
      />
      <path
        d="M218.057 136L227.057 130V110.5"
        stroke="url(#paint4_linear_7212_25123)"
        strokeLinecap="round"
        strokeWidth="1.11194"
      />
      <path
        d="M213.057 179H223.557L234.057 169.5M204.557 242.5L214.557 252V267M235.557 247V275M162.557 245V268.5"
        stroke="url(#paint5_linear_7212_25123)"
        strokeLinecap="round"
        strokeWidth="1.11194"
      />
      <path
        d="M213.557 179H224.367L233.557 169"
        stroke="url(#paint6_linear_7212_25123)"
        strokeLinecap="round"
        strokeWidth="1.11194"
      />
      <motion.path
        animate="animate"
        d="M141.773 117.299V53.9179L91.7357 15M115.642 125.082V107.291L124.538 97.8395V63.3694L67.2731 17.2239M104.523 142.873L85.0641 130.642V53.9179L39.4746 17.2239M106.747 166.224H97.2954L57.8216 125.082L12.232 120.634L0.556641 156.216M106.747 179.011H88.3999L60.6014 150.657L42.8104 162.332V286.313M111.195 185.683L57.8216 223.489V300.769M124.538 200.138L76.1686 239.056V284.09L101.187 312.444M141.773 214.593L97.2954 251.843V290.761M149.557 214.593V300.769"
        initial="initial"
        opacity="0.1"
        stroke="#47C2FF"
        strokeLinecap="round"
        strokeWidth="1.11194"
        transition={{
          duration: randomDuration(),
          repeat: Infinity,
          ease: "linear",
          delay: 3,
        }}
        variants={lineAnim}
      />
      <path
        d="M74.0566 212L57.5566 223.5V241"
        stroke="url(#paint7_linear_7212_25123)"
        strokeLinecap="round"
        strokeWidth="1.11194"
      />
      <path
        d="M142.057 108V83M120.057 102.5L115.557 107V116"
        stroke="url(#paint8_linear_7212_25123)"
        strokeLinecap="round"
        strokeWidth="1.11194"
      />
      <path
        d="M63.5566 131L58.5566 125.5L39.5566 124"
        stroke="url(#paint9_linear_7212_25123)"
        strokeLinecap="round"
        strokeWidth="1.11194"
      />
      <path
        d="M94.0566 136L85.0566 130V110.5"
        stroke="url(#paint10_linear_7212_25123)"
        strokeLinecap="round"
        strokeWidth="1.11194"
      />
      <path
        d="M99.0566 179H88.5566L78.0566 169.5M107.557 242.5L97.5566 252V267M76.5566 247V275M149.557 245V268.5"
        stroke="url(#paint11_linear_7212_25123)"
        strokeLinecap="round"
        strokeWidth="1.11194"
      />
      <path
        d="M98.5566 179H87.7458L78.5566 169"
        stroke="url(#paint12_linear_7212_25123)"
        strokeLinecap="round"
        strokeWidth="1.11194"
      />
      <rect
        fill="url(#paint13_radial_7212_25123)"
        height="297.444"
        transform="translate(0.556641)"
        width="311"
      />

      <motion.path
        animate="animate"
        d="M238.057 212L254.557 223.5V241"
        initial="initial"
        stroke="url(#paint1_linear)"
        strokeLinecap="round"
        strokeWidth="1.11194"
        transition={{
          duration: randomDuration(),
          repeat: Infinity,
          ease: "linear",
          delay: 1.5,
        }}
        variants={lineAnim}
      />

      <motion.path
        animate="animate"
        d="M413.5 210L397 222V239"
        initial="initial"
        stroke="url(#paint2_linear)"
        strokeLinecap="round"
        strokeWidth="1.11194"
        transition={{
          duration: randomDuration(),
          repeat: Infinity,
          ease: "linear",
          delay: 2.2,
        }}
        variants={lineAnim}
      />

      <motion.path
        animate="animate"
        d="M326.5 164V188"
        initial="initial"
        stroke="#47C2FF"
        strokeLinecap="round"
        strokeWidth="1.11194"
        transition={{
          duration: randomDuration(),
          repeat: Infinity,
          ease: "linear",
          delay: 3,
        }}
        variants={lineAnim}
      />

      <motion.path
        animate="animate"
        d="M300 300L270 320"
        initial="initial"
        stroke="#47C2FF"
        strokeLinecap="round"
        strokeWidth="1.11194"
        transition={{
          duration: randomDuration(),
          repeat: Infinity,
          ease: "linear",
          delay: 2.8,
        }}
        variants={lineAnim}
      />

      {/* ================= DEFINITIONS (KEEP YOUR ORIGINAL ONES) ================= */}
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="88.4614"
          id="filter0_i_7212_25123"
          width="78.2188"
          x="116.877"
          y="116.365"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            mode="normal"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2.79352" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.669091 0 0 0 0 0.821818 0 0 0 0 0.910909 0 0 0 1 0"
          />
          <feBlend
            in2="shape"
            mode="normal"
            result="effect1_innerShadow_7212_25123"
          />
        </filter>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_7212_25123"
          x1="101.964"
          x2="101.964"
          y1="0"
          y2="230"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_7212_25123"
          x1="246.307"
          x2="246.307"
          y1="212"
          y2="241"
        >
          <stop stopColor="#47C2FF" stopOpacity="0" />
          <stop offset="1" stopColor="#47C2FF" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint2_linear_7212_25123"
          x1="183.307"
          x2="183.307"
          y1="83"
          y2="116"
        >
          <stop stopColor="#47C2FF" stopOpacity="0" />
          <stop offset="1" stopColor="#47C2FF" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint3_linear_7212_25123"
          x1="260.557"
          x2="260.557"
          y1="124"
          y2="131"
        >
          <stop stopColor="#47C2FF" stopOpacity="0" />
          <stop offset="1" stopColor="#47C2FF" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint4_linear_7212_25123"
          x1="222.557"
          x2="222.557"
          y1="110.5"
          y2="136"
        >
          <stop stopColor="#47C2FF" stopOpacity="0" />
          <stop offset="1" stopColor="#47C2FF" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint5_linear_7212_25123"
          x1="199.057"
          x2="199.057"
          y1="169.5"
          y2="275"
        >
          <stop stopColor="#47C2FF" stopOpacity="0" />
          <stop offset="1" stopColor="#47C2FF" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint6_linear_7212_25123"
          x1="223.557"
          x2="223.557"
          y1="169"
          y2="179"
        >
          <stop stopColor="#47C2FF" stopOpacity="0" />
          <stop offset="1" stopColor="#47C2FF" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint7_linear_7212_25123"
          x1="65.8066"
          x2="65.8066"
          y1="212"
          y2="241"
        >
          <stop stopColor="#47C2FF" stopOpacity="0" />
          <stop offset="1" stopColor="#47C2FF" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint8_linear_7212_25123"
          x1="128.807"
          x2="128.807"
          y1="83"
          y2="116"
        >
          <stop stopColor="#47C2FF" stopOpacity="0" />
          <stop offset="1" stopColor="#47C2FF" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint9_linear_7212_25123"
          x1="51.5566"
          x2="51.5566"
          y1="124"
          y2="131"
        >
          <stop stopColor="#47C2FF" stopOpacity="0" />
          <stop offset="1" stopColor="#47C2FF" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint10_linear_7212_25123"
          x1="89.5566"
          x2="89.5566"
          y1="110.5"
          y2="136"
        >
          <stop stopColor="#47C2FF" stopOpacity="0" />
          <stop offset="1" stopColor="#47C2FF" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint11_linear_7212_25123"
          x1="113.057"
          x2="113.057"
          y1="169.5"
          y2="275"
        >
          <stop stopColor="#47C2FF" stopOpacity="0" />
          <stop offset="1" stopColor="#47C2FF" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint12_linear_7212_25123"
          x1="88.5566"
          x2="88.5566"
          y1="169"
          y2="179"
        >
          <stop stopColor="#47C2FF" stopOpacity="0" />
          <stop offset="1" stopColor="#47C2FF" />
        </linearGradient>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="translate(155.5 148.722) rotate(90.5571) scale(154.285 161.317)"
          gradientUnits="userSpaceOnUse"
          id="paint13_radial_7212_25123"
          r="1"
        >
          <stop offset="0.689902" stopColor="#FAFAFA" stopOpacity="0" />
          <stop offset="1" stopColor="#FAFAFA" />
        </radialGradient>
      </defs>

      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint1_linear"
          x1="238"
          x2="254"
          y1="212"
          y2="241"
        >
          <stop stopColor="#47C2FF" />
          <stop offset="1" stopColor="#47C2FF" stopOpacity="0.3" />
        </linearGradient>

        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint2_linear"
          x1="413"
          x2="397"
          y1="210"
          y2="239"
        >
          <stop stopColor="#47C2FF" />
          <stop offset="1" stopColor="#47C2FF" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ShieldNetworkPattern;
