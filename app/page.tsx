"use client";
import React from "react";

import {
  HeroSection,
  BlogExtract,
  JoinUs,
  Partners,
  Testimonies,
  ChangingPayment,
  WhyBackbone,
} from "@/components";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Partners />
      <ChangingPayment />
      <JoinUs />
      <WhyBackbone />
      <Testimonies />
      <BlogExtract />
    </div>
  );
};

export default HomePage;
