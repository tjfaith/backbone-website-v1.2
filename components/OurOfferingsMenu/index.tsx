"use client";

import { Icon } from "@iconify/react";
import { Modal, ModalBody, ModalContent } from "@heroui/modal";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import useOurOfferingsMenu from "./useOurOfferingsMenu";

import { offerings } from "@/app/utils/content_data/offeringsData";

interface Props {
  changeReady?: boolean;
  setIsMenuOpen?: Dispatch<SetStateAction<boolean>>;
}

/* ------------------ STABLE MENU CONTENT ------------------ */
const MenuContent = ({
  selectedMenu,
  menuDetails,
  isMobile,
  viewDetails,
  theme,
  isSSR,
  handleServiceClick,
  handleBackToServices,
  closeAllMenu,
}: any) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`flex w-full ${
        isMobile ? "flex-col h-screen" : "flex-row items-stretch"
      }`}
    >
      {(!isMobile || !viewDetails) && (
        <div
          className={`space-y-3 lg:w-9/12 sm:pr-4 pr-1 py-1 pl-1 border-r dark:border-foreground-400/20 ${
            isMobile && "mt-10"
          }`}
        >
          {offerings.map((service) => (
            <button
              key={service.id}
              className={`flex items-start gap-3 sm:pr-10 pr-3 py-3 pl-3 rounded-lg cursor-pointer transition-all duration-200 ${
                selectedMenu === service.id
                  ? "bg-background dark:bg-[#222635] shadow-[0px_0px_0px_1px_#E1E4EA,_0px_4px_13px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
                  : "hover:bg-white dark:hover:bg-[#222635]/20 hover:shadow-sm"
              }`}
              onClick={() => handleServiceClick(service.id)}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center">
                <Image
                  alt={`service icon-${service.id}`}
                  className="object-contain"
                  src={
                    !mounted
                      ? service.lightIcon
                      : theme === "light" || isSSR
                        ? service.lightIcon
                        : service.darkIcon
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
                          text-xs rounded-lg text-primary-400 bg-white  border-foreground-100
                          dark:bg-white/10 dark:text-foreground-200 dark:border-[#E1E4EA]/10
                          border-2 py-1 px-1 items-center gap-1 border-dashed
                        "
                      startContent={
                        <Icon
                          className="text-primary-400 dark:text-foreground-400"
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
              className="text-sm text-primary dark:text-white hover:dark:text-white/80 pl-4 underline mb-3 flex items-center gap-1 absolute -top-5"
              onClick={handleBackToServices}
            >
              <Icon icon="ri:arrow-left-s-line" />
              Back to services
            </button>
          )}

          <div className="pb-3 mt-3 relative space-y-6 pl-5 sm:pr-16 pr-5 min-h-[40vh]">
            {menuDetails.details.map((value: any, index: number) => (
              <div key={index}>
                <div className="text-primary text-base font-semibold dark:text-foreground-100 tracking-[-0.176px] leading-6 mb-1 animate__animated animate__fadeIn">
                  {value.title}
                </div>

                <div className="text-primary-450 font-normal mb-2 text-sm leading-5 tracking-[-0.084px] dark:text-foreground-300 animate__animated animate__fadeIn">
                  {value.description}
                </div>

                {value.link && (
                  <Link
                    className="text-sm text-primary dark:tex-white hover:dark:text-white/80 flex items-center gap-1 mt-1 underline animate__animated animate__fadeIn"
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
                className="text-sm text-primary dark:text-white hover:dark:text-white/80 flex items-center gap-1 underline mt-3 animate__animated animate__fadeIn"
                href={menuDetails.generalLink}
                onPress={closeAllMenu}
              >
                {menuDetails.generalLinkText}
                <Icon icon="ri:arrow-right-s-line" />
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// MenuContent.displayName = "MenuContent";

/* ------------------ MAIN COMPONENT ------------------ */
const OurOfferingsMenu = ({ changeReady = false, setIsMenuOpen }: Props) => {
  const menu = useOurOfferingsMenu({ setIsMenuOpen });

  return (
    <>
      <button
        className={`${changeReady && "!text-primary"} flex items-center gap-1 text-base bg-transparent px-2 hover:text-primary dark:text-primary ${
          menu.showLightNav ? "text-background" : "text-primary"
        }`}
        onClick={() => menu.setShowPopover(true)}
      >
        <span>Our Offerings</span>
        <Icon icon="ri:arrow-down-s-line" />
      </button>

      <Modal
        isDismissable
        backdrop="blur"
        classNames={{ closeButton: "z-10" }}
        isOpen={menu.showPopover}
        placement="top"
        scrollBehavior={menu.isMobile ? "inside" : "normal"}
        size={menu.isMobile ? "full" : "5xl"}
        onOpenChange={menu.setShowPopover}
      >
        <ModalContent className="p-0 shadow-xl bg-background-200 dark:bg-[#181B25] dark:shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
          <ModalBody className="p-0">
            <MenuContent {...menu} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default OurOfferingsMenu;
