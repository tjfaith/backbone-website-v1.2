import { Image } from "@heroui/image";
import React from "react";
import CountUp from "react-countup";

import {
  ClearJunction,
  Fincra,
  FlutterWave,
  Graph,
  Grey,
  IvoryPay,
  JuicyWay,
  Klasha,
  Obsidian,
  PayAza,
  Waza,
  WeWire,
  YellowCard,
  Conduit,
  FairMoney,
  MultiGate,
} from "@/public/assets";

const Partners = () => {
  return (
    <div className="page-max-width pb-16 space-y-10   bg-background dark:bg-background-200 py-14">
      <div className="">
        <div className="clash-display-font" data-aos="fade-up">
          <span className="text-primary text-[32px] font-medium">
            <CountUp
              enableScrollSpy
              scrollSpyOnce
              decimals={1}
              duration={5}
              end={4.8}
            />
          </span>
          <span className="text-primary-400 text-2xl font-medium">/5</span>
          <span className=" italic text-primary text-base font-medium ml-1">
            User Satisfaction Rating
          </span>
        </div>
        <div
          className="text-primary text-2xl md:text-[32px] font-medium leading-tight max-w-xl clash-display-font"
          data-aos="fade-up"
          id="get_started"
        >
          Trusted by Hundreds of Partners Across different Countries.
        </div>
      </div>
      <div
        className="sm:flex flex-wrap items-center grid grid-cols-2 gap-8  "
        data-aos="fade-up"
      >
        {/* <Image
          alt="Stripe logo"
          className="dark:bg-primary bg-transparent rounded-full px-3 py-1 w-20"
          radius="none"
          src={Stripe.src}
        /> */}
        <Image
          alt="ClearJunction logo"
          className="dark:bg-primary bg-transparent rounded-full px-3 py-1 w-[191.03px]"
          radius="none"
          src={ClearJunction.src}
        />
        <Image
          alt="Conduit logo"
          className="dark:bg-primary bg-transparent rounded-full px-3 py-1 w-[105.239px]"
          radius="none"
          src={Conduit.src}
        />
        <Image
          alt="Klasha logo"
          className="dark:bg-primary bg-transparent rounded-full px-3 py-1 w-[81.231px]"
          radius="none"
          src={Klasha.src}
        />
        <Image
          alt="Waza logo"
          className="dark:bg-primary bg-transparent rounded-full px-3 py-1 w-[80.818px]"
          radius="none"
          src={Waza.src}
        />
        <Image
          alt="flutterwave logo"
          className="dark:bg-primary bg-transparent rounded-full w-[173.762px]"
          radius="none"
          src={FlutterWave.src}
        />
        <Image
          alt="Fincra logo"
          className="dark:bg-primary bg-transparent rounded-full px-3 py-1 w-[89.6px]"
          radius="none"
          src={Fincra.src}
        />
        <Image
          alt="Fairmoney logo"
          className="dark:bg-primary bg-transparent rounded-full px-3 py-1 w-[144.991px]"
          radius="none"
          src={FairMoney.src}
        />
        <Image
          alt="Yellowcard logo"
          className="dark:bg-primary bg-transparent rounded-full px-3 py-1 w-[113.826px]"
          radius="none"
          src={YellowCard.src}
        />
        <Image
          alt="Obsidian logo"
          className="dark:bg-primary bg-transparent rounded-full px-3 py-1 w-[200px]"
          radius="none"
          src={Obsidian.src}
        />
        <Image
          alt="WeWire logo"
          className="dark:bg-primary bg-transparent rounded-full px-3 py-1 w-[118.125px]"
          radius="none"
          src={WeWire.src}
        />
        <Image
          alt="IvoryPay logo"
          className="dark:bg-primary bg-transparent rounded-full px-3 py-1 w-[108.162px]"
          radius="none"
          src={IvoryPay.src}
        />
        <Image
          alt="JuicyWay logo"
          className="dark:bg-primary bg-transparent rounded-full px-3 py-1 w-[99px]"
          radius="none"
          src={JuicyWay.src}
        />
        <Image
          alt="Graph logo"
          className="dark:bg-primary bg-transparent rounded-full px-3 py-1 w-[98.734px]"
          radius="none"
          src={Graph.src}
        />
        <Image
          alt="PayAza logo"
          className="dark:bg-primary bg-transparent rounded-full px-3 py-1 w-[110.5px]"
          radius="none"
          src={PayAza.src}
        />
        <Image
          alt="Grey logo"
          className="dark:bg-primary bg-transparent rounded-full px-3 py-1 w-[80.973px]"
          radius="none"
          src={Grey.src}
        />
        <Image
          alt="MultiGate logo"
          className="dark:bg-primary bg-transparent rounded-full px-3 py-1 w-[177.778px]"
          radius="none"
          src={MultiGate.src}
        />
      </div>
    </div>
  );
};

export default Partners;
