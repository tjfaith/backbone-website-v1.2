"use client";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useSelector } from "react-redux";

import { RootState } from "@/app/store";

function useNavbar() {
  const { theme } = useTheme();
  const isSSR = useIsSSR();
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { showLightNav } = useSelector((state: RootState) => state.settings);

  const handleMenuToggle = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  };

  const { scrollY } = useScroll();
  const [changeReady, setChangeReady] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > window.innerHeight * 0.1) {
      setChangeReady(true);
    } else {
      setChangeReady(false);
    }
  });

  const serviceMenu = [
    {
      label: "Individuals",
      icon: "ri:user-6-fill",
      href: "/offerings/individual",
    },
    {
      label: "Businesses",
      icon: "ri:building-3-fill",
      href: "/offerings/businesses",
    },
    ,
  ];

  const navItems = [
    {
      label: "Our Offerings",
      menu: serviceMenu,
    },
    {
      label: "About us",
      href: "/about-us",
      menu: null,
    },
    {
      label: "Blog",
      href: "/blog",
      menu: null,
    },
    {
      label: "Contact us",
      href: "/contact-us",
      menu: null,
    },
  ];
  const navMenuItems = [
    {
      label: "Our Offerings",
      menu: serviceMenu,
    },
    {
      label: "About us",
      href: "/about-us",
      menu: null,
    },
    {
      label: "Blog",
      href: "/blog",
      menu: null,
    },
    {
      label: "Contact us",
      href: "/contact-us",
      menu: null,
    },
  ];

  return {
    navItems,
    navMenuItems,
    isMenuOpen,
    theme,
    isSSR,
    currentPath,
    changeReady,
    showLightNav,
    setIsMenuOpen,
    handleMenuToggle,
  };
}
export default useNavbar;
