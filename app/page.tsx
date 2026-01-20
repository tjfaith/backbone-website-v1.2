"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useIsSSR } from "@react-aria/ssr";
import { useTheme } from "next-themes";

import {
  HeroSection,
  BlogExtract,
  JoinUs,
  Partners,
  ChangingPayment,
  BackboneFee,
  WhyBackbone1,
  WhyBackbone2,
  WhyBackbone3,
  DownloadApp,
} from "@/components";
import { setShowLightNav } from "@/app/store/Features/settingsSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const isSSR = useIsSSR();

  useEffect(() => {
    dispatch(setShowLightNav(theme === "light" || isSSR ? false : true));
  }, [theme]);

  return (
    <div className="md:pt-0 pt-20 overflow-hidden">
      <HeroSection />
      <Partners />
      <ChangingPayment />
      <JoinUs />
      <BackboneFee />
      <WhyBackbone1 />
      <WhyBackbone2 />
      <div
        className="bg-gradient-to-b from-background-75 from-[6%] via-white via-[22%] to-white
                dark:from-background-75 dark:via-background-100 dark:to-background"
      >
        <WhyBackbone3 />
        <BlogExtract />
      </div>
      <DownloadApp />
    </div>
  );
};

export default HomePage;
