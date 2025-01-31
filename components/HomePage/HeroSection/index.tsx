"use client";
import React, { useEffect, useState } from "react";

import HeroContent from "./HeroContent";
import HeroBg1 from "./HeroBg1";
import HeroBg2 from "./HeroBg2";
import HeroBg3 from "./HeroBg3";
import HeroBg4 from "./HeroBg4";

const HeroSection = () => {
  const heroBgs = [
    <HeroBg1 key="bg1">
      <HeroContent />
    </HeroBg1>,
    // <HeroBg2 key="bg2">
    //   <HeroContent avatarClass="from-background to-background via-background text-background md:text-primary" />
    // </HeroBg2>,
    <HeroBg3 key="bg3">
      <HeroContent avatarClass="from-background to-background via-background text-background md:text-primary" />{" "}
    </HeroBg3>,
    // <HeroBg4 key="bg4">
    //   <HeroContent avatarClass="from-background to-background via-background text-background md:text-primary" />{" "}
    // </HeroBg4>,
  ];

  const [randomHeroBg, setRandomHeroBg] = useState<any>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * heroBgs.length);

    setRandomHeroBg(heroBgs[randomIndex]);
  }, []);

  return <>{randomHeroBg}</>;
};

export default HeroSection;
