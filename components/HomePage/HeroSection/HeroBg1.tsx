import Image from "next/image";
import React, { ReactNode } from "react";

import { Earth } from "@/public/assets";

interface Props {
  children: ReactNode;
}

const HeroBg1 = ({ children }: Props) => {
  return (
    <div className="relative overflow-hidden">
      <div className=" h-screen bg-[radial-gradient(ellipse_at_40%_40%,_var(--tw-gradient-stops))] from-accent1 from-0% via-primary via-50% to-primary to-100% ">
        <div className="w-full h-screen absolute bottom-0 bg-[radial-gradient(ellipse_at_20%_90%,_var(--tw-gradient-stops))] from-accent2-600/50 from-0%  via-transparent via-40%  to-transparent to-100%" />

        <div className="h-screen absolute inset-0 z-10 bg-primary/60 pointer-events-none" />
        {children}

        <div className=" md:w-screen-55 -bottom-72 -right-20 z-10 absolute animate__animated animate__bounceInUp animate__slow">
          <Image alt="earth" src={Earth} />
        </div>
      </div>
    </div>
  );
};

export default HeroBg1;
