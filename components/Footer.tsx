"use client";
import { Image } from "@heroui/image";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "@heroui/link";
import { Spacer } from "@heroui/spacer";

import { FullLogo } from "@/public/assets";
import { AppDownloadBtn, Dot } from "@/components";
// import Link from "next/link";

const Footer = () => {
  const [globalBankingMenu, setGlobalBankingMenu] = useState(false);
  const [financeMenu, setFinanceMenu] = useState(false);

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
              <div className="text-sm font-medium text-background/70 dark:text-primary/70 uppercase">
                Offerings
              </div>
              <div className=" space-y-2 flex flex-col">
                <div>
                  <button
                    className="gap-2 flex md:items-center "
                    onClick={() => setGlobalBankingMenu(!globalBankingMenu)}
                  >
                    <span className="text-base whitespace-nowrap ">
                      Global Banking
                    </span>
                    <span>
                      <Icon icon="ri:arrow-down-s-line" />
                    </span>
                  </button>
                  {globalBankingMenu && (
                    <div className=" ml-3 animate__animated animate__flipInX flex flex-col">
                      <Link
                        className="text-background/70 dark:text-primary/70"
                        href="/offerings/individual"
                      >
                        Personal Banking
                      </Link>
                      <Link
                        className="text-background/70 dark:text-primary/70"
                        href="/offerings/businesses"
                      >
                        Corporate Banking
                      </Link>
                    </div>
                  )}
                </div>
                <Link
                  className="text-background dark:text-primary"
                  href="/trade-finance"
                >
                  Trade Finance
                </Link>
                <Link
                  className="text-background dark:text-primary"
                  href="/investments"
                >
                  Investments
                </Link>
                <div>
                  <button
                    className="gap-2 flex md:items-center "
                    onClick={() => setFinanceMenu(!financeMenu)}
                  >
                    <span className="text-base whitespace-nowrap ">
                      Home Finance
                    </span>
                    <span>
                      <Icon icon="ri:arrow-down-s-line" />
                    </span>
                  </button>
                  {financeMenu && (
                    <div className="ml-3 animate__animated animate__flipInX flex flex-col">
                      <Link
                        className="text-background/70 dark:text-primary/70"
                        href="/finance/rent"
                      >
                        Rent Finance
                      </Link>
                      <Link
                        className="text-background/70 dark:text-primary/70"
                        href="/finance/property"
                      >
                        Property Finance
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="text-background dark:text-primary space-y-1">
              <div className="text-sm font-medium text-background/70 dark:text-primary/70 uppercase">
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
              <div className="text-sm font-medium text-background/70 dark:text-primary/70 uppercase">
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
              <div className="text-sm font-medium text-background/70 dark:text-primary/70 uppercase">
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
        <div className="flex flex-col">
          <div className="flex justify-between items-center w-full mb-1">
            <div className="text-sm font-medium text-background/70 dark:text-primary/70 uppercase">
              Contact
            </div>
            <div className="md:flex hidden items-center gap-5">
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
          <div className="flex items-start w-full gap-12 lg:flex-row flex-col">
            <div className="text-background dark:text-primary">
              <div className="flex items-center gap-2">
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
              <div className="flex items-center gap-2">
                <Dot />
                <div className="text-background dark:text-primary">
                  Phone Support
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Icon icon="circle-flags:us" />
                    <div className="text-background/70 dark:text-primary/70">
                      USA:
                    </div>
                  </div>
                  <Link
                    className="whitespace-nowrap text-background dark:text-primary hover:text-primary-200"
                    href={`tel:${process.env.NEXT_PUBLIC_USA_NUMBER?.replace(/\s+/g, "")}`}
                  >
                    {process.env.NEXT_PUBLIC_USA_NUMBER}
                  </Link>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Icon icon="circle-flags:uk" />
                    <div className="text-background/70 dark:text-primary/70">
                      UK:
                    </div>
                  </div>
                  <Link
                    className="whitespace-nowrap text-background dark:text-primary hover:text-primary-200"
                    href={`tel:${process.env.NEXT_PUBLIC_UK_NUMBER_1?.replace(/\s+/g, "")}`}
                  >
                    {process.env.NEXT_PUBLIC_UK_NUMBER_1}
                  </Link>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Icon icon="circle-flags:uk" />
                    <div className="text-background/70 dark:text-primary/70">
                      UK:
                    </div>
                  </div>
                  <Link
                    className="whitespace-nowrap text-background dark:text-primary hover:text-primary-200"
                    href={`tel:${process.env.NEXT_PUBLIC_UK_NUMBER_2?.replace(/\s+/g, "")}`}
                  >
                    {process.env.NEXT_PUBLIC_UK_NUMBER_2}
                  </Link>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Icon icon="circle-flags:ng" />
                    <div className="text-background/70 dark:text-primary/70">
                      NGN:
                    </div>
                  </div>
                  <Link
                    className="whitespace-nowrap text-background dark:text-primary hover:text-primary-200"
                    href={`tel:${process.env.NEXT_PUBLIC_NGN_NUMBER?.replace(/\s+/g, "")}`}
                  >
                    {process.env.NEXT_PUBLIC_NGN_NUMBER}
                  </Link>
                </div>
              </div>
              <div className="text-xs text-background/70 dark:text-primary/70">
                <div>9am - 5pm GMT +1</div>
                <div>SMS and Calls only.</div>
              </div>
            </div>

            <div className="text-background dark:text-primary w-full">
              <div className="flex items-center gap-2">
                <Dot />
                <div className="text-background dark:text-primary">Office</div>
              </div>
              <div className="w-full">
                <div className="flex items-start gap-1">
                  <div className="mt-1">
                    <Icon icon="circle-flags:us" />
                  </div>
                  <div>
                    <span className="text-background/70 dark:text-primary/70">
                      USA:
                    </span>{" "}
                    <span className="text-background dark:text-primary hover:text-primary-200">
                      8 The Green, STE A, Dover CA 19901
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-1">
                  <div className="mt-1">
                    <Icon icon="circle-flags:uk" />
                  </div>
                  <div>
                    <span className="text-background/70 dark:text-primary/70">
                      UK:
                    </span>{" "}
                    <span className="text-background dark:text-primary hover:text-primary-200">
                      85, Great Portland Street, First Floor, London, W1W 7NT
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-1">
                  <div className="mt-1">
                    <Icon icon="circle-flags:ng" />
                  </div>
                  <div>
                    <span className="text-background/70 dark:text-primary/70">
                      NGN:
                    </span>{" "}
                    <span className="text-background dark:text-primary hover:text-primary-200">
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
        <Spacer y={12} />
        {/* ROW 3 */}
        <div className="text-sm space-y-3">
          <div>
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
