"use client";
import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";

import {
  BlogExtract,
  OfferingsCaption,
  IndividualOfferings,
  Partners,
  SendMoneyForm,
  WhyBackbone1,
  WhyBackbone2,
  WhyBackbone3,
} from "@/components";
import { setShowLightNav } from "@/app/store/Features/settingsSlice";

const Individual = () => {
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const isSSR = useIsSSR();

  useEffect(() => {
    dispatch(setShowLightNav(theme === "light" || isSSR ? false : true));
  }, [theme]);

  return (
    <>
      <div className="relative bg-[radial-gradient(circle_at_40%_50%,_var(--tw-gradient-stops))] md:bg-[radial-gradient(circle_at_70%_15%,_var(--tw-gradient-stops))] from-[#d2e8df]/90 dark:from-success-100/60 from-0% via-background dark:via-background-200  via-5% md:via-30% to-background dark:to-background-200 to-100%">
        <div className="w-full h-screen absolute bottom-0 bg-[radial-gradient(ellipse_at_50%_65%,_var(--tw-gradient-stops))] from-warning/15 from-0%  via-transparent via-30%  to-transparent to-100%  top-20" />
        <div className="page-max-width  min-h-screen ">
          <div className="flex xl:flex-row flex-col items-center xl:h-screen justify-between  pt-32 xl:pt-16 gap-16 ">
            <OfferingsCaption
              caption1={"Seamless"}
              caption2={"Payments"}
              caption3={"Limitless"}
              caption4={"Possibilities"}
            />
            <SendMoneyForm
              action={() =>
                window.open(
                  `${process.env.NEXT_PUBLIC_APP_URL}/welcome`,
                  "_blank",
                )
              }
              title={
                <div className="text-primary flex items-center space-x-1">
                  <Icon icon="ri:refresh-fill" />
                  <span>Swap</span>
                </div>
              }
            />
          </div>
        </div>
        <div className=" -mt-11">
          <Partners />
        </div>
      </div>
      <IndividualOfferings />
      <WhyBackbone1 />
      <WhyBackbone2 />
      <WhyBackbone3 />
      {/* <Testimonies /> */}
      <BlogExtract />
    </>
  );
};

export default Individual;
