"use client";
import React from "react";
import { useTheme } from "next-themes";
import { Image } from "@heroui/image";
import { useIsSSR } from "@react-aria/ssr";

import { FullLogo, FullLogoDark } from "@/public/assets";

interface Props {
  showDarkLogo?: boolean;
}
const BackboneLogo = ({ showDarkLogo }: Props) => {
  // const { showLightNav } = useSelector((state: RootState) => state.settings);
  const { theme } = useTheme();
  const isSSR = useIsSSR();

  return (
    <>
      {/* {showDarkLogo && (theme === "light" || isSSR) ? ( */}
      <Image
        radius="none"
        alt="logo2"
        className=" outline-none"
        src={FullLogoDark.src}
        width={220}
      />
      {/* // ) : (
      //   <Image
      //     radius="none"
      //     alt="logo"
      //     className=" outline-none"
      //     src={FullLogo.src}
      //     width={220}
      //   />
      // )} */}
    </>
  );
};

export default BackboneLogo;
