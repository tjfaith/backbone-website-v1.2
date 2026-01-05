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
      color: "bg-info-250 dark:bg-info-900",
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
    <div className="bg-background-200">
      <div
        className="page-max-width bg-red-500 flex xl:flex-row flex-col justify-between gap-11 items-stretch"
        id="services"
      >
        <div
          className={`${orderedComponents[0].color} p-4 lg:max-w-md rounded-2xl gap-5 flex lg:flex-col md:flex-row flex-col justify-between transition-all ease-in-out duration-300 h-full `}
        >
          <div data-aos="fade-up">
            <div className=" text-background  text-base font-medium inline-flex flex-col ">
              <div className="flex items-center gap-1">
                <Icon icon="ri:group-fill" />
                <span>Who do we serve?</span>
              </div>
              <Divider className="bg-background" />
            </div>
            <div className="clash-display-font text-3xl lg:text-[58px] mt-4 font-medium text-background dark:text-background-200 lg:max-w-xs pr-3 leading-[56px] tracking-[-1%]">
              Join us to Redefine the Way You Make Payments!
            </div>
          </div>
          {/* <Spacer className="md:block hidden" y={36} /> */}
          <div>
            <Divider
              className="bg-background lg:block hidden "
              orientation="horizontal"
            />

            <Tabs
              fullWidth
              aria-label="entity"
              className=" mt-4 "
              classNames={{
                tabList:
                  " flex sm:flex-row flex-col sm:px-1 px-5 py-0 sm:bg-transparent  ",
                tabContent: `text-white  text-sm font-medium ${
                  selectedTab === "individuals"
                    ? "group-data-[selected=true]:text-[#1F7EAD]"
                    : selectedTab === "businesses" &&
                      "group-data-[selected=true]:text-[#FF7300]"
                }
                  `,
                tab: "py-5",
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
                We streamline payments for individuals, businesses, and
                nonprofits, creating possibilities you never thought possible.
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

        <div className="md:flex-grow w-full relative " data-aos="fade-up">
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
              {/* {React.cloneElement(components[0].component, {
                hideCaption: false,
              })} */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
