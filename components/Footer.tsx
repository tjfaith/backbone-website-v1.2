import { Image } from "@heroui/image";
import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "@heroui/link";
import { Spacer } from "@heroui/spacer";
import { Divider } from "@heroui/divider";

import { Socials } from "@/components";
import { FullLogo } from "@/public/assets";

const Footer = () => {
  return (
    <footer className="dark:bg-background bg-primary dark:text-primary text-background rounded-t-2xl">
      <div className="p-10 page-max-width px-6 " id="footer">
        <div className=" flex lg:flex-row flex-col gap-8 justify-between">
          <div>
            <Image alt="full logo" className=" mb-4" src={FullLogo.src} />
            <div className=" text-sm font-medium mb-8 max-w-md ">
              We streamline payments for individuals, businesses, and
              nonprofits, creating possibilities you never thought possible.
            </div>
            <Socials />
            <div className=" space-y-5 mt-16">
              <div className="flex items-center gap-2">
                <Icon className="hidden sm:block" icon="ri:map-pin-fill" />{" "}
                <span>
                  S.95, Tafawa Balewa Square, Race Course, Onikan, Lagos.
                </span>
              </div>
              <div className="flex md:items-center gap-3 md:flex-row flex-col">
                <div className="flex items-center gap-2">
                  <Icon icon="ic:sharp-email" />
                  <Link
                    className="transition-all duration-300 ease-in-out dark:text-primary text-background hover:text-primary-200"
                    href="mailto:sales@mybackbone.io"
                  >
                    <span>sales@mybackbone.io</span>,
                  </Link>
                </div>

                <Link
                  className="transition-all md:mr-0 md:ml-0 ml-6 duration-300 ease-in-out dark:text-primary text-background hover:text-primary-200"
                  href="mailto:hello@mybackbone.io"
                >
                  <span>hello@mybackbone.io</span>
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="ri:phone-fill" />
                <Link
                  className=" whitespace-nowrap text-background dark:text-primary hover:text-primary-200"
                  href="tel:+2347035849521"
                >
                  +234 703 584 9521
                </Link>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-12">
            <div className="text-background dark:text-primary space-y-4">
              <div className="text-xl font-medium ">Company</div>
              <ul className=" space-y-4">
                <li>
                  <Link
                    className="text-background/70 dark:text-primary/70"
                    href="/about-us"
                  >
                    {" "}
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-background/70 dark:text-primary/70"
                    href="/blog"
                  >
                    {" "}
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-background/70 dark:text-primary/70"
                    href="/contact-us"
                  >
                    {" "}
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-background dark:text-primary space-y-4">
              <div className="text-xl font-medium ">What we offer</div>
              <ul className=" space-y-4">
                <li>
                  <Link
                    className="text-background/70 dark:text-primary/70"
                    href="/offerings/individual"
                  >
                    Individuals
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-background/70 dark:text-primary/70"
                    href="/offerings/businesses"
                  >
                    {" "}
                    Businesses
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-background dark:text-primary space-y-4">
              <div className="text-xl font-medium ">Legal</div>
              <ul className=" space-y-4">
                <li>
                  <Link
                    className="text-background/70 dark:text-primary/70"
                    href="/privacy-policy"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-background/70 dark:text-primary/70"
                    href="/cookie-policy"
                  >
                    Cookie policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-background/70 dark:text-primary/70"
                    href="/#"
                  >
                    {" "}
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-background/70 dark:text-primary/70"
                    href="/incorporation "
                  >
                    Incorporation
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-background dark:text-primary space-y-4">
              <div className="text-xl font-medium ">Compliance</div>
              <ul className=" space-y-4">
                <li>
                  <Link
                    className="text-background/70 dark:text-primary/70"
                    href="/license"
                  >
                    License
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-background/70 dark:text-primary/70"
                    href="/security"
                  >
                    Security
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-background/70 dark:text-primary/70"
                    href="/aml"
                  >
                    AML
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Spacer y={28} />
      <Divider className="bg-background dark:bg-primary" />
      <div className=" mt-4 page-max-width px-6 md:pb-10 pb-20 ">
        Copyright &copy; {new Date().getFullYear()}, Backbone Inc.
      </div>
    </footer>
  );
};

export default Footer;
