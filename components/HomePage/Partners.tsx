import { Image } from "@heroui/image";
import React from "react";
import CountUp from "react-countup";

import {
  Stripe,
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
} from "@/public/assets";

const Partners = () => {
  return (
    <div className="page-max-width pb-16 pt-32 md:pt-48 space-y-10   bg-background dark:bg-background-200">
      <div className="">
        <div className="clash-display-font" data-aos="fade-up">
          <span className="text-primary text-5xl font-medium">
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
          className="text-primary text-2xl xl:text-5xl font-medium leading-tight max-w-4xl clash-display-font"
          data-aos="fade-up"
          id="get_started"
        >
          Trusted by Hundreds of Partners Across different Countries.
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-8 " data-aos="fade-up">
        <Image
          alt="Stripe logo"
          className="dark:bg-primary bg-transparent rounded-full px-3 py-1 w-20"
          radius="none"
          src={Stripe.src}
        />
        <Image
          alt="ClearJunction logo"
          className="dark:bg-primary bg-transparent rounded-full px-3 py-1 w-36"
          radius="none"
          src={ClearJunction.src}
        />
        <Image
          alt="Conduit logo"
          className="dark:bg-primary bg-transparent rounded-full px-3 py-1 w-28"
          radius="none"
          src={Conduit.src}
        />
        <Image
          alt="Klasha logo"
          className="dark:bg-primary bg-transparent rounded-full px-3 py-1 w-28"
          radius="none"
          src={Klasha.src}
        />
        <Image
          alt="Waza logo"
          className="dark:bg-primary bg-transparent rounded-full px-3 py-1 w-28"
          radius="none"
          src={Waza.src}
        />
        <Image
          alt="flutterwave logo"
          className="dark:bg-primary bg-transparent rounded-full w-52"
          radius="none"
          src={FlutterWave.src}
        />
        <Image
          alt="Fincra logo"
          className="dark:bg-primary bg-transparent rounded-full px-3 py-1 w-28"
          radius="none"
          src={Fincra.src}
        />
        <Image
          alt="Grey logo"
          className="dark:bg-primary bg-transparent rounded-full px-3 py-1 w-28"
          radius="none"
          src={Grey.src}
        />
        <Image
          alt="Yellowcard logo"
          className="dark:bg-primary bg-transparent rounded-full px-3 py-1 w-28"
          radius="none"
          src={YellowCard.src}
        />

        <Image
          alt="Obsidian logo"
          className="dark:bg-primary bg-transparent rounded-full px-3 py-1 w-36"
          radius="none"
          src={Obsidian.src}
        />

        <Image
          alt="IvoryPay logo"
          className="dark:bg-primary bg-transparent rounded-full px-3 py-1 w-28"
          radius="none"
          src={IvoryPay.src}
        />
        <Image
          alt="JuicyWay logo"
          className="dark:bg-primary bg-transparent rounded-full px-3 py-1 w-28"
          radius="none"
          src={JuicyWay.src}
        />
        <Image
          alt="WeWire logo"
          className="dark:bg-primary bg-transparent rounded-full px-3 py-1 w-28"
          radius="none"
          src={WeWire.src}
        />
        <Image
          alt="Graph logo"
          className="dark:bg-primary bg-transparent rounded-full px-3 py-1 w-28"
          radius="none"
          src={Graph.src}
        />
        <Image
          alt="PayAza logo"
          className="dark:bg-primary bg-transparent rounded-full px-3 py-1 w-28"
          radius="none"
          src={PayAza.src}
        />
      </div>
    </div>
  );
};

export default Partners;
