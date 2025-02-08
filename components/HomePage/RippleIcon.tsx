"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function RippleIcon() {
  return (
    <div className="flex items-center justify-center rounded-full relative">
      {/* Multiple Ripple Effects */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          animate={{ scale: 2.5, opacity: 0 }}
          className="absolute rounded-full border border-info/50"
          initial={{ scale: 1, opacity: 1 }}
          style={{
            width: `${80 + index * 15}px`,
            height: `${80 + index * 15}px`,
          }}
          transition={{
            duration: 5, // Slower ripple duration
            delay: index * 1, // Reduced gap between ripples
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Icon Container */}
      <div className="rounded-full border p-5 border-info/50 relative z-10">
        <Icon className="text-aqua text-6xl" icon="ri:shield-user-line" />
      </div>
    </div>
  );
}
