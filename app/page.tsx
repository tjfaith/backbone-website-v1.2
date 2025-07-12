"use client";
import React from "react";

import {
  HeroSection,
  BlogExtract,
  JoinUs,
  Partners,
  ChangingPayment,
  WhyBackbone,
  // OnePlace,
} from "@/components";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Partners />
      <ChangingPayment />
      <JoinUs />
      {/* <OnePlace /> */}
      <WhyBackbone />
      {/* <Testimonies /> */}
      <BlogExtract />
    </div>
  );
};

export default HomePage;
