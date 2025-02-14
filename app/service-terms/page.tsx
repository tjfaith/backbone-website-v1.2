"use client";
import { useIsSSR } from "@react-aria/ssr";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setShowLightNav } from "../store/Features/settingsSlice";

const ServiceTerms = () => {
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const isSSR = useIsSSR();

  useEffect(() => {
    dispatch(setShowLightNav(theme === "light" || isSSR ? false : true));
  }, [theme]);

  return <div />;
};

export default ServiceTerms;
