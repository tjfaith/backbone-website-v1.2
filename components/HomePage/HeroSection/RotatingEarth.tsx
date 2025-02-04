"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

import { Earth } from "@/public/assets";

const RotatingEarth = () => {
  const [rotateDeg, setRotateDeg] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate angle based on mouse position
    const angle =
      Math.atan2(mouseY - rect.height / 2, mouseX - rect.width / 2) *
      (180 / Math.PI);

    setRotateDeg(angle);
  };

  return (
    <motion.div
      animate={{ rotate: 360 }} // Apply rotation animation to continuously rotate the image
      className="md:w-screen-55 -bottom-72 -right-44 z-10 absolute"
      initial={{ rotate: 0 }} // Initial slow rotation state
      style={{
        rotate: rotateDeg, // Apply dynamic rotation based on mouse position
      }}
      transition={{
        rotate: {
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        },
      }}
      whileHover={{
        rotate: rotateDeg, // Rotate based on mouse position when hovered
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      onMouseMove={handleMouseMove} // Track mouse movement for hover rotation
    >
      <Image alt="earth" src={Earth} />
    </motion.div>
  );
};

export default RotatingEarth;
