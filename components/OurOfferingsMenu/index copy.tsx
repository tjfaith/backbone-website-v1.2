"use client";

import { Icon } from "@iconify/react";
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { Drawer, DrawerContent } from "@heroui/drawer";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";
import Image from "next/image";
import useOurOfferingsMenu from "./useOurOfferingsMenu";
import { useDisclosure } from "@heroui/modal";

const OurOfferingsMenu = ({ changeReady = false }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    services,
    selectedMenu,
    menuDetails,
    isMobile,
    viewDetails,
    showLightNav,
    setViewDetails,
    handleServiceClick,
    handleBackToServices,
    HandleSelectedMenu,
  } = useOurOfferingsMenu();

  const MenuContent = () => (
    <div
      className={`flex w-full ${isMobile ? "flex-col h-screen" : "flex-row items-stretch"}`}
    >
      {(!isMobile || !viewDetails) && (
        <div
          className={`space-y-4 lg:w-9/12 pr-4 py-1 pl-1 border-r ${
            isMobile && "mt-10"
          }`}
        >
          {services.map((service) => (
            <button
              key={service.id}
              className={`flex items-start gap-3 p-2 rounded-lg cursor-pointer transition-all duration-200 ${
                selectedMenu === service.id
                  ? "bg-background dark:bg-background-100 shadow-[0px_0px_0px_1px_#E1E4EA,_0px_4px_13px_rgba(0,0,0,0.06)] border dark:border-foreground-700"
                  : "hover:bg-white dark:hover:bg-background-200 hover:shadow-sm"
              }`}
              onClick={() => handleServiceClick(service.id)}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center">
                {/* <Image
                  alt="service icon"
                  src={
                    selectedMenu === service.id
                      ? service.activeIcon
                      : service.icon
                  }
                /> */}

                <Image alt="service icon" src={service.icon} />
              </div>
              <div className="min-w-0 text-left">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-sm text-primary dark:text-primary">
                    {service.title}
                  </h3>
                  {service.comingSoon && (
                    <div className="text-xs rounded-lg text-foreground-600 bg-background border-foreground-100 dark:bg-background-300 dark:text-foreground-100 dark:border-foreground-200 border-2 py-1 px-2 flex items-center gap-1 border-dashed">
                      <Icon
                        className="text-foreground-300 dark:text-foreground-400"
                        icon="ri:forbid-fill"
                      />
                      <span>Coming soon</span>
                    </div>
                  )}
                </div>
                <p className="text-sm text-primary-400 dark:text-foreground-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}
      {/* {!isMobile && (
        <div className="h-full bg-red-500 flex-grow  ">
          hh
          <Divider
            orientation="vertical"
            className="bg-red-500-100 dark:bg-foreground-600 h-full"
          />
        </div>
      )} */}

      {(isMobile ? viewDetails : true) && (
        <div className="p-4 space-y-6 w-full relative h-full lg:h-auto mt-8 lg:mt-0">
          {isMobile && (
            <button
              onClick={handleBackToServices}
              className="text-sm text-primary dark:text-primary underline mb-3 flex items-center gap-1 absolute -top-5"
            >
              <Icon icon="ri:arrow-left-s-line" />
              Back to services
            </button>
          )}

          {menuDetails.details.map((value, index) => (
            <div
              className="mb-1 animate__animated animate__slideInUp"
              key={index}
            >
              <div className="text-primary text-sm dark:text-primary">
                {value.title}
              </div>
              <div className="text-primary-400 text-xs dark:text-foreground-300">
                {value.description}
              </div>
              {value.link && (
                <Link
                  className="text-sm text-primary dark:text-primary flex items-center gap-1 mt-1 underline"
                  href={value.link}
                >
                  <span>{value.linkText}</span>
                  <Icon icon="ri:arrow-right-s-line" />
                </Link>
              )}
            </div>
          ))}

          {menuDetails?.generalLink && (
            <Link
              className="text-sm text-primary dark:text-primary flex items-center gap-1 underline mt-3"
              href={menuDetails.generalLink}
            >
              {menuDetails.generalLinkText}
              <Icon icon="ri:arrow-right-s-line" />
            </Link>
          )}

          <Image
            className="absolute bottom-0 right-0 rounded-br-lg"
            src={menuDetails.coverIcon}
            alt="cover icon"
          />
        </div>
      )}
    </div>
  );

  return isMobile ? (
    <>
      <Button
        className={`text-base bg-transparent px-0 text-background  lg:text-primary hover:text-primary`}
        endContent={<Icon icon="ri:arrow-down-s-line" />}
        variant="light"
        onPress={() => {
          handleBackToServices();
          onOpen();
        }}
      >
        Our Offerings
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerContent className="max-w-full bg-background-200 dark:bg-background-100 rounded-t-xl shadow-lg">
          <MenuContent />
        </DrawerContent>
      </Drawer>
    </>
  ) : (
    <Popover
      offset={10}
      placement="bottom-start"
      size="sm"
      // className="shadow-[0px_15px_80px_rgba(0,0,0,0.12),_0px_0px_0px_1px_#E1E4EA] border-none rounded-xl"
    >
      <PopoverTrigger>
        <Button
          className={`${changeReady && "!text-primary"} text-base bg-transparent px-2  hover:text-primary dark:text-primary ${showLightNav ? "text-background" : "text-primary"}`}
          endContent={<Icon icon="ri:arrow-down-s-line" />}
          variant="light"
        >
          Our Offerings
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-5xl mx-auto shadow-xl p-0 bg-background-200 dark:bg-background-100 border-2 dark:border-foreground-600">
        <MenuContent />
      </PopoverContent>
    </Popover>
  );
};

export default OurOfferingsMenu;
