"use client";
import React, { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTheme } from "next-themes";

import { Hero2Bg } from "@/public/assets";
import { setShowLightNav } from "@/app/store/Features/settingsSlice";

interface Props {
  children: ReactNode;
}

const Hero2 = ({ children }: Props) => {
  const dispatch = useDispatch();
  const { theme } = useTheme();

  useEffect(() => {
    dispatch(setShowLightNav(true));
  }, [theme]);

  return (
    <div className="relative overflow-hidden">
      <div
        className=" h-screen bg-cover bg-fixed bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${Hero2Bg.src})`, WebkitOverflowScrolling: 'touch', }}
      >
        <div className="h-screen absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-black/30 to-secondary/10 dark:to-background/10 pointer-events-none" />
        {children}
      </div>
    </div>
  );
};

export default Hero2;
