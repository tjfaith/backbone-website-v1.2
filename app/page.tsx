"use client";
import React from "react";

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

const HomePage = () => {
  return (
    <div className="md:pt-0 pt-20 overflow-hidden">
      <HeroSection />
      <Partners />
      <ChangingPayment />
      <JoinUs />
      <BackboneFee />
      <WhyBackbone1 />
      <WhyBackbone2 />
      <div className=" bg-gradient-to-b from-background-75 from-[6%] via-white via-[22%] to-white">
        <WhyBackbone3 />
        <BlogExtract />
      </div>
      <DownloadApp />
    </div>
  );
};

export default HomePage;
