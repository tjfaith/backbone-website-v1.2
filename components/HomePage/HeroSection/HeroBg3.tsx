import React, { ReactNode } from "react";

import { Hero3 } from "@/public/assets";

interface Props {
  children: ReactNode;
}

const HeroBg2 = ({ children }: Props) => {
  return (
    <div className="relative overflow-hidden">
      <div
        className=" h-screen bg-cover bg-fixed bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${Hero3.src})` }}
      >
        <div className="h-screen absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_90%_10%,_var(--tw-gradient-stops))] from-transparent from-0% via-primary via-90% to-primary to-10%  pointer-events-none" />

        {children}
      </div>
    </div>
  );
};

export default HeroBg2;
