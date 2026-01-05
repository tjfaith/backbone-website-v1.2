"use client";
import { Image } from "@heroui/image";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";

import { FullLogo } from "@/public/assets";
import { AppDownloadBtn, Dot } from "@/components";
// import Link from "next/link";

const Footer = () => {
  // const [globalBankingMenu, setGlobalBankingMenu] = useState(false);
  // const [financeMenu, setFinanceMenu] = useState(false);

  const [openGlobal, setOpenGlobal] = useState(false);
  const [openHome, setOpenHome] = useState(false);

  return (
    <footer className="bg-black dark:text-primary text-background py-16">
      <div className="page-max-width">
        {/* ROW 1 */}
        <div className="mb-10">
          <Image alt="full logo" className=" mb-4" src={FullLogo.src} />
          <div className="grid lg:grid-cols-6 gap-7">
            <div className=" col-span-2 pr-20 tracking-wide text-sm">
              We streamline payments for individuals, businesses, and
              nonprofits, creating possibilities you never thought possible.
            </div>
            <div className="text-background dark:text-primary space-y-1">
              <div className="text-sm font-medium text-[#99A0AE] uppercase">
                Offerings
              </div>
              <div className=" space-y-2 flex flex-col">
                {/* <Dropdown
                  className="text-primary bg-background-300 p-0"
                  radius="sm"
                >
                  <DropdownTrigger className="">
                    <button className="gap-2 flex md:items-center border-none focus:outline-none !active:outline-none outline-none">
                      <span className="text-base whitespace-nowrap ">
                        Global Banking
                      </span>
                      <span>
                        <Icon icon="ri:arrow-down-s-line" />
                      </span>
                    </button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Global banking"
                    className="p-0"
                    closeOnSelect={false}
                  >
                    <DropdownItem key="individual" textValue="individual">
                      <Link href="/offerings/individual">Personal Banking</Link>
                    </DropdownItem>
                    <DropdownItem key="corporate" textValue="business">
                      <Link href="/offerings/businesses">
                        Corporate Banking
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown> */}

                <button
                  onClick={() => setOpenGlobal((v) => !v)}
                  className="flex items-center gap-2 text-base focus:outline-none"
                >
                  <span>Global Banking</span>
                  <Icon
                    icon="ri:arrow-down-s-line"
                    className={`transition-transform ${
                      openGlobal ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {/* dnew  */}
                {openGlobal && (
                  <div className="ml-4 flex flex-col space-y-2">
                    <Link
                      className="text-background/80 dark:text-primary"
                      href="/offerings/individual"
                    >
                      Personal Banking
                    </Link>
                    <Link
                      className="text-background/80 dark:text-primary"
                      href="/offerings/businesses"
                    >
                      Corporate Banking
                    </Link>
                  </div>
                )}

                <Link
                  className="text-background dark:text-primary"
                  href="/offerings/finance/trade"
                >
                  Trade Finance
                </Link>
                <Link
                  className="text-background dark:text-primary"
                  href="/offerings/investments"
                >
                  Investments
                </Link>
                {/* <Dropdown
                  className="text-primary bg-background-300 p-0"
                  radius="sm"
                >
                  <DropdownTrigger className="">
                    <button className="gap-2 flex md:items-center border-none focus:outline-none !active:outline-none outline-none">
                      <span className="text-base whitespace-nowrap ">
                        Home Finance
                      </span>
                      <span>
                        <Icon icon="ri:arrow-down-s-line" />
                      </span>
                    </button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Global banking" className="p-0">
                    <DropdownItem key="rent" textValue="rent">
                      <Link href="/offerings/finance/rent">Rent Finance</Link>
                    </DropdownItem>
                    <DropdownItem key="property" textValue="property">
                      <Link href="/offerings/finance/property">
                        Property Finance
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown> */}

                <button
                  onClick={() => setOpenHome((v) => !v)}
                  className="flex items-center gap-2 text-base focus:outline-none"
                >
                  <span>Home Finance</span>
                  <Icon
                    icon="ri:arrow-down-s-line"
                    className={`transition-transform ${
                      openHome ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openHome && (
                  <div className="ml-4 flex flex-col space-y-2">
                    <Link
                      className="text-background/80 dark:text-primary"
                      href="/offerings/finance/rent"
                    >
                      Rent Finance
                    </Link>
                    <Link
                      className="text-background/80 dark:text-primary"
                      href="/offerings/finance/property"
                    >
                      Property Finance
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className="text-background dark:text-primary space-y-1">
              <div className="text-sm font-medium text-[#99A0AE] uppercase">
                Company
              </div>
              <div className="flex flex-col space-y-2">
                <Link
                  className="text-background dark:text-primary"
                  href="/about-us"
                >
                  About us
                </Link>
                <Link
                  className="text-background dark:text-primary"
                  href="/blog"
                >
                  Blog
                </Link>
              </div>
            </div>
            <div className="text-background dark:text-primary space-y-1">
              <div className="text-sm font-medium text-[#99A0AE] uppercase">
                Resources
              </div>
              <ul className=" space-y-2">
                <li>
                  <Link
                    className="text-background dark:text-primary"
                    href="/policies/privacy-policy"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-background dark:text-primary"
                    href="/policies/cookie-policy"
                  >
                    Cookie policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-background dark:text-primary"
                    href="/policies/service-terms"
                  >
                    {" "}
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-background dark:text-primary"
                    href="/policies/aml-policy"
                  >
                    AML Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-background dark:text-primary space-y-1">
              <div className="text-sm font-medium text-[#99A0AE] uppercase">
                Support
              </div>
              <ul className=" space-y-2">
                <li>
                  <Link
                    className="text-background dark:text-primary"
                    href="/contact-us"
                  >
                    Help Desk
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ROW 2 */}
        <div className="flex flex-col mb-12">
          <div className="flex justify-between items-center w-full mb-1">
            <div className="text-sm font-medium text-[#99A0AE] uppercase">
              Contact
            </div>
            <div className="md:flex hidden items-center gap-5">
              <Link
                isExternal
                className="text-background dark:text-primary text-2xl"
                href="https://www.linkedin.com/company/backbone-finance/?viewAsMember=true"
              >
                <Icon icon="mdi:linkedin" />
              </Link>
              <Link
                isExternal
                className="text-background dark:text-primary text-2xl"
                href="https://www.twitter.com/mybackbone_io"
              >
                <Icon icon="ri:twitter-x-fill" />
              </Link>
              <Link
                isExternal
                className="text-background dark:text-primary text-2xl"
                href="https://www.facebook.com/mybackbone_io"
              >
                <Icon icon="ri:facebook-circle-fill" />
              </Link>
              <Link
                isExternal
                className="text-background dark:text-primary text-2xl"
                href="https://www.instagram.com/mybackbone.io"
              >
                <Icon icon="mage:instagram-square" />
              </Link>
              <Link
                isExternal
                className="text-background dark:text-primary text-2xl"
                href="https://www.tiktok.com/@mybackbone.io?_t=8n0PIC0zKfm&_r=1"
              >
                <Icon icon="ri:tiktok-fill" />
              </Link>
            </div>
          </div>
          <div className="flex items-start w-full gap-12 lg:flex-row flex-col">
            <div className="text-background dark:text-primary space-y-1">
              <div className="flex items-center gap-1">
                <Dot />
                <div className="text-background dark:text-primary">
                  Live Chat & Email
                </div>
              </div>
              <Link
                className="dark:text-primary text-background hover:text-primary-200 text-base"
                href="mailto:hello@mybackbone.io"
              >
                <span>hello@mybackbone.io</span>
              </Link>
              <div>9am - 5pm GTM +1</div>
            </div>

            <div className="text-background dark:text-primary">
              <div className="flex items-center gap-1">
                <Dot timing={0.9} />
                <div className="text-background dark:text-primary">
                  Phone Support
                </div>
              </div>
              <div className="space-y-2 mb-2">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Icon icon="circle-flags:us" />
                    <div className="text-[#99A0AE] text-sm font-medium">
                      USA:
                    </div>
                  </div>
                  <Link
                    className="whitespace-nowrap text-background dark:text-primary hover:text-primary-200 text-base font-medium"
                    href={`tel:${process.env.NEXT_PUBLIC_USA_NUMBER?.replace(/\s+/g, "")}`}
                  >
                    {process.env.NEXT_PUBLIC_USA_NUMBER}
                  </Link>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Icon icon="circle-flags:uk" />
                    <div className="text-[#99A0AE] text-sm font-medium">
                      UK:
                    </div>
                  </div>
                  <Link
                    className="whitespace-nowrap text-background dark:text-primary hover:text-primary-200 text-base font-medium"
                    href={`tel:${process.env.NEXT_PUBLIC_UK_NUMBER_1?.replace(/\s+/g, "")}`}
                  >
                    {process.env.NEXT_PUBLIC_UK_NUMBER_1}
                  </Link>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Icon icon="emojione:flag-for-canada" />
                    <div className="text-[#99A0AE]  text-sm font-medium">
                      CAD:
                    </div>
                  </div>
                  <Link
                    className="whitespace-nowrap text-background dark:text-primary hover:text-primary-200 text-base font-medium"
                    href={`tel:${process.env.NEXT_PUBLIC_CANADA_NUMBER?.replace(/\s+/g, "")}`}
                  >
                    {process.env.NEXT_PUBLIC_CANADA_NUMBER}
                  </Link>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Icon icon="circle-flags:ng" />
                    <div className="text-[#99A0AE]">NGN:</div>
                  </div>
                  <Link
                    className="whitespace-nowrap text-background dark:text-primary hover:text-primary-200"
                    href={`tel:${process.env.NEXT_PUBLIC_NGN_NUMBER?.replace(/\s+/g, "")}`}
                  >
                    {process.env.NEXT_PUBLIC_NGN_NUMBER}
                  </Link>
                </div>
              </div>
              <div className="text-xs text-[#99A0AE] space-y-1 ">
                <div>9am - 5pm GMT +1</div>
                <div>SMS and Calls only.</div>
              </div>
            </div>

            <div className="text-background dark:text-primary w-full">
              <div className="flex items-center gap-1">
                <Dot timing={0.8} />
                <div className="text-background dark:text-primary">Office</div>
              </div>
              <div className="w-full space-y-2">
                <div className="flex items-start gap-1">
                  <div className="mt-1">
                    <Icon icon="circle-flags:us" />
                  </div>
                  <div>
                    <span className="text-[#99A0AE] text-sm font-medium">
                      USA:
                    </span>{" "}
                    <span className="text-background dark:text-primary font-medium">
                      8, The Green, Suite A, Dover, DE 19901, United States
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-1">
                  <div className="mt-1">
                    <Icon icon="circle-flags:uk" />
                  </div>
                  <div>
                    <span className="text-[#99A0AE] text-sm font-medium">
                      UK:
                    </span>{" "}
                    <span className="text-background dark:text-primary font-medium">
                      85, Great Portland Street, First Floor, London, W1W 7NT
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-1">
                  <div className="mt-1">
                    <Icon icon="circle-flags:uk" />
                  </div>
                  <div>
                    <span className="text-[#99A0AE] text-sm font-medium">
                      CAD:
                    </span>{" "}
                    <span className="text-background dark:text-primary font-medium">
                      3230 Yonge Street #4292 Toronto, ON M4N306 Canada
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-1">
                  <div className="mt-1">
                    <Icon icon="circle-flags:ng" />
                  </div>
                  <div>
                    <span className="text-[#99A0AE] text-sm font-medium">
                      NGN:
                    </span>{" "}
                    <span className="text-background dark:text-primary font-medium">
                      S.95, Tafawa Balewa Square, Race Course, Onikan, Lagos.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:hidden items-center gap-5 mt-5">
            <Link
              isExternal
              className="text-background dark:text-primary text-xl"
              href="https://www.linkedin.com/company/backbone-finance/?viewAsMember=true"
            >
              <Icon icon="mdi:linkedin" />
            </Link>
            <Link
              isExternal
              className="text-background dark:text-primary text-xl"
              href="https://www.twitter.com/mybackbone_io"
            >
              <Icon icon="ri:twitter-x-fill" />
            </Link>
            <Link
              isExternal
              className="text-background dark:text-primary text-xl"
              href="https://www.facebook.com/mybackbone_io"
            >
              <Icon icon="ri:facebook-circle-fill" />
            </Link>
            <Link
              isExternal
              className="text-background dark:text-primary text-xl"
              href="https://www.instagram.com/mybackbone.io"
            >
              <Icon icon="mage:instagram-square" />
            </Link>
            <Link
              isExternal
              className="text-background dark:text-primary text-xl"
              href="https://www.tiktok.com/@mybackbone.io?_t=8n0PIC0zKfm&_r=1"
            >
              <Icon icon="ri:tiktok-fill" />
            </Link>
          </div>
        </div>
        <Divider className="bg-[#181B25]" />
        {/* ROW 3 */}
        <div className="text-sm mt-12">
          <div className="mb-3">
            Copyright &copy; {new Date().getFullYear()}, Backbone Finance Inc
          </div>
          <div className="space-y-5 mb-6">
            <div>
              Backbone Finance Inc. is registered in the United States as a
              Money Services Business (MSB) with the United States Financial
              Crimes Enforcement Network (FinCEN) under the Bank Secrecy Act
              (BSA). MSB Registration Number: <b>31000299726075.</b>
            </div>
            <div>
              Our registration authorizes us to provide foreign exchange, money
              transfer, and payment service provider (PSP) activities in the US
              and the multiple jurisdictions covered. For verification, please
              visit the FinCEN MSB Registrant Search.
            </div>
          </div>
          <div className=" flex items-center gap-3">
            <AppDownloadBtn btnType={"ios"} />
            <AppDownloadBtn btnType={"android"} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
