"use client";
import { useState } from "react";
import { useIsMobile } from "@/app/customHooks";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { offerings } from "@/app/utils/dummy_data/offeringsData";

function useOurOfferingsMenu() {
  const services = offerings;
  const { showLightNav } = useSelector((state: RootState) => state.settings);
  const [selectedMenu, seSelectedMenu] = useState(0);
  const [menuDetails, setMenuDetails] = useState(services[selectedMenu]);
  const [viewDetails, setViewDetails] = useState(false);
  const isMobile = useIsMobile();
  const HandleSelectedMenu = (id: number) => {
    seSelectedMenu(id);
    setMenuDetails(services[id]);
  };

  const handleServiceClick = (id: any) => {
    HandleSelectedMenu(id);
    if (isMobile) setViewDetails(true);
  };

  const handleBackToServices = () => setViewDetails(false);

  return {
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
  };
}

export default useOurOfferingsMenu;
