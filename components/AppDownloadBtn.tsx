import { Button } from "@heroui/button";
import Image from "next/image";
import React from "react";

import { androidLogo, IosLogo } from "@/public/assets";
import { Link } from "@heroui/link";
// import {IosLogo, AndroidLogo}

interface props {
  btnType: "android" | "ios";
}
const AppDownloadBtn = ({ btnType }: props) => {
  return (
    <Button
      className="bg-background-200 dark:bg-primary text-[#0E121B]"
      radius="full"
      as={Link}
      href={`${process.env.NEXT_PUBLIC_APP_URL}/welcome`}
    >
      <>
        {btnType === "ios" && (
          <div className="flex items-center gap-1">
            <div>Get our app</div>
            <Image alt="Ios logo" src={IosLogo} />
          </div>
        )}
        {btnType === "android" && (
          <div className="flex items-center gap-1">
            <div>Download our app</div>
            <Image alt="Ios logo" src={androidLogo} />
          </div>
        )}
      </>
    </Button>
  );
};

export default AppDownloadBtn;
