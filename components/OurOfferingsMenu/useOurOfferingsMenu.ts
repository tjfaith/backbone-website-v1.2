"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { useSelector } from "react-redux";
import { useDisclosure } from "@heroui/modal";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";

import { useIsMobile } from "@/app/customHooks";
import { RootState } from "@/app/store";
import { offerings } from "@/app/utils/content_data/offeringsData";

interface Props {
  setIsMenuOpen?: Dispatch<SetStateAction<boolean>>;
}
function useOurOfferingsMenu({ setIsMenuOpen }: Props) {
  const services = [...offerings];
  const { showLightNav } = useSelector((state: RootState) => state.settings);
  const [selectedMenu, seSelectedMenu] = useState(0);
  const [menuDetails, setMenuDetails] = useState(services[selectedMenu]);
  const [viewDetails, setViewDetails] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const isMobile = useIsMobile();
  const { theme } = useTheme();
  const isSSR = useIsSSR();

  const {
    isOpen: isOfferingsOpen,
    onOpen: openOfferings,
    onClose: closeOfferings,
  } = useDisclosure();

  const HandleSelectedMenu = (id: number) => {
    seSelectedMenu(id);
    setMenuDetails(services[id]);
  };

  const handleServiceClick = (id: any) => {
    HandleSelectedMenu(id);
    if (isMobile) setViewDetails(true);
  };

  const handleBackToServices = () => setViewDetails(false);

  const closeAllMenu = () => {
    setIsMenuOpen && setIsMenuOpen(false);
    setShowPopover(false);
    closeOfferings();
  };

  return {
    services,
    selectedMenu,
    menuDetails,
    isMobile,
    viewDetails,
    showLightNav,
    showPopover,
    isOfferingsOpen,
    theme,
    isSSR,
    closeOfferings,
    openOfferings,
    closeAllMenu,
    setShowPopover,
    setViewDetails,
    handleServiceClick,
    handleBackToServices,
    HandleSelectedMenu,
  };
}

export default useOurOfferingsMenu;
