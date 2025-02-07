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
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  DropdownSection,
} from "@heroui/dropdown";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";

import useNavbar from "./useNavbar";

import { BackboneLogo, CustomButton, ThemeSwitch } from "@/components";

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
    handleMenuToggle,
  } = useNavbar();

  return (
    <HeroUINavbar
      className="fixed"
      classNames={{
        base: `md:px-0 px-2 lg:px-0 shadow-none  transition-all duration-300 ease-in-out ${changeReady ? "bg-background text-primary bg-opacity-50 backdrop-blur-3xl transition-all ease-in-out duration-300 animate__animated animate__slideInDown" : showLightNav ? "bg-transparent text-background dark:text-primary" : "bg-transparent"}`,
        wrapper: "md:px-0 px-4",
      }}
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      onMenuOpenChange={handleMenuToggle}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className=" max-w-fit">
          <NextLink href="/">
            <BackboneLogo
              showDarkLogo={changeReady || showLightNav === false}
            />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
                <Dropdown
                  key={index}
                  classNames={{ content: "border border-foreground-200" }}
                  radius="lg"
                  shadow="sm"
                >
                  <DropdownTrigger>
                    <Button
                      className={`${changeReady ? "text-primary" : showLightNav ? "text-background dark:text-primary" : "text-primary"} bg-transparent text-base px-1`}
                      endContent={<Icon icon="ri:arrow-down-s-line" />}
                      variant="flat"
                    >
                      {item.label}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Drop down"
                    itemClasses={{
                      base: "rounded-md  text-default-500 transition-opacity text-foreground data-[hover=true]:bg-default-100 dark:data-[hover=true]:bg-default-50  data-[selectable=true]:focus:bg-default-50 data-[pressed=true]:opacity-70  data-[focus-visible=true]:ring-default-500",
                    }}
                  >
                    <DropdownSection title="WHAT WE HAVE FOR YOU">
                      {item.menu.map((sub_item, index2) => (
                        <DropdownItem
                          key={index2}
                          startContent={<Icon icon={sub_item.icon} />}
                          textValue={sub_item.label}
                        >
                          <NextLink
                            className="space-x-4 flex flex-row items-center"
                            href={sub_item.href}
                          >
                            <span>{sub_item.label}</span>
                          </NextLink>
                        </DropdownItem>
                      ))}
                    </DropdownSection>
                  </DropdownMenu>
                </Dropdown>
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
          <CustomButton
            as={Link}
            fullWidth={false}
            href="/#get_start"
            variant={showLightNav && (theme === 'dark' || isSSR) ? "flat" : showLightNav ? "light" : "flat"}
          >
            Get Started Now
          </CustomButton>
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
                <Dropdown
                  classNames={{ content: "border border-foreground-200" }}
                  radius="lg"
                  shadow="sm"
                >
                  <DropdownTrigger>
                    <NavbarMenuItem className=" text-base flex items-center space-x-2">
                      {item.label}
                      <Icon icon="ri:arrow-down-s-line" />
                    </NavbarMenuItem>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Drop down"
                    itemClasses={{
                      base: "rounded-md  text-default-500 transition-opacity text-foreground data-[hover=true]:bg-default-100 dark:data-[hover=true]:bg-default-50  data-[selectable=true]:focus:bg-default-50 data-[pressed=true]:opacity-70  data-[focus-visible=true]:ring-default-500",
                    }}
                  >
                    <DropdownSection title="WHAT WE HAVE FOR YOU">
                      {item.menu.map((sub_item, index2) => (
                        <DropdownItem
                          key={index2}
                          startContent={<Icon icon={sub_item.icon} />}
                          textValue={sub_item.label}
                        >
                          <NextLink
                            className="space-x-4 flex flex-row items-center"
                            href={sub_item.href}
                            onClick={() => handleMenuToggle(false)}
                          >
                            <span>{sub_item.label}</span>
                          </NextLink>
                        </DropdownItem>
                      ))}
                    </DropdownSection>
                  </DropdownMenu>
                </Dropdown>
              )}
            </div>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};

export default Navbar;
