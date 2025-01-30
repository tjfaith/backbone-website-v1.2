"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SocialsLayoutProps } from "@/types";
import Link from "next/link";

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
    <Link href={linkTo} target="_blank" >
      <motion.div
        className={`bg-background border p-1 rounded-full flex items-center space-x-2 overflow-hidden transition-colors duration-300 ${isHovered ? `${hoverBgColor} ${hoverBorderColor}` : ""
          }`}
        whileHover={{ width: "auto" }}
        whileTap={{ width: "auto" }}
        initial={{ width: "fit-content" }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        animate={{ width: isHovered ? "auto" : "fit-content" }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}

        onTapStart={() => setIsHovered(true)}
        onTapCancel={() => setIsHovered(false)}
        onTap={() => setIsHovered(false)}
      >
        <div
          className={`  p-1 text-white rounded-full text-xl border transition-all duration-300 ease-in-out ${isHovered
            ? `${hoverIconColor} ${hoverBorderColor}`
            : "bg-gradient-to-t from-primary to-gray-700"
            }`}
        >
          {hoverChildren && isHovered ? (
            <motion.div
              key="hover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
            >
              {hoverChildren}
            </motion.div>
          ) : (
            <motion.div
              key="default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
            >
              {children}
            </motion.div>
          )}
        </div>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="whitespace-nowrap text-primary"
              initial={{ opacity: 0, width: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
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
