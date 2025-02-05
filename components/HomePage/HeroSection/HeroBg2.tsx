"use client";
import React, { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Hero2 } from "@/public/assets";
import { setShowLightNav } from "@/app/store/Features/settingsSlice";

interface Props {
  children: ReactNode;
}

const HeroBg2 = ({ children }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShowLightNav(true));
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className=" h-screen bg-cover bg-fixed bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${Hero2.src})` }}
      >
        <div className="h-screen absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_90%_10%,_var(--tw-gradient-stops))] from-transparent from-0% dark:via-[#0000] via-primary via-90% dark:to-[#0000] to-primary to-10%  pointer-events-none" />
        {children}
      </div>
    </div>
  );
};

export default HeroBg2;
