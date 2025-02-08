"use client";
import React from "react";

import {
  About,
  HeroSection,
  BlogExtract,
  JoinUs,
  Partners,
  Testimonies,
  WhyBackbone,
} from "@/components";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Partners />
      <About />
      {/* <div className="relative bg-[radial-gradient(ellipse_at_60%_50%,_var(--tw-gradient-stops))] from-success-100/60 from-0% via-transparent via-30% to-transparent to-100%">
        <div className="w-full h-screen -z-10 absolute right-0 top-1/2 bg-[radial-gradient(ellipse_at_50%_60%,_var(--tw-gradient-stops))] from-warning-100 from-0%  via-transparent via-40%  to-transparent to-100%" />
      </div> */}
      <JoinUs />
      <WhyBackbone />
      <Testimonies />
      <BlogExtract />
    </div>
  );
};

export default HomePage;
