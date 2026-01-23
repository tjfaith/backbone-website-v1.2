"use client";

import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Button } from "@heroui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import { Drawer, DrawerContent } from "@heroui/drawer";
import { useDispatch } from "react-redux";

import Dot from "./Dot";

import {
  getUserCountryClient,
  globalRegions,
  globalComingSoon,
} from "@/app/utils";
import { ContactServices } from "@/app/utils/services";
import { updateSelectedCountry } from "@/app/store/Features/settingsSlice";

const GlobalPopover = () => {
  const dispatch = useDispatch();
  const { useUpdateCountry } = ContactServices();
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { mutate: updateCountry } = useUpdateCountry();
  const [selectedCountry, setSelectedCountry] = useState<{
    name: string;
    flag: string;
    code: string;
  } | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  const changeCountry = (country: {
    name: string;
    flag: string;
    code: string;
  }) => {
    setSelectedCountry(country);
    updateCountry(country.code);
    dispatch(updateSelectedCountry(country));
    setOpen(false);
  };

  useEffect(() => {
    const code = getUserCountryClient();

    if (!code) return;

    const allCountries = [...globalRegions];

    const match = allCountries.find(
      (c) => c.code.toUpperCase() === code.toUpperCase(),
    );

    if (match) {
      setSelectedCountry(match);
    }
  }, []);

  const Trigger = (
    <Button
      className="
      flex bg-white dark:bg-background-100
      items-center gap-2
      text-primary dark:text-foreground-100
      rounded-full
      border border-background-200 dark:border-foreground-100/20
      !px-2
      shadow-[0_0_6px_2px_rgba(0,0,0,0.05),_0_0_0_0.5px_#E1E4EA]
      dark:shadow-[0_0_0_1px_rgba(255,255,255,0.06)]
    "
      color="primary"
      variant="bordered"
      onPress={() => isMobile && setOpen(true)}
    >
      {/* <Icon className="text-lg" icon="ri:global-line" />
      Global */}
      <Icon
        className="text-lg"
        icon={selectedCountry?.flag ?? "ri:global-line"}
      />
      {selectedCountry?.code ?? "Global"}
      <Icon className="text-lg" icon="ri:arrow-down-s-line" />
    </Button>
  );

  const Content = (
    <div
      className={`
        ${!isMobile && "rounded-2xl shadow-[0_6px_8px_0_rgba(0,0,0,0.02),_0_0_7px_2px_rgba(0,0,0,0.03),_0_0_0_1px_rgba(225,228,234,0.50)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.35)] overflow-y-auto  max-w-[33rem]"} p-7 bg-white dark:bg-background-75
    md:border border-none
    md:dark:border-foreground-100/10
  `}
    >
      <p className="text-[11px] font-medium mb-3 tracking-[0.22px] leading-3 text-primary dark:text-foreground-300">
        SELECT YOUR REGION
      </p>

      <div
        className="
    text-info-250
    text-sm font-normal tracking-[-0.084px]
    rounded-full gap-1 inline-flex items-center
    py-1 px-3 leading-5
    bg-info-250/10 dark:bg-info-500/15
    mb-[6px]
  "
      >
        <Icon className="text-[15px]" icon="ri:global-line" />
        <span className=" p-1">Global</span>
      </div>

      <div
        className="
    text-xs text-primary-450 dark:text-foreground-300
    font-normal leading-4
    p-3 rounded-xl
    bg-background-200 dark:bg-background-200
    mb-[6px]
  "
      >
        Multi-currency accounts are currently available in the countries listed
        below.
      </div>
      <div
        className="
    w-full h-px
    bg-[linear-gradient(to_right,#E1E4EA_50%,transparent_0%)]
    dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_50%,transparent_0%)]
    mb-[6px]
    bg-[length:10px_1px] bg-repeat-x
  "
      />

      <div className="grid sm:grid-cols-3 grid-cols-2 text-sm mb-5">
        {globalRegions.map((item) => (
          <button
            key={item.name}
            className={`
    flex items-center gap-2
    hover:text-primary dark:hover:text-info-500
    transition text-left
    p-3 tracking-[-0.084px] leading-5
    text-primary dark:text-foreground-200
        ${
          selectedCountry?.name === item.name
            ? "bg-[#EBF8FF] rounded-full dark:bg-[rgba(59,130,246,0.15)]"
            : ""
        }
`}
            onClick={() => changeCountry(item)}
          >
            <Icon className="text-lg" icon={item.flag} />
            {item.name}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 mb-3">
        <Dot
          className="border-info-250"
          innerClassName="bg-info-250"
          timing={0.8}
        />
        <p className="text-xs font-semibold text-default-500 dark:text-foreground-400 whitespace-nowrap">
          COMING SOON
        </p>
        <div
          className="
    w-full h-px
    bg-[linear-gradient(to_right,#E1E4EA_50%,transparent_0%)]
    dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_50%,transparent_0%)]
    bg-[length:10px_1px] bg-repeat-x
  "
        />
      </div>

      <div
        className="
    text-xs text-primary-450 dark:text-foreground-300
    font-normal leading-4
    p-3 rounded-xl
    bg-background-200 dark:bg-background-200
    mb-[6px]
  "
      >
        Multi-currency accounts are coming to these countries soon. We can still
        help you send and receive payments to and from them, and most countries
        worldwide, excluding sanctioned regions.
      </div>

      <div className="grid grid-cols-3 gap-y-3 gap-x-4 text-sm text-default-500 dark:text-foreground-400">
        {globalComingSoon.map((item) => (
          <div key={item.name} className="flex items-center gap-2 p-3">
            <span className="text-lg">
              <Icon icon={item.flag} />
            </span>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <>
        {Trigger}
        <Drawer
          isOpen={open}
          placement="bottom"
          size="full"
          onOpenChange={setOpen}
        >
          <DrawerContent className="rounded-t-3xl p-0">{Content}</DrawerContent>
        </Drawer>
      </>
    );
  }

  return (
    <Popover isOpen={open} placement="bottom-start" onOpenChange={setOpen}>
      <PopoverTrigger>{Trigger}</PopoverTrigger>

      <PopoverContent
        className="
    !items-start p-1 rounded-2xl border
    bg-[#F5F7FA] dark:bg-background-50
    border-background-200 dark:border-foreground-100/10
    shadow-[0_6px_8px_0_rgba(0,0,0,0.02),_0_0_7px_2px_rgba(0,0,0,0.03),_0_0_0_1px_rgba(225,228,234,0.5)]
    dark:shadow-[0_12px_30px_rgba(0,0,0,0.45)]
    max-h-[80vh] overflow-hidden
  "
      >
        <div className="max-h-[80vh] overflow-y-auto">{Content}</div>
      </PopoverContent>
    </Popover>
  );
};

export default GlobalPopover;
