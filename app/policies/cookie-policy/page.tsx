"use client";
import { Card } from "@heroui/card";
import { Icon } from "@iconify/react";
import React from "react";
import { motion } from "framer-motion";

import { useActiveSection } from "@/app/customHooks";

const CookiePolicy = () => {
  const sections = [
    { id: "cookie-what", label: "What Are Cookies?" },
    { id: "cookie-how", label: "How We Use Cookies" },
    { id: "cookie-types", label: "Types of Cookies We Use" },
    { id: "cookie-third-party", label: "Third-Party Cookies" },
    { id: "cookie-management", label: "Cookie Management" },
    { id: "cookie-updates", label: "Updates to This Policy" },
    { id: "cookie-contact", label: "Contact Information" },
  ];
  const activeId = useActiveSection(sections.map((s) => s.id));

  return (
    <div className="w-full max-w-none scroll-mt-44" id="cookie-what">
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 lg:gap-8">
        {/* Table of Contents - Sidebar */}
        <Card className="p-3 sm:p-4 h-fit xl:sticky top-20 order-2 xl:order-1 lg:mb-auto mb-20">
          <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center">
            <Icon className="h-4 w-4 sm:h-5 sm:w-5 mr-2" icon="lucide:cookie" />
            Table of Contents
          </h2>
          <nav className="relative space-y-1">
            {sections.map((item, index) => {
              const isActive = item.id === activeId;

              return (
                <a
                  key={item.id}
                  className="relative block px-3 py-2 rounded-md text-xs sm:text-sm font-medium text-primary-700 hover:bg-gray-100 dark:hover:text-background transition-colors"
                  href={`#${item.id}`}
                >
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-primary/10 dark:bg-background/20 rounded-md z-[-1]"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">{index + 1}</span>
                    <span className="leading-tight">{item.label}</span>
                  </div>
                </a>
              );
            })}
          </nav>
        </Card>

        {/* Content */}
        <div className="xl:col-span-3 order-1 xl:order-2">
          <div className="text-center mb-6 sm:mb-8 md:hidden block">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-primary-800 mb-3 sm:mb-4">
              Cookie Policy
            </h1>
          </div>

          <Card className="p-3 sm:p-4 md:p-6 lg:p-8">
            <div className="space-y-6 sm:space-y-8">
              {/* Introduction */}
              <section className="scroll-mt-44">
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  This Cookie Policy explains how Backbone Finance Inc.
                  (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses
                  cookies and similar tracking technologies on our website
                  (mybackbone.io).
                </p>
              </section>

              {/* 1. What Are Cookies? */}
              <section className="">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  1. What Are Cookies?
                </h2>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  Cookies are small text files placed on your device to collect
                  and store information when you visit a website.
                </p>
              </section>

              {/* 2. How We Use Cookies */}
              <section className="scroll-mt-44" id="cookie-how">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  2. How We Use Cookies
                </h2>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed mb-3">
                  We use cookies to:
                </p>
                <ul className="list-disc pl-4 sm:pl-6 space-y-1 text-sm sm:text-base text-primary-700">
                  <li>Improve site functionality</li>
                  <li>
                    Analyze traffic and user behavior (via Google Analytics or
                    similar tools)
                  </li>
                  <li>Remember your preferences</li>
                  <li>Enhance security and fraud prevention</li>
                </ul>
              </section>

              {/* 3. Types of Cookies We Use */}
              <section className="scroll-mt-44" id="cookie-types">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  3. Types of Cookies We Use
                </h2>
                <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-sm sm:text-base text-primary-700">
                  <li>
                    <strong>Essential Cookies:</strong> Necessary for website
                    functionality
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help us understand how
                    users interact with our site
                  </li>
                  <li>
                    <strong>Preference Cookies:</strong> Store user settings and
                    preferences
                  </li>
                </ul>
              </section>

              {/* 4. Third-Party Cookies */}
              <section className="scroll-mt-44" id="cookie-third-party">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  4. Third-Party Cookies
                </h2>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  We may allow third-party services (e.g., Google Analytics) to
                  place cookies to help us analyze usage patterns. These third
                  parties are responsible for their own privacy practices.
                </p>
              </section>

              {/* 5. Cookie Management */}
              <section className="scroll-mt-44" id="cookie-management">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  5. Cookie Management
                </h2>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  You can manage or delete cookies through your browser
                  settings. Please note that disabling cookies may affect site
                  functionality.
                </p>
              </section>

              {/* 6. Updates to This Policy */}
              <section className="scroll-mt-44" id="cookie-updates">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  6. Updates to This Policy
                </h2>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  We may update this Cookie Policy from time to time. The latest
                  version will always be available on our website.
                </p>
              </section>

              {/* Contact Information */}
              <section className="scroll-mt-44" id="cookie-contact">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Contact Information
                </h2>
                <p className="text-sm sm:text-base text-primary-700 leading-relaxed">
                  For more information, please contact us at:
                  hello@mybackbone.io
                </p>
              </section>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
