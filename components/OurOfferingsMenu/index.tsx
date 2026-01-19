"use client";

import { Icon } from "@iconify/react";
import { Modal, ModalBody, ModalContent } from "@heroui/modal";
import { Drawer, DrawerContent } from "@heroui/drawer";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

import useOurOfferingsMenu from "./useOurOfferingsMenu";
import { offerings } from "@/app/utils/dummy_data/offeringsData";

interface Props {
  changeReady?: boolean;
  setIsMenuOpen?: Dispatch<SetStateAction<boolean>>;
}

const OurOfferingsMenu = ({ changeReady = false, setIsMenuOpen }: Props) => {
  const {
    selectedMenu,
    menuDetails,
    isMobile,
    viewDetails,
    showLightNav,
    showPopover,
    isOfferingsOpen,
    closeOfferings,
    openOfferings,
    closeAllMenu,
    setShowPopover,
    handleServiceClick,
    handleBackToServices,
  } = useOurOfferingsMenu({ setIsMenuOpen });

  const MenuContent = () => (
    <div
      className={`flex w-full ${
        isMobile ? "flex-col h-screen" : "flex-row items-stretch"
      }`}
    >
      {(!isMobile || !viewDetails) && (
        <div
          className={`space-y-4 lg:w-9/12 pr-4 py-1 pl-1 border-r dark:border-foreground-400/20 ${
            isMobile && "mt-10"
          }`}
        >
          {offerings.map((service) => (
            <button
              key={service.id}
              onClick={() => handleServiceClick(service.id)}
              className={`flex items-start gap-3 pr-10 py-2 pl-2 rounded-lg cursor-pointer transition-all duration-200 ${
                selectedMenu === service.id
                  ? "bg-background dark:bg-background-200 border dark:border-foreground-400/20 shadow-[0px_0px_0px_1px_#E1E4EA,_0px_4px_13px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
                  : "hover:bg-white dark:hover:bg-background-300 hover:shadow-sm"
              }`}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center">
                <Image
                  alt="service icon"
                  className="object-contain"
                  height={40}
                  width={40}
                  src={
                    selectedMenu === service.id
                      ? service.activeIcon
                      : service.icon
                  }
                />
              </div>

              <div className="min-w-0 text-left">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-base tracking-[-0.176px] leading-6 text-primary dark:text-foreground-50">
                    {service.title}
                  </h3>

                  {service.comingSoon && (
                    <Chip
                      className="
                        text-xs rounded-lg text-foreground-500 bg-white border-foreground-100
                        dark:bg-background-200 dark:text-foreground-200 dark:border-foreground-300/30
                        border-2 py-1 px-1 items-center gap-1 border-dashed
                      "
                      startContent={
                        <Icon
                          className="text-foreground-500 dark:text-foreground-400"
                          icon="ri:forbid-fill"
                        />
                      }
                    >
                      <span>Coming soon</span>
                    </Chip>
                  )}
                </div>

                <p className="text-sm text-primary-450 dark:text-foreground-300 leading-5 tracking-[-0.084px]">
                  {service.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}

      {(isMobile ? viewDetails : true) && (
        <div className="space-y-6 w-full relative h-full lg:h-auto mt-8 lg:mt-0">
          {isMobile && (
            <button
              className="text-sm text-primary dark:text-info-500 hover:dark:text-info-400 pl-4 underline mb-3 flex items-center gap-1 absolute -top-5"
              onClick={handleBackToServices}
            >
              <Icon icon="ri:arrow-left-s-line" />
              Back to services
            </button>
          )}

          <div className="pb-3 mt-3 relative space-y-6 pl-5 pr-16 min-h-[40vh]">
            {menuDetails.details.map((value, index) => (
              <div key={index}>
                <div className="text-primary text-base font-semibold dark:text-foreground-100 tracking-[-0.176px] leading-6 mb-1 animate__animated animate__fadeIn">
                  {value.title}
                </div>

                <div className="text-primary-450 font-normal mb-2 text-sm leading-5 tracking-[-0.084px] dark:text-foreground-300 animate__animated animate__fadeIn">
                  {value.description}
                </div>

                {value.link && (
                  <Link
                    className="text-sm text-primary dark:text-info-500 hover:dark:text-info-400 flex items-center gap-1 mt-1 underline animate__animated animate__fadeIn"
                    href={value.link}
                    onPress={closeAllMenu}
                  >
                    <span>{value.linkText}</span>
                    <Icon icon="ri:arrow-right-s-line" />
                  </Link>
                )}
              </div>
            ))}

            {menuDetails?.generalLink && (
              <Link
                className="text-sm text-primary dark:text-info-500 hover:dark:text-info-400 flex items-center gap-1 underline mt-3 animate__animated animate__fadeIn"
                href={menuDetails.generalLink}
                onPress={closeAllMenu}
              >
                {menuDetails.generalLinkText}
                <Icon icon="ri:arrow-right-s-line" />
              </Link>
            )}

            <Image
              alt="cover icon"
              className="ml-auto absolute -bottom-44 right-0"
              src={menuDetails.coverIcon}
            />
          </div>
        </div>
      )}
    </div>
  );

  return isMobile ? (
    <>
      <Button
        className="text-base bg-transparent px-0 text-background lg:text-primary hover:text-primary"
        endContent={<Icon icon="ri:arrow-down-s-line" />}
        variant="light"
        onPress={() => {
          handleBackToServices();
          openOfferings();
        }}
      >
        Our Offerings
      </Button>

      <Drawer isOpen={isOfferingsOpen} onClose={closeOfferings}>
        <DrawerContent className="max-w-full bg-background-200 dark:bg-background-75 rounded-t-xl shadow-lg">
          <MenuContent />
        </DrawerContent>
      </Drawer>
    </>
  ) : (
    <>
      <button
        onClick={() => setShowPopover(true)}
        className={`${changeReady && "!text-primary"} flex items-center gap-1 text-base bg-transparent px-2 hover:text-primary dark:text-primary ${
          showLightNav ? "text-background" : "text-primary"
        }`}
      >
        <span>Our Offerings</span>
        <Icon icon="ri:arrow-down-s-line" />
      </button>

      <Modal
        isOpen={showPopover}
        onOpenChange={setShowPopover}
        size="5xl"
        placement="top"
        backdrop="blur"
        classNames={{
          closeButton: "z-10",
        }}
      >
        <ModalContent className="p-0 shadow-xl bg-background-200 dark:bg-background-75 border-2 dark:border-foreground-400/20 dark:shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
          <ModalBody className="p-0">
            <MenuContent />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default OurOfferingsMenu;
