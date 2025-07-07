import { androidLogo, IosLogo } from "@/public/assets";
import { Button } from "@heroui/button";
import Image from "next/image";
import React from "react";
// import {IosLogo, AndroidLogo}

interface props {
  btnType: "android" | "ios";
}
const AppDownloadBtn = ({ btnType }: props) => {
  return (
    <Button
      radius="full"
      className="bg-background dark:bg-primary bg:text-primary"
    >
      <>
        {btnType === "ios" && (
          <div className="flex items-center gap-1">
            <div>Get our app</div>
            <Image src={IosLogo} alt="Ios logo" />
          </div>
        )}
        {btnType === "android" && (
          <div className="flex items-center gap-1">
            <div>Download our app</div>
            <Image src={androidLogo} alt="Ios logo" />
          </div>
        )}
      </>
    </Button>
  );
};

export default AppDownloadBtn;
