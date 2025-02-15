"use client";
import { Divider } from "@heroui/divider";
import { Spacer } from "@heroui/spacer";
import { Tab, Tabs } from "@heroui/tabs";
import { Icon } from "@iconify/react";
import React, { useState } from "react";

import { JoinUsBusinesses, JoinUsIndividual } from "@/components";

const JoinUs = () => {
  const [selectedTab, setSelectedTab] = useState<any>("individuals");

  const components = [
    {
      key: "individuals",
      component: <JoinUsIndividual />,
      color: "bg-info dark:bg-info-900",
    },
    {
      key: "businesses",
      component: <JoinUsBusinesses />,
      color: "bg-warning dark:bg-warning-900",
    },
    // { key: "nonprofits", component: <JoinUsNonprofit />, color: "bg-success" },
  ];

  const orderedComponents = components.sort((a, b) =>
    a.key === selectedTab ? -1 : b.key === selectedTab ? 1 : 0
  );

  return (
    <div
      className="page-max-width pt-36 flex items-start xl:flex-row flex-col justify-between gap-11  "
      id="services"
    >
      <div
        className={`${orderedComponents[0].color} p-4  lg:max-w-md rounded-2xl gap-5 flex lg:flex-col md:flex-row flex-col justify-between transition-all ease-in-out duration-300`}
      >
        <div data-aos="fade-up">
          <div className=" text-background  text-base font-medium inline-flex flex-col ">
            <div className="flex items-center gap-1">
              <Icon icon="ri:group-fill" />
              <span>Who do we serve?</span>
            </div>
            <Divider className="bg-background" />
          </div>
          <div className="clash-display-font text-3xl lg:text-5xl mt-4 font-medium text-background dark:text-background-200 lg:max-w-xs pr-3 leading-tight tracking-wider">
            Join us to Redefine the Way You Make Payments!
          </div>
        </div>
        <Spacer className="md:block hidden" y={36} />
        <div>
          <Divider
            className="bg-background lg:block hidden "
            orientation="horizontal"
          />

          <Tabs
            fullWidth
            aria-label="entity"
            className=" mt-4"
            classNames={{
              tabList:
                " flex sm:flex-row flex-col sm:px-1 px-5 sm:py-1 py-2 sm:bg-white/80  ",
              tabContent: "text-primary  text-sm font-medium ",
            }}
            radius="full"
            selectedKey={selectedTab}
            size="sm"
            // variant="light"
            onSelectionChange={setSelectedTab}
          >
            <Tab
              key="individuals"
              className="text-background text-sm font-normal lg:tracking-wide"
              title="Individuals"
            >
              We facilitate people transact around the globe with greater ease
              by providing them with advanced multi-currency accounts and
              bespoke payment solutions. Allowing people to effortlessly trade,
              pay, and connect around the world.
            </Tab>
            <Tab
              key="businesses"
              className="text-background text-sm font-normal lg:tracking-wide"
              title="Businesses"
            >
              We empower businesses with seamless payment solutions, enabling
              you to focus on growth and customer satisfaction. From secure
              transactions to tailored payment options, we help businesses
              thrive in an increasingly digital world.
            </Tab>
          </Tabs>
        </div>
      </div>

      <div
        className="md:flex-grow w-full relative lg:h-screen md:h-screen-80"
        data-aos="fade-up"
      >
        <div className="relative flex flex-col items-center pt-32 pb-10">
          <button
            className="absolute inset-x-0 top-10 px-3 transition-all duration-400 ease-in-out "
            onClick={() => setSelectedTab(orderedComponents[1].key)}
          >
            {orderedComponents[1].component}
          </button>
          <button
            className="absolute inset-x-0 top-0 transition-all duration-400 ease-in-out "
            onClick={() => setSelectedTab(orderedComponents[0].key)}
          >
            {React.cloneElement(components[0].component, {
              hideCaption: false,
            })}
          </button>
        </div>
      </div>
      <Spacer className=" " y={48} />
    </div>
  );
};

export default JoinUs;
