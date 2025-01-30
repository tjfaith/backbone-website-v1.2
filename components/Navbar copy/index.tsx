'use client'
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";

import { BackboneLogo, CustomButton, ThemeSwitch } from "@/components";
import useNavbar from "./useNavbar";
import { Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from "@heroui/dropdown";
import { Icon } from "@iconify/react";
import { useState } from "react";

const Navbar = () => {
  const { navItems, navMenuItems, currentPath } = useNavbar();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control mobile menu visibility



  return (
    <HeroUINavbar
      isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}
      className="fixed w-full"
      classNames={{
        base: "bg-primary bg-opacity-80 backdrop-blur-md",
        wrapper: "max-w-screen-2xl mx-auto lg:px-28 px-6 bg-transparent py-6",
      }}
    >
      {/* Logo */}
      <NavbarBrand>
        <NextLink href="/">
          <BackboneLogo />
        </NextLink>
      </NavbarBrand>

      <NavbarContent className="sm:hidden text-background font-bold" justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      {/* Navbar Menu (Desktop) */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Dropdown
          classNames={{ content: "border border-foreground-200" }}
          radius="lg"
          shadow="sm"
        >
          <DropdownTrigger>
            <NavbarMenuItem className="text-white text-base flex items-center space-x-2">
              <span>Our Offerings</span>
              <Icon icon="ri:arrow-down-s-line" />
            </NavbarMenuItem>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Drop down"
            itemClasses={{
              base: "rounded-md text-default-500 transition-opacity text-foreground data-[hover=true]:bg-default-100 dark:data-[hover=true]:bg-default-50  data-[selectable=true]:focus:bg-default-50 data-[pressed=true]:opacity-70  data-[focus-visible=true]:ring-default-500",
            }}
          >
            <DropdownSection title="">
              <DropdownMenu aria-label="Our Offering">
                <DropdownItem key="new">Exchange</DropdownItem>
              </DropdownMenu>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
        {navItems.map((item, index) => (
          <NavbarItem isActive={currentPath === item.href} key={index}>
            <Link aria-current="page" href={item.href} className="text-white">
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right-aligned content (e.g., button) */}
      <NavbarContent justify="end" className="hidden sm:block">
        <NavbarItem>
          <CustomButton as={Link}>
            Get Started Now
          </CustomButton>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Navbar (hidden on large screens) */}
      <NavbarMenu

      >
        {/* <NavbarContent className="flex flex-col items-center gap-4 pt-4"> */}
        {navItems.map((item, index) => (
          <NavbarMenuItem isActive={currentPath === item.href} key={index}>
            <Link href={item.href} className="text-white">
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <Dropdown
          classNames={{ content: "border border-foreground-200" }}
          radius="lg"
          shadow="sm"
        >
          <DropdownTrigger>
            <NavbarMenuItem className="text-white text-base flex items-center space-x-2">
              <span>Our Offerings</span>
              <Icon icon="ri:arrow-down-s-line" />
            </NavbarMenuItem>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Drop down"
            itemClasses={{
              base: "rounded-md text-default-500 transition-opacity text-foreground data-[hover=true]:bg-default-100 dark:data-[hover=true]:bg-default-50  data-[selectable=true]:focus:bg-default-50 data-[pressed=true]:opacity-70  data-[focus-visible=true]:ring-default-500",
            }}
          >
            <DropdownSection title="">
              <DropdownMenu aria-label="Our Offering">
                <DropdownItem key="new">Exchange</DropdownItem>
              </DropdownMenu>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
        {/* </NavbarContent> */}
      </NavbarMenu>
    </HeroUINavbar>
  );
};

export default Navbar;
