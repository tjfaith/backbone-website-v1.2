import { Image } from "@heroui/image";
import React from "react";
import CountUp from "react-countup";

import {
  Fincra,
  FlutterWave,
  Graph,
  Gray,
  IvoryPay,
  JuicyWay,
  Klasha,
  Obsidian,
  PayAza,
  Waza,
  WeWire,
  YellowCard,
} from "@/public/assets";

const Partners = () => {
  return (
    <div className="max-w-screen-2xl mx-auto lg:px-28 px-6 py-16 grid md:grid-cols-2 gap-10 ">
      <div className="">
        <div className="clash-display-font">
          <span className="text-foreground-950 text-5xl font-medium">
            <CountUp
              enableScrollSpy
              scrollSpyOnce
              decimals={1}
              duration={5}
              end={4.5}
            />
          </span>
          <span className="text-foreground text-2xl font-medium">/5</span>
          <span className=" italic text-foreground-950 text-base font-medium ml-1">
            User Satisfaction Rating
          </span>
        </div>
        <div
          className="text-foreground-950 text-2xl  xl:text-5xl font-medium leading-tight max-w-2xl clash-display-font"
          id="get_started"
        >
          Trusted by Hundreds of Partners Across different Countries.
        </div>
      </div>
      <div className="grid-cols-3 inline-grid justify-end justify-items-center lg:gap-10 gap-5">
        <Image alt="flutterwave logo" radius="none" src={FlutterWave.src} />
        <Image alt="Yellowcard logo" radius="none" src={YellowCard.src} />
        <Image alt="Gray logo" radius="none" src={Gray.src} />
        <Image alt="Fincra logo" radius="none" src={Fincra.src} />
        <Image alt="Obsidian logo" radius="none" src={Obsidian.src} />
        <Image alt="Waza logo" radius="none" src={Waza.src} />
        <Image alt="Klasha logo" radius="none" src={Klasha.src} />
        <Image alt="IvoryPay logo" radius="none" src={IvoryPay.src} />
        <Image alt="JuicyWay logo" radius="none" src={JuicyWay.src} />
        <Image alt="WeWire logo" radius="none" src={WeWire.src} />
        <Image alt="Graph logo" radius="none" src={Graph.src} />
        <Image alt="PayAza logo" radius="none" src={PayAza.src} />
      </div>
    </div>
  );
};

export default Partners;
