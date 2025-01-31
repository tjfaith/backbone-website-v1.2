"use client";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useMotionValueEvent, useScroll } from "framer-motion";

function useNavbar() {
  const { theme } = useTheme();
  const isSSR = useIsSSR();
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  };

  const { scrollY } = useScroll();
  const [changeReady, setChangeReady] = useState(
    currentPath === "/" ? false : true,
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > window.innerHeight * 0.27) {
      setChangeReady(true);
    } else {
      setChangeReady(currentPath === "/" ? false : true);
    }
  });

  useEffect(() => {
    if (changeReady === false && currentPath !== "/") {
      setChangeReady(true);
    }
  }, [currentPath]);
  const serviceMenu = [
    {
      label: "Individuals",
      icon: "ri:user-6-fill",
      href: "/#services",
    },
    {
      label: "Businesses",
      icon: "ri:building-3-fill",
      href: "/#services",
    },
    {
      label: "NoneProfit",
      icon: "ri:building-3-fill",
      href: "/#services",
    },
  ];

  const navItems = [
    {
      label: "Our Offerings",
      menu: serviceMenu,
    },
    {
      label: "About us",
      href: "/#about",
      menu: null,
    },
    {
      label: "Blog",
      href: "/blog",
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
      href: "/#about",
      menu: null,
    },
    {
      label: "Blog",
      href: "/blog",
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
    handleMenuToggle,
  };
}
export default useNavbar;
