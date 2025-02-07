"use client";
import React from "react";
import { useIsSSR } from "@react-aria/ssr";
import { useTheme } from "next-themes";
import { Image } from "@heroui/image";
import { useSelector } from "react-redux";

import { FullLogo, FullLogoDark } from "@/public/assets";
import { RootState } from "@/app/store";

interface Props {
  showDarkLogo?: boolean;
}
const BackboneLogo = ({ showDarkLogo }: Props) => {
  // const { showLightNav } = useSelector((state: RootState) => state.settings);
  const { theme } = useTheme();
  // const isSSR = useIsSSR();

  return (
    <>
      {showDarkLogo && theme === "light" ? (
        <Image
          alt="logo2"
          className=" outline-none"
          src={FullLogoDark.src}
          width={120}
        />
      ) : (
        <Image
          alt="logo"
          className=" outline-none"
          src={FullLogo.src}
          width={120}
        />
      )}
    </>
  );
};

export default BackboneLogo;
