"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import { SocialsLayoutProps } from "@/types";

const SocialLayout = ({
  children,
  hoverText,
  linkTo,
  hoverBgColor,
  hoverBorderColor,
  hoverIconColor = "bg-gradient-to-t from-primary to-gray-700",
  hoverChildren,
}: SocialsLayoutProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={linkTo} target="_blank">
      <motion.div
        animate={{ width: isHovered ? "auto" : "fit-content" }}
        className={`bg-background border p-1 rounded-full flex items-center space-x-2 overflow-hidden transition-colors duration-300 ${
          isHovered ? `${hoverBgColor} ${hoverBorderColor}` : ""
        }`}
        initial={{ width: "fit-content" }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        whileHover={{ width: "auto" }}
        whileTap={{ width: "auto" }}
        onHoverEnd={() => setIsHovered(false)}
        onHoverStart={() => setIsHovered(true)}
        onTap={() => setIsHovered(false)}
        onTapCancel={() => setIsHovered(false)}
        onTapStart={() => setIsHovered(true)}
      >
        <div
          className={`  p-1 text-white rounded-full text-xl border transition-all duration-300 ease-in-out ${
            isHovered
              ? `${hoverIconColor} ${hoverBorderColor}`
              : "bg-gradient-to-t from-primary to-gray-700"
          }`}
        >
          {hoverChildren && isHovered ? (
            <motion.div
              key="hover"
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
            >
              {hoverChildren}
            </motion.div>
          ) : (
            <motion.div
              key="default"
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
            >
              {children}
            </motion.div>
          )}
        </div>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              animate={{ width: "auto", opacity: 1 }}
              className="whitespace-nowrap text-primary"
              exit={{ width: 0, opacity: 0 }}
              initial={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {hoverText}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
};

export default SocialLayout;
