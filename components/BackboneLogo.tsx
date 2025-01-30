"use client";
import React from "react";
import { useIsSSR } from "@react-aria/ssr";
import { useTheme } from "next-themes";
import { Image } from "@heroui/image";
import { FullLogo } from "@/public/assets";


const CottonLogo = () => {
  const { theme } = useTheme();
  const isSSR = useIsSSR();

  return (
    <>
      {theme === "light" || isSSR ? (
        <Image
          alt="logo"
          className=" outline-none"
          src={FullLogo.src}
          width={120}
        />
      ) : (
        <Image
          alt="logo2"
          className=" outline-none"
          src={FullLogo.src}
          width={120}
        />
      )}
    </>
  );
};

export default CottonLogo;
