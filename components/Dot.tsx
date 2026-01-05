"use client";

import { cn } from "@heroui/theme";
import { motion } from "framer-motion";

type DotProps = {
  timing?: number;
  className?: string;
  innerClassName?: string;
};

const Dot = ({ timing = 0.75, className, innerClassName }: DotProps) => {
  const totalDuration = timing * 2; // Full cycle

  return (
    <div className="flex items-center justify-center rounded-full relative w-3 h-3">
      {[...Array(2)].map((_, index) => (
        <motion.div
          key={index}
          animate={{ scale: 2.2, opacity: 0 }}
          className={cn(
            "absolute rounded-full border-4 border-white",
            className
          )}
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
        <div className={cn("bg-white h-1 w-1 rounded-full", innerClassName)} />
      </div>
    </div>
  );
};

export default Dot;
