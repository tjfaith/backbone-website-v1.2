"use client";

import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Button } from "@heroui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import { Drawer, DrawerContent } from "@heroui/drawer";

import Dot from "./Dot";

const GlobalPopover = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  const regions = [
    { name: "Tanzania", flag: "emojione:flag-for-tanzania" },
    { name: "Ghana", flag: "emojione:flag-for-ghana" },
    { name: "Uganda", flag: "emojione:flag-for-uganda" },
    { name: "Kenya", flag: "emojione:flag-for-kenya" },
    { name: "Benin", flag: "emojione:flag-for-benin" },
    { name: "Burkina Faso", flag: "emojione:flag-for-burkina-faso" },
    { name: "Côte d'Ivoire", flag: "emojione:flag-for-cote-divoire" },
    { name: "Guinea-Bissau", flag: "emojione:flag-for-guinea-bissau" },
    { name: "Mali", flag: "emojione:flag-for-mali" },
    { name: "Niger", flag: "emojione:flag-for-niger" },
    { name: "Senegal", flag: "emojione:flag-for-senegal" },
    { name: "Togo", flag: "emojione:flag-for-togo" },
    { name: "Cameroon", flag: "emojione:flag-for-cameroon" },
    { name: "Chad", flag: "emojione:flag-for-chad" },
    {
      name: "Republic of the Congo",
      flag: "emojione:flag-for-congo-brazzaville",
    },
    { name: "South Africa", flag: "emojione:flag-for-south-africa" },
    { name: "Gabon", flag: "emojione:flag-for-gabon" },
    { name: "Equatorial Guinea", flag: "emojione:flag-for-equatorial-guinea" },
    { name: "Canada", flag: "emojione:flag-for-canada" },
  ];

  const comingSoon = [
    { name: "Brazil", flag: "emojione:flag-for-brazil" },
    { name: "Egypt", flag: "emojione:flag-for-egypt" },
    { name: "India", flag: "emojione:flag-for-india" },
    { name: "Indonesia", flag: "emojione:flag-for-indonesia" },
    { name: "Kenya", flag: "emojione:flag-for-kenya" },
    { name: "Mexico", flag: "emojione:flag-for-mexico" },
    { name: "Morocco", flag: "emojione:flag-for-morocco" },
    { name: "Philippines", flag: "emojione:flag-for-philippines" },
  ];

  const Trigger = (
    <Button
      className="flex bg-white items-center gap-2 text-primary rounded-full border-background-200 !px-2 border shadow-[0_0_6px_2px_rgba(0,0,0,0.05),_0_0_0_0.5px_#E1E4EA]"
      color="primary"
      variant="bordered"
      onPress={() => isMobile && setOpen(true)}
    >
      <Icon className="text-lg" icon="ri:global-line" />
      Global
      <Icon className="text-lg" icon="ri:arrow-down-s-line" />
    </Button>
  );

  const Content = (
    <div className="p-3 bg-white rounded-2xl md:border border-none box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.02), 0 0 7px 2px rgba(0, 0, 0, 0.03), 0 0 0 1px rgba(225, 228, 234, 0.50)">
      <p className="text-[11px] font-medium mb-3 tracking-[0.22px] leading-3">
        SELECT YOUR REGION
      </p>

      <div className="text-info-250 text-sm font-normal tracking-[-0.084px] rounded-full gap-1 inline-flex items-center py-1 px-3 leading-5 bg-info-250/10 mb-[6px]">
        <Icon className="text-[15px]" icon="ri:global-line" />
        <span className=" p-1">Global</span>
      </div>

      <div className="w-full h-px bg-[linear-gradient(to_right,#E1E4EA_50%,transparent_0%)] mb-[6px] bg-[length:10px_1px] bg-repeat-x" />

      <div className="grid sm:grid-cols-3 grid-cols-2 gap-3 text-sm mb-5">
        {regions.map((item) => (
          <button
            key={item.name}
            className="flex items-center gap-2 hover:text-primary transition text-left p-3"
            onClick={() => setOpen(false)}
          >
            <span className="text-lg">
              <Icon icon={item.flag} />
            </span>
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
        <p className="text-xs font-semibold text-default-500">COMING SOON</p>
      </div>

      <div className="grid grid-cols-3 gap-y-3 gap-x-4 text-sm text-default-500">
        {comingSoon.map((item) => (
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
          <DrawerContent className="rounded-t-3xl p-4">{Content}</DrawerContent>
        </Drawer>
      </>
    );
  }

  return (
    <Popover showArrow placement="bottom-start">
      <PopoverTrigger>{Trigger}</PopoverTrigger>
      <PopoverContent className="!items-start p-1 rounded-2xl border shadow-[0_6px_8px_0_rgba(0,0,0,0.02),_0_0_7px_2px_rgba(0,0,0,0.03),_0_0_0_1px_rgba(225,228,234,0.5)] bg-[#F5F7FA]">
        {Content}
      </PopoverContent>
    </Popover>
  );
};

export default GlobalPopover;
