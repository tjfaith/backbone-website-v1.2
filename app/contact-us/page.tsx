"use client";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useIsSSR } from "@react-aria/ssr";

import { setShowLightNav } from "@/app/store/Features/settingsSlice";
import { ContactForm, ContactInfo } from "@/components";

const ContactUs = () => {
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const isSSR = useIsSSR();

  useEffect(() => {
    dispatch(setShowLightNav(theme === "light" || isSSR ? false : true));
  }, [theme]);

  return (
    <div className=" min-h-screen bg-[radial-gradient(circle_at_40%_15%,_var(--tw-gradient-stops))] md:bg-[radial-gradient(circle_at_70%_35%,_var(--tw-gradient-stops))] from-[#d2e8df]/50 dark:from-success-100/60 from-0% via-background dark:via-background-200 via-30% dark:md:via-30% md:via-80% to-background dark:to-background-200 to-100% md:pt-36 pt-20 pb-20 ">
      <div className="page-max-width flex md:flex-row flex-col  justify-between gap-8 ">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
