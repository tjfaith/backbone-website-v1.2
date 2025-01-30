"use client";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import { useState } from "react";
import { usePathname } from "next/navigation";

function useNavbar() {
  const { theme } = useTheme();
  const isSSR = useIsSSR();
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  };

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
  ];

  const navItems = [
    {
      label: "Our Offerings",
      menu: serviceMenu,
    },
    {
      label: "About us",
      href: "/about",
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
      href: "/about",
      menu: null,
    },
    {
      label: "Contact us",
      href: "/contact-us",
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
    handleMenuToggle,
  };
}
export default useNavbar;
