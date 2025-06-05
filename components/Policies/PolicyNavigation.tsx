"use client";
import { Icon } from "@iconify/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const PolicyHeader = () => {
  const currentPath = usePathname();
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs = [
    { href: "/policies", label: "Overview" },
    { href: "/policies/privacy-policy", label: "Privacy Policy" },
    { href: "/policies/aml-policy", label: "AML Policy" },
    { href: "/policies/service-terms", label: "Terms of Service" },
    { href: "/policies/cookie-policy", label: "Cookie Policy" },
  ];

  return (
    <>
      <header className="">
        <div className="w-full max-w-none px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center justify-center space-x-4 sm:space-x-8 min-w-0 flex-1">
              <div className="flex items-center space-x-2 min-w-0 text-primary ">
                <Icon
                  className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0"
                  icon="lucide:building"
                />
                <span className="text-base sm:text-lg lg:text-xl font-normal truncate">
                  Backbone Privacy & Terms
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
        <div className="md:hidden border-b border-gray-200 bg-white">
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
      <div className="hidden md:block lg:hidden">
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
