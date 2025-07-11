"use client";
import { Icon } from "@iconify/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

const PolicyHeader = () => {
  const currentPath = usePathname();
  const router = useRouter();
  const [changeReady, setChangeReady] = useState(false);
  const { scrollY } = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs = [
    { href: "/policies", label: "Overview" },
    { href: "/policies/privacy-policy", label: "Privacy Policy" },
    { href: "/policies/aml-policy", label: "AML Policy" },
    { href: "/policies/service-terms", label: "Terms of Service" },
    { href: "/policies/cookie-policy", label: "Cookie Policy" },
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > window.innerHeight * 0.1) {
      setChangeReady(true);
    } else {
      setChangeReady(false);
    }
  });

  return (
    <>
      <header
        className={`${changeReady ? "border-t-2 bg-background text-primary bg-opacity-50 backdrop-blur-3xl transition-all ease-in-out duration-300 animate__animated animate__slideInDown" : "bg-transparent text-background dark:text-primary"} fixed top-14 z-30 w-full`}
      >
        <div className="w-full max-w-none px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center justify-center space-x-4 sm:space-x-8 min-w-0 flex-1">
              <div className="flex items-center space-x-2 min-w-0 text-primary  ">
                <Icon
                  className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0"
                  icon="lucide:building"
                />
                <span className="text-base sm:text-lg lg:text-xl font-normal truncate">
                  Resources
                </span>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex space-x-4 xl:space-x-6">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    className={`pb-1 text-sm font-medium transition-colors whitespace-nowrap ${
                      currentPath === tab.href
                        ? "text-info border-b-2 border-info"
                        : "text-primary hover:text-primary-800"
                    }`}
                    onClick={() => router.push(tab.href)}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-primary-200 hover:text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <Icon className="h-5 w-5" icon="lucide:x" />
              ) : (
                <Icon className="h-5 w-5" icon="lucide:menu" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div
          className={`${changeReady ? " border-t-2 bg-background text-primary bg-opacity-50 backdrop-blur-3xl transition-all ease-in-out duration-300 animate__animated animate__slideInDown" : "bg-transparent text-background dark:text-primary"} md:hidden border-b border-gray-200 bg-white w-full top-16 fixed z-30`}
        >
          <div className="px-3 sm:px-4 py-2 space-y-1">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentPath === tab.href
                    ? "bg-info-100 text-info"
                    : "text-primary-200 dark:text-background hover:text-primary hover:bg-gray-100"
                }`}
                onClick={() => {
                  router.push(tab.href);
                  setMobileMenuOpen(false);
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Tablet Navigation (visible on md screens) */}
      <div
        className={`${changeReady ? "border-t-2 bg-background text-primary bg-opacity-50 backdrop-blur-3xl transition-all ease-in-out duration-300 animate__animated animate__slideInDown" : "bg-transparent text-background dark:text-primary"} fixed z-30 w-full hidden md:block lg:hidden`}
      >
        <div className="flex justify-center items-center overflow-x-auto px-4 scrollbar-hide">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`flex-shrink-0 px-4 py-3 text-sm font-medium transition-colors ${
                currentPath === tab.href
                  ? "text-info border-b-2 border-info-600"
                  : "text-primary-200 hover:text-primary"
              }`}
              onClick={() => router.push(tab.href)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default PolicyHeader;
