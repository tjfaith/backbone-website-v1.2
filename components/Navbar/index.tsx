"use client";
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
import NextLink from "next/link";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";

import useNavbar from "./useNavbar";

import {
  BackboneLogo,
  CustomButton,
  CustomDropdown,
  ThemeSwitch,
} from "@/components";
import { Card } from "@heroui/card";
import { OurOfferingsMenu } from "@/components";

const Navbar = () => {
  const {
    navItems,
    navMenuItems,
    isMenuOpen,
    currentPath,
    changeReady,
    showLightNav,
    theme,
    isSSR,
    setIsMenuOpen,
    handleMenuToggle,
  } = useNavbar();

  return (
    <HeroUINavbar
      className="fixed"
      classNames={{
        base: `xl:px-0 md:px-4 px-2 lg:px-0 shadow-none  transition-all duration-300 ease-in-out ${changeReady ? "bg-background text-primary bg-opacity-50 backdrop-blur-3xl transition-all ease-in-out duration-300 animate__animated animate__slideInDown" : showLightNav ? "bg-transparent text-background dark:text-primary" : "bg-transparent"}`,
        wrapper: "xl:px-0 md:px-8 px-4",
      }}
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      onMenuOpenChange={handleMenuToggle}
    >
      <NavbarContent className="!flex-initial !w-fit px-0">
        <NavbarBrand as="li" className="!p-0 !m-0">
          <NextLink href="/">
            <BackboneLogo
              showDarkLogo={changeReady || showLightNav === false}
            />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 w-full" justify="start">
        <ul className="hidden lg:flex items-center gap-4 justify-start ml-2">
          {navItems.map((item, index) => (
            <NavbarItem key={index}>
              {!item.menu ? (
                <NextLink
                  className={`${currentPath === item.href && " bg-background-200 text-primary rounded-xl"} py-2 px-3 transition-all duration-300 ease-in-out`}
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              ) : (
                <OurOfferingsMenu changeReady={changeReady} />
              )}
            </NavbarItem>
          ))}
        </ul>
        <NavbarItem className="hidden lg:flex bg-primary items-center justify-center rounded-full p-0.5 h-6 w-6">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex" justify="end">
        <NavbarItem>
          <Button
            className="text-primary"
            variant="flat"
            size="sm"
            as={Link}
            href={`${process.env.NEXT_PUBLIC_APP_URL}/sign-in`}
          >
            Log in
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            color="primary"
            className="text-background"
            size="sm"
            as={Link}
            href={`${process.env.NEXT_PUBLIC_APP_URL}/sign-up`}
          >
            Get Started Now
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent
        className={`${changeReady ? "text-primary" : showLightNav ? "text-background dark:text-primary" : "text-primary"} lg:hidden basis-1 pl-4  font-bold`}
        justify="end"
      >
        <NavbarItem className="bg-primary flex items-center justify-center rounded-full p-0.5 h-6 w-6">
          <ThemeSwitch />
        </NavbarItem>

        <NavbarMenuToggle />
      </NavbarContent>

      {/* mobile */}
      <NavbarMenu className=" bg-transparent px-2 overflow-hidden">
        <div className=" mt-5 flex flex-col gap-2 bg-opacity-50 backdrop-blur-lg p-5 rounded-xl bg-primary text-background animate__animated animate__flipInX">
          {navMenuItems.map((item, index) => (
            <div key={index}>
              {!item.menu ? (
                <NavbarMenuItem>
                  <Link
                    className="text-background"
                    href={item.href}
                    onPress={() => handleMenuToggle(false)}
                  >
                    {item.label}
                  </Link>
                </NavbarMenuItem>
              ) : (
                <OurOfferingsMenu />
              )}
            </div>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};

export default Navbar;
