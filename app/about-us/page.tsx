"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTheme } from "next-themes";

import {
  AboutHero,
  AboutStatement,
  Achievement,
  BlogExtract,
} from "@/components";
import { setShowLightNav } from "@/app/store/Features/settingsSlice";

const AboutUs = () => {
  const dispatch = useDispatch();
  const { theme } = useTheme();

  useEffect(() => {
    dispatch(setShowLightNav(theme === "light" ? false : true));
  }, [theme]);

  return (
    <div className=" space-y-9 min-h-screen bg-[radial-gradient(circle_at_40%_15%,_var(--tw-gradient-stops))] md:bg-[radial-gradient(circle_at_70%_15%,_var(--tw-gradient-stops))] from-[#d2e8df] dark:from-success-100/60 from-0% via-background dark:via-background-200  via-5% md:via-20% to-background dark:to-background-200 to-100% md:pt-40 pt-20 pb-7">
      <AboutHero />
      <Achievement />
      <AboutStatement />
      <BlogExtract />
    </div>
  );
};

export default AboutUs;
