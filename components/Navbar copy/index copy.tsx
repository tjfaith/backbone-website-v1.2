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

const Navbar = () => {

  const { navItems, navMenuItems, currentPath } = useNavbar()
  return (
    <HeroUINavbar
      className="fixed"
      classNames={{
        base: "bg-primary bg-opacity-80 backdrop-blur-md",
        wrapper: " max-w-screen-2xl mx-auto lg:px-28 px-6 bg-transparent py-6",
      }}
    >
      <NavbarBrand>
        <NextLink href="/">
          <BackboneLogo />
        </NextLink>
      </NavbarBrand>
      <NavbarContent className=" hidden sm:flex gap-4 " justify="center">
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
              base: "rounded-md  text-default-500 transition-opacity text-foreground data-[hover=true]:bg-default-100 dark:data-[hover=true]:bg-default-50  data-[selectable=true]:focus:bg-default-50 data-[pressed=true]:opacity-70  data-[focus-visible=true]:ring-default-500",
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
        ))
        }
        {/* <NavbarItem key={"theme-switch"}>
          <ThemeSwitch />
        </NavbarItem> */}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <CustomButton as={Link}>
            Get Started Now
          </CustomButton>
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>


    // <HeroUINavbar maxWidth="xl" position="sticky">
    //   <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
    //     <NavbarBrand as="li" className="gap-3 max-w-fit">
    //       <NextLink href="/">
    //         <BackboneLogo />
    //       </NextLink>
    //     </NavbarBrand>
    //     <ul className="hidden lg:flex gap-4 justify-start ml-2">
    //       {navItems.map((item) => (
    //         <NavbarItem key={item.href}>
    //           <NextLink
    //             className={clsx(
    //               linkStyles({ color: "foreground" }),
    //               "data-[active=true]:text-primary data-[active=true]:font-medium",
    //             )}
    //             color="foreground"
    //             href={item.href}
    //           >
    //             {item.label}
    //           </NextLink>
    //         </NavbarItem>
    //       ))}
    //     </ul>
    //   </NavbarContent>

    //   <NavbarContent
    //     className="hidden sm:flex basis-1/5 sm:basis-full"
    //     justify="end"
    //   >
    //     <NavbarItem className="hidden sm:flex gap-2">

    //       <ThemeSwitch />
    //     </NavbarItem>

    //   </NavbarContent>

    //   <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">

    //     <ThemeSwitch />
    //     <NavbarMenuToggle />
    //   </NavbarContent>

    //   <NavbarMenu>
    //     <div className="mx-4 mt-2 flex flex-col gap-2">
    //       {navMenuItems.map((item, index) => (
    //         <NavbarMenuItem key={`${item}-${index}`}>
    //           <Link
    //             color={
    //               index === 2
    //                 ? "primary"
    //                 : index === navMenuItems.length - 1
    //                   ? "danger"
    //                   : "foreground"
    //             }
    //             href="#"
    //             size="lg"
    //           >
    //             {item.label}
    //           </Link>
    //         </NavbarMenuItem>
    //       ))}
    //     </div>
    //   </NavbarMenu>
    // </HeroUINavbar>
  );
};

export default Navbar