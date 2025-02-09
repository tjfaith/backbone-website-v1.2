"use client";
import Image from "next/image";
import React, { ReactNode, useEffect } from "react";
import { useTheme } from "next-themes";
import { useDispatch } from "react-redux";
import { useIsSSR } from "@react-aria/ssr";

import { Earth } from "@/public/assets";
import { setShowLightNav } from "@/app/store/Features/settingsSlice";

interface Props {
  children: ReactNode;
}

const Hero1 = ({ children }: Props) => {
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const isSSR = useIsSSR();

  useEffect(() => {
    dispatch(setShowLightNav(theme === "light" || isSSR ? false : true));
  }, [theme]);

  return (
    <div className="relative overflow-hidden">
      <div className=" h-screen bg-[radial-gradient(ellipse_at_40%_40%,_var(--tw-gradient-stops))] from-success from-0% via-background via-50% to-background to-100% ">
        <div className="w-full h-screen absolute bottom-0 bg-[radial-gradient(ellipse_at_20%_90%,_var(--tw-gradient-stops))] from-warning/50 from-0%  via-transparent via-30%  to-transparent to-100%" />

        <div className="h-screen absolute inset-0 z-10 bg-background/60 pointer-events-none" />
        {children}

        {/* <RotatingEarth /> */}
        <div className=" md:w-screen-55 -bottom-72 -right-44 z-10 absolute animate__animated animate__bounceInUp animate__slow">
          <Image alt="earth" src={Earth} />
        </div>
      </div>
    </div>
  );
};

export default Hero1;
