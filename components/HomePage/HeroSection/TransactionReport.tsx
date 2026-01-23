import { Avatar, AvatarGroup } from "@heroui/avatar";
import { Icon } from "@iconify/react";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { RootState } from "@/app/store";
import { countryPageContent } from "@/app/utils";
import { updateShowAnnouncement } from "@/app/store/Features/settingsSlice";

const TransactionReport = () => {
  const dispatch = useDispatch();
  const { selectedCountry } = useSelector((state: RootState) => state.settings);

  return (
    <button
      className="
          cursor-pointer
          group
          animate__delay-2s animate__animated animate__fadeInUp animate__fast
          md:bg-background-100
          md:shadow-[inset_0px_-1px_4px_0px_rgba(0,0,0,0.06)]
          dark:bg-background-200
          dark:text-foreground-100
          dark:shadow-[inset_0px_-1px_4px_0px_rgba(0,0,0,0.5)]
          md:text-primary
          rounded-full
          px-4 py-3
          inline-flex
          md:flex-row
          flex-col
          items-center
          gap-3
          mb-4
          transition
          hover:shadow-md
          dark:hover:bg-background-300
        "
      onClick={() => {
        localStorage.removeItem("announcement_seen_v1");
        dispatch(updateShowAnnouncement(true));
      }}
    >
      <AvatarGroup size="sm" total={170}>
        <Avatar
          classNames={{ base: "bg-transparent" }}
          icon={
            // <Icon className="text-3xl" icon={"emojione:flag-for-nigeria"} />
            <Icon
              className="text-3xl"
              icon={
                countryPageContent[selectedCountry.code]?.homePage?.heroSection
                  ?.heroContent?.tagLogo
              }
            />
          }
        />
        <Avatar
          classNames={{ base: "bg-transparent" }}
          icon={
            <Icon className="text-3xl" icon="emojione:flag-for-united-states" />
          }
        />
        <Avatar
          classNames={{ base: "bg-transparent" }}
          icon={<Icon className="text-3xl" icon="circle-flags:gb" />}
        />
        <Avatar
          classNames={{ base: "bg-transparent" }}
          icon={<Icon className="text-3xl" icon="circle-flags:cn" />}
        />
      </AvatarGroup>

      <div className="text-center md:text-left text-sm md:text-base leading-tight dark:text-foreground-200">
        <span className="opacity-80">We processed </span>
        <b className="dark:text-foreground-50">
          $
          {Number(
            process.env.NEXT_PUBLIC_TOTAL_PROCESSED as string,
          ).toLocaleString()}
        </b>
        <span className="opacity-80">
          {" "}
          in transactions from 8th March, 2024, to 30th November, 2025. Join us
          on the road to $1B!
        </span>

        <div
          className="
              text-xs
              font-medium
              text-primary
              dark:text-info-600
              inline-flex
              items-center
              gap-1 ml-1
              opacity-80
              group-hover:opacity-100
              transition
            "
        >
          Read more
          <Icon
            className="text-sm transition-transform group-hover:translate-x-0.5"
            icon="solar:arrow-right-linear"
          />
        </div>
      </div>
    </button>
  );
};

export default TransactionReport;
