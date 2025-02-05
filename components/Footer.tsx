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
    <footer className="bg-primary text-background rounded-t-2xl">
      <div className="p-10 max-w-screen-2xl mx-auto lg:px-28 px-6 " id="footer">
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
              <div className="flex items-center gap-2">
                <Icon icon="ic:sharp-email" />
                <Link
                  className="transition-all duration-300 ease-in-out text-background hover:text-primary-200"
                  href="mailto:sales@usecotton.io"
                >
                  <span>sales@mybackbone.io</span>
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="ri:phone-fill" />
                <Link
                  className=" whitespace-nowrap text-background hover:text-primary-200"
                  href="tel:+2347035849521"
                >
                  +234 703 584 9521
                </Link>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-background space-y-4">
              <div className="text-xl font-medium ">Company</div>
              <ul className=" space-y-4">
                <li>
                  <Link className="text-background/70" href="/about-us">
                    {" "}
                    About us
                  </Link>
                </li>
                <li>
                  <Link className="text-background/70" href="/blog">
                    {" "}
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="text-background/70" href="/#support">
                    {" "}
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-background space-y-4">
              <div className="text-xl font-medium ">What we offer</div>
              <ul className=" space-y-4">
                <li>
                  <Link className="text-background/70" href="/#about_us">
                    Individuals
                  </Link>
                </li>
                <li>
                  <Link className="text-background/70" href="/blog">
                    {" "}
                    Businesses
                  </Link>
                </li>
                <li>
                  <Link className="text-background/70" href="/#support">
                    Nonprofits
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-background space-y-4">
              <div className="text-xl font-medium ">Legal</div>
              <ul className=" space-y-4">
                <li>
                  <Link className="text-background/70" href="/#">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-background/70" href="/#">
                    {" "}
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Spacer y={28} />
      <Divider className="bg-background" />
      <div className=" mt-4 max-w-screen-2xl mx-auto lg:px-28 px-6 pb-10 ">
        Copyright &copy; {new Date().getFullYear()}, Backbone Inc.
      </div>
    </footer>
  );
};

export default Footer;
