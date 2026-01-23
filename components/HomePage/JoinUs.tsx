"use client";
import { Divider } from "@heroui/divider";
import { Tab, Tabs } from "@heroui/tabs";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import { countryPageContent } from "@/app/utils";
import { JoinUsBusinesses, JoinUsIndividual } from "@/components";
import { RootState } from "@/app/store";

const JoinUs = () => {
  const { selectedCountry } = useSelector((state: RootState) => state.settings);

  const [selectedTab, setSelectedTab] = useState<"individuals" | "businesses">(
    "individuals",
  );

  const components = {
    individuals: {
      component: <JoinUsIndividual />,
      color:
        countryPageContent[selectedCountry.code].homePage.joinUs
          .joinUsIndividual.tabBgColor,
    },
    businesses: {
      component: <JoinUsBusinesses />,
      color: "bg-warning dark:bg-warning-200",
    },
  };

  return (
    <div className="overflow-hidden bg-background-75 dark:bg-background-50 py-8">
      <div
        className="page-max-width grid xl:grid-cols-[28rem_1fr] gap-[45px]"
        id="services"
      >
        <div
          className={`${components[selectedTab]?.color} p-4 rounded-2xl max-w-md flex flex-col justify-between`}
        >
          <div data-aos="fade-up">
            <div className="text-background dark:text-foreground-50 text-base font-medium inline-flex flex-col">
              <div className="flex items-center gap-1">
                <Icon icon="ri:group-fill" />
                <span>Who do we serve?</span>
              </div>
              <Divider className="bg-background dark:bg-foreground-600" />
            </div>

            <div className="clash-display-font text-3xl lg:text-5xl pr-8 mt-4 font-medium text-background dark:text-foreground-50 lg:max-w-xs leading-[56px] tracking-[-1%]">
              Join us to Redefine the Way You Make Payments!
            </div>
          </div>

          <div>
            <Divider
              className="bg-background dark:bg-foreground-600 lg:block hidden"
              orientation="horizontal"
            />

            <Tabs
              fullWidth
              aria-label="entity"
              classNames={{
                tabList:
                  "flex sm:flex-row flex-col sm:px-1 px-5 py-4 bg-transparent",
                tabContent: `text-white dark:text-foreground-50 w-full text-sm font-medium rounded-full px-4 py-2 ${
                  selectedTab === "individuals"
                    ? countryPageContent[selectedCountry.code].homePage.joinUs
                        .joinUsIndividual.tabClass
                    : selectedTab === "businesses" &&
                      "group-data-[selected=true]:text-warning-500 group-data-[selected=true]:bg-white dark:group-data-[selected=true]:bg-background-100"
                }`,
                tab: "outline-none",
                panel: "min-h-[120px] flex items-start",
              }}
              radius="full"
              selectedKey={selectedTab}
              size="sm"
              onSelectionChange={(key) =>
                setSelectedTab(key as "individuals" | "businesses")
              }
            >
              <Tab
                key="individuals"
                className="text-background dark:text-foreground-200 py-0 text-sm font-normal lg:tracking-wide"
                title="Individuals"
              >
                We streamline payments for individuals, businesses, and
                nonprofits, creating possibilities you never thought possible.
              </Tab>

              <Tab
                key="businesses"
                className="text-background dark:text-foreground-200 py-0 text-sm font-normal lg:tracking-wide"
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

        <div className="h-[80vh] relative">
          <button
            className="transition-all duration-400 ease-in-out h-[80vh] w-[95%] absolute left-1/2 -translate-x-1/2 right-0 z-0 -bottom-5"
            onClick={() =>
              setSelectedTab(
                selectedTab === "individuals" ? "businesses" : "individuals",
              )
            }
          >
            {
              components[
                selectedTab === "individuals" ? "businesses" : "individuals"
              ].component
            }
          </button>

          <button
            className="transition-all duration-400 ease-in-out h-[80vh] w-full z-10"
            onClick={() =>
              setSelectedTab(
                selectedTab === "individuals" ? "businesses" : "individuals",
              )
            }
          >
            {components[selectedTab].component}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
